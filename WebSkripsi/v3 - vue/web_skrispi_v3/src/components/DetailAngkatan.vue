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
        <div class="row align-items-center ml-0 stickyNavbar" id="navbar">
            <div id="navbar1" class="col-lg-8 mt-lg-0 col-sm-12 mt-sm-3">
                <div class="d-flex">
                    <div class="ml-3" id="iconBeranda">
                        <router-link to="/">
                            <span class="material-symbols-outlined" style="color: #3c2a21"> home </span>
                        </router-link>
                    </div>

                    <div id="judulWeb" class="mb-0">
                        <p class="ml-2">Program Studi Informatika UKDW</p>
                    </div>
                </div>
            </div>

            <div id="navbar2" class="col-lg-4 col-sm-12">
                <div id="idPengguna" class="d-flex justify-content-end col-12">
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
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1" value="pilihan1" v-model="this.opsiUrutanItemDetailAngkatan"
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
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1" value="pilihan2" v-model="this.opsiUrutanItemDetailAngkatan"
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
                    <div id="bagianCatatan">
                        <div class="mt-5 d-flex">
                            <div class="col-sm-9 col-md-9 p-0">
                                <p id="judulPerBagian">Catatan Perwalian Grup Angkatan</p>
                            </div>
                            <div class="col-sm-3 col-md-3 d-flex justify-content-end align-items-center">
                                <router-link :to="{ name: 'TambahCatatanAngkatan', params: { id: this.$route.params.id } }"
                                    id="tambahCatatan" class="mt-1">
                                    <span class="material-symbols-outlined mr-2"> add_box </span>
                                </router-link>

                                <router-link :to="{ name: 'TambahCatatanAngkatan', params: { id: this.$route.params.id } }"
                                    id="tambahCatatan" class="judulTambahCatatan">
                                    Tambah Catatan Perwalian Grup Angkatan
                                </router-link>
                            </div>
                        </div>
                        <div class="mt-4 ml-3">
                            <div>
                                <div v-if="this.listCatatanGrupAngkatan.length > 0" class="d-flex flex-row">
                                    <div v-for="catatan in this.listCatatanGrupAngkatan" :key="catatan.idCatatan"
                                        id="itemCatatan" class="col-lg-3 mb-lg-4 col-md-6 mb-md-4 col-sm-12 mb-sm-4">
                                        <div id="judulCatatan" class="px-0 pt-2">
                                            <p>{{ catatan.judul }}</p>
                                            <p>{{ catatan.waktu }}</p>
                                            <p class="text-justify">
                                                {{ limitAgenda(catatan.agendaPerwalian) }}
                                                <span>
                                                    <router-link :to="`/edit-catatan-grup-angkatan/${catatan.idCatatan}`"
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

                        <div class="col-12 d-flex justify-content-start mt-0 px-0">
                            <div id="lihatSemuaCatatan" class="px-0">
                                <router-link
                                    :to="{ name: 'DaftarCatatanPerwalianAngkatan', params: { id: this.$route.params.id } }">Lihat
                                    semua catatan
                                    perwalian</router-link>
                            </div>
                        </div>
                    </div>
                    
                    <div id="bagianDaftarMahasiswa">
                        <div id="bagianPencarian" class="d-flex ml-3 mt-5">
                            <div class="col-12 m-0 p-0">
                                <div class="row">
                                    <p id="judulPerBagian">Daftar Mahasiswa Perwalian</p>
                                </div>

                                <div id="cariMahasiswaPerwalian" class="row">
                                    <dir class="col-12 my-1 pl-0">
                                        <span class="material-symbols-outlined search"> search </span>
                                        <input id="inputCariCatatanMahasiswa" type="text" placeholder="Cari mahasiswa perwalian"
                                            v-model="inputanCariMahasiswa" />
                                    </dir>
                                </div>

                                <div id="alertPencarian" class="row mt-1">
                                    <p>Ditemukan 8 hasil sesuai kata pencarian</p>
                                </div>

                                <div id="infoMahasiswaBimbingan" class="d-flex flex-row flex-wrap col-12">
                                    <!-- lihat semua mahasiswa -->
                                    <div class="itemInfoMahasiswaBimbingan">
                                    <div class="d-flex align-items-center col-12 semuaMahasiswa selected">
                                        <div class="col-12 p-0">
                                            <p class="px-0 m-0 align-self-center text-left ">Semua Mahasiswa </p>
                                        </div>

                                        <div class="col-1 text-right p-0 d-flex justify-content-center">
                                            <p class="m-0 jumlahMahasiswaBimbingan">43</p>
                                        </div>
                                    </div>
                                </div>

                                    <div class="itemInfoMahasiswaBimbingan">
                                    <div class="d-flex align-items-center col-12 semuaMahasiswa">
                                        <div class="col-12 p-0">
                                            <p class="px-0 m-0 align-self-center text-left">Aktif </p>
                                        </div>

                                        <div class="col-1 text-right p-0 d-flex justify-content-center">
                                            <p class="m-0 jumlahMahasiswaBimbingan">7</p>
                                        </div>
                                    </div>
                                </div>

                                    <div class="itemInfoMahasiswaBimbingan">
                                    <div class="d-flex align-items-center col-12 semuaMahasiswa">
                                        <div class="col-12 p-0">
                                            <p class="px-0 m-0 align-self-center text-left">Dropped Out </p>
                                        </div>

                                        <div class="col-1 text-right p-0 d-flex justify-content-center">
                                            <p class="m-0 jumlahMahasiswaBimbingan">9</p>
                                        </div>
                                    </div>
                                </div>

                                    <div class="itemInfoMahasiswaBimbingan">
                                    <div class="d-flex align-items-center col-12 semuaMahasiswa">
                                        <div class="col-12 p-0">
                                            <p class="px-0 m-0 align-self-center text-left">Lulus</p>
                                        </div>

                                        <div class="col-1 text-right p-0 d-flex justify-content-center">
                                            <p class="m-0 jumlahMahasiswaBimbingan">14</p>
                                        </div>
                                    </div>
                                </div>

                                    <div class="itemInfoMahasiswaBimbingan">
                                    <div class="d-flex align-items-center col-12 semuaMahasiswa">
                                        <div class="col-12 p-0">
                                            <p class="px-0 m-0 align-self-center text-left">Tidak Aktif</p>
                                        </div>

                                        <div class="col-1 text-right p-0 d-flex justify-content-center">
                                            <p class="m-0 jumlahMahasiswaBimbingan">1</p>
                                        </div>
                                    </div>
                                </div>

                                    <div class="itemInfoMahasiswaBimbingan">
                                    <div class="d-flex align-items-center col-12 semuaMahasiswa">
                                        <div class="col-12 p-0">
                                            <p class="px-0 m-0 align-self-center text-left">Undur Diri</p>
                                        </div>

                                        <div class="col-1 text-right p-0 d-flex justify-content-center">
                                            <p class="m-0 jumlahMahasiswaBimbingan">12</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="filterIPKSAC" class="d-flex flex-row  flex-wrap col-12 mb-3">

                                <div class="form-check mr-3 d-flex align-self-center">
                                    <input class="form-check-input" type="checkbox" value="true"  id="checkboxIPK">
                                    <label class="form-check-label" for="checkboxIPK">
                                        IPK di bawah 2
                                    </label>
                                </div>

                                <div class="form-check mr-3 d-flex align-self-center">
                                    <input class="form-check-input" type="checkbox" value="true"  id="checkboxSAC">
                                    <label class="form-check-label" for="checkboxSAC">
                                        SAC di bawah 50%
                                    </label>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div id="grupHasilCari" class="d-flex align-content-start flex-wrap">
                            <div v-for="item in filteredMahasiswa" :key="item" id="itemCariMahasiswa"
                                class="mb-2 d-flex flex-row col-lg-4 col-md-6 pl-0">
                                <div id="fotoMhs" class="d-flex justify-content-center mr-2">
                                    <span class="material-symbols-outlined accCirlcle"> account_circle </span>
                                </div>
                                <div id="dataMahasiswa">
                                    <router-link :to="{ name: 'DetailMahasiswa', params: { id: '71190426' } }">
                                        <p>{{ item.nama }} / {{ item.nim }}</p>
                                    </router-link>
                                    <p>
                                        {{ item.sks }} SKS | IPK {{ item.ipk }} |
                                        <span v-if="item.sac < 50" class="cekalSAC m-0">
                                            <v-tooltip activator="parent" location="bottom" width="400"
                                                content-class="bg-grey-darken-1">Mahasiswa ini memiliki poin keaktifan di bawah
                                                50% dari total
                                                Syarat Poin Keaktifan, dalam 2 tahun perkuliahan
                                            </v-tooltip>
                                            SAC {{ item.sac }}</span>
                                        <span v-else>SAC {{ item.sac }}</span>
                                    </p>

                                    <span v-if="item.isCekal === 'Cekal Biro 1'" class="cekal mr-2">
                                        <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">Cekal
                                            Registrasi Biro 1 </v-tooltip>Cekal Biro 1</span>
                                    <span v-else-if="item.isCekal === 'Cekal Perpustakaan'" class="cekal mr-2">
                                        <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">Cekal
                                            Perpustakaan </v-tooltip>Cekal Perpustakaan</span>
                                    <span v-else></span>

                                    <p class="statusAktif">
                                        {{ item.status }}
                                    </p>
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
import BreadcrumbModule from "./BreadcrumbModule.vue";
import Mahasiswa from "@/myClass/mahasiswa.js";

export default {
    name: "DetailAngkatan",
    components: {
        BreadcrumbModule,
    },
    data() {
        return {
            filterMahasiswa: "Semua Mahasiswa",
            inputanCariMahasiswa: "",
            listCatatanGrupAngkatan: [],
            listMahasiswa: [],
            listDefaultMahasiswa: [],
            drawer : false,
            isOn : false,
            opsiUrutanItemDetailAngkatan : 'pilihan1',
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
            pesanSnackBar : "",
        };
    },
    methods: {
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
        initData() {
            const payload = {
                tipe: "grup-angkatan",
                tahunAngkatan: this.$route.params.id,
            };
            this.listCatatanGrupAngkatan = this.$store.getters.getListAngkatan(payload).slice(-3).reverse();
            this.listDefaultMahasiswa = this.$store.getters.getListMahasiswa
            this.listMahasiswa = this.$store.getters.getListMahasiswa
        },
        cariMahasiswa(nama) {
            // filter list berdasarkan nama mahasiswa
            let filteredMahasiswa = this.listDefaultMahasiswa.filter(item => {
                return item.nama.toLowerCase().includes(nama.toLowerCase());
            });

            if (filteredMahasiswa.length > 0) {
                return filteredMahasiswa
            }
        },
        showPopUpPreferensi() {
            this.isOn = true;
        },
        batal() {
            this.isOn = false;
        },
        simpan(loadValue){
            console.log(this.opsiUrutanItemDetailAngkatan);
            if (this.opsiUrutanItemDetailAngkatan == "pilihan1") {
                this.isOn = false;
                /*mulai atur urutan berdasarkan pilihan pengguna*/
                this.items[0].data.forEach(dataPosisi => {
                    const element = document.getElementById(dataPosisi.id);
                    element.style.order = dataPosisi.pos;
                });

                this.pesanSnackBar = "Berhasil memperbarui urutan detail angkatan"
                this.snackbar()

            } else if (this.opsiUrutanItemDetailAngkatan == "pilihan2") {
                this.isOn = false;
                /*mulai atur urutan berdasarkan pilihan pengguna*/
                this.items[1].data.forEach(dataPosisi => {
                    const element = document.getElementById(dataPosisi.id);
                    element.style.order = dataPosisi.pos;
                });

                this.pesanSnackBar = "Berhasil memperbarui urutan detail angkatan"
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
    created() {
        this.scrollTop();
        this.initData();
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
    },
    watch: {
        inputanCariMahasiswa: {
            handler: function (baru) {
                this.listMahasiswa = this.cariMahasiswa(baru)

            }
        }
    },
    computed: {
        filteredMahasiswa() {
            if (this.filterMahasiswa === "Semua Mahasiswa" || !this.filterMahasiswa) {
                return this.listMahasiswa;
            } else {
                var listMahasiswaBaru = [];
                for (var i = 0; i < this.listMahasiswa.length; i++) {
                    if (this.listMahasiswa[i].status === this.filterMahasiswa) {
                        listMahasiswaBaru.push(this.listMahasiswa[i]);
                    }
                }
                return listMahasiswaBaru;
            }
        },
    },
};
</script>

<style scoped src="../../public/frontend/styling/detailAngkatan.css"></style>
