<template>
    <preloader/>
    <bubbles/>
    <div class="cursor" ref="cursor"></div>
    <div class="dark_toggle">
        <div class="ul-header">
            <a class="mode" onclick="myFunction()" title="Toggle Mode">
                <div class="icon-container">
                    <i id="sunIcon" class="fa-solid fa-sun fa-spin icon"></i>
                    <i id="moonIcon" class="fa-solid fa-moon icon hidden"></i>
                </div>
            </a>
        </div>
    </div>
    <Header/>
    <Main/>
</template>
<script setup>
import preloader from './components/preloader.vue'
import bubbles from './components/bubbles.vue'
import Header from './components/header.vue'
import init from './composables/index.js'
import Main from './components/main.vue'
const {cursor}=init()
</script>