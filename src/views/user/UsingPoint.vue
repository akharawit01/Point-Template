<template>
  <div class="border p-3">
    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Reward name</th>
          <th scope="col">Confirmation ID</th>
          <th scope="col">Status</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items">
          <th>12/11/2561</th>
          <td>The Exclusive</td>
          <td>A2379c3675</td>
          <td>Complete</td>
          <td>
            <b-button class="btn-mdf-table mr-1" @click="openModal">More information</b-button>
            <b-button class="btn-mdf-table">Cancel</b-button>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalUsing ref="modal" />
  </div>
</template>

<script>
import ModalUsing from './modals/Using'
export default {
  name: 'UsingUsing',
  components: {
    ModalUsing
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

