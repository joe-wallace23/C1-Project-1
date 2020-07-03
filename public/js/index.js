$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    })
});



const form=document.querySelector('#form');
const inputName=document.querySelector('#name');
const inputSubject=document.querySelector('#subject');
const inputMessage=document.querySelector('#message')
const inputEmail=document.querySelector('#email');





form.addEventListener('submit', submit)


function submit(e){
    e.preventDefault()

    {
        inputName.value='';
        inputSubject.value='';
        inputMessage.value='';
        inputEmail.value='';
      
    }
}

