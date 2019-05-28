from flask import Flask, request, render_template, redirect, url_for, flash, abort, session
from datetime import datetime
import json
from os import urandom

LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut leo turpis, vulputate quis volutpat porta, blandit vulputate mauris. Duis dapibus finibus tortor. Duis ante dolor, facilisis sed pellentesque id, blandit vehicula nunc. In hac habitasse platea dictumst. Pellentesque nunc lacus, pellentesque pharetra luctus at, egestas vitae mi. Aliquam semper ex id quam commodo fermentum. Morbi vulputate sapien et ante malesuada, quis viverra turpis interdum. Donec at dui sit amet nulla pulvinar dictum a sed lacus. Sed in pharetra leo. Sed dolor sapien, pellentesque hendrerit velit eu, aliquet tincidunt nibh. Cras hendrerit facilisis diam, nec imperdiet justo tristique in. Nunc aliquam semper ex, sit amet convallis leo convallis id. Curabitur vitae odio commodo, cursus ex egestas, tempor metus. Proin tincidunt sem ac egestas ornare. "


app = Flask(__name__)
app.secret_key = urandom(24)

@app.route("/")
def index():
    notes = [
        {
            "id": "1",
            "title":  "Meeting notes",
            "date": datetime(2019, 5, 1),
            "content": LOREM_IPSUM,
            "imageUrl": url_for("static", filename="images/meeting.png")
        },
        {
            "id": "2",
            "title":  "Reading notes",
            "date": datetime(2019, 4, 8),
            "content": LOREM_IPSUM,
            "imageUrl": url_for("static", filename="images/books.jpg")
        },
        {
            "id": "3",
            "title":  "Lecture notes",
            "date": datetime(2019, 5, 13),
            "content": LOREM_IPSUM,
            "imageUrl": url_for("static", filename="images/lecture.png")
        },

    ]

    for note in session.get("addedPosts", []):
        notes.append(note)

    for note in notes:
        note["fdate"] = formatDate(note["date"])

    return render_template("index.html", notes=notes)


def formatDate(date):
    return date.strftime("%d %B %Y")

@app.route("/note/<note_id>")
def getNote(note_id):
    notes = [
        {
            "id": "1",
            "title":  "Meeting notes",
            "date": datetime(2019, 5, 1),
            "content": LOREM_IPSUM,
            "imageUrl": url_for("static", filename="images/meeting.png")
        },
        {
            "id": "2",
            "title":  "Reading notes",
            "date": datetime(2019, 4, 8),
            "content": LOREM_IPSUM,
            "imageUrl": url_for("static", filename="images/books.jpg")
        },
        {
            "id": "3",
            "title":  "Lecture notes",
            "date": datetime(2019, 5, 13),
            "content": LOREM_IPSUM,
            "imageUrl": url_for("static", filename="images/lecture.png")
        },

    ]

    for note in session.get("addedPosts", []):
        notes.append(note)

    for note in notes:
        if note["id"] == note_id:
            note["fdate"] = formatDate(note["date"])
            return render_template("innerArticle.html", note=note)
    else:
        abort(404) # 404 Not Found

@app.route("/read")
def read():
    return redirect(url_for("index"))

@app.route("/add",methods = ['POST', 'GET'])
def add():
    if request.method == 'GET':
        return render_template("addForm.html")
    else:
        form = request.form
        if form.get("title", "") == "" or \
            form.get("date", "") == "" or \
            form.get("imageUrl", "") == "" or \
            form.get("content", "None") == "None":
                return render_template("addForm.html")
        else:
            newPosts = []
            if "addedPosts" in session:
                newPosts = session["addedPosts"]
            newPost = {
                "id": "added" + str(len(newPosts)+1),
                "title": form["title"],
                "date": datetime.strptime(form["date"], "%Y-%m-%d"),
                "imageUrl": url_for("static", filename=form["imageUrl"]),
                "content": form["content"]
            }
            newPosts.append(newPost)
            session["addedPosts"] = newPosts
            
            return redirect( url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)