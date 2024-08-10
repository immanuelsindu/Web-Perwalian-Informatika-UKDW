<template >
    <div id="myContainer" class="d-flex align-items-center">
        <div>
            <div class="d-flex justify-content-center">
                <img src="..\assets\404.png" alt="">
              </div>
    
            <div class="d-flex justify-content-center pt-3" id="zIndex">
                <p class="errorMessage">Halaman yang Anda minta tidak ditemukan</p>
            </div>
    
            <div id="zIndex" class="d-flex justify-content-center " >
                <button type="button" class="btn btn-dark" @click="back()">
                     Kembali
                </button>
            </div>
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
        methods:{
            back(){
                window.history.back();
            }
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
    img{
        width: 28%;
        margin-bottom: 2rem;
    }
    
    #myContainer{
        width: 100%;
        height: 100%;
        margin: 0;
        position: absolute;
        vertical-align: middle;
    }
    
    .errorMessage{
        font-family: abz;
        font-size: 1.2rem;
        color: #0582C1;
    }
    .btn-dark{
        font-family: abz;
        padding: 0.2rem 1.5rem;
        border-radius: 0.625rem;
        background-color: #0582C1;
        border: 3px solid #0582C1 ;
        color: white;
        transition: 0.2s all ease-in-out;
        font-family: inter;
        font-size: 1.2rem;
    }
    .btn-dark:hover{
        font-family: abz;
        padding: 0.2rem 1.5rem;
        border-radius: 0.625rem;
        background-color: white;
        color: #0582C1;
        border: 3px solid #0582C1 ;
        transition: 0.3s all ease-in-out;
        font-family: inter;
        font-size: 1.2rem;
    }
    .attribution {
        display: none !important;
      }

 
   
</style>