<template>
    <div class="all_page" id="page">
        <cardSection />
        <div class="social_media_main" id="social_media_main">
            <ul class="social_media">
                <li><a href="https://github.com/yudhees" target="blank">GI</a></li>
                <li><a href="https://www.linkedin.com/in/yudhees-raam-kumar-k-b-a9711b237/" target="blank">LI</a></li>
            </ul>
        </div>
    </div>
    <div class="position-relative">
        <div class="position-fixed" style="right: 51px; bottom: 15px;">
            <button class="text-white rounded-5 schedule"
                @click="toggleCalender" data-bs-toggle="tooltip"
                data-bs-title="Schedule Meeting">
                <i class="ri-calendar-2-line"> </i>
            </button>
        </div>
    </div>
</template>
<script setup>
import cardSection from './cardSection.vue';
const toggleCalender=()=>{
    window.open('https://calendly.com/yudees479/30min','_blank')
}
</script>