<template>
  <div class="container">
    <div class="row user">
      <div class="col-lg-3 pr-0 border-right">
        <div class="sidebar-profile">
          <div class="img-prof img-prof-silver">
            <img src="@/assets/images/partner-tranfer.jpg" />
          </div>
          <div class="text-center">
            <h6 class="mb-0">Mr.Devid Long</h6>
            <p>Silver member</p>
          </div>
        </div>
        <div class="list-group sidebar-menu sidebar-menu-silver">
          <router-link class="list-group-item list-group-item-action" to="/user/profile" active-class="active">หน้าหลัก</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/terms" active-class="active">ข้อตกลงและเงื่อนไข</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/history" active-class="active">ประวัติการใช้คะแนน</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/using" active-class="active">กำลังใช้งาน</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/topup-history" active-class="active">ประวัติการเติมเงิน</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/borrow-history" active-class="active">ประวัติการยืม</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/tranfer-history" active-class="active">ประวัติการโอน</router-link>
          <router-link class="list-group-item list-group-item-action" to="/user/message-box" active-class="active">กล่องข้อความ <span class="badge badge-pill badge-danger">1</span></router-link>
          <router-link class="list-group-item list-group-item-action" to="/signin/login">ออกจากระบบ</router-link>
        </div>
      </div>
      <div class="col-lg-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  user  : 'User',
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

