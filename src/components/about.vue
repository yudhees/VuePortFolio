<template>
    <section class="oliva-intro tabcontent" id="about" :class="{'tab-active':isActive('about')}">
        <div class="intro_main">
            <h2 class="intro font_w_font_s fade_up">about me</h2>
        </div>
        <h2 class="moswa font_w_font_s fade_up">
            {{ contents?.about?.heading }}
        </h2>
        <h3 class="passionate font_w_font_s1 fade_up" v-html="contents?.about?.value">
        </h3>
        <div class="about_counter fade_up">
            <div class="counter">
                <h3 class="counter2 count font_w_font_s" :data-count="interval">
                    {{ interval }}+
                </h3>
                <h3 class="experince font_w_font_s1 ">YEARS OF EXPERIENCE</h3>
            </div>
            <div class="counter">
                <h3 class="counter2 count font_w_font_s" :data-count="contents?.projects?.value">
                    {{ contents?.projects?.value }}+
                </h3>
                <h3 class="experince">PROJECTS COMPLETED</h3>
            </div>
        </div>
    </section>

</template>
<script setup>
import { inject } from 'vue';
const {contents,isActive}=inject('indexStore')
const interval=parseInt(new Date().getFullYear())-2023;
</script>