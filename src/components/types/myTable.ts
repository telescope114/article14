import { CreateElement } from 'vue/types/vue'

export type myTableColumn = {
  // 关键词， 如'name'之类的
  key: string
  // 展示文本， 如'名称'之类
  value: string
  // 展示类型，这里可以用枚举限制， 如展示'进度条'、'标签'、'徽标'
  type: string
  // 根据业务需要，请自己添加其他东西
  // width?: number
}

export type myTableColumns = myTableColumn[]
export type columns = myTableColumns

export type antTableColumn = {
  title: string
  dataIndex: string
  key: string
  ellipsis: boolean
  scopedSlots?: Record<string, string>
  customRender?: (text: any, record: any) => string | CreateElement
}

export type antTableColumns = antTableColumn[]

export default {}
