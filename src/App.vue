<template>
  <div id="app">
    <page-table />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PageTable from '@/components/organisms/PageTable.vue'

@Component({
  components: { PageTable }
})
export default class App extends Vue {
}
</script>

<style>
</style>
