import { myTableColumn, antTableColumn } from '../types/myTable'
import { h } from 'vue'
import MyProgress from '../atoms/MyProgress.vue'
import MyBadge from '../atoms/MyBadge.vue'
import moment from 'moment/moment'

/** 将外层配置的列选项转化成 ant-table 能识别的column
 *
 * @param item: {myTableColumn}
 */
export const setColumn = (item: myTableColumn): antTableColumn => {
  const out: antTableColumn = {
    title: item.value,
    dataIndex: item.key,
    key: item.key,
    ellipsis: true
  }
  if (item.type === 'others') {
    out.scopedSlots = { customRender: item.key }
  } else {
    out.customRender = (text) => {
      // 对 type进行处理，这里做示例
      switch (item.type) {
        case 'progress':
          return h(MyProgress, {
            props: { data: text, color: '#18e87f' },
            domProps: {}
          })
        case 'badge':
          let color = '' // eslint-disable-line no-case-declarations
          let str = '' // eslint-disable-line no-case-declarations
          switch (text.toString()) {
            case '1':
              color = '#2db7f5'
              str = '正常'
              break
            case '2':
              color = '#fadb14'
              str = '下线'
              break
            case '3':
              color = '#f5222d'
              str = '错误'
              break
            default:
              color = '#414141'
              str = '未知'
          }
          return h(MyBadge, {
            props: { data: str, color: color },
            domProps: {}
          })
        case 'dateTime':
          return moment(text).format('YYYY-MM-DD hh:mm:ss')
        default:
          return text || '--'
      }
    }
  }
  return out
}

export default {}
