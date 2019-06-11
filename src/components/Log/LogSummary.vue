<template>
  <v-layout
    row
    align-center
    justify-space-between
    wrap
  >
    <v-flex xs4 sm2>
        <div>
          <h3><v-icon>alarm</v-icon> {{ time }}</h3>
        </div>
        <v-chip v-if="status == 200 || status == 201" color="green" text-color="white"  small>
          {{ status }}
        </v-chip>
        <v-chip v-else color="red" text-color="white" small>
          {{ status }}
        </v-chip>  
    </v-flex>

    <v-flex xs4 sm2>
        <h3 class="heading">
          {{ method }}
        </h3>
    </v-flex>

    <v-flex xs12 sm6>
        <v-list-tile-title>{{ app }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ path }}</v-list-tile-sub-title>
    </v-flex>

    <v-flex xs4 sm2>
      <v-chip label color="orange" text-color="white">
        <v-icon>av_timer</v-icon> {{ responseTime }}ms
      </v-chip>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'LogSummary',
  props: {
    time: {
      type: String,
      required: true,
      default: '',
    },
    status: {
      type: Number,
      required: true,
      default: 0,
    },
    method: {
      type: String,
      required: true,
      default: '',
    },
    app: {
      type: String,
      required: true,
      default: '',
    },
    path: {
      type: String,
      required: true,
      default: '',
    },
    responseTime: {
      type: Number,
      required: true,
      default: 0,
    },
    index: {
      type: Number,
      required: true,
      default: 0,
    },
  }
}
</script>

<style>

</style>
