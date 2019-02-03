<template>
  <div class="card-style-2">
    <b-card title="The Exclusive"
          :img-src="require('@/assets/images/pic2.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          class="card-style1 mb-4">
      <h6 class="card-value">2,400 Points</h6>
      <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id nisl ut mi fermentum blandit. Ut in tincidunt est. Pellentesque
      </p>
      <b-button class="more-information" href="#">More information</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardStyle2'
}
</script>
