from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///friends.db'

db = SQLAlchemy(app)


class Friends(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(1000), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.time)

    def __repr__(self):
        return '<Name %r>' % self.id


app.route('/', methods=['POST', 'GET'])
def index():
    title = "heheheheh"

    if request.method == "POST":
        return "you presseed button"
    else:
        return render_template("/", title=title)


app.route('/friends')
def friends():
    title = "my friend list"
    if request.method == "POST":
        return "you presseed button"
    else:
        return render_template("/friends.html", title=title)


if __name__ == "__main__":
    app.run(debug=True)