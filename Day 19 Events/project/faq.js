const faq = document.querySelector(".faq");

faq.addEventListener("click", function(e){
    if(e.target.classList.contains("question")){
        e.stopPropagation();//this stops it from bubbling up so the event handler in the document level will not happen to question (aka it will allow us to click on question and view the answers.)
        const currentItem = e.target.parentElement;
        const currentAnswer = currentItem.querySelector(".answer");
        currentAnswer.classList.toggle("show");
    }
    
});

document.addEventListener("click", function(){
    const allAnswers = document.querySelectorAll(".answer.show");

    allAnswers.forEach(answer => answer.classList.remove("show"));
})