<template>
  <b-card :title="$t('Erros por API')">
    <div class="dashboard-line-chart">
      <bar-chart :data="barChartData" shadow />
    </div>
  </b-card>
</template>
<script>

import { ThemeColors } from '../../utils'
const colors = ThemeColors()

import BarChart from '../../components/Charts/Bar'
import LineChart from "../../components/Charts/Line";


import { lineChartData } from "../../data/charts";

export default {
  components: {
    "line-chart": LineChart,
    "bar-chart": BarChart
  },
  data() {
    return {
      lineChartData,
      barChartData : {
         labels: ['API 1', 'API 2', 'API 3'],
          datasets: [
            {
              label: 'GFT',
              borderColor: colors.themeColor1,
              backgroundColor: colors.themeColor1_10,
              data: [456, 479, 324],
              borderWidth: 2
            },
            {
              label: 'Itau',
              borderColor: colors.themeColor2,
              backgroundColor: colors.themeColor2_10,
              data: [364, 504, 605],
              borderWidth: 2
            }
          ]
      }
    };
  },
  methods: {
    refreshButtonClick() {
      console.log("refreshButtonClick");
    }
  }
};
</script>