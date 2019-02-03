<template>
  <div class="row mt-5">
    <div class="col-lg-10 offset-lg-1">
      <div class="row">
        <div class="col-lg-3 text-center">
          <img src="@/assets/images/partner-tranfer.jpg" class="img-fluid mb-1" />
          <div class="upload-btn-wrapper">
            <button class="btn">Edit Picture</button>
            <input type="file" name="myfile" />
          </div>
        </div>
        <div class="col-lg-9">
          <form class="profile-fm">
            <div class="form-group">
              <label>Current Password</label>
              <input type="password" class="form-control" placeholder="">
            </div>
            <div class="form-group">
              <label>Registation email</label>
              <input type="email" class="form-control" placeholder="">
            </div>
            <div class="form-group">
              <label>New Password</label>
              <input type="password" class="form-control" placeholder="">
            </div>
            <div class="form-group">
              <label>Retry new password</label>
              <input type="password" class="form-control" placeholder="">
            </div>
            <p class="text-center">If you need help please contact: <br />Phone: 053-442700, 053-442702 | Email: Email: info@experienceclub.net</p>
            <b-button class="btn btn-mdf">Update</b-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword',
  data() {
    return {
      editMode: 1
    }
  },
}
</script>

