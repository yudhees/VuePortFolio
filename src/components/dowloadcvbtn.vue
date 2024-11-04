<template>
    <div>
        <button class="download_cv font_w_font_s" @click="downloadCv">
            <i class="ri-download-cloud-2-line"></i>Download CV
        </button>
    </div>
</template>
<script setup>
const downloadCv=()=>{
    window.open('/assets/pdf/Yudhees_resume.pdf')   
}
</script>