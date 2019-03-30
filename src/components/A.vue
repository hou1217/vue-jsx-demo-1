<script lang="jsx">
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
  render() {
    return (
      <ElPopover placement="top" width="160" vModel={this.visible}>
        {this.$slots.content ? this.$slots.content : (
          <p>{this.content}</p>
        )}
        <div style="text-align: right; margin: 0">
          <ElButton size="mini" type="text" vOn:click={this.onCancelClick}>{this.cancelText}</ElButton>
          <ElButton type="primary" size="mini" vOn:click={this.onOkClick}>{this.okText}</ElButton>
        </div>
        <template slot="reference">{this.$slots.default}</template>
      </ElPopover>
    )
  }
}
</script>
