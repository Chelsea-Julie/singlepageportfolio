<template>
    <div class="container vh-100">
        <h1>education</h1>
        <div class="row" v-if="true">
            <p>{{ education }}</p>
        </div>
        <div v-else class="row">
            <Spinner />
        </div>
    </div>
</template>
<script setup>
  
  import {computed, onMounted } from 'vue'
  import {useStore} from 'vuex'
  import Spinner from '@/components/Spinner.vue'
  

    const education = computed(() => store.state.education)
    const store = useStore()

  
    onMounted(() => {
      console.log(education);
          store.dispatch('fetchEducation')

      })
  
  </script>

<style scoped>
    
</style>