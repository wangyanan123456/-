$(document).ready(function(){
  $('.login').click(function(){
    window.location.href='main.html'
  })
  $('.wrong').click(function(){
    $('.warning').css('display','block');
    setTimeout(function(){
        $('.warning').css('display','none')
    },1000);
    
  })
})