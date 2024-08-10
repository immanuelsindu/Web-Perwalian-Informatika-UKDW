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


            <div id="judulProfil">
                <p>Profil Lulusan Prodi Informatika</p>
            </div>

            <div class="container">
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

                <div class="row mx-5 mb-5">
                    <div v-for="(index) in 4" :key="index" id="itemProfil" class="col-xl-6 col-sm-12 pt-3">
                        <!-- judul profil -->
                        <p id="judulProfilMhs" class="mb-2">{{ this.profil[index - 1][0] }}</p>
                        <div id="listMatkul" class="row">
                            <div class="col-7 pr-0">
                                <p>
                                    Mata Kuliah Wajib Profil
                                    <span id="status" class="ml-4">
                                        <!-- jumlah ambil matakuliah  -->
                                        {{ this.listTotalMataKuliahProfilDiambil[index - 1] }} / {{ this.profil[index -
                                            1][1]
                                        }}
                                    </span>
                                </p>

                                <ol>
                                    <!-- list mata kuliah wajib profil  -->
                                    <li v-for="(index2) in this.listMataKuliahWajibProfil[index - 1].length" :key="index2">
                                        {{ this.listMataKuliahWajibProfil[index - 1][index2 - 1][0] }}
                                        ({{ this.listMataKuliahWajibProfil[index - 1][index2 - 1][1] }})
                                        <span
                                            v-if="this.isAmbilMataKuliahProfil(this.listMataKuliahWajibProfil[index - 1][index2 - 1])"
                                            id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                </ol>
                            </div>
                            <div class="col-5 p-0">
                                <p>
                                    Mata Kuliah Opsional
                                    <span id="status" class="ml-4">
                                        {{ this.listTotalMataKuliahOpsionalProfilDiambil[index - 1] }} / {{
                                            this.profil[index
                                            - 1][2] }}
                                    </span>
                                </p>

                                <ul>
                                    <!-- list mata kuliah opsional  -->
                                    <li v-for="(index3) in this.listMataKuliahOpsionalProfil[index - 1].length"
                                        :key="index3">
                                        {{ this.listMataKuliahOpsionalProfil[index - 1][index3 - 1][0] }}
                                        ({{ this.listMataKuliahOpsionalProfil[index - 1][index3 - 1][1] }})
                                        <span
                                            v-if="this.isAmbilMataKuliahOpsional(this.listMataKuliahOpsionalProfil[index - 1][index3 - 1])"
                                            id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                </ul>
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
import axios from 'axios'

export default {
    name: "ProfilMahasiswa",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            kodeDosen: "",
            namaMahasiswa: "",
            profil: [
                //profil, jumlah matakuliah wajib, jumlah matakuliah opsional
                ["Programming and Software Development", 5, 5],
                ["Artificial Intelligence", 4, 9],
                ["Database Management System", 5, 5],
                ["Network and Infrastructure", 4, 4],
            ],
            ///////////////////////// MATA KULIAH WAJIB PROFIL ////////////////////////////////
            //urut profil UIUX, ISD, DA, NSS
            mataKuliahUIUX: [
                ["Pola Desain Antar Pengguna", "3 SKS"],
                ["Desain Eksperimental", "3 SKS"],
                ["Desain Dan Evaluasi Antarmuka", "3 SKS"],
                ["Pemodelan Proses Bisnis", "3 SKS"],
                ["Test Engineering", "3 SKS"],
            ],
            mataKuliahISD: [
                ["Internet of Things", "3 SKS"],
                ["Machine Learning", "3 SKS"],
                ["Jaringan Syaraf Tiruan", "3 SKS"],
                ["Knowledge-Based System", "3 SKS"],
            ],
            mataKuliahDA: [
                ["Administrasi Basis Data", "3 SKS"],
                ["Data Warehouse", "3 SKS"],
                ["Basis Data Terdistribusi", "3 SKS"],
                ["Keamanan Basis Data", "3 SKS"],
                ["Administrasi Basis Data Non Relasional", "3 SKS"],
            ],
            mataKuliahNSS: [
                ["Enterprise Network", "3 SKS"],
                ["Cloud Infrastructure", "3 SKS"],
                ["Pengantar Keamanan Jaringan", "3 SKS"],
                ["Jaringan Nir Kabel", "3 SKS"],
            ],
            listMataKuliahWajibProfil: [],
            /////////////////////////// MATA KULIAH OPSIONAL PROFIL  //////////////////////////////////////
            //opsional UIUX & DA 
            matakuliahOpsional_UIUX_DA: [
                ["Pemrograman Perangkat Bergerak Android", "3 SKS"],
                ["Pemrograman Perangkat Bergerak iOS", "3 SKS"],
                ["Pemrograman Perangkat Bergerak Hybrid", "3 SKS"],
                ["Pemrograman Desktop", "3 SKS"],
                ["Pemrograman Web Lanjut", "3 SKS"],
            ],
            //opsional NSS 
            matakuliahOpsional_NSS: [
                ["Otomasi Jaringan", "3 SKS"],
                ["Teknologi WAN", "3 SKS"],
                ["Keamanan Jaringan", "3 SKS"],
                ["Internet of Things", "3 SKS"]
            ],
            //opsional ISD 
            matakuliahOpsional_ISD: [
                ["Pemrosesan Bahasa Natural", "3 SKS"],
                ["Pemrosesan Citra Digital", "3 SKS"],
                ["Pemrosesan Sinyal Digital", "3 SKS"],
                ["Game Engine", "3 SKS"],
                ["Pemrograman Perangkat Bergerak Android", "3 SKS"],
                ["Pemrograman Perangkat Bergerak iOS", "3 SKS"],
                ["Pemrograman Perangkat Bergerak Hybrid", "3 SKS"],
                ["Pemrograman Desktop", "3 SKS"],
                ["Pemrograman Web Lanjut", "3 SKS"],
            ],
            listMataKuliahOpsionalProfil: [],
            listMataKuliahMahasiswa: [],
            mapMatakuliahWajibMahasiswa: [
                [], [], [], []
            ],
            mapMatakuliahOpsionalMahasiswa: [
                [], [], [], []
            ],
            //urut profil UIUX, ISD, DA, NSS
            listTotalMataKuliahProfilDiambil: [0, 0, 0, 0],
            listTotalMataKuliahOpsionalProfilDiambil: [0, 0, 0, 0],
            namaDosen: localStorage.getItem("namaDosen")

        }
    },
    created() {
        this.scrollTop()
        this.initData()
    },
    methods: {
        async initData() {
            this.kodeDosen = localStorage.getItem("kodeDosen")
            this.getNamaMahasiswa()
            await this.loadData()

            await this.getListMataKuliah()

        },
        // untuk perulangan di v-For doms
        async loadData() {
            // this.listMataKuliahWajibProfil = [mataKuliahUIUX, mataKuliahISD, mataKuliahDA, mataKuliahNSS]
            //urut profil UIUX, ISD, DA, NSS
            this.listMataKuliahWajibProfil.push(this.mataKuliahUIUX)
            this.listMataKuliahWajibProfil.push(this.mataKuliahISD)
            this.listMataKuliahWajibProfil.push(this.mataKuliahDA)
            this.listMataKuliahWajibProfil.push(this.mataKuliahNSS)

            // this.listMataKuliahOpsionalProfil = [matakuliahOpsional_UIUX_DA, matakuliahOpsional_ISD, matakuliahOpsional_UIUX_DA, matakuliahOpsional_NSS]
            this.listMataKuliahOpsionalProfil.push(this.matakuliahOpsional_UIUX_DA)
            this.listMataKuliahOpsionalProfil.push(this.matakuliahOpsional_ISD)
            this.listMataKuliahOpsionalProfil.push(this.matakuliahOpsional_UIUX_DA)
            this.listMataKuliahOpsionalProfil.push(this.matakuliahOpsional_NSS)
        },
        async getListMataKuliah() {
            //get list mata kuliah mahasiswa 
            try {
                const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/matakuliahMahasiswa/`, {
                    params: {
                        nim: this.$route.params.id
                    },
                });

                if (response.data.error === false) {
                    this.listMataKuliahMahasiswa = response.data.response.data_matakuliah
                    this.filterProfilMataKuliah()

                } else {
                    this.listMataKuliahMahasiswa = [];
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
                this.listMataKuliahMahasiswa = [];
            }


        },
        async filterProfilMataKuliah() {
            for (let i = 0; i < this.listMataKuliahMahasiswa.length; i++) {
                const matkul = this.listMataKuliahMahasiswa[i]
                // mata kuliah wajib profil 
                // cek UI UX
                // mataKuliahUIUX.some(item => item[0] === "Desain Eksperimental");
                if (this.mataKuliahUIUX.some(item => item[0] === matkul)) {
                    this.listTotalMataKuliahProfilDiambil[0] += 1
                    this.mapMatakuliahWajibMahasiswa[0].push(matkul)
                }
                //cek ISD
                else if (this.mataKuliahISD.some(item => item[0] === matkul)) {
                    this.listTotalMataKuliahProfilDiambil[1] += 1
                    this.mapMatakuliahWajibMahasiswa[1].push(matkul)
                }
                //cek DA
                else if (this.mataKuliahDA.some(item => item[0] === matkul)) {
                    this.listTotalMataKuliahProfilDiambil[2] += 1
                    this.mapMatakuliahWajibMahasiswa[2].push(matkul)
                }
                //cek NSS
                else if (this.mataKuliahNSS.some(item => item[0] === matkul)) {
                    this.listTotalMataKuliahProfilDiambil[3] += 1
                    this.mapMatakuliahWajibMahasiswa[3].push(matkul)
                }

                // mata kuliah opsional profil , ururtan profil = UIUX, ISD, DA, NSS
                const listMatkulOpsionalYangSama = [
                    "Pemrograman Perangkat Bergerak Android",
                    "Pemrograman Perangkat Bergerak iOS",
                    "Pemrograman Perangkat Bergerak Hybrid",
                ]
                //////////////// OPSIONAL ///////////////////
                //urut profil UIUX, ISD, DA, NSS
                // UI UX dan DA
                if (this.matakuliahOpsional_UIUX_DA.some(item => item[0] === matkul)) {
                    // karena mata kuliah opsionalnya 
                    this.listTotalMataKuliahOpsionalProfilDiambil[0] += 1 // UIUX
                    this.listTotalMataKuliahOpsionalProfilDiambil[2] += 1 // DA

                    // karena matakuliah UI UX & DA ada yang sama dengan ISD
                    this.listTotalMataKuliahOpsionalProfilDiambil[1] += 1 // ISD 

                    if (listMatkulOpsionalYangSama.some(item => item[0] === matkul)) {
                        this.mapMatakuliahOpsionalMahasiswa[0].push(matkul) //UIUX
                        this.mapMatakuliahOpsionalMahasiswa[2].push(matkul) //DA
                        this.mapMatakuliahOpsionalMahasiswa[1].push(matkul) // ISD
                    } else {
                        this.mapMatakuliahOpsionalMahasiswa[0].push(matkul) //UIUX
                        this.mapMatakuliahOpsionalMahasiswa[2].push(matkul) //DA
                    }
                    // cek ISD
                } else if (this.matakuliahOpsional_ISD.some(item => item[0] === matkul)) {
                    this.listTotalMataKuliahOpsionalProfilDiambil[1] += 1
                    this.mapMatakuliahOpsionalMahasiswa[1].push(matkul) // ISD
                    //cek NSS
                } else if (this.matakuliahOpsional_NSS.some(item => item[0] === matkul)) {
                    this.listTotalMataKuliahOpsionalProfilDiambil[3] += 1
                    this.mapMatakuliahOpsionalMahasiswa[3].push(matkul) // ISD
                }
            }
        },
        isAmbilMataKuliahProfil(matkul) {
            for (const sublist of this.mapMatakuliahWajibMahasiswa) {
                if (sublist.includes(matkul[0])) {
                    return true
                }
            }
        },
        isAmbilMataKuliahOpsional(matkul) {
            for (const sublist of this.mapMatakuliahOpsionalMahasiswa) {
                if (sublist.includes(matkul[0])) {
                    return true
                }
            }
        },
        async getNamaMahasiswa() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/searchMahasiswa/`, {
                    params: {
                        kode_dosen: this.kodeDosen,
                        inputan: this.$route.params.id,
                    },
                });

                if (response.data.error === false) {
                    this.namaMahasiswa = response.data.response.list_mahasiswa[0].nama;
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

        import('bootstrap');
        import('bootstrap/dist/css/bootstrap.min.css');
    },


}

</script>

<style scoped src="../../public/frontend/styling/profilMahasiswa.css"></style>