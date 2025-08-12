<template>
     <form class="todo-form">
                <input
                    type="text"
                    class="todo-input"
                    placeholder="Adicione um novo item ..."
                >
                <button type="submit" class="add-button">
                    ADICIONAR
                </button>
            </form>
</template>

<style scoped>
.todo-form {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
}

.todo-input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s;
}

.todo-input:focus {
    border-color: #10b981;
}

.todo-input::placeholder {
    color: #9ca3af;
}

.add-button {
    padding: 12px 20px;
    background-color: #10b981;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

.add-button:hover {
    background-color: #059669;
}

@media (max-width: 768px) {
    .todo-form {
        flex-direction: column;
    }
}
</style>