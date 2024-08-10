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
                <div class="row">
                    <div class="col-10 pr-0">
                        <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>
                    </div>
                    <div class="col-1 pl-5">
                        
                    </div>
                </div>
            </div>
        
            <div id="judulCatatan">
                <p>Arsip Catatan Perwalian Grup Angkatan {{this.$route.params.id}}</p>
            </div>
            
            <div class="mx-md-5 mb-sm-5">
                <div id="cariCatatanPerwalian" class="row mt-md-5 mb-md-4 ml-sm-5">
                    <div class="col-md-7 col-sm-12 px-sm-0 mb-sm-2">
                        <div class="mb-2 d-inline">
                            <span class="material-symbols-outlined search ">
                                search
                                </span>
                            <input id="inputCariMahasiswa" class="mb-2" type="text" placeholder="Cari arsip catatan" v-model="inputanJudulCatatan">
                        </div>
        
                        <div id="alertPencarian">
                            <p>Ditemukan 4 hasil sesuai kata pencarian</p>
                        </div>
                    </div>

                    <div id="opsiFilter" class="col-md-4 col-sm-12 px-0">
                        <div class="btn-group mb-3 mr-3">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Tahun : </span><span> {{tahunArsip}}  </span> 
                            </button>
                            
                            <div class="dropdown-menu">
                                <a class="dropdown-item" @click="tahunArsip=2020">2020</a>
                                <a class="dropdown-item" @click="tahunArsip=2021">2021</a>
                                <a class="dropdown-item" @click="tahunArsip=2022">2022</a>
                                <a class="dropdown-item" @click="tahunArsip=2023">2023</a>
                            </div>
                        </div>

                        <div class="btn-group mb-3">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Kategori : </span><span> {{tipeCatatan}}  </span> 
                            </button>
                            
                            <div class="dropdown-menu">
                                <a class="dropdown-item" @click="tipeCatatan='Grup Angkatan',filter='grup-angakatan'">Grup Angkatan</a>
                            </div>
                        </div>
                    </div>                
                </div>

                <div id="listCatatanArsip" class="mb-md-5 mt-sm-4">
                    <div id="listCatatanArsipMahasiswa">
                        <div class="col-12" id="judulTipeCatatan">
                            <p class="mb-3 ml-5">Catatan Perwalian {{tipeCatatan}} {{this.$route.params.id}}</p>
                        </div>
                        <div class="col-12">
                            <div class="list-group list-group-flush">
                                <div>
                                    <div v-for="(items,index) in listAllArsip.get(filter)" :key="index" id="itemCatatanArsip" class="p-2 d-flex list-group-item list-group-item-action">
                                        <div class="col-5 px-0 py-2">
                                            <div class="d-flex ml-5">
                                                <div class="d-flex align-items-center mr-3">
                                                    <span class="material-symbols-outlined">person_filled</span>
                                                </div>
        
                                                <div id="dataPertamaCatatan">
                                                    <p class="mb-0">
                                                        <b>
                                                            Catatan Perwalian Grup Angkatan {{items.tahunAngkatan}}
                                                        </b>
                                                    </p>
                                                    <p class="mb-0">
                                                        <b><i>
                                                            {{items.judul}}
                                                        </i></b>
                                                    </p>
                                                    <p>{{limitAgenda(items.agendaPerwalian)}}</p>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div id="tanggalArsip" class="col-4 d-flex align-items-center">
                                            <p class="mb-0 mx-auto" data-toggle="tooltip" title="Tanggal diarsipkan">{{items.waktu}}</p>
                                        </div>
        
                                        <div id="opsiCatatan" class="col-3 d-flex align-items-center">
                                            <div class="ml-auto d-flex pr-5">
                                                <div class="mr-2">
                                                    <span class="material-symbols-outlined text-warning" data-toggle="tooltip" title="Pulihkan Catatan" @click="pulihkanCatatan(items.idCatatan)">
                                                        settings_backup_restore
                                                    </span>
                                                </div>
                                                <div>
                                                    <span class="material-symbols-outlined text-danger" data-toggle="tooltip" title="Hapus Catatan" @click="deleteCatatan(items.idCatatan)">
                                                        delete
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
import BreadcrumbModule from './BreadcrumbModule.vue';
import CatatanPerwalianDosen from "@/myClass/catatanPerwalianDosen.js"

// $(function(){
//     $('[data-toggle="tooltip"]').tooltip();   
// });

export default {
    name: "ArsipPerwalianGrupAngkatan",
    data() {
        return {
            isOn: false,
            isOn2: false,
            inputanJudulCatatan: "",
            indexHapusCatatan: 0,
            tahunArsip: 2019,
            tipeCatatan: "Grup Angkatan",
            filter: "grup-angkatan",
            listDefaultAllArsip: new Map(),
            listAllArsip: new Map(),
        }
    },
    components: {
        BreadcrumbModule
    },
    methods: {
        batal() {
            this.isOn = false;
        },
        simpan() {
            this.isOn = false;
        },
        hapusCatatanTidak() {
            this.isOn2 = false;
        },
        hapusCatatanYa(idCatatan) {
            this.indexHapusCatatan = idCatatan
            this.isOn2 = false;
        },
        editCatatan(link) {
            window.open(link);
        },
        deleteCatatan(idCatatan) {
            // hapus catatan dari store
            this.$store.commit("deleteItemCatatanPerwalianDosen", idCatatan)
            // hapus catatan dari local data komponen

            let listBaruSetelahHapus = this.listDefaultAllArsip.get(this.filter)
            let indexHapus = listBaruSetelahHapus.findIndex(catatan => catatan.idCatatan === idCatatan)
            listBaruSetelahHapus.splice(indexHapus, 1)

            //update data setelah menghapus item arsip catatan
            this.listDefaultAllArsip.set(this.filter, listBaruSetelahHapus)
            this.listAllArsip.set(this.filter, listBaruSetelahHapus)
        },
        bukaArsip() {
            window.open("#");
        },
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animasi smooth scrolling
            });
        },
        pulihkanCatatan(idCatatan) {
            //ambil data item catatan yang lama dari store
            const tempCatatan = this.$store.getters.getItemCatatanPerwalianDosenById(idCatatan)
            //
            const dataCatatanLama = new CatatanPerwalianDosen(
                tempCatatan.idCatatan, //id catatan
                tempCatatan.judul, //judul catatan
                tempCatatan.tipe, //tipe
                tempCatatan.nim, //nim
                tempCatatan.nama, //nama
                tempCatatan.waktu, //tanggal buat catatan
                tempCatatan.namaOrangTua, //nama orang tua 
                tempCatatan.agendaPerwalian, //agenda perwalian
                tempCatatan.tambahPeserta, //daftar peserta lainnya
                tempCatatan.tahunAngkatan, //tahun angkatan
                tempCatatan.waktuAwal, //waktuAwal 
                tempCatatan.waktuAkhir,	// waktuAkhir
                tempCatatan.dataPresensiMahasiswa, //data presensi
                false, //isArsip diganti menjadi false
            )

            //ambil list data catatan yang lama 
            const dataBaru = this.listAllArsip.get(tempCatatan.tipe)
            //cari index catatan di list data baru
            const indexDataLama = dataBaru.findIndex(catatan => catatan.idCatatan === idCatatan);
            //cek index jika valid, jika iya ubah datalama menjadi data baru
            if (indexDataLama !== -1) {
                dataBaru.splice(indexDataLama, 1);
            }
            //update list data catatan tipe tersebut ke this.listAllArsip
            this.listAllArsip.set(tempCatatan.tipe, dataBaru)
            this.$store.commit('updateArsipStatusCatatanPerwalian', dataCatatanLama)
        },
        limitAgenda(fullString) {
            if (fullString.length > 150) {
                let slicedString = fullString.slice(0, 150);
                return slicedString;
            } else {
                return fullString
            }
        },
        async initData() {
            const listCatatanGrupAngkatan = await this.$store.getters.getListCatatanGrupAngkatan(this.$route.params.id)
            this.listAllArsip.set('grup-angkatan', listCatatanGrupAngkatan)
            this.listDefaultAllArsip.set('grup-angkatan', listCatatanGrupAngkatan)
        },
        cariCatatan(judul) {
            let filteredArsipCatatan = this.listDefaultAllArsip.get(this.filter).filter(item => {
                return item.judul.toLowerCase().includes(judul.toLowerCase());
            });

            if (filteredArsipCatatan.length > 0) {
                return filteredArsipCatatan
            }
        }
    },
    mounted() {
        import('bootstrap');
        import('bootstrap/dist/css/bootstrap.min.css');

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
        this.initData()
    },
    watch: {
        inputanJudulCatatan: {
            handler: function (baru, lama) {
                // const hasil = this.cariCatatan(baru)
                this.listAllArsip.set(this.filter, this.cariCatatan(baru))
            }
        }
    },

}
</script>
<style scoped src="../../public/frontend/styling/arsipPerwalian.css"></style>