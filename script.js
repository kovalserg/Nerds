var link=document.querySelector('.link');
var modal=document.querySelector(".modal");
var closedModal=document.querySelector(".btn-closed");
link.addEventListener("click", function(e){
    e.preventDefault();
    modal.classList.toggle('open');
    });
closedModal.addEventListener('click', function(){
    modal.classList.remove('open')
});