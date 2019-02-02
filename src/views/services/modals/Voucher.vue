<template>
  <div>
    <b-modal ref="ModalVoucher" size="lg" hide-footer="true" hide-header="true">
      <!-- Step 0 -->
      <div v-if="modalSetp === 0">
        <b-row>
          <b-col class="text-center voucher-card" :style="{'background-image': 'url(' + require('@/assets/images/bg-voucher.png') + ')'}">
            <h1 class="voucher-title">VOUCHER<br /><span>10% discount</span></h1>
            <h4>Jolie Femme Fine Silk</h4>
            <p>At present, the total of xxxx is now hold and will be deducted after you have received the confirmation letter from the Experience club</p>
          </b-col>
        </b-row>
        <b-row class="mt-5" align-h="center">
          <b-col cols="6">
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="handleNext">Save Voucher</b-button>
          </b-col>
          <b-col cols="6">
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="hideModal">Save Voucher & reserve a limousine</b-button>
          </b-col>
        </b-row>
      </div>
      <!-- Step 1 -->
      <div v-if="modalSetp === 1">
        <h1 class="title pt-1 pb-0">Thank you!!</h1>
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
  name: 'ModalVoucher',
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
      this.$refs.ModalVoucher.show()
    },
    hideModal() {
      this.modalSetp = 0
      this.$refs.ModalVoucher.hide()
    }
  }
}
</script>
