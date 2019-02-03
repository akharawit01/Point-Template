<template>
  <div id="app">
    <Header v-if="elementShow" />
    <router-view></router-view>
    <Footer v-if="elementShow" />
  </div>
</template>

<script>
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      elementShow: true
    }
  },
  watch:{
    $route (to, from){
      console.log(to.path)
      if (to.path === '/signin/login' || to.path ===  '/signin/reset-password' || to.path ===  '/signin/condition' || to.path ===  '/signin/success') {
        this.elementShow = false
      }else {
        this.elementShow = true
      }
    }
  }
}
</script>
<style lang="scss">
@import "./styles/app.scss";
</style>
