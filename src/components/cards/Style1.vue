<template>
  <div class="card-style-1">
    <b-card title="Chef Choice-Cooking lesson"
          :img-src="require('@/assets/images/pic1.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          class="card-style1 mb-2">
      <p class="card-text">
        <ul>
          <li>- Visit local fresh market with Chef Pubton</li>
          <li>- Return to the property and enjoy the cooking class</li>
          <li>- Enjoy 90 minutes Relaxing massage at the New Concept Relaxing spa</li>
        </ul>
      </p>
      <b-button class="more-information" href="#">More information</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardStyle1'
}
</script>
