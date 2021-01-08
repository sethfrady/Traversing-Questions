// // selectors
// const btns = document.querySelectorAll('.question-btn');

// // event listener w/forEach (traversing the dom)
// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })

// using selectors inside the element
const questions = document.querySelectorAll('.question'); // pulling all questions

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn'); // one button at a time within question
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if (item !== question) { // removes one when another is opened
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
})