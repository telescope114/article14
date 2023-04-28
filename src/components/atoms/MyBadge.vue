<template>
  <a-badge
    class="my-badge"
    :color="color || '#2db7f5'"
    :text="data"
  />
</template>

<script>
import { Badge as ABadge } from 'ant-design-vue'
export default {
  name: 'MyBadge',
  components: { ABadge },
  props: ['data', 'color']
}
</script>

<style scoped>

</style>
