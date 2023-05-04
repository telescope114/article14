<template>
  <a-descriptions class="my-description" size="default" bordered :column="column" :title="title">
    <template v-for="(item, index) of config">
      <a-descriptions-item
        :key="index"
        :label="item.label"
        :span="item.span"
      >
        <my-level v-if="item.value === 'level'" :level="value[item.value]" />
        <my-time v-else-if="item.method === 'dateTime'" :time="value[item.value]" format="YYYY-MM-DD hh:mm:ss" />
        <div v-else v-html="value[item.value]" />
      </a-descriptions-item>
    </template>
  </a-descriptions>
</template>

<script lang="ts">
import {
  Descriptions,
  Descriptions as ADescriptions
} from 'ant-design-vue'
import MyLevel from '../atoms/MyLevel.vue'
import MyTime from '../atoms/MyTime.vue'
export default {
  name: 'MyDescription',
  components: { ADescriptions, ADescriptionsItem: Descriptions.Item, MyLevel, MyTime },
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Array,
      default: () => ([])
    },
    title: {
      type: String,
      default: () => '基本信息'
    },
    column: {
      type: Number,
      default: () => 4
    }
  }
}
</script>

<style scoped>
</style>
