<template>
  <v-list-tile
    avatar
    ripple
    class="pb-3"
    :class="{
      'pt-3': index == 0,
      'mt-3': index > 0
    }"
    @click="toggle(index)"
  >
    <v-list-tile-content>
      <div>
        <h3><v-icon>alarm</v-icon> {{ time }}</h3>
      </div>
      <v-chip v-if="status == 200 || status == 201" color="green" text-color="white"  small="true">
        {{ status }}
      </v-chip>
      <v-chip v-else color="red" text-color="white"  small="true">
        {{ status }}
      </v-chip>  
    </v-list-tile-content>

    <v-list-tile-content>
      <v-chip label color="white" text-color="black">
        {{ method }}
      </v-chip>
    </v-list-tile-content>

    <v-list-tile-content>
      <v-list-tile-title>{{ app }}</v-list-tile-title>
      <v-list-tile-sub-title>{{ path }}</v-list-tile-sub-title>
    </v-list-tile-content>

    <v-list-tile-action>
      <v-chip label color="orange" text-color="white">
        <v-icon>av_timer</v-icon> {{ responseTime }}ms
      </v-chip>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  name: 'Log',
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
    length: {
      type: Number,
      required: true,
      default: 0,
    },
  }
}
</script>

<style>

</style>
