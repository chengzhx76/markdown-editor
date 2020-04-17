<template>
  <div class="mark-down">
    <textarea ref="area" v-model="value"></textarea>
  </div>
</template>

<script>
  // https://forum.vuejs.org/t/vue-2-and-simplemde/2707/7
  // https://github.com/F-loat/vue-simplemde/blob/HEAD/doc/configuration_zh.md
  import SimpleMDE from 'simplemde'
  export default {
    name: 'MarkDown',
    data() {
      return {
        value: '',
        mde: null
      }
    },
    created() {
    },
    mounted() {
      this.mde = new SimpleMDE({
        renderingConfig: {
            markedOptions: {
                sanitize: true
            }
        },
        element: this.$refs.area,
        spellChecker: false,
        status: false
      })
      this.mde.value(this.value)
      // var self = this
      // this.mde.codemirror.on('change', function() {
      //   self.$emit('input', self.mde.value())
      // })
    },
    watch: {
      value(newVal) { 
        this.mde.value(newVal) 
      } 
    },
    beforeDestroy() {
      this.mde.toTextArea()
    }
  }
</script>

<style scoped>
  @import '~simplemde/dist/simplemde.min.css'
</style>
