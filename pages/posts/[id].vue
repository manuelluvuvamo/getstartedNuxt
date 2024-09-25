<template>
    <div>
        <span>Teste Post: {{ route.params.id }}</span>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    validate: async (route) => {
        // Check if the id is made up of digits
        return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    }
})
const route = useRoute()
console.log(`ID: ${route.params.id}`)
</script>