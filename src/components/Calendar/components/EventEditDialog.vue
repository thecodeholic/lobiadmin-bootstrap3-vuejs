<template>
  <modal v-model="opened" title="Add event" ref="modal">
    <form action>
      <div class="form-group">
        <label class="control-label">Event style</label>
        <div class="btn-group btn-group-justified btn-group-event-style" data-toggle="buttons">
          <label class="btn btn-primary active">
            <input type="radio" name="style" value="bg-primary" checked> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-success text-white">
            <input type="radio" name="style" value="bg-success"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-danger text-white">
            <input type="radio" name="style" value="bg-danger"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-info text-white">
            <input type="radio" name="style" value="bg-info"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-warning text-white">
            <input type="radio" name="style" value="bg-warning"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-gray text-white">
            <input type="radio" name="style" value="bg-gray"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-cyan text-white">
            <input type="radio" name="style" value="bg-cyan"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-purple text-white">
            <input type="radio" name="style" value="bg-purple"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-pink text-white">
            <input type="radio" name="style" value="bg-pink"> <i class="fa fa-check"></i>
          </label>
        </div>
      </div>

      <div class="form-group">
        <lobi-date-range-picker name="date_period" classes="form-control" :config="datePickerConfig"></lobi-date-range-picker>
      </div>
      <div class="form-group">
        <label class="checkbox lobicheck">
          <input type="checkbox" name="allday" v-model="eventDetails.allDay">
          <i></i> All day
        </label>
      </div>
      <div class="form-group">
        <label class="control-label">Event title</label>
        <input type="text" class="form-control" name="title" placeholder="Event title"/>
      </div>
      <div class="form-group">
        <label class="control-label">Event description</label>
        <textarea rows="3" class="form-control" name="desc"></textarea>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  name: "EventEditDialog",
  components: {
  },
  props: {
    opened: Boolean,
    eventDetails: {
      type: Object,
      default: () => {
        return {
          allDay: true
        }
      }
    }
  },
  watch: {
    eventDetails: {
      handler () {
        this.datePickerConfig.singleDatePicker = this.eventDetails.allDay;
      },
      deep: true
    }
  },
  data () {
    return {
      datePickerConfig: {
        singleDatePicker: this.eventDetails.allDay
      }
    }
  }
}
</script>

<style scoped>

</style>
