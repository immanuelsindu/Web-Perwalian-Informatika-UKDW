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
                            <router-link :to="{ name: 'ArsipPerwalianDosen' }" type="button" class="btn">
                                <v-tooltip activator="parent" location="bottom" content-class="bg-grey-darken-1">Lihat
                                    catatan yang diarsipkan
                                </v-tooltip>
                                <span class="material-symbols-outlined viewAgenda">
                                    archive
                                </span>
                            </router-link>
                        </div>

                        <div>
                            <button type="button" @click="showPopUpPreferensi()" class="btn">
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
                        <div id="overlay" v-if="isOn" class="d-flex justify-content-center align-items-center">
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
                                            <ol class="pl-0 listFilter">
                                                <li v-for="(items, index) in listFilters" :key="index" class="mb-1 pl-2 ">
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
                                            <button class="btn simpan" @click="simpan()">Simpan</button>
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
                            <p>Ditemukan 4 hasil sesuai kata pencarian</p>
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
                            <router-link :to="{ name: 'TambahCatatanPerwalian' }" id="tambahCatatan" class="align-middle">
                                <span class="material-symbols-outlined mr-1 pt-1">
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
            </div>

            <!-- overlay hapus warning catatan -->
            <Transition>
                <div id="overlay" v-if="isOn2" class="d-flex justify-content-center align-items-center">
                    <div id="windowPreferensi">
                        <div id="contentPreferensi" class="p-4">
                            <p class="text-center font-weight-bold">Yakin hapus catatan ? </p>
                            <!-- bagian tombol simpan batal -->
                            <div class="row mt-3">
                                <div class="col-4 px-0 d-flex justify-content-center">
                                    <button class="btn batal" @click="hapusCatatanTidak()">Tidak</button>
                                </div>
                                <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                                    <button class="btn simpan" @click="hapusCatatanYa()">Ya</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>

            <!-- daftar catatan perwalian -->
            <div id="cardCatatanPerwalian">
                <div id="containerlistCatatan" class="row mx-sm-5 mt-4 gx-5 d-flex justify-content-start">
                    <div v-for="catatan in this.dataDariSimpan" :key="catatan.idCatatan"
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
                                            <p>{{ catatan.judul }}</p>
                                        </div>
                                        <div class="col-1 px-0">
                                            <p>
                                                <span id="iconDelete" class="material-symbols-outlined delete"
                                                    @click="showPopUpPreferensi2(catatan.idCatatan)">
                                                    delete
                                                    <v-tooltip activator="parent" location="bottom"
                                                        content-class="bg-grey-darken-1">Hapus catatan
                                                    </v-tooltip>
                                                </span>

                                            </p>
                                        </div>
                                    </div>
                                    <p>{{ catatan.waktu }}</p>
                                    <p class="m-0">{{ catatan.waktuAwal }} - {{ catatan.waktuAkhir }}</p>


                                </div>
                            </div>

                            <div id="agendaPerwalian">
                                <p class="m-0 p-0">
                                    <b v-if="catatan.tipe != 'grup-angkatan'">
                                        {{ catatan.nama }} / {{ catatan.nim }}
                                    </b>
                                    <b v-else>
                                        <!-- {{catatan.tahun_angkatan}}  -->
                                        <p class='m-0'>Angkatan 2017</p>
                                    </b>

                                </p>

                                <div id="containerAgenda">
                                    <p class="m-0">
                                        {{ limitAgenda(catatan.agendaPerwalian) }}
                                        <router-link v-if="catatan.tipe == 'mahasiswa'"
                                            :to="{ name: 'EditCatatanMahasiswa', params: { id: catatan.idCatatan } }">
                                            <b><u>Lihat selengkapnya</u></b>
                                        </router-link>
                                        <router-link v-else-if="catatan.tipe == 'orang-tua-wali'"
                                            :to="{ name: 'EditCatatanOrangTuaWali', params: { id: catatan.idCatatan } }">
                                            <b><u>Lihat selengkapnya</u></b>
                                        </router-link>
                                        <router-link v-else-if="catatan.tipe == 'orang-tua-wali-dan-mahasiswa'"
                                            :to="{ name: 'EditCatatanOrangTuaWaliDanMahasiswa', params: { id: catatan.idCatatan } }">
                                            <b><u>Lihat selengkapnya</u></b>
                                        </router-link>
                                        <router-link v-else
                                            :to="{ name: 'EditCatatanGrupAngkatan', params: { id: catatan.idCatatan } }">
                                            <b><u>Lihat selengkapnya</u></b>
                                        </router-link>
                                    </p>
                                </div>
                            </div>

                            <div id="tombolEditAchive" class="d-flex">
                                <div class="col-6 px-0 ">
                                    <router-link v-if="catatan.tipe == 'mahasiswa'" id="buttonEdit"
                                        :to="{ name: 'EditCatatanMahasiswa', params: { id: catatan.idCatatan } }"
                                        type="button" class="btn btn-light">
                                        Edit
                                    </router-link>
                                    <router-link v-if="catatan.tipe == 'orang-tua-wali'"
                                        :to="{ name: 'EditCatatanOrangTuaWali', params: { id: catatan.idCatatan } }"
                                        id="buttonEdit" type="button" class="btn btn-light">
                                        Edit
                                    </router-link>
                                    <router-link v-if="catatan.tipe == 'orang-tua-wali-dan-mahasiswa'"
                                        :to="{ name: 'EditCatatanOrangTuaWaliDanMahasiswa', params: { id: catatan.idCatatan } }"
                                        id="buttonEdit" type="button" class="btn btn-light">
                                        Edit
                                    </router-link>
                                    <router-link v-if="catatan.tipe == 'grup-angkatan'"
                                        :to="{ name: 'EditCatatanGrupAngkatan', params: { id: catatan.idCatatan } }"
                                        id="buttonEdit" type="button" class="btn btn-light">
                                        Edit
                                    </router-link>
                                </div>
                                <div class="col-6 px-0 text-right">
                                    <button id="buttonArsip" type="button" class="btn btn-light"
                                        @click="pulihkanCatatan(catatan.idCatatan)">Arsipkan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row my-4 pr-5 mr-1">
                    <div class="text-center">
                        <v-container id="myVueContainer">
                            <v-row justify="center">
                                <v-col cols="8">
                                    <v-container class="max-width">
                                        <v-pagination v-model="page" :length="getListCatatanLength"
                                            prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
                                    </v-container>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </div>
            </div>
        </div>

        <div id="snackbar">
            <p class="m-0">Catatan berhasil dihapus</p>
        </div>
    </div>
</template>

<script>
import BreadcrumbModule from './BreadcrumbModule.vue';
import CatatanPerwalianDosen from "@/myClass/catatanPerwalianDosen.js"


export default {
    name: "DaftarCatatanPerwalianDosen",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            isOn: false,
            isOn2: false,
            default: true,
            indexHapusCatatan: 0,
            page: 1,
            perPage: 12,
            inputanCariCatatanPerwalianDosen: "",
            listAllCatatanPerwalianDosen: [],
            dataDariSimpan: [],
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
        }
    },
    methods: {
        batal() {
            this.isOn = false
            this.handlerBatal = true
        },
        simpan() {
            let listDataDariSimpanSementara = []
            switch (this.valueFilter) {
                case "Semua Tipe":
                    const startIndex = (this.page - 1) * this.perPage
                    const endIndex = startIndex + this.perPage
                    listDataDariSimpanSementara = this.$store.getters.getListCatatanPerwalianDosen.slice(startIndex, endIndex)
                    break;
                case "Mahasiswa":
                    listDataDariSimpanSementara = this.$store.getters.getListCatatanPerwalianDosen.filter(item => item.tipe === 'mahasiswa')
                    break;
                case "Orang Tua / Wali":
                    listDataDariSimpanSementara = this.$store.getters.getListCatatanPerwalianDosen.filter(item => item.tipe === 'orang-tua-wali')
                    break;
                case "Orang Tua / Wali dan Mahasiswa":
                    listDataDariSimpanSementara = this.$store.getters.getListCatatanPerwalianDosen.filter(item => item.tipe === 'orang-tua-wali-dan-mahasiswa')
                    break;
                case "Grup Angkatan":
                    listDataDariSimpanSementara = this.$store.getters.getListCatatanPerwalianDosen.filter(item => item.tipe === 'grup-angkatan')
                    break;
                default:
                    break;
            }
            switch (this.valueSort) {
                case "Paling Baru":
                    this.dataDariSimpan = listDataDariSimpanSementara.reverse()
                    break;
                case "Paling Lama":
                    this.dataDariSimpan = listDataDariSimpanSementara
                    break;
                default:
                    break;
            }

            this.handlerSimpan = !this.handlerSimpan
            this.isOn = false;
            this.default = false
        },
        hapusCatatanTidak() {
            this.isOn2 = false;
        },
        hapusCatatanYa() {
            //hapus item catatan di store
            this.$store.commit("deleteItemCatatanPerwalianDosen", this.indexHapusCatatan)

            //hapus item catatan di dataDariSimpan
            const indexCatatan = this.dataDariSimpan.findIndex(item => item.idCatatan === this.indexHapusCatatan);
            this.dataDariSimpan.splice(indexCatatan, 1)

            //tutup dialog hapus
            this.isOn2 = false;

            //show snackbar
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        },
        showPopUpPreferensi() {
            this.isOn = true;
        },
        showPopUpPreferensi2(index) {
            this.indexHapusCatatan = index;
            this.isOn2 = true;
        },
        editCatatan(link) {
            window.open(this.$router.resolve(link).href, '_blank');
        },
        deleteCatatan(index) {
            this.listCatatan.splice(index, 1);
        },
        bukaArsip() {
            window.open(this.$router.resolve('/arsipPerwalianDosen').href, '_blank');
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
        pulihkanCatatan(idCatatan) {
            //ambil data item catatan yang lama dari store
            const tempCatatan = this.$store.getters.getItemCatatanPerwalianDosenById(idCatatan)
            //
            const dataCatatanLama = new CatatanPerwalianDosen(
                tempCatatan.idCatatan, //id catatan
                tempCatatan.judul, //judul catatan
                tempCatatan.tipe, //tipe
                tempCatatan.nim, //nim
                tempCatatan.nama, //nama
                tempCatatan.waktu, //tanggal buat catatan
                tempCatatan.namaOrangTua, //nama orang tua 
                tempCatatan.agendaPerwalian, //agenda perwalian
                tempCatatan.tambahPeserta, //daftar peserta lainnya
                tempCatatan.tahunAngkatan, //tahun angkatan
                tempCatatan.waktuAwal, //waktuAwal 
                tempCatatan.waktuAkhir,	// waktuAkhir
                tempCatatan.dataPresensiMahasiswa, //data presensi
                true, //isArsip diganti menjadi true
            )

            //update data baru ke store
            this.$store.commit('updateArsipStatusCatatanPerwalian', dataCatatanLama)

            //update data baru ke this.dataDariSimpan
            const indexCatatan = this.dataDariSimpan.findIndex(item => item.idCatatan === idCatatan);
            this.dataDariSimpan.splice(indexCatatan, 1);

        },
        initData() {
            this.listAllCatatanPerwalianDosen = this.$store.getters.getListCatatanPerwalianDosen
            this.dataDariSimpan = this.cariCatatanPerwalianDosen(" ")
            this.dataDariSimpan = this.dataDariSimpan.reverse()
        },
        cariCatatanPerwalianDosen(judul) {
            const filteredCatatanPerwalian = this.listAllCatatanPerwalianDosen.filter(item => {
                return item.judul.toLowerCase().includes(judul.toLowerCase());
            });

            if (filteredCatatanPerwalian.length > 0) {
                return filteredCatatanPerwalian
            }
        }
    },
    updated() {
        this.scrollTop();
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
    created() {
        this.scrollTop();
        this.initData();
    },
    computed: {
        getListCatatanLength() {
            let hasil = Math.ceil(this.$store.getters.getListCatatanPerwalianDosen.length / 12);
            return hasil;
        },
    },
    watch: {
        inputanCariCatatanPerwalianDosen: {
            handler: function (judul) {
                this.dataDariSimpan = this.cariCatatanPerwalianDosen(judul)
            }
        },
        valueSort: {
            handler: function (baru, lama) {
                if (this.handlerValueSort) {
                    this.handlerValueSort = false
                    this.tempValueSort = lama
                }
            }
        },
        valueFilter: {
            handler: function (baru, lama) {
                if (this.handlerValueFilter) {
                    this.handlerValueFilter = false
                    this.tempValueFilter = lama
                }

                if (this.valueFilter == this.tempValueFilter) {
                    this.handlerValueFilter = true
                    this.tempValueFilter = baru
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