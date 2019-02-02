<template>
  <div class="content-box member-tranfer-page">
    <b-container>
      <h1 class="title text-left pb-3">
        <img src="@/assets/images/icon-totalpoint.png" /> Borrow point
      </h1>
    </b-container>
    <b-jumbotron class="text-center" header="Wellcomp!!">
      <p>Mr. Test Point <br />
      Balance points 100,00 points<br />
      You can borrow 10,000 points</p>
    </b-jumbotron>
    <b-container class="pt-5">
      <b-row>
        <b-col cols="3">
          <CardStyleBorrowPoint @onBorrow="openModalBorrow" @onBorrowDetail="openModalDetail"  />
        </b-col>
      </b-row>
    </b-container>
    <ModalBorrow ref="modal" />
  </div>
</template>

<script>
import CardStyleBorrowPoint from '../components/cards/StyleBorrowPoint.vue'
import ModalBorrow from '@/components/modals/Borrow'

export default {
  name: 'MemberTranfer',
  components: {
    CardStyleBorrowPoint,
    ModalBorrow
  },
  methods: {
    openModalDetail() {
      this.$refs.modal.showModalDetail()
    },
    openModalBorrow() {
      this.$refs.modal.showModalBorrow()
    }
  }
};
</script>
