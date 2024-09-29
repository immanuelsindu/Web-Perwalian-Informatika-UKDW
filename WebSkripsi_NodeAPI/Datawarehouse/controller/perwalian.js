const { Pool } = require("pg");
const customError = require("../utils/error");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "perwalian_datawarehouse",
  user: "postgres",
  password: "123",
});
pool.connect();

const getAngkatanMahasiswaPerwalianDosen = async (req, res) => {
  const { kode_dosen } = req.query;

  try {
    const resdb = await pool.query(
      `select distinct m.tahun_angkatan from dosen d join perwalian_dosen pd on d.kode_dosen = pd.kode_dosen join mahasiswa m on m.nim = pd.nim  where d.kode_prodi = '71' and d.kode_dosen = '${kode_dosen}' and (tahun_angkatan::Integer) >= 2015  order by m.tahun_angkatan`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          tahun_angkatan: resdb.rows.map(
            (item) => item.tahun_angkatan
          ),
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getJumlahStatusMahasiswaPerPerwalian = async (req, res) => {
  const { kode_dosen, tahun_angkatan } = req.query;

  try {
    const resdb = await pool.query(
      `select status, count(*) from (select distinct m.nim, ms.status from dosen d join perwalian_dosen pd on d.kode_dosen = pd.kode_dosen join mahasiswa m on m.nim = pd.nim join mahasiswa_status ms on ms.nim = m.nim join (select ms.nim, max(ms.kode_semester) as max_kode_tahun_semester from mahasiswa_status ms group by ms.nim) max_kode_semester on ms.nim = max_kode_semester.nim and ms.kode_semester = max_kode_semester.max_kode_tahun_semester  where d.kode_prodi = '71' and d.kode_dosen = '${kode_dosen}' and m.tahun_angkatan = '${tahun_angkatan}') status_mahasiswa_per_perwalian group by status`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          tahun_angkatan: tahun_angkatan,
          list_status: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getMahasiswaAngkatan = async (req, res) => {
  const { kode_dosen, tahun_angkatan } = req.query;

  try {
    const resdb = await pool.query(
      `select distinct m.nim, initcap(m.nama) as nama, ms.total_sks, ms.ipk, ms.status, pk.poin_keaktifan, c.id_cekal, c.jenis as cekal, c.deskripsi from dosen d join perwalian_dosen pd on d.kode_dosen = pd.kode_dosen join mahasiswa m on m.nim = pd.nim join mahasiswa_status ms on ms.nim = m.nim join (select ms.nim, max(ms.kode_semester) as max_kode_tahun_semester from mahasiswa_status ms group by ms.nim) max_kode_semester on ms.nim = max_kode_semester.nim and ms.kode_semester = max_kode_semester.max_kode_tahun_semester join poin_keaktifan pk on pk.nim = m.nim 
            join bridge_cekal bc on bc.nim = m.nim join cekal c on c.id_cekal = bc.id_cekal  where d.kode_prodi = '71' and d.kode_dosen = '${kode_dosen}' and m.tahun_angkatan = '${tahun_angkatan}'`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan",
        response: {
          tahun_angkatan: tahun_angkatan,
          list_status: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getIPSMahasiswa = async (req, res) => {
  const { nim } = req.query;

  try {
    const resdb = await pool.query(
      `select k.kode_semester, sum(mk.sks) as total_sks, case when sum(mk.sks) > 0 then round((sum(round((mk.sks * k.nilai_angka)::numeric, 1)) / sum(mk.sks))::numeric, 2) else 0 end as ips from khs k join matakuliah mk on mk.kode_matakuliah = k.kode_matakuliah where nim = '${nim}' group by k.kode_semester order by kode_semester asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          nim: nim,
          list_ips: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getIPKTotalSKSMahasiswa = async (req, res) => {
  const { nim } = req.query;

  try {
    const resdb = await pool.query(
      `select initcap(m.nama) as nama_mahasiswa,  ms.nim, ms.ipk, ms.total_sks from mahasiswa_status ms join mahasiswa m on m.nim = ms.nim  where ms.nim = '${nim}' order by kode_semester desc limit 1`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          nim: nim,
          list_ips: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getSACMahasiswa = async (req, res) => {
  const { nim } = req.query;

  try {
    const resdb = await pool.query(
      `select pk.nim, pk.kegiatan, pk.jabatan, pk.prestasi, pk.poin_keaktifan, case when cast(m.tahun_angkatan as integer) <= 2019 then 50 when cast(m.tahun_angkatan as integer) > 2019 then 100 end as syarat from poin_keaktifan pk join mahasiswa m on pk.nim = m.nim where pk.nim = '${nim}'`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          nim: nim,
          data_sac: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getMataKuliahMahasiswa = async (req, res) => {
  const { nim } = req.query;

  try {
    const resdb = await pool.query(
      `select distinct initcap(mk.nama_matakuliah) as nama_matakuliah from khs k join matakuliah mk on mk.kode_matakuliah = k.kode_matakuliah where k.nim ='${nim}' order by nama_matakuliah asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan",
        response: {
          nim: nim,
          data_matakuliah: resdb.rows.map(
            (item) => item.nama_matakuliah
          ),
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getStatusMahasiswa = async (req, res) => {
  const { nim } = req.query;

  try {
    const resdb = await pool.query(
      `select ms.status from mahasiswa_status ms where ms.nim = '${nim}' order by ms.kode_semester desc limit 1`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          nim: nim,
          status: resdb.rows.map((item) => item.status),
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getIPKPerTahunAngkatan = async (req, res) => {
  const { kode_dosen, tahun_angkatan } = req.query;

  try {
    let resdb = await pool.query(
      `select ms.kode_semester, round(avg(ms.ipk)::decimal,2) from mahasiswa_status ms join perwalian_dosen pd on ms.nim = pd.nim join mahasiswa m on m.nim = ms.nim where pd.kode_dosen = '${kode_dosen}' and m.tahun_angkatan = '${tahun_angkatan}' and mod(ms.kode_semester::integer,2) = 0 group by ms.kode_semester`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: resdb.rows,
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getMahasiswaAngkatanFiltered = async (req, res) => {
  const { kode_dosen, tahun_angkatan, filter } = req.query;

  try {
    let tempFilter = ""
    switch (filter) {
      case "Semua Mahasiswa":
        tempFilter = ""
        break;
      case "Aktif dan Tidak Aktif":
        tempFilter = "and (ms.status = 'AK' or ms.status = 'TA')"
        break;
      default:
        tempFilter = `and ms.status = '${filter}'`
        break;
    }

    const resdb = await pool.query(
      `select distinct m.nim, initcap(m.nama) as nama, ms.total_sks, ms.ipk, ms.status, pk.poin_keaktifan, c.id_cekal, c.jenis as cekal, c.deskripsi from dosen d join perwalian_dosen pd on d.kode_dosen = pd.kode_dosen join mahasiswa m on m.nim = pd.nim join mahasiswa_status ms on ms.nim = m.nim join (select ms.nim, max(ms.kode_semester) as max_kode_tahun_semester from mahasiswa_status ms group by ms.nim) max_kode_semester on ms.nim = max_kode_semester.nim and ms.kode_semester = max_kode_semester.max_kode_tahun_semester join poin_keaktifan pk on pk.nim = m.nim 
            join bridge_cekal bc on bc.nim = m.nim left join cekal c on c.id_cekal = bc.id_cekal  where d.kode_prodi = '71' and d.kode_dosen = '${kode_dosen}' and m.tahun_angkatan = '${tahun_angkatan}'${tempFilter}`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message:
          "Berhasil mendapatkan " +
          resdb.rows.length +
          " data mahasiswa",
        response: {
          tahun_angkatan: tahun_angkatan,
          list_mahasiswa: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getListMahasiswaAngkatanByTahun = async (req, res) => {
  const { kode_dosen, tahun_angkatan } = req.query;

  try {
    const resdb = await pool.query(
      `select  distinct  m.nim, initcap(m.nama) as nama, 'Belum Presensi' as status, '' as keterangan from perwalian_dosen pd join mahasiswa m on m.nim = pd.nim where pd.kode_dosen = '${kode_dosen}' and m.tahun_angkatan = '${tahun_angkatan}' order by m.nim asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message:
          "Berhasil mendapatkan " +
          resdb.rows.length +
          " data mahasiswa",
        response: {
          list_mahasiswa: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getNamaNimMahasiswaKhusus = async (req, res) => {
  const { inputan } = req.query;

  try {
    let resdb = await pool.query(
      `select nim, initcap(nama) as nama from mahasiswa where tahun_angkatan::integer >= 2015 and (nim like '%${inputan}%' or lower(nama) like '%${inputan}%') order by nim asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          list_mahasiswa: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getKRSMahasiswa = async (req, res) => {
  const { nim } = req.query;

  try {
    let resdb = await pool.query(
      `select k.kode_matakuliah, mk.nama_matakuliah, k.grup, mk.sks, mk.harga from krs k join matakuliah mk on k.kode_matakuliah = mk.kode_matakuliah join mahasiswa m on m.nim = k.nim where k.nim = '${nim}' and k.kode_semester = concat(m.tahun_angkatan::varchar, '1')  order by mk.nama_matakuliah asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "Berhasil mendapat " + resdb.rows.length + " data",
        list_matakuliah: resdb.rows,
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getNamaNimMahasiswa = async (req, res) => {
  const { inputan, kode_dosen } = req.query;

  try {
    let resdb = await pool.query(
      `select distinct m.nim, initcap(m.nama) as nama  from perwalian_dosen pd join mahasiswa m on pd.nim = m.nim where pd.kode_dosen = '${kode_dosen}' and (lower(m.nim) like '%${inputan}%' or lower(m.nama) like '%${inputan}%') order by m.nim asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          list_mahasiswa: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCekalMahasiswa = async (req, res) => {
  const { nim } = req.query;

  try {
    const resdb = await pool.query(
      `select bc.id_cekal, c.jenis, c.deskripsi from cekal c join bridge_cekal bc on c.id_cekal = bc.id_cekal where bc.nim = '${nim}'`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          nim: nim,
          cekal: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getjumlahStatusAktifDanTidakAktifMahasiswa = async (req, res) => {
  const { kode_dosen, tahun_angkatan } = req.query;

  try {
    const resdb = await pool.query(
      `select count (distinct(m.nim)) from dosen d join perwalian_dosen pd on d.kode_dosen = pd.kode_dosen join mahasiswa m on m.nim = pd.nim join mahasiswa_status ms on ms.nim = m.nim join (select ms.nim, max(ms.kode_semester) as max_kode_tahun_semester from mahasiswa_status ms group by ms.nim) max_kode_semester on ms.nim = max_kode_semester.nim and ms.kode_semester = max_kode_semester.max_kode_tahun_semester join poin_keaktifan pk on pk.nim = m.nim join bridge_cekal bc on bc.nim = m.nim left join cekal c on c.id_cekal = bc.id_cekal  where d.kode_prodi = '71' and d.kode_dosen = '${kode_dosen}' and m.tahun_angkatan = '${tahun_angkatan}' and (ms.status = 'AK' or ms.status = 'TA')`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: resdb.rows,
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getListCountMahasiswaAngkatan = async (req, res) => {
  try {
    const resdb = await pool.query(
      `select m.tahun_angkatan, count(m.nim) as jumlah_mahasiswa from mahasiswa m where m.nim like '71%' and (m.kode_prodi = '71' and m.tahun_angkatan >= '2015') group by m.tahun_angkatan order by m.tahun_angkatan asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: resdb.rows,
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCountStatusMahasiswaByYear = async (req, res) => {
  const { tahun_angkatan } = req.query;

  try {
    const resdb = await pool.query(
      `select status, count(ms.status) as jumlah from mahasiswa_status ms join mahasiswa m on ms.nim = m.nim where m.tahun_angkatan = '${tahun_angkatan}' and m.kode_prodi = '71' and ms.kode_semester = (select max(ms2.kode_semester) from mahasiswa_status ms2 where ms2.nim = ms.nim) group by ms.status;
`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: resdb.rows,
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCountStatusMahasiswaAktifDanTidakAktifByYear = async (req, res) => {
  const { tahun_angkatan } = req.query;

  try {
    const resdb = await pool.query(
      `select status, count(ms.status) as jumlah from mahasiswa_status ms join mahasiswa m on ms.nim = m.nim where m.tahun_angkatan = '${tahun_angkatan}' and m.kode_prodi = '71' and ms.kode_semester = (select max(ms2.kode_semester) from mahasiswa_status ms2 where ms2.nim = ms.nim) group by ms.status;
`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: resdb.rows,
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const searcMahasiswaKaprodi = async (req, res) => {
  const { inputan } = req.query;

  try {
    const resdb = await pool.query(
      `select nim, initcap(nama) as nama from mahasiswa where kode_prodi = '71' and nim like '71%' and (lower(nama) like '%${inputan}%' or nim like '%${inputan}%') order by nim asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: resdb.rows,
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getMahasiswaAngkatanFilteredKaProdi = async (req, res) => {
  const { tahun_angkatan, filter } = req.query;

  try {
    let tempFilter = ""
    switch (filter) {
      case "Semua Mahasiswa":
        tempFilter = ""
        break;
      case "Aktif dan Tidak Aktif":
        tempFilter = "and (ms.status = 'AK' or ms.status = 'TA')"
        break;
      default:
        tempFilter = `and ms.status = '${filter}'`
        break;
    }

    const resdb = await pool.query(
      `select distinct m.nim, initcap(m.nama) as nama, ms.total_sks, ms.ipk, ms.status, pk.poin_keaktifan, c.id_cekal, c.jenis as cekal, c.deskripsi from  mahasiswa m  join mahasiswa_status ms on ms.nim = m.nim join (select ms.nim, max(ms.kode_semester) as max_kode_tahun_semester from mahasiswa_status ms group by ms.nim) max_kode_semester on ms.nim = max_kode_semester.nim and ms.kode_semester = max_kode_semester.max_kode_tahun_semester join poin_keaktifan pk on pk.nim = m.nim join bridge_cekal bc on bc.nim = m.nim left join cekal c on c.id_cekal = bc.id_cekal  where m.kode_prodi = '71'  and m.tahun_angkatan = '${tahun_angkatan}'${tempFilter}`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message:
          "Berhasil mendapatkan " +
          resdb.rows.length +
          " data mahasiswa",
        response: {
          tahun_angkatan: tahun_angkatan,
          list_mahasiswa: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

module.exports = {


  getMahasiswaAngkatanFiltered,

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

  getCekalMahasiswa,
  getjumlahStatusAktifDanTidakAktifMahasiswa,

  // getListMahasiswaGroupedByYear
  getListCountMahasiswaAngkatan,
  getCountStatusMahasiswaByYear,
  searcMahasiswaKaprodi,
  getCountStatusMahasiswaAktifDanTidakAktifByYear,
  getMahasiswaAngkatanFilteredKaProdi

};
