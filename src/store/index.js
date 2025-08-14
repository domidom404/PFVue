import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, payload){
      state.todos = payload
    },

    storeTodo(state, payload){
      state.todos.unshift(payload) //unshift adiciona em primeira posição
  },
},

  actions: {
    getTodos({ commit }) {
      return new Promise((resolve) => {
         setTimeout(() => {
         return axios.get('http://localhost:3000/todos')
            .then((response) => {
              commit('storeTodos', response.data)
              resolve()
            }) //retorna uma promise
      }, 3000)//simula um delay 3s 
      })
    },

     addTodo({ commit }, data) {
      return axios.post('http://localhost:3000/todos', data)
        .then((response) => {
          commit('storeTodo', response.data)
        })
    }//adiciona todos
  },

  modules: {
  }
})
