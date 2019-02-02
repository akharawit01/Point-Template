<template>
  <div class="border p-3">
    <table class="table table-mdf">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อของรางวัล</th>
          <th scope="col">โค้ด</th>
          <th scope="col">ใช้ได้ถึง</th>
          <th scope="col">สถานะ</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>McDolnal</td>
          <td>A2379c3675</td>
          <td>11/11/2018</td>
          <td><span class="badge badge-pill badge-warning">รอการยืนยัน</span></td>
          <td>
            <button type="button" class="mr-1">คลิกดูรายละเอียด</button>
            <button type="button">ยกเลิก</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>McDolnal</td>
          <td>A2379c3675</td>
          <td>11/11/2018</td>
          <td><span class="badge badge-pill badge-info">ยืนยันแล้ว</span></td>
          <td>
            <button type="button" class="mr-1">คลิกดูรายละเอียด</button>
            <button type="button">ยกเลิก</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HistoryPoint'
}
</script>

