from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3


app = Flask(
    __name__,
    static_folder="static",
    template_folder="templates"
)

app.secret_key = "secret123"

def getdb():
    conn = sqlite3.connect("database.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def home():
    return render_template("web.html")  

@app.route("/quest")
def quest():
    return render_template("quest.html")

# @app.route("") 

# to get user"name" values.?!/?
@app.route("/submit", methods=["POST"])
def submit():
    username = request.form["name"]
    score = 0

    session["username"] = username  # INI KUNCI


    conn = sqlite3.connect("database.db")
    cur = conn.cursor()

    cur.execute(
        "INSERT INTO scores (username, score) VALUES (?, ?)",
        (username, score)
    )

    conn.commit()
    conn.close()

    return '', 204



@app.route("/answer", methods=["POST"])
def answer():

    user_answer = request.form.get("answer") #ambil input si user ahuy

    if "score" not in session: # ngestate si user score awalanya
        session["score"] = 0


    correct_answer = "A"# correct answer == A  else : B wrong

#
    if user_answer == correct_answer: #kalk sesuai correct answer jadi obj sini
        session["score"] += 10
    else:
        session["score"] -= 10

    # balik ke page quiz / lanjut soal
    return '', 204  # continues to -. q.(n+1)

@app.route("/finish", methods=["POST"])
def finish():
    username = session.get("username")
    score = session.get("score", 0)

    conn = sqlite3.connect("database.db")
    cur = conn.cursor()

    cur.execute(
        "UPDATE scores SET score = ? WHERE username = ?",
        (score, username)
    )

    conn.commit()
    conn.close()

    return "Score saved"



@app.route("/about")
def about():
    conn = getdb()
    feedbacks = conn.execute(
        "SELECT * FROM feedback ORDER BY created_at DESC"
    ).fetchall()
    conn.close()

    return render_template("about.html", feedbacks=feedbacks)



@app.route("/feedback", methods=["POST"])
def feedback():
    comment = request.form["comment"]
    username = session.get("username", "Anonymous")

    if comment.strip() == "":
        return redirect(url_for("about"))

    conn = getdb()
    conn.execute(
        "INSERT INTO feedback (username, message) VALUES (?, ?)",
        (username, comment)
    )
    conn.commit()
    conn.close()

    return redirect(url_for("about"))


@app.route("/leaderboard")
def leaderboard():
    conn = getdb()
    leaders = conn.execute(
        "SELECT username, score FROM scores ORDER BY score DESC LIMIT 10"
    ).fetchall()
    conn.close()

    return render_template("leaderboard.html", leaders=leaders)










if __name__ == "__main__":
    app.run(debug=True)
    
# connector
conn =  sqlite3.connect("database.db")
conn.close()


