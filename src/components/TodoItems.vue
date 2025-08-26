<template>
    <div class="todos-container">
        <TodoItem 
        v-for="todo in $store.state.todos"
        :key="todo.id"
        :todo="todo"
        />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    components: {
        TodoItem
    }
}
</script>

<style scoped>
.todos-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>