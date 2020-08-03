<template>
  <common-card
    title="累计订单量"
    value="322,354,24"
  >
    <template>
    <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">40,000,000</span>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from '../../mixins/commonCardMixin'

  export default {
    mixins: [commonCardMixin],
    methods: {
      getOptions() {
        return {
          xAxis: {
            type: 'category',
            show: false,
            boundaryGap: false
          },
          yAxis: {
            show: false
          },
          series: [{
            type: 'line',
            data: [620, 432, 220, 534, 790, 430, 220, 320, 534, 321, 830, 690, 530, 220, 620],
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }],
          grid: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
