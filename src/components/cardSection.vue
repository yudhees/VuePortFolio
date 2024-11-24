<template>
<section class="card_section" id="card_main">
            <div class="olivia_bio" id="oliva_details">
                <div class="imgBox">
                  <img :src="CDN+'/images/yudhees.jpg'" class="w-100 h-100">
                </div>
                <div class="bio_contain">
                    <h1 class="olivia_moswa">Yudhees</h1>
                    <h2 class="designer font_w_font_s1 overflow-hidden"></h2>
                    <button class="download_cv hire_me font_w_font_s" @click="updateCurrentTab('contact')">
                        <i class="ri-at-line"></i> Hire Me
                    </button>
                </div>
            </div>
            <div class="right_card_main icetab-content" id="icetab-content">
                <Home />
                <About />
                <Resume/>
                <Skills />
                <Contact />
                <!-- ======================================= Services Section ================================== -->
            
             
                <!-- ======================================= Portfolio Section  ================================== -->
                <!-- ======================================= Portfolio Section End  ================================== -->
                <!-- ======================================= Testimonials Section  ================================== -->
                <!-- ======================================= Testimonials Section End ================================== -->
                <!-- ======================================= Blog Section  ================================== -->
                <!-- ======================================= Blog Section End  ================================== -->
            </div>
        </section>
</template>
<script setup>
import Home from './home.vue'
import About from './about.vue'
import Resume from './resume.vue'
import Skills from './skills.vue';
import Contact from './contact.vue'
import { inject } from 'vue';
const {updateCurrentTab}=inject('indexStore')
const CDN=inject('CDN_URL')
</script>