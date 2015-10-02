from flask import Flask, jsonify, request
from flask.ext.cors import cross_origin

app = Flask(__name__)

@app.route('/questions', methods=['GET'])
@cross_origin()
def get_questions():
    userName = request.args.get('userName', '')
    questions = [
        {
            "answers": [
                "Not much, really.", 
                "Oh, nothing interesting", 
                "Just wanted to say hi.", 
                "There's no 4th answer."
            ], 
            "question_id": 1, 
            "question_str": "What's up?"
        }, 
        {
            "answers": [
                "Man U.", 
                "Barcelona.", 
                "Bayern Munich.", 
                "Liverpool."
            ], 
            "question_id": 2, 
            "question_str": "What's your favorite team?"
        }, 
        {
            "answers": [
                "Dublin.", 
                "Galway.", 
                "Donegal.", 
                "Belfast."
            ], 
            "question_id": 2, 
            "question_str": "What's your favorite city?"
        }
    ]
    return jsonify(questions)

app.run(debug=True, port=7777)

