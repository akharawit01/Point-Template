<template>
  <div class="content-box limousine-detail">
    <b-container>
      <b-row class="service-detail-top">
        <b-col cols="7">
          <b-carousel id="carousel2"
                controls
                indicators
                :interval="4000"
                v-model="slide"
          >
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
          </b-carousel>
        </b-col>
        <b-col cols="5">
          <h1 class="title">{{title[type-1]}}</h1>
          <p class="detail detail-lg">
            Points to redeem <br />
            Redeem <span>2,400</span> points
          </p>
          <b-button class="btn-service" @click="openModal(type)">Reserve</b-button>
        </b-col>
      </b-row>
      <div>
        <h3 class="mb-4">Term & Condition</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nunc metus. Maecenas eget eros ultricies, euismod erat et, gravida risus. Suspendisse at ex vel est pharetra molestie id ac risus. Proin porttitor nunc bibendum rhoncus porta. In cursus elit sit amet ligula dapibus faucibus. Sed bibendum laoreet augue. Phasellus nec odio dolor. In hac habitasse platea dictumst. Fusce laoreet semper mauris, sit amet imperdiet eros ornare in. Fusce vitae hendrerit elit, eget malesuada lacus. Cras fermentum sem nulla, vestibulum tincidunt diam aliquam eget. Nulla facilisi. Integer vehicula venenatis metus, vel aliquet libero cursus nec.</p>
        <p>Praesent interdum ex vitae augue ultricies, nec bibendum urna lacinia. Ut fringilla tellus vitae ullamcorper porta. Etiam lobortis turpis in odio volutpat, sed fermentum neque egestas. Nullam bibendum molestie dui lobortis finibus. Sed non porttitor eros. Donec ullamcorper blandit nulla, sodales viverra felis hendrerit vitae. Integer ut lectus nulla.</p>
        <p>Suspendisse viverra libero urna, in commodo libero interdum eget. Praesent at mauris semper, sodales felis a, tristique sapien. Donec sit amet magna commodo, ultrices arcu ac, volutpat ante. Integer a molestie turpis. Proin id ex ut nibh interdum pulvinar. Aliquam non quam at lectus facilisis lacinia nec sit amet est. Suspendisse quis diam sed orci consectetur sollicitudin nec efficitur lacus. Morbi varius sit amet lorem non auctor. Quisque pulvinar consequat convallis. Sed tellus est, lacinia in consectetur ut, lacinia ut leo. Aliquam et mauris risus. Ut ultricies nisl et suscipit feugiat. Praesent rutrum quam dolor, a consectetur lacus cursus sed. Morbi a aliquam arcu.</p>
      </div>
    </b-container>
    <ModalLimousine ref="modal" />
  </div>
</template>

<script>
import ModalLimousine from './modals/Limousine'
export default {
  name: 'LimousineDetail',
  components: {
    ModalLimousine
  },
  data() {
    return {
      title: ['Car hire by hour', 'Airport Transfer In', 'Other arrangement'],
      type: parseInt(this.$route.params.id)
    }
  },
  methods: {
    openModal(type) {
      this.$refs.modal.showModal(type)
    }
  }
}
</script>
