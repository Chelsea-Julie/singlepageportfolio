<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <img src="https://chelsea-julie.github.io/all-images/images/bubbles.png" alt="profile" class="img-fluid" loading="lazy">
            </div>
            <div class="col">
                <div id="details">
                    <h1 class="display-1">Chelsea Julie</h1>
                    <span>{{ jobTitle[0].title }}</span>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import {computed, onMounted} from 'vue'
const jobTitle = computed(() => this.$store.state.jobTitle)
onMounted (() => {
    this.$store.dispatch('fetchJobtitle')
}
)
</script>
<style>
    
</style>