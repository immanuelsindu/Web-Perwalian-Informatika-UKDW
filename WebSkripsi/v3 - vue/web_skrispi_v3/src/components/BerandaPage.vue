
<template>
    <div id="body">

        <head>
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
                <div class="d-flex justify-content-end col-12">
                    <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center mr-3" id="labelNamaDosen">
                            <p class="m-0 text-center">
                                <v-icon class="mr-2 " size="small">
                                    mdi-account
                                </v-icon>
                            </p>
                            <p id="infoNamaDosen" class="m-0">
                                Nama Dosen
                            </p>
                        </div>

                        <div class="d-flex align-items-center">
                            <v-btn class="dropDownDosen" color="#E5E5CB" flat active theme="light" to='/login'>
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
                                    <v-list-item link title="Catatan Dosen"
                                        @click="this.scrollTo('catatan-dosen')"></v-list-item>
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
                <div class="row">
                    <div class="col-md-11 col-sm-9 col-8">
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
                        <div id="overlay" v-if="isOn" class="d-flex justify-content-center align-items-center">
                            <div id="windowPreferensi">
                                <div id="contentPreferensi" class="p-4">
                                    <p class="text-center">Pilih Urutan Item Beranda</p>


                                    <div class="row mb-3">
                                        <div class="col-8 pr-0">
                                            <ul class="pl-3 ulNoType mb-0">
                                                <li class="">
                                                    <ol class="pl-4">
                                                        <li>Catatan Perwalian Dosen</li>
                                                        <li>Catatan Dosen</li>
                                                        <li>Daftar Grup Perwalian</li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-4 px-0 d-flex justify-content-center align-items-center">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1" value="pilihan1" v-model="opsiUrutanItemBeranda"
                                                :checked="opsiUrutanItemBeranda === 'pilihan1'">
                                        </div>
                                    </div>


                                    <div class="row mb-3">
                                        <div class="col-8">
                                            <ul class="pl-3 ulNoType mb-0">
                                                <li class="">
                                                    <ol class="pl-4">
                                                        <li>Daftar Grup Perwalian</li>
                                                        <li>Catatan Perwalian Dosen</li>
                                                        <li>Catatan Dosen</li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-4 px-0 d-flex justify-content-center align-items-center">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1" value="pilihan2" v-model="opsiUrutanItemBeranda"
                                                :checked="opsiUrutanItemBeranda === 'pilihan2'">
                                        </div>
                                    </div>


                                    <div class="row mt-4">
                                        <div class="col-4 px-0 d-flex justify-content-center">
                                            <button class="btn batal" @click="batal()">Batal</button>
                                        </div>
                                        <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                                            <button class="btn simpan" @click="simpan(false)">Simpan</button>
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
                        <p>Nama Dosen</p>
                        <p class="">email.dosen@ti.ukdw.ac.id</p>
                        <div class="garis mt-3 text-muted"></div>

                        <div class="d-flex flex-column">
                            <div class="col-12 d-flex justify-content-center mt-3 mb-2 p-0">
                                <p class="m-0">Rincian jumlah mahasiswa perwalian</p>
                            </div>
                            <div class="col-12 p-0">
                                <div v-for="index in 2" :key="index"
                                    class="col-11 d-flex justify-content-center flex-wrap px-0 mb-2 mx-auto">

                                    <div id="dataAngkatanBimbingan"
                                        class="col-11 d-flex flex-row justify-content-center px-0"
                                        @click="showinfoAngkatan(index)">
                                        <div class="col-6 pr-1 pl-0 d-flex align-items-center">
                                            <p class="">Angkatan {{ tahunAngkatan[index - 1] }}</p>
                                        </div>
                                        <div class="col-2 px-0 d-flex align-items-center">
                                            <p class="d-inline-block m-0 jumlahMahasiswaBimbingan">20</p>
                                        </div>
                                        <div id="detailMahasiswaBimbingan"
                                            class="col-1 px-0 ml-3 d-flex align-items-center d-flex justify-content-center">
                                            <span class="material-symbols-outlined dropdown">
                                                arrow_drop_down
                                            </span>
                                        </div>
                                    </div>

                                    <transition>
                                        <div v-if="showInfoAngkatan[index - 1]"
                                            class="col-12 d-flex justify-content-center">
                                            <div id="infoMahasiswaBimbingan" class="col-10 py-3 mt-1">
                                                <ul class="mb-2">
                                                    <li class="itemInfoMahasiswaBimbingan">
                                                        <div class="d-flex">
                                                            <p class="col-8 px-0 m-0 ml-1 align-self-center text-left ">
                                                                Aktif</p>
                                                            <div class="col-4 text-right p-0 d-flex justify-content-center">
                                                                <p class="m-0 jumlahMahasiswaBimbingan">16</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <ul class="mb-2">
                                                    <li class="itemInfoMahasiswaBimbingan">
                                                        <div class="d-flex">
                                                            <p class="col-8 px-0 m-0 ml-1 align-self-center text-left ">
                                                                Lulus</p>
                                                            <div class="col-4 text-right p-0 d-flex justify-content-center">
                                                                <p class="m-0 jumlahMahasiswaBimbingan">2</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <ul class="mb-2">
                                                    <li class="itemInfoMahasiswaBimbingan">
                                                        <div class="d-flex">
                                                            <p class="col-8 px-0 m-0 ml-1 align-self-center text-left ">Cuti
                                                                Studi</p>
                                                            <div class="col-4 text-right p-0 d-flex justify-content-center">
                                                                <p class="m-0 jumlahMahasiswaBimbingan">1</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <ul class="mb-2">
                                                    <li class="itemInfoMahasiswaBimbingan">
                                                        <div class="d-flex">
                                                            <p class="col-8 px-0 m-0 ml-1 align-self-center text-left ">
                                                                Droopped Out</p>
                                                            <div class="col-4 text-right p-0 d-flex justify-content-center">
                                                                <p class="m-0 jumlahMahasiswaBimbingan">1</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <ul>
                                                    <li class="itemInfoMahasiswaBimbingan">
                                                        <div class="d-flex d-flex justify-content-center">

                                                            <p class="m-0 align-middle font-weight-bold">
                                                                <router-link
                                                                    :to="{ name: 'DetailAngkatan', params: { id: '2016' } }">
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

                                <div class=" d-flex justify-content-center">
                                    <div class="row mb-lg-3" id="totalMahasiswaPerwalian">
                                        <div class="col-8 px-0">
                                            <p>Total Mahasiswa Perwalian</p>
                                        </div>
                                        <div
                                            class="col-3 text-center px-0 d-flex align-items-center justify-content-center">
                                            <p class="jumlahMahasiswaBimbingan">40</p>
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

                        <div v-if="hasilPencarianCatatanPerwalianDosen.length > 0" id="kolomHasilPencarian" class="col-10">
                            <div class="d-flex flex-wrap col-12 py-2 px-1">
                                <div v-for="catatan in hasilPencarianCatatanPerwalianDosen" :key="catatan.idCatatan"
                                    class="col-6 my-3 px-0">
                                    <div id="itemHasilPencarian" class="p-2">
                                        <span v-bind:class="{
                                            garisMahasiswa: catatan.tipe == 'mahasiswa',
                                            garisOrangTuaWali: catatan.tipe == 'orang-tua-wali',
                                            garisOrangTuaWaliMahasiswa: catatan.tipe == 'orang-tua-wali-dan-mahasiswa',
                                            garisGrupAngkatan: catatan.tipe == 'grup-angkatan',
                                        }"></span>

                                        <p class="m-0" id="judulItemHasilPencarian">
                                            <b>
                                                {{ catatan.judul }}
                                            </b>
                                        </p>

                                        <p class="m-0">{{ catatan.waktu }} | {{ catatan.waktuAwal }} - {{ catatan.waktuAkhir
                                        }}
                                        </p>

                                        <p class="m-0" v-if="catatan.tipe != 'grup-angkatan'">
                                            <b>
                                                {{ catatan.nama }} / {{ catatan.nim }}
                                            </b>
                                        </p>
                                        <p class="m-0 text-justify">
                                            {{ limitAgenda(catatan.agendaPerwalian) }}

                                            <router-link v-if="catatan.tipe == 'mahasiswa'"
                                                :to="{ name: 'EditCatatanMahasiswa', params: { id: catatan.idCatatan } }"
                                                id="lihatSelengkapnyaHasilPencarian">
                                                <u>
                                                    Lihat selengkapnya
                                                </u>
                                            </router-link>

                                            <router-link v-else-if="catatan.tipe == 'orang-tua-wali'"
                                                :to="{ name: 'EditCatatanOrangTuaWali', params: { id: catatan.idCatatan } }"
                                                id="lihatSelengkapnyaHasilPencarian">
                                                <u>
                                                    Lihat selengkapnya
                                                </u>
                                            </router-link>

                                            <router-link v-else-if="catatan.tipe == 'orang-tua-wali-dan-mahasiswa'"
                                                :to="{ name: 'EditCatatanOrangTuaWaliDanMahasiswa', params: { id: catatan.idCatatan } }"
                                                id="lihatSelengkapnyaHasilPencarian">
                                                <u>
                                                    Lihat selengkapnya
                                                </u>
                                            </router-link>

                                            <router-link v-else
                                                :to="{ name: 'EditCatatanGrupAngkatan', params: { id: catatan.idCatatan } }"
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

                        <div class="col-md-7 col-sm-12 px-0">
                            <div id="judulCariCatatanPerwalian" class="col-12 pl-0">
                                <p class="mb-0">Catatan Perwalian Dosen</p>
                            </div>
                            <div class="col-12 mb-1 mt-xl-3 pl-0">
                                <span class="material-symbols-outlined search"> search </span>
                                <input id="inputCariCatatanPerwalian" type="text"
                                    placeholder="Cari catatan perwalian semua angkatan"
                                    @click="scrollPage('catatan-perwalian-dosen')"
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
                                <router-link :to="{ name: 'TambahCatatanPerwalian' }" id="tambahCatatan"
                                    class="align-middle">
                                    <span class="material-symbols-outlined mr-2">
                                        add_box
                                    </span>
                                </router-link>

                                <router-link :to="{ name: 'TambahCatatanPerwalian' }" id="tambahCatatan"
                                    class="judulTambahCatatan">
                                    Tambah Catatan Perwalian
                                </router-link>
                            </div>

                        </div>
                    </div>

                    <div id="listCatatanPerwalian" class="d-flex align-content-start flex-wrap mt-1 pb-3">
                        <div v-for="catatan in this.$store.getters.getListCatatanPerwalianDosen.slice(-3).reverse()"
                            :key="catatan.idCatatan" id="itemCatatan"
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
                                    <h5 class="card-title text-center">{{ catatan.judul }}</h5>
                                    <!-- waktu catatan -->
                                    <h6 class="card-subtitle mb-2 text-center">{{ catatan.waktu }}</h6>
                                    <!-- nama mahasiswa -->
                                    <h6 v-if="catatan.tipe != 'grup-angkatan'"
                                        class="card-subtitle mt-4 mb-1 font-weight-bold text-left">{{ catatan.nama }} /
                                        {{ catatan.nim }}</h6>
                                    <!-- lihat selengkapnya per kategori catatan -->
                                    <p v-if="catatan.tipe != 'grup-angkatan'" class="card-text text-justify">
                                        {{ limitAgenda(catatan.agendaPerwalian) }}
                                        <span>
                                            <router-link v-if="catatan.tipe == 'mahasiswa'"
                                                :to="`edit-catatan-mahasiswa/${catatan.idCatatan}`"
                                                class="font-weight-bold"><u>Lihat selengkapnya</u></router-link>
                                            <router-link v-else-if="catatan.tipe == 'orang-tua-wali'"
                                                :to="`edit-catatan-orang-tua-wali/${catatan.idCatatan}`"
                                                class="font-weight-bold"><u>Lihat selengkapnya</u></router-link>
                                            <router-link v-else-if="catatan.tipe == 'orang-tua-wali-dan-mahasiswa'"
                                                :to="`edit-catatan-orang-tua-wali-dan-mahasiswa/${catatan.idCatatan}`"
                                                class="font-weight-bold"><u>Lihat selengkapnya</u></router-link>
                                        </span>
                                    </p>
                                    <p v-else id="catatanCatatanGrupAngkatan" class="card-text text-justify">
                                        {{ limitAgenda(catatan.agendaPerwalian) }}
                                        <span>
                                            <router-link :to="`edit-catatan-grup-angkatan/${catatan.idCatatan}`"
                                                class="font-weight-bold"><u>Lihat selengkapnya</u></router-link>
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div class="col-12 d-flex justify-content-start mt-3 px-0">
                            <div id="lihatSemuaCatatan" class="px-0">
                                <!-- daftar-catatan-perwalian-dosen -->
                                <router-link :to="{ name: 'DaftarCatatanPerwalianDosen' }">Lihat semua catatan
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
                        <div v-if="hasilPencarianCatatanDosen.length > 0" id="kolomHasilPencarian" class="col-10">
                            <div class="d-flex flex-wrap col-12 py-2 px-1">
                                <div v-for="catatan in hasilPencarianCatatanDosen" :key="catatan.idCatatan"
                                    class="col-6 my-3 px-0">
                                    <div id="itemHasilPencarian" class="p-2">
                                        <span v-bind:class="{
                                            garisMahasiswa: catatan.tipe == 'refleksi-dosen',
                                            garisOrangTuaWali: catatan.tipe == 'khusus',

                                        }"></span>

                                        <p class="m-0" id="judulItemHasilPencarian">
                                            <b>
                                                {{ catatan.judul }}
                                            </b>
                                        </p>

                                        <p class="m-0">{{ catatan.waktu }} | {{ catatan.waktuAwal }} - {{ catatan.waktuAkhir
                                        }}
                                        </p>

                                        <p class="m-0" v-if="catatan.tipe == 'khusus'">
                                            <b>
                                                {{ catatan.nama }} / {{ catatan.nim }}
                                            </b>
                                        </p>
                                        <p class="m-0 text-justify">
                                            {{ limitAgenda(catatan.agendaPerwalian) }}

                                            <router-link v-if="catatan.tipe == 'mahasiswa'"
                                                :to="{ name: 'EditCatatanMahasiswa', params: { id: catatan.idCatatan } }"
                                                id="lihatSelengkapnyaHasilPencarian">
                                                <u>
                                                    Lihat selengkapnya
                                                </u>
                                            </router-link>

                                            <router-link v-else-if="catatan.tipe == 'orang-tua-wali'"
                                                :to="{ name: 'EditCatatanOrangTuaWali', params: { id: catatan.idCatatan } }"
                                                id="lihatSelengkapnyaHasilPencarian">
                                                <u>
                                                    Lihat selengkapnya
                                                </u>
                                            </router-link>

                                            <router-link v-else-if="catatan.tipe == 'orang-tua-wali-dan-mahasiswa'"
                                                :to="{ name: 'EditCatatanOrangTuaWaliDanMahasiswa', params: { id: catatan.idCatatan } }"
                                                id="lihatSelengkapnyaHasilPencarian">
                                                <u>
                                                    Lihat selengkapnya
                                                </u>
                                            </router-link>

                                            <router-link v-else
                                                :to="{ name: 'EditCatatanGrupAngkatan', params: { id: catatan.idCatatan } }"
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


                        <div class="col-md-7 col-sm-12 px-0">
                            <div id="judulCariCatatanPerwalian" class="d-flex col-12 pl-0">
                                <p class="mb-0">Catatan Dosen</p>

                                <div>
                                    <v-icon class="ml-2" size="small" color="grey-darken-1">
                                        mdi-information-outline
                                    </v-icon>
                                    <v-tooltip activator="parent" width="400"
                                        content-class="bg-grey-darken-1" location="bottom">Catatan Dosen merupakan catatan yang digunakan untuk Dosen Wali sendiri. Catatan Dosen Tipe 'Refleksi Dosen' sebagai pengingat / catatan untuk Dosen Wali. Sedangkan Catatan Dosen Tipe 'Khusus' sebagai catatan diluar semua tipe di Catatan Perwalian Dosen dan Catatan Dosen Tipe 'Refleksi Dosen' 
                                    </v-tooltip>
                                </div>
                                
                            </div>
                            <div class="col-12 mb-1 mt-xl-3 pl-0">
                                <span class="material-symbols-outlined search"> search </span>
                                <input id="inputCariCatatanPerwalian" type="text" placeholder="Cari catatan dosen"
                                    @click="scrollPage('catatan-dosen')" v-model="inputanCariCatatanDosen">
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
                                <a id="tambahCatatan" class="align-middle" href="./tambahCatatan.html">
                                    <span class="material-symbols-outlined mr-2">
                                        add_box
                                    </span>
                                </a>
                                <router-link :to="{ name: 'TambahCatatanDosen' }" id="tambahCatatan"
                                    class="judulTambahCatatan">
                                    Tambah Catatan Dosen
                                </router-link>
                            </div>

                        </div>
                    </div>

                    <div id="listCatatanPerwalian" class="d-flex align-content-start flex-wrap mt-1 pb-3">

                        <div v-for="catatan in this.$store.getters.getListCatatanDosen.slice(-3).reverse()" :key="catatan"
                            id="itemCatatan"
                            class="d-flex justify-content-center col-lg-3 col-md-4 mr-lg-3 mr-md-0 col-sm-6 mb-sm-4 px-sm-0">
                            <div id="itemCatatanPerwalian" class="card ">
                                <div class="card-body">

                                    <span v-bind:class="{
                                        garisMahasiswa: catatan.tipe == 'refleksi-dosen',
                                        garisOrangTuaWali: catatan.tipe == 'khusus',
                                    }"></span>

                                    <h5 class="card-title text-center">{{ catatan.judul }}</h5>
                                    <h6 class="card-subtitle mb-2 text-center">{{ catatan.waktu }}</h6>
                                    <p class="card-text mb-3 mt-4 text-justify">{{ limitAgenda(catatan.agendaPerwalian) }}
                                        <span v-if="catatan.tipe == 'refleksi-dosen'"><router-link
                                                :to="{ name: 'EditCatatanRefleksiDosen', params: { id: catatan.idCatatan } }"
                                                class="font-weight-bold"><u>Lihat selengkapnya</u></router-link></span>
                                        <span v-else><router-link
                                                :to="{ name: 'EditCatatanKhusus', params: { id: catatan.idCatatan } }"
                                                class="font-weight-bold"><u>Lihat selengkapnya</u></router-link></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 d-flex justify-content-start mt-3 px-0">
                            <div id="lihatSemuaCatatan" class="px-0">
                                <!-- daftar-catatan-dosen -->
                                <router-link :to="{ name: 'DaftarCatatanDosen' }">
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

                        <div v-if="hasilPencarianMahasiswa.length > 0" id="kolomHasilPencarian" class="col-8">
                            <div class="d-flex flex-wrap col-12 py-2 px-1">
                                <div v-for="catatan in hasilPencarianMahasiswa" :key="catatan.idCatatan"
                                    id="itemHasilPencarian" class="col-6 my-0 px-0">
                                    <div class="p-2">
                                        <router-link :to="{ name: 'DetailMahasiswa', params: { id: '71190426' } }"
                                            class="m-0" id="namaMahasiswaHasilPencarian">
                                            {{ catatan.nama }} / {{ catatan.nim }}
                                        </router-link>
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
                                @click="scrollPage('grup-angkatan')" v-model="inputanCariMahasiswa">
                        </div>

                    </div>

                    <div id="containerMahasiswaAngkatan" class="row mt-4 d-flex justify-content-center">
                        <div v-for="index in listAngkatanMahasiswa" :key="index" id="mahasiswaAngkatan"
                            class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3 px-0">
                            <p>Mahasiswa Informatika {{ index["tahunAngkatan"] }}</p>
                            <div id="itemNamaMhs">
                                <div v-for="subIndex in index['dataMahasiswa']" :key="subIndex" id="itemMahasiswa"
                                    class="col mb-sm-2">
                                    <div id="iconMahasiswa" class="d-flex justify-content-center">
                                        <span class="material-symbols-outlined align-self-center">
                                            account_circle
                                        </span>
                                    </div>
                                    <div id="infoMahasiswa">
                                        <p>
                                            <router-link :to="{ name: 'DetailMahasiswa', params: { id: '71190426' } }"
                                                class="namaMahasiswa">
                                                {{ subIndex.nama }} / {{ subIndex.nim }}
                                            </router-link>
                                        </p>
                                        <p id="infoIPK">
                                            {{ subIndex.sks }}
                                            -
                                            IPK {{ subIndex.ipk }}
                                            -
                                            <span v-if="subIndex.sac < 50" class="cekalSAC">
                                                <v-tooltip activator="parent" width="400" content-class="bg-grey-darken-1"
                                                    location="bottom">Mahasiswa ini memiliki poin keaktifan di bawah 50%
                                                    dari total Syarat Poin Keaktifan, dalam 2 tahun perkuliahan
                                                </v-tooltip>
                                                SAC {{ subIndex.sac }}
                                            </span>

                                            <span v-else>
                                                SAC {{ subIndex.sac }}
                                            </span>

                                            <span v-if="subIndex.cekal != ''" class="cekalDash">- </span>

                                            <span v-if="subIndex.cekal == 'cekal-biro-2'" class="cekal">

                                                <v-tooltip activator="parent" location="bottom"
                                                    content-class="bg-grey-darken-1">Pinjaman SPP
                                                </v-tooltip>
                                                Biro 2
                                            </span>

                                            <span v-else-if="subIndex.cekal == 'cekal-biro-1'" class="cekal">
                                                <v-tooltip activator="parent" location="bottom"
                                                    content-class="bg-grey-darken-1">Berkas Mahasiswa
                                                </v-tooltip>
                                                Biro 1
                                            </span>

                                            <span v-else-if="subIndex.cekal == 'cekal-perpustakaan'" class="cekal">
                                                <v-tooltip activator="parent" content-class="bg-grey-darken-1"
                                                    location="bottom">Peminjaman Buku
                                                </v-tooltip>
                                                Perpustakaan
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-end mr-4">
                                    <router-link :to="{ name: 'DetailAngkatan', params: { id: index['tahunAngkatan'] } }"
                                        class="lihatSelengkapnya">
                                        Lihat selengkapnya >
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="chartRataRataIPK" class="mt-4">
                        <p>Grafik Rata Rata IPK Angkatan</p>
                        <div id="containerChart">
                            <canvas ref="myChart"></canvas>
                        </div>

                    </div>


                </div>
            </div>

            <div class="d-flex justify-content-center">
                <div id="snackbar">
                    <p class="mx-auto mb-0">Perubahan berhasil disimpan</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

import $ from 'jquery';
window.$ = window.jQuery = $;

import BreadcrumbModule from './BreadcrumbModule.vue';

export default {
    name: "BerandaPage",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            angkatan: 2015,
            isOn: false, //default false
            inputanCariCatatanPerwalianDosen: "", //default kosong
            inputanCariCatatanDosen: "",
            inputanCariMahasiswa: "",
            opsiUrutanItemBeranda: "pilihan1",
            listAngkatanMahasiswa: [],
            counter: [0, 0],
            showInfoAngkatan: [false, false,],
            tahunAngkatan: [2016, 2017],
            test: ["Sindu0", "Sindu1"],
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
            data: [
                { year: 2016, dataA: 2.12, dataB: null, dataC: 2.12 },
                { year: 2017, dataA: 2.25, dataB: 3.2, dataC:  2.72},
                { year: 2018, dataA: 2.86, dataB: 3.1, dataC:  2.98},
                { year: 2019, dataA: 3.3, dataB: 2.7, dataC: 3},
                { year: 2020, dataA: 2.8, dataB: 2.5, dataC:  2.65},
                { year: 2021, dataA: 2.1, dataB: 2.2, dataC:  2.15},
            ],
            drawer : false

        }
    },
    created() {
        this.scrollTop()
        this.initData()
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

        //line chart IPK
        const script5 = document.createElement("script");
        script5.type = "module";
        script5.src = "../../public/frontend/js/lineChart3.js"
        document.body.appendChild(script5);

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
        this.createChart2();

        //unutk untuk atur ulang urutan opsi beranda
        this.simpan(true)
    },
    methods: {
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
        toWhere(tipe, link) {
            if (tipe == "mahasiswa") {
                this.$router.push(`edit-catatan-mahasiswa/${link}`)
            }
        },
        simpan(loadValue) {
            if (this.opsiUrutanItemBeranda == "pilihan1") {
                this.isOn = false;
                /*mulai atur urutan berdasarkan pilihan pengguna*/
                this.items[0].data.forEach(dataPosisi => {
                    const element = document.getElementById(dataPosisi.id);
                    element.style.order = dataPosisi.pos;
                });
                this.isChecked1 = true;
                this.isChecked2 = false;
            } else if (this.opsiUrutanItemBeranda == "pilihan2") {
                this.isOn = false;
                /*mulai atur urutan berdasarkan pilihan pengguna*/
                this.items[1].data.forEach(dataPosisi => {
                    const element = document.getElementById(dataPosisi.id);
                    element.style.order = dataPosisi.pos;
                });
                this.isChecked1 = false;
                this.isChecked2 = true;
            }

            if (!loadValue) {
                var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                }, 3000);

                //simpan opsiUrutanItemBeranda
                this.$store.commit('setOpsiUrutanItemBeranda', this.opsiUrutanItemBeranda)

            }
        },
        reorder() {
            this.items.forEach(item => {
                const element = document.getElementById(item.id);
                element.style.order = item.pos;
            });
        },
        showPopUpPreferensi() {
            this.isOn = true;
        },
        batal() {
            this.isOn = false;
        },
        showinfoAngkatan(index) {
            // blok kode 1
            if (this.counter[index - 1] != 1) {
                const scrollable = document.querySelector('.mySticky');
                const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
                scrollable.scrollTo({
                    top: scrollHeight,
                    behavior: 'smooth'
                });

                // blok kode 2 
                this.showInfoAngkatan[index - 1] = !this.showInfoAngkatan[index - 1]

                this.counter[index - 1] += 1;
            } else {
                const scrollable = document.querySelector('.mySticky');
                scrollable.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                this.showInfoAngkatan[index - 1] = !this.showInfoAngkatan[index - 1]
                this.counter[index - 1] = 0;
            }
        },
        createChart2() {
            const canvas = this.$refs.myChart;
            const ctx = canvas.getContext('2d');

            new Chart(ctx,
                {
                    type: 'line',
                    data: {
                        labels: this.data.map(row => row.year),
                        datasets: [
                            {
                                label: 'Angkatan 2016',
                                data: this.data.map(row => row.dataA),
                                borderColor: 'rgba(220, 53, 69, 1)',
                                borderWidth: 3,
                                fill: false
                            },
                            {
                                label: 'Angkatan 2017',
                                data: this.data.map(row => row.dataB),
                                borderColor: 'rgba(0, 123, 255, 1)',
                                borderWidth: 3,
                                fill: false
                            },
                            {
                                label: 'Rata-Rata IPK',
                                data: this.data.map(row => row.dataC),
                                borderColor: 'rgba(255, 193, 7, 1)',
                                borderWidth: 3,
                                fill: true
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        showTooltips: true,
                        plugins: {
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
        limitAgenda(fullString) {
            if (fullString.length > 140) {
                let slicedString = fullString.slice(0, 140);
                return slicedString;
            } else {
                return fullString
            }
        },
        initData() {
            this.listAngkatanMahasiswa = this.$store.getters.getListMahasiswaAngkatan
            this.opsiUrutanItemBeranda = this.$store.getters.getOpsiUrutanItemBeranda
        },
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animasi smooth scrolling
            });
        },
        scrollPage(tipe) {

            // Hitung tinggi halaman
            const pageHeight = document.documentElement.scrollHeight;
            let scrollHeight = ""
            if (this.opsiUrutanItemBeranda == 'pilihan1') {
                if (tipe == "catatan-perwalian-dosen") {
                    // Hitung tinggi scroll yang diinginkan (misal 20% dari tinggi halaman)
                    scrollHeight = pageHeight * 0.045;
                } else if (tipe == "catatan-dosen") {
                    // Hitung tinggi scroll yang diinginkan (misal 20% dari tinggi halaman)
                    scrollHeight = pageHeight * 0.27;
                } else if (tipe == 'grup-angkatan') {
                    scrollHeight = pageHeight * 0.49;
                }
            } else {
                if (tipe == "catatan-perwalian-dosen") {
                    // Hitung tinggi scroll yang diinginkan (misal 20% dari tinggi halaman)
                    scrollHeight = pageHeight * 0.515;
                } else if (tipe == "catatan-dosen") {
                    // Hitung tinggi scroll yang diinginkan (misal 20% dari tinggi halaman)
                    scrollHeight = pageHeight * 0.73;
                } else if (tipe == 'grup-angkatan') {
                    scrollHeight = pageHeight * 0.045;
                }
            }

            // Scroll ke bawah dengan animasi
            window.scrollTo({
                top: scrollHeight,
                behavior: 'smooth'
            });
        },
    },
    computed: {
        getListCatatanDosen() {
            return this.$store.getters.getListCatatanDosen;
        },
        hasilPencarianCatatanPerwalianDosen() {
            const hasil = this.$store.getters.getListCatatanPerwalianDosen

            if (this.inputanCariCatatanPerwalianDosen != "") {
                return hasil.filter(item => {
                    return item.judul.toLowerCase().includes(this.inputanCariCatatanPerwalianDosen.toLowerCase())
                })
            } else {
                return []
            }
        },
        hasilPencarianCatatanDosen() {
            const hasil = this.$store.getters.getListCatatanDosen

            if (this.inputanCariCatatanDosen != "") {
                return hasil.filter(item => {
                    return item.judul.toLowerCase().includes(this.inputanCariCatatanDosen.toLowerCase())
                })
            } else {
                return []
            }
        },
        hasilPencarianMahasiswa() {
            const hasil = this.$store.getters.getListMahasiswa

            if (this.inputanCariMahasiswa != "") {
                return hasil.filter(item => {
                    return item.nama.toLowerCase().includes(this.inputanCariMahasiswa.toLowerCase())
                })
            } else {
                return []
            }
        }
    },

};
</script>


<style scoped src="../../public/frontend/styling/beranda.css"></style>