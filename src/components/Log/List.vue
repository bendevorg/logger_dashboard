<template>
  <v-container 
    fluid 
    fill-height>
    <v-layout
      justify-space-around
      align-start>
      <v-flex xs8 sm8>
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="(log, index) in logs"
            :key="index"
          >
            <template v-slot:header>
              <log-summary 
                :time="log.time"
                :status="log.status"
                :method="log.method"
                :app="log.app"
                :path="log.path"
                :responseTime="log.responseTime"
                :index="index"
                :length="log.length"
              />
            </template>
            <log-detail
              :req="log.req"
              :res="log.res"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'; 
import LogSummary from './LogSummary';
import LogDetail from './LogDetail';

export default {
  name: 'List',
  components: {
    LogSummary,
    LogDetail,
  },
  created() {
    this.retrieveLogs(10);
  },
  computed: {
    ...mapState('log', {
      logs: state => state.logs
    }),
  },
  methods: {
    ...mapActions('log', ['retrieveLogs']),
  }
};
</script>
