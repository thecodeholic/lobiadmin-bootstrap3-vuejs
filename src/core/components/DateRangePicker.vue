<template>
  <div><input :name="name" :class="classes"></div>
</template>

<script>
export default {
  name: "DateRangePicker",
  props: {
    name: String,
    classes: [String, Array],
    config: {
      type: Object,
      required: true
    }
  },
  watch: {
    config: {
      handler () {
        this.init()
      },
      deep: true
    }
  },
  methods: {
    init () {
      const self = this
      const $el = $(self.$el)
      $el.daterangepicker(this.config)
    }
  },
  mounted () {
    this.init()
    // input.on('apply.daterangepicker', function(ev, picker) {
    //   self.$emit('daterangechanged',picker);
    // });
  },
  updated () {
    console.log("updateddddddddddd")
  }
}
</script>

<style scoped>

</style>
