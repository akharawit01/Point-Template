<template>
  <div class="row">
     <div class="col-lg-12 mt-2">
      <router-link to="/signin/login" class="text-light ml-5">< Back</router-link>
    </div>
    <div class="col-lg-6 offset-lg-3">
      <div class="text-center my-4">
        <img src="@/assets/images/logo.jpg" height="100px" alt="logo">
      </div>
      <div class="box-login">
        <div class="text-center mb-5">
          <h1 class="login-title">Reset your password</h1>
          <p>You have requested to reset the password</p>
        </div>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="New password">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Retype new password">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Keep me logged in</label>
          </div>
          <router-link to="/signin/success">
            <button type="submit" class="btn btn-login btn-lg mt-4 btn-block">Reset my password</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  user: 'ResetPassword'
};
</script>
