<template>
  <b-card :title="$t('Erros por Instituição')">
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
         labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
          datasets: [
            {
              label: 'GFT',
              borderColor: colors.themeColor1,
              backgroundColor: colors.themeColor1_10,
              data: [456, 479, 324, 569, 702, 600],
              borderWidth: 2
            },
            {
              label: 'Itau',
              borderColor: colors.themeColor2,
              backgroundColor: colors.themeColor2_10,
              data: [364, 504, 605, 400, 345, 320],
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