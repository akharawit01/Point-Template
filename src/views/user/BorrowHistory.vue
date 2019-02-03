<template>
  <div class="border p-3">
    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col">Borrow date</th>
          <th scope="col">Borrow (Points)</th>
          <th scope="col">Fee (Points)</th>
          <th scope="col">Valid until</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items">
          <th>12/11/2561</th>
          <td>100</td>
          <td>1,500</td>
          <td>12/11/2562</td>
          <td>
            <b-button class="btn-mdf-table mr-1" @click="openModal">More information</b-button>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalBorrow ref="modal" />
  </div>
</template>

<script>
import ModalBorrow from './modals/Borrow'
export default {
  name: 'BorrowHistory',
  components: {
    ModalBorrow
  },
  data() {
    return {
      items: [1,2,3,4,5,6]
    }
  },
  methods: {
    openModal() {
      this.$refs.modal.showModal()
    }
  }
}
</script>

