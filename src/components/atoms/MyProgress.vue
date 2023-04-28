<template>
  <div class="my-progress">
    <div class="left-title" v-if="leftTitle" :title="leftTitle">{{ leftTitle }}</div>
    <a-progress :percent="data" :strokeColor="{
        '0%': color,
        '100%': color,
    }">
    </a-progress>
  </div>
</template>

<script lang="ts">
import { Progress as AProgress } from 'ant-design-vue'
export default {
  name: 'MyProgress',
  components: { AProgress },
  props: ['leftTitle', 'rightTitle', 'rightColor', 'data', 'color']
}
</script>

<style lang="less" scoped>
.my-progress {
  display: flex;
  .left-title {
    width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  /deep/ .ant-progress {
    .ant-progress-bg {
      height: 11px!important;
    }
    .ant-progress-text {
      line-height: 1.5;
    }
  }
  .right-title {
    width: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
