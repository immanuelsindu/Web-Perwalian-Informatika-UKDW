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

                    <div id="judulWeb" class="m-0">
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


            <div class="container">
                <div id="judulYudisium">
                    <p>Yudisium</p>
                </div>

                <div id="namaMahasiswa" class="ml-5 mt-5">
                    <div class="row ml-3">
                        <div id="dataMahasiswa" class="align-self-center col-6 px-0">
                            <p class="d-flex align-items-center">
                                <span class="material-symbols-outlined accCirlcle mr-2">
                                    account_circle
                                </span>
                                {{ this.namaMahasiswa }} / {{ this.$route.params.id }}
                            </p>
                        </div>
                    </div>
                </div>

                <div id="aturanUmum" class="ml-5 mt-1 mb-5">
                    <p class="ml-3 mt-4 ">Aturan Umum</p>
                    <div class="ml-4 mb-3">
                        <div class="col-3 d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" checked onclick="return false;">
                            <label class="form-check-label" for="flexCheckChecked">Wajib memenuhi aturan</label>
                        </div>
                        <div class="col-11">
                            <p class="pl-4">
                                Bagi mahasiswa Angkatan 2019 wajib memenuhi Mata Kuliah Pilihan Wajib Profil (MKPWP) dengan
                                kententuan jumlah SKS >= 6 SKS atau setara dengan 2 mata kuliah (jika per mata kuliah adalah
                                3 SKS). Untuk lebih lengkapnya, dapat dilihat pada halaman profil profesional mandiri .
                                <span id="checklist" class="material-symbols-outlined align-text-bottom">
                                    done
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="ml-4 mb-3">
                        <div class="col-3 d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  onclick="return false;">
                            <label class="form-check-label" for="flexCheckChecked">
                                Prosedur pendaftaran Yudisium
                            </label>

                        </div>
                        <div class="col-11">
                            <ol id="listPendaftaranYudisium">
                                <li>Mahasiswa mengajukan permohonan yudisium melalui aplikasi Yudisium
                                    <span id="checklist" class="material-symbols-outlined align-text-bottom">
                                        done
                                    </span>
                                </li>
                                <li>
                                    Mahasiswa melengkapi berkas-berkas persyaratan yudisium melalui aplikasi Yudisium.
                                    <span id="checklist" class="material-symbols-outlined align-text-bottom">
                                        done
                                    </span>
                                </li>
                                <li>
                                    Mahasiswa berkoordinasi dengan administrasi FTI terkait persyaratan dari Prodi
                                    Informatika.
                                    <span id="checklist" class="material-symbols-outlined align-text-bottom">
                                        done
                                    </span>
                                </li>
                                <li>
                                    Setiap unit (Biro 2, Biro 3, Perpustakaan, PPB, Prodi Informatika) melakukan
                                    validasi lewat aplikasi Yudisium.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div class="ml-4 mb-3">
                        <div class="col-3 d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  onclick="return false;">
                            <label class="form-check-label" for="flexCheckChecked">
                                Berkas Yudisium
                            </label>

                        </div>
                        <div class="col-11">
                            <ol>
                                <li>Lembar persetujuan revisi laporan Skripsi</li>
                                <li>Lembar pengesahan laporan Skripsi</li>
                                <li>Ceklist mata kuliah Prodi Informatika</li>
                                <li>Bebas pinjaman dari Biro 2</li>
                                <li>Bebas pinjaman dari Biro 3</li>
                                <li>Memenuhi poin keaktivan(5) yang disyaratkan bidang kemahasiswaan (WD3 dan
                                    Biro 3)</li>
                                <li>Mengunggah laporan dan program ke aplikasi SINTA (Perpustakaan)</li>
                                <li>Lulus program ICE (Introduction to College English) (PPB)</li>
                                <li>Mengumpulkan artikel jurnal Skripsi ke Lab FTI UKDW atau FTI</li>
                                <li>Melakukan pembayaran Yudisium (Prodi / FTI)</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<script>
import BreadcrumbModule from './BreadcrumbModule.vue';
import axios from 'axios'

export default {
    name: "DetailYudisium",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            namaDosen: localStorage.getItem("namaDosen"),
            namaMahasiswa: "",
            kodeDosen: "",
        }
    },
    mounted() {
        //css link
        // const link = document.createElement('link');
        // link.rel = 'stylesheet';
        // link.href = '../../public/frontend/styling/detailYudisium.css';
        // document.head.appendChild(link);


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
        async initData() {
            this.kodeDosen = localStorage.getItem("kodeDosen")

            try {
                const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/searchMahasiswa/`, {
                    params: {
                        kode_dosen: this.kodeDosen,
                        inputan: this.$route.params.id,
                    },
                });

                if (response.data.error === false) {
                    this.namaMahasiswa = response.data.response.list_mahasiswa[0].nama;
                    console.log(this.namaMahasiswa);
                } else {
                    this.namaMahasiswa = [];
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
                this.namaMahasiswa = [];
            }
        },
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animasi smooth scrolling
            });
        },
        logoutDosen() {
            localStorage.clear();
            this.$router.push("/login")
        }
    },


}
</script>

<style scoped src="../../public/frontend/styling/detailYudisium.css"></style>