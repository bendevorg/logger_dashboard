import API from '../../utils/API';

const state = {
  logs: []
};

const getters = {};

const actions = {
  retrieveLogs({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const path = `/logs?amount=${payload.amount}&offset=${payload.offset}`;
      // const path = '/logs';
      API.get(path)
        .then(response => {
          commit('setLogs', response.data.msg);
          return resolve();
        })
        .catch(err => {
          if (err.response) {
            return reject(err.response.data.msg);
          }
          return reject(err);
        });
    });
  },
};

const mutations = {
  setLogs(state, logs) {
    state.logs = state.logs.concat(logs);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
