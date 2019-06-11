import API from '../../utils/API';

const state = {
  logs: []
};

const getters = {};

const actions = {
  retrieveLogs({ commit }, amount) {
    return new Promise((resolve, reject) => {
      // const path = `/logs?amount=${amount}&offset=${state.logs.length}`;
      const path = '/logs';
      API.get(path)
        .then(response => {
          console.log(response);
          commit('setLogs', response.data.msg);
          return resolve();
        })
        .catch(err => {
          if (err.response) {
            console.log(err);
            return reject(err.response.data.msg);
          }
          return reject(err);
        });
    });
  },
};

const mutations = {
  setLogs(state, logs) {
    state.logs = logs;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
