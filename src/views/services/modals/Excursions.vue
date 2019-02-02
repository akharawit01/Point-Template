<template>
  <div>
    <b-modal ref="ModalExcursions" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title pt-1 pb-0" v-if="modalSetp !== 2">Details of the reservation</h1>
      <!-- Step 0 -->
      <b-form v-if="modalSetp === 0">
        <h4 class="text-center">Chef Choice-Cooking lesson</h4>
        <b-row class="mb-2 mt-5">
          <b-col cols="4">Guest name</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Date</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Number of adult</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Number of child/ children (4-11 Years)</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Pick up venue</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Special requirement</b-col>
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
        <h4 class="text-center">Chef Choice-Cooking lesson</h4>
        <b-row class="mt-5">
          <b-col cols="5" offset="1">Guest name</b-col>
          <b-col cols="6">Lorem ipsum dolor sit amet</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Date</b-col>
          <b-col cols="6">00/00/0000</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Number of adult</b-col>
          <b-col cols="6">02</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Number of child/ children (4-11 Years)</b-col>
          <b-col cols="6">02</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Pick up venue</b-col>
          <b-col cols="6">Lorem ipsum dolor sit amet</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Special requirement</b-col>
          <b-col cols="6">Lorem ipsum dolor sit amet</b-col>
        </b-row>
        <p class="mt-5">At present, the total of 2,400 points is now hold and will be deducted after you have received the confirmation letter from the Experience club</p>
        <ListPoint :items="items" />
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
import ListPoint from '@/components/molecules/ListPoint'
export default {
  name: 'ModalExcursions',
  components: {
    ListPoint
  },
  data () {
    return {
      items: [
        { point: '2,000', label: 'Point Now' },
        { point: '2,300', label: 'Tranfer point + fee' },
        { point: '4,000', label: 'Balance' }
      ],
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
      this.$refs.ModalExcursions.show()
    },
    hideModal() {
      this.modalSetp = 0
      this.$refs.ModalExcursions.hide()
    }
  }
}
</script>
