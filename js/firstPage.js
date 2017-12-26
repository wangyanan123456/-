
  $(document).ready(function(){
    document.getElementById('checkItems').onclick=function(){  
      // $('firstBilXuan input').hasClass("on_check")? $('firstBilXuan input').removeClass("on_check"):$('firstBilXuan input').addClass("on_check");
       // 获取所有的复选框  
          var checkElements=document.getElementsByName('items');  
          if (this.checked) {  
              for(var i=0;i<checkElements.length;i++){  
                  var checkElement=checkElements[i];  
                  checkElement.checked="checked";  
              }  

          }  
          else{  
              for(var i=0;i<checkElements.length;i++){  
                  var checkElement=checkElements[i];  
                  checkElement.checked=null;  
              }  
          }  

    }  


    $('.firstUlLeftLi').click(function(){
      $(this).next('div').toggleClass('apper')
    })
     // 二级标题

    $('.twoCateTitle').click(function(){
     $(this).next('div').toggleClass('apper')
      
    })
    // 三级标题

    $('.threeCate div').each(function(index,lel){
      
      $(this).click(function(){
        $('.threeCate div').css({'background':'#fff','border':'none'})
        $(this).css({'background':'#EFF4FA','border-left':'1px solid #5B8CFF'})
      })
    })
    // 时间弹窗
    $('.timer').click(function(){
        console.log(88)
          $('.days').toggleClass('apper')
    })

    // 供应商弹窗
    $('.gongImg').click(function(){
        console.log(88)
          $('.gongyingshang').toggleClass('apper')
    })

    // 商品弹窗

    $('.shangImg').click(function(){
        console.log(88)
          $('.shangpin').toggleClass('apper')
    })
       
  })