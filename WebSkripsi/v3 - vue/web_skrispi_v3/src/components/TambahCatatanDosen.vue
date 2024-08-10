<template >
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

            <div class="container-fluid px-0 mb-xl-5 mb-sm-4">
                <div id="judulCatatan">
                    <p class="mb-5">Tambah Catatan Dosen</p>
                </div>

                <div id="tambahCatatan" class="row  pl-3 mx-0 justify-content-center">
                    <!-- bagian Tipe perwalian -->
                    <div class="col-lg-3 col-md-9 col-sm-9 my-sm-4">
                        <div class="row">
                            <div class="col-12 mt-2 pl-0 mb-4">
                                <span id="judulItemPerCatatan">Tipe Perwalian</span>
                            </div>

                            <div id="opsiTipePerwalian" class="ml-2">
                                <div class="col-12  mb-1 d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        value="refleksi-dosen" id="flexRadioDefault1" v-model="tipe"
                                        :checked="tipe === 'refleksi-dosen' ? true : false">
                                    <label class="form-check-label ml-2 pt-1" for="flexRadioDefault1">
                                        Refleksi Dosen
                                    </label>
                                </div>

                                <div class="col-12 mb-1 d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" value="khusus"
                                        id="flexRadioDefault2" v-model="tipe">
                                    <label class="form-check-label ml-2 pt-1" for="flexRadioDefault2">
                                        Khusus
                                    </label>
                                </div>


                            </div>
                        </div>
                    </div>

                    <!-- bagian isi waktu nama judul -->
                    <div class="col-lg-4 col-md-9 col-sm-9 mb-sm-4 pl-0">
                        <div class="row">
                            <div class="col-12 mt-2 pl-0 mb-4">
                                <span id="judulItemPerCatatan">Data Catatan</span>
                            </div>

                            <!-- inputan waktu  -->
                            <div class="col-12 mb-3 pl-2 mt-2">
                                <div class="row">
                                    <div class="col-2 align-self-center pl-2">
                                        <span class="font-weight-bold ">Waktu</span>
                                    </div>
                                    <div class="col-9">
                                        <input id="inputKiri" type="text" readonly class="myformControl" v-model="waktu">
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 pl-2">
                                <!-- inputan peserta -->
                                <transition>
                                    <div v-if="tipe == 'khusus'" class="row mb-3">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="font-weight-bold" :key="inputanNama">Nama</span>
                                        </div>
                                        <div class="col-9 align-self-center">
                                            <input id="inputKiri" type="text" placeholder="Masukan nama peserta">
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
                                        <input type="text" class="inputJudulKonsul dropdown-toggle"
                                            placeholder="Masukan judul perwalian" v-model="judul">
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

            <div class="d-flex justify-content-center">
                <div id="inputanMultiline">
                    <div id="kolomInputan" class="d-flex justify-content-center">
                        <textarea name="agendaPerwalian" id="agendaPerwalian" cols="160" rows="10"
                            placeholder="Tulis agenda perwalian di sini" v-model="agendaPerwalian"></textarea>
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
import CatatanDosen from '@/myClass/catatanDosen';
export default {
    name: "TambahCatatanDosen",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            //variabel untuk tambah catatan  
            idCatatan: "",
            waktu: "",
            waktuAwal: "",
            waktuAkhir: "",
            judul: "",
            link: "2",
            tipe: "refleksi-dosen",
            nim: "",
            nama: "",
            agendaPerwalian: "",


            //variabel untuk DOMS

            myPlaceholder: "Masukan nama peserta",
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
    methods: {
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
        simpan() {

            this.waktuAkhir = this.getWaktuSekarang()
            this.idCatatan = this.$store.getters.getLastIdCatatanDosen.toString();
            this.$store.commit("setLastIdCatatanDosen")

            const catatanBaru = new CatatanDosen(
                this.idCatatan,
                this.judul,
                this.tipe,
                this.nim,
                this.nama,
                this.waktu,
                this.waktuAwal,
                this.waktuAkhir,
                this.agendaPerwalian,
                false
            );
            // console.log(catatanBaru);
            this.$store.commit("tambahCatatanDosen", catatanBaru)
            // console.log(this.$store.getters.getListCatatanDosen);
            this.$router.push("/daftar-catatan-dosen")
        },
        getWaktuSekarang() {
            const currentDate = new Date();
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes} WIB`;

            return formattedTime;
        },
        batal() {
            this.$router.back()
        }
    },
    created() {
        this.scrollTop();
        this.waktu = this.getTanggalSekarang();
        this.waktuAwal = this.getWaktuSekarang();
    }
}
</script>

<style scoped src="../../public/frontend/styling/tambahCatatan.css"></style>