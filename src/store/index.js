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
         return axios.get(`http://localhost:3000/todos`) //tinha colocado '' no lugar  de `` que causou muitos erros
            .then((response) => {
              commit('storeTodos', response.data)
              resolve()
            }) 
      }, 1000)
      })
    },

     addTodo({ commit }, {id, data}) {
      return axios.post(`http://localhost:3000/todos`, data)
        .then((response) => {
          commit('storeTodo', response.data)
        })
    },

    updateTodo(context, { id, data}) {
      return axios.put(`http://localhost:3000/todos/${id}`, data)
    //update precisa do .put dps do axios 
    }
  },
})
