<template>
    <BarChart class="small-chart"/>
</template>
  
<script>
import BarChart from './ChartBar.vue'
  
export default {
    name: 'App',
    components: { BarChart }
}
</script>

<style scoped>
.small-chart {
  width: 150px;
  height: 50px;
}
</style>