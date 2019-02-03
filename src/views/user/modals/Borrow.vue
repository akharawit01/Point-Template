<template>
  <div>
    <b-modal ref="ModalBorrow" size="lg" hide-footer="true" hide-header="true">
      <div>
        <div class="point-topup text-center mt-5">
          <h1 class="point clr-red">Borrow points 10,000 bath</h1>
          <b-row class="mt-4">
            <b-col cols="6" class="text-right">Borrow points</b-col>
            <b-col cols="6" class="text-left">: 10,000 point</b-col>
          </b-row>
          <b-row>
            <b-col cols="6" class="text-right">Free per session</b-col>
            <b-col cols="6" class="text-left">: 1,500 points</b-col>
          </b-row>
        </div>
        <h3 class="title title-border-mdf pt-5 pb-2">
         Borrow on 11/11/2012
        </h3>
        <h4 class="text-center clr-red">Valid untill 11/11/2012</h4>

        <table class="table table-bordered table-mdf mt-4">
          <thead>
            <tr>
              <th>Vacation Points Transfer</th>
              <th>Fee per session</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to 30,000 points</td>
              <td>1,500 points</td>
            </tr>
            <tr>
              <td>30,001 - 50,000 points</td>
              <td>2,500 points</td>
            </tr>
            <tr>
              <td>50,001 - 100,000 points</td>
              <td>5,000 points</td>
            </tr>
          </tbody>
        </table>

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
  name: 'ModalBorrow',
  methods: {
    showModal() {
      this.$refs.ModalBorrow.show()
    },
    hideModal() {
      this.$refs.ModalBorrow.hide()
    }
  }
}
</script>
