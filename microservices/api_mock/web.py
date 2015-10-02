from flask import Flask, jsonify, request
from flask.ext.cors import cross_origin

app = Flask(__name__)

@app.route('/questions', methods=['GET'])
@cross_origin()
def get_questions():
    userName = request.args.get('userName', '')
    questions = {'q1': "party", 'userName': userName}
    return jsonify(questions)

app.run(debug=True, port=7777)

