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
            <div class="col-12 mt-4 mb-4">
                <BreadcrumbModule class="m-0 ml-5 breadCrumb"></BreadcrumbModule>
            </div>
           
            <div class="d-flex flex-column">
                <div class="container-fluid px-0 mt-4 pt-2">
                    <div id="judulCatatan" class="mb-5">
                        <p>Edit Catatan Grup Angkatan</p>
                    </div>
            
                    <div id="tambahCatatan" class="myContainer d-flex">
                        <!-- bagian isi waktu nama judul -->
                        <div id="dataCatatan" class=" col-xl-4 col-sm-10 px-sm-3">
                            <div class="row">
                                <div class="col-12 mt-2 pl-0 mb-2">
                                    <p id="judulItemPerCatatan" class="mb-0">Data Catatan</p>
                                </div>
            
                                <div class="col-12 mb-3 pl-2 mt-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="font-weight-bold ">Waktu</span>
                                        </div>
                                        <div class="col-9">
                                            <input id="inputKiri" type="text" class="myformControl" readonly disabled v-model="waktu">
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-12 mb-3 pl-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="font-weight-bold">Tahun Angkatan</span>
                                        </div>
                                        <div class="col-9 align-self-center">          
                                            <input id="inputKiri" type="text" readonly disabled v-model="tahunAngkatan">
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-12 mb-3 pl-2">
                                    <div class="row">
                                        <div class="col-2 align-self-center pl-2">
                                            <span class="mr-4 font-weight-bold">Judul</span>
                                        </div>
                                        <div class="col-9">
                                            <input id="inputJudulKonsul" type="text" class="dropdown-toggle" placeholder="Masukan judul perwalian" v-model="judul">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <!-- bagian tambah peserta -->
                        <div class=" col-xl-3 col-sm-0 pl-0" id="cariTambahMahasiswa"></div>
        
                        <!-- bagian tipe perwalian -->
                        <div class="col-xl-3 col-sm-0 "></div>
                    </div>
                </div>
            </div>
            
    
            <div class="d-flex flex-column">
                <div class="myContainer mb-2">
                    <div class="d-flex justify-content-end">
                        <div id="hapusCatatan" class="mr-3 d-flex align-items-center" @click="showPopUpHapus(this.$route.params.id)">
                            <p class="text-right m-0">
                                <span class="material-symbols-outlined delete text-danger">
                                    delete
                                    </span>
                                Hapus Catatan
                            </p>
                        </div>

                        <div id="arsipCatatan" class="mr-3 d-flex align-items-center" @click="showPopUpArsip(this.$route.params.id)">
                            <p class="text-right m-0">
                                <span class="material-symbols-outlined archive text-success">
                                    archive
                                    </span>
                                Arsipkan Catatan
                            </p>
                        </div>

                        <div id="salinCatatan" class="mr-3 d-flex align-items-center" @click="this.salinCatatan()">
                            <p class="text-right m-0">
                                <span class="material-symbols-outlined copy text-primary">
                                    content_copy
                                    </span>
                                Salin Catatan
                            </p>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-center">
                    <div id="inputanMultiline">
                        <div id="kolomInputan">
                            <textarea name="agendaPerwalian" id="agendaPerwalian" cols="160" rows="10" v-model="agendaPerwalian"></textarea>
                        </div>

                        <div class="d-flex justify-content-center">
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
                                
                        </div>
            
                        <div id="buttonBatalSimpan" class="mt-3">
                            <div class="row justify-content-between">
                                <div class="col-xl-6 col-sm-6">
                                    <v-btn id="buttonBatal" type="submit" @click="this.batal()" >Batal</v-btn>
                                </div>
            
                                <div class="col-xl-6 col-sm-6 d-flex justify-content-end mb-5">
                                    <v-btn id="buttonSimpan" :disabled="this.tombolTidakAktif" type="submit" @click="this.simpan()" >Simpan</v-btn>
                                </div>
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

        <!-- overlay hapus arsipkan catatan -->
        <Transition>
            <div id="overlay" v-if="this.showWarningHapus" class="d-flex justify-content-center align-items-center">
                <div id="windowPreferensi">
                    <div id="contentPreferensi" class="p-4">
                        <p class="text-center font-weight-bold mb-3">Yakin hapus catatan ? </p>
                        <p class="px-3 text-center text-danger">Catatan ini akan dihapus secara permanen dan tidak bisa
                            dikembalikan.
                        </p>

                        <!-- bagian tombol simpan batal -->
                        <div class="row mt-4">
                            <div class="col-4 px-0 d-flex justify-content-center">
                                <button class="btn batal" @click="hapusCatatanTidak()">Tidak</button>
                            </div>
                            <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                                <button class="btn simpan" @click="hapusCatatanYa()">Ya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>

        <!-- overlay hapus warning catatan -->
        <Transition>
            <div id="overlay" v-if="this.showWarningArsip" class="d-flex justify-content-center align-items-center">
                <div id="windowPreferensi">
                    <div id="contentPreferensi" class="p-4">
                        <p class="text-center font-weight-bold mb-3">Yakin arsipkan catatan ? </p>
                        <p class="px-3 text-justify">Ketika catatan ini diarsipkan, Anda tidak bisa
                            mengaksesnya. Namun, Anda dapat memulihkan catatan tersebut melalui menu <span><b>'Lihat
                                    catatan yang diarsipkan'</b></span> yang berada di pojok kanan atas halaman ini
                        </p>

                        <div class="row mt-4">
                            <div class="col-4 px-0 d-flex justify-content-center">
                                <button class="btn batal" @click="arsipCatatanTidak()">Tidak</button>
                            </div>
                            <div class="col-4 offset-4 px-0 d-flex justify-content-center">
                                <button class="btn simpan" @click="arsipCatatanYa()">Ya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>

        <div id="snackbar">
            <p class="m-0">{{ this.pesanSnackBar }}</p>
        </div>


    </div>
</template>

<script>
import axios from 'axios'
import BreadcrumbModule from './BreadcrumbModule.vue';
export default {
    name: "EditCatatanGrupAngkatan",
    components: {
        BreadcrumbModule
    },
    data() {
        return {
            waktu: '',
            waktuAwal: "",
            waktuAkhir: "",
            judul: '',
            tahunAngkatan: '',
            agendaPerwalian: '',
            inputanNimMhs: '',
            ///////////////////////////////////////////////////////
            listPresensi: [],
            data: [],
            pesanSnackBar: "",
            tombolTidakAktif: false,
            namaDosen: localStorage.getItem("namaDosen"),
            //----------------------------------------------------------
            idHapus: 0,
            idArsip: 0,
            showWarningHapus: false,
            showWarningArsip: false,
        }
    },
    created() {
        this.scrollTop();
        this.initData();
    },
    methods: {
        async initData() {
            this.kodeDosen = localStorage.getItem("kodeDosen")
            this.idCatatanPerwalianDosen = this.$route.params.id

            //get catatan perwalian dosen by id_catatan_perwalian_dosen
            try {
                const response = await axios.get(process.env.VUE_APP_API + `/getCatatanPerwalianDosen/`, {
                    params: {
                        kode_dosen: this.kodeDosen,
                        id_catatan_perwalian_dosen: this.idCatatanPerwalianDosen,
                    },
                });

                if (response.data.error === false) {
                    this.data = response.data.response.list_catatan_dosen_perwalian_dosen[0];
                } else {
                    this.data = [];
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
                this.data = [];
            }

            if (this.data != null) {
                this.tipe = this.data.tipe
                this.waktu = this.convertTimestamp(this.data.waktu)
                this.waktuAwal = this.getWaktuSekarangTime()
                this.judul = this.data.judul;
                this.tahunAngkatan = this.data.tahun_angkatan;
                this.agendaPerwalian = this.data.agenda_perwalian;
                this.listPresensi = this.data.data_presensi_mahasiswa
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
        },
        async simpan() {
            this.tombolTidakAktif = true
            this.waktuAkhir = this.getWaktuSekarangTime()
            if (!this.isFieldKosong()) {

                const paramObject = {
                    judul: this.judul,
                    tipe: "grup-angkatan",
                    nim: this.nim,
                    nama: this.nama,
                    nama_orang_tua: this.namaOrangTua,
                    agenda_perwalian: this.agendaPerwalian,
                    tambah_peserta: this.listMahasiswaPesertaLainnya,
                    waktu: this.getWaktuSekarangDatabase(),
                    waktu_awal: this.waktuAwal,
                    waktu_akhir: this.waktuAkhir,
                    data_presensi_mahasiswa: this.data.data_presensi_mahasiswa,
                    id_catatan_perwalian_dosen: this.$route.params.id,
                }

                try {
                    const response = await axios.put(process.env.VUE_APP_API + `/updateCatatanPerwalianDosen/`, paramObject);

                    if (response.data.success) {
                        this.pesanSnackBar = "Berhasil memperbarui catatan"
                        this.snackbar()

                        const waktuTunggu = 2000;
                        setTimeout(() => {
                            this.$router.push({ name: 'DaftarCatatanPerwalianAngkatan', params: { id: this.tahunAngkatan } })
                        }, waktuTunggu);
                    } else {
                        this.pesanSnackBar = "Gagal memperbarui data"
                        this.snackbar()
                    }
                } catch (error) {
                    console.error("Terjadi kesalahan saat mengambil data:", error);
                }
            } else {
                this.pesanSnackBar = "Agenda perwalian atau judul tidak boleh kosong"
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
        isFieldKosong() { //return true kalau fieldnya kosong
            return (
                this.judul == "" && this.agendaPerwalian == ""
            )
        },
        getWaktuSekarangDatabase() { // 2023-07-17 22:07:38.303466 => untuk insert ke database 
            const waktu = new Date();

            // Mengambil nilai tahun, bulan, tanggal, jam, menit, detik, dan milidetik dari objek Date
            const tahun = waktu.getFullYear();
            const bulan = String(waktu.getMonth() + 1).padStart(2, '0');
            const tanggal = String(waktu.getDate()).padStart(2, '0');
            const jam = String(waktu.getHours()).padStart(2, '0');
            const menit = String(waktu.getMinutes()).padStart(2, '0');
            const detik = String(waktu.getSeconds()).padStart(2, '0');
            const milidetik = String(waktu.getMilliseconds()).padStart(6, '0');

            // Menggabungkan nilai-nilai tersebut ke dalam format "YYYY-MM-DD HH:mm:ss.SSSSSS"
            const waktuSekarang = `${tahun}-${bulan}-${tanggal} ${jam}:${menit}:${detik}.${milidetik}`;

            return waktuSekarang;
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
        getWaktuSekarang() { // 10:00 WIB 
            const currentDate = new Date();
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes} WIB`;

            return formattedTime;
        },
        getWaktuSekarangTime() {
            const waktu = new Date();

            // Mengambil nilai jam, menit, dan detik dari objek Date
            const jam = waktu.getHours();
            const menit = waktu.getMinutes();
            const detik = waktu.getSeconds();

            // Mengonversi nilai jam ke format 2 digit (misalnya: 10 menjadi "10")
            const jamDalamFormat = jam.toString().padStart(2, '0');
            const menitDalamFormat = menit.toString().padStart(2, '0');
            const detikDalamFormat = detik.toString().padStart(2, '0');

            // Menggabungkan nilai jam, menit, dan detik ke dalam format "10:00:00"
            const waktuSekarangWIB = `${jamDalamFormat}:${menitDalamFormat}:${detikDalamFormat}`;

            return waktuSekarangWIB;
        },
        convertTimestamp(timestamp) {
            const date = new Date(timestamp);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('id-ID', options);
            return formattedDate;
        },
        batal() {
            this.$router.back()
        },
        logoutDosen() {
            localStorage.clear();
            this.$router.push("/login")
        },
        showPopUpHapus(id) {
            this.showWarningHapus = true
            this.idHapus = id
        },
        hapusCatatanTidak() {
            this.showWarningHapus = false;
        },
        async hapusCatatanYa() {
            try {
                const paramObject = {
                    id_catatan_perwalian_dosen: this.idHapus
                }
                const response = await axios.put(process.env.VUE_APP_API + `/deleteCatatanPerwalianDosen/`, paramObject);

                if (response.data.error === false) {
                    this.showWarningHapus = false

                    setTimeout(() => {
                        this.pesanSnackBar = "Catatan berhasil dihapus"
                        this.snackbar()
                        setTimeout(() => {
                            this.$router.push({ name: 'DaftarCatatanPerwalianAngkatan', params: { id: this.tahunAngkatan } })
                        }, 2000);
                    }, 200);


                } else {
                    console.log("Gagal hapus data");
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
            }
        },
        showPopUpArsip(id) {
            this.showWarningArsip = true
            this.idArsip = id
        },
        arsipCatatanTidak() {
            this.showWarningArsip = false
        },
        async arsipCatatanYa() {
            //melakukan arsip catatan perwalian menjadi true

            //update catatan mahasiswa ybs 
            try {
                const paramObject = {
                    id_catatan_perwalian_dosen: this.idArsip,
                    is_arsip: true,
                    filter_arsip: "current_time"
                }
                const response = await axios.put(process.env.VUE_APP_API + `/updateIsArsipCatatanPerwalianDosen/`, paramObject);

                if (response.data.error === false) {
                    this.showWarningArsip = false

                    setTimeout(() => {
                        this.pesanSnackBar = "Berhasil mengarsipkan catatan"
                        this.snackbar()
                        setTimeout(() => {
                            this.$router.push({ name: 'DaftarCatatanPerwalianAngkatan', params: { id: this.tahunAngkatan } })
                        }, 2000);
                    }, 200);
                } else {
                    this.listMahasiswaPerwalianFiltered = [];
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
            }
        },
        salinCatatan() {
            // agendaPerwalian
            let copyGfGText = document.getElementById("agendaPerwalian");
            copyGfGText.select();
            document.execCommand("copy");

            const selection = window.getSelection();
            selection.removeAllRanges();

            this.pesanSnackBar = "Catatan disalin ke clipboard"
            this.snackbar()
        },
        snackbar() {
            //show snackbar
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
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
    }
}
</script>

<style scoped src="../../public/frontend/styling/editCatatanMahasiswa.css"></style>