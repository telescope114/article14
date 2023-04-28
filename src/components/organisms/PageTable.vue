<template>
  <div class="page-table">
    <my-table
      :columns="columns"
      :data-source="data"
    >
      <!-- 这里我还没研究为什么ant-design-vue怎么实现不通过解构获取值 -->
      <template  v-slot:others="{text, record}">
        <a-button @click="buttonClick(text, record)">操作</a-button>
      </template>
    </my-table>
  </div>
</template>

<script lang="ts">
import MyTable from '../molecules/MyTable.vue'
import { myTableColumns } from '../types/myTable'
import { Button as AButton, message } from 'ant-design-vue'

const columns: myTableColumns = [
  { key: 'name', value: '名称', type: 'string' },
  { key: 'status', value: '状态', type: 'badge' },
  { key: 'dateTime', value: '时间', type: 'dateTime' },
  { key: 'progress', value: '进度条', type: 'progress' },
  { key: 'others', value: '操作', type: 'others' }
]
const data: unknown = [
  { id: '1', name: '张三', status: '1', dateTime: new Date(), progress: 52 },
  { id: '2', name: '李四', status: '2', dateTime: new Date(), progress: 72 },
  { id: '3', name: '王五', status: '3', dateTime: new Date(), progress: 62 },
  { id: '4', name: '飞机', status: '1', dateTime: new Date(), progress: 22 },
  { id: '5', name: '火车', status: '0', dateTime: new Date(), progress: 32 },
  { id: '6', name: '轮船', status: '2', dateTime: new Date(), progress: 82 }
]
export default {
  name: 'PageTable',
  components: { MyTable, AButton },
  data: () => ({
    columns: columns,
    data: data
  }),
  methods: {
    buttonClick (text: unknown, record: unknown) {
      console.log(text)
      console.log(record)
      message.warning('这里啥功能都没有哦！')
    }
  }
}
</script>

<style scoped>
.page-table {
  height: 800px;
}
</style>
