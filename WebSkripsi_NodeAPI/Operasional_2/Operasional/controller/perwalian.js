const { Pool } = require("pg");
const customError = require("../utils/error");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "perwalian_operasional",
  user: "postgres",
  password: "123",
});
pool.connect();

const loginDosen2 = async (req, res) => {
  const { username, password } = req.query;

  try {
    const resdb = await pool.query(
      `select ld.id_login_dosen, ld.kode_dosen, d.nama_gelar as nama , ld.username, ld.password, ld.opsi_beranda, ld.opsi_detail_angkatan,  ld.is_kaprodi from login_dosen ld join dosen d on d.kode_dosen = ld.kode_dosen where ld.username = '${username}' and ld.password = '${password}' `
    );

    if ((resdb.rows.length = 1)) {
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


const getCatatanPerwalianDosenTerbaru = async (req, res) => {
  const { kode_dosen } = req.query;

  try {
    const resdb = await pool.query(
      `select cpd.*, initcap(m.nama) as nama from catatan_perwalian_dosen cpd left join mahasiswa m on cpd.nim = m.nim where kode_dosen = '${kode_dosen}' and is_arsip = false and is_hapus = false order by waktu desc limit 3`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          kode_dosen: kode_dosen,
          list_catatan_perwalian_dosen: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const insertCatatanPerwalianDosen = async (req, res) => {
  const {
    kode_dosen,
    judul,
    tipe,
    nim,
    nama_orang_tua,
    agenda_perwalian,
    tambah_peserta, // json
    waktu_awal,
    waktu_akhir,
    data_presensi_mahasiswa, // json
    tahun_angkatan,
  } = req.body;

  try {
    const query = `INSERT INTO catatan_perwalian_dosen 
        (kode_dosen, judul, tipe, nim, nama_orang_tua, agenda_perwalian, tambah_peserta, waktu_awal, waktu_akhir, data_presensi_mahasiswa, is_arsip, tahun_angkatan) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, false, $11) RETURNING id_catatan_perwalian_dosen`;

    const values = [
      kode_dosen,
      judul,
      tipe,
      nim,
      nama_orang_tua,
      agenda_perwalian,
      JSON.stringify(tambah_peserta),
      waktu_awal,
      waktu_akhir,
      JSON.stringify(data_presensi_mahasiswa),
      tahun_angkatan,
    ];
    const response = await pool.query(query, values);

    res.json({
      success: true,
      message: "Data berhasil ditambahkan!",
      id_catatan_perwalian_dosen:
        response.rows[0].id_catatan_perwalian_dosen,
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const updateIsArsipCatatanPerwalianDosen = async (req, res) => {
  const { id_catatan_perwalian_dosen, is_arsip, filter_arsip } = req.body;

  try {
    let filter = "";
    switch (filter_arsip) {
      case "current_time":
        filter = ", waktu_arsip = current_timestamp";
        break;
      case null:
        filter = ", waktu_arsip = null";
        break;
      default:
        break;
    }

    const resdb = await pool.query(
      `update catatan_perwalian_dosen set is_arsip = ${is_arsip}${filter} where id_catatan_perwalian_dosen = ${id_catatan_perwalian_dosen}`
    );
    let message = resdb.rowCount;
    return res.send({
      error: false,
      message: message + " data berhasil diubah",
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const updateIsDeleteCatatanPerwalianDosen = async (req, res) => {
  const { id_catatan_perwalian_dosen } = req.body;

  try {
    const resdb = await pool.query(
      `update catatan_perwalian_dosen set is_hapus = true where id_catatan_perwalian_dosen = '${id_catatan_perwalian_dosen}'`
    );

    let message = resdb.rowCount;
    return res.send({
      error: false,
      message: message + " data berhasil diubah",
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const updateCatatanPerwalianDosen = async (req, res) => {
  const {
    judul,
    tipe,
    nim,
    nama_orang_tua,
    agenda_perwalian,
    tambah_peserta,
    waktu,
    waktu_awal,
    waktu_akhir,
    data_presensi_mahasiswa,
    id_catatan_perwalian_dosen,
  } = req.body;

  try {
    let query = "";
    let values = [];

    if (nama_orang_tua !== "") {
      query = `UPDATE catatan_perwalian_dosen SET 
            judul = $1,
            tipe = $2,
            nim = $3,
            nama_orang_tua = $4,
            agenda_perwalian = $5,
            tambah_peserta = $6,
            waktu = $7,
            waktu_awal = $8,
            waktu_akhir = $9,
            data_presensi_mahasiswa = $10
        WHERE id_catatan_perwalian_dosen = $11`;

      values = [
        judul,
        tipe,
        nim,
        nama_orang_tua,
        agenda_perwalian,
        JSON.stringify(tambah_peserta),
        waktu,
        waktu_awal,
        waktu_akhir,
        JSON.stringify(data_presensi_mahasiswa),
        id_catatan_perwalian_dosen,
      ];
    } else {
      // jika nama_orang_tua kosong berarti jangan update nama orang tua
      query = `UPDATE catatan_perwalian_dosen SET 
                judul = $1,
                tipe = $2,
                nim = $3,
                agenda_perwalian = $4,
                tambah_peserta = $5,
                waktu = $6,
                waktu_awal = $7,
                waktu_akhir = $8,
                data_presensi_mahasiswa = $9
            WHERE id_catatan_perwalian_dosen = $10`;

      values = [
        judul,
        tipe,
        nim,
        agenda_perwalian,
        JSON.stringify(tambah_peserta),
        waktu,
        waktu_awal,
        waktu_akhir,
        JSON.stringify(data_presensi_mahasiswa),
        id_catatan_perwalian_dosen,
      ];
    }

    await pool.query(query, values);

    res.json({
      success: true,
      message: "Data berhasil diubah!",
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanPerwalianDosenFiltered = async (req, res) => {
  const { kode_dosen, sort_waktu, filter_tipe_catatan } = req.query;

  let resdb = "";
  try {
    const sortOrder = sort_waktu === "Paling Baru" ? "desc" : "asc";
    let filterTipe = "";

    switch (filter_tipe_catatan) {
      case "Semua Tipe":
        filterTipe = "";
        break;
      case "Mahasiswa":
        filterTipe = " and cpd.tipe = 'mahasiswa'";
        break;
      case "Orang Tua / Wali":
        filterTipe = " and cpd.tipe = 'orang-tua-wali'";
        break;
      case "Orang Tua / Wali dan Mahasiswa":
        filterTipe = " and cpd.tipe = 'orang-tua-wali-dan-mahasiswa'";
        break;
      case "Grup Angkatan":
        filterTipe = " and cpd.tipe = 'grup-angkatan'";
        break;
      default:
        // Penanganan jika tidak ada nilai yang cocok dengan case di atas
        filterTipe = "";
        break;
    }

    resdb = await pool.query(
      `select cpd.*, initcap(m.nama) as nama from catatan_perwalian_dosen cpd left join mahasiswa m on cpd.nim = m.nim where cpd.kode_dosen = '${kode_dosen}' and cpd.is_arsip = false${filterTipe} and cpd.is_hapus = false order by cpd.waktu ${sortOrder}`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          kode_dosen: kode_dosen,
          list_catatan_perwalian_dosen: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanPerwalianDosenArsipFiltered = async (req, res) => {
  const { kode_dosen, tahun_catatan, filter_tipe_catatan } = req.query;

  try {
    let resdb = await pool.query(
      `select cpd.*, initcap(m.nama) as nama  from catatan_perwalian_dosen cpd left join mahasiswa m on cpd.nim = m.nim where cpd.kode_dosen = '${kode_dosen}' and cpd.is_arsip = true and cpd.is_hapus = false and cpd.tipe = '${filter_tipe_catatan}' and extract(years from cpd.waktu) = ${tahun_catatan} order by cpd.waktu desc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "Berhasil mendapatkan " + resdb.rows.length + " data",
        response: {
          kode_dosen: kode_dosen,
          list_catatan_perwalian_dosen_arsip: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const searchCatatanPerwalianDosen = async (req, res) => {
  const { inputan, kode_dosen } = req.query;

  try {
    let resdb = await pool.query(
      `select cpd.*, initcap(m.nama) as nama from catatan_perwalian_dosen cpd left join mahasiswa m on cpd.nim = m.nim where (lower(cpd.judul) like '%${inputan.toLowerCase()}%' or lower(cpd.agenda_perwalian) like '%${inputan.toLowerCase()}%') and cpd.kode_dosen = '${kode_dosen}' and cpd.is_arsip = false and cpd.is_hapus = false order by cpd.waktu desc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          list_catatan_perwalian_dosen: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanDosenFiltered = async (req, res) => {
  const { kode_dosen, sort_waktu, filter_tipe_catatan } = req.query;

  let resdb = "";
  try {
    const sortOrder = sort_waktu === "Paling Baru" ? "desc" : "asc";
    let filterTipe = "";
    switch (filter_tipe_catatan) {
      case "Semua Tipe":
        filterTipe = "";
        break;
      case "Refleksi Dosen":
        filterTipe = "and cd.tipe  = 'refleksi-dosen'";
        break;
      case "Khusus":
        filterTipe = "and cd.tipe = 'khusus'";
        break;
      default:
        break;
    }

    resdb = await pool.query(
      `select cd.*, initcap(m.nama) as nama from catatan_dosen cd left join mahasiswa m on cd.nim = m.nim where cd.kode_dosen = '${kode_dosen}' and cd.is_hapus = false and cd.is_arsip = false ${filterTipe} order by cd.waktu ${sortOrder}`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          kode_dosen: kode_dosen,
          list_catatan_dosen: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const insertCatatanDosen = async (req, res) => {
  const {
    kode_dosen,
    judul,
    tipe,
    nim,
    waktu_awal,
    waktu_akhir,
    agenda_perwalian,
  } = req.body;

  try {
    const query = `insert into catatan_dosen (kode_dosen,judul,tipe,nim,waktu_awal,waktu_akhir, agenda_perwalian, is_arsip) values ($1,$2,$3,$4,$5,$6,$7,false)`;
    const values = [
      kode_dosen,
      judul,
      tipe,
      nim,
      waktu_awal,
      waktu_akhir,
      agenda_perwalian,
    ];

    await pool.query(query, values);

    res.json({
      success: true,
      message: "Data berhasil ditambahkan!",
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const updateCatatanDosen = async (req, res) => {
  const {
    judul,
    waktu,
    waktu_awal,
    waktu_akhir,
    agenda_perwalian,
    id_catatan_dosen,
  } = req.body;

  try {
    const query = `UPDATE catatan_dosen
        SET judul = $1,
            waktu = $2,
            waktu_awal = $3,
            waktu_akhir = $4,
            agenda_perwalian = $5
        WHERE id_catatan_dosen = $6`;

    const values = [
      judul,
      waktu,
      waktu_awal,
      waktu_akhir,
      agenda_perwalian,
      id_catatan_dosen,
    ];
    await pool.query(query, values);
    res.json({
      success: true,
      message: "Data berhasil ditambahkan!",
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const updateIsArsipCatatanDosen = async (req, res) => {
  const { id_catatan_dosen, is_arsip, filter_arsip } = req.body;

  try {
    let filter = "";
    switch (filter_arsip) {
      case "current_time":
        filter = ", waktu_arsip = current_timestamp";
        break;
      case null:
        filter = ", waktu_arsip = null";
        break;
      default:
        break;
    }

    const resdb = await pool.query(
      `update catatan_dosen set is_arsip = '${is_arsip}'${filter} where id_catatan_dosen = ${id_catatan_dosen}`
    );
    let message = resdb.rowCount;
    return res.send({
      error: false,
      message: message + " data berhasil diubah",
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const updateIsDeleteCatatanDosen = async (req, res) => {
  const { id_catatan_dosen } = req.body;

  try {
    const resdb = await pool.query(
      `update catatan_dosen set is_hapus = true where id_catatan_dosen = '${id_catatan_dosen}'`
    );
    let message = resdb.rowCount;
    return res.send({
      error: false,
      message: message + " data berhasil diubah",
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const searchCatatanDosen = async (req, res) => {
  const { inputan, kode_dosen } = req.query;

  try {
    const resdb = await pool.query(
      `select cd.*, initcap(m.nama) as nama from catatan_dosen cd left join mahasiswa m on cd.nim = m.nim where (lower(cd.judul) like '%${inputan.toLowerCase()}%' or lower(cd.agenda_perwalian) like '%${inputan.toLowerCase()}%') and cd.kode_dosen = '${kode_dosen}' and cd.is_arsip = false and cd.is_hapus = false order by cd.waktu desc `
    );
    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          list_catatan_dosen: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const gettAllCatatanGrupAngkatanDetail = async (req, res) => {
  const { tahun_angkatan, kode_dosen, sort_waktu } = req.query;

  try {
    let filter_waktu = sort_waktu === "Paling Baru" ? "desc" : "asc";
    const resdb = await pool.query(
      `select * from catatan_perwalian_dosen where kode_dosen = '${kode_dosen}' and tipe='grup-angkatan' and tahun_angkatan = '${tahun_angkatan}' and is_arsip = false and is_hapus = false order by waktu ${filter_waktu}`
    );
    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          list_catatan_grup_angkatan: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanAngkatanArsipFiltered = async (req, res) => {
  const { tahun_angkatan, kode_dosen, tahun_catatan } = req.query;

  try {
    const resdb = await pool.query(
      `select * from catatan_perwalian_dosen where kode_dosen = '${kode_dosen}' and tipe='grup-angkatan' and tahun_angkatan = '${tahun_angkatan}' and is_arsip = true and is_hapus = false and extract(years from waktu) = '${tahun_catatan}' order by waktu desc`
    );
    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          list_catatan_dosen: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanPerwalianDosenById = async (req, res) => {
  const { kode_dosen, id_catatan_perwalian_dosen } = req.query;

  try {
    const resdb = await pool.query(
      `select cpd.*, initcap(m.nama) as nama from catatan_perwalian_dosen cpd left join mahasiswa m on cpd.nim = m.nim where cpd.kode_dosen = '${kode_dosen}' and cpd.id_catatan_perwalian_dosen = ${id_catatan_perwalian_dosen} and cpd.is_arsip = false and cpd.is_hapus = false `
    );
    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          list_catatan_dosen_perwalian_dosen: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanDosenById = async (req, res) => {
  const { kode_dosen, id_catatan_dosen } = req.query;

  try {
    const resdb = await pool.query(
      `select cd.*, initcap(m.nama) as nama from catatan_dosen cd left join mahasiswa m on cd.nim = m.nim where cd.kode_dosen = '${kode_dosen}' and cd.id_catatan_dosen = ${id_catatan_dosen} and cd.is_arsip = false and cd.is_hapus = false`
    );
    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          list_catatan_dosen: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanDosenTerbaru = async (req, res) => {
  const { kode_dosen } = req.query;

  try {
    const resdb = await pool.query(
      `select cd.*, initcap(m.nama) as nama from catatan_dosen cd left join mahasiswa m on cd.nim = m.nim where cd.kode_dosen = '${kode_dosen}' and cd.is_arsip = false and cd.is_hapus = false order by cd.waktu desc limit 3`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          kode_dosen: kode_dosen,
          list_catatan_dosen: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanMahasiswaTerbaru = async (req, res) => {
  const { kode_dosen, nim } = req.query;

  try {
    const resdb = await pool.query(
      `select * from catatan_perwalian_dosen where kode_dosen = '${kode_dosen}' and nim = '${nim}' and is_arsip = false and is_hapus = false order by waktu desc limit 3`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          list_catatan_mahasiswa: resdb.rows,
        },
      });
    } else {
      return customError("Data gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanMahasiswaFiltered = async (req, res) => {
  const { kode_dosen, sort_waktu, filter_tipe_catatan, nim } = req.query;

  let resdb = "";
  try {
    const sortOrder = sort_waktu === "Paling Baru" ? "desc" : "asc";
    let filterTipe = "";

    switch (filter_tipe_catatan) {
      case "Semua Tipe":
        filterTipe = "";
        break;
      case "Mahasiswa":
        filterTipe = " and tipe = 'mahasiswa'";
        break;
      case "Orang Tua / Wali":
        filterTipe = " and tipe = 'orang-tua-wali'";
        break;
      case "Orang Tua / Wali dan Mahasiswa":
        filterTipe = " and tipe = 'orang-tua-wali-dan-mahasiswa'";
        break;
      default:
        // Penanganan jika tidak ada nilai yang cocok dengan case di atas
        filterTipe = "";
        break;
    }

    resdb = await pool.query(
      `select * from catatan_perwalian_dosen where kode_dosen = '${kode_dosen}' and nim = '${nim} 'and is_hapus = false and is_arsip = false${filterTipe} order by waktu ${sortOrder}`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          list_catatan_mahasiswa: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanMahasiswaHistory = async (req, res) => {
  const { kode_dosen, nim } = req.query;

  try {
    const resdb = await pool.query(
      `select cpd.*, initcap(m.nama) as nama, extract (year from cpd.waktu) as tahun_catatan from catatan_perwalian_dosen cpd left join mahasiswa m on cpd.nim = m.nim where cpd.kode_dosen = '${kode_dosen}' and cpd.nim = '${nim}' and cpd.is_arsip = false and cpd.is_hapus = false  order by tahun_catatan asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          list_catatan_mahasiswa: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanMahasiswaArsipFiltered = async (req, res) => {
  const { kode_dosen, tahun_catatan, filter_tipe_catatan, nim } = req.query;

  try {
    let resdb = await pool.query(
      `select cpd.*, initcap(m.nama) as nama from catatan_perwalian_dosen cpd join mahasiswa m on cpd.nim = m.nim where cpd.kode_dosen = '${kode_dosen}' and cpd.nim = '${nim}'and cpd.is_arsip = true and cpd.is_hapus = false and cpd.tipe = '${filter_tipe_catatan}' and extract(years from cpd.waktu) = ${tahun_catatan} order by cpd.waktu desc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: resdb.rows.length + " data berhasil ditemukan !",
        response: {
          list_catatan_perwalian_dosen_arsip: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getTahunArsipCatatanPerwalianDosen = async (req, res) => {
  const { kode_dosen } = req.query;

  try {
    let resdb = await pool.query(
      `select distinct extract(years from waktu) as tahun_catatan from catatan_perwalian_dosen where kode_dosen = '${kode_dosen}' and is_arsip = true and is_hapus = false order by tahun_catatan asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          list_tahun_catatan_arsip: resdb.rows.map(
            (item) => item.tahun_catatan
          ),
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getTahunArsipCatatanDosen = async (req, res) => {
  const { kode_dosen } = req.query;

  try {
    let resdb = await pool.query(
      `select distinct extract(years from waktu) as tahun_catatan from catatan_dosen where kode_dosen = '${kode_dosen}' and is_arsip = true and is_hapus = false order by tahun_catatan asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "berhasil",
        response: {
          list_tahun_catatan_arsip: resdb.rows.map(
            (item) => item.tahun_catatan
          ),
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanDosenArsipFiltered = async (req, res) => {
  const { kode_dosen, tahun_catatan, filter_tipe_catatan } = req.query;

  try {
    let resdb = await pool.query(
      `select cd.*, initcap(m.nama) as nama from catatan_dosen cd left join mahasiswa m on cd.nim = m.nim where cd.kode_dosen = '${kode_dosen}' and cd.is_arsip = true and cd.is_hapus = false and cd.tipe = '${filter_tipe_catatan}' and extract(years from cd.waktu) = ${tahun_catatan}  order by cd.waktu desc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "Berhasil mendapat " + resdb.rows.length + " data",
        response: {
          kode_dosen: kode_dosen,
          list_catatan_dosen_arsip: resdb.rows,
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getTahunArsipCatatanAngkatan = async (req, res) => {
  const { kode_dosen } = req.query;

  try {
    let resdb = await pool.query(
      `select distinct extract(years from waktu) as tahun_catatan from catatan_perwalian_dosen where kode_dosen = '${kode_dosen}' and is_arsip = true and is_hapus = false and tipe='grup-angkatan' order by tahun_catatan asc`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "Berhasil mendapat " + resdb.rows.length + " data",
        response: {
          list_tahun_catatan_arsip: resdb.rows.map(
            (item) => item.tahun_catatan
          ),
        },
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getCatatanGrupAngkatanTerbaru = async (req, res) => {
  const { kode_dosen, tahun_angkatan } = req.query;

  try {
    let resdb = await pool.query(
      `select * from catatan_perwalian_dosen where kode_dosen = '${kode_dosen}' and is_arsip = false and is_hapus = false and tahun_angkatan = '${tahun_angkatan}' order by waktu desc limit 3`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "Berhasil mendapat " + resdb.rows.length + " data",
        response: resdb.rows,
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getOpsiUrutanBeranda = async (req, res) => {
  const { kode_dosen } = req.query;

  try {
    let resdb = await pool.query(
      `select opsi_beranda from login_dosen where kode_dosen = '${kode_dosen}'`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "Berhasil mendapat " + resdb.rows.length + " data",
        response: resdb.rows,
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const setOpsiUrutanBeranda = async (req, res) => {
  const { kode_dosen, inputan } = req.body;

  try {
    const resdb = await pool.query(
      `update login_dosen set opsi_beranda = '${inputan}' where kode_dosen = '${kode_dosen}'`
    );
    return res.send({
      error: false,
      message: "Data berhasil diubah",
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const updateTambahPesertaCatatanPerwalian = async (req, res) => {
  const { tambah_peserta, id_catatan_perwalian_dosen } = req.body;

  let tempTambahPeserta = JSON.stringify(tambah_peserta);

  try {
    const resdb = await pool.query(
      `update catatan_perwalian_dosen set tambah_peserta = '${tempTambahPeserta}' where id_catatan_perwalian_dosen = '${id_catatan_perwalian_dosen}'`
    );
    let message = resdb.rowCount;
    return res.send({
      error: false,
      message: message + " data berhasil diubah",
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getOpsiUrutanDetailAngkatan = async (req, res) => {
  const { kode_dosen } = req.query;

  try {
    let resdb = await pool.query(
      `select opsi_detail_angkatan from login_dosen where kode_dosen = '${kode_dosen}'`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "Berhasil mendapat " + resdb.rows.length + " data",
        response: resdb.rows,
      });
    } else {
      return customError("Data tidak ada atau gagal diambil!", 404, res);
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const setOpsiUrutanDetailAngkatan = async (req, res) => {
  const { kode_dosen, inputan } = req.body;

  try {
    const resdb = await pool.query(
      `update login_dosen set opsi_detail_angkatan = '${inputan}' where kode_dosen = '${kode_dosen}'`
    );
    return res.send({
      error: false,
      message: "Data berhasil diubah",
    });
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

const getMahasiswaPerwalianByYear = async (req, res) => {
  const { tahun_angkatan } = req.query;

  try {
    let resdb = await pool.query(
      `select m.tahun_angkatan, m.nim, initcap(m.nama) as nama, ms.kode_semester, ms.total_sks, ms.ipk, ms.status, pk.poin_keaktifan, c.id_cekal, c.jenis as cekal, c.deskripsi from mahasiswa m join mahasiswa_status ms on m.nim = ms.nim join poin_keaktifan pk on m.nim = pk.nim join bridge_cekal bc on bc.nim = m.nim join cekal c on c.id_cekal = bc.id_cekal where kode_prodi = '71' and m.tahun_angkatan = '${tahun_angkatan}' and ms.kode_semester = (select max(ms2.kode_semester) from mahasiswa_status ms2 where ms2.nim = m.nim) order by m.nim asc;`
    );

    if (resdb.rows.length) {
      return res.send({
        error: false,
        message: "Berhasil mendapat " + resdb.rows.length + " data",
        response: resdb.rows,
      });
    } else {
      return res.send({
        error: true,
        message: "Tidak ada data",
        response: [],
      });
    }
  } catch (error) {
    return customError(error.message, 500, res);
  }
};

module.exports = {
  getCatatanPerwalianDosenTerbaru, insertCatatanPerwalianDosen,
  updateIsArsipCatatanPerwalianDosen,
  updateIsDeleteCatatanPerwalianDosen,
  updateCatatanPerwalianDosen,
  updateCatatanPerwalianDosen,
  getCatatanPerwalianDosenFiltered,
  getCatatanPerwalianDosenArsipFiltered,
  searchCatatanPerwalianDosen,
  getCatatanDosenFiltered,
  insertCatatanDosen,
  updateCatatanDosen,
  updateIsArsipCatatanDosen,
  updateIsDeleteCatatanDosen,
  searchCatatanDosen,
  gettAllCatatanGrupAngkatanDetail,
  getCatatanAngkatanArsipFiltered,
  getCatatanPerwalianDosenById,
  getCatatanDosenById,
  getCatatanDosenTerbaru,
  getCatatanMahasiswaTerbaru,
  getCatatanMahasiswaHistory,
  getCatatanMahasiswaFiltered,
  getCatatanMahasiswaArsipFiltered,
  getTahunArsipCatatanPerwalianDosen,
  getTahunArsipCatatanDosen,
  getCatatanDosenArsipFiltered,
  getTahunArsipCatatanAngkatan,
  getCatatanGrupAngkatanTerbaru,
  getOpsiUrutanBeranda,
  setOpsiUrutanBeranda,
  updateTambahPesertaCatatanPerwalian,
  getOpsiUrutanDetailAngkatan,
  setOpsiUrutanDetailAngkatan,


  /// api baru
  loginDosen2,

  getMahasiswaPerwalianByYear
};