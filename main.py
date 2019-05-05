#!flask/bin/python
from flask import Flask, jsonify, render_template, flash
from google.cloud import firestore
from forms import RegistrationForm, LoginForm
from flask_cors import CORS
import requests


# Project ID is determined by the GCLOUD_PROJECT environment variable
db = firestore.Client()

app = Flask(__name__)
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
CORS(app)

posts = [
    {
        'author': 'Corey Schafer',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'April 20, 2018'
    },
    {
        'author': 'Jane Doe',
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': 'April 21, 2018'
    }
]

@app.route('/')
def index():
    return "Hello, World!"

@app.route("/home")
def home():
    return render_template('home.html', posts=posts)

@app.route("/about")
def about():
    return render_template('about.html', title='About')

@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html', title='Register', form=form)


@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    print(form.email.data)
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template('login.html', title='Login', form=form)

@app.route('/enterData')
def enterData():
    # setUser = db.collection('users').add({
    #     'userName': "Duc",
    #     'password': "DucPass"
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
    # })a
    return ""

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    form = LoginForm()
    email = form.email.data
    password = form.password.data

    print(email)

    URL = "http://localhost:5000/users"
    req = requests.get(url=URL)
    users = req.json()
    d = users[0]
    print(d)
    Authentication = False
    
    for user in users:
        print (user["userName"], user["password"])
        if(email == user["userName"] and password == user["password"]):
            print("Login success")
            Authentication = True
            break

    print(Authentication)
    if(Authentication == True):
        print("")
        # Go somewhere
    
    
    return ""

# @app.route('/app/users/getlogin', methods=['GET'])
# def getlogin():
#     print(username)
#     return ""


@app.route('/users', methods=['GET'])
def all():
    x = []
    users_ref = db.collection(u'users')
    docs = users_ref.get()
    # print(docs)
    for doc in docs:
        # print(doc.to_dict())
        x.append(doc.to_dict())

    return jsonify(x)


if __name__ == '__main__':
    app.run(debug=True)
