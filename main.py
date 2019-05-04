#!flask/bin/python
from flask import Flask, jsonify
from google.cloud import firestore

# Project ID is determined by the GCLOUD_PROJECT environment variable
db = firestore.Client()

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/enterData')
def enterData():
    # setUser = db.collection('users').add({
    #     'userName': "user1",
    #     'password': "pass1"
    # })
    # setUser = db.collection('users').add({
    #     'userName': "user2",
    #     'password': "pass2"
    # })
    # setUser = db.collection('users').add({
    #     'userName': "user3",
    #     'password': "pass3"
    # })

    # setUser = db.collection('homeless').add({
    #     'userName': "Joe",
    #     'password': "Homeless",
    #     'picture': "test.png",
    #     'location': "30th St Station",
    #     'donation': 30
    # })

    # setUser = db.collection('homeless').add({
    #     'firstName': "Dan",
    #     'lastName': "Homeless",
    #     'picture': "test2.png",
    #     'location': "30th St Station",
    #     'donation': 50
    # })
    #
    # setUser = db.collection('homeless').add({
    #     'firstName': "Tom",
    #     'lastName': "Homeless",
    #     'picture': "test3.png",
    #     'location': "30th St Station",
    #     'donation': 70
    # })



    return ""

@app.route('/all')
def all():
    x = []
    users_ref = db.collection(u'users')
    docs = users_ref.get()
    print(docs)
    for doc in docs:
        print(doc.to_dict())
        x.append(doc.to_dict())

    return jsonify(x)


if __name__ == '__main__':
    app.run(debug=True)
