<template>
  <v-container fluid>
    <v-layout 
      row 
      wrap
    >
      <v-flex xs12 sm6>
        <vue-json-pretty
          v-model="selected"
          :data="req"
          selectableType="single"
          highlightMouseoverNode
        />
      </v-flex>
      <v-flex xs12 sm6>
        <vue-json-pretty
          v-model="selected"
          :data="res"
          selectableType="single"
          highlightMouseoverNode
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';

export default {
  name: 'LogDetail',
  props: {
    req: {
      type: Object,
      required: true,
      default: () => {},
    },
    res: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  components: {
    VueJsonPretty
  },
  data() {
    return {
      selected: []
    }
  }
}
</script>

<style>

</style>
