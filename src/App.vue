<template>
    <div class="app-container">
        <div class="app-content">
          
          <!--se colocar <template> aparece o conteudo direto, com <div> aparece o 'pai' tbm-->
         <TodoSpinner v-if="loading" />  <!--so vai aparecer quando o ajax tiver em ação-->
         
         <template v-else>

         <TodoFormAdd />

         <TodoItems />

         <TodoEmpty />

         </template>
         
        </div>
    </div>         
</template>

<script>
import TodoEmpty from './components/TodoEmpty.vue';
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoItems from './components/TodoItems.vue';
import TodoSpinner from './components/TodoSpinner.vue';

import axios from 'axios'; 

export default{
  name: 'App',
  components: { TodoEmpty, TodoItems, TodoFormAdd, TodoSpinner},
  
  data() {
    return {
      loading: false
    }
  },

  created(){
    this.loading = true; //inicia loading
    console.log('requisição para API...');

    axios.get('http://localhost:3000/todos')
      .then((response) => {
        console.log('resposta da API/data');

        this.$store.commit('storeTodos', response.data)
        console.log('estado veux apos commit')
      }) //ajax acontece aqui

      .finally(() => {
        this.loading = false; //finaliza loading
        console.log('loading finalizado');
      })
  },

}
</script>

<style>
.app-container {
    padding: 40px 12px;
}

.app-content {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

</style>