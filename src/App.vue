<template>
  <div id="app">
    <Header v-if="currentUrl" />
    <router-view></router-view>
    <Footer v-if="currentUrl" />
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
      currentUrl: true
    }
  },
  watch:{
    $route (to, from){
      const isShowHeader = ['/signin/login', '/signin/reset-password', 
      '/signin/condition', '/signin/success'].includes(to.path)
      this.currentUrl = !isShowHeader
    }
  },
  created() {
    const isShowHeader = ['/signin/login', '/signin/reset-password', 
    '/signin/condition', '/signin/success'].includes(this.$route.path)
    this.currentUrl = !isShowHeader
  }
}
</script>
<style lang="scss">
@import "./styles/app.scss";
</style>
