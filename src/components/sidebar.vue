<template>
       <div class="sidebar close my-3">
            <ul class="nav-links icetab-container" id="icetab-container">
                <li class="icetab" v-for="val,index in sideBarJson" :key="'sidebar'+index" 
                :class="{'current-tab':isActive(val.name)}" @click="updateCurrentTab(val.name)">
                    <a class="nav_menu_icon_line" href="javascript:void(0)">
                        <img class="nav_menu_icon" :src="val.image" :alt="'icon_'+val.name">
                    </a>
                    <ul class="sub-menu blank">
                        <li ><a class="link_name" href="javascript:void(0)">{{ val.heading }}</a></li>
                    </ul>
                </li>
            </ul>
        </div>
</template>
<script setup>
import { inject } from 'vue';
const {isActive,updateCurrentTab,sideBarJson}=inject('indexStore')
</script>