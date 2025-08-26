<template>
    <div class="spinner-container">
        <img 
          :src="spinnerImage" 
          alt="Loading..." 
          class="spinner" 
        />
        <p>Carregando...</p>
    </div>
</template>

<script>
import spinnerImage from '../assets/img/spinner.svg'

export default {
  data() {
    return {
      spinnerImage
    }
  }
}
</script>

<style scoped>
.spinner {
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>