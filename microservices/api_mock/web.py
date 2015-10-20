from flask import Flask, jsonify, request
from flask.ext.cors import cross_origin

app = Flask(__name__)

@app.route('/questions', methods=['GET'])
@cross_origin()
def get_questions():
    userName = request.args.get('userName', '')
    questions = [{
        "answers": [
            {"0":"Not much, really."},
                {"1":"Oh, nothing interesting"},
                {"2":"Just wanted to say hi."},
                {"3":"There's no 4th answer."}
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":"0"
            },
            {
            "answers": [
                {"0":"Man U."},
                    {"1":"Barcelona."},
                    {"2":"Bayern Munich."},
                    {"3":"Liverpool."}
                ],
                "question_id": 2,
                "question_str": "What's your favorite team?",
                "correct_answer":"1"
                },
            {
                "answers": [
                    {"0","Dublin."},
                    {"1","Galway."},
                    {"2","Donegal."},
                    {"3","Belfast."}
                ],
                "question_id": 2,
                "question_str": "What's your favorite city?",
                "correct_answer":"1"
                }
            ]


    return jsonify({"userName": userName, "questions": questions})

app.run(debug=True, port=7777)

