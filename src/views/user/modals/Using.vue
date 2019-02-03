<template>
  <div>
    <b-modal ref="ModalUsing" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title title-border-mdf pt-1 pb-0">
        Pool Suite
      </h1>
      <div>
        <h4 class="text-center clr-red">Cancel</h4>
        <b-row class="mt-4">
          <b-col cols="6">
            <b-img :src="require('@/assets/images/pic2.jpg')" fluid alt="Responsive image" />
          </b-col>
          <b-col cols="6">
            <b-img :src="require('@/assets/images/pic2.jpg')" fluid alt="Responsive image" />
          </b-col>
        </b-row>
        <b-row class="mt-4">
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

        <h3 class="title title-border-mdf pt-5 pb-2 clr-red">
          2,400 points
        </h3>
        <h4 class="text-center">Redeemed 11/11/2012</h4>

        <b-row class="mt-5" align-h="center">
          <b-col cols="6">
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="hideModal">Close</b-button>
          </b-col>
          <b-col cols="6">
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="hideModal">Reserve a limousine</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalUsing',
  methods: {
    showModal() {
      this.$refs.ModalUsing.show()
    },
    hideModal() {
      this.$refs.ModalUsing.hide()
    }
  }
}
</script>
