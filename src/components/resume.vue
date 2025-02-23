<template>
    <section class="oliva-intro tabcontent" id="resume" :class="{ 'tab-active': isActive('resume') }">
        <div class="intro_main">
            <h2 class="intro font_w_font_s fade_up">Resume</h2>
        </div>
        <h2 class="moswa font_w_font_s fade_up">Education</h2>
        <h3 class="passionate font_w_font_s1 fade_up">
            {{ contents?.education?.value }}
        </h3>
        <div class="education position-relative education_space">
            <div class="side_circle_ring fade_up">
                <div class="small_yellow_border">
                    <div class="small_yellow_circle"></div>
                </div>
            </div>
            <div class="small_yellow_border_main fade_up">
                <h3 class="bachelor font_w_font_s1">Bachelor of Electrical and Electroics Enginnering</h3>
                <h4 class="university font_w_font_s1">Sri Shakthi Institute of Enginnering and Technology University /
                    2019 - 2023
                </h4>
            </div>
        </div>
        <h2 class="moswa experience_main_text font_w_font_s fade_up">Experience</h2>
        <div class="education position-relative education_space" v-for="val in experience" :key="'experience'+val._id">
            <div class="side_circle_ring fade_up">
                <div class="small_yellow_border">
                    <div class="small_yellow_circle"></div>
                </div>
            </div>
            <div class="small_yellow_border_main fade_up">
                <div class="envato_group_main">
                    <div>
                        <h3 class="bachelor font_w_font_s1">
                            {{ val.role }}
                        </h3>
                        <h4 class="company font_w_font_s1">
                            {{ `${val.name} / ${val.startYear} - ${val.endYear??'Current'}` }}
                        </h4>
                    </div>
                    <img class="company_logo" :src="val['image']" :alt="val['name']" style="max-height:53px;filter: none;">
                </div>
                <h5 class="cursus font_w_font_s1">
                    {{ val['description'] }}
                </h5>
            </div>
        </div>
        <Dowloadcvbtn/>
    </section>
</template>
<script setup>
import { inject } from 'vue';
import Dowloadcvbtn from './dowloadcvbtn.vue';
const { contents, isActive,experience } = inject('indexStore')
</script>