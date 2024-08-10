<template>
  <div id="body">

    <head>
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
    </head>
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
                  {{ this.namaDosen }}
                </p>
              </div>

              <v-btn class="dropDownDosen" color="#E5E5CB" flat active theme="light" @click="this.logoutDosen()">
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
                  <v-list-item link title="Catatan Perwalian Dosen"
                    @click="this.scrollTo('catatan-perwalian-dosen')"></v-list-item>
                  <v-list-item link title="Catatan Dosen" @click="this.scrollTo('catatan-dosen')"></v-list-item>
                  <v-list-item link title="Daftar Grup Perwalian Mahasiswa"
                    @click="this.scrollTo('daftar-grup-perwalian-mahasiswa')"></v-list-item>
                  <v-list-item link title="Grafik Rata-Rata IPK Angkatan"
                    @click="this.scrollTo('grafik-rata-rata-ipk-angkatan')"></v-list-item>
                </div>

              </v-navigation-drawer>
            </v-layout>
          </v-card>
        </template>
      </div>
    </div>


    <div id="content" class="row container-fluid p-0 m-0">
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
                  <p class="text-center">Pilih Urutan Item Beranda</p>


                  <div class="row mb-3 opsiUrutan" id="opsiUrutan1">
                    <div class="col-9 pr-0 pl-0">
                      <ul class="pl-0 ulNoType mb-0">
                        <li class="">
                          <ol class="pl-4">
                            <li>Catatan Perwalian Dosen</li>
                            <li>Catatan Dosen</li>
                            <li>Daftar Grup Perwalian</li>
                          </ol>
                        </li>
                      </ul>
                    </div>

                    <div class="col-3 px-0 d-flex justify-content-center align-items-center">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        value="pilihan1" v-model="this.opsiUrutanItemBeranda"
                        :checked="this.opsiUrutanItemBeranda === 'pilihan1'">
                    </div>
                  </div>


                  <div class="row mb-3 opsiUrutan" id="opsiUrutan2">
                    <div class="col-9 pr-0 pl-0">
                      <ul class="pl-0 ulNoType mb-0">
                        <li class="">
                          <ol class="pl-4">
                            <li>Daftar Grup Perwalian</li>
                            <li>Catatan Perwalian Dosen</li>
                            <li>Catatan Dosen</li>
                          </ol>
                        </li>
                      </ul>
                    </div>

                    <div class="col-3 px-0 d-flex justify-content-center align-items-center">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        value="pilihan2" v-model="this.opsiUrutanItemBeranda"
                        :checked="this.opsiUrutanItemBeranda === 'pilihan2'">
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
                      <p class="">Angkatan {{ item }}</p>
                    </div>
                    <div class="col-2 px-0 d-flex align-items-center">
                      <p class="d-inline-block m-0 jumlahMahasiswaBimbingan">
                        {{ this.jumlahMahasiswaPerwalian.get(item) }}</p>
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

                        <ul v-for="(item, index) in this.jumlahStatusPerwalian.get(item)" :key="index" class="mb-2">
                          <li class="itemInfoMahasiswaBimbingan">
                            <div class="d-flex">
                              <p class="col-8 px-0 m-0 ml-1 align-self-center text-left">
                                {{ this.statusText[item.status] }}
                              </p>

                              <div class="col-4 text-right p-0 d-flex justify-content-center">
                                <p class="m-0 jumlahMahasiswaBimbingan">{{ item.count }}</p>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <ul>
                          <li class="itemInfoMahasiswaBimbingan">
                            <div class="d-flex d-flex justify-content-center">

                              <p class="m-0 align-middle font-weight-bold">
                                <router-link :to="{ name: 'DetailAngkatan', params: { id: item, isHover: 1 } }">
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
                      <p class="text-left">Total Mahasiswa Perwalian</p>
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

        <div id="bagianCatatan" class="mb-2">
          <div class="d-flex align-content-start flex-wrap mt-4">
            <div v-if="this.togglePencarianCatatanPerwalianDosen" id="containerHasilCariCatatanPerwalian">
              <div
                v-if="this.hasilPencarianCatatanPerwalianDosen.length >= 1 && this.hasilPencarianCatatanPerwalianDosen[0] != 'kosongError'"
                id="kolomHasilPencarian" class="col-10">
                <div class="d-flex flex-wrap col-12 py-2 px-1">
                  <div v-for="(catatan, index) in this.hasilPencarianCatatanPerwalianDosen" :key="index"
                    class="col-6 my-3 px-0" id="itemCariCatatan">
                    <div id="itemHasilPencarian" class="p-2">
                      <span v-bind:class="{
                        garisMahasiswa: catatan.tipe == 'mahasiswa',
                        garisOrangTuaWali: catatan.tipe == 'orang-tua-wali',
                        garisOrangTuaWaliMahasiswa: catatan.tipe == 'orang-tua-wali-dan-mahasiswa',
                        garisGrupAngkatan: catatan.tipe == 'grup-angkatan',
                      }"></span>

                      <p class="m-0" id="judulItemHasilPencarian">
                        <b>
                          {{ this.limitJudul(catatan.judul) }}
                        </b>
                      </p>

                      <p class="m-0">{{ this.convertTimestamp(catatan.waktu) }} | {{
                        this.convertToWIB(catatan.waktu_awal) }}
                        - {{ this.convertToWIB(catatan.waktu_akhir) }}
                      </p>

                      <p class="m-0" v-if="catatan.tipe != 'grup-angkatan'">
                        <b>
                          {{ catatan.nama }} / {{ catatan.nim }}
                        </b>
                      </p>
                      <p class="m-0 text-justify" id="agendaPerwalian">
                        {{ limitAgenda(catatan.agenda_perwalian) }}

                        <router-link v-if="catatan.tipe == 'mahasiswa'"
                          :to="{ name: 'EditCatatanMahasiswa', params: { id: catatan.id_catatan_perwalian_dosen } }"
                          id="lihatSelengkapnyaHasilPencarian">
                          <u>
                            Lihat selengkapnya
                          </u>
                        </router-link>

                        <router-link v-else-if="catatan.tipe == 'orang-tua-wali'"
                          :to="{ name: 'EditCatatanOrangTuaWali', params: { id: catatan.id_catatan_perwalian_dosen } }"
                          id="lihatSelengkapnyaHasilPencarian">
                          <u>
                            Lihat selengkapnya
                          </u>
                        </router-link>

                        <router-link v-else-if="catatan.tipe == 'orang-tua-wali-dan-mahasiswa'"
                          :to="{ name: 'EditCatatanOrangTuaWaliDanMahasiswa', params: { id: catatan.id_catatan_perwalian_dosen } }"
                          id="lihatSelengkapnyaHasilPencarian">
                          <u>
                            Lihat selengkapnya
                          </u>
                        </router-link>

                        <router-link v-else
                          :to="{ name: 'EditCatatanGrupAngkatan', params: { id: catatan.id_catatan_perwalian_dosen } }"
                          id="lihatSelengkapnyaHasilPencarian">
                          <u>
                            Lihat selengkapnya
                          </u>
                        </router-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-else-if="this.hasilPencarianCatatanPerwalianDosen.length >= 1 && this.hasilPencarianCatatanPerwalianDosen[0] == 'kosongError'"
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

              <div
                v-else-if="this.hasilPencarianCatatanPerwalianDosen.length == 0 && this.inputanCariCatatanPerwalianDosen != ''"
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

            <div class="col-md-7 col-sm-12 px-0" id="catatanPerwalianDosen">

              <div id="judulCariCatatanPerwalian" class="col-12 pl-0">
                <p class="mb-0">Catatan Perwalian Dosen</p>
              </div>
              <div class="col-12 mb-1 mt-xl-3 pl-0" id="containerCariCatatanPerwalian">
                <span class="material-symbols-outlined search"> search </span>
                <input id="inputCariCatatanPerwalian" type="text" placeholder="Cari catatan perwalian semua angkatan"
                  @keyup="cariCatatanPerwalianDosen" @focus="scrollPage('catatan-perwalian-dosen')"
                  v-model="inputanCariCatatanPerwalianDosen">
              </div>
              <div class="pt-0 mb-0">
                <p id="indikatorWarna">
                  <span class="material-symbols-outlined bullet align-middle"> circle </span>
                  <span class="mr-1">Mahasiswa</span>

                  <span class="material-symbols-outlined bullet align-middle">circle</span>
                  <span class="mr-1"> Orang Tua / Wali</span>

                  <span class="material-symbols-outlined bullet align-middle"> circle </span>
                  <span class="mr-1"> Orang Tua / Wali &amp; Mahasiswa</span>

                  <span class="material-symbols-outlined bullet align-middle"> circle </span>
                  <span class="mr-1"> Grup Angkatan</span>
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-12 my-sm-3 d-flex align-items-center">

              <div id="kolomTambahCatatan d-flex ">
                <router-link :to="{ name: 'TambahCatatanPerwalian', params: { canBack: 1 } }" id="tambahCatatan"
                  class="align-middle">
                  <span class="material-symbols-outlined mr-2">
                    add_box
                  </span>
                </router-link>

                <router-link :to="{ name: 'TambahCatatanPerwalian', params: { canBack: 1 } }" id="tambahCatatan"
                  class="judulTambahCatatan">
                  Tambah Catatan Perwalian
                </router-link>
              </div>

            </div>
          </div>

          <div id="listCatatanPerwalian" class="d-flex align-content-start flex-wrap mt-1 pb-3">
            <!-- jika loading catatan dari api -->
            <div v-if="this.loadingCatatanPerwalianTerbaru" class="w-100 d-flex">
              <div v-for="(catatan, index) in 3" :key="index" id="itemCatatan"
                class="d-flex justify-content-center col-lg-3 col-md-4 mr-lg-3 mr-md-0 col-sm-6 mb-sm-4 px-sm-0">
                <div id="itemCatatanPerwalian" class="card ">
                  <div class="card-body w-100 p-2">
                    <article>
                      <div class="line"></div>
                      <div class="line"></div>
                      <div class="line"></div>
                      <div class="shimmer"></div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <!-- jika tidak ada catatan dari api -->
            <div v-else-if="this.catatanPerwalianDosenTerbaru.length == 0" class="w-100">
              <div id="itemCatatan"
                class="d-flex justify-content-center col-lg-3 col-md-4 mr-lg-3 mr-md-0 col-sm-6 mb-sm-4 px-sm-0">
                <div id="itemCatatanPerwalian" class="card">

                  <div class="card-body">
                    <!-- tipe garis -->
                    <span v-bind:class="{
                      garisMahasiswa: true,
                    }"></span>

                    <!-- judul catatan == tipe catatan -->
                    <h5 class="card-title text-center">Tidak ada catatan</h5>
                    <p>Tidak ada catatan perwalian dosen terbaru</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- jika sudah di load -->
            <div v-else class="w-100 d-flex" id="listCatatanPerwalianTerbaru">
              <div v-for="(catatan, index) in this.catatanPerwalianDosenTerbaru" :key="index" id="itemCatatan"
                class="d-flex justify-content-center col-lg-3 col-md-4 mr-lg-3 mr-md-0 col-sm-6 mb-sm-4 px-sm-0">
                <div id="itemCatatanPerwalian" class="card ">

                  <div class="card-body">
                    <!-- tipe garis -->
                    <span v-bind:class="{
                      garisMahasiswa: catatan.tipe == 'mahasiswa',
                      garisOrangTuaWali: catatan.tipe == 'orang-tua-wali',
                      garisOrangTuaWaliMahasiswa: catatan.tipe == 'orang-tua-wali-dan-mahasiswa',
                      garisGrupAngkatan: catatan.tipe == 'grup-angkatan',
                    }"></span>

                    <!-- judul catatan == tipe catatan -->
                    <h5 class="card-title text-center">{{ this.limitJudul(catatan.judul) }}</h5>
                    <!-- waktu catatan -->
                    <h6 class="card-subtitle mb-2 text-center">{{
                      this.convertTimestamp(catatan.waktu)
                    }}
                    </h6>
                    <!-- nama mahasiswa -->
                    <h6 v-if="catatan.tipe != 'grup-angkatan'"
                      class="card-subtitle mt-4 mb-1 font-weight-bold text-left">
                      {{ catatan.nama }} / {{ catatan.nim }}</h6>
                    <h6 v-else class="card-subtitle mt-4 mb-1 font-weight-bold text-left">
                      Angkatan {{ catatan.tahun_angkatan }}</h6>

                    <!-- lihat selengkapnya per kategori catatan -->
                    <p v-if="catatan.tipe != 'grup-angkatan'" class="card-text text-justify">
                      {{ limitAgenda(catatan.agenda_perwalian) }}
                      <span>
                        <router-link v-if="catatan.tipe == 'mahasiswa'"
                          :to="`edit-catatan-mahasiswa/${catatan.id_catatan_perwalian_dosen}`"
                          class="font-weight-bold"><u>Lihat selengkapnya</u></router-link>
                        <router-link v-else-if="catatan.tipe == 'orang-tua-wali'"
                          :to="`edit-catatan-orang-tua-wali/${catatan.id_catatan_perwalian_dosen}`"
                          class="font-weight-bold"><u>Lihat selengkapnya</u></router-link>
                        <router-link v-else-if="catatan.tipe == 'orang-tua-wali-dan-mahasiswa'"
                          :to="`edit-catatan-orang-tua-wali-dan-mahasiswa/${catatan.id_catatan_perwalian_dosen}`"
                          class="font-weight-bold"><u>Lihat selengkapnya</u></router-link>
                      </span>
                    </p>
                    <p v-else id="catatanCatatanGrupAngkatan" class="card-text text-justify">
                      {{ limitAgenda(catatan.agenda_perwalian) }}
                      <span>
                        <router-link :to="`edit-catatan-grup-angkatan/${catatan.id_catatan_perwalian_dosen}`"
                          class="font-weight-bold"><u>Lihat selengkapnya</u></router-link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>



            <div class="col-12 d-flex justify-content-start mt-3 px-0">
              <div id="lihatSemuaCatatan" class="px-0">
                <router-link id="lihatSemuaCatatanPerwalianDosen" :to="{ name: 'DaftarCatatanPerwalianDosen' }">Lihat
                  semua
                  catatan
                  perwalian</router-link>
              </div>
            </div>
          </div>

          <div class="col-12 d-flex justify-content-start mt-4 px-0">
            <div id="garisBatasCatatan"></div>
          </div>

        </div>

        <div id="bagianCatatanDosen">
          <div class="d-flex align-content-start flex-wrap mt-4">
            <div v-if="this.togglePencarianCatatanDosen" id="containerHasilCariCatatanPerwalian">
              <div
                v-if="this.hasilPencarianCatatanDosen.length >= 1 && this.hasilPencarianCatatanDosen[0] != 'kosongError'"
                id="kolomHasilPencarian" class="col-10">
                <div class="d-flex flex-wrap col-12 py-2 px-1">
                  <div v-for="(catatan, index) in this.hasilPencarianCatatanDosen" :key="index" class="col-6 my-3 px-0"
                    id="itemCariCatatan">
                    <div id="itemHasilPencarian" class="p-2">
                      <span v-bind:class="{
                        garisMahasiswa: catatan.tipe == 'refleksi-dosen',
                        garisOrangTuaWali: catatan.tipe == 'khusus',
                      }"></span>

                      <p class="m-0" id="judulItemHasilPencarian">
                        <b>
                          {{ this.limitJudul(catatan.judul) }}
                        </b>
                      </p>

                      <p class="m-0">{{ this.convertTimestamp(catatan.waktu) }} | {{
                        this.convertToWIB(catatan.waktu_awal) }}
                        - {{ this.convertToWIB(catatan.waktu_akhir) }}
                      </p>

                      <p class="m-0" v-if="catatan.nim != null && catatan.nama != null">
                        <b>
                          {{ catatan.nama }} / {{ catatan.nim }}
                        </b>
                      </p>
                      <p class="m-0 text-justify">
                        {{ limitAgenda(catatan.agenda_perwalian) }}

                        <router-link v-if="catatan.tipe == 'refleksi-dosen'"
                          :to="{ name: 'EditCatatanOrangTuaWaliDanMahasiswa', params: { id: catatan.id_catatan_dosen } }"
                          id="lihatSelengkapnyaHasilPencarian">
                          <u>
                            Lihat selengkapnya
                          </u>
                        </router-link>

                        <router-link v-else-if="catatan.tipe == 'khusus'"
                          :to="{ name: 'EditCatatanGrupAngkatan', params: { id: catatan.id_catatan_dosen } }"
                          id="lihatSelengkapnyaHasilPencarian">
                          <u>
                            Lihat selengkapnya
                          </u>
                        </router-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-else-if="this.hasilPencarianCatatanDosen.length >= 1 && this.hasilPencarianCatatanDosen[0] == 'kosongError'"
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

              <div v-else-if="this.hasilPencarianCatatanDosen.length == 0 && this.inputanCariCatatanDosen != ''"
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

            <div class="col-md-7 col-sm-12 px-0">
              <div id="judulCariCatatanPerwalian" class="d-flex col-12 pl-0">
                <p class="mb-0">Catatan Dosen</p>

                <div>
                  <v-icon class="ml-2" size="small" color="grey-darken-1">
                    mdi-information-outline
                  </v-icon>
                  <v-tooltip activator="parent" width="400" content-class="bg-grey-darken-1" location="bottom">Catatan
                    Dosen
                    merupakan catatan yang digunakan untuk Dosen Wali sendiri. Catatan Dosen Tipe 'Refleksi Dosen'
                    sebagai
                    pengingat / catatan untuk Dosen Wali. Sedangkan Catatan Dosen Tipe 'Khusus' sebagai catatan diluar
                    semua
                    tipe di Catatan Perwalian Dosen dan Catatan Dosen Tipe 'Refleksi Dosen'
                  </v-tooltip>
                </div>

              </div>
              <div class="col-12 mb-1 mt-xl-3 pl-0" id="containerCariCatatanPerwalian">
                <span class="material-symbols-outlined search"> search </span>
                <input id="inputCariCatatanDosen" type="text" placeholder="Cari catatan dosen" @keyup="cariCatatanDosen"
                  @focus="scrollPage('catatan-dosen')" v-model="inputanCariCatatanDosen">
              </div>

              <div class="pt-0 mb-0">
                <p id="indikatorWarna">
                  <span class="material-symbols-outlined bullet align-middle"> circle </span>
                  <span class="mr-1">Refleksi Dosen</span>

                  <span class="material-symbols-outlined bullet align-middle">circle</span>
                  <span class="mr-1">Khusus</span>

                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-12 my-sm-3 d-flex align-items-center">

              <div id="kolomTambahCatatan d-flex ">
                <router-link :to="{ name: 'TambahCatatanDosen', params: { canBack: 1 } }" id="tambahCatatan"
                  class="align-middle">
                  <span class="material-symbols-outlined mr-2">
                    add_box
                  </span>
                </router-link>


                <router-link :to="{ name: 'TambahCatatanDosen', params: { canBack: 1 } }" id="tambahCatatan"
                  class="judulTambahCatatan">
                  Tambah Catatan Dosen
                </router-link>
              </div>

            </div>
          </div>

          <div id="listCatatanPerwalian" class="d-flex align-content-start flex-wrap mt-1 pb-3">
            <div v-if="this.loadingCatatanDosenTerbaru" class="w-100 d-flex">
              <div v-for="(catatan, index) in 3" :key="index" id="itemCatatan"
                class="d-flex justify-content-center col-lg-3 col-md-4 mr-lg-3 mr-md-0 col-sm-6 mb-sm-4 px-sm-0">
                <div id="itemCatatanPerwalian" class="card ">
                  <div class="card-body w-100 p-2">
                    <article>
                      <div class="line"></div>
                      <div class="line"></div>
                      <div class="line"></div>
                      <div class="shimmer"></div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div v-else-if="this.catatanDosenTerbaru.length == 0" class="w-100 d-flex">
              <div id="itemCatatan"
                class="d-flex justify-content-center col-lg-3 col-md-4 mr-lg-3 mr-md-0 col-sm-6 mb-sm-4 px-sm-0">
                <div id="itemCatatanPerwalian" class="card">

                  <div class="card-body">
                    <!-- tipe garis -->
                    <span v-bind:class="{
                      garisMahasiswa: true,
                    }"></span>

                    <!-- judul catatan == tipe catatan -->
                    <h5 class="card-title text-center">Tidak ada catatan</h5>
                    <p>Tidak ada catatan dosen terbaru</p>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="w-100 d-flex" id="listCatatanDosenTerbaru">
              <div v-for="(catatan, index) in this.catatanDosenTerbaru" :key="index" id="itemCatatan"
                class="d-flex justify-content-center col-lg-3 col-md-4 mr-lg-3 mr-md-0 col-sm-6 mb-sm-4 px-sm-0">
                <div id="itemCatatanPerwalian" class="card ">
                  <div class="card-body">

                    <span v-bind:class="{
                      garisMahasiswa: catatan.tipe == 'refleksi-dosen',
                      garisOrangTuaWali: catatan.tipe == 'khusus',
                    }"></span>

                    <h5 class="card-title text-center">{{ this.limitJudul(catatan.judul) }}</h5>
                    <h6 class="card-subtitle mb-2 text-center">{{ this.convertTimestamp(catatan.waktu)
                      }}
                    </h6>
                    <p v-if="catatan.tipe == 'khusus'" class="mt-4 mb-0 font-weight-bold">
                      {{ catatan.nama }} / {{ catatan.nim }}
                    </p>
                    <p class="card-text mb-3  text-justify">{{ limitAgenda(catatan.agenda_perwalian)
                      }}
                      <span v-if="catatan.tipe == 'refleksi-dosen'"><router-link
                          :to="{ name: 'EditCatatanRefleksiDosen', params: { id: catatan.id_catatan_dosen } }"
                          class="font-weight-bold"><u>Lihat selengkapnya</u></router-link></span>
                      <span v-else><router-link
                          :to="{ name: 'EditCatatanKhusus', params: { id: catatan.id_catatan_dosen } }"
                          class="font-weight-bold"><u>Lihat selengkapnya</u></router-link></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 d-flex justify-content-start mt-3 px-0">
              <div id="lihatSemuaCatatan" class="px-0">
                <router-link id="lihatSemuaCatatanDosen" :to="{ name: 'DaftarCatatanDosen' }">
                  Lihat semua catatan dosen
                </router-link>
              </div>
            </div>
          </div>

          <div class="col-12 d-flex justify-content-start mt-4 px-0">
            <div id="garisBatasCatatan"></div>
          </div>
        </div>

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
            <div v-if="this.listTahunAngkatanBimbingan.length > 0" class="w-100 d-flex">
              <div v-for="(tahunAngkatan, index) in this.listTahunAngkatanBimbingan" :key="index" id="mahasiswaAngkatan"
                class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3 px-0">
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
                    <router-link :to="{ name: 'DetailAngkatan', params: { id: tahunAngkatan, isHover: 0 } }"
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

          <div id="chartRataRataIPK" class="mt-4">
            <div class="d-flex align-self-center mb-3">
              <p class="mb-0">Grafik Rata Rata IPK Angkatan</p>

              <div class="d-inline align-self-center">
                <v-icon class="ml-2" size="default" color="grey-darken-1">
                  mdi-information-outline
                </v-icon>
                <v-tooltip activator="parent" content-class="bg-grey-darken-1" location="bottom" width="300">Anda dapat
                  menghilangkan garis "{{ this.labelRataChart() }}" dengan menekan label angkatan
                  tersebut pada chart dibawah
                  <br class="mb-3">
                  Jika nilai IPK suatu angkatan tidak ada, maka IPK angkatan tersebut tidak akan dihitung
                  menjadi nilai rata-rata IPK Angkatan per tahun
                </v-tooltip>

              </div>
            </div>

            <div id="containerChart">
              <!-- <canvas ref="myChart"></canvas> -->
              <canvas ref="myChart" id="myChart"></canvas>
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

import BreadcrumbModule from './BreadcrumbModule.vue';
import debounce from 'lodash.debounce';
import Cookies from 'js-cookie';

export default {
  name: "BerandaPage",
  components: {
    BreadcrumbModule
  },
  data() {
    return {
      isOn: false, //default false
      inputanCariCatatanPerwalianDosen: "", //default kosong
      inputanCariCatatanDosen: "",
      inputanCariMahasiswa: "",
      namaDosen: "",
      kodeDosen: "",
      drawer: null,
      listTahunAngkatanBimbingan: [],
      jumlahStatusPerwalian: new Map(),
      jumlahMahasiswaPerwalian: new Map(),
      jumlahSemuaMahasiswaPerwalianAngkatan: 0,
      showInfoAngkatan: new Map(), //untuk on off toggle ke bawah 
      counter: new Map(), // untuk counter chart rata-rata ipk angkatan (asumsi dosen memiliki tidak <= 3 angkatan perwalian)
      mahasiswaPerwalian: new Map(), //untuk wadah list nama mahasiswa & info kuliah
      rataIPKAngkatanPerTahun: [], // wadah list rata-rata ipk angkatan 
      dataResponIPK: new Map(),
      hasilPencarianCatatanPerwalianDosen: [],
      hasilPencarianCatatanDosen: [],
      hasilPencarianMahasiswa: [],
      togglePencarianCatatanPerwalianDosen: false,
      togglePencarianCatatanDosen: false,
      togglePencarianMahasiswa: false,
      catatanPerwalianDosenTerbaru: [],
      catatanDosenTerbaru: [],
      items: [
        {
          myRadioValue: "pilihan1",
          data:
            [
              { id: "bagianCatatan", pos: 1 },
              { id: "bagianCatatanDosen", pos: 2 },
              { id: "bagianGrupAngkatan", pos: 3 },
            ]
        },
        {
          myRadioValue: "pilihan2",
          data:
            [
              { id: "bagianGrupAngkatan", pos: 1 },
              { id: "bagianCatatan", pos: 2 },
              { id: "bagianCatatanDosen", pos: 3 },
            ]
        }
      ],
      itemsLogout: [
        { title: 'Logout' },
      ],
      loadingCatatanPerwalianTerbaru: true,
      loadingCatatanDosenTerbaru: true,
      opsiUrutanItemBeranda: "",
      opsiUrutanItemBerandaSebelumnya: "",
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
      isKaprodi: false

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

      this.getOpsiUrutanBeranda()
      await this.getTahunAngkatan()
      // membuat template list tahun untuk chart IPK angkatan seperti di bawah 

      await this.getJumlahStatusMahasiswa()
      this.loadChart()
      await this.getCatatanDosenTerbaru()
      await this.getCatatanPerwalianDosenTerbaru()

      this.hitungRataRataIPKAngkatan()
      this.createChart2()
      //untuk untuk atur ulang urutan opsi beranda
      this.simpan(true)
    },
    async getJumlahStatusMahasiswa() {
      if (this.listTahunAngkatanBimbingan.length != 0) {
        for (let i = 0; i < this.listTahunAngkatanBimbingan.length; i++) {
          //get jumlah status mahasiswa angkatan per tahun angkatan (AK, DO, CS, dll)
          try {
            const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/jumlahStatusPerwalian/`, {
              params: {
                kode_dosen: this.kodeDosen,
                tahun_angkatan: this.listTahunAngkatanBimbingan[i]
              },
            });

            if (response.data.error === false) {
              // map untuk toggle data false true
              this.showInfoAngkatan.set(this.listTahunAngkatanBimbingan[i], false)
              // map untuk counter toggle detail & scroll layar
              this.counter.set(this.listTahunAngkatanBimbingan[i], 0)
              // simpan list status mahasiswa AK DO UD dll 
              this.jumlahStatusPerwalian.set(this.listTahunAngkatanBimbingan[i], response.data.response.list_status)
            }
          } catch (error) {
            console.error("Terjadi kesalahan saat mengambil data:", error);
            this.listMahasiswaPerwalianFiltered = [];
          }

          // get jumlah mahasiswa perwalian => "Total Mahasiswa Perwalian"
          const listStatusAngkatan = this.jumlahStatusPerwalian.get(this.listTahunAngkatanBimbingan[i])
          let tempTotalMahasiswaAngkatan = 0
          for (let i = 0; i < listStatusAngkatan.length; i++) {
            tempTotalMahasiswaAngkatan += parseInt(listStatusAngkatan[i].count)
            this.jumlahSemuaMahasiswaPerwalianAngkatan += parseInt(listStatusAngkatan[i].count)
          }
          this.jumlahMahasiswaPerwalian.set(this.listTahunAngkatanBimbingan[i], tempTotalMahasiswaAngkatan)

          //get mahasiswaPerwalian 
          try {
            const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/mahasiswaPerwalian/`, {
              params: {
                kode_dosen: this.kodeDosen,
                tahun_angkatan: this.listTahunAngkatanBimbingan[i]
              },
            });

            if (response.data.error === false) {
              this.mahasiswaPerwalian.set(this.listTahunAngkatanBimbingan[i], this.filterDuplicateMahasiswa(response.data.response.list_status))
            }
          } catch (error) {
            console.error("Terjadi kesalahan saat mengambil data:", error);
          }

          //get rata-rata ipk angkatan per tahun
          try {
            const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/rataIPKAngkatanPerTahun/`, {
              params: {
                kode_dosen: this.kodeDosen,
                tahun_angkatan: this.listTahunAngkatanBimbingan[i]
              },
            });

            if (response.data.error === false) {
              // membuat hash map 2015 => list_ipk
              this.dataResponIPK.set(this.listTahunAngkatanBimbingan[i], response.data.response)
              console.log(this.dataResponIPK);
              // buat template chart tahun
              // data respon berisi list ipk per tahun angkatan. misal angkatan 2015 ipknya pertahun 3.00, 3.12, 3.45, dst
              // console.log(response.data.response);
              this.templateChart(this.listTahunAngkatanBimbingan[i], response.data.response.length)
            }
          } catch (error) {
            console.error("Terjadi kesalahan saat mengambil data:", error);
          }
        }
      }
    },
    async getTahunAngkatan() {
      //get tahun angkatan perwalian dosen (misal 2015, 2020)
      try {
        const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/angkatanMahasiswaPerwalian/`, {
          params: {
            kode_dosen: this.kodeDosen,
          },
        });

        if (response.data.error === false) {
          this.listTahunAngkatanBimbingan = response.data.response.tahun_angkatan

        } else {
          this.listTahunAngkatanBimbingan = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan ", error);
        this.listTahunAngkatanBimbingan = [];
      }
    },
    templateChart(tahunAngkatan, iterasi) { //untuk push template tahun
      // misal 2015 + 1 = 2016
      let tempTahunAngkatan = parseInt(tahunAngkatan) + 1
      // iterasi == jumlah list ipk mahasiswa angkatan 3.00, 3.12, 3.45, dst
      for (let i = 0; i < iterasi; i++) {
        // mencari apakah d memiliki tahunChart yang nilainya sama dengan tempTahunAngkatan
        // kalau memang key d.tahunChart belum dibuat => return error 
        const existingYearData = this.rataIPKAngkatanPerTahun.find((d) => d.tahunChart === tempTahunAngkatan);
        // kalau misal belum ada, maka push 
        if (!existingYearData) {
          //push objek dengan key "tahunChart" dan value tempTahunAngkatan
          this.rataIPKAngkatanPerTahun.push(
            {
              tahunChart: tempTahunAngkatan
            }
          )
        }
        tempTahunAngkatan += 1
      }


      // contoh template rataIPKAngkatanPerTahun yang sudah jadi 
      // rataIPKAngkatanPerTahun = [
      //     { tahunChart: 2016 },
      //     { tahunChart: 2017 },
      //     { tahunChart: 2018 },
      //     { tahunChart: 2019 },
      //     { tahunChart: 2020 },
      //     { tahunChart: 2021 },
      //     { tahunChart: 2022 },
      // ]
    },
    loadChart() { //membuat isi data dari chart.js yang akan di pakai
      let counter = 0
      //isi template chart tahun sebelumnya
      for (let i = 0; i < this.listTahunAngkatanBimbingan.length; i++) { // mengulangi 2 tahun angkatan
        //misal angkatan tahun 2015, maka startTahun = 2016
        let startTahun = parseInt(this.listTahunAngkatanBimbingan[i]) + 1
        console.log(startTahun);
        // dataRataIPK berisi key value, tahun angkatan => list ipk per tahun 
        const dataRataIPK = this.dataResponIPK.get(this.listTahunAngkatanBimbingan[i])
        console.log(this.dataResponIPK);
        console.log(dataRataIPK);
        // console.log(this.rataIPKAngkatanPerTahun);
        // rataIPKAngkatanPerTahun = [
        //     { tahunChart: 2016 },
        //     { tahunChart: 2017 },
        //     { tahunChart: 2018 },
        //     { tahunChart: 2019 },
        //     { tahunChart: 2020 },
        //     { tahunChart: 2021 },
        //     { tahunChart: 2022 },
        // ]

        // dataRataIPK misal tahun 2015
        // {kode_semester: '20152', round: '2.12'}
        // {kode_semester: '20162', round: '2.25'}
        // {kode_semester: '20172', round: '2.37'}
        // {kode_semester: '20182', round: '2.66'}               
        // {kode_semester: '20192', round: '2.83'}
        // {kode_semester: '20202', round: '2.52'}
        if (counter == 0) {
          for (let ii = 0; ii < dataRataIPK.length; ii++) {
            // this.rataIPKAngkatanPerTahun dipanggil dari templateChart()
            const existingYearData = this.rataIPKAngkatanPerTahun.find((d) => d.tahunChart === startTahun);
            console.log(existingYearData);
            if (existingYearData) {
              // console.log(dataRataIPK[ii]);
              if (dataRataIPK[ii] != null) {
                // setting nilai dataA 
                existingYearData.dataA = parseFloat(dataRataIPK[ii].round)
              }
              // console.log(existingYearData);
            }
            startTahun += 1
          }
          //mengecek yang masih null ,
          // jadi ada template chart rataIPKAngkatanPerTahun, lalu diisi dengan list ipk yang dimiliki oleh sebuah angkatan (2015)
          // misal dari list ipk 2015 cuman ada 6 ipk, padahal ada 7 slot ipk (dari template), 
          // maka slot null tersebut akan di isi dengan nilai 0 menggunakan perulangan dibawah  
          startTahun = parseInt(this.rataIPKAngkatanPerTahun[0].tahunChart)
          for (let iii = 0; iii < this.rataIPKAngkatanPerTahun.length; iii++) {
            const existingYearData = this.rataIPKAngkatanPerTahun.find((d) => d.tahunChart === startTahun);
            // cek apakah nilai dataA belum di setting, maka jadikan null
            if (!existingYearData.hasOwnProperty("dataA")) {
              existingYearData.dataA = null
            }
            startTahun += 1
          }

        }
        // tahun angkatan bimbingan ke dua (misal 2020)
        else if (counter == 1) {
          for (let i = 0; i < dataRataIPK.length; i++) {
            const existingYearData = this.rataIPKAngkatanPerTahun.find((d) => d.tahunChart === startTahun);
            if (existingYearData) {
              if (dataRataIPK[i] != null) {
                existingYearData.dataB = parseFloat(dataRataIPK[i].round)
              }
            }
            startTahun += 1
          }
          //mengecek yang masih null 
          startTahun = parseInt(this.rataIPKAngkatanPerTahun[0].tahunChart)
          for (let ii = 0; ii < this.rataIPKAngkatanPerTahun.length; ii++) {
            const existingYearData = this.rataIPKAngkatanPerTahun.find((d) => d.tahunChart === startTahun);
            if (!existingYearData.hasOwnProperty("dataB")) {
              existingYearData.dataB = null
            }
            startTahun += 1
          }
        }
        else if (counter == 2) {
          for (let i = 0; i < dataRataIPK.length; i++) {
            const existingYearData = this.rataIPKAngkatanPerTahun.find((d) => d.tahunChart === startTahun);
            if (existingYearData) {
              if (dataRataIPK[i] != null) {
                existingYearData.dataC = parseFloat(dataRataIPK[i].round)
              }
            }
            startTahun += 1
          }

          //mengecek yang masih null 
          startTahun = parseInt(this.rataIPKAngkatanPerTahun[0].tahunChart)
          for (let ii = 0; ii < this.rataIPKAngkatanPerTahun.length; ii++) {
            const existingYearData = this.rataIPKAngkatanPerTahun.find((d) => d.tahunChart === startTahun);
            if (!existingYearData.hasOwnProperty("dataC")) {
              existingYearData.dataC = null
            }
            startTahun += 1
          }
        }
        counter += 1
      }
    },
    async getCatatanPerwalianDosenTerbaru() {
      //get 3 catatan perwalian dosen terbaru  
      try {
        const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/catatanPerwalianDosenTerbaru/`, {
          params: {
            kode_dosen: this.kodeDosen
          },
        });

        if (response.data.error === false) {
          this.catatanPerwalianDosenTerbaru = response.data.response.list_catatan_perwalian_dosen;
        } else {
          this.catatanPerwalianDosenTerbaru = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.catatanPerwalianDosenTerbaru = [];
      }
    },
    async getCatatanDosenTerbaru() {
      // get 3 catatan dosen terbaru
      try {
        const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/catatanDosenTerbaru/`, {
          params: {
            kode_dosen: this.kodeDosen
          },
        });

        if (response.data.error === false) {
          this.catatanDosenTerbaru = response.data.response.list_catatan_dosen;
        } else {
          this.catatanDosenTerbaru = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.catatanDosenTerbaru = [];
      }
    },
    async getOpsiUrutanBeranda() {
      try {
        const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/getOpsiBeranda/`, {
          params: {
            kode_dosen: this.kodeDosen,
          },
        });

        if (response.data.error === false) {
          this.opsiUrutanItemBeranda = response.data.response[0].opsi_beranda;
        } else {
          this.opsiUrutanItemBeranda = [];
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        this.opsiUrutanItemBeranda = [];
      }
    },
    async setOpsiUrutanBeranda() {
      try {
        const paramObject = {
          kode_dosen: this.kodeDosen,
          inputan: this.opsiUrutanItemBeranda,
        }
        const response = await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/setOpsiBeranda/`, paramObject);

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
      if (this.opsiUrutanItemBeranda == "pilihan1") {
        this.isOn = false;
        /*mulai atur urutan berdasarkan pilihan pengguna*/
        this.items[0].data.forEach(dataPosisi => {
          const element = document.getElementById(dataPosisi.id);
          element.style.order = dataPosisi.pos;
        });
        // this.isChecked1 = true;
        // this.isChecked2 = false;

      } else if (this.opsiUrutanItemBeranda == "pilihan2") {
        this.isOn = false;
        /*mulai atur urutan berdasarkan pilihan pengguna*/
        this.items[1].data.forEach(dataPosisi => {
          const element = document.getElementById(dataPosisi.id);
          element.style.order = dataPosisi.pos;
        });
        // this.isChecked1 = false;
        // this.isChecked2 = true;
      }

      //simpan this.opsiUrutanItemBeranda ke database 
      const hasil = await this.setOpsiUrutanBeranda()

      //kalau true berarti dari init data, 
      // kalau false berarti dari button simpan
      if (loadValue) {
        //do nothing
      } else if (!loadValue && hasil) {
        // berhasil
        this.pesanSnackBar = "Berhasil memperbarui urutan beranda"
        this.snackbar()
      } else if (!loadValue && !hasil) {
        // gagal
        this.pesanSnackBar = "Gagal memperbarui urutan beranda"
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
    showPopUpPreferensi() {
      this.isOn = true;
      this.opsiUrutanItemBerandaSebelumnya = this.opsiUrutanItemBeranda
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
    createChart2() { // membuat chart berdasarkan data yang sudah ada di loadChart()
      let finalData = []
      let counter = 0
      for (let i = 0; i < this.listTahunAngkatanBimbingan.length; i++) {
        if (counter == 0) {
          let objekData = {
            label: 'Angkatan ' + this.listTahunAngkatanBimbingan[i],
            data: this.rataIPKAngkatanPerTahun.map(row => row.dataA),
            borderColor: 'rgba(220, 53, 69, 1)',
            borderWidth: 3,
            fill: false
          }
          finalData.push(objekData) //push data ipk angkatan per row
        } else if (counter == 1) {
          let objekData = {
            label: 'Angkatan ' + this.listTahunAngkatanBimbingan[i],
            data: this.rataIPKAngkatanPerTahun.map(row => row.dataB),
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 3,
            fill: false
          }
          finalData.push(objekData)
        } else if (counter == 2) {
          let objekData = {
            label: 'Angkatan ' + this.listTahunAngkatanBimbingan[i],
            data: this.rataIPKAngkatanPerTahun.map(row => row.dataC),
            borderColor: 'rgba(220, 53, 69, 1)',
            borderWidth: 3,
            fill: false
          }
          finalData.push(objekData) //push data ipk angkatan per row
        }
        counter += 1
      }
      let objekData = {
        label: "Rata-rata angkatan",
        data: this.rataIPKAngkatanPerTahun.map(row => row.dataRata),
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 3,
        fill: true
      }

      finalData.push(objekData) //push data rata-rata 

      const canvas = this.$refs.myChart;
      const ctx = canvas.getContext('2d');

      new Chart(ctx,
        {
          type: 'line',
          data: {
            labels: this.rataIPKAngkatanPerTahun.map(row => row.tahunChart),
            datasets: finalData
          },
          options: {
            responsive: true,
            showTooltips: true,
            plugins: {
              tooltip: {
                callbacks: {
                  footer: (tooltipItems) => {
                    //cek apakah semua ipk angkatan ada yang null 
                    let jumlahTahunAngkatan = this.listTahunAngkatanBimbingan.length
                    let tahunAngkatanBimbingan = this.listTahunAngkatanBimbingan
                    let tempJumlahTahunAngkatan = 0
                    let tempAngkatan = []

                    tooltipItems.forEach(function (tooltipItem) {
                      // mengecek jika bukan label "Rata-rata angkatan"
                      if (!tooltipItem.dataset.label.toLowerCase().includes("rata-rata")) {
                        let tempTahun = (tooltipItem.dataset.label).match(/\d+/)[0] //misal 2015
                        if (tahunAngkatanBimbingan.includes(tempTahun)) {
                          tempJumlahTahunAngkatan += 1
                          tempAngkatan.push(tempTahun)
                        }
                      }

                    });

                    // cek apakah jumlah tahun pada satu garis y sama dengan this.listTahunAngkatanBimbingan
                    let tempString = ""
                    if (tempJumlahTahunAngkatan.length == jumlahTahunAngkatan) { // jika sama 
                      tempString = "Rata-rata tersebut merupakan rata-rata dari " + this.labelRataChart()
                    } else { // jika tidak sama
                      tempString = "Rata-rata tersebut merupakan rata-rata dari angkatan " + tempAngkatan.join(', ').replace(/,([^,]*)$/, ' dan$1');
                    }

                    return tempString;
                  },
                }
              },
              legend: {
                position: 'top',
              },
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
          }
        }
      );
    },
    labelRataChart() {
      // Menggabungkan elemen-elemen list menjadi string dengan koma dan "dan"
      const kalimat = "Rata-rata angkatan " + this.listTahunAngkatanBimbingan.join(', ').replace(/,([^,]*)$/, ' dan$1');
      return kalimat
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
        // console.log("patokan"+ patokan);
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
    // Buat fungsi debounce untuk memanggil metode pencarian setelah waktu tunda tertentu
    cariCatatanPerwalianDosen: debounce(async function () {
      if (this.inputanCariCatatanPerwalianDosen != '') {
        await axios
          .get(process.env.VUE_APP_API_OPERASIONAL + `/searchCatatanPerwalianDosen/`, {
            params: {
              kode_dosen: this.kodeDosen,
              inputan: this.inputanCariCatatanPerwalianDosen
            },
          }).catch((error) => console.log(error.toJSON()))
          .then((response) => {
            if (response != undefined) {
              if (response.data.error === false) {
                this.hasilPencarianCatatanPerwalianDosen = response.data.response.list_catatan_perwalian_dosen;
                this.togglePencarianCatatanPerwalianDosen = true
              }
            } else {
              this.hasilPencarianCatatanPerwalianDosen = ["kosongError"]
              this.togglePencarianCatatanPerwalianDosen = true
            }
          })
      } else {
        this.hasilPencarianCatatanPerwalianDosen = []
      }
    }, 500)
    ,
    cariCatatanDosen: debounce(async function () {
      if (this.inputanCariCatatanDosen != '') {
        await axios
          .get(process.env.VUE_APP_API_OPERASIONAL + `/searchCatatanDosen/`, {
            params: {
              kode_dosen: this.kodeDosen,
              inputan: this.inputanCariCatatanDosen
            },
          }).catch((error) => console.log(error.toJSON()))
          .then((response) => {
            if (response != undefined) {
              if (response.data.error === false) {
                this.hasilPencarianCatatanDosen = response.data.response.list_catatan_dosen;
                this.togglePencarianCatatanDosen = true
              }
            } else {
              this.hasilPencarianCatatanDosen = ["kosongError"]
              this.togglePencarianCatatanDosen = true
            }
          })
      } else {
        this.hasilPencarianCatatanDosen = []
      }
    }, 500)
    ,
    cariMahasiswa: debounce(async function () {
      if (this.inputanCariMahasiswa != '') {
        await axios
          .get(process.env.VUE_APP_API_DATAWAREHOUSE + `/searchMahasiswa/`, {
            params: {
              kode_dosen: this.kodeDosen,
              inputan: this.inputanCariMahasiswa
            },
          }).catch((error) => console.log(error.toJSON()))
          .then((response) => {
            if (response != undefined) {
              if (response.data.error === false) {
                this.hasilPencarianMahasiswa = response.data.response.list_mahasiswa;
                this.togglePencarianMahasiswa = true
              }
            } else {
              this.hasilPencarianMahasiswa = ["kosongError"]
              this.togglePencarianMahasiswa = true
            }
          })
      } else {
        this.hasilPencarianMahasiswa = []
      }
      // console.log(this.hasilPencarianMahasiswa);
    }, 500)
    ,
    convertToWIB(waktu) {
      const [jam, menit] = waktu.split(':');
      return `${jam}:${menit} WIB`;
    },
    convertTimestamp(timestamp) {
      const date = new Date(timestamp);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('id-ID', options);
      return formattedDate;
    },
    ubahToggle() {
      this.togglePencarianCatatanPerwalianDosen = false
      this.togglePencarianCatatanDosen = false
      this.togglePencarianMahasiswa = false
    },
    logoutDosen() {
      localStorage.clear();
      this.$store.commit("setAksesLogin", false)
      this.$router.push("/login")
    }
  },
};
</script>


<style scoped src="../../public/frontend/styling/beranda.css"></style>