<template>
  <div>
    <button @click="showModal(2)">2</button>
    <button @click="showModal(3)">3</button>
    <b-modal ref="ModalSpa" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title pt-1 pb-0" v-if="modalSetp !== 2">The New Concept Relaxing Massage</h1>
      <!-- Step 0 -->
      <b-form v-if="modalSetp === 0">
        <h4 class="text-center">Name of treatment</h4>
        <b-row class="mb-2 mt-5">
          <b-col cols="4">Guest name</b-col>
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
          <b-col cols="4">Treatment</b-col>
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
        <h4 class="text-center">The New Concept Relaxing Massage</h4>
        <b-row class="mt-5">
          <b-col cols="5" offset="1">Guest name</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Date</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Treatment</b-col>
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
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="hideModal(1)">Close</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-- /////////////////////////////////////// -->
    <b-modal ref="ModalSpaAir" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title pt-1 pb-0" v-if="modalSetp !== 2">The New Medical Clinic</h1>
      <!-- Step 0 -->
      <b-form v-if="modalSetp === 0">
        <h4 class="text-center">Name Clinic</h4>
        <b-row class="mb-2 mt-5">
          <b-col cols="4">Guest name</b-col>
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
          <b-col cols="4">Your skin concern</b-col>
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
          Name Clinic
        </h4>
        <b-row class="mt-5">
          <b-col cols="5" offset="1">Guest name</b-col>
          <b-col cols="6">00/00/0000.</b-col>
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
          <b-col cols="5" offset="1">Your skin concern</b-col>
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

    <!-- /////////////////////////////////////// -->
    <b-modal ref="ModalSpaReser" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title pt-1 pb-0" v-if="modalSetp !== 2">Privilege Spa Discount</h1>
      <!-- Step 0 -->
      <b-form v-if="modalSetp === 0">
        <h4 class="text-center">Name of spa</h4>
        <b-row class="mb-2 mt-5">
          <b-col cols="4">Guest name</b-col>
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
          <b-col cols="4">Your skin concern</b-col>
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
          Name of spa
        </h4>
        <b-row class="mt-5">
          <b-col cols="5" offset="1">Guest name</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Date</b-col>
          <b-col cols="6">xxxxxxx</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" offset="1">Treatment</b-col>
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
  name: 'ModalSpa',
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
          this.$refs.ModalSpa.show()
          break;
        case 2:
          this.$refs.ModalSpaAir.show()
          break;
        case 3:
          this.$refs.ModalSpaReser.show()
          break;
        default:
          break;
      }
      
    },
    hideModal(type) {
      this.modalSetp = 0
      switch (type) {
        case 1:
          this.$refs.ModalSpa.hide()
          break;
        case 2:
          this.$refs.ModalSpaAir.hide()
          break;
        case 3:
          this.$refs.ModalSpaReser.hide()
          break;
        default:
          break;
      }
    }
  }
}
</script>
