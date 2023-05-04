<template>
  <div class="description-show">
    <my-description
      :config="descriptionConfig"
      :value="descriptionInfo"
    />
  </div>
</template>

<script lang="ts">
import MyDescription from '../molecules/MyDescriptions.vue'

export default {
  name: 'DescriptionShow',
  components: { MyDescription },
  data () {
    return {
      descriptionConfig: [
        { label: '名称', value: 'name', span: 1 },
        { label: '类型', value: 'type', span: 1 },
        { label: '级别', value: 'level', span: 1 },
        { label: '创建时间', value: 'createTime', span: 1, method: 'dateTime' },
        { label: '次数', value: 'count', span: 1 },
        { label: '更新时间', value: 'updateTime', span: 1, method: 'dateTime' },
        { label: '描述', value: 'description', span: 2 }
      ],
      descriptionInfo: {
        name: '张三',
        type: '部长',
        level: '7',
        createTime: 1662476859719,
        count: 114514,
        updateTime: 1682476859719,
        description: '这是一个很牛的大佬，我说的是真的'
      }
    }
  }
}
</script>

<style scoped>

</style>
