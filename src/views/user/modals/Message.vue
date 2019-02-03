<template>
  <div>
    <b-modal ref="ModalMessage" size="lg" hide-footer="true" hide-header="true">
      <div>
        <h1 class="title title-border text-left pt-1 pb-1 mb-5">Reply</h1>
        <b-row>
          <b-col cols="3">Name</b-col>
          <b-col cols="9">Mr. devid Long</b-col>
        </b-row>
        <b-row>
          <b-col cols="3">Subject</b-col>
          <b-col cols="9">Point</b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col cols="3">Detail</b-col>
          <b-col cols="9">
            <div class="message-box">
              <div class="mbs-header">
                <span>Me</span>
                <span>11:11</span>
              </div>
              <p>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies.</p>
            </div>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col cols="3">Reply</b-col>
          <b-col cols="9">
            <b-form-textarea v-model="text"
                    :rows="3"
                    :max-rows="6" />
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col offset="3" cols="4">
            <b-button class="btn-mdf w-100" @click="hideModal">Send</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalMessage',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    showModal() {
      this.$refs.ModalMessage.show()
    },
    hideModal() {
      this.$refs.ModalMessage.hide()
    }
  }
}
</script>
