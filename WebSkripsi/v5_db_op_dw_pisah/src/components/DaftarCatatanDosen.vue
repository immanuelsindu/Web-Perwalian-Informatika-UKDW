<template lang="">
    <div id="body">
        <head> 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
        </head>

         <!-- Navbar -->
        <div class="row align-items-center ml-0 stickyNavbar"  id="navbar">
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
                        <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>
                    </div>

                    <div class="col-md-1 col-sm-3 pl-5 d-flex  justify-content-center">
                        <div class="mr-3">
                            <router-link id="arsipCatatanPerwalian" :to="{name:'ArsipDosen'}" type="button" class="btn">
                                <v-tooltip 
                                    activator="parent"
                                    location="bottom"
                                    content-class="bg-grey-darken-1"
                                    >Lihat catatan yang diarsipkan
                                </v-tooltip>
                                <span class="material-symbols-outlined viewAgenda">
                                    archive
                                </span>
                            </router-link>
                        </div>

                        <div>
                            <button type="button" @click="showPopUpPreferensi()" class="btn filter">
                                <v-tooltip 
                                    activator="parent"
                                    location="bottom"
                                    content-class="bg-grey-darken-1"
                                    >Filter urutan catatan
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
                                    <p class="text-center font-weight-bold">Pilih filter urutan catatan perwalian</p>

                                    <div class="row mb-3">
                                        <div class="col-12">
                                            <ol class="pl-0 listFilter">
                                                <li v-for="(items,index) in listSort" :key="index" class="mb-1 pl-2 ">
                                                    <div class="row">
                                                        <div class="col-8">
                                                            {{items}}
                                                        </div>
                                                        <div class="col-4 pl-4 d-flex justify-content-center align-items-center">
                                                            <input class="form-check-input align-self-center" type="radio" name="flexRadioDefault" :id="'flexRadioDefault' + index" :value="items" v-model="valueSort">
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
                                                <li v-for="(items,index) in listFilters" :key="index" class="mb-1 pl-2 ">
                                                    <div class="row">
                                                        <div class="col-8">
                                                            {{items}}
                                                        </div>
                                                        <div class="col-4 pl-4 d-flex justify-content-center align-items-center">
                                                            <input class="form-check-input align-self-center" type="radio" name="flexRadioDefault2" :id="'flexRadioDefault' + index" :value="items" v-model="valueFilter">
                                                        </div>
                                                    </div>
                                                </li>
                                            
                                            </ol>
                                        </div>
                                    </div>

                                    <!-- bagian tombol simpan batal -->
                                    <div class="row mt-2">
                                        <div class="col-4 px-0 d-flex justify-content-center">
                                            <button class="btn batal filter" @click="batal()">Batal</button>
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
                <p>Daftar Catatan Dosen</p>
            </div>
            
            <div id="cariCatatanPerwalian" class="row mx-auto mt-sm-5">
                <div id="containerCariCatatanPerwalian" class="row justify-content-center">
                    <div class="col-lg-6 col-sm-12 pt-sm-5">
                        <div class="mb-2">
                            <span class="material-symbols-outlined search ">
                                search
                                </span>
                            <input id="inputCariMahasiswa" type="text" placeholder="Cari catatan dosen" v-model="inputanCariCatatanDosen">
                        </div>
        
                        <div id="alertPencarian">
                            <p>{{this.pesanError}}</p>
                            <p>
                                <span class="material-symbols-outlined bullet align-middle">
                                    circle
                                </span>
                                <span class="mr-1">Refleksi Dosen</span>
        
                                <span class="material-symbols-outlined bullet align-middle">
                                    circle
                                </span>
                                <span class="mr-1">Khusus</span>
                            </p>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-12 col-sm-12 offset-lg-3 mt-sm-2 d-flex align-items-center">
                        <router-link :to="{name:'TambahCatatanDosen', params: { canBack: 1 }}" id="tambahCatatan" class="align-middle">
                            <span class="material-symbols-outlined mr-1 pt-1">
                                add_box
                            </span>
                        </router-link>
                        <router-link :to="{name:'TambahCatatanDosen', params: { canBack: 1 }}" id="tambahCatatan" class="judulTambahCatatan">
                            Tambah Catatan Perwalian
                        </router-link>
                    </div>
                </div>
                
            </div>

            <!-- daftar catatan perwalian -->
            <div id="cardCatatanPerwalian">
                <div id="containerlistCatatan" class="row mx-5 mt-4 gx-5 d-flex justify-content-start">
                    <!-- jika ada data di pagination -->
                    <div v-if="this.paginatedItems.length > 0" class="d-flex flex-wrap">
                        <div v-for="(catatan,index) in this.paginatedItems" :key="index" class="col-lg-3 col-md-6 d-flex justify-content-center" id="containerItemCatatan">
                            <div id="itemCatatanPerwalian">
                                <span v-if="catatan.tipe == 'refleksi-dosen'" id="garisMahasiswa"></span>
                                <span v-else id="garisOrangTua"></span>
                                
                                <div class="p-0">
                                    <div id="infoCatatan" class="col-12 p-0">
                                        <div class="d-flex">
                                            <div class="col-11 pl-0">
                                                <p class="judulCatatan">{{catatan.judul}}</p>
                                            </div>
                                        <div class="col-1 px-0">
                                            <p>
                                                <span id="iconDelete" class="material-symbols-outlined delete" @click="showPopUpHapus(catatan.id_catatan_dosen)">
                                                    delete
                                                    <v-tooltip 
                                                        activator="parent"
                                                        location="bottom"
                                                        content-class="bg-grey-darken-1"
                                                        >Hapus catatan
                                                    </v-tooltip>
                                                </span>
                                            </p>
                                        </div>
                                        </div>
                                        <p>{{this.convertTimestamp(catatan.waktu)}}</p>
                                        <p class="mb-4">{{ this.convertToWIB(catatan.waktu_awal)}} - {{this.convertToWIB(catatan.waktu_akhir)}}</p>
                                    </div>
                                </div>
    
                                <div id="containerAgenda">
                                    <p v-if="catatan.tipe == 'khusus'" class="m-0 p-0">
                                        <b>
                                            {{catatan.nama}} / {{catatan.nim}}
                                        </b>
                                    </p>
    
                                    <p class="mb-3">{{limitAgenda(catatan.agenda_perwalian)}}
                                        <router-link v-if="catatan.tipe=='refleksi-dosen'" :to="{name:'EditCatatanRefleksiDosen',params:{id:catatan.id_catatan_dosen}}">
                                            <b><u>Lihat selengkapnya</u></b>
                                        </router-link>
                                        <router-link v-else :to="{name:'EditCatatanKhusus',params:{id:catatan.id_catatan_dosen}}">
                                            <b><u>Lihat selengkapnya</u></b>
                                        </router-link>
                                    </p>
    
                                    <div id="tombolEditAchive" class="d-flex">
                                        <div class="col-6 px-0 ">
                                            <router-link v-if="catatan.tipe == 'refleksi-dosen'" :to="{name:'EditCatatanRefleksiDosen',params:{id:catatan.id_catatan_dosen}}" id="buttonEdit" type="button" class="btn btn-light">
                                                Edit
                                            </router-link>
                                            <router-link v-else :to="{name:'EditCatatanKhusus',params:{id:catatan.id_catatan_dosen}}" id="buttonEdit" type="button" class="btn btn-light">
                                                Edit
                                            </router-link>
                                        </div>
                                        <div class="col-6 px-0 text-right">
                                            <button id="buttonArsip" type="button" class="btn btn-light" @click="showPopUpArsip(catatan.id_catatan_dosen)">Arsipkan</button>
                                        </div>
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
                                  <v-pagination
                                    v-model="this.currentPage"
                                    :length="this.getListCatatanLength"
                                    @input="this.changePage()"
                                    prev-icon="mdi-menu-left"
                                    next-icon="mdi-menu-right"
                                  ></v-pagination>
                                </v-container>
                              </v-col>
                            </v-row>
                          </v-container>
                    </div>

                </div>
            </div>
        </div>

        <!-- overlay hapus arsipkan catatan -->
        <Transition>
            <div id="overlay" v-if="this.showWarningHapus" class="d-flex justify-content-center align-items-center">
                <div id="windowPreferensi">
                    <div id="contentPreferensi" class="p-4">
                        <p class="text-center font-weight-bold mb-3">Yakin hapus catatan ? </p>
                        <p class="px-3 text-center text-danger">Catatan ini akan dihapus secara permanen dan tidak bisa
                            dikembalikan.
                        </p>

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
                        <p class="px-3 text-justify">Ketika catatan ini diarsipkan, Anda tidak bisa
                            mengaksesnya. Namun, Anda dapat memulihkan catatan tersebut melalui menu <span><b>'Lihat
                                    catatan yang diarsipkan'</b></span> yang berada di pojok kanan atas halaman ini
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

        <div id="snackbar">
            <p class="m-0">{{this.pesanSnackBar}}</p>
        </div>
    </div>
</template>

<script>
import BreadcrumbModule from './BreadcrumbModule.vue';
import axios from 'axios'

export default {
    name: "DaftarCatatanDosen",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            showPopUpFilter: false,
            isOn2: false,
            default: true,
            indexHapusCatatan: "",
            inputanCariCatatanDosen: "",
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
                "Refleksi Dosen",
                "Khusus"
            ],
            ///////////////////////////////////////////////////////////////////
            listCatatanDosen: [],
            kodeDosen: 0,
            pesanError: "",
            pesanSnackBar: "",
            valueSort: "Paling Baru",
            valueFilter: "Semua Tipe",
            idHapus: 0,
            idArsip: 0,
            showWarningHapus: false,
            showWarningArsip: false,
            currentPage: 1, // halaman sekarang 
            itemsPerPage: 12, //jumlah catatan per halaman 
            namaDosen: localStorage.getItem("namaDosen")
        }
    },
    created() {
        this.scrollTop();
        this.initData();
    },
    methods: {
        initData() {
            this.kodeDosen = localStorage.getItem("kodeDosen")
            this.getFilteredCatatanDosen()
        },
        async getFilteredCatatanDosen() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL
 + `/filteredCatatanDosen/`, {
                    params: {
                        kode_dosen: this.kodeDosen,
                        sort_waktu: this.valueSort,
                        filter_tipe_catatan: this.valueFilter,
                    },
                });

                if (response.data.error === false) {
                    this.listCatatanDosen = response.data.response.list_catatan_dosen;
                    this.pesanError = "Berhasil menemukan " + this.listCatatanDosen.length + " data"

                    //untuk watch pencarian 
                    return this.listCatatanDosen
                } else {
                    this.listCatatanDosen = [];
                    this.pesanError = "Tidak ada catatan perwalian"
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
                this.listCatatanDosen = [];
                this.pesanError = "Tidak ada catatan perwalian"
            }
        },
        batal() {
            this.showPopUpFilter = false;
            this.handlerBatal = true
        },
        simpan() {
            this.getFilteredCatatanDosen()
            this.showPopUpFilter = false;
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
        showPopUpHapus(id) {
            this.showWarningHapus = true
            this.idHapus = id
        },
        hapusCatatanTidak() {
            this.showWarningHapus = false;
        },
        async hapusCatatanYa() {
            try {
                const paramObject = {
                    id_catatan_dosen: this.idHapus
                }
                const response = await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/deleteCatatanDosen/`, paramObject);

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
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
                this.listMahasiswaPerwalianFiltered = [];
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
            //melakukan arsip catatan perwalian menjadi true
            try {
                const paramObject = {
                    id_catatan_dosen: this.idArsip,
                    is_arsip: true,
                    filter_arsip: "current_time"
                }
                const response = await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/updateIsArsipCatatanDosen/`, paramObject);

                if (response.data.error === false) {
                    this.showWarningArsip = false
                    setTimeout(() => {
                        this.pesanSnackBar = "Berhasil mengarsipkan catatan"
                        this.snackbar()
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);
                    }, 200);
                } else {
                    this.listMahasiswaPerwalianFiltered = [];
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
            }
        },
        snackbar() {
            //show snackbar
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        },
        showPopUpPreferensi() {
            this.showPopUpFilter = true;
        },
        changePage(newPage) {
            this.currentPage = newPage;
        },
        logoutDosen() {
            localStorage.clear();
            this.$router.push("/login")
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

        // // popper.min.js
        // const script2 = document.createElement("script");
        // script2.src ="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js";
        // script2.integrity = "sha384-hSM2mzKd06KfNmOz6mK6+sfuLdYVjI1MKOpnE+O+hNEZmZ+zQp8hJz3uPL2twNJX";
        // script2.crossOrigin = "anonymous";
        // document.head.appendChild(script2);

        //bundle.min.js
        const script3 = document.createElement("script");
        script3.src = "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js";
        script3.integrity = "sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx";
        script3.crossOrigin = "anonymous";
        document.head.appendChild(script3);
    },
    computed: {
        getListCatatanLength() {
            let hasil = Math.ceil(this.listCatatanDosen.length / 12);
            return hasil;
        },
        paginatedItems() {
            this.scrollTop()
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.listCatatanDosen.slice(startIndex, endIndex);
        },
    },
    watch: {
        inputanCariCatatanDosen: {
            handler: async function (judul) {
                this.pesanError = "Sedang mencari catatan ... "
                //ambil data dari local storage
                let tempListCatatanDosen = await this.getFilteredCatatanDosen()

                //get kata kunci pencarian
                const kataKunciPencarian = judul.toLowerCase().trim();

                let hasilFilter = undefined
                // //lakukan filtering catatan berdasarkan kata kunci 
                if (tempListCatatanDosen != undefined) {
                    hasilFilter = tempListCatatanDosen.filter(catatan =>
                        catatan.judul.toLowerCase().includes(kataKunciPencarian) ||
                        catatan.agenda_perwalian.toLowerCase().includes(kataKunciPencarian)
                    );
                } else {
                    hasilFilter = []
                }

                if (hasilFilter.length > 0) { //filter ketemu
                    this.listCatatanDosen = hasilFilter
                    this.pesanError = "Berhasil menemukan " + hasilFilter.length + " data"
                } else { // filter tidak ketemu 
                    // this.listCatatanPerwalianDosen = tempListCatatanDosen
                    this.listCatatanDosen = []
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