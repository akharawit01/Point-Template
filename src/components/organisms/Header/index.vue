<template>
  <div class="header">
    <b-navbar toggleable="md" class="navbar-mdf fixed-top" id="navbar-scroll"> 
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">
        <img src="@/assets/images/logo.svg" alt="" srcset="">
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="/#/">Home</b-nav-item>
            <b-nav-item href="/#/about">About</b-nav-item>
            <b-nav-item-dropdown text="Product and services" right>
              <b-dropdown-item href="/#/guestexperience">Guest Experience</b-dropdown-item>
              <b-dropdown-item href="/#/limousine">Limousine</b-dropdown-item>
              <b-dropdown-item href="/#/hotels">Hotels & Resorts</b-dropdown-item>
              <b-dropdown-item href="/#/dining">Dining</b-dropdown-item>
              <b-dropdown-item href="/#/club">Club & Lounge</b-dropdown-item>
              <b-dropdown-item href="/#/shopping">Shopping</b-dropdown-item>
              <b-dropdown-item href="/#/spa">Spa & Wellness</b-dropdown-item>
              <b-dropdown-item href="/#/excursions">Excursions & Activities</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="/#/contact">Contact</b-nav-item>
            <b-nav-item-dropdown text="Vacation point" right>
              <b-dropdown-item href="/#/membertrander">Member transfer</b-dropdown-item>
              <b-dropdown-item href="/#/topup">Top up</b-dropdown-item>
              <b-dropdown-item href="/#/borrowpoint">Borrow point</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-nav-item-dropdown text="EN" class="dpd-lang" right>
            <b-dropdown-item href="#">Enlish</b-dropdown-item>
            <b-dropdown-item href="#">Thai</b-dropdown-item>
            <b-dropdown-item href="#">Chinese</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-form>
            <b-button size="sm" class="btn-login my-2 my-sm-0" href="/#/signin/login">Login</b-button>
          </b-nav-form>
          <b-nav-item-dropdown class="user-dropdown" right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <div class="user-icon">
                <img src="@/assets/images/icon-user.png" alt="user User001">
                <span class="badge badge-pill badge-danger">1</span>   
              </div>
              <div class="user-name">
                Username<br />
                1,000 point
              </div>
            </template>
            <b-dropdown-item href="#" class="user-item">
              <div class="user-icon"><img src="@/assets/images/icon-user.png" alt="user User001"></div>
              <div class="user-name">
                Username<br />
                1,000 point<br />
                Gold member
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="/#/user/profile">Home</b-dropdown-item>
            <b-dropdown-item href="/#/user/terms">Terms & Condition</b-dropdown-item>
            <b-dropdown-item href="/#/user/history">Point history</b-dropdown-item>
            <b-dropdown-item href="/#/user/using">In progress</b-dropdown-item>
            <b-dropdown-item href="/#/user/topup-history">Top up history</b-dropdown-item>
            <b-dropdown-item href="/#/user/borrow-history">Borrow history</b-dropdown-item>
            <b-dropdown-item href="/#/user/tranfer-history">Transfer history</b-dropdown-item>
            <b-dropdown-item href="/#/user/message-box">Inbox</b-dropdown-item>
            <b-dropdown-item href="/#/user/change-password">Change password</b-dropdown-item>
            <b-dropdown-item href="/#/signin/login">Log out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
