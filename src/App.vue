<template>
  <div id="app">
    <page-table />
    <description-show />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PageTable from './components/organisms/PageTable.vue'
import DescriptionShow from './components/organisms/DescriptionShow.vue'

@Component({
  components: { DescriptionShow, PageTable }
})
export default class App extends Vue {
}
</script>

<style>
</style>
