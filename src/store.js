import Vue from 'vue'
import Vuex from 'vuex'
import {startAddingPost, startLoadingDatas, startEditingDatas, startRemovingDatas} from './service/service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    addDatas(state, data){
      state.data = data
    },
    updateDatas(state, data) {
      state.data = data
    },
    deletePost(state, id) {
      let index = state.data.findIndex(data => data.id == id)
      state.data.splice(index, 1)
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
        commit('updateDatas', response)
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
    }
  }
})