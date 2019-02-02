<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3">
      <div class="text-center my-4">
        <img src="@/assets/images/logo.jpg" height="100px" alt="logo">
      </div>
      <div class="box-login">
        <div class="text-center mb-5">
          <h1 class="login-title">Login</h1>
          <p>Nice to see you! Enter your username and password to login</p>
        </div>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Username">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password">
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Keep me logged in</label>
              </div>
            </div>
            <div class="col-lg-6 form-text text-right">
              <router-link to="/signin/reset-password">Forgot your password?</router-link>
            </div>
          </div>
          <router-link to="/signin/condition">
            <button type="submit" class="btn btn-login btn-lg mt-4 btn-block">Next</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  user  : 'Login'
};
</script>
