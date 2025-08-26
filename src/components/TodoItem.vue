<template>
    <div class="todo-item">
        <div class="todo-content">
            <div class="todo-checkbox">

                <button 
                :class="['check-btn', { 'completed': todo.completed }]"
                @click="onCheckClick">

                    <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </button>
            </div>

            <div class="todo-input-wrapper">
                <input
                    v-model="title"
                    type="text"
                    placeholder="Digite a sua tarefa"
                    value="title"
                    :class="['todo-input', { 'completed-text': todo.completed }]"
                    @keyup.enter="onTitleChange" 
                >
            </div>
            <div class="todo-actions">
                <button 
                class="delete-btn"
                @click="onDelete"
                >
                    <svg class="delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   props: { 
      todo:{
         type: Object,
         default: () => ({}),
      },
   },

   data() {
    return{
        title: this.todo.title,
        isCompleted: this.todo.completed
    }
   },

   methods: {
    onTitleChange() {
        if(!this.title){
            return 
        }
        this.updateTodo()
    },
        updateTodo(){
            const payload = {
            id: this.todo.id,
            data: {
                title: this.title,
                completed: this.isCompleted 
            }
        }
    
        this.$store.dispatch('updateTodo', payload)
        console.log($evt.target.value);
    },

    onCheckClick() {
    this.isCompleted = !this.isCompleted 
    this.updateTodo() 
    },

    onDelete(){
        this.$store.dispatch('deleteTodo', this.todo.id)
    }
   },
}
</script>

<style scoped>
.todo-item {
    background-color: #e5e7eb;
    border-radius: 4px;
    margin-bottom: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.todo-content {
    display: flex;
    align-items: center;
    padding: 16px;
}

.todo-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
}

.check-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 2px;
    transition: color 0.2s;
}

.check-btn:hover {
    color: #059669;
}

.check-btn {
    color: #6b7280;
}

.check-btn.completed {
    color: #10b981;
}

.check-icon {
    width: 18px;
    height: 18px;
}

.todo-input-wrapper {
    flex: 1;
    width: 100%;
}

.todo-input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #4b5563;
    font-size: 16px;
    padding: 0;
    font-weight: 400;
}

.todo-input::placeholder {
    color: #9ca3af;
}

.todo-input.completed-text {
    text-decoration: line-through;
    color: #9ca3af;
}

.todo-actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.delete-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    color: #6b7280;
    transition: color 0.2s;
}

.delete-btn:hover {
    color: #dc2626;
}

.delete-icon {
    width: 18px;
    height: 18px;
}
</style>