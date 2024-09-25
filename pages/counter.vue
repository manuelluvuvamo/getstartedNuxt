<template>
  <div>
    <!-- Compositr element para gerenciamento de estados, useState -->
    Counter: {{ counter }}

    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup lang="ts">
const counter = useState('counter', () => Math.random() * 1000)
</script>