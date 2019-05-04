#!flask/bin/python
from flask import Flask, jsonify
from google.cloud import firestore

# Project ID is determined by the GCLOUD_PROJECT environment variable
db = firestore.Client()

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/app/users/login', methods=['POST'])
def login():
    print(login)
    return ""

@app.route('/app/users/getlogin', methods=['GET'])
def getlogin():
    print(username)
    return ""


@app.route('/users', methods=['GET'])
def all():
    x = []
    users_ref = db.collection(u'users')
    docs = users_ref.get()
    print(docs)
    for doc in docs:
        print(doc.to_dict())
        x.append(doc.to_dict())

    return jsonify({'users': x})


if __name__ == '__main__':
    app.run(debug=True)
