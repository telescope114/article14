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
import { setColumn } from '../hooks/myTable'

// 这个可以导出成组件的配置文件，方便组件调用
const pagination = {
  defaultPageSize: 10,
  pageSizeOptions: ['10', '20', '30', '40'],
  showSizeChanger: false,
  showQuickJumper: true,
  showTotal: function (total: string | number) {
    return (`共 ${total} 条记录`)
  }
}

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
