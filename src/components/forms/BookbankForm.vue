<template>
  <form>
    <div class="form-group row">
      <label for="nampInp" class="col-sm-4 col-form-label">Account Holder</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="nampInp">
      </div>
    </div>
    <div class="form-group row">
      <label for="banknameInp" class="col-sm-4 col-form-label">Bank Name</label>
      <div class="col-sm-8">
        <select class="form-control">
        </select>
      </div>
    </div>
    <div class="form-group row">
      <label for="checkOut" class="col-sm-4 col-form-label">Account Number</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="checkOut">
      </div>
    </div>
    <div class="form-group row">
      <label for="adsInp" class="col-sm-4 col-form-label">Account Types</label>
      <div class="col-sm-8">
        <select class="form-control">
        </select>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'BookbankForm'
}
</script>

