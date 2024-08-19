<script setup>

const emit = defineEmits(["click"]);

defineProps({
  namaDosen: {
    type: String,
    default: ""
  }
})

const logoutDosen = () => {
  emit("click");
}

</script>

<template>
  <div class="row align-items-center ml-0 stickyNavbar" id="navbar">
    <div id="navbar1" class="col-lg-8 mt-lg-0 col-sm-12 mt-sm-3">
      <div class="d-flex">
        <div class="ml-3" id="iconBeranda">
          <router-link to="/">
            <span class="material-symbols-outlined" style="color: #3c2a21">
              home
            </span>
          </router-link>
        </div>

        <div id="judulWeb" class="mb-0">
          <p class="ml-2">Program Studi Informatika UKDW</p>
        </div>
      </div>
    </div>

    <div id="navbar2" class="col-lg-4 col-sm-12">
      <div id="idPengguna" class="w-100">
        <div class="">
          <div class="d-flex justify-content-end col-12 p-0">
            <div id="labelNamaDosen" class="d-flex align-items-center mr-3">
              <p class="m-0 text-center">
                <v-icon class="mr-2 " size="small">
                  mdi-account
                </v-icon>
              </p>
              <p id="infoNamaDosen" class="m-0">
                {{ namaDosen }}
              </p>
            </div>

            <v-btn class="dropDownDosen" color="#E5E5CB" flat active theme="light" @click="logoutDosen()">
              <v-icon size="default">
                mdi-logout
              </v-icon>
              <v-tooltip activator="parent" content-class="bg-grey-darken-1" location="bottom">Logout
              </v-tooltip>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stickyNavbar {
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  z-index: 99 !important;
}

#logoutUser {
  color: #3C2A21;
  text-decoration: none;
}

#navbar {
  width: 100%;
  height: 4rem;
  /* height: 30% !important; */
  background-color: #E5E5CB;
}

#navbar p {
  /* width: 500px; */
  margin: 0rem;
  font-size: 1.2rem;
  font-family: inter;
  color: #3C2A21;
  font-weight: bold;
  margin-left: 1rem;
}

.material-symbols-outlined.dropdown {
  cursor: pointer;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}

#labelNamaDosen {
  background-color: #d5d5be;
  padding: 0rem 0.5rem;
  border-radius: 0.3rem;
}

#labelNamaDosen #infoNamaDosen {
  font-size: 1rem;
}

.dropDownDosen {
  font-weight: 600;
  text-transform: capitalize;
  font-family: inter;
  font-size: 1rem;
  letter-spacing: normal;
}

@media screen and (max-width: 575px) {

  /* breakpoint navbar */
  div#iconBeranda {
    display: none;
  }

  div#navbar1 {
    margin-top: 0.5rem;
  }

  div#navbar2 {
    margin-bottom: 0.5rem;
  }

  div#idPengguna {
    float: none;
  }

  div#navbar {
    height: fit-content;
  }

  /* breakpoint konten */
  div#itemCatatan {
    margin-bottom: 2rem;
  }

  div#listCatatanPerwalian {
    margin-left: auto;
    margin-right: auto;
  }

  div#itemNamaMhs {
    width: 350px;
  }

  div#itemMahasiswa {
    margin-bottom: 2rem;
  }

  div#judulWeb {
    display: inline;
    width: max-content;
  }

  div#infoMahasiswa {
    border-bottom: none !important;
  }

  span.cekal {
    display: none;
  }

  span.cekalDash {
    display: none;
  }

  span#cekalBullet {
    display: inline !important;
    font-size: inherit;
  }

  input#inputCariCatatanPerwalian {
    width: 300px;
  }

  img#fotoDosen {
    width: 40% !important;
  }

  div#bagianGrupAngkatan {
    margin-left: 1rem;
  }

  div#containerMahasiswaAngkatan {
    width: 100px !important;
  }
}
</style>