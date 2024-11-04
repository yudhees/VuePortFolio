<template>
    <section class="oliva-intro tabcontent" id="skill" :class="{ 'tab-active': isActive('skills') }">
        <div class="intro_main">
            <h2 class="intro font_w_font_s fade_up">my skills</h2>
        </div>
        <h2 class="moswa font_w_font_s fade_up">Crafting Stories through Design and Imagination</h2>
        <h3 class="lan_skill font_w_font_s fade_up">Language Skills</h3>
        <div class="skill_circle_main">
            <div>
                <div class="circlechart" data-percentage="70"></div>
                <h2 class="subject">English</h2>
            </div>
            <div>
                <div class="circlechart" data-percentage="90"></div>
                <h2 class="subject">Tamil</h2>
            </div>
        </div>
        <h3 class="lan_skill hard_skill font_w_font_s fade_up">Hard Skills</h3>
        <div class="skill_circle_main">
            <div class="skill_circle fade_up" v-for="skill in skills" :key="'skill'+skill._id">
                <div class="hard_skill_group">
                    <img :src="skill['image']" :alt="skill['name']" style="max-height:49px;min-height:36px">
                    <h4 class="hard_skill_counter font_w_font_s1">
                     {{skill.percentage}} %
                    </h4>
                </div>
                <h4 class="subject font_w_font_s1">
                    {{ skill.name }}
                </h4>
            </div>
        </div>
    </section>
</template>
<script setup>
import { inject } from 'vue';
const { isActive, skills } = inject('indexStore')
</script>