<template>
    <section class="oliva-intro tabcontent" id="home" :class="{'tab-active':isActive('home')}">
        <div class="intro_main">
            <h2 class="intro font_w_font_s fade_up">intro</h2>
        </div>
        <h2 class="moswa font_w_font_s fade_up">Say Hi from Yudhees, Full Stack Developer</h2>
        <h3 class="passionate font_w_font_s1 fade_up">
            {{ contents?.objective?.value }}
        </h3>
        <div class="button_circle_group">
           <Dowloadcvbtn/>
            <div class="circular_text_main ">
                <!-- <a href="javascript:void(0)" class="down_arrow_main position-relative">
                               <img class="circular_text" src="/assets/images/circular_text.png" alt="circular_text">
                               <img class="down_arrow" src="/assets/images/down_arrow.svg" alt="down_arrow">
                            </a> -->
            </div>
        </div>
    </section>
</template>
<script setup>
import { inject } from 'vue';
import Dowloadcvbtn from './dowloadcvbtn.vue';
const {contents,isActive}=inject('indexStore')
</script>