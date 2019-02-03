<template>
  <div class="card-style-topup">
    <b-card title="The Exclusive"
          :img-src="require('@/assets/images/img-topup.jpg')"
          img-alt="Image"
          img-top
          tag="article"
          class="card-style-topup mb-4">
      <span class="card-value-top card-value-top-borrow-point">Borrow points 100 points</span>
      <p class="card-text">
        Borrow points 100 points <br /> = <br /> Experience Club 100 points
      </p>
      <b-row no-gutters>
        <b-col class="pr-1">
          <b-button class="btn-topup" @click="onBorrow">Borrow</b-button>
        </b-col>
        <b-col class="pl-1">
          <b-button class="btn-detail" @click="onBorrowDetail">Details</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardStyleBorrow',
  methods: {
    onBorrow() {
      this.$emit('onBorrow', this)
    },
    onBorrowDetail() {
      this.$emit('onBorrowDetail', this)
    }
  }
}
</script>
