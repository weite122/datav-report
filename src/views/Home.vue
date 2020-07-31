<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
  import TopView from '../components/TopView/topView'
  import SalesView from '../components/SalesView/salesView'
  import BottomView from '../components/BottomView/bottomView'
  import MapView from '../components/MapView/mapView'

  export default {
    name: 'Home',
    components: {
      TopView,
      SalesView,
      BottomView,
      MapView
    }
  }
</script>

<style lang="scss">
 .home {
   width: 100%;
   height: 100%;
   padding: 20px;
   background: #eee;
   box-sizing: border-box;
 }
</style>
