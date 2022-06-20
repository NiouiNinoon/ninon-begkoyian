$('.m-nav-toggle').click(function(e){
   e.preventDefault();
   $('.m-right').toggleClass('is-open')
   $('.m-nav-toggle').toggleClass('is-open')
})

$('.menu-link').click(function(e){
   console.log(this);
   let element = document.getElementById("myHeader");
   console.log(element);
   let current = element.getElementsByClassName('current');
   console.log(current);
   current.removeClass('current');
   this.addClass('current');
})
