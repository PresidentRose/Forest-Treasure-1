$(".i1").click(function() {
    $(".Second").show();
    $(".i2").show();
    $(".i1").hide();
    $(".First").hide();
    
});
$(".i2").dblclick(function() {
    $(".Third").show();
    $(".i3").show();
    $(".i2").hide();
    $(".Second").hide();
    
});
$(".i3").mouseleave(function() {
    $(".Fourth").show();
    $(".i4").show();
    $(".i3").hide();
    $(".Third").hide();
    
});
$(".i4").dblclick(function() {
    $(".Fifth").show();
    $(".i5").show();
    $(".i4").hide();
    $(".Fourth").hide();
    
});
$(".i5").click(function() {
    $(".Sixth").show();
    $(".i6").show();
    $(".i5").hide();
    $(".Fifth").hide();
});
$(".i6").dblclick(function() {
    $(".Seventh").show();
    $(".i7").show();
    $(".i6").hide();
    $(".Sixth").hide();
});
$(".i7").hover(function() {
    $(".Eigth").show();
    $(".i8").show();
    $(".i7").hide();
    $(".Seventh").hide();
});
$(".i8").mouseleave(function() {
    $(".Ninth").show();
    $(".i9").show();
    $(".i8").hide();
    $(".Eigth").hide();
});
