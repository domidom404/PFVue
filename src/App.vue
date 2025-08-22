<template>
    <div class="app-container">
        <div class="app-content">
          
         <TodoSpinner v-if="loading" />
         
         <template v-else>

         <TodoFormAdd />
<!--garante que mensagem de vazio so aparece quando realmente estiver sem itens-->
         <TodoItems v-if="$store.state.todos.length" />

         <TodoEmpty v-else />

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
    this.loading = true; 
    
    this.$store.dispatch('getTodos').finally(() => {
      console.log('here') 
      this.loading = false;
    });  
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