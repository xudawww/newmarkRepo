import axios from "axios";
const state = {
  currentUser: null,
  loading: false,
  err: null,
};
const getters = {
  getCurrentUser: (state) => state.currentUser,
  getUserLoading: (state) => state.loading,
};
const actions = {
  signin() {
    commit("SET_LOADING", true);
    axios
      .post(`${process.env.VUE_APP_URL}/login`, obj)
      .then((res) => {
        if (res.data) {
          commit("POPULATE_USER", res.data);
        }
        setTimeout(function () {
          commit("SET_LOADING", false);
        }, 2000);
      })
      .catch((res) => {
        commit("SET_LOADING", false);
      });
  },
  async signup({ commit }, obj) {
    commit("SET_LOADING", true);
    try {
      const res = await axios.post(`${process.env.VUE_APP_URL}/register`, obj);
      if (res.data) {
        commit("POPULATE_USER", res.data);
      }
      commit("SET_LOADING", false);
    } catch (e) {
      commit("SET_LOADING", false);
    }
  },
};
const mutations = {
  POPULATE_USER(state, payload) {
    state.currentUser = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};

export default {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters,
};
