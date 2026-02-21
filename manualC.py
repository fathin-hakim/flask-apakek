import sqlite3

conn = sqlite3.connect("database.db")
conn.close()

print("database berhasil dibuat")




# TO DELETE A ROW IN A TABLE.
# # Sesuaikan dengan lokasi file database Anda jika berbeda
# conn = sqlite3.connect('database.db') 
# cursor = conn.cursor()

# # Kode untuk menghapus data (ganti 'nama_tabel' dengan nama tabel Anda)
# delete_query = "DELETE FROM scores WHERE id >= 1 AND id <= 16;"

# try:
#     cursor.execute(delete_query)
#     conn.commit() # Simpan perubahan
#     print(f"{cursor.rowcount} baris berhasil dihapus.")
# except sqlite3.Error as e:
#     print(f"Terjadi error: {e}")
# finally:
#     conn.close() # Pastikan koneksi ditutup
