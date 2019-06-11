<template>
  <v-container 
    fluid 
    fill-height>
    <v-layout
      justify-space-around
      align-start
      wrap
    >
      <v-flex xs8 sm8>
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="(log, index) in logs"
            :key="index"
          >
            <template v-slot:header>
              <log-summary 
                :time="log.req.date"
                :status="log.res.statusCode"
                :method="log.req.method"
                :app="log.req.base"
                :path="log.req.path"
                :responseTime="log.res.time"
                :index="index"
              />
            </template>
            <log-detail
              :req="log.req"
              :res="log.res"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 class="text-xs-center">
        <v-btn 
          v-if="logs.length % 10 === 0"
          @click="getMoreLogs"
        >
          Show more
        </v-btn>
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
    this.getMoreLogs();
  },
  computed: {
    ...mapState('log', {
      logs: state => state.logs
    }),
  },
  methods: {
    ...mapActions('log', ['retrieveLogs']),
    getMoreLogs() {
      this.retrieveLogs({
        amount: 10,
        offset: this.logs.length
      });
    }
  },
};
</script>
