const firebaseConfig = {
    apiKey: "AIzaSyBlWbuI6v7RJLcwIOhzpZsYi2_VO_rOhrk",
    authDomain: "quiz-5a30b.firebaseapp.com",
    databaseURL: "https://quiz-5a30b-default-rtdb.firebaseio.com",
    projectId: "quiz-5a30b",
    storageBucket: "quiz-5a30b.appspot.com",
    messagingSenderId: "526017679180",
    appId: "1:526017679180:web:a8e8c01096e05e32cbc9e9",
    measurementId: "G-KMRS5D7DZR"
  };
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var dp = app.database().ref('quiz');
  var key = dp.push().key;
// for quiz
var span = document.getElementById("span")
var questionArray = [
    {
        Question: "Q1: MS-Word is an example of ___",
        Answer: "Application software",
        Options: [
            "operating system",
            "processing device",
            "Application software",
            "An input device",
        ]
    },
    {
        Question: "Q2: To make the number pad act as a directional arrow, we press",
        Answer: "Shift",
        Options: [
            "Num lock",
            "Caps lock",
            "Arrow lock",
            "Shift",
        ]
    },
    {
        Question: "Q3: Ctrl, Shift and Alt are called .......... keys.",
        Answer: "modifier",
        Options: [
            "modifier",
            "function",
            "alphanumeric",
            "adjustment",
        ]
    },
    {
        Question: "Q4 :   A computer cannot boot if it does not have the ___",
        Answer: "Operating system",
        Options: [
            "Compiler",
            "Loader",
            "Operating system",
            "Assembler",
        ]
    },
    {
        Question: "Q5: Junk e-mail is also called __",
        Answer: "Spam",
        Options: [
            "Spam",
            "Spoof",
            "Sniffer script",
            "Spool",
        ]
    },
    {
        Question: "Q6: Microsoft Office is an example of a",
        Answer: "Horizontal market software",
        Options: [

            "Closed source software",
            "Open source software",
            'Horizontal market software',
            "vertical market software",
        ]
    },
    {
        Question: "Q7: By default, your documents print in ____ mode",
        Answer: "Portrait",
        Options: [

            "Landscape",
            "Portrait",
            "Page Setup",
            "Print View",
        ]
    },
    {
        Question: "Q8: Which of the following is a popular programming language for developing multimedia webpages.",
        Answer: "Java",
        Options: [

            "COBOL",
            "Java",
            "BASIC",
            "Assembler",

        ]
    },
    {
        Question: "Q9: ___are attempts by individuals to obtain confidential information from you by falsifying their identity",
    Answer: "Phishing scams",
        Options: [

            "Phishing trips",
            "Computer viruses",
            "Phishing scams",
            "Spyware scams",

        ]
    },
    {
        Question: "Q10: ____ is the process of dividing the disk into tracks and sectors",
        Answer: "Formatting",
    Options: [

            "Tracking",
            "Formatting",
            "Crashing",
            "Allotting",
        ]
    }


]
var count = 0;

var lable = document.getElementsByClassName('Option')
var radio = document.getElementsByClassName('check')
function showquestion(e) {
    var ques = document.getElementById("span")
    ques.innerHTML = questionArray[e].Question
    for (var i = 0; i < lable.length; i++) {
        lable[i].innerHTML = questionArray[e].Options[i]
    }
}
var scr = 0;
function cal() {
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            if (lable[i].innerHTML == questionArray[count].Answer) {
                scr++;
            }
        }
    }

}


function next() {
    cal()
    if (count < questionArray.length - 1) {
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked == true) {
                count++
                showquestion(count)
                radio[i].checked = false
            }
        }
    }
    else {

        dp.child(key).set(scr)
        alert("Score is ==> " + scr)

    }
