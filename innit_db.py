import sqlite3
# connecting to sql maybe??
conn = sqlite3.connect("database.db")
# codes from SQL, that's executred with this .py in format, on conn.execute. will resultings in a table.
# 1st Database
conn.execute("""
CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    score INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")
# for feedback database. 
# 2nd Database.
conn.execute("""
CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")


conn.commit()
conn.close()

print("Database & tables ready!")
