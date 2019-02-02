<template>
  <div class="border p-3">
    <table class="table table-mdf">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">จำนวนการโอน</th>
          <th scope="col">รายละเอียด</th>
          <th scope="col">วันที่/เวลา</th>
          <th scope="col" style="width: 140px">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items">
          <th scope="row">{{index+1}}FAEX</th>
          <td>560</td>
          <td>โอนเงินให้กับ...</td>
          <td>11-12-2560 11:11</td>
          <td><button type="button" v-b-modal.modal-topup-history>คลิกดูรายละเอียด</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TranferHistory',
  data() {
    return {
      items: [1,2,3,4,5,6]
    }
  }
}
</script>

