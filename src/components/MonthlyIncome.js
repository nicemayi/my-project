// MonthlyIncome.js
import { Line } from 'vue-chartjs'
export default LineChart.extend({
  props: [data, options],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})