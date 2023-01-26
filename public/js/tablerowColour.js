$("#search-btn").click(function(){
    var searchValue = $("#search-input").val().toLowerCase();
    $("#meme-body tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1)
    });
});

$("#search-input").on("input", function() {
$("#search-btn").click();
});

function selectMeme(event) {
    let tr = event.target.closest("tr");
    tr.classList.add("selected");
}