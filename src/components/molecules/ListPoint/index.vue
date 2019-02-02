<template>
  <b-row class="list-point">
    <b-col v-for="(item, index) in items">
      <h4>{{item.point}}</h4>
      <p>{{item.label}}</p>
    </b-col>
  </b-row>
</template>

<script> 
export default {
  name: 'ListPoint',
  props: ['items']
}
</script>
