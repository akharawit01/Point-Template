<template>
  <div class="border p-3">
    <table class="table table-mdf">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อของรางวัล</th>
          <th scope="col">คะแนนที่ใช้</th>
          <th scope="col">โค้ด</th>
          <th scope="col">ใช้ได้ถึง</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items">
          <th scope="row">{{index+1}}</th>
          <td>McDolnal</td>
          <td>1</td>
          <td>A2379c3675</td>
          <td>11/11/2018</td>
          <td><button type="button">คลิกดูรายละเอียด</button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>McDolnal</td>
          <td>1</td>
          <td>A2379c3675</td>
          <td>11/11/2018</td>
          <td><button type="button">คลิกดูรายละเอียด</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HistoryPoint',
  data() {
    return {
      items: [1,2,3]
    }
  }
}
</script>

