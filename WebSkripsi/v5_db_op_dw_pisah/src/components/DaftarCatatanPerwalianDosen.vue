<template>
    <div>

        <head>
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
        </head>

        <!-- Navbar -->
        <div class="row align-items-center ml-0 stickyNavbar" id="navbar">
            <div id="navbar1" class="col-lg-8 mt-lg-0 col-sm-12 mt-sm-3">
                <div class="d-flex">
                    <div class="ml-3" id="iconBeranda">
                        <router-link to="/">
                            <span class="material-symbols-outlined" style="color:#3C2A21">
                                home
                            </span>
                        </router-link>
                    </div>

                    <div id="judulWeb">
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

                            <v-btn class="dropDownDosen" color="#E5E5CB" flat active theme="light"
                                @click="this.logoutDosen()">
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

        <!-- Content -->
        <div id="content" class="container-fluid px-0">

            <div class="col-12 mt-4">
                <div class="row">
                    <div class="col-md-10 col-sm-8 pr-0">
                        <nav aria-label="breadcrumb" id="breadcrumb">
                            <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>
                        </nav>
                    </div>
                    <div class="col-md-1 col-sm-3 pl-5 d-flex  justify-content-center">
                        <div class="mr-3">
                            <router-link id="arsipCatatanPerwalian" :to="{ name: 'ArsipPerwalianDosen' }" type="button"
                                class="btn">
                                <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">Lihat
                                    catatan yang diarsipkan
                                </v-tooltip>
                                <span class="material-symbols-outlined viewAgenda">
                                    archive
                                </span>
                            </router-link>
                        </div>

                        <div>
                            <button type="button" @click="showPopUpPreferensi()" class="btn filter">
                                <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">Filter
                                    urutan catatan
                                </v-tooltip>
                                <span class="material-symbols-outlined viewAgenda">
                                    tune
                                </span>
                            </button>
                        </div>
                    </div>
                    <Transition>
                        <div id="overlay" v-if="showPopUpFilter" class="d-flex justify-content-center align-items-center">
                            <div id="windowPreferensi">
                                <div id="contentPreferensi" class="p-4">
                                    <p class="text-center font-weight-bold">Pilih urutan catatan </p>

                                    <div class="row mb-3">
                                        <div class="col-12">
                                            <ol class="pl-0 listFilter">
                                                <li v-for="(items, index) in listSort" :key="index" class="mb-1 pl-2 ">
                                                    <div class="row">
                                                        <div class="col-8">
                                                            {{ items }}
                                                        </div>
                                                        <div
                                                            class="col-4 pl-4 d-flex justify-content-center align-items-center">
                                                            <input class="form-check-input align-self-center" type="radio"
                                                                name="flexRadioDefault" :id="'flexRadioDefault' + index"
                                                                :value="items" v-model="valueSort">
                                                        </div>
                                                    </div>
                                                </li>

                                            </ol>
                                        </div>
                                    </div>


                                    <p class="text-center font-weight-bold">Pilih filter catatan </p>
                                    <div class="row mb-3">
                                        <div class="col-12">
                                            <ol class="pl-0 listFilter tipe">
                                                <li v-for="(items, index) in listFilters" :key="index" class="mb-1 pl-2">
                                                    <div class="row">
                                                        <div class="col-8">
                                                            {{ items }}
                                                        </div>
                                                        <div
                                                            class="col-4 pl-4 d-flex justify-content-center align-items-center">
                                                            <input class="form-check-input align-self-center" type="radio"
                                                                name="flexRadioDefault2" :id="'flexRadioDefault' + index"
                                                                :value="items" v-model="valueFilter">
                                                        </div>
                                                    </div>
                                                </li>

                                            </ol>
                                        </div>
                                    </div>

                                    <!-- bagian tombol simpan batal -->
                                    <div class="row mt-2">
                                        <div class="col-4 px-0 d-flex justify-content-center">
                                            <button class="btn batal" @click="batal()">Batal</button>
                                        </div>
                                        <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                                            <button class="btn simpan filter" @click="simpan()">Simpan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>

            <div id="judulCatatan">
                <p>Daftar Catatan Perwalian Dosen</p>
            </div>

            <div id="cariCatatanPerwalian" class="row mx-auto mt-sm-5">
                <div id="containerCariCatatanPerwalian" class="row justify-content-center">
                    <div class="col-lg-6 col-sm-12 pt-sm-5">
                        <div class="mb-2">
                            <span class="material-symbols-outlined search ">
                                search
                            </span>
                            <input id="inputCariMahasiswa" type="text" placeholder="Cari catatan perwalian"
                                v-model=inputanCariCatatanPerwalianDosen>
                        </div>

                        <div id="alertPencarian">
                            <p>{{ this.pesanError }}</p>
                            <p>
                                <span class="material-symbols-outlined bullet align-middle">
                                    circle
                                </span>
                                <span class="mr-1">Mahasiswa</span>
                                <span class="material-symbols-outlined bullet align-middle">
                                    circle
                                </span>
                                <span class="mr-1"> Orang Tua / Wali</span>
                                <span class="material-symbols-outlined bullet align-middle">
                                    circle
                                </span>
                                <span class="mr-1"> Orang Tua / Wali & Mahasiswa</span>
                                <span class="material-symbols-outlined bullet align-middle">
                                    circle
                                </span>
                                <span class="mr-1"> Grup Angkatan</span>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12 col-sm-12 offset-lg-3 mt-sm-2 d-flex align-items-center">
                        <div>
                            <!-- tambah-catatan-perwalian -->
                            <router-link :to="{ name: 'TambahCatatanPerwalian', params: { canBack: 1 } }" id="tambahCatatan" class="align-middle">
                                <span class="material-symbols-outlined mr-1 pt-1">
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
            </div>

            <!-- daftar catatan perwalian -->
            <div id="cardCatatanPerwalian">
                <div id="containerlistCatatan" class="row mx-sm-5 mt-4 gx-5 d-flex justify-content-start">
                    <!-- jika ada data di pagination -->
                    <div v-if="this.paginatedItems.length > 0" class="d-flex flex-wrap">
                        <div v-for="(catatan, index) in this.paginatedItems" :key="index"
                            class="col-lg-3 col-md-6 d-flex justify-content-center">
                            <div id="itemCatatanPerwalian">

                                <span v-if="catatan.tipe === 'mahasiswa'" id="garisMahasiswa"></span>
                                <span v-else-if="catatan.tipe === 'orang-tua-wali'" id="garisOrangTua"></span>
                                <span v-else-if="catatan.tipe === 'orang-tua-wali-dan-mahasiswa'"
                                    id="garisOrangTuaDanMahasiswa"></span>
                                <span v-else-if="catatan.tipe === 'grup-angkatan'" id="garisOrangTuaMahasiswa"></span>

                                <div class="row">
                                    <div id="infoCatatan" class="col-12">
                                        <div class="d-flex">
                                            <div class="col-11 pl-0">
                                                <p class="judulCatatan">{{ this.limitJudul(catatan.judul) }}</p>
                                            </div>
                                            <div class="col-1 px-0">
                                                <p>
                                                    <span id="iconDelete" class="material-symbols-outlined delete"
                                                        @click="showPopUpHapus(catatan)">
                                                        delete
                                                        <v-tooltip activator="parent" location="bottom"
                                                            content-class="bg-grey-darken-1">Hapus catatan
                                                        </v-tooltip>
                                                    </span>

                                                </p>
                                            </div>
                                        </div>
                                        <p>{{ this.convertTimestamp(catatan.waktu) }}</p>
                                        <p class="m-0">{{ this.convertToWIB(catatan.waktu_awal) }} - {{
                                            this.convertToWIB(catatan.waktu_akhir) }}</p>


                                    </div>
                                </div>

                                <div id="agendaPerwalian">
                                    <p class="m-0 p-0">
                                        <b v-if="catatan.tipe != 'grup-angkatan'">
                                            {{ catatan.nama }} / {{ catatan.nim }}
                                        </b>
                                        <b v-else>
                                            <p class='m-0'>Angkatan {{ catatan.tahun_angkatan }}</p>
                                        </b>

                                    </p>

                                    <div id="containerAgenda">
                                        <p class="m-0">
                                            {{ limitAgenda(catatan.agenda_perwalian) }}
                                            <router-link v-if="catatan.tipe == 'mahasiswa'"
                                                :to="{ name: 'EditCatatanMahasiswa', params: { id: catatan.id_catatan_perwalian_dosen } }">
                                                <b><u>Lihat selengkapnya</u></b>
                                            </router-link>
                                            <router-link v-else-if="catatan.tipe == 'orang-tua-wali'"
                                                :to="{ name: 'EditCatatanOrangTuaWali', params: { id: catatan.id_catatan_perwalian_dosen } }">
                                                <b><u>Lihat selengkapnya</u></b>
                                            </router-link>
                                            <router-link v-else-if="catatan.tipe == 'orang-tua-wali-dan-mahasiswa'"
                                                :to="{ name: 'EditCatatanOrangTuaWaliDanMahasiswa', params: { id: catatan.id_catatan_perwalian_dosen } }">
                                                <b><u>Lihat selengkapnya</u></b>
                                            </router-link>
                                            <router-link v-else
                                                :to="{ name: 'EditCatatanGrupAngkatan', params: { id: catatan.id_catatan_perwalian_dosen } }">
                                                <b><u>Lihat selengkapnya</u></b>
                                            </router-link>
                                        </p>
                                    </div>
                                </div>

                                <div id="tombolEditAchive" class="d-flex">
                                    <div class="col-6 px-0 ">
                                        <router-link v-if="catatan.tipe == 'mahasiswa'" id="buttonEdit"
                                            :to="{ name: 'EditCatatanMahasiswa', params: { id: catatan.id_catatan_perwalian_dosen } }"
                                            type="button" class="btn btn-light">
                                            Edit
                                        </router-link>
                                        <router-link v-if="catatan.tipe == 'orang-tua-wali'"
                                            :to="{ name: 'EditCatatanOrangTuaWali', params: { id: catatan.id_catatan_perwalian_dosen } }"
                                            id="buttonEdit" type="button" class="btn btn-light">
                                            Edit
                                        </router-link>
                                        <router-link v-if="catatan.tipe == 'orang-tua-wali-dan-mahasiswa'"
                                            :to="{ name: 'EditCatatanOrangTuaWaliDanMahasiswa', params: { id: catatan.id_catatan_perwalian_dosen } }"
                                            id="buttonEdit" type="button" class="btn btn-light">
                                            Edit
                                        </router-link>
                                        <router-link v-if="catatan.tipe == 'grup-angkatan'"
                                            :to="{ name: 'EditCatatanGrupAngkatan', params: { id: catatan.id_catatan_perwalian_dosen } }"
                                            id="buttonEdit" type="button" class="btn btn-light">
                                            Edit
                                        </router-link>
                                    </div>
                                    <div class="col-6 px-0 text-right">
                                        <button id="buttonArsip" type="button" class="btn btn-light"
                                            @click="showPopUpArsip(catatan)">Arsipkan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- jika tidak ada adata di pagination -->
                    <div v-else class="text-center">
                        <div class="card d-inline-block border border-dark">
                            <p class="m-3">Tidak ada catatan perwalian</p>
                        </div>
                    </div>

                </div>

                <div class="row my-4 pr-5 mr-1">
                    <div class="text-center">
                        <v-container id="myVueContainer">
                            <v-row justify="center">
                                <v-col cols="8">
                                    <v-container class="max-width">
                                        <v-pagination v-model="this.currentPage" :length="this.getListCatatanLength"
                                            @input="this.changePage()" prev-icon="mdi-menu-left"
                                            next-icon="mdi-menu-right"></v-pagination>
                                    </v-container>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </div>
            </div>
        </div>


        <!-- overlay hapus catatan -->
        <Transition>
            <div id="overlay" v-if="this.showWarningHapus" class="d-flex justify-content-center align-items-center">
                <div id="windowPreferensi">
                    <div id="contentPreferensi" class="p-4">
                        <p class="text-center font-weight-bold mb-3">Yakin hapus catatan ? </p>
                        <p class="px-3 text-center text-danger">{{ this.pesanWarningHapus }}
                        </p>

                        <div v-if="this.relasiCatatanHapus.tambah_peserta.length > 0">
                            <v-divider :thickness="3" class="border-opacity-100 mx-4 mt-2 mb-3" color="success"></v-divider>
                            <p class="mb-3 text-center"><b>Relasi Catatan</b></p>
                            <div class="d-flex">
                                <ol class="mb-0">
                                    <li v-for="(catatan, index) in this.relasiCatatanHapus.tambah_peserta" :key="index"
                                        class="mb-2 align-self-center">
                                        <p class=" mb-0"><b>{{ this.relasiCatatanHapus.judul }}</b></p>
                                        <p class="mb-0">{{ catatan.nama }}</p>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <!-- bagian tombol simpan batal -->
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

        <!-- overlay hapus warning catatan -->
        <Transition>
            <div id="overlay" v-if="this.showWarningArsip" class="d-flex justify-content-center align-items-center">
                <div id="windowPreferensi">
                    <div id="contentPreferensi" class="p-4">
                        <p class="text-center font-weight-bold mb-3">Yakin arsipkan catatan ? </p>
                        <p class="px-3 text-justify">{{ this.pesanWarningArsip }}</p>

                        <div v-if="this.relasiCatatanArsip.tambah_peserta.length > 0">
                            <v-divider :thickness="3" class="border-opacity-100 mx-4 mt-2 mb-3" color="success"></v-divider>
                            <p class="mb-3 text-center"><b>Relasi Catatan</b></p>
                            <div class="d-flex">
                                <ol class="mb-0">
                                    <li v-for="(catatan, index) in this.relasiCatatanArsip.tambah_peserta" :key="index"
                                        class="mb-2 align-self-center">
                                        <p class=" mb-0"><b>{{ this.relasiCatatanArsip.judul }}</b></p>
                                        <p class="mb-0">{{ catatan.nama }}</p>
                                    </li>
                                </ol>
                            </div>
                        </div>

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

        <div id="snackbar">
            <p class="m-0">{{ this.pesanSnackBar }}</p>
        </div>
    </div>
</template>

<script>
import BreadcrumbModule from './BreadcrumbModule.vue';
import axios from 'axios'

export default {
    name: "DaftarCatatanPerwalianDosen",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            showPopUpFilter: false,
            default: true,
            indexHapusCatatan: 0,
            inputanCariCatatanPerwalianDosen: "",
            valueSort: "Paling Baru",
            valueFilter: "Semua Tipe",
            handlerBatal: false,
            handlerSimpan: false,
            handlerValueFilter: true,
            handlerValueSort: true,
            tempValueFilter: "Semua Tipe",
            tempValueSort: "Paling Baru",
            listSort: [
                "Paling Baru",
                "Paling Lama",
            ],
            listFilters: [
                "Semua Tipe",
                "Mahasiswa",
                "Orang Tua / Wali",
                "Orang Tua / Wali dan Mahasiswa",
                "Grup Angkatan"
            ],
            /////////////////////////////////
            kodeDosen: "",
            listCatatanPerwalianDosen: [],
            idHapus: 0,
            idArsip: 0,
            showWarningHapus: false,
            showWarningArsip: false,
            pesanWarningHapus: "",
            pesanWarningArsip: "",
            pesanSnackBar: "",
            pesanError: "",
            currentPage: 1, // halaman sekarang 
            itemsPerPage: 12, //jumlah catatan per halaman ,
            relasiCatatanHapus: [],
            relasiCatatanArsip: [],
            namaDosen: localStorage.getItem("namaDosen")
        }
    },
    created() {
        this.scrollTop();
        this.initData();
    },
    methods: {
        async initData() {
            this.kodeDosen = localStorage.getItem("kodeDosen")

            this.getFilteredCatatanPerwalianDosen()
        },
        simpan() {
            this.getFilteredCatatanPerwalianDosen()
            this.showPopUpFilter = false;
        },
        async getFilteredCatatanPerwalianDosen() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/filteredCatatanPerwalianDosen/`, {
                    params: {
                        kode_dosen: this.kodeDosen,
                        sort_waktu: this.valueSort,
                        filter_tipe_catatan: this.valueFilter,
                    },
                });

                if (response.data.error === false) {
                    this.listCatatanPerwalianDosen = response.data.response.list_catatan_perwalian_dosen;
                    this.pesanError = "Berhasil menemukan " + this.listCatatanPerwalianDosen.length + " data"

                    // untuk watch pencarian 
                    return this.listCatatanPerwalianDosen

                } else {
                    this.listCatatanPerwalianDosen = [];
                    this.pesanError = "Tidak ada catatan perwalian"
                }

            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
                this.listCatatanPerwalianDosen = [];
                this.pesanError = "Tidak ada catatan perwalian"
            }
        },
        async showPopUpHapus(catatan) {
            this.relasiCatatanHapus = []
            this.showWarningHapus = true
            this.idHapus = catatan // menyimpan item catatannya saja, nanti ambil id catatannya ketika di hapus

            // mengisi dengan objek dari catatan yang dipilih
            this.relasiCatatanHapus = {
                judul: catatan.judul,
                tambah_peserta: catatan.tambah_peserta
            }

            if (catatan.tambah_peserta.length != 0) {
                this.pesanWarningHapus = "Catatan ini memiliki relasi dengan catatan lain, menghapus catatan ini berarti menghapus secara permanen semua catatan yang berelasi dengan catatan ini"
            } else {
                this.pesanWarningHapus = "Catatan ini akan dihapus secara permanen dan tidak bisa dikembalikan"
            }
        },
        hapusCatatanTidak() {
            this.showWarningHapus = false;
        },
        async hapusCatatanYa() {
            try {
                // mengecek apakah catatan memiliki tambah_peserta lainnya
                if (this.relasiCatatanHapus.tambah_peserta.length != 0) {
                    for (let i = 0; i < this.relasiCatatanHapus.tambah_peserta.length; i++) {
                        const paramObject = {
                            id_catatan_perwalian_dosen: this.relasiCatatanHapus.tambah_peserta[i].id_catatan_perwalian_dosen
                        }
                        await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/deleteCatatanPerwalianDosen/`, paramObject);
                    }
                    //menutup pop up warning hapus
                    this.showWarningHapus = false

                    setTimeout(() => {
                        this.pesanSnackBar = "Catatan berhasil dihapus"
                        this.snackbar()
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);
                    }, 200);
                } else {
                    const paramObject = {
                        id_catatan_perwalian_dosen: this.idHapus.id_catatan_perwalian_dosen
                    }
                    const response = await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/deleteCatatanPerwalianDosen/`, paramObject);

                    if (response.data.error === false) {
                        this.showWarningHapus = false

                        setTimeout(() => {
                            this.pesanSnackBar = "Catatan berhasil dihapus"
                            this.snackbar()
                            setTimeout(() => {
                                window.location.reload();
                            }, 2000);
                        }, 200);

                    } else {
                        console.log("Gagal hapus data");
                    }
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
                this.listMahasiswaPerwalianFiltered = [];
            }
        },
        snackbar() {
            //show snackbar
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        },
        batal() {
            this.showPopUpFilter = false
            this.handlerBatal = true
        },
        async showPopUpArsip(catatan) {
            this.relasiCatatanArsip = []
            this.showWarningArsip = true
            this.idArsip = catatan // menyimpan item catatannya saja, nanti ambil id catatannya ketika di arsip

            // mengisi dengan objek dari catatan yang dipilih
            this.relasiCatatanArsip = {
                judul: catatan.judul,
                tambah_peserta: catatan.tambah_peserta
            }

            if (catatan.tambah_peserta.length != 0) {
                this.pesanWarningArsip = "Catatan ini memiliki relasi dengan catatan lain, mengarsipkan catatan ini berarti mengarsipkan semua catatan yang berelasi dengan catatan ini"
            } else {
                this.pesanWarningArsip = "Ketika catatan ini diarsipkan, Anda tidak bisa mengaksesnya. Namun, Anda dapat memulihkan catatan tersebut melalui menu 'Lihat catatan yang diarsipkan' yang berada di pojok kanan atas halaman ini"
            }
        },
        arsipCatatanTidak() {
            this.showWarningArsip = false
        },
        async arsipCatatanYa() {
            if (this.relasiCatatanArsip.tambah_peserta != 0) {
                for (let i = 0; i < this.relasiCatatanArsip.tambah_peserta.length; i++) {
                    const paramObject = {
                        id_catatan_perwalian_dosen: this.relasiCatatanArsip.tambah_peserta[i].id_catatan_perwalian_dosen,
                        is_arsip: true,
                        filter_arsip: "current_time"
                    }
                    await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/updateIsArsipCatatanPerwalianDosen/`, paramObject);

                    this.showWarningArsip = false
                    setTimeout(() => {
                        this.pesanSnackBar = "Berhasil mengarsipkan catatan"
                        this.snackbar()
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);
                    }, 200);
                }
            } else {
                //update catatan mahasiswa ybs 
                try {
                    const paramObject = {
                        id_catatan_perwalian_dosen: this.idArsip.id_catatan_perwalian_dosen,
                        is_arsip: true,
                        filter_arsip: "current_time"
                    }
                    const response = await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/updateIsArsipCatatanPerwalianDosen/`, paramObject);

                    if (response.data.error === false) {
                        this.showWarningArsip = false
                        setTimeout(() => {
                            this.pesanSnackBar = "Berhasil mengarsipkan catatan"
                            this.snackbar()
                            setTimeout(() => {
                                window.location.reload();
                            }, 2000);
                        }, 200);
                    }
                } catch (error) {
                    console.error("Terjadi kesalahan saat mengambil data:", error);
                }
            }
        },
        deleteCatatan(index) {
            this.listCatatan.splice(index, 1);
        },
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animasi smooth scrolling
            });
        },
        limitAgenda(fullString) {
            if (fullString.length > 120) {
                let slicedString = fullString.slice(0, 120);
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
        convertTimestamp(timestamp) {
            const date = new Date(timestamp);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('id-ID', options);
            return formattedDate;
        },
        convertToWIB(waktu) {
            const [jam, menit] = waktu.split(':');
            return `${jam}:${menit} WIB`;
        },
        changePage(newPage) {
            this.currentPage = newPage;
        },
        showPopUpPreferensi() {
            this.showPopUpFilter = true;
        },
        logoutDosen() {
            localStorage.clear();
            this.$router.push("/login")
        }

    },
    mounted() {
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
    computed: {
        getListCatatanLength() {
            let hasil = Math.ceil(this.listCatatanPerwalianDosen.length / 12);
            return hasil;
        },
        paginatedItems() {
            this.scrollTop()
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.listCatatanPerwalianDosen.slice(startIndex, endIndex);
        },
    },
    watch: {
        inputanCariCatatanPerwalianDosen: {
            handler: async function (judul) {
                this.pesanError = "Sedang mencari catatan ... "
                //ambil data dari local storage

                let tempListCatatanPerwalianDosen = await this.getFilteredCatatanPerwalianDosen()

                //get kata kunci pencarian
                const kataKunciPencarian = judul.toLowerCase().trim();


                let hasilFilter = undefined
                // //lakukan filtering catatan berdasarkan kata kunci 
                if (tempListCatatanPerwalianDosen != undefined) {
                    hasilFilter = tempListCatatanPerwalianDosen.filter(catatan =>
                        catatan.judul.toLowerCase().includes(kataKunciPencarian) ||
                        catatan.agenda_perwalian.toLowerCase().includes(kataKunciPencarian)
                    );
                } else {
                    hasilFilter = []
                }

                if (hasilFilter.length > 0) { //filter ketemu
                    this.listCatatanPerwalianDosen = hasilFilter
                    this.pesanError = "Berhasil menemukan " + hasilFilter.length + " data"
                } else { // filter tidak ketemu 
                    // this.listCatatanPerwalianDosen = tempListCatatanPerwalianDosen
                    this.listCatatanPerwalianDosen = []
                    this.pesanError = "Catatan yang dicari tidak ditemukan"
                }
            }
        },
        handlerBatal: {
            handler: function (baru, lama2) {
                if (this.handlerBatal) {
                    this.valueFilter = this.tempValueFilter
                    this.valueSort = this.tempValueSort

                    this.handlerBatal = false
                }
            }
        },
        handlerSimpan: {
            handler: function (baru, lama) {
                if (this.handlerSimpan == baru) {
                    this.handlerValueFilter = true
                    this.tempValueFilter = this.valueFilter
                    this.tempValueSort = this.valueSort
                }
            }
        },
    },
}
</script>

<style scoped src="../../public/frontend/styling/cariCatatanPerwalianDosen.css"></style>