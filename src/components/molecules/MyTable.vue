<template>
  <a-table
    class="my-table"
    row-key="id"
    :loading="loading"
    :bordered="true"
    :columns="tableColumns"
    :data-source="dataSource"
    :pagination="pagination"
  >
    <template v-for="item of columns" v-slot:[item.key]="text, record">
      <slot :name="item.key" :text="text" :record="record"></slot>
    </template>
  </a-table>
</template>

<script lang="ts">
import { Table as ATable } from 'ant-design-vue'
import { columns } from '../types/myTable'
import { pagination } from './myTable.config'
import { setColumn } from '../hooks/myTable'
export default {
  name: 'MyTable',
  components: { ATable },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: () => false
    }
  },
  data: () => ({
    pagination
  }),
  computed: {
    tableColumns (vm: { columns: columns }) { // vm = this
      return vm.columns.map(setColumn)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
