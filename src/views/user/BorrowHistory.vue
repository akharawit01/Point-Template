<template>
  <div class="border p-3">
    <table class="table table-mdf">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">จำนวนที่ยืม (คะแนน)</th>
          <th scope="col">วันที่ยืม</th>
          <th scope="col">ใช้ได้ถึง</th>
          <th scope="col" style="width: 140px">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items">
          <th scope="row">{{index+1}}</th>
          <th scope="row">2,000</th>
          <td>11-12-2560</td>
          <td>30-12-2560</td>
          <td><button type="button" v-b-modal.modal-topup-history>คลิกดูรายละเอียด</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BorrowHistory',
  data() {
    return {
      items: [1,2,3,4,5,6]
    }
  }
}
</script>

