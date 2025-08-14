<template>
    <div class="app-container">
        <div class="app-content">
          
         <TodoSpinner v-if="loading" />
         
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
      //quando a promise for resolvida, seta o loading para false
      console.log('here') //garantir que ta indo ate aqui'
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