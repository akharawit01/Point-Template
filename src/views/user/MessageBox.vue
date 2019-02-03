<template>
  <div class="border p-3">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Time</th>
          <th scope="col">Message</th>
          <th scope="col">Status</th>
          <th scope="col">Staff</th>
          <th scope="col" style="width: 50px">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>11/11/2018 11:11:00</td>
          <td>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies.</td>
          <td>Read</td>
          <td>AFCCD</td>
          <td><b-button class="btn-mdf-table" @click="openModal">Reply</b-button></td>
        </tr>
      </tbody>
    </table>
    <ModalMessage ref="modal" />
  </div>
</template>

<script>
import ModalMessage from './modals/Message'
export default {
  name: 'MessageBox',
  components: {
    ModalMessage
  },
  methods: {
    openModal() {
      this.$refs.modal.showModal()
    }
  }
}
</script>

