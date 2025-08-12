import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, payload){
      //payload é equivalente a data
      state.todos = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
