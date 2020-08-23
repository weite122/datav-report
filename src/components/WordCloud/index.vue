<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" :extend="chartExtend"/>
</template>

<script>
import commonDataMixin from "@/mixins/commonDataMixin";

export default {
  mixins: [commonDataMixin],
  watch: {
    wordCloud() {
      const data = []
      this.wordCloud.forEach(item => {
        data.push({
          name: item.word,
          value: item.count
        })
        console.log(data);
      })
      this.chartData = {
        columns: ['name', 'value'],
        rows: data
      }
    }
  },
  data() {
    return {
      chartData: {},
      chartSettings: {
        color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)'],
        sizeMax: 15
      },
      chartExtend: {
        series: {
          drawOutOfBound: true
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>


