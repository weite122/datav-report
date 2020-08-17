<template>
  <div class="home">
    <top-view/>
    <sales-view/>
    <bottom-view/>
    <map-view/>
  </div>
</template>

<script>
  import TopView from '../components/TopView/index'
  import SalesView from '../components/SalesView/index'
  import BottomView from '../components/BottomView/index'
  import MapView from '../components/MapView/index'
  import {wordcloud, screenData, mapScatter} from '../api'

  export default {
    name: 'Home',
    components: {
      TopView,
      SalesView,
      BottomView,
      MapView
    },
    methods: {
      getReportData(){
        return this.reportData
      },
      getWordCloud(){
        return this.wordCloud
      },
      getMapData(){
        return this.mapData
      }
    },
    data() {
      return {
        reportData: null,
        wordCloud: null,
        mapData: null
      }
    },
    provide(){
      return {
        getReportData: this.getReportData,
        getWordCloud: this.getWordCloud,
        getMapData: this.getMapData
      }
    },
    mounted() {
      wordcloud().then(data => this.wordCloud = data)
      screenData().then(data => this.reportData = data)
      mapScatter().then(data => this.mapData = data)
    }
  }
</script>

<style lang="scss">
  .home {
    width: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
