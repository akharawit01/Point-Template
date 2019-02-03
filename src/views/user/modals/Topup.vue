<template>
  <div>
    <b-modal ref="ModalTopup" size="lg" hide-footer="true" hide-header="true">
      <div>
        <div class="point-topup text-center mt-5">
          <h1 class="point clr-red">Top up 10,000 bath</h1>
          <p>Top up 10,000 bath <br /> = <br /> Experience Club 100,000 points</p>
        </div>
        <h3 class="title title-border-mdf pt-5 pb-2">
         Top up date 11/11/2012
        </h3>
        <h4 class="text-center clr-red">Valid untill 11/11/2012</h4>

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
  name: 'ModalTopup',
  methods: {
    showModal() {
      this.$refs.ModalTopup.show()
    },
    hideModal() {
      this.$refs.ModalTopup.hide()
    }
  }
}
</script>
