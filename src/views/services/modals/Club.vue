<template>
  <div>
    <b-modal ref="ModalClub" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title pt-1 pb-0" v-if="modalSetp !== 2">Details of reservation</h1>
      <!-- Step 0 -->
      <b-form v-if="modalSetp === 0">
        <h4 class="text-center">The House Lounge</h4>
        <b-row class="mb-2 mt-5">
          <b-col cols="4">Guest Name</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Date</b-col>
          <b-col cols="8">
            <b-input-group>
              <b-input-group-text slot="append">
                <font-awesome-icon icon="calendar" />
              </b-input-group-text>
              <date-picker v-model="date" :config="{format: 'DD/MM/YYYY'}"></date-picker>
            </b-input-group>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Time</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Number of person</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row>
          <b-col offset="4" cols="8" class="mt-4">
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="handleNext">Reserve</b-button>
          </b-col>
        </b-row>
      </b-form>
      <!-- Step 1 -->
      <div v-if="modalSetp === 1">
        <h4 class="text-center">
          Car hire by hour (4 hours)
        </h4>
        <b-row class="mt-5">
          <b-col cols="5" offset="1">Guest Name</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Date</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Time</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Number of person</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col cols="6">
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="handleNext">Reserve</b-button>
          </b-col>
          <b-col cols="6">
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="handlePre">Edit</b-button>
          </b-col>
        </b-row>
      </div>
      <!-- Step 1 -->
      <div v-if="modalSetp === 2">
        <h1 class="title pt-1 pb-0">Thank you!!</h1>
        <h4 class="text-center mt-4">
          Thank you for your reservation. Our Guest Experience Specialist will contact you and inform deduct point within 24 hours. Thank you
        </h4>
        <b-row class="mt-5" align-h="center">
          <b-col cols="6">
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="hideModal">Close</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalClub',
  data () {
    return {
      modalSetp: 0
    }
  },
  methods: {
    handleNext() {
      this.modalSetp+=1
    },
    handlePre() {
      this.modalSetp-=1
    },
    showModal() {
      this.$refs.ModalClub.show()
    },
    hideModal() {
      this.modalSetp = 0
      this.$refs.ModalClub.hide()
    }
  }
}
</script>
