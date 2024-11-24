<template>
    <div class="toggle" onclick="openNav()">
            <img class="line-menu" :src="CDN+'/images/line-menu.png'" alt="line-menu">
        </div>
        <div id="mySidenav" class="sidenav">
            <div class="closebtn" onclick="closeNav()">&times;</div>
            <ul class="sidescreen_sub icetab-container" id="icetab-container2">
                <li class="icetab" onclick="openNav()" 
                v-for="val,index in sideBarJson" :key="'sideMenu'+index" 
                :class="{'current-tab':isActive(val.name)}" @click="updateCurrentTab(val.name)"
                >
                    <a class="icons2" href="javascript:void(0)">
                        <img class="nav_menu_icon sidenav_img" :src="val.image" :alt="val.name+'_icon'">{{ val.heading }}
                    </a>
                </li>
            </ul>
        </div>
</template>
<script setup>
import { inject } from 'vue';
const {isActive,updateCurrentTab,sideBarJson}=inject('indexStore')
const CDN=inject('CDN_URL')
</script>