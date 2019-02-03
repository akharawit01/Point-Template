<template>
  <div class="border p-3">
    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col">Top up date</th>
          <th scope="col">Credit (THB)</th>
          <th scope="col">ID</th>
          <th scope="col">Valid until</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items">
          <th>12/11/2561</th>
          <td>100</td>
          <td>A2379c3675</td>
          <td>12/11/2562</td>
          <td>
            <b-button class="btn-mdf-table mr-1" @click="openModal">More information</b-button>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalTopup ref="modal" />
  </div>
</template>

<script>
import ModalTopup from './modals/Topup'
export default {
  name: 'TopupHistory',
  components: {
    ModalTopup
  },
  data() {
    return {
      items: [1,2,3]
    }
  },
  methods: {
    openModal() {
      this.$refs.modal.showModal()
    }
  }
}
</script>

