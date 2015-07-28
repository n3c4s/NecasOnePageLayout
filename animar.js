$("#serviciosanim div").mouseover(function(){
    $(this).stop(true, false).animate({ width: "400px" });
}, function() {
    $(this).stop(true, false).animate({ width: "100%" });
});
