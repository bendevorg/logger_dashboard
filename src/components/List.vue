<template>
  <v-container 
    fluid 
    fill-height>
    <v-layout
      justify-center
      align-center>
  
      <v-flex xs8 sm8>
        <v-card>
          <v-list>
            <template v-for="(item, index) in items">
              <v-list-tile
                :key="item.title"
                avatar
                ripple
                @click="toggle(index)"
              >
                <v-list-tile-content>
                  <v-flex>
                    <div>
                      <h3><v-icon>alarm</v-icon> {{ item.time }}</h3>
                    </div>
                  </v-flex>
                  <v-chip v-if="item.status == 200 || item.status == 201" color="green" text-color="white"  small="true">
                    {{ item.status }}
                  </v-chip>
                  <v-chip v-else color="red" text-color="white"  small="true">
                    {{ item.status }}
                  </v-chip>
       
                  
                </v-list-tile-content>

                <v-list-tile-content>
                  <v-chip label color="pink" text-color="white">
                    {{ item.method }}
                  </v-chip>
                </v-list-tile-content>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.app }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.path }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-chip label color="orange" text-color="white">
                    <v-icon>av_timer</v-icon> {{ item.responseTime }}ms
                  </v-chip>
                </v-list-tile-action>

              </v-list-tile>
              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'List',
  data(){
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
  components: {
  }
};
</script>
