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
                <div class="container-fluid px-0 mb-xl-5 mb-sm-4">
                    <div id="judulCatatan">
                        <p>Tambah Catatan Angkatan</p>
                    </div>
            
                    <div id="tambahCatatan" class="row mx-5 mx-0 justify-content-center">
                        <!-- bagian isi waktu nama judul -->
                        <div class="col-lg-3 col-md-9 col-sm-9 my-sm-4 pl-0">
                            <div class="row">
                                <div class="col-12 mt-2 pl-0 mb-4">
                                    <span id="judulItemPerCatatan">Data Catatan</span>
                                </div>
            
                                
                                <div class="col-12 mb-3 pl-2 mt-2">
                                    <div class="row">
                                        <div class="col-3 align-self-center pl-2">
                                            <span class="font-weight-bold ">Waktu</span>
                                        </div>
                                        <div class="col-9">
                                            <input id="inputKiriAngkatan" type="text" class="myformControl" readonly v-model="waktu">
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-12 mb-3 pl-2">
                                    <div class="row">
                                        <div class="col-3 align-self-center pl-2">
                                            <Transition name="slide-fade" mode="out-in">
                                                <span class="font-weight-bold" readonly>Tahun Angkatan</span>
                                            </Transition>
                                        </div>
                                        <div class="col-9 align-self-center">          
                                            <input id="inputKiriAngkatan" type="text" readonly v-model="tahunAngkatan">
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-12 pl-2">
                                    <div class="row">
                                        <div class="col-3 align-self-center pl-2">
                                            <span class="mr-4 font-weight-bold">Judul</span>
                                        </div>
                                        <div class="col-9">
                                            <input id="inputJudulKonsulAngkatan" type="text" class="dropdown-toggle" placeholder="Masukan judul perwalian" v-model="judul">
                                            <button class="btn btn-secondary dropdown-toggle toggle2 " type="button" id="dropdownMenuButtonAngkatan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" @click="judul='Catatan Perwalian Pra-Registrasi'" href="#">Catatan Perwalian Pra-Registrasi</a>
                                                <a class="dropdown-item" @click="judul='Catatan Perwalian Pra-UTS'" href="#">Catatan Perwalian Pra-UTS</a>
                                                <a class="dropdown-item" @click="judul='Catatan Perwalian Pra-UAS'" href="#">Catatan Perwalian Pra-UAS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- bagian tipe perwalian -->
                        <div class="col-lg-4 col-md-9 col-sm-9 mb-sm-4 pl-0">
                          
                        </div>
        
                        <div class="col-lg-3 col-md-8 col-sm-9 mb-sm-4 px-sm-0" id="cariTambahMahasiswa">

                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center">
                <div id="inputanMultiline" >
                    <div id="kolomInputan" class="d-flex justify-content-center">
                        <textarea name="agendaPerwalian" id="agendaPerwalian" cols="160" rows="10" placeholder="Tulis agenda perwalian di sini" v-model="agendaPerwalian"></textarea>
                    </div>

                    <div id="containerPresensi" class="mt-5">
                        <div id="judulPresensi">
                            <p class="font-weight-bold">Presensi Perwalian Grup Angkatan</p>
                        </div>
                        <div id="presensiMahasiswa">
                            <div class="list-group">
                                <div v-for="(mahasiswa,index) in listPresensi" :key="mahasiswa.idCatatan" id="itemMahasiswa" class="list-group-item list-group-item-action d-flex flex-row align-items-center">
                                    <div class="col-xl-6 px-0">
                                        <p class="m-xl-0">{{index+=1}}. {{mahasiswa.nama}} / {{mahasiswa.nim}}</p>
                                    </div>
                                    <div class="col-xl-3 px-0">
                                        <button :class="{'btn btn-outline-danger btn-sm mr-xl-3': mahasiswa.status === 'Absen', 'btn btn-danger btn-sm mr-xl-3': mahasiswa.status !== 'Absen'}" @click="presensiAbsen(index)" :disabled="mahasiswa.status === 'Absen'">
                                            Absen
                                        </button>
                                        
                                        <button :class="{'btn btn-outline-success btn-sm': mahasiswa.status === 'Hadir', 'btn btn-success btn-sm': mahasiswa.status !== 'Hadir'}" @click="presensiHadir(index)" :disabled="mahasiswa.status === 'Hadir'">
                                            Hadir
                                        </button>
                                    </div>
                                    <div class="col-xl-3 ">
                                        <p v-if="mahasiswa.status==='Hadir'" class="m-xl-0"><b>Status</b> : <span class="text-success">{{mahasiswa.status}}</span></p>
                                        <p v-else-if="mahasiswa.status==='Absen'" class="m-xl-0"><b>Status</b> : <span class="text-danger">{{mahasiswa.status}}</span></p>
                                        <p v-else class="m-xl-0"><b>Status</b> : <span class="text-dark">{{mahasiswa.status}}</span></p>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div id="buttonBatalSimpan" class="mt-3">
                        <div class="row justify-content-between">
                            <div class="col-xl-6 col-sm-6">
                                <button id="buttonBatal" @click="batal()">Batal</button>
                            </div>

                            <div class="col-xl-6 col-sm-6 d-flex justify-content-end mb-5">
                                <button id="buttonSimpan" @click="simpan()">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import BreadcrumbModule from './BreadcrumbModule.vue';
import CatatanPerwalianDosen from "@/myClass/catatanPerwalianDosen.js"

export default {
    name: "TambahCatatanAngkatan",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            idCatatan: "",
            judul: "",
            link: "2",
            tipe: "grup-angkatan", //temp
            nim: "",
            nama: "",
            waktu: "",
            namaOrangTua: "",
            agendaPerwalian: "",
            tambahPeserta: "",
            tahunAngkatan: "",
            waktuAwal: "",
            waktuAkhir: "", //temp
            listPresensi: []
        }
    },
    methods: {
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
            }
            )
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
        getWaktuSekarang() {
            const currentDate = new Date();
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes} WIB`;

            return formattedTime;
        },
        simpan() {
            this.waktuAkhir = this.getWaktuSekarang();
            this.idCatatan = this.$store.getters.getLastIdCatatanPerwalianDosen.toString();
            this.$store.commit("setLastIdCatatanPerwalianDosen")
            const catatanBaru = new CatatanPerwalianDosen(
                this.idCatatan,
                this.judul,
                this.tipe,
                this.nim,
                this.nama,
                this.waktu,
                this.namaOrangTua,
                this.agendaPerwalian,
                this.tambahPeserta,
                this.tahunAngkatan,
                this.waktuAwal,
                this.waktuAkhir,
                { data: this.listPresensi },
                false
            );
            console.log(catatanBaru);
            this.$store.commit("tambahCatatanPerwalianDosen", catatanBaru)
            // this.$router.push("daftar-catatan-perwalian-angkatan")
            this.$router.push({ name: 'DaftarCatatanPerwalianAngkatan', params: { id: 2017 } })
        },
        batal() {
            this.$router.back()
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
        this.scrollTop();
        this.waktu = this.getTanggalSekarang();
        this.waktuAwal = this.getWaktuSekarang();
        this.tahunAngkatan = this.$route.params.id
        this.listPresensi = this.$store.getters.getTemplateListPresensiAngkatan(this.$route.params.id)["data"]
    }

}
</script>

<style scoped src="../../public/frontend/styling/tambahCatatan.css"></style>