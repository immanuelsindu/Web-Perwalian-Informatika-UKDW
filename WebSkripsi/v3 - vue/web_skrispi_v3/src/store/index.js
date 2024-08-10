import { createStore } from "vuex";
import CatatanPerwalianDosen from "@/myClass/catatanPerwalianDosen.js";
import CatatanDosen from "@/myClass/catatanDosen.js";
import PresensiMahasiswa from "@/myClass/PresensiMahasiswa.js";
import Mahasiswa from "@/myClass/mahasiswa.js";
import MahasiswaAngkatan from "@/myClass/mahasiswaAngkatan.js";

// Create a new store instance.
const store = createStore({
    state() {
        return {
            storeBreadcrumb: [],
            opsiUrutanItemBeranda: "pilihan1",
            lastIdCatatanPerwalianDosen: 17,
            lastIdCatatanDosen: 13,
            listCatatanPerwalianDosen: [
                new CatatanPerwalianDosen(
                    "1", //id catatan
                    "Konsultasi Magang", //judul catatan
                    "mahasiswa", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "4 Juni 2022", //tanggal buat catatan
                    "namaOrangTua", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                            new Mahasiswa(
                                "71190434",
                                "Harris Kurniadi Sumbogo"
                            ),
                            new Mahasiswa("71190523", "Revyn Pradana Putra"),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    false //isArsip
                ),
                new CatatanPerwalianDosen(
                    "2", //id catatan
                    "Konsultasi SPP", //judul catatan
                    "orang-tua-wali", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "9 Oktober 2023", //tanggal buat catatan
                    "Nugraheni Widyaningrum", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                            new Mahasiswa(
                                "71190434",
                                "Harris Kurniadi Sumbogo"
                            ),
                            new Mahasiswa("71190523", "Revyn Pradana Putra"),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    false
                ),
                new CatatanPerwalianDosen(
                    "3", //id catatan
                    "Konsultasi SPP Lagi", //judul catatan
                    "orang-tua-wali-dan-mahasiswa", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "10 Oktober 2023", //tanggal buat catatan
                    "Endras Adi", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                            new Mahasiswa(
                                "71190434",
                                "Harris Kurniadi Sumbogo"
                            ),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    false
                ),
                new CatatanPerwalianDosen(
                    "4", // id catatan
                    "Perwalian Pra-UAS 1",
                    "grup-angkatan",
                    "", //nim
                    "", //nama
                    "20 Desember 2023",
                    "", //nama orang tua
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    "tambahPeserta", //daftar peserta lainnya
                    "2017", //tahun angkatan
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    {
                        data: [
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190401",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190402",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190403",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190404",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190405",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190406",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190407",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190408",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190409",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190410",
                                "Belum Presensi"
                            ),
                        ],
                    },
                    false
                ),
                new CatatanPerwalianDosen(
                    "5", //id catatan
                    "Konsultasi Magang 1", //judul catatan
                    "mahasiswa", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "4 Desember 2023", //tanggal buat catatan
                    "namaOrangTua", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    true
                ),
                new CatatanPerwalianDosen(
                    "6", //id catatan
                    "Konsultasi Magang 2", //judul catatan
                    "mahasiswa", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "4 Desember 2023", //tanggal buat catatan
                    "namaOrangTua", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    true
                ),
                new CatatanPerwalianDosen(
                    "7", //id catatan
                    "Konsultasi Magang 3", //judul catatan
                    "mahasiswa", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "4 Desember 2023", //tanggal buat catatan
                    "namaOrangTua", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    true
                ),
                new CatatanPerwalianDosen(
                    "8", // id catatan
                    "Perwalian Pra-UAS 2",
                    "grup-angkatan",
                    "", //nim
                    "", //nama
                    "20 Desember 2023",
                    "", //nama orang tua
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    "tambahPeserta", //daftar peserta lainnya
                    "2017", //tahun angkatan
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    {
                        data: [
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190401",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190402",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190403",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190404",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190405",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190406",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190407",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190408",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190409",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190410",
                                "Belum Presensi"
                            ),
                        ],
                    },
                    false
                ),
                new CatatanPerwalianDosen(
                    "9", // id catatan
                    "Perwalian Pra-UAS 3",
                    "grup-angkatan",
                    "", //nim
                    "", //nama
                    "20 Desember 2023",
                    "", //nama orang tua
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    "tambahPeserta", //daftar peserta lainnya
                    "2017", //tahun angkatan
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    {
                        data: [
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190401",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190402",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190403",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190404",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190405",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190406",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190407",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190408",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190409",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190410",
                                "Belum Presensi"
                            ),
                        ],
                    },
                    true
                ),
                new CatatanPerwalianDosen(
                    "10", //id catatan
                    "Konsultasi SPP", //judul catatan
                    "orang-tua-wali", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "9 Oktober 2023", //tanggal buat catatan
                    "Nugraheni Widyaningrum", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                            new Mahasiswa(
                                "71190434",
                                "Harris Kurniadi Sumbogo"
                            ),
                            new Mahasiswa("71190523", "Revyn Pradana Putra"),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    true
                ),
                new CatatanPerwalianDosen(
                    "11", //id catatan
                    "Konsultasi SPP", //judul catatan
                    "orang-tua-wali", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "9 Oktober 2023", //tanggal buat catatan
                    "Nugraheni Widyaningrum", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                            new Mahasiswa(
                                "71190434",
                                "Harris Kurniadi Sumbogo"
                            ),
                            new Mahasiswa("71190523", "Revyn Pradana Putra"),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    true
                ),
                new CatatanPerwalianDosen(
                    "12", //id catatan
                    "Konsultasi SPP Lagi", //judul catatan
                    "orang-tua-wali-dan-mahasiswa", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "10 Oktober 2023", //tanggal buat catatan
                    "Endras Adi", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                            new Mahasiswa(
                                "71190434",
                                "Harris Kurniadi Sumbogo"
                            ),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    true
                ),
                new CatatanPerwalianDosen(
                    "13", //id catatan
                    "Konsultasi SPP Lagi", //judul catatan
                    "orang-tua-wali-dan-mahasiswa", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "10 Oktober 2023", //tanggal buat catatan
                    "Endras Adi", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                            new Mahasiswa(
                                "71190434",
                                "Harris Kurniadi Sumbogo"
                            ),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    true
                ),
                new CatatanPerwalianDosen(
                    "14", //id catatan
                    "Konsultasi SPP Lagi", //judul catatan
                    "orang-tua-wali-dan-mahasiswa", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "10 Oktober 2023", //tanggal buat catatan
                    "Endras Adi", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                            new Mahasiswa(
                                "71190434",
                                "Harris Kurniadi Sumbogo"
                            ),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    true
                ),
                new CatatanPerwalianDosen(
                    "15", //id catatan
                    "Konsultasi Magang", //judul catatan
                    "mahasiswa", //tipe
                    "71190422", //nim
                    "Christan Farel Pamungkas", //nama
                    "4 Juni 2022", //tanggal buat catatan
                    "namaOrangTua", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190434",
                                "Harris Kurniadi Sumbogo"
                            ),
                            new Mahasiswa("71190523", "Revyn Pradana Putra"),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    true //isArsip
                ),
                new CatatanPerwalianDosen(
                    "16", //id catatan
                    "Konsultasi KRS", //judul catatan
                    "orang-tua-wali-dan-mahasiswa", //tipe
                    "71190426", //nim
                    "Immanuel Sindu Kristian Pratama", //nama
                    "10 Oktober 2023", //tanggal buat catatan
                    "Endras Adi", //nama orang tua
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam", //agenda perwalian
                    {
                        data: [
                            new Mahasiswa(
                                "71190422",
                                "Christan Farel Pamungkas"
                            ),
                            new Mahasiswa(
                                "71190434",
                                "Harris Kurniadi Sumbogo"
                            ),
                        ],
                    }, //daftar peserta lainnya
                    "tahunAngkatan", //tahun angkatan
                    "10:31 WIB", //waktuAwal
                    "11:12 WIB", // waktuAkhir
                    "", //data presensi
                    true
                ),
                new CatatanPerwalianDosen(
                    "17", // id catatan
                    "Perwalian Pra-UTS",
                    "grup-angkatan",
                    "", //nim
                    "", //nama
                    "20 Desember 2023",
                    "", //nama orang tua
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    "tambahPeserta", //daftar peserta lainnya
                    "2017", //tahun angkatan
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    {
                        data: [
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190401",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190402",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190403",
                                "Absen"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190404",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190405",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190406",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190407",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190408",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190409",
                                "Belum Presensi"
                            ),
                            new PresensiMahasiswa(
                                "Mahasiswa 2016",
                                "71190410",
                                "Belum Presensi"
                            ),
                        ],
                    },
                    true
                ),
            ],
            listCatatanDosen: [
                new CatatanDosen(
                    "1",
                    "QnA Prodi Informatika 1",
                    "khusus",
                    "11190709",
                    "Danang Adi Yuandita",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    false
                ),
                new CatatanDosen(
                    "2",
                    "QnA Prodi Informatika 2",
                    "khusus",
                    "11190709",
                    "Danang Adi Yuandita",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    false
                ),
                new CatatanDosen(
                    "3",
                    "Refleksi UAS 1 QWERTY",
                    "refleksi-dosen",
                    "iniNim",
                    "namaPeserta",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    false
                ),
                new CatatanDosen(
                    "4",
                    "QnA Prodi Informatika 1",
                    "khusus",
                    "11190709",
                    "Danang Adi Yuandita",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    true
                ),
                new CatatanDosen(
                    "5",
                    "QnA Prodi Informatika 2",
                    "khusus",
                    "11190709",
                    "Danang Adi Yuandita",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    true
                ),
                new CatatanDosen(
                    "6",
                    "QnA Prodi Informatika 3",
                    "khusus",
                    "11190709",
                    "Danang Adi Yuandita",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    true
                ),
                new CatatanDosen(
                    "7",
                    "QnA Prodi Informatika 1",
                    "khusus",
                    "11190709",
                    "Danang Adi Yuandita",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    true
                ),
                new CatatanDosen(
                    "8",
                    "QnA Prodi Informatika 2",
                    "khusus",
                    "11190709",
                    "Danang Adi Yuandita",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    true
                ),
                new CatatanDosen(
                    "9",
                    "Refleksi UAS",
                    "refleksi-dosen",
                    "iniNim",
                    "namaPeserta",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    true
                ),
                new CatatanDosen(
                    "10",
                    "Refleksi UAS 1",
                    "refleksi-dosen",
                    "iniNim",
                    "namaPeserta",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    true
                ),
                new CatatanDosen(
                    "11",
                    "Refleksi UAS 2",
                    "refleksi-dosen",
                    "iniNim",
                    "namaPeserta",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    true
                ),
                new CatatanDosen(
                    "12",
                    "Refleksi UAS 3",
                    "refleksi-dosen",
                    "iniNim",
                    "namaPeserta",
                    "10 Oktober 2023",
                    "10:45 WIB", //waktuAwal
                    "12:00 WIB", // waktuAkhir,
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste namLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste nam dipisicing elit. Veniam iste nam",
                    true
                ),
            ],
            listPresensiAngkatan: [
                {
                    tahunAngkatan: "2016",
                    data: [
                        new PresensiMahasiswa(
                            "Mahasiswa A 2016",
                            "71190401",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa B 2016",
                            "71190402",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa C 2016",
                            "71190403",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa D 2016",
                            "71190404",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa E 2016",
                            "71190405",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa F 2016",
                            "71190406",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa G 2016",
                            "71190407",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa H 2016",
                            "71190408",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa I 2016",
                            "71190409",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa J 2016",
                            "71190410",
                            "Belum Presensi"
                        ),
                    ],
                },
                {
                    tahunAngkatan: "2017",
                    data: [
                        new PresensiMahasiswa(
                            "Mahasiswa A 2017",
                            "71190401",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa B 2017",
                            "71190402",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa C 2017",
                            "71190403",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa D 2017",
                            "71190404",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa E 2017",
                            "71190405",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa F 2017",
                            "71190406",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa G 2017",
                            "71190407",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa H 2017",
                            "71190408",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa I 2017",
                            "71190409",
                            "Belum Presensi"
                        ),
                        new PresensiMahasiswa(
                            "Mahasiswa J 2017",
                            "71190410",
                            "Belum Presensi"
                        ),
                    ],
                },
            ],
            listMahasiswaAngkatan: [
                {
                    tahunAngkatan: "2016",
                    dataMahasiswa: [
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "100 SKS",
                            "3.83",
                            "10",
                            "cekal-biro-1"
                        ),
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "80 SKS",
                            "3.83",
                            "50",
                            "cekal-biro-2"
                        ),
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "21 SKS",
                            "3.83",
                            "100",
                            ""
                        ),
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "89 SKS",
                            "3.83",
                            "80",
                            ""
                        ),
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "110 SKS",
                            "3.83",
                            "60",
                            ""
                        ),
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "87 SKS",
                            "3.83",
                            "70",
                            ""
                        ),
                    ],
                },
                {
                    tahunAngkatan: "2017",
                    dataMahasiswa: [
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "100 SKS",
                            "3.83",
                            "0",
                            ""
                        ),
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "80 SKS",
                            "3.83",
                            "50",
                            ""
                        ),
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "21 SKS",
                            "3.83",
                            "100",
                            "cekal-biro-1"
                        ),
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "89 SKS",
                            "3.83",
                            "80",
                            ""
                        ),
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "110 SKS",
                            "3.83",
                            "70",
                            ""
                        ),
                        new MahasiswaAngkatan(
                            "71190426",
                            "Immanuel Sindu Kristian Pratama",
                            "87 SKS",
                            "3.83",
                            "40",
                            "cekal-perpustakaan"
                        ),
                    ],
                },
            ],
            listMahasiswa: [
                new Mahasiswa(
                    "71190426",
                    "Immanuel Sindu Kristian Pratama",
                    "100",
                    "3.84",
                    10,
                    "Cekal Biro 1",
                    "Aktif"
                ),
                new Mahasiswa(
                    "71160401",
                    "Immelda Kartika Sari",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Aktif"
                ),
                new Mahasiswa(
                    "71160402",
                    "Christofer Valentino",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Lulus"
                ),
                new Mahasiswa(
                    "71160403",
                    "Priscilla Yuliana",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Lulus"
                ),
                new Mahasiswa(
                    "71160404",
                    "Kevin Wijaya",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Aktif"
                ),
                new Mahasiswa(
                    "71160405",
                    "Gabriella Setiawan",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Aktif"
                ),
                new Mahasiswa(
                    "71160406",
                    "Vincentius Tanjaya",
                    "100",
                    "3.84",
                    10,
                    "Cekal Perpustakaan",
                    "Aktif"
                ),
                new Mahasiswa(
                    "71160407",
                    "Anastasia Pratiwi",
                    "100",
                    "3.84",
                    50,
                    "Cekal Perpustakaan",
                    "Dropped Out"
                ),
                new Mahasiswa(
                    "71160408",
                    "Bryan Saputra",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Aktif"
                ),
                new Mahasiswa(
                    "71160409",
                    "Alicia Cahyadi",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Aktif"
                ),
                new Mahasiswa(
                    "71160410",
                    "Leonardus Santoso",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Cuti Studi"
                ),
                new Mahasiswa(
                    "71160411",
                    "Michelle Pranata",
                    "100",
                    "3.84",
                    10,
                    "Cekal Biro 1",
                    "Aktif"
                ),
                new Mahasiswa(
                    "71160412",
                    "Ferdinand Hermawan",
                    "100",
                    "3.84",
                    50,
                    "Cekal Biro 1",
                    "Aktif"
                ),
                new Mahasiswa(
                    "71160413",
                    "Veronica Kusuma",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Cuti Studi"
                ),
                new Mahasiswa(
                    "71160414",
                    "Yohanes Santoso",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Aktif"
                ),
                new Mahasiswa(
                    "71160415",
                    "Bernadette Kristanto",
                    "100",
                    "3.84",
                    50,
                    "nonCekal",
                    "Dropped Out"
                ),
            ],
        };
    },
    mutations: {
        updateStoreBreadCrumbs(state, listBreadCrumbs) {
            state.storeBreadcrumb = listBreadCrumbs;
        },
        pushStoreBreadCrumbs(state, payload) {
            state.storeBreadcrumb.push(payload);
        },
        sliceStoreBreadCrumbs(state, index) {
            if (index == 0) {
                state.storeBreadcrumb = state.storeBreadcrumb.slice(0, 1);
            } else {
                state.storeBreadcrumb = state.storeBreadcrumb.slice(
                    0,
                    index + 1
                );
            }
        },
        //mulai static data di config
        tambahCatatanPerwalianDosen(state, catatanBaru) {
            state.listCatatanPerwalianDosen.push(catatanBaru);
        },
        tambahCatatanDosen(state, catatanBaru) {
            state.listCatatanDosen.push(catatanBaru);
        },
        setLastIdCatatanPerwalianDosen(state) {
            state.lastIdCatatanPerwalianDosen += 1;
        },
        setLastIdCatatanDosen(state) {
            state.lastIdCatatanDosen += 1;
        },
        deleteItemCatatanPerwalianDosen(state, index) {
            const indexCatatan = state.listCatatanPerwalianDosen.findIndex(
                (item) => item.idCatatan === index
            );
            state.listCatatanPerwalianDosen.splice(indexCatatan, 1);
        },
        deleteItemCatatanDosen(state, idCatatan) {
            //
            const indexCatatan = state.listCatatanPerwalianDosen.findIndex(
                (item) => item.idCatatan === idCatatan
            );
            state.listCatatanDosen.splice(indexCatatan, 1);
        },

        updateDataPresensiAngkatan(state, item) {
            const indexTahunAngkatan = state.listPresensiAngkatan.findIndex(
                (item) => item.tahunAngkatan === item.tahunAngkatan
            );
            state.listPresensiAngkatan[indexTahunAngkatan]["data"] = item.data;
        },
        updateCatatanPerwalianDosen(state, catatanBaru) {
            // Temukan indeks objek yang ingin dihapus berdasarkan idCatatan
            const indeks = state.listCatatanPerwalianDosen.findIndex(
                (catatan) => catatan.idCatatan === catatanBaru.idCatatan
            );

            // Jika indeks ditemukan (tidak -1), hapus objek dari array
            if (indeks !== -1) {
                state.listCatatanPerwalianDosen.splice(indeks, 1, catatanBaru);
            }
        },
        updateCatatanDosen(state, catatanBaru) {
            // Temukan indeks objek yang ingin dihapus berdasarkan idCatatan
            const indeks = state.listCatatanDosen.findIndex(
                (catatan) => catatan.idCatatan === catatanBaru.idCatatan
            );

            // Jika indeks ditemukan (tidak -1), hapus objek dari array
            if (indeks !== -1) {
                state.listCatatanDosen.splice(indeks, 1, catatanBaru);
            }
        },
        setOpsiUrutanItemBeranda(state, opsiUrutanItemBeranda) {
            state.opsiUrutanItemBeranda = opsiUrutanItemBeranda;
        },
        //untuk update nilai isArsip dari sebuah item catatan perwalian
        updateArsipStatusCatatanPerwalian(state, dataCatatan) {
            // Temukan indeks objek yang ingin dihapus berdasarkan idCatatan
            const indeks = state.listCatatanPerwalianDosen.findIndex(
                (catatan) => catatan.idCatatan === dataCatatan.idCatatan
            );

            // Jika indeks ditemukan (tidak -1), hapus objek dari array
            if (indeks !== -1) {
                state.listCatatanPerwalianDosen.splice(indeks, 1, dataCatatan);
            }
        },
        updateArsipStatusCatatanDosen(state, dataCatatan) {
            // Temukan indeks objek yang ingin dihapus berdasarkan idCatatan
            const indeks = state.listCatatanDosen.findIndex(
                (catatan) => catatan.idCatatan === dataCatatan.idCatatan
            );

            // Jika indeks ditemukan (tidak -1), hapus objek dari array
            if (indeks !== -1) {
                state.listCatatanDosen.splice(indeks, 1, dataCatatan);
            }
        },
    },
    getters: {
        getStoreBreadCrumbs(state) {
            return state.storeBreadcrumb;
        },

        //mulai static data di config
        getListMahasiswa(state) {
            return state.listMahasiswa;
        },
        getListCatatanPerwalianDosen(state) {
            const filteredCatatan = state.listCatatanPerwalianDosen.filter(
                (item) => item.isArsip === false
            );
            // const filteredCatatan = state.listCatatanPerwalianDosen
            return filteredCatatan;
        },
        getListCatatanDosen(state) {
            const filteredCatatan = state.listCatatanDosen.filter(
                (item) => item.isArsip === false
            );
            return filteredCatatan;
        },
        getAllListCatatanPerwalianDosen(state) {
            return state.listCatatanPerwalianDosen;
        },
        getItemCatatanPerwalianDosenById: (state) => (id) => {
            const catatan = state.listCatatanPerwalianDosen.find(
                (item) => item.idCatatan == id
            );
            return catatan;
        },
        getItemCatatanDosenById: (state) => (id) => {
            const catatan = state.listCatatanDosen.find(
                (item) => item.idCatatan == id
            );
            return catatan;
        },
        // getListCatatanDosen(state) {
        //   return state.listCatatanDosen;
        // },
        getLastIdCatatanPerwalianDosen(state) {
            return state.lastIdCatatanPerwalianDosen;
        },
        getLastIdCatatanDosen(state) {
            return state.lastIdCatatanDosen;
        },
        getListPresensiAngkatanAll(state) {
            return state.listPresensiAngkatan;
        },
        getTemplateListPresensiAngkatan: (state) => (tahunAngkatan) => {
            return state.listPresensiAngkatan.find(
                (listPresensiAngkatan) =>
                    listPresensiAngkatan.tahunAngkatan === tahunAngkatan
            );
        },
        getListAngkatan: (state) => (payload) => {
            //get list catatan berdasarkan tipe dan tahun angkatan
            const filteredCatatan = state.listCatatanPerwalianDosen.filter(
                (item) =>
                    item.tipe === payload.tipe &&
                    item.tahunAngkatan === payload.tahunAngkatan &&
                    item.isArsip == false
            );
            return filteredCatatan;
        },
        getItemCatatanPerwalianDosen: (state) => (id) => {
            //get list catatan perwalian dosen berdasarkan idCatatan
            let itemCatatan = state.listCatatanPerwalianDosen.filter(
                (item) => item.idCatatan === id
            );
            itemCatatan = itemCatatan[0];
            return itemCatatan;
        },
        getItemCatatanDosen: (state) => (id) => {
            //get list catatan dosen berdasarkan idCatatan
            let itemCatatan = state.listCatatanDosen.filter(
                (item) => item.idCatatan === id
            );
            itemCatatan = itemCatatan[0];
            return itemCatatan;
        },
        getListCatatanMahasiswa: (state) => (nim) => {
            //get list catatan berdasarkan tipe dan tahun angkatan
            const filteredCatatan = state.listCatatanPerwalianDosen.filter(
                (item) => item.nim === nim && item.isArsip == false
            );
            return filteredCatatan;
        },
        getListMahasiswaAngkatan(state) {
            return state.listMahasiswaAngkatan;
        },
        getOpsiUrutanItemBeranda(state) {
            return state.opsiUrutanItemBeranda;
        },
        getListCatatanPerwalianDosenArsip: (state) => (tipe) => {
            const filteredCatatan = state.listCatatanPerwalianDosen.filter(
                (item) => item.isArsip === true && item.tipe === tipe
            );
            return filteredCatatan;
        },
        getListCatatanPerwalianMahasiswaArsip: (state) => (payload) => {
            const filteredCatatan = state.listCatatanPerwalianDosen.filter(
                (item) =>
                    item.isArsip === true &&
                    item.tipe === payload.tipe &&
                    item.nim === payload.nim
            );
            return filteredCatatan;
        },
        getListCatatanDosenArsip: (state) => (tipe) => {
            const filteredCatatan = state.listCatatanDosen.filter(
                (item) => item.isArsip === true && item.tipe === tipe
            );
            return filteredCatatan;
        },
        getListCatatanGrupAngkatan: (state) => (tahunAngkatan) => {
            const filteredCatatan = state.listCatatanPerwalianDosen.filter(
                (item) =>
                    item.isArsip === true &&
                    item.tipe === "grup-angkatan" &&
                    item.tahunAngkatan === tahunAngkatan
            );
            return filteredCatatan;
        },
        //untuk input pencarian di daftar catatan perwalian dosen
        cariCatatanPerwalianDosen: (state) => (judulCatatan) => {
            const hasil = state.listCatatanPerwalianDosen;
            return hasil.filter((item) => {
                return item.judul
                    .toLowerCase()
                    .includes(judulCatatan.toLowerCase());
            });
        },
    },
});

export default store;
