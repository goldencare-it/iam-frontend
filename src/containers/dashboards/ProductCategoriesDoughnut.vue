<template>
  <b-card class="h-100" :title="$t('Total Geral')">
    <div class="dashboard-donut-chart">
      <doughnut-chart :data="doughnutChartData" shadow />
    </div>
  </b-card>
</template>
<script>
import DoughnutChart from "../../components/Charts/Doughnut";
import { doughnutChartData } from "../../data/charts";

export default {
  components: {
    "doughnut-chart": DoughnutChart
  },
  data() {
    return {
      doughnutChartData
    };
  }
};
</script>
