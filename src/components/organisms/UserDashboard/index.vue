<template>
  <b-row class="mt-4">
    <b-col cols="3">
      <div class="card-user">
        <img src="@/assets/images/icon-totalpoint.png" />
        <p class="title">
          <span class="pl-2">Balance points</span>
          <span class="d-block txt-point">
            600
          </span>
          <span class="d-block font-size-sm">points</span>
        </p> 
      </div>
    </b-col>
    <b-col cols="3">
      <div class="card-user">
        <img src="@/assets/images/icon-gift.png" />
        <p class="title">
          <span class="pl-2">Point history</span>
          <span class="d-block txt-point txt-point-green">
            600
          </span>
          <span class="d-block font-size-sm">Lists</span>
        </p> 
      </div>
    </b-col>
    <b-col cols="3">
      <div class="card-user">
        <img src="@/assets/images/icon-reservation.png" />
        <p class="title">
          <span class="pl-2">In progress</span>
          <span class="d-block txt-point txt-point-blue">
            600
          </span>
          <span class="d-block font-size-sm">Lists</span>
        </p> 
      </div>
    </b-col>
    <b-col cols="3">
      <div class="card-user">
        <img src="@/assets/images/icon-cancel.png" />
        <p class="title">
          <span class="pl-2">Cancelled</span>
          <span class="d-block txt-point txt-point-red">
            600
          </span>
          <span class="d-block font-size-sm">Lists</span>
        </p> 
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'UserDashboard'
}
</script>

