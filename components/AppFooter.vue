<template>
    <footer>
        <span>&copy; 2024 Manuel Luvuvamo - Todos os Direitos Reservados</span>
        <br/><br/>
        <span>
            <time datetime="">{{ data }}</time>
        </span>
    </footer>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/foo')

</script>