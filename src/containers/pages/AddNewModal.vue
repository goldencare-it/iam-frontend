<template>
  <b-modal
    id="modalright"
    ref="modalright"
    :title="$t('Novo usuário')"
    modal-class="modal-right"
  >
    <b-form>
      <b-form-group :label="$t('Usuário')">
        <b-form-input v-model="newItem.name" />
      </b-form-group>
      <b-form-group :label="$t('E-mail')">
        <b-form-input v-model="newItem.email" />
      </b-form-group>
      <b-form-group :label="$t('Senha')">

        <input type="password" class="form-control" v-model="newItem.password" />
      </b-form-group>
      <b-form-group :label="$t('Nome da organização')">
        <b-form-input v-model="newItem.organizationName" />
      </b-form-group>

      <!--
      <b-form-group :label="$t('Organização')">
        <v-select 
          :options="organizations" v-model="newItem.category" />
      </b-form-group>
      -->

    </b-form>

    <template slot="modal-footer">
      <b-button
        variant="outline-secondary"
        @click="hideModal('modalright')"
      >{{ $t('Cancelar') }}</b-button>
      <b-button variant="primary" @click="addNewItem()" class="mr-1">{{ $t('Salvar') }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import {
    mapGetters,
    mapActions
} from "vuex";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  components: {
    "v-select": vSelect
  },
  props: ["categories", "statuses"],
  data() {
    return {
      newItem: {
        name: "",
        category: "",
        description: "",
        status: ""
      },
      organizations : [
          {
            "value" : 1,
            "label": "GFT"
          },
          {
            "value" : 2,
            "label": "Itau"
          }
      ]
    };
  },
  methods: {
    ...mapActions([ "addNewUser"]),
    addNewItem() {
      console.log("adding item : ", this.newItem);

      const payload = this.newItem;
      this.addNewUser( payload ).then( () => {
        alert("Usuário adicionado com sucesso");

        this.hideModal("modalright");

        this.$router.push("/app/pages/product/thumb-list")
      })
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    }
  }
};
</script>

