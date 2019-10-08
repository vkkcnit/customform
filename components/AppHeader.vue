<template>
    <header class="header">
        <h1 class="title">Custom Header Page</h1>
        <ul>
            <li>  
                <nuxt-link to="/">Home</nuxt-link>
            </li>
             <li>  
                <nuxt-link to="/custom">Home</nuxt-link>
            </li>
             <li>  
                <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>  
                <nuxt-link to="/customform">Custom new form</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
        name:"AppHeader"
}
</script>