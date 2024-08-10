<template lang="">
    <div>
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
                            <span class="material-symbols-outlined" style="color: #3c2a21">
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
                <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>
            </div>
        
            <div class="d-flex flex-column">
                <div class="container-fluid px-0 mb-xl-5 pb-xl-5 mb-sm-4">
                    <div id="judulCatatan">
                        <p>Edit Catatan Refleksi Dosen</p>
                    </div>
            
                    <div id="tambahCatatan" class="row pl-3 justify-content-center">

                    
                        <!-- bagian isi waktu nama judul -->
                        <div class="col-xl-4 col-sm-10 px-sm-3">
                            <div class="row pl-4">
                                <div class="col-12 mt-2 pl-0 mb-4">
                                    <p id="judulItemPerCatatan">Data Catatan</p>
                                </div>
            
                                <div class="col-12 mb-3 pl-2 mt-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="font-weight-bold ">Waktu</span>
                                        </div>
                                        <div class="col-9">
                                            <input id="inputKiri" type="text" readonly disabled class="myformControl" v-model="waktu">
                                        </div>
                                    </div>
                                </div>
            
            
                                <div class="col-12 mb-3 pl-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="mr-4 font-weight-bold">Judul</span>
                                        </div>
                                        <div class="col-9">
                                            <input id="inputJudulKonsul" type="text" class="dropdown-toggle" v-model="judul">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- bagian tambah peserta -->
                        <div class=" col-xl-3 col-sm-0 pl-0" id="cariTambahMahasiswa"></div>

                        <!-- bagian tipe perwalian -->
                        <div class="col-xl-3 col-sm-0 "></div>
                    </div>
                </div>

                <div class="d-flex justify-content-center">
                    <div id="inputanMultiline">
                        <div id="kolomInputan">
                            <div id="opsiCatatan" class="mx-xl-3 mx-sm-0 mt-1 d-flex">
                                <div class="px-0 col-xl-12 col-sm-12">
                                    <div class="row mt-sm-1">
                                        <div id="salinCatatan" class="offset-md-3 offset-xl-6 col-xl-2 offsest-sm-0 col-md-3 col-sm-4 d-flex justify-content-center" @click="this.showPopUpHapus(this.$route.params.id)">
                                            <p class="text-right m-0">
                                                <span class="material-symbols-outlined delete text-danger">
                                                    delete
                                                    </span>
                                                Hapus Catatan
                                            </p>
                                        </div>
                                        <div id="salinCatatan" class="col-xl-2 col-md-3 col-sm-4 d-flex justify-content-center" @click="this.showPopUpArsip(this.$route.params.id)">
                                            <p class="text-right m-0">
                                                <span class="material-symbols-outlined archive text-success">
                                                    archive
                                                    </span>
                                                Arsipkan Catatan
                                            </p>
                                        </div>
                                        <div id="salinCatatan" class="col-xl-2 col-md-3 col-sm-4 d-flex justify-content-center" @click="this.salinCatatan()">
                                            <p class="text-right m-0">
                                                <span class="material-symbols-outlined copy text-primary">
                                                    content_copy
                                                    </span>
                                                Salin Catatan
                                            </p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                            <textarea name="agendaPerwalian" id="agendaPerwalian" cols="160" rows="10" v-model="agendaPerwalian"></textarea>
                        </div>
            
                        <div id="buttonBatalSimpan" class="mt-3">
                            <div class="row d-flex justify-content-between">
                                <div class="col">
                                    <v-btn id="buttonBatal" type="submit" @click="this.batal()" >Batal</v-btn>

                                </div>
            
                                <div class="col d-flex justify-content-end mb-5">
                                    <v-btn id="buttonSimpan" :disabled="this.tombolTidakAktif" type="submit" @click="this.simpan()" >Simpan</v-btn>
                                </div>
                            </div>
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
                                <button class="btn batal" @click="arsipCatatanTidak()">Tidak</button>
                            </div>
                            <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                                <button class="btn simpan" @click="arsipCatatanYa()">Ya</button>
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
class Mahasiswa {
    constructor(nim, nama) {
        this.nim = nim;
        this.nama = nama;
    }
}

import BreadcrumbModule from './BreadcrumbModule.vue';
import axios from 'axios'

export default {
    name: "EditCatatanRefleksiDosen",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            data: "",
            kodeDosen: 0,
            judul: "",
            waktu: "",
            waktuAwal: "",
            waktuAkhir: "",
            agendaPerwalian: "",
            tombolTidakAktif: false,
            pesanSnackBar: "",
            namaDosen: localStorage.getItem("namaDosen"),
            idHapus: 0,
            idArsip: 0,
            showWarningHapus: false,
            showWarningArsip: false,

        }
    },
    created() {
        this.scrollTop();
        this.initData();
    },
    methods: {
        async initData() {
            this.kodeDosen = localStorage.getItem("kodeDosen")

            try {
                const response = await axios.get(process.env.VUE_APP_API_OPERASIONAL + `/getCatatanDosen/`, {
                    params: {
                        kode_dosen: this.kodeDosen,
                        id_catatan_dosen: this.$route.params.id,
                    },
                });

                if (response.data.error === false) {
                    this.data = response.data.response.list_catatan_dosen[0];
                } else {
                    this.data = [];
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
                this.data = [];
            }

            if (this.data != null) {
                this.waktu = this.convertTimestamp(this.data.waktu)
                this.waktuAwal = this.getWaktuSekarangTime()
                this.judul = this.data.judul
                this.agendaPerwalian = this.data.agenda_perwalian
                this.tipe = this.data.tipe
            }
        },
        snackbar() {
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () {
                x.className = x.className.replace("show", "");
            }, 3000);
        },
        addPeserta(nim, nama) {
            var newMahasiswa = new Mahasiswa(nim, nama);
            this.listMahasiswaPesertaLainnya.push(newMahasiswa);
        },
        deletePeserta(index) {
            this.listMahasiswaPesertaLainnya.splice(index, 1);
        },
        presensiHadir(index) {
            var myIndex = index - 1;
            this.listPresensi[myIndex].status = "Hadir";
        },
        presensiAbsen(index) {
            var myIndex = index - 1;
            this.listPresensi[myIndex].status = "Absen";
        },
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animasi smooth scrolling
            });
        },
        async simpan() {
            this.tombolTidakAktif = true
            this.waktuAkhir = this.getWaktuSekarangTime()
            if (!this.isFieldKosong()) {
                let paramObject = {
                    id_catatan_dosen: this.$route.params.id,
                    judul: this.judul,
                    waktu_awal: this.waktuAwal,
                    waktu_akhir: this.waktuAkhir,
                    agenda_perwalian: this.agendaPerwalian,
                }
                // console.log(paramObject);

                //update catatan mahasiswa ybs
                try {
                    const response = await axios.put(process.env.VUE_APP_API_OPERASIONAL + `/updateCatatanDosen/`, paramObject);

                    if (response.data.success) {
                        this.pesanSnackBar = "Berhasil memperbarui catatan"
                        this.snackbar()

                        const waktuTunggu = 2000;
                        setTimeout(() => {
                            this.$router.push("/daftar-catatan-dosen");
                        }, waktuTunggu);
                    } else {
                        this.pesanSnackBar = "Gagal memperbarui data"
                        this.snackbar()
                    }
                } catch (error) {
                    console.error("Terjadi kesalahan saat mengambil data:", error);
                }
            } else {
                this.pesanSnackBar = "Agenda perwalian atau judul tidak boleh kosong"
                this.snackbar()
            }
        },
        isFieldKosong() { //return true kalau fieldnya kosong
            return (
                this.judul == "" && this.agendaPerwalian == ""
            )
        },
        getWaktuSekarang() {
            const currentDate = new Date();
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes} WIB`;

            return formattedTime;
        },
        convertTimestamp(timestamp) {
            const date = new Date(timestamp);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('id-ID', options);
            return formattedDate;
        },
        getWaktuSekarangTime() {
            const waktu = new Date();

            // Mengambil nilai jam, menit, dan detik dari objek Date
            const jam = waktu.getHours();
            const menit = waktu.getMinutes();
            const detik = waktu.getSeconds();

            // Mengonversi nilai jam ke format 2 digit (misalnya: 10 menjadi "10")
            const jamDalamFormat = jam.toString().padStart(2, '0');
            const menitDalamFormat = menit.toString().padStart(2, '0');
            const detikDalamFormat = detik.toString().padStart(2, '0');

            // Menggabungkan nilai jam, menit, dan detik ke dalam format "10:00:00"
            const waktuSekarangWIB = `${jamDalamFormat}:${menitDalamFormat}:${detikDalamFormat}`;

            return waktuSekarangWIB;
        },
        logoutDosen() {
            localStorage.clear();
            this.$router.push("/login")
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
                            this.$router.push("/daftar-catatan-dosen")
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
                            this.$router.push("/daftar-catatan-dosen")
                        }, 2000);
                    }, 200);
                } else {
                    this.listMahasiswaPerwalianFiltered = [];
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
            }
        },
        salinCatatan() {
            // agendaPerwalian
            let copyGfGText = document.getElementById("agendaPerwalian");
            copyGfGText.select();
            document.execCommand("copy");

            const selection = window.getSelection();
            selection.removeAllRanges();

            this.pesanSnackBar = "Catatan disalin ke clipboard";
            this.snackbar()
        },
        batal() {
            this.$router.back()
        },
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
    }

}

</script>

<style scoped src="../../public/frontend/styling/editCatatanMahasiswa.css"></style>