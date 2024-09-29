<template>
  <div>

    <head>
      <meta name="google-signin-client_id"
        content="9716725623-6d3jbatuo66qho6hj5ipptdcm114be7f.apps.googleusercontent.com">
    </head>

    <div class="d-flex align-items-center" id="navbar">
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
            <div id="loginPanelKanan">
              <div class="text-center">
                <p class="judulWelcome mb-1">Selamat Datang !</p>
                <p>Login untuk melanjutkan</p>
              </div>

              <v-form @submit.prevent>
                <div>
                  <v-text-field v-model="this.username" label="Username" id="username" class="mb-2"></v-text-field>
                  <v-text-field v-model="this.password" label="Password" id="password" class="mb-2"></v-text-field>
                  <v-btn type="submit" color="blue" @click="login()" block class="mb-5" id="btnSubmit">Submit</v-btn>
                </div>
              </v-form>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center text-center">
        <div id="snackbar" class="text-center">
          <p class="mx-auto mb-0 text-center">{{ this.pesanSnackBar }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "LoginPage",
  data() {
    return {
      username: '',
      password: '',
      pesanSnackBar: '',
    }
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
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ],

  }, mounted() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    this.isShouldLogin()
  },
  created() {
    this.scrollTop()
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Animasi smooth scrolling
      });
    },
    async login() {
      if (this.username != undefined && this.password != undefined) {
        try {
          const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/loginDosen2/`, {
            params: {
              username: this.username,
              password: this.password
            },
          });

          if (response.data.error === false) {
            localStorage.setItem('kodeDosen', response.data.response[0].kode_dosen)
            localStorage.setItem('namaDosen', response.data.response[0].nama)
            localStorage.setItem('isKaprodi', JSON.stringify(response.data.response[0].is_kaprodi));



            //memberikan sesi login ke dosen wali                    
            this.$store.commit("setAksesLogin", true)
            // ubah nilai isDisplayShouldLogin
            this.$store.commit("setIsDiplayShouldLogin", false)

            this.$router.push({ name: 'Beranda' })
          }
        } catch (error) {
          console.error("Terjadi kesalahan saat mengambil data:", error);
          this.pesanSnackBar = "Akun pengguna tidak ditemukan"
          this.snackbar()
        }
      } else {
        this.pesanSnackBar = "Pastikan Username dan password tidak kosong"
        this.snackbar()
      }
    },
    isShouldLogin() {
      if (this.$store.getters.getIsShouldDisplayLogin) {
        this.pesanSnackBar = "Silahkan login terlebih dahulu untuk melanjutkan"
        this.snackbar()
      }
    },
    snackbar() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },
  },

}
</script>

<style scoped src="./../../public/frontend/styling/indexLogin.css"></style>