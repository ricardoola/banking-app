
import json
from os import environ as env
import os
import logging
from urllib.parse import quote_plus, urlencode
import ssl
from passlib.hash import sha256_crypt



from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask, redirect, render_template, session, url_for, request
from flask_cors import CORS
import mysql.connector

context = ssl.SSLContext(ssl.PROTOCOL_TLS)
context.load_cert_chain('/etc/letsencrypt/live/mypythonproject.com/cert.pem', '/etc/letsencrypt/live/mypythonproject.com/privkey.pem')



ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)



app = Flask(__name__)
app.secret_key = env.get("APP_SECRET_KEY")
#logging.basicConfig(filename='server.log', level=logging.INFO)
app.debug = True
CORS(app)

def connect():
    mydb = mysql.connector.connect(
      host= os.getenv('DB_HOST'),
      user=os.getenv('DB_USER'),
      password=os.getenv('DB_PASSWORD'),
      database=os.getenv('DB_NAME')
    )
    return mydb

def encryptPassword(password):
    return sha256_crypt.hash(password)

@app.route("/check_sign_up", methods=["POST", "GET"])
def check_sign_up():
    if request.method == "POST":
        # check if the user has an account
        data = request.json
        mydb = connect()
        mycursor = mydb.cursor()
        email, password = [data.get(key) for key in ['email', 'password']] #get the data from the POST request
        account_present_query = "SELECT COUNT(*) FROM Users WHERE email = %s"
        mycursor.execute(account_present_query, (email,))
        result = mycursor.fetchone()

        if result[0] > 0:
            print("FOUND EMAIL")
            password_query = "SELECT PW FROM Users WHERE email = %s"
            mycursor.execute(password_query, (email,))
            password_result = mycursor.fetchone()
        
            if password_result is not None:
                retrieved_password = password_result[0]
                print(strcmpr retrieved_password)


        mycursor.close()
        mydb.close()

        if result[0] == 0:
            print("ACCOUNT DOES NOT EXIST")
            return {"message": "Account does not exist"}, 409
        else:
            print("EXISTING ACCOUNT") 
            return {"message": "Successful login"}, 200

@app.route("/signup", methods=["POST", "GET"])
def signup():
    if request.method == "POST":
        # Process the signup data
        data = request.json
        mydb = connect()
        mycursor = mydb.cursor()
        first_name, last_name, email, password, confirm_password = [data.get(key) for key in ['firstName', 'lastName', 'email', 'password', 'confirmPassword']] #get the data from the POST request
        userData = [first_name, last_name, email, password]
        email_present_query = "SELECT COUNT(*) FROM Users WHERE email = %s" 
        mycursor.execute(email_present_query, (email,))
        result = mycursor.fetchone()
	
        if result[0] > 0:
            return {"message": "Account already exists"}, 409  # Return a response with status code 409 (Conflict)
        else: 
            userData[3] = encryptPassword(userData[3])
            add_user = "INSERT INTO Users (FirstName, LastName, Email, PW) VALUES (%s, %s, %s, %s)"
            mycursor.execute(add_user, userData)
            mydb.commit()
            mycursor.close()
            mydb.close()
            return "Successfuly attempted to add user"
    else:
        # Handle GET request, if needed
        return "Signup page"


@app.route("/logout")
def logout():
    pass


if __name__ == "__main__":
    app.run(host="161.35.114.218", port=env.get("PORT", 5000),ssl_context=context)
