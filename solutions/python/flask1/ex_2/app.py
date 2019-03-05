"""
Flask: Form handling
"""

from flask import Flask, url_for, redirect, request

app = Flask(__name__)

HTML_FRAME_TOP = "<!DOCTYPE HTML>\n<html>\n<head>\n<title>Flask form example</title>\n</head>\n<body>\n"
HTML_FRAME_BOTTOM = "</body>\n</html>\n"

postcodes = {
    "0001": "Oslo",
    "4036": "Stavanger",
    "4041": "Hafrsfjord",
    "7491": "Trondheim",
    "9019": "Tromsø"
}

@app.route("/")
def index():
    # redirect to form
    return redirect(url_for("static", filename="form.html"))


@app.route("/sendform", methods=["GET"])
def getEntry():
    number = request.args["number"]
    city = postcodes.get(number, None)
    html = HTML_FRAME_TOP.replace("{css}", url_for("static", filename="style.css"))
    
    if city != None:
        html += number + " : " + city + "<br>"
    else:
        html += "No city with postnumber " + number + " was found"

    html += "<br><a href='" + url_for("index") + "'> back </a>"
    html += HTML_FRAME_BOTTOM
    return html

@app.route("/sendform", methods=["POST"])
def addEntry():
    postcodes[request.form["number"]] = request.form["city"]
    
    html = HTML_FRAME_TOP.replace("{css}", url_for("static", filename="style.css"))
    html += "Added: " + request.form["city"] \
            + " with " \
            + "Postnumber: " + request.form["number"]
    html += "<br><a href='" + url_for("index") + "'> back </a>"
    html += HTML_FRAME_BOTTOM
    return html


if __name__ == "__main__":
    app.run()
