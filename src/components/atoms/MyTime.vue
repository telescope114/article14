<template>
  <div class="my-time">{{ show }}</div>
</template>

<script>
import moment from 'moment/moment'
export default {
  name: 'MyTime',
  props: ['time', 'format'],
  computed: {
    show () {
      const format = this.format || 'YYYY-MM-DD hh:mm:ss'
      return moment(this.time).format(format)
    }
  }
}
</script>

<style scoped>

</style>
