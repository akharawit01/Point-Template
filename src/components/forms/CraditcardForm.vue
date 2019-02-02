<template>
  <form>
    <div class="form-group row">
      <label for="nampInp" class="col-sm-4 col-form-label">Credit Card Type</label>
      <div class="col-sm-8">
        <select class="form-control">
        </select>
      </div>
    </div>
    <div class="form-group row">
      <label for="banknameInp" class="col-sm-4 col-form-label">Card Number</label>
      <div class="col-sm-8">
         <input type="text" class="form-control" id="checkOut">
      </div>
    </div>
    <div class="form-group row">
      <label for="checkOut" class="col-sm-4 col-form-label">CVC</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="checkOut">
      </div>
    </div>
    <div class="form-group row">
      <label for="adsInp" class="col-sm-4 col-form-label">Expiry Date</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="checkOut">
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CraditcardForm'
}
</script>

