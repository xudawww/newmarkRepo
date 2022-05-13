import axios from "axios";
const state = {
  address: "",
  city: "",
  houses: [],
  loading: false,
  hasNext: false,
};
const getters = {
  getHouses: (state) => state.houses,
  getLoading: (state) => state.loading,
  getHasNext: (state) => state.hasNext,
};
const actions = {
  queryAllHouse({ commit, state }, pageNumber) {
    commit("SET_LOADING", true);
    const oneLoadProductNum = parseInt(
      process.env.VUE_APP_EACH_LOAD_PRODUCT_SIZE
    );
    return axios
      .get(
        `${process.env.VUE_APP_URL}/products?pageSize=${oneLoadProductNum}&pageNumber=${pageNumber}`
      )
      .then((res) => {
        if (res.data) {
          state.hasNext = !res.data.last;
          console.log(res.data.content);
          let insertData = res.data.content;
          commit("POPULATE_HOUSE", insertData);
          commit("SET_LOADING", false);
  
          
        }
        
      });
  },
};
const mutations = {
  POPULATE_HOUSE(state, payload) {
    state.houses = payload;
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
