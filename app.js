const data = [
    {
        q: "What is the square root of 196?",
        a: "12",
        b: "13",
        c: "14",
        d: "15",
        ans: "c"
    },
    {
        q: "Find x if 12x + 2 = 101 + x",
        a: "7",
        b: "9",
        c: "11",
        d: "13",
        ans: "b"
    },
    {
        q: "What is the fourth power of 3?",
        a: "81",
        b: "82",
        c: "83",
        d: "84",
        ans: "a"
    },
    {
        q: "2y(3x + 7(x + y)) is a",
        a: "Monomial",
        b: "Binomial",
        c: "Trinomial",
        d: "Polynomial whose degree is greater than 3", 
        ans: "a"
    }
]

let question = document.getElementById('question')
let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')
let d = document.getElementById('d')
let previous = document.getElementById('previous')
let next = document.getElementById('next')
let submit = document.getElementById('submit')

let questionCount = 0
let score = 0
let reduceIfPrev = false

if (questionCount == 0) {
    previous.style.display
}

const changeq = () => {
    question.innerText = data[questionCount].q
    a.innerText = data[questionCount].a
    b.innerText = data[questionCount].b
    c.innerText = data[questionCount].c
    d.innerText = data[questionCount].d
}

changeq()

next.addEventListener('click', () => {
    if (questionCount < 3) {
        if (document.getElementById(`i${data[questionCount].ans}`).checked == true) {
            score = score + 1
            reduceIfPrev = true
        } else {
            reduceIfPrev = false
        }
        questionCount = questionCount + 1
        changeq()
    }
})

previous.addEventListener('click', () => {
    if (questionCount > 0) {
        if (reduceIfPrev) {
            score = score - 1
        }
        questionCount = questionCount - 1
        changeq()
    }
})

submit.addEventListener('click', () => {
    window.location.href = "scoreboard.html"
})