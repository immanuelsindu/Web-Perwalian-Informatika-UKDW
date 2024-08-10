<template lang="">
    <div>
        <head> 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
        </head>

        <!-- Navbar -->
        <div class="row align-items-center ml-0 stickyNavbar "  id="navbar">
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
                        <p class="mb-5">Edit Catatan Perwalian </p>
                    </div>
            
                    <div id="tambahCatatan" class="row  pl-3 mx-0 justify-content-center">
                        <!-- bagian tipe perwalian -->
                        <div class="col-lg-3 col-md-9 col-sm-9 my-sm-4">
                            <div class="row"> 
                                <div class="col-12 mt-2 pl-0 mb-4">
                                    <span id="judulItemPerCatatan">Tipe Perwalian</span>
                                </div>
                                
                                <div id="opsiTipePerwalian" class="ml-2 px-0">
                                    <div class="col-12  mb-1 d-flex align-items-center">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"  value="pilihan1"
                                        id="flexRadioDefault1" v-model="radioValue" :checked="radioValue === 'pilihan1' ? true : false" @click="inputanNama = 'Nama',peserta = 'Mahasiswa',myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault1">
                                            Mahasiswa
                                        </label>
                                    </div>
                
                                    <div class="col-12 mb-1 d-flex align-items-center" >
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" value="pilihan2" id="flexRadioDefault2" v-model="radioValue" :checked="radioValue === 'pilihan2' ? true : false" @click="inputanNama = 'Nama', peserta = 'Orang Tua', myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault2">
                                            Orang Tua / Wali
                                        </label>
                                    </div>
                
                                    <div class="col-12 mb-1 d-flex align-items-center">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" value="pilihan3" id="flexRadioDefault3" v-model="radioValue" :checked="radioValue === 'pilihan3' ? true : false" @click="inputanNama = 'Nama',peserta = 'Orang Tua & Mahasiswa',myPlaceholder = 'Masukan nama atau NIM mahasiswa'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault3">
                                            Orang Tua / Wali dan Mahasiswa
                                        </label>
                                    </div>
                
                                    <div class="col-12 mb-3 d-flex align-items-center">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" value="pilihan4" id="flexRadioDefault4" v-model="radioValue" :checked="radioValue === 'pilihan4' ? true : false" @click="inputanNama = 'Tahun Angkatan',myPlaceholder = 'Masukan tahun angkatan'">
                                        <label class="form-check-label ml-4 pt-1 font-weight-normal" for="flexRadioDefault4">
                                            Grup Angkatan
                                        </label>
                                    </div>
                                
                                    <transition>
                                        <!-- bagian input nama orang tua  -->
                                        <div v-if="radioValue === 'pilihan2' || radioValue === 'pilihan3' ? true : false" class="col-12 px-0 mt-2" >
                                            <input id="inputNamaOrangTua" type="text" placeholder="Masukan nama orang tua / wali">
                                        </div>

                                        <!-- mungkin jadi error -->
                                        <div v-else class="col-12 px-0 mt-2" >
                                        
                                        </div>
                                    </transition>
                                

                                
                                </div>
                            </div>
                        </div>
            
                        <!-- bagian isi waktu nama judul -->
                        <div class="col-lg-4 col-md-9 col-sm-9 mb-sm-4 pl-0">
                            <div class="row ml-sm-1">
                                <div class="col-12 mt-2 pl-0 mb-4">
                                    <span id="judulItemPerCatatan">Data Catatan</span>
                                </div>
            
                                
                                <div class="col-12 mb-3 pl-2 mt-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="font-weight-bold ">Waktu</span>
                                        </div>
                                        <div class="col-9">
                                            <input id="inputKiri" type="date" class="myformControl">
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-12 mb-3 pl-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <Transition name="slide-fade" mode="out-in">
                                                <span class="font-weight-bold" :key="inputanNama">{{inputanNama}}</span>
                                            </Transition>
                                    
                                        </div>
                                        <div class="col-9 align-self-center">    
                                            <div v-if="radioValue === 'pilihan1' || radioValue === 'pilihan2' || radioValue === 'pilihan3' ? true : false">
                                                <input id="inputKiri" type="text" :placeholder="[[myPlaceholder]]">
                                            </div>      

                                            <div v-else>
                                                <input id="inputJudulKonsul" type="text" class="dropdown-toggle" placeholder="Masukan tahun angkatan" :value="myTahunAngkatan">
                                                <button class="btn btn-secondary dropdown-toggle toggle2 " type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <p class="dropdown-item mb-0" href="#" @click="myTahunAngkatan='2016'">2016</p>
                                                    <p class="dropdown-item mb-0" href="#" @click="myTahunAngkatan='2017'">2017</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-12 pl-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="mr-4 font-weight-bold">Judul</span>
                                        </div>
                                        <div class="col-9">
                                            <input id="inputJudulKonsul" type="text" class="dropdown-toggle" placeholder="Masukan judul perwalian" :value="myValueJudul">
                                            <button class="btn btn-secondary dropdown-toggle toggle2 " type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#" @click="myValueJudul='Catatan Perwalian Pra-Registrasi'" >Catatan Perwalian Pra-Registrasi</a>
                                                <a class="dropdown-item" href="#" @click="myValueJudul='Catatan Perwalian Pra-UTS'" >Catatan Perwalian Pra-UTS</a>
                                                <a class="dropdown-item" href="#" @click="myValueJudul='Catatan Perwalian Pra-UAS'" >Catatan Perwalian Pra-UAS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        
                        </div>
            
                        <!-- bagian tambah peserta -->
                        <div class="col-lg-3 col-md-8 col-sm-9 mb-sm-4 px-sm-0" id="cariTambahMahasiswa">
                            <transition >
                                <span v-if="radioValue === 'pilihan4' ? false : true" id="judulItemPerCatatan" :key="peserta">Tambah Peserta ({{peserta}})</span>
                            </transition>
                            <transition> 
                                <div v-if="radioValue === 'pilihan4' ? false : true">
                                    <div class="mb-3 mt-5 pt-3 d-flex align-items-center">
                                        <span class="material-symbols-outlined search ml-2">
                                            search
                                            </span>
                                        <input id="inputCariMahasiswa" type="text" placeholder="Cari nama mahasiswa">
                                    </div>
                                </div>
                            
                            </transition>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center">
                <div id="inputanMultiline" >
                    <div id="kolomInputan" class="d-flex justify-content-center">
                        <textarea name="agendaPerwalian" id="agendaPerwalian" cols="160" rows="10" placeholder="Tulis agenda perwalian di sini"></textarea>
                    </div>
                </div>
            </div>

            <div v-if="radioValue === 'pilihan4'" class="d-flex justify-content-center">
                <div id="inputanMultiline" >
                   <div id="containerPresensi" class="mt-5">
                        <div id="judulPresensi">
                            <p class="font-weight-bold">Presensi Perwalian Grup Angkatan</p>
                        </div>
                        <div id="presensiMahasiswa">
                            <div class="list-group">
                                <div v-for="(item,index) in listPresensi" :key="index" id="itemMahasiswa" class="list-group-item list-group-item-action d-flex flex-row align-items-center">
                                    <div class="col-xl-6 px-0">
                                        <p class="m-xl-0">{{index+=1}}. {{item.nama}} / {{item.nim}}</p>
                                    </div>
                                    <div class="col-xl-3 px-0">
                                        <button v-if="item.status==='Absen'" class="btn btn-outline-danger btn-sm mr-xl-3" disabled>
                                            Absen
                                        </button>

                                        <button v-else class="btn btn-danger btn-sm mr-xl-3" @click="presensiAbsen(index)">
                                            Absen
                                        </button>
                                        
                                        <button v-if="item.status==='Hadir'" class="btn btn-outline-success btn-sm" disabled>
                                            Hadir
                                        </button>

                                        <button v-else class="btn btn-success btn-sm" @click="presensiHadir(index)">
                                            Hadir
                                        </button>
                                    </div>
                                    <div class="col-xl-3 ">

                                        <p v-if="item.status==='Hadir'" class="m-xl-0"><b>Status</b> : <span class="text-success">{{item.status}}</span></p>
                                        <p v-else-if="item.status==='Absen'" class="m-xl-0"><b>Status</b> : <span class="text-danger">{{item.status}}</span></p>
                                        <p v-else class="m-xl-0"><b>Status</b> : <span class="text-dark">{{item.status}}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="buttonBatalSimpan" class="mt-3">
                <div class="row justify-content-between">
                    <div class="col-xl-6 col-sm-6">
                        <button id="buttonBatal" >Batal</button>
                    </div>

                    <div class="col-xl-6 col-sm-6 d-flex justify-content-end mb-5">
                        <button id="buttonSimpan">Simpan</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
class PresensiMahasiswa {
    constructor(nama, nim, status) {
        this.nama = nama;
        this.nim = nim;
        this.status = status;
    }
}
import BreadcrumbModule from './BreadcrumbModule.vue';
export default {
    name: "EditCatatan",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            radioValue: "pilihan1",
            textNama: "Nama",
            peserta: "Mahasiswa",
            inputanNama: "Nama",
            myPlaceholder: "Masukan nama atau NIM mahasiswa",
            myValueJudul: "",
            myTahunAngkatan: "",
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
        updatePeserta() {
            switch (this.radioValue) {
                case "pilihan1":
                    this.peserta = "Mahasiswa"
                    break;
                case "pilihan2":
                    this.peserta = "Orang Tua"
                    break;
                case "pilihan3":
                    this.peserta = "Orang Tua & Mahasiswa"
                    break;
                case "pilihan4":
                    this.inputanNama = "Tahun Angkatan";
                    break;
            }
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
        }

    }, mounted() {
        import('bootstrap');
        import('bootstrap/dist/css/bootstrap.min.css');

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
    }

}

</script>
<style scoped src="../../public/frontend/styling/tambahCatatan.css"></style>