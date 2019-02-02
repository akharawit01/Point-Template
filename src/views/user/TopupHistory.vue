<template>
  <div class="border p-3">
    <table class="table table-mdf">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">เติมเมื่อ</th>
          <th scope="col">นำนวน</th>
          <th scope="col" style="width: 140px">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>11-12-2560</td>
          <td>100</td>
          <td><button type="button" v-b-modal.modal-topup-history>คลิกดูรายละเอียด</button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>11-12-2560</td>
          <td>100</td>
          <td><button type="button" v-b-modal.modal-topup-history>คลิกดูรายละเอียด</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TopupHistory',
  data() {
    return {
      items: [1,2,3,4,5,6]
    }
  }
}
</script>

