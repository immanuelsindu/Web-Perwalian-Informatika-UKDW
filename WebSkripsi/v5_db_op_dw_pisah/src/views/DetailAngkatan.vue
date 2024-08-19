<template>
  <div>

    <head>
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
      <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" />
    </head>

    <!-- Navbar -->
    <Header :namaDosen="this.namaDosen" @click="this.logoutDosen()" />

    <div id="drawerContainer" class="mt-4 ">
      <div id="navDrawer">
        <v-icon color="brown-darken-4" size="large" @click.stop="this.drawer = !this.drawer">
          mdi-menu
        </v-icon>
        <v-tooltip activator="parent" content-class="bg-grey-darken-1" location="bottom">Menu Pintas
        </v-tooltip>
      </div>

      <div id="sideDrawer">
        <template>
          <v-card>
            <v-layout>
              <v-navigation-drawer v-model="this.drawer" temporary width="300">

                <div class="text-right pt-5 mt-4 pr-2">
                  <v-icon color="brown-darken-4" size="large" @click.stop="this.drawer = !this.drawer">
                    mdi-close
                  </v-icon>
                </div>

                <div class="pl-3 listItemSideDrawer">
                  <v-list-item><b>Menu Pintas</b></v-list-item>
                  <v-list-item link title="Catatan Perwalian Grup Angkatan"
                    @click="this.scrollTo('catatan-perwalian-grup-angkatan')"></v-list-item>
                  <v-list-item link title="Daftar Mahasiswa Perwalian"
                    @click="this.scrollTo('daftar-mahasiswa-perwalian')"></v-list-item>
                </div>
              </v-navigation-drawer>
            </v-layout>
          </v-card>
        </template>
      </div>
    </div>

    <!-- Content -->
    <div class="row container-fluid p-0 m-0">
      <div class="col-12 mt-4">
        <div class="d-flex">
          <div class="col-md-11 col-sm-9 col-8 p-0 d-flex align-items-center">
            <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>
          </div>

          <div id="preferensi" class="col-md-1 col-sm-3 col-4">
            <button type="button" id="buttonSort" v-on:click="showPopUpPreferensi()" class="btn">
              <v-tooltip activator="parent" content-class="bg-grey-darken-1" location="bottom">Ubah urutan
                item beranda
              </v-tooltip>
              <span class="material-symbols-outlined viewAgenda">
                flex_direction
              </span>
            </button>
          </div>

          <Transition>
            <div id="overlay" v-if="this.isOn" class="d-flex justify-content-center align-items-center">
              <div id="windowPreferensi">
                <div id="contentPreferensi" class="p-4">
                  <p class="text-center">Pilih Urutan Item Detail Angkatan</p>


                  <div class="row mb-3 opsiUrutan" id="opsiUrutan1">
                    <div class="col-9 pr-0 pl-0">
                      <ul class="pl-0 ulNoType mb-0">
                        <li class="">
                          <ol class="pl-4">
                            <li>Catatan Perwalian Grup Angkatan</li>
                            <li>Daftar Mahasiswa Perwalian</li>
                          </ol>
                        </li>
                      </ul>
                    </div>

                    <div class="col-3 px-0 d-flex justify-content-center align-items-center">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        value="pilihan1" v-model="this.opsiUrutanItemDetailAngkatan"
                        :checked="this.opsiUrutanItemDetailAngkatan === 'pilihan1'">
                    </div>
                  </div>


                  <div class="row mb-3 opsiUrutan" id="opsiUrutan2">
                    <div class="col-9 pr-0 pl-0">
                      <ul class="pl-0 ulNoType mb-0">
                        <li class="">
                          <ol class="pl-4">
                            <li>Daftar Mahasiswa Perwalian</li>
                            <li>Catatan Perwalian Grup Angkatan</li>
                          </ol>
                        </li>
                      </ul>
                    </div>

                    <div class="col-3 px-0 d-flex justify-content-center align-items-center">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        value="pilihan2" v-model="this.opsiUrutanItemDetailAngkatan"
                        :checked="this.opsiUrutanItemDetailAngkatan === 'pilihan2'">
                    </div>
                  </div>


                  <div class="row mt-4">
                    <div class="col-4 px-0 d-flex justify-content-center">
                      <button class="btn batal urutan" @click="batal()">Batal</button>
                    </div>
                    <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                      <button class="btn simpan urutan" @click="simpan(false)">Simpan</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <div id="judulAngkatan" class="d-flex justify-content-center">
          <p>Mahasiswa Informatika {{ this.$route.params.id }}</p>
        </div>

      </div>

      <div class="container-fluid d-flex justify-content-center">
        <div class="myContainer mt-4">
          <!-- bagian catatan perwalian  -->
          <div id="bagianCatatan">
            <div class="mt-5 d-flex">
              <div class="col-sm-9 col-md-9 p-0" id="judulCatatanPerwalianGrupAngkatan">
                <p id="judulPerBagian">Catatan Perwalian Grup Angkatan</p>
              </div>
              <div class="col-sm-3 col-md-3 d-flex justify-content-end align-items-center">
                <router-link :to="{ name: 'TambahCatatanAngkatan', params: { id: this.$route.params.id, canBack: 1 } }"
                  id="tambahCatatan" class="mt-1">
                  <span class="material-symbols-outlined mr-2"> add_box </span>
                </router-link>

                <router-link :to="{ name: 'TambahCatatanAngkatan', params: { id: this.$route.params.id, canBack: 1 } }"
                  id="tambahCatatan" class="judulTambahCatatan">
                  Tambah Catatan Perwalian Grup Angkatan
                </router-link>
              </div>
            </div>
            <div class="mt-3 ml-0">
              <div>
                <div v-if="this.listCatatanGrupAngkatanTerbaru.length > 0" class="d-flex flex-row"
                  id="listCatatanAngkatanTerbaru">
                  <div v-for="(catatan, index) in this.listCatatanGrupAngkatanTerbaru" :key="index" id="itemCatatan"
                    class="card p-4 col-lg-3 mb-lg-4 col-md-6 mb-md-4 col-sm-12 mb-sm-4">
                    <div id="judulCatatan">

                      <p class="card-title mb-2 text-center">{{ catatan.judul }}</p>
                      <p class="card-subtitle mb-4 text-muted">{{ this.convertTimestamp(catatan.waktu) }}
                      </p>

                      <p class="text-justify m-0">
                        {{ limitAgenda(catatan.agenda_perwalian) }}
                        <span>
                          <router-link :to="`/edit-catatan-grup-angkatan/${catatan.id_catatan_perwalian_dosen}`"
                            class="font-weight-bold"><u>Lihat selengkapnya</u></router-link>
                        </span>
                      </p>
                    </div>
                  </div>


                </div>

                <div v-else>
                  <div id="itemCatatan"
                    class="col-lg-3 mb-lg-4 col-md-6 mb-md-4 col-sm-12 mb-sm-4 d-flex align-items-center text-center">
                    <div id="judulCatatan" class="w-100 judulCatatan">
                      <p class="catatanNotFound1">Tidak ada catatan</p>
                      <p class="catatanNotFound2"> Tidak ada catatan perwalian dosen terbaru</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 d-flex justify-content-start mt-0 px-0 mb-3">
              <div id="lihatSemuaCatatan" class="px-0">
                <router-link id="lihatSemuaAngkatan"
                  :to="{ name: 'DaftarCatatanPerwalianAngkatan', params: { id: this.$route.params.id } }">Lihat
                  semua catatan perwalian grup angkatan</router-link>
              </div>
            </div>
          </div>

          <div id="bagianDaftarMahasiswa">
            <div id="bagianPencarian" class="d-flex ml-3 mt-5 ">
              <div class="col-12 m-0 p-0">
                <div class="row">
                  <p id="judulPerBagian" class="p-0 mb-1">Daftar Mahasiswa Perwalian</p>
                </div>

                <div id="cariMahasiswaPerwalian" class="row">
                  <dir class="col-12 my-1 pl-0">
                    <span class="material-symbols-outlined search"> search </span>
                    <input id="inputCariCatatanMahasiswa" type="text" placeholder="Cari mahasiswa perwalian"
                      v-model="this.inputanCariMahasiswa" />
                  </dir>
                </div>

                <div id="alertPencarian" class="row mt-1 mb-3 ">
                </div>


                <div id="infoMahasiswaBimbingan" class="d-flex flex-row flex-wrap col-12">
                  <!-- lihat semua mahasiswa -->
                  <div class="itemInfoMahasiswaBimbingan"
                    :class="{ selected: this.selectedItems.includes('Semua Mahasiswa') }">
                    <div class="d-flex align-items-center col-12 semuaMahasiswa"
                      @click="this.toggleItemSelection('Semua Mahasiswa')">
                      <div class="col-12 p-0">
                        <p class="px-0 m-0 align-self-center text-left">Semua Mahasiswa </p>
                      </div>

                      <div class="col-1 text-right p-0 d-flex justify-content-center">
                        <p class="m-0 jumlahMahasiswaBimbingan">{{ this.jumlahMahasiswa }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- lihat status aktif dan tidak aktif  -->
                  <div v-if="this.jumlahAktifDanTidakAktif > 0" class="itemInfoMahasiswaBimbingan"
                    :class="{ selected: this.selectedItems.includes('Aktif dan Tidak Aktif') }">
                    <div class="d-flex align-items-center col-12 semuaMahasiswa"
                      @click="this.toggleItemSelection('Aktif dan Tidak Aktif')">
                      <div class="col-12 p-0">
                        <p class="px-0 m-0 align-self-center text-left">Aktif dan Tidak Aktif </p>
                      </div>

                      <div class="col-1 text-right p-0 d-flex justify-content-center">
                        <p class="m-0 jumlahMahasiswaBimbingan">{{ this.jumlahAktifDanTidakAktif }}</p>
                      </div>
                    </div>
                  </div>

                  <div v-for="items in this.jumlahStatusPerwalian.get(this.$route.params.id)" :key="items"
                    class="itemInfoMahasiswaBimbingan" :class="{ selected: this.selectedItems.includes(items.status) }">
                    <div class="d-flex align-items-center col-12" @click="this.toggleItemSelection(items.status)">
                      <div class="col-12 p-0">
                        <p class="px-0 m-0 align-self-center text-left">{{ this.statusText[items.status] }}</p>
                      </div>

                      <div class="col-1 text-right p-0 d-flex justify-content-center">
                        <p class="m-0 jumlahMahasiswaBimbingan">{{ items.count }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="filterIPKSAC" class="d-flex flex-row  flex-wrap col-12">

                  <div class="form-check mr-3 d-flex align-self-center">
                    <input class="form-check-input" type="checkbox" value="true" v-model="this.filterIPK"
                      id="checkboxIPK">
                    <label class="form-check-label" for="checkboxIPK">
                      IPK di bawah 2
                    </label>
                  </div>

                  <div class="form-check mr-3 d-flex align-self-center">
                    <input class="form-check-input" type="checkbox" value="true" v-model="this.filterSAC"
                      id="checkboxSAC">
                    <label class="form-check-label" for="checkboxSAC">
                      SAC di bawah 50%
                    </label>
                  </div>
                </div>

                <div>
                  <div id="alertPencarian2" class="row mt-2 mb-1">
                    <div class="p-0 m-0">
                      <p class="p-0 m-0">{{ this.pesanJumlahDaftarMahasiswa }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="grupHasilCari" class="d-flex align-content-start">
              <div v-if="this.listMahasiswaPerwalianFiltered.length > 0" id="containerListMahasiswa"
                class="d-flex flex-wrap w-100">
                <TransitionGroup name="list">
                  <div v-for="item in this.listMahasiswaPerwalianFiltered" :key="item" id="itemCariMahasiswa"
                    class="mb-2 d-flex flex-row col-lg-4 col-md-6 pl-0">
                    <div id="fotoMhs" class="d-flex justify-content-center mr-2">
                      <span class="material-symbols-outlined accCirlcle"> account_circle </span>
                    </div>
                    <div id="dataMahasiswa">
                      <router-link id="namaNimMahasiswa" :to="{ name: 'DetailMahasiswa', params: { id: item.nim } }">
                        <p>{{ item.nama }} / {{ item.nim }}</p>
                      </router-link>
                      <p>
                        {{ item.total_sks }} SKS |

                        <span v-if="item.ipk < 2" class="warningIPK">
                          <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">Mahasiswa ini
                            memiliki IPK dibawah 2.00</v-tooltip>
                          IPK {{ item.ipk }}
                        </span>
                        <span v-else>
                          IPK {{ item.ipk }}
                        </span>
                        |
                        <span v-if="this.isSACKurang(item.poin_keaktifan, item.nim)" class="cekalSAC m-0">
                          <v-tooltip activator="parent" location="bottom" width="400"
                            content-class="bg-grey-darken-1">{{
                            this.pesanSAC }}
                          </v-tooltip>
                          SAC {{ item.poin_keaktifan }}
                        </span>
                        <span v-else>SAC {{ item.poin_keaktifan }}</span>
                      </p>

                      <span v-if="item.list_cekal">
                        <span v-for="(cekal, index) in item.list_cekal" :key="index">
                          <span v-if="cekal.cekal === 'Biro 1'" class="cekal mr-2">
                            <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">{{
                              cekal.deskripsi }}</v-tooltip>{{
                                cekal.cekal }}</span>
                          <span v-else-if="cekal.cekal === 'Biro 2'" class="cekal mr-2">
                            <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">{{
                              cekal.deskripsi }}</v-tooltip>{{
                                cekal.cekal }}</span>
                          <span v-else-if="cekal.cekal === 'Perpustakaan'" class="cekal mr-2">
                            <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">{{
                              cekal.deskripsi }}</v-tooltip>{{
                                cekal.cekal }}</span>
                          <span v-else></span>
                        </span>
                      </span>

                      <p class="statusAktif">
                        <!-- item.status == AK CS DO  -->
                        {{ this.statusText[item.status] }}
                      </p>
                    </div>
                  </div>
                </TransitionGroup>

              </div>
              <div v-else id="containerListMahasiswa" class="d-flex flex-wrap w-100">
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
import BreadcrumbModule from "./BreadcrumbModule.vue";
import Header from "@/components/header/Header.vue"
import axios from 'axios'
import _ from 'lodash';

export default {
  name: "DetailAngkatan",
  components: {
    BreadcrumbModule, Header
  },
  data() {
    return {
      filterMahasiswa: "Semua Mahasiswa",
      inputanCariMahasiswa: "",
      listMahasiswa: [],
      //////////////////////////////
      kode_dosen: '',
      pesanSnackBar: "",
      pesanSAC: "",
      filterIPK: false,
      filterSAC: false,
      opsiUrutanItemDetailAngkatan: "",
      opsiUrutanItemDetailAngkatanSebelum: "",
      isOn: false,
      drawer: false,
      jumlahMahasiswa: 0, // jumlah semua mahasiswa dengan semua status
      jumlahAktifDanTidakAktif: 0,
      jumlahStatusPerwalian: new Map(),
      listCatatanGrupAngkatanTerbaru: [],
      listMahasiswaPerwalianFiltered: [],
      chipFilterStatus: 'Semua Mahasiswa',
      // chipFilterStatus: 'Tidak Aktif',
      listStatusMahasiswa: ['Semua Mahasiswa', 'Aktif', 'Dropped Out', 'Cuti Studi', 'Undur Diri', 'Tidak Aktif', 'AN', 'Lulus'],
      namaDosen: localStorage.getItem("namaDosen"),
      statusText: {
        'AK': 'Aktif',
        'DO': 'Dropped Out',
        'CS': 'Cuti Studi',
        'UD': 'Undur Diri',
        'TA': 'Tidak Aktif',
        'AN': 'AN',
        'LS': 'Lulus',
        'Aktif': 'AK',
        ///
        "Semua Mahasiswa": "Semua Mahasiswa",
        "Dropped Out": "DO",
        "Cuti Studi": "CS",
        "Undur Diri": "UD",
        "Tidak Aktif": "TA",
        "Lulus": "LS",
        "AN": "AN",
        "Aktif dan Tidak Aktif": "Aktif dan Tidak Aktif"
      },
      selectedItems: ["Semua Mahasiswa"], // Daftar item yang dipilih
      //urutan item beranda
      items: [
        {
          myRadioValue: "pilihan1",
          data:
            [
              { id: "bagianCatatan", pos: 1 },
              { id: "bagianDaftarMahasiswa", pos: 2 },
            ]
        },
        {
          myRadioValue: "pilihan2",
          data:
            [
              { id: "bagianDaftarMahasiswa", pos: 1 },
              { id: "bagianCatatan", pos: 2 },
            ]
        }
      ],
      pesanJumlahDaftarMahasiswa: "",
      isPesanErrorOn: false

    };
  },
  created() {
    this.scrollTop();
    this.initData();
  },
  methods: {
    async initData() {
      this.kodeDosen = localStorage.getItem("kodeDosen")

      this.getOpsiUrutanDetailAngkatan()
      await this.getJumlahStatusMahasiswa() // mengambil jumlah semua mahasiswa dengan semua status
      await this.getJumlahStatusMahasiswaAktifDanTidakAktif() // mengambil jumlah mahasiswa aktif dan tidak aktif

      this.getCatatanTerbaru()
      // init data list mahasiswa 
      this.initListMahasiswa()
    },
    isHover() {
      //cek apakah hover ke daftar mahasiswa
      if (this.$route.params.isHover == 1) {
        setTimeout(() => {
          let element = document.getElementById("bagianPencarian");
          let y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 1250);

      }
    },
    async getJumlahStatusMahasiswaAktifDanTidakAktif() {
      try {
        const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/getJumlahAktifdanTidakAktif/`, {
          params: {
            kode_dosen: this.kodeDosen,
            tahun_angkatan: this.$route.params.id,
          },
        });

        if (response.data.error === false) {
          // console.log(response.data.response[0].count);
          this.jumlahAktifDanTidakAktif = response.data.response[0].count;
        } else {
          this.jumlahAktifDanTidakAktif = 0;
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.jumlahAktifDanTidakAktif = 0;
      }
    },
    async getJumlahStatusMahasiswa() {
      try {
        const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/jumlahStatusPerwalian/`, {
          params: {
            kode_dosen: this.kodeDosen,
            tahun_angkatan: this.$route.params.id
          },
        });

        if (response.data.error === false) {
          this.jumlahStatusPerwalian.set(this.$route.params.id, response.data.response.list_status)

          //menghitung jumlah status mahasiswa dari API
          this.jumlahMahasiswa = this.hitungJumlahMahasiswa(this.jumlahStatusPerwalian.get(this.$route.params.id))
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.jumlahStatusPerwalian = [];
      }
    },
    toggleItemSelection(item) {
      this.chipFilterStatus = this.statusText[item]

      if (this.selectedItems.includes(item)) {
        // Hapus item dari daftar yang dipilih jika sudah ada
        const index = this.selectedItems.indexOf(item);
        this.selectedItems.splice(index, 1);

        //jika hapus maka atur filter ke semua mahasiswa
        this.selectedItems.push("Semua Mahasiswa")
        this.chipFilterStatus = "Semua Mahasiswa"
      } else {
        this.selectedItems = [];
        // Tambahkan item ke daftar yang dipilih jika belum ada
        this.selectedItems.push(item);
      }
    },
    hitungJumlahMahasiswa(list) {
      return list.reduce((total, item) => total + parseInt(item.count), 0);
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Animasi smooth scrolling
      });
    },
    limitAgenda(fullString) {
      if (fullString.length > 140) {
        let slicedString = fullString.slice(0, 140);
        return slicedString;
      } else {
        return fullString;
      }
    },
    filterDuplicateMahasiswa(listData) {
      if (listData != []) {
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

        return Array.from(resultMap.values());
      } else {
        return []
      }

    },
    async getCatatanTerbaru() {
      //get catatan terbaru angkatan
      try {
        const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/getTahunCatatanAngkatanTerbaru/`, {
          params: {
            kode_dosen: this.kodeDosen,
            tahun_angkatan: this.$route.params.id
          },
        });

        if (response.data.error === false) {
          this.listCatatanGrupAngkatanTerbaru = response.data.response
        } else {
          this.listCatatanGrupAngkatanTerbaru = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.listCatatanGrupAngkatanTerbaru = [];
      }
    },
    async initListMahasiswa() {
      // get mahasiswa perwalian filtered
      try {
        // cek kode status mahasiswa
        let tempInputFilterShowMahasiswa = ""
        if (this.chipFilterStatus != null) { //this.chipFilter == "Semua Mahasiswa" ,"Aktif", "Dropped Out"
          tempInputFilterShowMahasiswa = this.chipFilterStatus
          tempInputFilterShowMahasiswa = this.statusText[tempInputFilterShowMahasiswa]
        } else {
          tempInputFilterShowMahasiswa = "Semua Mahasiswa"
        }

        const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/mahasiswaPerwalianFiltered/`, {
          params: {
            kode_dosen: this.kodeDosen,
            tahun_angkatan: this.$route.params.id,
            filter: tempInputFilterShowMahasiswa,
          },
        });

        if (response.data.error === false) {
          this.listMahasiswaPerwalianFiltered = response.data.response.list_mahasiswa;

          // langsung di cek apakah ada filter yang nyala
          if (this.filterSAC) {
            this.methodFilterSAC()
          }

          if (this.filterIPK) {
            this.methodFilterIPK()
          }

        } else {
          this.listMahasiswaPerwalianFiltered = [];
          this.pesanError = "Data yang dicari tidak ditemukan"
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.listMahasiswaPerwalianFiltered = [];
        this.pesanError = "Data yang dicari tidak ditemukan"
      }

      this.listMahasiswaPerwalianFiltered = this.filterDuplicateMahasiswa(this.listMahasiswaPerwalianFiltered)
      if (this.listMahasiswaPerwalianFiltered.length > 0) {
        this.pesanJumlahDaftarMahasiswa = "Berhasil mendapatkan " + this.listMahasiswaPerwalianFiltered.length + " mahasiswa"
        return this.listMahasiswaPerwalianFiltered
      } else {
        this.pesanError = "Tidak dapat menemukan data yang dicari"
      }
    },
    convertTimestamp(timestamp) {
      const date = new Date(timestamp);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('id-ID', options);
      return formattedDate;
    },
    logoutDosen() {
      localStorage.clear();
      this.$router.push("/login")
    },
    scrollTo(tujuan) {
      let element = ""
      let y = ""

      switch (tujuan) {
        case 'catatan-perwalian-grup-angkatan':
          element = document.getElementById("judulCatatanPerwalianGrupAngkatan");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
        case 'daftar-mahasiswa-perwalian':
          element = document.getElementById("bagianPencarian");
          y = element.getBoundingClientRect().top + window.pageYOffset + -100;
          window.scrollTo({ top: y, behavior: 'smooth' });

          break;
      }
    },
    showPopUpPreferensi() {
      this.isOn = true;
      this.opsiUrutanItemDetailAngkatanSebelum = this.opsiUrutanItemDetailAngkatan
    },
    batal() {
      this.isOn = false;
      this.opsiUrutanItemDetailAngkatan = this.opsiUrutanItemDetailAngkatanSebelum
      this.opsiUrutanItemDetailAngkatanSebelum = ""
    },
    async getOpsiUrutanDetailAngkatan() {
      try {
        const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/getOpsiDetailAngkatan/`, {
          params: {
            kode_dosen: this.kodeDosen,
          },
        });

        if (response.data.error === false) {
          this.opsiUrutanItemDetailAngkatan = response.data.response[0].opsi_detail_angkatan.trim();
          //untuk untuk atur ulang urutan opsi beranda
          this.simpan(true)
        } else {
          this.opsiUrutanItemDetailAngkatan = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.opsiUrutanItemDetailAngkatan = [];
      }
    },
    async setOpsiUrutanBeranda() {
      try {
        const paramObject = {
          kode_dosen: this.kodeDosen,
          inputan: this.opsiUrutanItemDetailAngkatan,
        }
        const response = await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/setOpsiDetailAngkatan/`, paramObject);

        if (!response.data.error) {
          return true
        } else {
          return false
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.listMahasiswaPerwalianFiltered = [];
      }
    },
    async simpan(loadValue) {
      if (this.opsiUrutanItemDetailAngkatan == "pilihan1") {
        this.isOn = false;
        /*mulai atur urutan berdasarkan pilihan pengguna*/
        this.items[0].data.forEach(dataPosisi => {
          const element = document.getElementById(dataPosisi.id);
          element.style.order = dataPosisi.pos;
        });

      } else if (this.opsiUrutanItemDetailAngkatan == "pilihan2") {
        this.isOn = false;
        /*mulai atur urutan berdasarkan pilihan pengguna*/
        this.items[1].data.forEach(dataPosisi => {
          const element = document.getElementById(dataPosisi.id);
          element.style.order = dataPosisi.pos;
        });
      }

      //simpan this.opsiUrutanItemBeranda ke database 
      const hasil = await this.setOpsiUrutanBeranda()

      //kalau true berarti dari init data, 
      // kalau false berarti dari button simpan
      if (loadValue) {
        //do nothing
      } else if (!loadValue && hasil) {
        // berhasil
        this.pesanSnackBar = "Berhasil memperbarui urutan detail angkatan"
        this.snackbar()
      } else if (!loadValue && !hasil) {
        // gagal
        this.pesanSnackBar = "Gagal memperbarui urutan detail angkatan"
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
    isSACKurang(sac, nim) {
      let tahunSekarang = new Date().getFullYear() // returns the current year
      let tahunMahasiswa = "20" + nim.substr(2, 2)
      let tempSelisihTahun = parseInt(tahunSekarang) - parseInt(tahunMahasiswa)
      let hasil = ""

      if (tempSelisihTahun >= 0 && tempSelisihTahun <= 2 && sac < 50) {
        hasil = true; // sac mahasiswa kurang dari 50% selama 2 tahun kuliah
      } else if (tempSelisihTahun > 2 && tempSelisihTahun <= 4 && sac < 50) {
        hasil = true; // sac mahasiswa kurang dari 50% selama lebih dari 2 tahun kuliah
      } else if (tempSelisihTahun > 4 && sac < 50) {
        hasil = true; // sac mahasiswa kurang dari 50% selama lebih dari 5 tahun kuliah
      } else {
        hasil = false; // sisanya
      }

      // jika hasil true , berarti SAC di bawah 50% pada semua tahun kuliah
      if (hasil) {
        this.pesanSAC = "Mahasiswa ini memiliki poin keaktifan di bawah 50% dari total Syarat Poin Keaktifan, dalam " + tempSelisihTahun + " tahun perkuliahan."
      }
      return hasil
    },
    methodFilterIPK() {
      this.listMahasiswaPerwalianFiltered = (() => {
        return this.listMahasiswaPerwalianFiltered.filter((mahasiswa) => mahasiswa.ipk < 2);
      })()
    },
    methodFilterSAC() {
      this.listMahasiswaPerwalianFiltered = (() => {
        return this.listMahasiswaPerwalianFiltered.filter((mahasiswa) => mahasiswa.poin_keaktifan < 50);
      })()
    }
  },
  mounted() {
    //slim.min.js
    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
    script1.integrity =
      "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj";
    script1.crossOrigin = "anonymous";
    document.head.appendChild(script1);

    //popper.min.js
    // const script2 = document.createElement("script");
    // script2.src = "https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js";
    // script2.integrity =
    //   "sha384-hSM2mzKd06KfNmOz6mK6+sfuLdYVjI1MKOpnE+O+hNEZmZ+zQp8hJz3uPL2twNJX";
    // script2.crossOrigin = "anonymous";
    // document.head.appendChild(script2);

    //bundle.min.js
    const script3 = document.createElement("script");
    script3.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js";
    script3.integrity =
      "sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx";
    script3.crossOrigin = "anonymous";
    document.head.appendChild(script3);

    //cek apakah hover 
    this.isHover()
  },
  watch: {
    inputanCariMahasiswa: {
      handler: _.debounce(async function (baru) {
        // ambil dari semula, filter chip, baru cari
        let tempListMahasiswa = await this.initListMahasiswa()

        //get kata kunci pencarian
        const kataKunciPencarian = baru.toLowerCase().trim();

        let hasilFilter = undefined
        // //lakukan filtering catatan berdasarkan kata kunci 

        if (tempListMahasiswa != undefined) {
          hasilFilter = tempListMahasiswa.filter(mahasiswa =>
            mahasiswa.nama.toLowerCase().includes(kataKunciPencarian) ||
            mahasiswa.nim.toLowerCase().includes(kataKunciPencarian)
          );
        } else {
          hasilFilter = []
        }

        if (hasilFilter.length > 0) { //filter ketemu
          this.pesanJumlahDaftarMahasiswa = "Berhasil mendapatkan " + hasilFilter.length + " mahasiswa"
          this.listMahasiswaPerwalianFiltered = hasilFilter
        } else { // filter tidak ketemu 
          this.pesanJumlahDaftarMahasiswa = "Mahasiswa yang dicari tidak ditemukan"
          this.listMahasiswaPerwalianFiltered = []
        }

      }, 300)
    },
    chipFilterStatus: {
      handler: function (baru) {
        this.initListMahasiswa()
      }
    },
    filterIPK: {
      handler: async function (baru) {
        if (baru) {
          this.methodFilterIPK()
        } else {
          if (this.filterSAC) {
            await this.initListMahasiswa()
            this.methodFilterSAC()
          } else {
            this.initListMahasiswa()
          }
        }

        //pesan feedback pencarian
        if (this.listMahasiswaPerwalianFiltered.length > 0) {
          this.pesanJumlahDaftarMahasiswa = "Berhasil mendapatkan " + this.listMahasiswaPerwalianFiltered.length + " mahasiswa"
          return this.listMahasiswaPerwalianFiltered
        } else {
          this.pesanJumlahDaftarMahasiswa = "Tidak dapat menemukan data yang dicari"
        }

      }
    },
    filterSAC: {
      handler: async function (baru) {
        if (baru) {
          this.methodFilterSAC()
        } else {
          if (this.filterIPK) {
            await this.initListMahasiswa()
            this.methodFilterIPK()
          } else {
            this.initListMahasiswa()
          }
        }

        //pesan feedback pencarian
        if (this.listMahasiswaPerwalianFiltered.length > 0) {
          this.pesanJumlahDaftarMahasiswa = "Berhasil mendapatkan " + this.listMahasiswaPerwalianFiltered.length + " mahasiswa"
        } else {
          this.pesanJumlahDaftarMahasiswa = "Tidak dapat menemukan data yang dicari"
        }
      }
    }
  },
};
</script>

<style scoped src="../../public/frontend/styling/detailAngkatan.css"></style>
