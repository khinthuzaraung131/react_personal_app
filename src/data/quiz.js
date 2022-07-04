export default function getQuiz() {
    var quiz = {
        "id":1, "type":"Quiz","title":"DOM Quiz",
        "description":"Take this Quiz for DOM",
        "browserTitle": "DOM Quiz?",
        "introduction": "Let start DOM Quiz",
        "numOfQuestions":2
    }
    var questions = [
        {
            "id":1, "type": "TRUE_FALSE", "level":1,"question":
            "The display value of most DOM elements is either inline or block",
            "answers": [
                {"id":1, "ur_answer": "Classess", "adivise":"None",
                "status":0 },
                {"id":2, "ur_answer": "Objects", "adivise":"None",
                "status":0 },
                {"id":3, "ur_answer": "Tables", "adivise":"None",
                "status":0 },
            ],
            "correct":2,"explanation":"Answer is Object"
        },
        {
            "id":2, "type": "TRUE_FALSE", "level":1, "question": "DOM represents a webpage in with way?",
            "answers": [
                { "id" :1, "ur_answer":"Dyanmic Structure", "adivise":"None",
                 "status":0},
                 { "id" :2, "ur_answer":"Recrusive Structure", "adivise":"None",
                 "status":0},
                 { "id" :3, "ur_answer":"Tree-like Structure", "adivise":"None",
                 "status":0},
            ],
            "correct":3, "explanation": "Correct answer is Tree-like Structrue"
         },
    ]
    quiz.questions = questions;
            return quiz;
};