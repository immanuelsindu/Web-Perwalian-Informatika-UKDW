<template lang="">
    <div>
        <head> 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
        </head>
        
        <!-- Navbar -->
        <Header :namaDosen="this.namaDosen" @click="this.logoutDosen()" />

        <!-- Content -->
        <div id="content" class="container-fluid px-0">

            <div class="col-12 mt-4">
                <div class="row">
                    <div class="col-10 pr-0">
                        <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>
                    </div>
                    <div class="col-1 pl-5">
                        
                    </div>
                </div>
            </div>
        
            <div id="judulCatatan">
                <p>Arsip Catatan Perwalian Grup Angkatan {{this.$route.params.id}}</p>
            </div>
            
            <div class="mx-md-5 mb-sm-5">
                <div id="cariCatatanPerwalian" class="row mt-md-5 mb-md-4 ml-sm-5">
                    <div class="col-md-7 col-sm-12 px-sm-0 mb-sm-2">
                        <div class="mb-2 d-inline">
                            <span class="material-symbols-outlined search ">
                                search
                                </span>
                            <input id="inputCariMahasiswa" class="mb-2" type="text" placeholder="Cari arsip catatan" v-model="inputanJudulCatatan">
                        </div>
        
                        <div id="alertPencarian">
                            <p>{{this.pesanError}}</p>
                        </div>
                    </div>

                    <div id="opsiFilter" class="d-flex col-md-4 col-sm-12 px-0">
                        <div class="col-4 mb-3 mr-3 p-0">
                            <div>
                                <v-select
                                    v-model="this.tahunArsip"
                                    :items="this.listTahunArsip"
                                    density="comfortable"
                                    label="Tahun"
                                    variant="solo-filled"
                                    id="filterTahun"
                                ></v-select>
                            </div>
                        </div>

                        <div class="col-7 mb-3 p-0">
                            <div>
                                <v-select
                                    v-model="this.tipeCatatan"
                                    :items="this.listTipeCatatan"
                                    density="comfortable"
                                    label="Kategori"
                                    variant="solo-filled"
                                    id="filterKategori"
                                ></v-select>
                            </div>
                        </div>
                    </div>   
                </div>

                <div id="listCatatanArsip" class="mb-md-5 mt-sm-4">
                    <div id="listCatatanArsipMahasiswa">
                        <div class="col-12" id="judulTipeCatatan">
                            <p class="mb-3 ml-5">Catatan Perwalian {{tipeCatatan}} {{this.$route.params.id}}</p>
                        </div>
                        <div class="col-12">
                            <div class="list-group list-group-flush">
                                  <!-- if jika catatan arsip ditemukan dari filter catatan -->
                                <div v-if="this.listCatatanArsip.length >0" id="containerListCatatanArsip">
                                    <div v-for="(items,index) in this.listCatatanArsip" :key="index" id="itemCatatanArsip" class="p-2 d-flex list-group-item list-group-item-action">
                                        <div class="col-5 px-0 py-2">
                                            <div class="d-flex ml-5">
                                                <div class="d-flex align-items-center mr-3">
                                                    <span class="material-symbols-outlined">person_filled</span>
                                                </div>
        
                                                <div id="dataPertamaCatatan">
                                                    <p class="mb-0">
                                                        <b><i class="judulCatatan">
                                                            {{items.judul}}
                                                        </i></b>
                                                    </p>
                                                    <p>{{limitAgenda(items.agenda_perwalian)}}</p>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div id="tanggalArsip" class="col-4 d-flex align-items-center">
                                            <p class="mb-0 mx-auto" data-toggle="tooltip" title="Tanggal diarsipkan">{{this.convertTimestamp(items.waktu_arsip)}}</p>
                                        </div>
        
                                        <div id="opsiCatatan" class="col-3 d-flex align-items-center">
                                            <div class="ml-auto d-flex pr-5">
                                                <div class="mr-2">
                                                    <span class="material-symbols-outlined text-warning" data-toggle="tooltip" title="Pulihkan Catatan" @click="showPopUpArsip(items.id_catatan_perwalian_dosen)">
                                                        settings_backup_restore
                                                    </span>
                                                </div>
                                                <div>
                                                    <span class="material-symbols-outlined text-danger" data-toggle="tooltip" title="Hapus Catatan" @click="showPopUpHapus(items.id_catatan_perwalian_dosen)">
                                                        delete
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                 <!-- else jika catatan tidak ditemukan  -->
                                 <div v-else id="containerListCatatanArsip">
                                    <div id="itemCatatanArsip" class="p-2 d-flex justify-content-center">
                                        <div class="col-12 px-0 py-2">
                                            <div class="d-flex justify-content-center ml-5">
                                                <div id="dataPertamaCatatanNotFound" class="d-flex align-items-center justify-content-center">
                                                    <h5 class="mb-0 "> 
                                                        <b>
                                                            Tidak ada catatan arsip
                                                        </b>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <!-- pop up untuk pulihkan catatan perwalian -->
            <Transition>
                <div id="overlay" v-if="this.showWarningArsip" class="d-flex justify-content-center align-items-center">
                    <div id="windowPreferensi">
                        <div id="contentPreferensi" class="p-4">
                            <p class="text-center font-weight-bold mb-3">Yakin pulihkan catatan ? </p>
                            <p class="px-3 text-justify">Setelah Anda memulihkan catatan, Anda dapat mengakses catatan tersebut di halaman <span><b>"Daftar Catatan Perwalian Dosen"</b></span>
                            </p>

                            <div class="row mt-4">
                                <div class="col-4 px-0 d-flex justify-content-center">
                                    <button class="btn batal arsip" @click="arsipCatatanTidak()">Tidak</button>
                                </div>
                                <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                                    <button class="btn simpan arsip" @click="arsipCatatanYa()">Ya</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>

            <!-- pop up untuk hapus permanen catatan perwalian -->
            <Transition>
                <div id="overlay" v-if="this.showWarningHapus" class="d-flex justify-content-center align-items-center">
                    <div id="windowPreferensi">
                        <div id="contentPreferensi" class="p-4">
                            <p class="text-center font-weight-bold mb-3">Yakin hapus catatan ? </p>
                            <p class="px-3 text-center text-danger">Catatan ini akan dihapus secara permanen dan tidak bisa
                                dikembalikan.
                            </p>

                            <div class="row mt-4">
                                <div class="col-4 px-0 d-flex justify-content-center">
                                    <button class="btn batal hapus" @click="hapusCatatanTidak()">Tidak</button>
                                </div>
                                <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                                    <button class="btn simpan hapus" @click="hapusCatatanYa()">Ya</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>

            <div id="snackbar">
                <p class="m-0">{{ this.pesanSnackBar }}</p>
            </div>

            
        </div>
    </div>
</template>

<script>
import BreadcrumbModule from '@/views/BreadcrumbModule.vue';
import Header from "@/components/header/Header.vue"
import axios from 'axios'

export default {
  name: "ArsipPerwalianGrupAngkatan",
  components: {
    BreadcrumbModule,
    Header
  },
  data() {
    return {
      isOn: false,
      isOn2: false,
      inputanJudulCatatan: "",
      indexHapusCatatan: 0,
      ////////////////////////////////////////////////////////
      kodeDosen: "",
      pesanSnackBar: "",
      listTipeCatatan: ["Grup Angkatan"],
      listTahunArsip: [],
      listCatatanArsip: [],
      tahunArsip: 0,
      tipeCatatan: "Grup Angkatan",
      filter: "grup-angkatan",
      showWarningArsip: false,
      idArsip: 0,
      showWarningHapus: false,
      idHapus: 0,
      namaDosen: localStorage.getItem("namaDosen")
    }
  },
  created() {
    this.scrollTop();
    this.initData()
  },
  methods: {
    async initData() {
      this.kodeDosen = localStorage.getItem("kodeDosen")
      this.getTahunCatatanArsip()
    },
    batal() {
      this.isOn = false;
    },
    simpan() {
      this.isOn = false;
    },
    hapusCatatanTidak() {
      this.isOn2 = false;
    },
    hapusCatatanYa(idCatatan) {
      this.indexHapusCatatan = idCatatan
      this.isOn2 = false;
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Animasi smooth scrolling
      });
    },
    limitAgenda(fullString) {
      if (fullString.length > 150) {
        let slicedString = fullString.slice(0, 150);
        return slicedString;
      } else {
        return fullString
      }
    },
    async getTahunCatatanArsip() {
      try {
        const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/getTahunCatatanArsipAngkatan/`, {
          params: {
            kode_dosen: this.kodeDosen,
          },
        });

        if (response.data.error === false) {
          this.listTahunArsip = response.data.response.list_tahun_catatan_arsip;

          //get tahun terbaru catatan arsip
          const tahunTerbaruArsip = this.listTahunArsip.length - 1
          this.tahunArsip = this.listTahunArsip[tahunTerbaruArsip]
        } else {
          this.listTahunArsip = [new Date().getFullYear()];
          this.tahunArsip = new Date().getFullYear()
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.listTahunArsip = [new Date().getFullYear()];
        this.tahunArsip = new Date().getFullYear()
      }
    },
    async filteredCatatanArsip() {
      try {
        const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/filteredCatatanAngkatanArsip/`, {
          params: {
            kode_dosen: this.kodeDosen,
            tahun_angkatan: this.$route.params.id,
            tahun_catatan: this.tahunArsip,
          },
        });

        if (response.data.error === false) {
          this.listCatatanArsip = response.data.response.list_catatan_dosen;
          this.pesanError = "Berhasil menemukan " + this.listCatatanArsip.length + " data"

          //simpan ke local untuk fitur pencarian agar tidak get listCatatanArsip lagi dari awal (ambil api lagi)
          localStorage.setItem("listCatatanArsip", JSON.stringify(this.listCatatanArsip))

        } else {
          this.pesanError = "Berhasil menemukan " + 0 + " data"
          this.listCatatanArsip = [];
        }
      } catch (error) {
        this.pesanError = "Berhasil menemukan " + 0 + " data"
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.listCatatanArsip = [];
      }
    },
    convertTimestamp(timestamp) {
      const date = new Date(timestamp);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('id-ID', options);
      return formattedDate;
    },
    snackbar() {
      //show snackbar
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    },
    showPopUpHapus(id) {
      this.showWarningHapus = true
      this.idHapus = id
    },
    hapusCatatanTidak() {
      this.showWarningHapus = false
    },
    async hapusCatatanYa() {
      try {
        const paramObject = {
          id_catatan_perwalian_dosen: this.idHapus,
        }
        const response = await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/deleteCatatanPerwalianDosen/`, paramObject);

        if (response.data.error === false) {
          setTimeout(() => {
            this.showWarningHapus = false
            this.pesanSnackBar = "Berhasil menghapus catatan"
            this.snackbar()
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }, 200);
        } else {
          this.pesanSnackBar = "Gagal menghapus catatan"
          this.snackbar()
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
      }
    },
    showPopUpArsip(id) {
      this.showWarningArsip = true
      this.idArsip = id
    },
    arsipCatatanTidak() {
      this.showWarningArsip = false
    },
    async arsipCatatanYa() {
      try {
        const paramObject = {
          id_catatan_perwalian_dosen: this.idArsip,
          is_arsip: false,
          filter_arsip: null
        }
        const response = await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/updateIsArsipCatatanPerwalianDosen/`, paramObject);

        if (response.data.error === false) {
          setTimeout(() => {
            this.showWarningArsip = false
            this.pesanSnackBar = "Berhasil memulihkan catatan"
            this.snackbar()
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }, 200);

        } else {
          this.pesanSnackBar = "Gagal memulihkan catatan"
          this.snackbar()
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);

      }
    },
    logoutDosen() {
      localStorage.clear();
      this.$router.push("/login")
    }
  },
  mounted() {
    import('bootstrap');
    import('bootstrap/dist/css/bootstrap.min.css');

    // mounted untuk bagian script src
    //slim.min.js
    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
    script1.integrity =
      "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj";
    script1.crossOrigin = "anonymous";
    document.head.appendChild(script1);

    //popper.min.js
    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js";
    script2.integrity = "sha384-hSM2mzKd06KfNmOz6mK6+sfuLdYVjI1MKOpnE+O+hNEZmZ+zQp8hJz3uPL2twNJX";
    script2.crossOrigin = "anonymous";
    document.head.appendChild(script2);

    //bundle.min.js
    const script3 = document.createElement("script");
    script3.src = "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js";
    script3.integrity = "sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx";
    script3.crossOrigin = "anonymous";
    document.head.appendChild(script3);
  },
  watch: {
    inputanJudulCatatan: {
      handler: async function (baru, lama) {
        this.pesanError = "Sedang mencari catatan ... "
        //ambil data dari local storage
        let dataLocal = localStorage.getItem("listCatatanArsip")
        let tempListCatatanArsip = JSON.parse(dataLocal)

        //get kata kunci pencarian
        const kataKunciPencarian = baru.toLowerCase().trim();

        // //lakukan filtering catatan berdasarkan kata kunci 
        let hasilFilter = ""
        if (tempListCatatanArsip != null) {
          hasilFilter = await tempListCatatanArsip.filter(catatan =>
            catatan.judul.toLowerCase().includes(kataKunciPencarian) ||
            catatan.agenda_perwalian.toLowerCase().includes(kataKunciPencarian)
          );
        }

        if (hasilFilter.length > 0) { //filter ketemu
          this.listCatatanArsip = hasilFilter
          this.pesanError = "Berhasil menemukan " + hasilFilter.length + " data"
        } else { // filter tidak ketemu 
          this.listCatatanArsip = []
          this.pesanError = "Berhasil menemukan " + 0 + " data"
        }

      }
    },
    tipeCatatan: {
      immediate: true,
      handler: function (baru, lama) {
        switch (this.tipeCatatan) {
          case "Grup Angkatan":
            this.filter = "grup-angkatan"
            break;
          default:
            break;
        }

        this.filteredCatatanArsip()
      },
      deep: true
    },
    tahunArsip: {
      immediate: true,
      handler: function (baru, lama) {
        this.filteredCatatanArsip()
      },
      deep: true
    },
  },

}
</script>
<style scoped src="../../public/frontend/styling/arsipPerwalian.css"></style>