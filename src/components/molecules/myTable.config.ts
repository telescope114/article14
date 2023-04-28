export const pagination = {
  defaultPageSize: 10,
  pageSizeOptions: ['10', '20', '30', '40'],
  showSizeChanger: false,
  showQuickJumper: true,
  showTotal: function (total: string | number) {
    return (`共 ${total} 条记录`)
  }
}

export default {
  pagination
}
