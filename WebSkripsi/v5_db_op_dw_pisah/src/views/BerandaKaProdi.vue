<template>
  <div id="body">

    <head>
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
    </head>

    <Header :namaDosen="this.namaDosen" @click="this.logoutDosen()" />

    <div id="content" class="row container-fluid p-0 m-0">
      <div class="col-12 mt-4">
        <div class="d-flex">
          <div class="col-8 p-0 d-flex align-items-center">
            <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>
          </div>

          <div class="col-3"></div>
        </div>
      </div>

      <div id="contentKiri" class="col-lg-3 col-sm-12 ">

        <div class="mySticky">
          <div class="d-flex justify-content-center">
            <img id="fotoDosen" src="../../public/frontend/media/fotoDosen.jpg" alt="">
          </div>

          <div id="infoDosen" class="mt-3">
            <p id="namaDosen" class="px-2">{{ this.namaDosen }}</p>
            <p>email.dosen@ti.ukdw.ac.id</p>
            <div class="garis mt-3 text-muted"></div>

            <div class="d-flex flex-column">
              <div class="col-12 d-flex justify-content-center mt-3 mb-2 p-0">
                <p class="m-0">Rincian jumlah mahasiswa perwalian</p>
              </div>
              <div class="col-12 p-0">
                <div v-for="(item, index) in this.listTahunAngkatanBimbingan" :key="index"
                  class="col-11 d-flex justify-content-center flex-wrap px-0 mb-2 mx-auto">

                  <div id="dataAngkatanBimbingan" class="col-11 d-flex flex-row justify-content-center px-0"
                    @click="toggleshowinfoAngkatan(item)">
                    <div class="col-6 pr-1 pl-0 d-flex align-items-center">
                      <p class="">Angkatan {{ item.tahun_angkatan }}</p>
                    </div>
                    <div class="col-2 px-0 d-flex align-items-center">
                      <p class="d-inline-block m-0 jumlahMahasiswaBimbingan">
                        {{ item.jumlah_mahasiswa }}</p>
                    </div>
                    <div id="detailMahasiswaBimbingan"
                      class="col-1 px-0 ml-3 d-flex align-items-center d-flex justify-content-center">
                      <v-icon size="large">
                        mdi-chevron-down
                      </v-icon>
                    </div>
                  </div>

                  <transition>
                    <div v-if="this.showInfoAngkatan.get(item)" class="col-12 d-flex justify-content-center">
                      <div id="infoMahasiswaBimbingan" class="col-10 py-3 mt-1">

                        <ul v-for="(item, index) in this.listCountStatusMahasiswaByYear.get(item.tahun_angkatan)"
                          :key="index" class="mb-2">
                          <li class="itemInfoMahasiswaBimbingan">
                            <div class="d-flex">
                              <p class="col-8 px-0 m-0 ml-1 align-self-center text-left">
                                {{ this.statusText[item.status] }}
                              </p>

                              <div class="col-4 text-right p-0 d-flex justify-content-center">
                                <p class="m-0 jumlahMahasiswaBimbingan">{{ item.jumlah }}</p>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <ul>
                          <li class="itemInfoMahasiswaBimbingan">
                            <div class="d-flex d-flex justify-content-center">

                              <p class="m-0 align-middle font-weight-bold">
                                <router-link
                                  :to="{ name: 'DetailAngkatanKaProdi', params: { id: item.tahun_angkatan, isHover: 1 } }">
                                  Lihat selengkapnya >
                                </router-link>
                              </p>

                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </div>


                <div class="col-11 d-flex justify-content-center flex-wrap px-0 mb-2 mx-auto">
                  <div id="dataAngkatanBimbingan2" class="col-11 d-flex flex-row  px-0">
                    <div class="col-6 offset-1 pl-0 ">
                      <p class="text-left">Total Mahasiswa Angkatan</p>
                    </div>
                    <div class="col-3 px-0 d-flex align-items-center">
                      <p class="d-inline-block m-0 jumlahMahasiswaBimbingan2">
                        {{ this.jumlahSemuaMahasiswaPerwalianAngkatan }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contentKanan" class="col-lg-9 col-sm-12 mb-md-5 ">
        <div id="bagianGrupAngkatan">
          <div id="judulDaftarGrupPerwalian" class="mt-4">

            <div v-if="this.togglePencarianMahasiswa">
              <div v-if="this.hasilPencarianMahasiswa.length >= 1 && this.hasilPencarianMahasiswa[0] != 'kosongError'"
                id="kolomHasilPencarian" class="col-10">
                <div class="d-flex flex-wrap col-12 py-2 px-1">
                  <div v-for="(mahasiswa, index) in this.hasilPencarianMahasiswa" :key="index" id="itemHasilPencarian"
                    class="col-6 my-0 px-0 itemNamaMahasiswa">
                    <div class="p-2">
                      <router-link :to="{ name: 'DetailMahasiswa', params: { id: mahasiswa.nim } }" class="m-0"
                        id="namaMahasiswaHasilPencarian">
                        {{ mahasiswa.nama }} / {{ mahasiswa.nim }}
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-else-if="this.hasilPencarianMahasiswa.length >= 1 && this.hasilPencarianMahasiswa[0] == 'kosongError'"
                id="kolomHasilPencarian" class="d-flex align-items-center col-10">

                <div class="d-flex col-12 py-2 px-1 ">
                  <div class="col-12 my-3 px-0">
                    <div id="itemHasilPencarianNotFound" class="p-2">
                      <div class="text-center m-0 mt-2" id="judulItemHasilPencarian">
                        <h4 class="mt-3">
                          <b>
                            Catatan tidak ditemukan
                          </b>
                        </h4>
                        <p class=" mt-1">
                          Silahkan cari catatan menggunakan kata kunci pencarian lainnya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else-if="this.hasilPencarianMahasiswa.length == 0 && this.inputanCariMahasiswa != ''"
                id="kolomHasilPencarian" class="d-flex align-items-center col-10">

                <div class="d-flex col-12 py-2 px-1 ">
                  <div class="col-12 my-3 px-0">
                    <div id="itemHasilPencarianNotFound" class="p-2">
                      <div class="text-center">
                        <v-progress-circular color="primary" indeterminate :size="70" :width="6">
                        </v-progress-circular>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="judulCariCatatanPerwalian" class="col-12 pl-0">
              <p class="mb-0">Daftar Grup Perwalian Mahasiswa</p>
            </div>
            <div class="col-12 mb-1 pl-0 mt-xl-3">
              <span class="material-symbols-outlined search"> search </span>
              <input id="inputCariCatatanPerwalian" type="text" placeholder="Cari mahasiswa perwalian"
                @keyup="cariMahasiswa" @focus="scrollPage('grup-angkatan')" v-model="inputanCariMahasiswa">
            </div>

          </div>

          <div id="containerMahasiswaAngkatan" class="row mt-4 d-flex justify-content-center">
            <div v-if="this.listTahunAngkatanBimbinganKaprodi.length > 0" class="w-100 d-flex flex-wrap">
              <div v-for="(tahunAngkatan, index) in this.listTahunAngkatanBimbinganKaprodi" :key="index"
                id="mahasiswaAngkatan" class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-5 pb-3 px-0">
                <p>Mahasiswa Informatika {{ tahunAngkatan }}</p>
                <div id="itemNamaMhs">
                  <div v-for="(mahasiswa, index) in this.mahasiswaPerwalian.get(tahunAngkatan)" :key="index"
                    id="itemMahasiswa" class="d-flex col-12 mb-sm-3 ">
                    <!-- icon mahasiswa -->
                    <div id="iconMahasiswa" class="d-flex justify-content-center mr-2">
                      <span class="material-symbols-outlined align-self-center">
                        account_circle
                      </span>
                    </div>
                    <!-- info mahasiswa -->
                    <div id="infoMahasiswa">
                      <div>
                        <p>
                          <router-link :to="{ name: 'DetailMahasiswa', params: { id: mahasiswa.nim } }"
                            class="namaMahasiswa">
                            {{ mahasiswa.nama }} / {{ mahasiswa.nim }}
                          </router-link>
                        </p>
                      </div>

                      <div id="infoIPK">
                        <div>
                          <!-- sks mahasiswa -->
                          {{ mahasiswa.total_sks }} SKS
                          -
                          IPK {{ mahasiswa.ipk }}
                          -

                          <span v-if="mahasiswa.poin_keaktifan < 50" class="cekalSAC">
                            <v-tooltip activator="parent" width="400" content-class="bg-grey-darken-1"
                              location="bottom">Mahasiswa ini
                              memiliki poin keaktifan di bawah 50%
                              dari total Syarat Poin Keaktifan, dalam 2 tahun perkuliahan
                            </v-tooltip>
                            SAC {{ mahasiswa.poin_keaktifan }}
                          </span>

                          <span v-else>
                            SAC {{ mahasiswa.poin_keaktifan }}
                          </span>
                        </div>

                        <!-- cekal mahasiswa bila ada -->
                        <div>
                          <div v-if="mahasiswa.list_cekal.length > 0" class="d-flex mt-1">
                            <span v-for="(cekal, index) in mahasiswa.list_cekal" :key="index" class="d-inline-block">
                              <span v-if="cekal.cekal == 'Biro 2'" class="cekal mr-2">
                                <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">{{
                                  cekal.deskripsi }}
                                </v-tooltip>
                                {{ cekal.cekal }}
                              </span>

                              <span v-else-if="cekal.cekal == 'Biro 1'" class="cekal mr-2">
                                <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">{{
                                  cekal.deskripsi }}
                                </v-tooltip>
                                {{ cekal.cekal }}
                              </span>

                              <span v-else-if="cekal.cekal == 'Perpustakaan'" class="cekal mr-2">
                                <v-tooltip activator="parent" content-class="bg-grey-darken-1" location="bottom">{{
                                  cekal.deskripsi }}
                                </v-tooltip>
                                {{ cekal.cekal }}
                              </span>
                            </span>
                          </div>

                          <div v-else>
                            <span v-if="cekal.cekal != ''" class="cekalDash">- </span>
                          </div>
                        </div>

                      </div>

                      <p id="garisBatasIPK"></p>
                    </div>
                  </div>

                  <div class="d-flex justify-content-end mr-4">
                    <router-link :to="{ name: 'DetailAngkatanKaProdi', params: { id: tahunAngkatan, isHover: 0 } }"
                      class="lihatSelengkapnya">
                      Lihat selengkapnya >
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="w-100 d-flex">
              <div v-for="(tahunAngkatan, index) in this.listTahunAngkatanBimbingan" :key="index" id="mahasiswaAngkatan"
                class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3 px-0">

                <div id="itemNamaMhs2">
                  <div class="container" id="listNamaShimmer">
                    <div v-for="(mahasiswa, index) in this.mahasiswaPerwalian.get(tahunAngkatan)" :key="index"
                      id="itemMahasiswa" class="col mb-sm-2">
                      <div class="line"></div>
                    </div>
                    <div class="shimmer"></div>
                  </div>
                </div>
              </div>
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
import { Chart } from 'chart.js/auto';

import axios from 'axios'
import $ from 'jquery';
window.$ = window.jQuery = $;

import BreadcrumbModule from '@/views/BreadcrumbModule.vue';
import debounce from 'lodash.debounce';
import Cookies from 'js-cookie';
import Header from "@/components/header/Header.vue"

export default {
  name: "BerandaPage",
  components: {
    BreadcrumbModule,
    Header
  },
  data() {
    return {
      isOn: false, //default false
      inputanCariMahasiswa: "",
      namaDosen: "",
      kodeDosen: "",
      isKaprodi: "",
      counter: new Map(),
      listTahunAngkatanBimbingan: [],
      listTahunAngkatanBimbinganKaprodi: [],
      jumlahStatusPerwalian: new Map(),
      jumlahMahasiswaPerwalian: new Map(),
      jumlahSemuaMahasiswaPerwalianAngkatan: 0,
      showInfoAngkatan: new Map(), //untuk on off toggle ke bawah 
      mahasiswaPerwalian: new Map(), //untuk wadah list nama mahasiswa & info kuliah
      hasilPencarianMahasiswa: [],
      togglePencarianMahasiswa: false,
      itemsLogout: [
        { title: 'Logout' },
      ],
      pesanSnackBar: "",
      statusText: {
        'AK': 'Aktif',
        'DO': 'Dropped Out',
        'CS': 'Cuti Studi',
        'UD': 'Undur Diri',
        'TA': 'Tidak Aktif',
        'AN': 'AN',
        'LS': 'Lulus'
      },
      listCountStatusMahasiswaByYear: new Map(),
      fotoDosen: ""

    }
  },
  created() {
    // this.checkAksesLogin()

    this.scrollTop()
    this.initData()
    this.loadingCatatanPerwalianTerbaru = false;
    this.loadingCatatanDosenTerbaru = false;
  },
  mounted() {
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

    //chart.js
    const script4 = document.createElement("script");
    script4.src = "https://cdn.jsdelivr.net/npm/chart.js";
    document.body.appendChild(script4);

    //===========================================================//
    window.$ = window.jQuery = $;

    import('bootstrap');
    import('bootstrap/dist/css/bootstrap.min.css');

    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var screenWidth = window.innerWidth;
      var myStickyElement = document.querySelector('.mySticky');
      if (myStickyElement) {
        if (scrollTop > 100 && screenWidth >= 1000) {
          myStickyElement.classList.add('paddingTop');
          myStickyElement.classList.add('heightScroll');
        } else {
          myStickyElement.classList.remove('paddingTop');
          myStickyElement.classList.remove('heightScroll');
        }
      }
    });
  },
  methods: {
    async initData() {
      this.namaDosen = localStorage.getItem("namaDosen")
      this.kodeDosen = localStorage.getItem("kodeDosen")
      this.isKaprodi = localStorage.getItem("isKaprodi")
      this.fotoDosen = JSON.parse(localStorage.getItem('fotoDosen'));

      await this.getTahunAngkatan()

      await this.getListMahasiswaAngkatan()
      // await this.getJumlahStatusMahasiswa()
    },
    async getListMahasiswaAngkatan() {
      // membuat list , isinya 2015 - tahun sekarang
      const currentYear = new Date().getFullYear();
      this.listTahunAngkatanBimbinganKaprodi = Array.from({ length: currentYear - 2015 + 1 }, (v, i) => 2015 + i);

      // iterasi tahun tersebut
      this.listTahunAngkatanBimbinganKaprodi.forEach(async (tahunAngkatan) => {
        try {
          const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/mahasiswaPerwalianByYear/`, {
            params: {
              tahun_angkatan: tahunAngkatan
            },
          });

          if (response.data.error === false) {
            this.mahasiswaPerwalian.set(tahunAngkatan, this.filterDuplicateMahasiswa(response.data.response))
          } else {
            // jika tidak ada data untuk tahun tersebut, hapus tahun angkatan tersebut dari list.
            this.listTahunAngkatanBimbinganKaprodi = this.listTahunAngkatanBimbinganKaprodi.filter(tahun => tahun !== tahunAngkatan);
          }
        } catch (error) {
          console.error("Terjadi kesalahan saat mengambil data:", error);
        }
      })
    },
    async getTahunAngkatan() {
      //get tahun angkatan perwalian dosen (misal 2015, 2020)
      try {
        const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/getListCountMahasiswaAngkatan/`);

        if (response.data.error === false) {
          console.log(response.data.response);
          this.listTahunAngkatanBimbingan = response.data.response

          //get list count status mahasiswa by tahun angkatan
          this.getListCountStatusMahasiswaByYear()
        } else {
          this.listTahunAngkatanBimbingan = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan ", error);
        this.listTahunAngkatanBimbingan = [];
      }
    },
    async getListCountStatusMahasiswaByYear() {
      this.listTahunAngkatanBimbingan.forEach(async (item) => {
        try {
          const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/getCountStatusMahasiswaByYear/`, {
            params: {
              tahun_angkatan: item.tahun_angkatan
            }
          });

          if (response.data.error === false) {
            this.listCountStatusMahasiswaByYear.set(item.tahun_angkatan, response.data.response)
          }
        } catch (error) {
          console.error("Terjadi kesalahan saat mengambil data:", error);
        }

        // untuk total semua mahasiswa dalam semua angkatan "Total Mahasiswa"
        this.jumlahSemuaMahasiswaPerwalianAngkatan += parseInt(item.jumlah_mahasiswa)
      })
    },
    snackbar() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },
    batal() {
      this.isOn = false;
      this.opsiUrutanItemBeranda = this.opsiUrutanItemBerandaSebelumnya
      this.opsiUrutanItemBerandaSebelumnya = ""
    },
    toggleshowinfoAngkatan(tahunAngkatan) {
      if (this.counter.get(tahunAngkatan) != 1) {
        const scrollable = document.querySelector('.mySticky');
        const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
        scrollable.scrollTo({
          top: scrollHeight,
          behavior: 'smooth'
        });
        this.showInfoAngkatan.set(tahunAngkatan, !this.showInfoAngkatan.get(tahunAngkatan))
        this.counter.set(tahunAngkatan, this.counter.get(tahunAngkatan) + 1)
      } else {
        const scrollable = document.querySelector('.mySticky');
        scrollable.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        this.showInfoAngkatan.set(tahunAngkatan, !this.showInfoAngkatan.get(tahunAngkatan.toString()))
        this.counter.set(tahunAngkatan, 0)
      }
    },
    limitAgenda(fullString) {
      if (fullString.length > 140) {
        let slicedString = fullString.slice(0, 140);
        return slicedString;
      } else {
        return fullString
      }
    },
    limitJudul(fullString) {
      if (fullString.length > 36) {
        let slicedString = fullString.slice(0, 36);
        return slicedString + "...";
      } else {
        return fullString
      }
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Animasi smooth scrolling
      });
    },
    scrollTo(tujuan) {
      let element = ""
      let y = ""

      switch (tujuan) {
        case 'catatan-perwalian-dosen':
          element = document.getElementById("bagianCatatan");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'catatan-dosen':
          element = document.getElementById("bagianCatatanDosen");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'daftar-grup-perwalian-mahasiswa':
          element = document.getElementById("bagianGrupAngkatan");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'grafik-rata-rata-ipk-angkatan':
          element = document.getElementById("chartRataRataIPK");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
      }
    },
    scrollPage(tipe) {

      // Hitung tinggi halaman
      const pageHeight = document.documentElement.scrollHeight;
      let scrollHeight = ""
      if (this.opsiUrutanItemBeranda == 'pilihan1') {
        if (tipe == "catatan-perwalian-dosen") {
          // Hitung tinggi scroll yang diinginkan (misal 20% dari tinggi halaman)
          scrollHeight = pageHeight * 0.045;
          //menampilkan hasil pencarian 
          if (this.hasilPencarianCatatanPerwalianDosen.length != 0) {
            this.togglePencarianCatatanPerwalianDosen = true
          }
        } else if (tipe == "catatan-dosen") {
          // Hitung tinggi scroll yang diinginkan (misal 20% dari tinggi halaman)
          scrollHeight = pageHeight * 0.25;
          //menampilkan hasil pencarian 
          if (this.hasilPencarianCatatanDosen.length != 0) {
            this.togglePencarianCatatanDosen = true
          }
        } else if (tipe == 'grup-angkatan') {
          scrollHeight = pageHeight * 0.4793;
          //menampilkan hasil pencarian 
          if (this.hasilPencarianMahasiswa.length != 0) {
            this.togglePencarianMahasiswa = true
          }
        }
      } else {
        if (tipe == "catatan-perwalian-dosen") {
          // Hitung tinggi scroll yang diinginkan (misal 20% dari tinggi halaman)
          scrollHeight = pageHeight * 0.55;
          //menampilkan hasil pencarian 
          if (this.hasilPencarianCatatanPerwalianDosen.length != 0) {
            this.togglePencarianCatatanPerwalianDosen = true
          }
        } else if (tipe == "catatan-dosen") {
          // Hitung tinggi scroll yang diinginkan (misal 20% dari tinggi halaman)
          scrollHeight = pageHeight * 1.5;
          //menampilkan hasil pencarian 
          if (this.hasilPencarianCatatanDosen.length != 0) {
            this.togglePencarianCatatanDosen = true
          }
        } else if (tipe == 'grup-angkatan') {
          scrollHeight = pageHeight * 0.045;
          //menampilkan hasil pencarian 
          if (this.hasilPencarianMahasiswa.length != 0) {
            this.togglePencarianMahasiswa = true
          }
        }
      }

      // Scroll ke bawah dengan animasi
      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
    },
    filterDuplicateMahasiswa(listData) {
      const resultMap = new Map();

      listData.forEach((item) => {
        const key = `${item.nim}-${item.nama}-${item.total_sks}-${item.ipk}-${item.status}-${item.poin_keaktifan}`;
        if (resultMap.has(key)) {
          resultMap.get(key).list_cekal.push({
            cekal: item.cekal,
            deskripsi: item.deskripsi
          });
        } else {
          resultMap.set(key, {
            nim: item.nim,
            nama: item.nama,
            total_sks: item.total_sks,
            ipk: item.ipk,
            status: item.status,
            poin_keaktifan: item.poin_keaktifan,
            list_cekal: [
              {
                cekal: item.cekal,
                deskripsi: item.deskripsi
              }
            ]
          });
        }
      });

      return Array.from(resultMap.values()).slice(0, 6);
    },
    hitungRataRataIPKAngkatan() {
      try {
        // patokan adalah dataA dan dataB
        let patokan = Object.keys(this.rataIPKAngkatanPerTahun[0]).slice(1)
        for (let i = 0; i < this.rataIPKAngkatanPerTahun.length; i++) {
          let rataIPK = 0
          let counterRata = 0
          let pembagi = 0

          for (const item of patokan) {
            switch (item) {
              case "dataA":
                if (this.rataIPKAngkatanPerTahun[i].dataA != null) {
                  rataIPK += this.rataIPKAngkatanPerTahun[i].dataA
                  pembagi += 1
                }
                break;
              case "dataB":
                if (this.rataIPKAngkatanPerTahun[i].dataB != null) {
                  rataIPK += this.rataIPKAngkatanPerTahun[i].dataB
                  pembagi += 1
                }
                break;
              case "dataC":
                if (this.rataIPKAngkatanPerTahun[i].dataC != null) {
                  rataIPK += this.rataIPKAngkatanPerTahun[i].dataC
                  pembagi += 1
                }
                break;
            }
          }
          let hasilRata = (rataIPK / pembagi).toFixed(2)
          this.rataIPKAngkatanPerTahun[i].dataRata = parseFloat(hasilRata)
        }
      } catch (error) {
        console.log(error);
      }
    },
    logoutDosen() {
      localStorage.clear();
      this.$store.commit("setAksesLogin", false)
      this.$router.push("/login")
    },
    cariMahasiswa: debounce(async function () {
      if (this.inputanCariMahasiswa != '') {
        try {
          const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/searchMahasiswaKaprodi/`, {
            params: {
              inputan: this.inputanCariMahasiswa
            }
          });

          if (response != undefined) {
            if (response.data.error === false) {
              this.hasilPencarianMahasiswa = response.data.response;
              this.togglePencarianMahasiswa = true
            }
          } else {
            this.hasilPencarianMahasiswa = ["kosongError"]
            this.togglePencarianMahasiswa = true
          }
        } catch (error) {
          console.error("Terjadi kesalahan saat mengambil data:", error);
        }
      } else {
        this.hasilPencarianMahasiswa = []
      }
    }, 500)
  },
};
</script>


<style scoped src="../../public/frontend/styling/beranda.css"></style>