import Vue from 'vue'
import Vuex from 'vuex'
import {startAddingPost, startLoadingDatas, startEditingDatas, startRemovingDatas, startLoadingCat} from './service/service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    category: []
  },
  mutations: {
    addDatas(state, data){
      state.data = data
    },
    loadDatas(state, data) {
      state.data = data
    },
    updateDatas(state, data) {
      state.data = data
    },
    deletePost(state, id) {
      let index = state.data.findIndex(data => data.id == id)
      state.data.splice(index, 1)
    },
    loadCategory(state, category){
      state.category = category
    }
  },
  actions: {
    addData({commit}, data) {
      startAddingPost(data)
      .then((response) => {
        commit('addDatas', response)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    loadData({commit}) {
      startLoadingDatas()
      .then((response) => {
        commit('loadDatas', response)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    editData({commit}, data) {
      startEditingDatas(data)
      .then((response) => {
        console.log(response)
        commit('updateDatas', data)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    deleteData({commit}, id){
      startRemovingDatas(id)
      .then((response) => {
        console.log(response)
        commit('deletePost', id)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    loadCategory({commit}) {
      startLoadingCat()
      .then((response) => {
        commit('loadCategory', response)
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
})