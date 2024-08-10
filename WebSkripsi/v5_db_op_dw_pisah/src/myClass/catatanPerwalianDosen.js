class CatatanPerwalianDosen {
    constructor(
        idCatatan,
        judul,
        tipe,
        nim,
        nama,
        waktu,
        namaOrangTua,
        agendaPerwalian,
        tambahPeserta,
        tahunAngkatan,
        waktuAwal,
        waktuAkhir,
        dataPresensiMahasiswa,
        isArsip,
    ) {
        this.idCatatan = idCatatan,
        this.judul = judul;
        this.tipe = tipe;
        this.nim = nim;
        this.nama = nama;
        this.waktu = waktu;
        this.namaOrangTua = namaOrangTua;
        this.agendaPerwalian = agendaPerwalian;
        this.tambahPeserta = tambahPeserta;
        this.tahunAngkatan = tahunAngkatan;
        this.waktuAwal = waktuAwal;
        this.waktuAkhir = waktuAkhir;
        this.dataPresensiMahasiswa = dataPresensiMahasiswa
        this.isArsip = isArsip
    }
}

export default CatatanPerwalianDosen