<template>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/posts/1">Post 1</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/posts/2">Post 2</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/counter">Counter</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
nav {
    background-color: #00DC82;
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px !important;
    min-height: 80px;
}

ul>li {
    list-style: none;
}

ul>li a{
    list-style: none;
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 16px;
}
</style>