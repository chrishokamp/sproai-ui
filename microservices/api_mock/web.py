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
            "question_str": "What's up?",
            "correct_answer":4
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":3
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":2
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":3
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":2
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":3
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":4
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":3
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":2
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":4
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":1
        },
        {
            "answers": [
                "Not much, really.",
                "Oh, nothing interesting",
                "Just wanted to say hi.",
                "There's no 4th answer."
            ],
            "question_id": 1,
            "question_str": "What's up?",
            "correct_answer":1
        },
        {
            "answers": [
                "Man U.",
                "Barcelona.",
                "Bayern Munich.",
                "Liverpool."
            ],
            "question_id": 2,
            "question_str": "What's your favorite team?",
            "correct_answer":1
        },
        {
            "answers": [
                "Dublin.",
                "Galway.",
                "Donegal.",
                "Belfast."
            ],
            "question_id": 3,
            "question_str": "What's your favorite city?",
            "correct_answer":2
        }
    ]

    return jsonify({"userName": userName, "questions": questions})

@app.route('/submission', methods=['PUT'])
@cross_origin()
def submission():
    print(request.json)
    return jsonify(request.json)

app.run(debug=True, port=7777)
