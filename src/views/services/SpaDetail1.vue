<template>
  <div class="content-box spa-detail-page">
    <b-container>
      <h1 class="title pb-0">The New Medical Clinic</h1>
      <b-row class="service-detail-top">
        <b-col cols="7">
          <b-carousel
                controls
                indicators
                :interval="4000"
          >
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
          </b-carousel>
        </b-col>
        <b-col cols="5" class="pb-5">
          <h1 class="title">Name Clinic</h1>
          <p class="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel.
          </p>
          <b-button class="btn-service" @click="openModal(2)">Make appointment</b-button>
        </b-col>
      </b-row>
      <div>
        <p><strong>Clinic Description :</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis efficitur quam. Ut auctor lorem ut ipsum tincidunt placerat. Phasellus vitae quam condimentum eros gravida auctor sit amet eget libero. Phasellus fermentum, lacus in rhoncus mollis, ex nunc scelerisque tellus, a malesuada mi sem at tortor. Ut et dictum felis. Cras tincidunt arcu at aliquet accumsan. Integer lobortis finibus magna. Nullam ultrices odio elit, ac feugiat diam posuere ac. Aenean at dignissim libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent hendrerit risus arcu, quis convallis ipsum finibus vel. Sed eleifend sem et magna sagittis cursus. Aliquam sed nunc ante. Curabitur dapibus efficitur semper. Quisque sed lorem pretium, commodo nisl ut, sodales quam. Phasellus ut pharetra eros</p>
        <p><strong>Information :</strong> Lorem Ipsum"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam leo nulla, vel placerat orci bibendum sed. Sed tellus tortor, ullamcorper accumsan turpis quis, vestibulum consectetur sapien. Praesent tristique ex.</p>
        <p>
          <strong>Example of treatment</strong><br />
          1. Lorem ipsum dolor sit amet. <br />
          2. Lorem ipsum dolor sit amet. <br />
          3. Lorem ipsum dolor sit amet.
        </p>
        <p><strong>Location :</strong> Lorem ipsum dolor sit amet.</p>
      </div>
    </b-container>
    <ModalSpa ref="modal" />
  </div>
</template>

<script>
import ModalSpa from './modals/Spa'
export default {
  name: 'SpaDetail',
  components: {
    ModalSpa
  },
  methods: {
    openModal(type) {
      this.$refs.modal.showModal(type)
    }
  }
}
</script>
