<template>
  <div class="container content-box">
    <div class="row user">
      <div class="col-lg-3 pr-0 mt-3">
        <div class="sidebar-profile">
          <div class="img-prof img-prof-gold">
            <img src="@/assets/images/partner-tranfer.jpg" />
          </div>
          <div class="text-center">
            <h6 class="mb-0">Mr.Devid Long</h6>
            <p>Silver member</p>
          </div>
        </div>
        <div class="list-group sidebar-menu sidebar-menu-gold">
          <router-link class="list-group-item list-group-item-action" to="/user/profile" active-class="active">Home</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/terms" active-class="active">Terms & Condition</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/history" active-class="active">Point history</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/using" active-class="active">In progress</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/topup-history" active-class="active">Top up history</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/borrow-history" active-class="active">Borrow history</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/tranfer-history" active-class="active">Transfer history</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/message-box" active-class="active">Inbox <span class="badge badge-pill badge-danger">1</span></router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/change-password" active-class="active">Change password</router-link>
          <router-link class="list-group-item list-group-item-action" to="/signin/login">Log out</router-link>
        </div>
      </div>
      <div class="col-lg-9">
        <UserDashboard v-if="currentUrl !== '/user/terms'" />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import UserDashboard from '@/components/organisms/UserDashboard'
export default {
  user  : 'User',
  components: {
    UserDashboard
  },
  data() {
    return {
      currentUrl: this.$route.path
    }
  },
  watch:{
    $route (to, from){
      this.currentUrl = to.path
    }
  } 
}
</script>

