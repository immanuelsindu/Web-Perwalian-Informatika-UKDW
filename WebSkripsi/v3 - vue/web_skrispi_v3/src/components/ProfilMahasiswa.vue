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


            <div id="judulProfil">
                <p>Profil Profesional Mandiri</p>
            </div>

            <div class="container">
                <div id="namaMahasiswa" class="ml-5 mt-5">
                    <div class="row ml-3">
                        <div id="dataMahasiswa" class="align-self-center col-6 px-0">
                            <p class="d-flex align-items-center">
                                <span class="material-symbols-outlined accCirlcle mr-2">
                                    account_circle
                                </span>
                                Immanuel Sindu Kristian Pratama / 71190426
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row mx-5 mb-5">
                    <div id="itemProfil" class="col-xl-6 col-sm-12 pt-3">
                        <p id="judulProfilMhs" class="mb-2">User Interface / User Experience Designer</p>
                        <div id="listMatkul" class="row">
                            <div class="col-7">
                                <p>
                                    Mata Kuliah Wajib Profil
                                    <span id="status" class="ml-4">
                                        4/5
                                    </span>
                                </p>

                                <ol>
                                    <li>Desain & Evaluasi Antarmuka (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Pola Desain Antar. Pengguna (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Desain Eksperimental (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Test Engineering (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Pemodelan Proses Bisnis (3 sks)</li>
                                </ol>
                            </div>
                            <div class="col-5 p-0">
                                <p>
                                    Mata Kuliah Opsional
                                    <span id="status" class="ml-4">
                                        4/5
                                    </span>
                                </p>

                                <ul>
                                    <li>Prog. Android (3 sks)</li>
                                    <li>Prog. iOS (3 sks)</li>
                                    <li>Prog. Hybrid (3 sks) </li>
                                    <li>Prog. Dekstop (3 sks) </li>
                                    <li>Prog. Web Lanjut (3 sks) </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="itemProfil" class="col-xl-6 col-sm-12 pt-3">
                        <p id="judulProfilMhs" class="mb-2">Database Administrator</p>
                        <div id="listMatkul" class="row">
                            <div class="col-7">
                                <p>
                                    Mata Kuliah Wajib Profil
                                    <span id="status" class="ml-4">
                                        4/5
                                    </span>
                                </p>

                                <ol>
                                    <li>Desain & Evaluasi Antarmuka (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Pola Desain Antar. Pengguna (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Desain Eksperimental (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Test Engineering (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Pemodelan Proses Bisnis (3 sks)</li>
                                </ol>
                            </div>
                            <div class="col-5 p-0">
                                <p>
                                    Mata Kuliah Opsional
                                    <span id="status" class="ml-4">
                                        4/5
                                    </span>
                                </p>

                                <ul>
                                    <li>Prog. Android (3 sks)</li>
                                    <li>Prog. iOS (3 sks)</li>
                                    <li>Prog. Hybrid (3 sks) </li>
                                    <li>Prog. Dekstop (3 sks) </li>
                                    <li>Prog. Web Lanjut (3 sks) </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="itemProfil" class="col-xl-6 col-sm-12 pt-3">
                        <p id="judulProfilMhs" class="mb-2">Intelligent System Developer</p>
                        <div id="listMatkul" class="row">
                            <div class="col-7">
                                <p>
                                    Mata Kuliah Wajib Profil
                                    <span id="status" class="ml-4">
                                        4/5
                                    </span>
                                </p>

                                <ol>
                                    <li>Desain & Evaluasi Antarmuka (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Pola Desain Antar. Pengguna (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Desain Eksperimental (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Test Engineering (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Pemodelan Proses Bisnis (3 sks)</li>
                                </ol>
                            </div>
                            <div class="col-5 p-0">
                                <p>
                                    Mata Kuliah Opsional
                                    <span id="status" class="ml-4">
                                        4/5
                                    </span>
                                </p>

                                <ul>
                                    <li>Prog. Android (3 sks)</li>
                                    <li>Prog. iOS (3 sks)</li>
                                    <li>Prog. Hybrid (3 sks) </li>
                                    <li>Prog. Dekstop (3 sks) </li>
                                    <li>Prog. Web Lanjut (3 sks) </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="itemProfil" class="col-xl-6 col-sm-12 pt-3">
                        <p id="judulProfilMhs" class="mb-2">Network Service Supervisor</p>
                        <div id="listMatkul" class="row">
                            <div class="col-7">
                                <p>
                                    Mata Kuliah Wajib Profil
                                    <span id="status" class="ml-4">
                                        4/5
                                    </span>
                                </p>

                                <ol>
                                    <li>Desain & Evaluasi Antarmuka (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Pola Desain Antar. Pengguna (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Desain Eksperimental (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Test Engineering (3 sks)
                                        <span id="checklist" class="material-symbols-outlined ml-1">
                                            done
                                        </span>
                                    </li>
                                    <li>Pemodelan Proses Bisnis (3 sks)</li>
                                </ol>
                            </div>
                            <div class="col-5 p-0">
                                <p>
                                    Mata Kuliah Opsional
                                    <span id="status" class="ml-4">
                                        4/5
                                    </span>
                                </p>

                                <ul>
                                    <li>Prog. Android (3 sks)</li>
                                    <li>Prog. iOS (3 sks)</li>
                                    <li>Prog. Hybrid (3 sks) </li>
                                    <li>Prog. Dekstop (3 sks) </li>
                                    <li>Prog. Web Lanjut (3 sks) </li>
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
export default {
    name: "ProfilMahasiswa",
    components: {
        BreadcrumbModule
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
    methods: {
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animasi smooth scrolling
            });
        }
    },
    created() {
        this.scrollTop();
    }

}

</script>

<style scoped src="../../public/frontend/styling/profilMahasiswa.css"></style>