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
    mounted() {
      wordcloud().then(data => console.log(data))
      screenData().then(data => console.log(data))
      mapScatter().then(data => console.log(data))
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
