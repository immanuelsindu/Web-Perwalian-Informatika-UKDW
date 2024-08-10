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
                                            <input id="inputKiri" type="text" class="myformControl" readonly v-model="waktu">
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
                        <div class=" col-xl-3 col-sm-0 pl-0" id="cariTambahMahasiswa">
                            
                        </div>

                        <!-- bagian tipe perwalian -->
                        <div class="col-xl-3 col-sm-0 ">
                            
                        
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-center">
                    <div id="inputanMultiline">
                        <div id="kolomInputan">
                            <div id="opsiCatatan" class="mx-xl-3 mx-sm-0 mt-1 d-flex">
                                <div class="px-0 col-xl-12 col-sm-12">
                                    <div class="row mt-sm-1">
                                        <div id="salinCatatan" class="offset-md-3 offset-xl-6 col-xl-2 offsest-sm-0 col-md-3 col-sm-4 d-flex justify-content-center">
                                            <p class="text-right m-0">
                                                <span class="material-symbols-outlined delete text-danger">
                                                    delete
                                                    </span>
                                                Hapus Catatan
                                            </p>
                                        </div>
                                        <div id="salinCatatan" class="col-xl-2 col-md-3 col-sm-4 d-flex justify-content-center">
                                            <p class="text-right m-0">
                                                <span class="material-symbols-outlined archive text-success">
                                                    archive
                                                    </span>
                                                Arsipkan Catatan
                                            </p>
                                        </div>
                                        <div id="salinCatatan" class="col-xl-2 col-md-3 col-sm-4 d-flex justify-content-center">
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
                                    <button id="buttonBatal" @click="batal()">Batal</button>
                                </div>
            
                                <div class="col d-flex justify-content-end mb-5">
                                    <button id="buttonSimpan" @click="simpan()">Simpan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
class PresensiMahasiswa {
    constructor(nama, nim, status) {
        this.nama = nama;
        this.nim = nim;
        this.status = status;
    }
}
import BreadcrumbModule from './BreadcrumbModule.vue';
import CatatanDosen from '@/myClass/catatanDosen';
export default {
    name: "EditCatatanRefleksiDosen",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            showSuggestionList: false,
            inputanNimMhs: '',
            data: "",
            listMahasiswa: [
                new Mahasiswa("71190422", "Christan Farel Pamungkas"),
                new Mahasiswa("71190427", "Gabriel Imanuel Tumakaka"),
                new Mahasiswa("71190434", "Harris Kurniadi Sumbogo"),
                new Mahasiswa("71190426", "Immanuel Sindu Kristian Pratama"),
                new Mahasiswa("71190523", "Revyn Pradana Putra"),
                new Mahasiswa("71190429", "Yohanes Vito Rizki Darujati"),
            ],
            listMahasiswaPesertaLainnya: [
                new Mahasiswa("71190001", "Mahasiswa A"),
                new Mahasiswa("71190002", "Mahasiswa B"),
                new Mahasiswa("71190003", "Mahasiswa C"),
            ],
            listPresensi: [
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama", "71190401", "Hadir"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama", "71190402", "Absen"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama", "71190403", "Absen"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama", "71190404", "Hadir"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama", "71190405", "Hadir"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama", "71190406", "Belum Presensi"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama", "71190407", "Belum Presensi"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama", "71190408", "Belum Presensi"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama", "71190409", "Belum Presensi"),
                new PresensiMahasiswa("Immanuel Sindu Kristian Pratama", "71190410", "Belum Presensi"),
            ]
        }
    },
    methods: {
        showSuggestions() {
            this.showSuggestionList = true;
        },
        hideSuggestions() {
            this.showSuggestionList = false;
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
        initData() {
            this.data = this.$store.getters.getItemCatatanDosen(this.$route.params.id)
            this.waktu = this.data.waktu
            this.judul = this.data.judul
            this.agendaPerwalian = this.data.agendaPerwalian
            this.tipe = this.data.tipe
        },
        simpan() {
            this.waktuAkhir = this.getWaktuSekarang()
            this.idCatatan = this.$route.params.id
            const catatanBaru = new CatatanDosen(
                this.idCatatan,
                this.judul,
                this.link,
                this.tipe,
                this.nim,
                this.nama,
                this.waktu,
                this.waktuAwal,
                this.waktuAkhir,
                this.agendaPerwalian,
                false,
            );
            // console.log(catatanBaru);
            this.$store.commit("updateCatatanDosen", catatanBaru)
            this.$router.push("/daftar-catatan-dosen")
        },
        getWaktuSekarang() {
            const currentDate = new Date();
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes} WIB`;

            return formattedTime;
        },

    },
    computed: {
        filteredList() {
            if (this.inputanNimMhs != '') {
                return this.listMahasiswa.filter(Mahasiswa => {
                    return Mahasiswa.nim.toLowerCase().includes(this.inputanNimMhs.toLowerCase())
                })
            }
            return [];
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
    },
    created() {
        this.scrollTop();
        this.initData();
    }

}

</script>

<style scoped src="../../public/frontend/styling/editCatatanMahasiswa.css"></style>