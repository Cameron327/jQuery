// using jQuery to change the css of the h1 tag 
$("h1").css("color", "red");

$("button").click(function() {
    $("h1").css("color", "purple");
});


// using keypress to track the keys
// we can use this to display the key that was pressed using jQuery
$(document).keypress(function(event) {
    console.log(event.key);

    $("h1").html(event.key);
});

