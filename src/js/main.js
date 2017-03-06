(function() {
  var orderCall = document.querySelector(".order-call");
  orderCall.addEventListener("click", function(){    
    document.querySelector(".order__form-field").focus();
  });

  document.querySelector(".btn-close").onclick = function() {
    document.querySelector(".attention").style.display = "none";
  }

  jQuery(function($){
  $(".order__form-field").mask("+7(999)999-99-99");
  });
})();
