<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" :extend="chartExtend"/>
</template>

<script>
  export default {
    data() {
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [{
            name: '黄焖鸡米饭',
            value: 100 * Math.random()
          }, {
            name: '沙县小吃',
            value: 100 * Math.random()
          }, {
            name: 'KFC',
            value: 100 * Math.random()
          }]
        },
        chartSettings: {
          color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)'],
          sizeMax: 25
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


