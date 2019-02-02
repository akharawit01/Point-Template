<template>
  <div class="border p-3">
    <table class="table table-mdf">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Staff</th>
          <th scope="col">Message</th>
          <th scope="col">Time</th>
          <th scope="col">Status</th>
          <th scope="col" style="width: 50px">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>AFCCD</td>
          <td>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies.</td>
          <td>11/11/2018 11:11:00</td>
          <td><span class="badge badge-pill badge-info">Read</span></td>
          <td><button type="button" v-b-modal.modal-reply-message>Reply</button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>123D</td>
          <td>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies.</td>
          <td>11/11/2018 11:00:12</td>
          <td><span class="badge badge-pill badge-danger">Unread</span></td>
          <td><button type="button" v-b-modal.modal-reply-message>Reply</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MessageBox'
}
</script>

