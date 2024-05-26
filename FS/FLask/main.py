from flask import Flask, request, jsonify
from flask_cors import CORS
import json


app = Flask(__name__)
CORS(app)
 
@app.route('/')
def hello_world():
    print(request.method)
    data = jsonify({"message": "My data"})
    return data

if __name__ == '__main__':
    app.run(debug=True,host='172.18.87.95', port=5000)

