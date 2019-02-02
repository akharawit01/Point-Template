<template>
  <div class="club-page">
    <ServiceHead :title="title" :description="description" />
    <div class="service-list-box">
      <b-container>
        <b-row class="justify-content-md-center">
          <b-col cols="4">
            <CardStyleClub diningtype />
          </b-col>
          <b-col cols="4">
            <CardStyleClub diningtype />
          </b-col>
          <b-col cols="4">
            <CardStyleClub diningtype />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ServiceHead from '../../components/molecules/ServiceHead';
import CardStyleClub from '../../components/cards/StyleClub.vue'

export default {
  name: 'Club',
  components: {
    ServiceHead,
    CardStyleClub
  },
  data () {
    return {
      title: 'Club & Lounge Experience',
      description: 'Emancipate and enjoy variety of food & drinks with personalize service in classical, stylish ambience.'
    }
  }
}
</script>
