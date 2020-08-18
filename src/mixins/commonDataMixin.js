function wrapperNumber(obj, key) {
  return obj && obj[key] ? format(obj[key]) : 0
}

function format(v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}

function wrapperPercentage(obj, key) {
  return obj && obj[key] ? `${obj[key]}%` : '0%'
}

function wrapperMoney(obj, key) {
  return obj && obj[key] ? `￥ ${format(obj[key])}` : '￥ 0.00'
}

function wrapperArray(obj, key) {
  return obj && obj[key] ? obj[key] : []
}

function wrapperOriginalNumber(obj, key) {
  return obj && obj[key] ? obj[key] : 0
}

export default {
  computed: {
    reportData() {
      return this.getReportData()
    },
    salesToday() {
      return wrapperMoney(this.reportData, 'salesToday')
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay() {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    orderToday() {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastDay() {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    orderTrend() {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    orderUser() {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    returnRate() {
      return wrapperPercentage(this.reportData, 'returnRate')
    },
    orderUserTrend() {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },
    orderUserTrendAxis() {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    userToday() {
      return wrapperNumber(this.reportData, 'userToday')
    },
    userTodayNumber() {
      return wrapperOriginalNumber(this.reportData, 'userToday')
    },
    userLastMonth() {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth')
    },
    userGrowthLastDay() {
      return wrapperNumber(this.reportData, 'userGrowthLastDay')
    },
    userGrowthLastMonth() {
      return wrapperNumber(this.reportData, 'userGrowthLastMonth')
    },

  },
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}