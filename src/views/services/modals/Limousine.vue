<template>
  <div>
    <button @click="showModal(2)">2</button>
    <button @click="showModal(3)">3</button>
    <b-modal ref="ModalLimousine" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title pt-1 pb-0" v-if="modalSetp !== 2">Reservation for car hire</h1>
      <!-- Step 0 -->
      <b-form v-if="modalSetp === 0">
        <h4 class="text-center">
          Car hire by hour (4 hours)<br />
          Points to redeem <strong>2,400 points</strong>
        </h4>
        <b-row class="mb-2 mt-5">
          <b-col cols="4">Date to use</b-col>
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
          <b-col cols="4">Pick up venue</b-col>
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
        <b-row class="mb-2">
          <b-col cols="4">Special requirement</b-col>
          <b-col cols="8">
            <b-form-textarea v-model="text"
              :rows="3"
              :max-rows="6" />
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
          <b-col cols="5" offset="1">Date to use</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Time</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Pick up venue</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Number of person</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Special requirement</b-col>
          <b-col cols="6">xxxxxxx</b-col>
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
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="hideModal(1)">Close</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <b-modal ref="ModalLimousineAir" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title pt-1 pb-0" v-if="modalSetp !== 2">Reservation for airport transfer</h1>
      <!-- Step 0 -->
      <b-form v-if="modalSetp === 0">
        <h4 class="text-center">
          Airport Transfer In<br />
          Points to redeem <strong>2,400 points</strong>
        </h4>
        <b-row class="mb-2 mt-5">
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
          <b-col cols="4">Airport name</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Arrival flight</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Arrival time</b-col>
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
        <b-row class="mb-2">
          <b-col cols="4">Where to go</b-col>
          <b-col cols="8">The New Concept</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Where to go (Other)</b-col>
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
          Airport Transfer In
        </h4>
        <b-row class="mt-5">
          <b-col cols="5" offset="1">Date</b-col>
          <b-col cols="6">00/00/0000.</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Airport name</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Arrival flight</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Arrival time</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Number of person</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Where to go</b-col>
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
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="hideModal(2)">Close</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <b-modal ref="ModalLimousineReser" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title pt-1 pb-0" v-if="modalSetp !== 2">Reservation for other</h1>
      <!-- Step 0 -->
      <b-form v-if="modalSetp === 0">
        <h4 class="text-center">
          Our Guest Experience Specialist will contact you<br />
          to confirm and number of point to redeem
        </h4>
        <b-row class="mb-2 mt-5">
          <b-col cols="4">Name of person</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Contact number</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Type of service</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Date to use</b-col>
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
          <b-col cols="4">Where to go</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Where to go</b-col>
          <b-col cols="8">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Time</b-col>
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
          <b-col cols="4">Number of person</b-col>
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
        <h4 class="text-center">
          Airport Transfer In
        </h4>
        <b-row class="mt-5">
          <b-col cols="5" offset="1">Name of person</b-col>
          <b-col cols="6">00/00/0000.</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Contact number</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Type of service</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Date to use</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Where to go</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Time</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Pick up venue</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Number of person</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Special requirement</b-col>
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
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="hideModal(3)">Close</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ListPoint from '@/components/molecules/ListPoint'
export default {
  name: 'ModalLimousine',
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
    showModal(type) {
      switch (type) {
        case 1:
          this.$refs.ModalLimousine.show()
          break;
        case 2:
          this.$refs.ModalLimousineAir.show()
          break;
        case 3:
          this.$refs.ModalLimousineReser.show()
          break;
        default:
          break;
      }
      
    },
    hideModal(type) {
      this.modalSetp = 0
      switch (type) {
        case 1:
          this.$refs.ModalLimousine.hide()
          break;
        case 2:
          this.$refs.ModalLimousineAir.hide()
          break;
        case 3:
          this.$refs.ModalLimousineReser.hide()
          break;
        default:
          break;
      }
    }
  }
}
</script>
