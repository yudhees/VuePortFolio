<template>
    <section class="oliva-intro tabcontent" id="contact" :class="{'tab-active':isActive('contact')}">
        <div class="intro_main">
            <h2 class="intro fade_up">contact us</h2>
        </div>
        <h2 class="moswa fade_up">Let's Work Together!</h2>
        <form id="contactform" action="submitcontact.php" method="post">
            <div class="container1">
                <div class="form form__1">
                    <label for="name" class="form__label">What’s Your Name*</label>
                    <input type="text" class="form__input"  id="name" name="name" required
                        autocomplete="off">
                </div>
                <div class="form form__2">
                    <label for="email" class="form__label">Your Email*</label>
                    <input type="email" class="form__input"  id="email" required autocomplete="off"
                        name="email">
                </div>
                <div class="form form__1">
                    <label for="name" class="form__label">Your Phone Number</label>
                    <input type="text" class="form__input"  id="phone" autocomplete="off" name="mobile">
                </div>
            </div>
            <div class="btn_message">
                <div class="form form__3">
                    <label for="name" class="form__label">Message*</label>
                    <input type="text" class="form__input message2"  id="message" required name="message">
                </div>
                <div class="send_message_form">
                    <button class="download_cv form__btn">
                        <i class="fa-regular fa-paper-plane material-icons"></i>Send Message
                    </button>
                </div>
            </div>
        </form>
        <div>
            <h3 class="moswa touch">Get in touch!</h3>
            <div class="contact_number_main">
                <img src="/assets/images/contact.svg" alt="contact">
                <h4 class="contact_number"><a href="tel:+918220611249">+91 8220611249</a></h4>
            </div>
            <div class="contact_number_main">
                <img src="/assets/images/gmail.svg" alt="gmail">
                <h4 class="contact_number"><a href="mailto:hello@yudees479@gmail.com">yudees479@gmail.com</a></h4>
            </div>
            <div class="contact_number_main">
                <img src="/assets/images/map.svg" alt="map">
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
import { inject } from 'vue';
const { isActive } = inject('indexStore')
</script>