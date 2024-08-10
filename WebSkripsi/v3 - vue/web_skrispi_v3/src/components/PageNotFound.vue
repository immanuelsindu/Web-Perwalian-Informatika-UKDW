<template >
    <div id="myContainer">
        <div class="d-flex justify-content-center">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_4qhciwpm.json"
              background="transparent"
              speed="1"
              style="width: 30rem; height: 100%;"
              loop
              autoplay
            ></lottie-player>
          </div>

        <div class="d-flex justify-content-center pt-3" id="zIndex">
            <p class="errorMessage">Halaman yang Anda minta tidak ditemukan</p>
        </div>

        <div id="zIndex" class="d-flex justify-content-center " >
            <router-link  type="button" to="/" class="btn btn-dark">
                Beranda
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        name:'PageNotFound',
        data(){
            return{
               
            }
        },
        mounted(){
            //lottie animations
            const script1 = document.createElement("script");
            script1.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
            document.head.appendChild(script1);

            const script2 = document.createElement("script");
            script2.src = "https://assets10.lottiefiles.com/packages/lf20_4qhciwpm.json";
            document.head.appendChild(script2);
        }
    }
</script>

<style scoped >
    @font-face {
        font-family: abz;
        src: url("../../public/frontend/font/ABeeZee-Regular.ttf");
    }
    #pageNotFound{
        width: 100%;
        height: 18rem;
    }
    #pageNotFound:hover{
        pointer-events: none;
    }
    #zIndex{
        z-index: 1000 !important;
    }
    #myContainer{
        background-image: url("../assets/404back.svg");
        background-size: cover;
        height: 46.4vw;
        margin: 0;
        padding-top: 10rem;
    }

    .errorMessage{
        font-family: abz;
        font-size: 1.2rem;
        color: #11324D;
    }
    .btn-dark{
        font-family: abz;
        padding: 0.2rem 2rem;
        border-radius: 1.5rem;
        background-color: #11324D;
        border: 3px solid #11324D ;
        color: white;
        transition: 0.2s all ease-in-out;
        font-family: inter;
        font-size: 1.2rem;
    }
    .btn-dark:hover{
        font-family: abz;
        padding: 0.2rem 2rem;
        border-radius: 1.5rem;
        background-color: #ECF7FF;
        color: #11324D;
        border: 3px solid #11324D ;
        transition: 0.3s all ease-in-out;
        font-family: inter;
        font-size: 1.2rem;
    }
    .attribution {
        display: none !important;
      }

 
   
</style>