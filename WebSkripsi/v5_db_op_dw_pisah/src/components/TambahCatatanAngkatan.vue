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
                <div class="container-fluid px-0 mb-xl-5 mb-sm-4">
                    <div id="judulCatatan">
                        <p>Tambah Catatan Angkatan</p>
                    </div>
            
                    <div id="tambahCatatan" class="row mx-5 mx-0 justify-content-center">
                        <!-- bagian isi waktu nama judul -->
                        <div class="col-lg-4 col-md-9 col-sm-9 my-sm-4 pl-0">
                            <div class="row">
                                <div class="col-12 mt-2 pl-0 mb-2">
                                    <span id="judulItemPerCatatan">Data Catatan</span>
                                </div>
            
                                
                                <div class="col-12 mb-3 pl-2 mt-2">
                                    <div class="row">
                                        <div class="col-3 align-self-center pl-2">
                                            <span class="font-weight-bold ">Waktu</span>
                                        </div>
                                        <div class="col-9">
                                            <input id="inputKiriAngkatan" type="text" class="myformControl" readonly disabled v-model="waktu">
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
                                            <input id="inputKiriAngkatan" type="text" readonly disabled  v-model="tahunAngkatan">
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-12 pl-2">
                                    <div class="row">
                                        <div class="col-3 align-self-center pl-2">
                                            <span class="mr-4 font-weight-bold">Judul</span>
                                        </div>
                                        <div class="col-9">
                                            <v-combobox
                                                :items=this.listItemJudul
                                                v-model="this.judul"
                                                rounded="lg"
                                                density="compact"
                                                hide-details
                                                variant="solo"
                                                flat
                                                bg-color="white"
                                                placeholder="Masukan judul perwalian"
                                                persistent-placeholder
                                                class="dropDownJudul"
                                                single-line
                                                clearable
                                                autofocus
                                            ></v-combobox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- bagian tipe perwalian -->
                        <div class="col-lg-3 col-md-9 col-sm-9 mb-sm-4 pl-0">
                          
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
                            <p class="font-weight-bold">Presensi Mahasiswa Perwalian Angkatan {{this.tahunAngkatan}}</p>
                        </div>
                        <div v-if="this.listPresensi.length > 0" id="presensiMahasiswa">
                            <div class="list-group" id="listPresensi">
                                <div v-for="(mahasiswa,index) in this.listPresensi" :key="index" id="itemMahasiswa" class="list-group-item list-group-item-action d-flex flex-row align-items-center">

                                    <div class="col-xl-4 px-0">
                                        <p class="m-xl-0">{{index+=1}}. {{mahasiswa.nama}} / {{mahasiswa.nim}}</p>
                                    </div>

                                    <div class="col-xl-2 px-0">
                                        <v-select
                                            v-model="this.listPresensi[index-1].status"
                                            density="compact"
                                            :items="['Absen','Hadir']"
                                            variant="solo"
                                            rounded="lg"
                                            hide-details="true"
                                            :bg-color="this.listPresensi[index-1].status === 'Belum Presensi' ? 'white' : this.listPresensi[index-1].status === 'Absen' ? 'red-darken-3' : 'success'"
                                        ></v-select>
                                    </div>

                                    <div class="col-xl-3 ml-3 pr-0">
                                        <p v-if="mahasiswa.status==='Hadir'" class="m-xl-0"><b>Status</b> : <span class="text-success">{{mahasiswa.status}}</span></p>
                                        <p v-else-if="mahasiswa.status==='Absen'" class="m-xl-0"><b>Status</b> : <span class="text-danger">{{mahasiswa.status}}</span></p>
                                        <p v-else class="m-xl-0"><b>Status</b> : <span class="text-dark">Belum Presensi</span></p>
                                    </div>

                                    <div class="col-3 pr-5 pl-0">
                                        <v-text-field placeholder="Keterangan"
                                        v-model="this.listPresensi[index-1].keterangan"
                                        density="compact"
                                        rounded="lg"
                                        variant="solo"
                                        class="keteranganPresensi" hide-details="true"></v-text-field>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else id="presensiMahasiswa2" class="d-flex align-items-end">
                            <div class="presensiMahasiswa">
                                <p>Silahkan pilih tahun angkatan terlebih dahulu, untuk melakukan presensi mahasiswa</p>
                            </div>
                        </div>
                    </div>

                    <div id="buttonBatalSimpan2" class="mt-3">
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

            <div class="d-flex justify-content-center text-center">
                <div id="snackbar" class="text-center">
                    <p class="mx-auto mb-0 text-center">{{this.pesanSnackBar}}</p>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import BreadcrumbModule from './BreadcrumbModule.vue';
import axios from 'axios'

export default {
    name: "TambahCatatanAngkatan",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            idCatatan: null,
            tipe: "grup-angkatan", //temp
            nim: null,
            nama: null,
            waktu: null,
            namaOrangTua: null,
            agendaPerwalian: null,
            tambahPeserta: null,
            tahunAngkatan: null,
            waktuAwal: null,
            waktuAkhir: null, //temp
            //////////////////////////////////////////////
            listItemJudul: [
                "Catatan Perwalian Pra-Registrasi",
                "Catatan Perwalian Pra-UTS",
                "Catatan Perwalian Pra-UAS"
            ],
            listPresensi: [],
            pesanSnackBar: [],
            judul: null,
            namaDosen: localStorage.getItem("namaDosen")
        }
    },
    created() {
        this.scrollTop()
        this.initData()
    },
    methods: {
        initData() {
            this.kodeDosen = localStorage.getItem("kodeDosen")

            this.waktu = this.getTanggalSekarang()
            this.waktuAwal = this.getWaktuSekarang()
            this.tahunAngkatan = this.$route.params.id
            this.getMahasiswaPerwalianByTahun()
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
            const now = new Date();
            const jam = now.getHours().toString().padStart(2, '0');
            const menit = now.getMinutes().toString().padStart(2, '0');
            const detik = now.getSeconds().toString().padStart(2, '0');

            return `${jam}:${menit}:${detik}`;
        },
        isFieldKosong() { // true jika ada field yang kosong
            return (
                this.judul == null ||
                this.agendaPerwalian == null
            )
        },
        async simpan() {
            this.tombolTidakAktif = true
            this.waktuAkhir = this.getWaktuSekarang()

            if (!this.isFieldKosong()) { //mengecek apakah ada field yang kosong 
                const paramObject = {
                    kode_dosen: this.kodeDosen,
                    judul: this.judul,
                    tipe: "grup-angkatan",
                    nim: null,
                    nama: null,
                    nama_orang_tua: null,
                    agenda_perwalian: this.agendaPerwalian,
                    tambah_peserta: [],  // data objek 
                    waktu_awal: this.waktuAwal,
                    waktu_akhir: this.waktuAkhir,
                    data_presensi_mahasiswa: this.listPresensi,  // data objek 
                    tahun_angkatan: this.tahunAngkatan,

                }

                console.log(paramObject);

                //insert catatan grup angkatan
                try {
                    const response = await axios.post(process.env.VUE_APP_API_OPERASIONAL + `/tambahCatatanPerwalianDosen/`, paramObject);

                    if (response.data.success) {
                        this.pesanSnackBar = "Berhasil menambahkan catatan"
                        this.snackbar()

                        const waktuTunggu = 2000;
                        setTimeout(() => {
                            this.$router.push({ name: "DaftarCatatanPerwalianAngkatan", params: { id: this.$route.params.id } })
                        }, waktuTunggu);
                    } else {
                        this.pesanSnackBar = "Gagal menambahkan data"
                        this.snackbar()

                        console.error("Data gagal ditambahkan ", error);
                    }

                } catch (error) {
                    console.error("Terjadi kesalahan saat menambah data:", error);
                    this.pesanSnackBar = "Gagal menambahkan data"
                    this.snackbar()
                }
            } else {
                this.pesanSnackBar = "Pastikan semua kolom sudah terisi"
                this.snackbar()
            }

        },
        batal() {
            this.$router.back()
        },
        async getMahasiswaPerwalianByTahun() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_DATAWAREHOUSE + `/mahasiswaPerwalianPerTahun/`, {
                    params: {
                        kode_dosen: this.kodeDosen,
                        tahun_angkatan: this.$route.params.id,
                    },
                });

                if (response.data.error === false) {
                    this.listPresensi = response.data.response.list_mahasiswa;
                    //tambahkan keyvalue untuk status presensi mahasiswa
                    this.listPresensi.forEach((mahasiswa) => {
                        mahasiswa.status = "Belum Presensi";
                    });
                } else {
                    this.listPresensi = [];
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
                this.listPresensi = [];
            }
        },
        snackbar() {
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () {
                x.className = x.className.replace("show", "");
            }, 3000);
        },
        logoutDosen() {
            localStorage.clear();
            this.$router.push("/login")
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


}
</script>

<style scoped src="../../public/frontend/styling/tambahCatatan.css"></style>