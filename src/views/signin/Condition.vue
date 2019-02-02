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
        <div class="text-center mb-4">
          <h1 class="login-title">Terms & Condition</h1>
        </div>
        <ul class="p-0">
          <li>Experience Club Co., Ltd. is a company who responsible for managing, coordinating guest’s reservation and providing service requests only.</li>
          <li>Local rules and regulations must be obeyed in accordance to Service Provider or Owner of the Area.</li>
          <li>Service Provider or Owner of the Area reserved all rights to keep terms and condition updated and must notify all changes to Experience Club within 30 days prior to launching date (or in the case of urgent modifications, must be inform not less than 7 business working days.)</li>
        </ul>
        <div class="form-group my-2">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <span class="form-check-label" for="exampleCheck1">I have read and agree to the terms of service</span>
        </div>
        <button type="button" class="btn btn-login btn-lg mt-5 btn-block" v-on:click="handleLogin">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  user: 'Condition',
  methods: {
    handleLogin: function (event) {
      localStorage.setItem('user', 'Tom');
      this.$router.push('/');
    }
  }
};
</script>
