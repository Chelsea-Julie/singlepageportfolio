<template>
    <div class="container vh-100">
        <h1>About</h1>
        <div class="row" v-if="true">
            <p>{{ about[0] }}</p>
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

    const about = computed(() => store.state.about)
    const store = useStore()

  
    onMounted(() => {
      console.log(about);
          store.dispatch('fetchAbout')

      })
  
  </script>

<style scoped>
    
</style>