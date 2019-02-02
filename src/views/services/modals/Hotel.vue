<template>
  <div>
    <b-modal ref="ModalHotel" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title pt-1 pb-0" v-if="modalSetp !== 2">veataioilns fofrraeisreprovrattiTorna</h1>
      <!-- Step 0 -->
      <b-form v-if="modalSetp === 0">
        <h4 class="text-center">Pool Suite</h4>
        <b-row class="mb-2 mt-5">
          <b-col cols="4">Arrival Date</b-col>
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
          <b-col cols="4">Departure Date</b-col>
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
          <b-col cols="4">Guest name</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Room type</b-col>
          <b-col cols="8">
            <b-row class="fnts-center">
              <b-col>Number of room(s)</b-col>
              <b-col>Number of adult</b-col>
              <b-col>Number of Children (4-11 years)</b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Club Superior</b-col>
          <b-col cols="8">
            <b-row>
              <b-col><b-form-input type="text" /></b-col>
              <b-col><b-form-input type="text" /></b-col>
              <b-col><b-form-input type="text" /></b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Premier Suite 2 bedrooms</b-col>
          <b-col cols="8">
            <b-row>
              <b-col><b-form-input type="text" /></b-col>
              <b-col><b-form-input type="text" /></b-col>
              <b-col><b-form-input type="text" /></b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Family Suite 2 bedrooms</b-col>
          <b-col cols="8">
            <b-row>
              <b-col><b-form-input type="text" /></b-col>
              <b-col><b-form-input type="text" /></b-col>
              <b-col><b-form-input type="text" /></b-col>
            </b-row>
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
        <h4 class="text-center">
          Car hire by hour (4 hours)
        </h4>
        <b-row class="mt-5">
          <b-col cols="5" offset="1">Hotel name</b-col>
          <b-col cols="6">Lorem ipsum dolor sit amet</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Guest name</b-col>
          <b-col cols="6">Lorem ipsum dolor sit amet</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Date of arrival</b-col>
          <b-col cols="6">11/01/2031</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Date of departure</b-col>
          <b-col cols="6">11/01/2031</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Total of night</b-col>
          <b-col cols="6">01</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Number of room(s)</b-col>
          <b-col cols="6">A02</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Room type</b-col>
          <b-col cols="6">Balcony Suite</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Number of adult</b-col>
          <b-col cols="6">02</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Number of children</b-col>
          <b-col cols="6">02</b-col>
        </b-row>
        <p class="mt-5">At present, the total of <strong>2,400 points</strong> is now hold and will be deducted after you have received the confirmation letter from the Experience club</p>
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
  name: 'ModalHotel',
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
      this.$refs.ModalHotel.show()
    },
    hideModal() {
      this.modalSetp = 0
      this.$refs.ModalHotel.hide()
    }
  }
}
</script>
