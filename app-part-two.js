$("form").on("submit", function(e) {
    e.preventDefault();
    let $movie = $("input").eq(0).val();
    let $rating = $("input").eq(1).val();

    if (!($movie && $rating)) {
        alert("Please provide a movie and a rating!!");
    }
    else {
    $("<div>").append("Movie: " + $movie + " /" + " Rating: " + $rating)
    .append(" <button>Remove Movie</button>")
    .appendTo("#movie-container")
    }

    $("input").val("");
})

$("#movie-container").on("click", "button", function() {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    })
});
