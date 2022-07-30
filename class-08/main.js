/*++++++++++++++++++++++++++++++++
Animate 
The jQuery animate() method is used to create custom animations.
Notice that multiple properties can be animated at the same time:
++++++++++++++++++++++++++++++++*/ 
$("#btn").click(function(){
    
    $("#div1").animate({
        left:"250px",
        top:"250px",
        opacity:"0.5"
    });

});