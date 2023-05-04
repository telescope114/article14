<template>
  <div class="my-level">
    <a-badge :color="colorList[level]" :text="textList[level]" />
  </div>
</template>

<script lang="ts">
import { Badge as ABadge } from 'ant-design-vue'
export default {
  name: 'MyLevel',
  components: { ABadge },
  props: ['level'],
  data () {
    return {
      colorList: [
        '#363636', '#fadb14', '#faad14',
        '#fa8c16', '#eb2f96', '#eb2f96',
        '#fa541c', '#f5222d', '#ff0000'
      ],
      textList: [
        '远观山寺', '初窥门庭', '逐步适应',
        '筚路蓝缕', '深入探习', '小有成就',
        '初露锋芒', '渐入山巅', '从山皆小'
      ]
    }
  }
}
</script>

<style scoped>

</style>
