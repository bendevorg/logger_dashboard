<template>
  <v-container 
    fluid 
    fill-height>
    <v-layout
      justify-space-around
      align-start>
      <v-flex xs8 sm8>
        <v-card>
          <v-list class="pa-0">
            <div
              v-for="(item, index) in items"
              :key="index"
            >
              <app-log 
                :time="item.time"
                :status="item.status"
                :method="item.method"
                :app="item.app"
                :path="item.path"
                :responseTime="item.responseTime"
                :index="index"
                :length="items.length"
              />
              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </div>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Log from './Log';

export default {
  name: 'List',
  components: {
    appLog: Log
  },
  data() {
    return {
      selected: [1],
      items: [{
        method: 'GET',
        time: '19:10',
        status: 200,
        app: 'NEAT',
        path: '/games/:id_game/leaderboard',
        responseTime: 182
      },
      {
        method: 'POST',
        time: '19:08',
        status: 400,
        app: 'NEAT',
        path: '/games/:id_game/leaderboard',
        responseTime: 101
      },
      {
        method: 'GET',
        time: '19:07',
        status: 200,
        app: 'NEAT',
        path: '/games',
        responseTime: 92
      },
      {
        method: 'POST',
        time: '19:00',
        status: 201,
        app: 'NEAT',
        path: '/games/:id_game/leaderboard',
        responseTime: 107
      }]
    };
  },
  props: {
  },
};
</script>
