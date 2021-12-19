function myFunction() {
    var x = document.getElementById("navbarNav");
    x.classList.toggle("show");
  }
  document.addEventListener("DOMContentLoaded", function(event) { 


    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');
    
    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show_answer");
  };
  }
    
    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }
    
    });

    let body = document.getElementById("body-element")

    // const addNavActive = () => {
    //     if (body.classList.contains("nav-active"))
    //         body.classList.remove("nav-active");
    //     else
    //         body.classList.add("nav-active");
    // }
    
    // handle links with @href started with '#' only
    // $(document).on('click', 'a[href^="#nav"]', function (e) {
    //     // target element id
    //     var id = $(this).attr('href');
    
    //     // target element
    //     var $id = $(id);
    //     if ($id.length === 0) {
    //         return;
    //     }
    
    //     // prevent standard hash navigation (avoid blinking in IE)
    //     e.preventDefault();
    
    //     // top position relative to the document
    //     var pos = $id.offset().top;
    
    //     // animated top scrolling
    //     $('html,body').animate({ scrollTop: pos });
    // });