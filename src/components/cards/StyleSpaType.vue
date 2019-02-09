<template>
  <div class="card-style-spatype text-center">
    <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="card-style-dining mb-4">
      <h3 class="card-title">{{title}} {{id}}</h3>
      <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id nisl ut mi fermentum blandit. Ut in tincidunt est. Pellentesque
      </p>
      <b-button v-if="type === '1'" class="btn-card mt-4" href="/#/spa/type">More information</b-button>
      <b-button v-if="type === '2'" class="btn-card mt-4" href="/#/spa1">More information</b-button>
      <b-button v-if="type === '3'" class="btn-card mt-4" href="/#/privatespa/type">More information</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardStyleSpaType',
  props: ['type', 'title']
}
</script>
