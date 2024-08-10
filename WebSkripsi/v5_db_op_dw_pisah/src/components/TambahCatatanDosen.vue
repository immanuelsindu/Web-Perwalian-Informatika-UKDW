<template>
<div>

    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
    </head>

    <!-- Navbar -->
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

    <!-- Content -->
    <div id="content" class="container-fluid px-0">
        <div class="col-12 mt-4">
            <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>

        </div>

        <div class="d-flex flex-column">
            <div class="container-fluid px-0 mb-xl-1 mb-sm-1">
                <div id="judulCatatan">
                    <p class="mb-5">Tambah Catatan Dosen</p>
                </div>

                <div id="tambahCatatan" class="row  pl-3 mx-0 justify-content-center">
                    <!-- bagian Tipe perwalian -->
                    <div class="col-lg-3 col-md-9 col-sm-9 my-sm-4">
                        <div class="row">
                            <div class="col-12 pl-0 mb-2">
                                <span id="judulItemPerCatatan">Tipe Perwalian</span>
                            </div>
    
                            <div id="opsiTipePerwalian" class="pl-1">
                                <div class="col-12  mb-1 d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" value="refleksi-dosen" id="flexRadioDefault1" v-model="tipe" :checked="tipe === 'refleksi-dosen' ? true : false">
                                    <label class="form-check-label ml-2 pt-1" for="flexRadioDefault1">
                                        Refleksi Dosen
                                    </label>
                                </div>
    
                                <div class="col-12 mb-1 d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" value="khusus" id="flexRadioDefault2" v-model="tipe">
                                    <label class="form-check-label ml-2 pt-1" for="flexRadioDefault2">
                                        Khusus
                                    </label>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                    <!-- bagian isi waktu nama judul -->
                    <div class="col-lg-4 col-md-9 col-sm-9 mb-sm-1 pl-0">
                        <div class="row ml-sm-1 mb-3">
                            <div class="col-12 mt-4 pl-0 mb-2">
                                <span id="judulItemPerCatatan">Data Catatan</span>
                            </div>
    
                            <!-- inputan waktu  -->
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
    
                            <div class="col-12 pl-2">
                                <!-- inputan peserta -->
                                <transition>
                                    <div v-if="tipe == 'khusus'" class="row mb-3">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="font-weight-bold">Nama</span>
                                        </div>
                                        <div class="d-flex col-9 align-self-center">
                                            <input id="inputKiri" type="text" placeholder="Masukan nama peserta" v-model="labelKolomNama">
    
                                            <div class="d-flex align-self-center ml-2">
                                                <v-icon size="default" color="grey-darken-1">
                                                    mdi-information-outline
                                                </v-icon>
                                                <v-tooltip activator="parent" content-class="bg-grey-darken-1" max-width="300" location="right">Jika peserta adalah mahasiswa UKDW,
                                                    masukkan nama dan nim. Contoh "Nama Mahasiswa / 71190001". Jika bukan,
                                                    cukup masukkan nama
                                                    peserta saja seperti "Andy Febriyanto".
                                                </v-tooltip>
                                            </div>

                                            <div v-if="this.listCariMahasiswa.length > 0" id="hoverCariPeserta" class="mt-5 pt-2">
                                                <ul class="list-group">
                                                    <li v-for="(mahasiswa, index) in this.listCariMahasiswa" :key="index" class="list-group-item py-2" @click="selectedIndex(mahasiswa)">
                                                        {{ mahasiswa.nama }} / {{ mahasiswa.nim }}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div v-else-if="this.handlingInputCariNama" id="hoverCariPeserta" class="mt-5 pt-2 py-4 text-center">
                                                <ul class="list-group">
                                                    <li class="list-group-item py-2">
                                                        Mahasiswa yang dicari tidak ditemukan
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
    
                            </div>
    
                            <div class="col-12 pl-2">
                                <div class="row">
                                    <div class="col-2 align-self-center pl-2">
                                        <span class="mr-4 font-weight-bold">Judul</span>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" class="inputJudulKonsul dropdown-toggle" placeholder="Masukan judul perwalian" v-model="judul">
                                    </div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    
                    <!-- bagian tambah peserta -->
                    <div class="col-lg-3 col-md-8 col-sm-9 mb-sm-4 px-sm-0" id="cariTambahMahasiswa">
    
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center">
            <div id="inputanMultiline">
                <div id="kolomInputan" class="d-flex justify-content-center">
                    <textarea name="agendaPerwalian" id="agendaPerwalian" cols="160" rows="10" placeholder="Tulis agenda perwalian di sini" v-model="agendaPerwalian"></textarea>
                </div>

                <div id="buttonBatalSimpan2" class="mt-3">
                    <div class="row justify-content-between">
                        <div class="col-xl-6 col-sm-6">
                            <v-btn type="submit" id="buttonBatal" @click="this.batal()">Batal</v-btn>
                        </div>

                        <div class="col-xl-6 col-sm-6 d-flex justify-content-end mb-5">
                            <v-btn type="submit" :disabled="this.tombolTidakAktif" id="buttonSimpan" @click="this.simpan()">Simpan</v-btn>
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
import BreadcrumbModule from './BreadcrumbModule.vue';
import axios from 'axios'

export default {
    name: "TambahCatatanDosen",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            //variabel untuk tambah catatan  
            idCatatan: null,
            waktu: null,
            waktuAwal: null,
            waktuAkhir: null,
            judul: null,
            link: "2",
            agendaPerwalian: null,
            //variabel untuk DOMS
            myPlaceholder: "Masukan nama peserta",
            ////////////////////////////////////////////////////////////////////////////
            tombolTidakAktif: false,
            kodeDosen: null,
            pesanSnackBar: null,
            nim: null,
            nama: null,
            tipe: "refleksi-dosen",
            listCariMahasiswa: [],
            labelKolomNama: "",
            namaDosen: localStorage.getItem("namaDosen")

        }
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
    },
    created() {
        this.scrollTop()
        this.initData()
    },
    methods: {
        initData() {
            this.waktu = this.getTanggalSekarang();
            this.waktuAwal = this.getWaktuSekarang();

            this.kodeDosen = localStorage.getItem("kodeDosen")
        },
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animasi smooth scrolling
            });
        },
        getTanggalSekarang() {
            const months = [
                'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
            ];

            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth();
            const year = currentDate.getFullYear();

            const formattedDate = day + ' ' + months[month] + ' ' + year;

            return formattedDate;
        },
        async simpan() {
            this.tombolTidakAktif = true
            this.waktuAkhir = this.getWaktuSekarang()

            if (!this.isFieldKosong()) {
                const paramObject = {
                    kode_dosen: this.kodeDosen,
                    judul: this.judul,
                    tipe: this.tipe,
                    nim: this.nim,
                    nama: this.nama,
                    waktu_awal: this.waktuAwal,
                    waktu_akhir: this.waktuAkhir,
                    agenda_perwalian: this.agendaPerwalian,
                }

                try {
                    const response = await axios.post(process.env.VUE_APP_API_OPERASIONAL + `/tambahCatatanDosen/`, paramObject);
                    if (response.data.success) {
                        this.pesanSnackBar = "Berhasil menambahkan catatan"
                        this.snackbar()

                        const waktuTunggu = 2000;
                        setTimeout(() => {
                            this.$router.push("/daftar-catatan-dosen");
                        }, waktuTunggu);
                    } else {
                        this.pesanSnackBar = "Gagal menambahkan data"
                        this.snackbar()

                        console.error("Data gagal ditambahkan ", error);
                    }

                } catch (error) {
                    console.error("Terjadi kesalahan saat mengambil data:", error);
                    this.listMahasiswaPerwalianFiltered = [];
                }
            } else {
                this.pesanSnackBar = "Pastikan semua kolom sudah terisi"
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
        isFieldKosong() { // true jika ada field yang kosong
            if (this.tipe == 'refleksi-dosen') {
                return (
                    this.judul == null || this.agendaPerwalian == null
                )
            } else {
                return (this.judul == null || this.agendaPerwalian == null || this.nama == null)
            }
        },
        getWaktuSekarang() {
            const now = new Date();
            const jam = now.getHours().toString().padStart(2, '0');
            const menit = now.getMinutes().toString().padStart(2, '0');
            const detik = now.getSeconds().toString().padStart(2, '0');

            return `${jam}:${menit}:${detik}`;
        },
        batal() {
            this.$router.back()
        },
        async searchNamaMahasiswa() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/searchMahasiswaKhusus/`, {
                    params: {
                        inputan: this.labelKolomNama.toLocaleLowerCase()
                    },
                });

                if (response.data.error === false) {
                    this.listCariMahasiswa = response.data.response.list_mahasiswa;
                } else {
                    this.listCariMahasiswa = [];
                }
            } catch (error) {
                this.listCariMahasiswa = [];
            }
        },
        selectedIndex(mahasiswa) {
            this.labelKolomNama = mahasiswa.nama + " / " + mahasiswa.nim
            this.nama = mahasiswa.nama
            this.nim = mahasiswa.nim
        },
        logoutDosen() {
            localStorage.clear();
            this.$router.push("/login")
        }
    },
    computed: {
        handlingInputCariNama() {
            if (!this.labelKolomNama.includes("/") && this.listCariMahasiswa.length == 0 && this.labelKolomNama != '') {
                return true
            } else {
                return false
            }
        }
    },
    watch: {
        labelKolomNama: {
            handler: function (newVal) {
                if (newVal != '') {
                    this.searchNamaMahasiswa()
                } else {
                    this.listCariMahasiswa = [];
                }
            }
        }
    }
}
</script>

<style scoped src="../../public/frontend/styling/tambahCatatan.css"></style>
