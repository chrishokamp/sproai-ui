from flask import Flask, jsonify, request
from flask.ext.cors import cross_origin

app = Flask(__name__)

@app.route('/questions', methods=['GET'])
@cross_origin()
def get_questions():
    #str1 = request.args.get('str1', '')
    #str2 = request.args.get('str2', '')
    questions = {'q1': "party"}
    return jsonify(questions)

app.run(debug=True, port=7777)

