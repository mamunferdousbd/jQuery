 /*========================================== 
                                Add Event listener by JS
                                ==========================================*/

 //  document.querySelector("button").addEventListener("click", function() {
 //      document.querySelector("h2").innerHTML = `U have clicked`
 //  })

 /*++++++++++++++++++++++++++++++++++++++++++++++++++ 
 Add Event listener by JQuery
 ++++++++++++++++++++++++++++++++++++++++++++++++++*/

 //  $("button").click(function() {
 //      //  $("h2").text("You Have Clicked")
 //      $("h2").toggleClass("style1") // toggleClass === can be on and off by clicking
 //  })

 /*++++++++++++++++++++++++++++++++++++++++++++++++++ 
 Add Event listener in multiple Elementsby JS
 ++++++++++++++++++++++++++++++++++++++++++++++++++*/
 //  var btnNumber = document.querySelectorAll(".my_btn").length;

 //  for (var i = 0; i < btnNumber; i++) {
 //      document.querySelectorAll(".my_btn")[i].addEventListener("click", function() {
 //          var text = this.innerHTML;
 //          document.querySelector("h2").innerHTML = `${text} is clicked.`
 //      })
 //  }
 /*++++++++++++++++++++++++++++++++++++++++++++++++++ 
 Add Event listener in multiple Elementsby JQuery
 ++++++++++++++++++++++++++++++++++++++++++++++++++*/

 //  $(".my_btn").click(function() {
 //      var value = this.innerHTML;
 //      $("h2").text(value + "is clicked.")
 //  })

 /*++++++++++++++++++++++++++++++++++++++++++++++++++ 
 Add Event listener in multiple Elementsby JQuery
 ++++++++++++++++++++++++++++++++++++++++++++++++++*/
 //  $(".my_btn").on("click", function() {
 //      var value = this.innerHTML;
 //      $("h2").text(value + "is clicked.")
 //  })

 // MouseOver
 //  $(".my_btn").on("mouseover", function() {
 //      var value = this.innerHTML;
 //      $("h2").text(value + "is clicked.")
 //  })

 // mouseout
 $(".my_btn").on("mouseout", function() {
     var value = this.innerHTML;
     $("h2").text(value + "is clicked.")
 })