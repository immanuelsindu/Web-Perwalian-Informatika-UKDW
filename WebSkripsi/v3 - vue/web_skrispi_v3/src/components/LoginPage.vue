<template>

    <div>
        <head>
            <meta name="google-signin-client_id" content="9716725623-6d3jbatuo66qho6hj5ipptdcm114be7f.apps.googleusercontent.com">
        </head>

        <div class="d-flex align-items-center"  id="navbar">
            <p>Program Studi Informatika UKDW</p>
        </div>

        <div id="loginPanel">
            <p id="judulWeb" class="pt-4 pl-4 mb-0">Perwalian Informatika UKDW</p>
            <div id="garis"></div>

            <div class="d-flex pb-4">
                <div class="row mx-0">
                    <div class="col-lg-6 col-md-12 px-0 d-flex justify-content-center">
                        <div id="loginPanelKiri" class="text-center mx-3">
                            <img class="pt-4" src="../../public/frontend/media/people.jpg" alt="people.jpg">
                        </div>
                    </div>
        
                    <div class="col-lg-6 col-md-12 px-0 d-flex justify-content-center align-self-center">
                        <div  id="loginPanelKanan">
                            <div class="text-center">
                                <p class="judulWelcome mb-1">Selamat Datang !</p>
                                <p>Login untuk melanjutkan</p>
                            </div>
        
                            <div id="loginSSO" class="mt-2">
                                <div class="d-flex justify-content-center mt-2">
                                    <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
                                    <router-link :to="{name:'Beranda'}">Masuk</router-link>
                                    <!-- <a href="#">Masuk</a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    // import BreadcrumbModule from './BreadcrumbModule.vue';
  

    export default {
    name:"LoginPage",
    components:{
        
       
    },
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',
                integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
                crossorigin: 'anonymous'
            },
            {
                rel:"stylesheet",
                href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css",
            },
            {
                rel:"stylesheet",
                href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            }
        ],

    },mounted(){
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        //css link
        // const link = document.createElement('link');
        // link.rel = 'stylesheet';
        // link.href = './../../public/frontend/styling/indexLogin.css';
        // document.head.appendChild(link);
    },
    methods: {
        // onSignIn(googleUser) {
        //     var profile = googleUser.getBasicProfile();
        //     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        //     console.log('Name: ' + profile.getName());
        //     console.log('Image URL: ' + profile.getImageUrl());
        //     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        // },
        scrollTop(){
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animasi smooth scrolling
            });
        }
    },
    created(){
            this.scrollTop();
        }
    }
</script>

<style scoped src="./../../public/frontend/styling/indexLogin.css">
   
</style>