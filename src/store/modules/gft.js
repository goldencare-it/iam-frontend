import axios from 'axios'
import { apiUrl } from '../../constants/config'

const baseUrl = "https://ic4akks3nf.execute-api.us-east-1.amazonaws.com/prod"

const state = {
  user : {
    "token" : ""
  }
}

const getters = {
  isLoadContacts: state => state.isLoadContacts

}

const mutations = {
  getContactsSuccess(state, payload) {
    state.isLoadContacts = true
    state.contacts = payload.contacts
    state.contactsSearchResult = payload.contacts
  },

  updatetoken( state, payload ){
    state.user.token = payload.token;
  }
}

const actions = {

    async authenticate( { commit, state }, { username, password } ){
        console.log("auth", username, password );

        let url = baseUrl + "/api/iam/v1/gft/user/authenticate"
        let payload = {
            username,
            password
        }

        const response = await axios.post( url, payload );
        if( response && response.data && response.data.token ){

            let token = response.data.token;

            console.log("token", token );
            console.log("state", state );

            //state.gft.user.token = token;

            commit("updatetoken", { token : token } )
        }

        console.log("response", response );


    },

    getUsers( {commit, state} ){

        return new Promise( async (resolve, reject ) => {

        
        let url = baseUrl + "/api/iam/v1/gft/user";
        let token = state.user.token;

        console.log("token", token, state );

        var config = {
            method: "get",
            url: url,
            headers: { 
              "Authorization": "Bearer " + token 
            }
        };
          
        axios(config)
          .then(function (response) {
            

            console.log("response data", response.data );

            let userList = response.data.userList;
            let list = [];

            for( let i = 0; i < userList.length; i++ ){

            let user = userList[i];

            let to = {
                "id": user.id,
                "title": user.name,
                "category": user.email,
                "status": user.organizationName || ""
            }

            list.push( to );
            }

            resolve( list );
            //return response.data;
          })
          .catch(function (error) {
            console.log(error);
          });

        });
    },

    addNewUser( { commit, state }, payload ){

        return new Promise( async(resolve, reject) =>{


            var data = JSON.stringify(payload);

            let url = baseUrl + "/api/iam/v1/gft/user";
            let token = state.user.token;

            console.log("token", token, state );

            var config = {
                method: "post",
                url: url,
                headers: { 
                "Authorization": "Bearer " + token 
                },
                data : data
            };
            
            axios(config).then(function (response) {
                resolve({});
            })
        })
    },

    searchContacts({ commit, state }, { userId, searchKey }) {
      if (searchKey.length > 0) {
        axios
          .get(`${apiUrl}/contacts?search=${searchKey}`)
          .then(r => r.data)
          .then(res => {
            if (res.status) {
              commit('getContactsSearchSuccess', { contacts: res.data.map(x => {
                return {
                  ...x,
                img : x.img.replace('profile-pic-','profiles/')
                }
              }), userId: userId })
            } else {
              commit('getContactsError', 'error:getContacts')
            }
          })
      } else {
        commit('getContactsSearchSuccess', { contacts: state.contacts, userId: userId })
      }
    }
  }

export default {
  state,
  getters,
  mutations,
  actions
}
