<template>
  <div class="card-style-topup">
    <b-card title="The Exclusive"
          :img-src="require('@/assets/images/img-topup.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          class="card-style-topup mb-4">
      <span class="card-value-top">Top up 100 baht</span>
      <p class="card-text">
        Top up 100 baht <br /> = <br /> Experience Club 100 points
      </p>
      <b-row no-gutters>
        <b-col class="pr-1">
          <b-button class="btn-topup" @click="onTopup">Topup</b-button>
        </b-col>
        <b-col class="pl-1">
          <b-button class="btn-detail" @click="onTopupDetail">Details</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardStyleTopup',
  methods: {
    onTopup() {
      this.$emit('onTopup', this)
    },
    onTopupDetail() {
      this.$emit('onTopupDetail', this)
    }
  }
}
</script>
