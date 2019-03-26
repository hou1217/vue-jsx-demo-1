<template>
  <el-popover placement="top" width="160" v-model="visible">
    <slot name="content">
      <p>{{content}}</p>
    </slot>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="onCancelClick">{{cancelText}}</el-button>
      <el-button type="primary" size="mini" @click="onOkClick">{{okText}}</el-button>
    </div>
    <slot slot="reference" />
  </el-popover>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  props: {
    content: String,
    okText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    onOk: {
      type: Function,
      default: () => {},
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    onOkClick() {
      const result = this.onOk()
      if (result !== false) {
        this.hide()
      }
    },
    onCancelClick() {
      const result = this.onCancel()
      if (result !== false) {
        this.hide()
      }
    },
    hide() {
      this.visible = false
    },
  },
}
</script>

