$("button").click(function(){
$(this).text("Thanks for voting!");
});

$("img").hover(
    function() {
        $(this).css("border","5px solid blue");
    },
    function() {
        $("img").css("border","5px solid red");
    }
);