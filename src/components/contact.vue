<template>
    <section class="oliva-intro tabcontent" id="contact" :class="{'tab-active':isActive('contact')}">
        <div class="intro_main">
            <h2 class="intro fade_up">contact us</h2>
        </div>
        <h2 class="moswa fade_up">Let's Work Together!</h2>
        <form id="contactform" netlify @submit.prevent="submitForm"  data-netlify="true">
            <div class="container1">
                <div class="form form__1">
                    <label for="name" class="form__label">What’s Your Name*</label>
                    <input type="text" class="form__input"  id="name" name="name" required
                        autocomplete="off" v-model="form.name">
                </div>
                <div class="form form__2">
                    <label for="email" class="form__label">Your Email*</label>
                    <input type="email" class="form__input"  id="email" required autocomplete="off"
                        name="email" v-model="form.email">
                </div>
                <div class="form form__1">
                    <label for="name" class="form__label">Your Phone Number</label>
                    <input type="text" class="form__input"  id="phone" autocomplete="off" name="mobile" v-model="form.mobile">
                </div>
            </div>
            <div class="btn_message">
                <div class="form form__3">
                    <label for="name" class="form__label">Message*</label>
                    <input type="text" class="form__input message2"  id="message" required name="message" v-model="form.message">
                </div>
                <div class="send_message_form">
                    <button class="download_cv form__btn" type="submit" :disabled="loading">
                        <i class="fa-regular fa-paper-plane material-icons"></i>Send Message
                    </button>
                </div>
            </div>
        </form>
        <div>
            <h3 class="moswa touch">Get in touch!</h3>
            <div class="contact_number_main">
                <img :src="CDN+'/images/contact.svg'" alt="contact">
                <h4 class="contact_number"><a href="tel:+918220611249">+91 8220611249</a></h4>
            </div>
            <div class="contact_number_main">
                <img :src="CDN+'/images/gmail.svg'" alt="gmail">
                <h4 class="contact_number"><a href="mailto:hello@yudees479@gmail.com">yudees479@gmail.com</a></h4>
            </div>
            <div class="contact_number_main">
                <img :src="CDN+'/images/map.svg'" alt="map">
                <h4 class="contact_number">
                    <a href="javascript:void;">No:12,Majeeth Road,Sivagangai</a>
                </h4>
            </div>
        </div>
        <iframe src="https://maps.google.com/maps?q=majeeth+road%2Csivagangai&t=&z=12&ie=UTF8&iwloc=&output=embed"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>

    </section>
</template>
<script setup>
import axios from 'axios';
import { inject, reactive, ref } from 'vue';
const { isActive } = inject('indexStore')
const CDN=inject('CDN_URL')
const form=reactive({
    email:'',name:"",mobile:'',message:'',
})
const loading=ref(false)
const submitForm=async()=>{
   if(validateForm()){
      if(!loading.value){
       loading.value=true
      try {
          const res=await axios.post('/submit-contact',form)    
          if(res.data?.success){
            form.email=''
            form.name=''
            form.mobile=''
            form.message=''
            alert('Data Saved I will get back to you')
          }
          else
          alert('SomeThing Went Wrong Please Mail to yudees479@gmail.com')
      } catch (error) {
          alert('SomeThing Went Wrong Please Mail to yudees479@gmail.com')
      }
      loading.value=false
      }
   }
   else
    alert("Invalid Form submission")
}
const validateForm=()=>{
    let valid=true
    Object.entries(form).forEach(([key,val])=>{
         if(!val.length)
         valid=false
    })
    return valid
}
</script>