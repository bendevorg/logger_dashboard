<template>
  <v-container 
    fluid 
    fill-height>
    <v-layout
      justify-space-around
      align-start>
      <v-flex xs8 sm8>
        <v-card>
          <v-expansion-panel>
            <v-expansion-panel-content
              v-for="(item, index) in items"
              :key="index"
            >
              <template v-slot:header>
                <app-log-summary 
                  :time="item.time"
                  :status="item.status"
                  :method="item.method"
                  :app="item.app"
                  :path="item.path"
                  :responseTime="item.responseTime"
                  :index="index"
                  :length="items.length"
                />
              </template>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LogSummary from './LogSummary';

export default {
  name: 'List',
  components: {
    appLogSummary: LogSummary
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
