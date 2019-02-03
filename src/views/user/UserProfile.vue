<template>
  <div class="row mt-5">
    <div class="col-lg-10 offset-lg-1">
      <div class="row">
        <div class="col-lg-3">
          <!-- swiper -->
          <swiper :options="swiperOption">
            <swiper-slide><img src="@/assets/images/partner-tranfer.jpg" class="img-fluid" /></swiper-slide>
            <swiper-slide><img src="@/assets/images/partner-tranfer.jpg" class="img-fluid" /></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="col-lg-9">
          <dl class="row">
            <dt class="col-sm-4">Name</dt>
            <dd class="col-sm-8">Mr.Devid Long</dd>

            <dt class="col-sm-4">Gender</dt>
            <dd class="col-sm-8">ชาย</dd>

            <dt class="col-sm-4">Nationality</dt>
            <dd class="col-sm-8">ไทย</dd>

            <dt class="col-sm-4">ID Card /passport number</dt>
            <dd class="col-sm-8">xxx-xxx-xxx-xxx</dd>

            <dt class="col-sm-4">Address</dt>
            <dd class="col-sm-8">123 ถ.นิมมานเหมิน ต.สุทพ อ.เมือง จ.เชียงใหม่</dd>

            <dt class="col-sm-4">Status</dt>
            <dd class="col-sm-8">โสด</dd>

            <dt class="col-sm-4">Career</dt>
            <dd class="col-sm-8">แพทย์</dd>

            <dt class="col-sm-4">Valid until</dt>
            <dd class="col-sm-8 clr-red">
              100 คะแนน 26/12/2561 <br /> 300 คะแนน 11/01/2562
            </dd>
            <dt class="col-sm-4">Email</dt>
            <dd class="col-sm-8">sample@sample.com</dd>
            <dt class="col-sm-4">Contact detail</dt>
            <dd class="col-sm-8">123 Nimmanhaemin Rd., Suthep, Muang Chiang Mai</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="col-lg-10 offset-lg-1" v-if="editMode === 2">
      <div class="row">
        <div class="col-lg-3 text-center">
          <img src="@/assets/images/partner-tranfer.jpg" class="img-fluid mb-1" />
          <div class="upload-btn-wrapper">
            <button class="btn">แก้ไขรูป</button>
            <input type="file" name="myfile" />
          </div>
        </div>
        <div class="col-lg-9">
          <form class="profile-fm">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="firstnameInp">ชื่อ</label>
                <input type="text" class="form-control" id="firstnameInp">
              </div>
              <div class="form-group col-md-6">
                <label for="lastnameInp">นามสกุล</label>
                <input type="text" class="form-control" id="lastnameInp">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="sexInp">เพศ</label>
                <input type="text" class="form-control" id="sexInp">
              </div>
              <div class="form-group col-md-6">
                <label for="aInp">สัญชาติ</label>
                <input type="text" class="form-control" id="aInp">
              </div>
            </div>
            <div class="form-group">
              <label for="codeNoInp">เลขบัตรประชาชน</label>
              <input type="text" class="form-control" id="codeNoInp">
            </div>
            <div class="form-group">
              <label for="addressInp">ที่อยู่ปัจจุบัน</label>
              <input type="text" class="form-control" id="addressInp">
            </div>
            <div class="form-group">
              <label for="statusInp">สถานะ</label>
              <input type="text" class="form-control" id="statusInp">
            </div>
            <div class="form-group">
              <label for="careerInp">อาชีพ</label>
              <input type="text" class="form-control" id="careerInp">
            </div>
            <div class="form-group">
              <label for="addressInp">Remark</label>
              <textarea class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-mdf hvr-sweep-to-right py-1 font-size-sm">อัพเดท</button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-10 offset-lg-1" v-if="editMode === 3">
      <div class="row">
        <div class="col-lg-3 text-center">
          <img src="@/assets/images/partner-tranfer.jpg" class="img-fluid mb-1" />
          <div class="upload-btn-wrapper">
            <button class="btn">แก้ไขรูป</button>
            <input type="file" name="myfile" />
          </div>
        </div>
        <div class="col-lg-9">
          <form class="profile-fm">
            <div class="form-group">
              <label for="exampleInputEmail1">เปล่ยีนรหัสผ่าน</label>
              <input type="password" class="form-control" placeholder="">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">ยืนยันรหัสผ่าน</label>
              <input type="password" class="form-control" placeholder="">
            </div>
            <button type="submit" class="btn btn-mdf hvr-sweep-to-right py-1 font-size-sm">อัพเดท</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      editMode: 1
    }
  },
}
</script>

