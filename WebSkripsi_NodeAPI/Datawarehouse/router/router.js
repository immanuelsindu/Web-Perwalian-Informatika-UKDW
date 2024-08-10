const router = require("express").Router();
const {
    getMahasiswaAngkatanFiltered,
    getCekalMahasiswa,
    getNamaNimMahasiswaKhusus,

    getIPSMahasiswa,
    getIPKTotalSKSMahasiswa,
    getSACMahasiswa,

    getAngkatanMahasiswaPerwalianDosen,
    getJumlahStatusMahasiswaPerPerwalian,
    getMahasiswaAngkatan,

    getMataKuliahMahasiswa,
    getStatusMahasiswa,
    getNamaNimMahasiswa,
    getKRSMahasiswa,

    getIPKPerTahunAngkatan,
    getListMahasiswaAngkatanByTahun,
    getjumlahStatusAktifDanTidakAktifMahasiswa
} = require("../controller/perwalian");

router.get("/angkatanMahasiswaPerwalian", getAngkatanMahasiswaPerwalianDosen); //list tahun angkatan mahasiswa perwalian
router.get("/jumlahStatusPerwalian", getJumlahStatusMahasiswaPerPerwalian);
router.get("/mahasiswaPerwalian", getMahasiswaAngkatan); // list detail mahasiswa yang ditampilkan di detail angkatan
router.get("/ipsMahasiswa", getIPSMahasiswa); // list ips mahasiswa by nim
router.get("/ipkSKSMahasiswa", getIPKTotalSKSMahasiswa); // get ips, ipk , nama mahasiswa
router.get("/sacMahasiswa", getSACMahasiswa); // list ips mahasiswa by nim
router.get("/matakuliahMahasiswa", getMataKuliahMahasiswa); // list ips mahasiswa by nim
router.get("/statusMahasiswa", getStatusMahasiswa); // get status mahasiswa by nim
router.get("/searchMahasiswa", getNamaNimMahasiswa); // get list nim nama mahasiswa
router.get("/searchMahasiswaKhusus", getNamaNimMahasiswaKhusus); // get list catatan mahasiswa untuk catatan dosen tipe khusus
router.get("/rataIPKAngkatanPerTahun", getIPKPerTahunAngkatan); // get list catatan mahasiswa arsip filtered
router.get("/mahasiswaPerwalianFiltered", getMahasiswaAngkatanFiltered); // get list catatan mahasiswa arsip filtered
router.get("/mahasiswaPerwalianPerTahun", getListMahasiswaAngkatanByTahun); // get list catatan mahasiswa by tahun
router.get("/getKRSMahasiswa", getKRSMahasiswa); // set opsi item beranda
router.get("/cekalMahasiswa", getCekalMahasiswa); // cekal mahasiswa by nim
router.get("/getJumlahAktifdanTidakAktif", getjumlahStatusAktifDanTidakAktifMahasiswa); // cekal mahasiswa by nim

module.exports = router;

