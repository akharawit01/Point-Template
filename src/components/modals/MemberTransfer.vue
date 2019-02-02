<template>
  <div>
    <b-modal ref="ModalMemberTransfer" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title pt-1 pb-5" v-if="modalSetp !== 2">Member tranfer</h1>
      <h1 class="title pt-5 pb-1" v-if="modalSetp === 2">Thank you!! for your service</h1>
      <!-- Step 0 -->
      <b-form v-if="modalSetp === 0">
        <b-row class="mb-2">
          <b-col cols="4" v-if="modalSetp !== 2">Member number</b-col>
          <b-col cols="6">
            <b-form-input type="text" />
          </b-col>
          <b-col cols="2"><b-button class="btn-mdf">Verify</b-button></b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Tranfer point</b-col>
          <b-col cols="6">
            <b-form-input type="text" />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="4">Fee per session</b-col>
          <b-col cols="6">1,500 points</b-col>
        </b-row>
      </b-form>
      <!-- Step 1 -->
      <div v-if="modalSetp === 1">
        <dl class="row">
          <dt class="col-sm-6 text-right">Member number</dt>
          <dd class="col-sm-6">AB1234</dd>
          <dt class="col-sm-6 text-right">Tranfer point</dt>
          <dd class="col-sm-6">1,500 point</dd>
          <dt class="col-sm-6 text-right">Fee per session</dt>
          <dd class="col-sm-6">1,500 points</dd>
        </dl>
      </div>
      <!-- Step 2 -->
      <div class="text-center" v-if="modalSetp === 2">
        <p>Your balance points 100,100 points</p>
      </div>
      <ListPoint :items="items" v-if="modalSetp !== 2" />
      <b-row v-if="modalSetp !== 2" class="mt-5">
        <b-col>
          <b-button class="btn-mdf btn-mdf-lg w-100" v-if="modalSetp === 0">Back</b-button>
          <b-button class="btn-mdf btn-mdf-lg w-100" v-if="modalSetp === 1" @click="handlePre">Edit</b-button>
        </b-col>
        <b-col>
          <b-button class="btn-mdf btn-mdf-lg w-100" @click="handleNext">Confirm</b-button>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mt-5" v-if="modalSetp === 2">
        <b-col cols="6">
          <b-button class="btn-mdf btn-mdf-lg my-4 w-100" @click="hideModal">Close</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalMemberTransfer',
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
    showModal () {
      this.$refs.ModalMemberTransfer.show()
    },
    hideModal () {
      this.modalSetp = 0
      this.$refs.ModalMemberTransfer.hide()
    }
  }
}
</script>
