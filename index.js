
$(document).ready(function () {
    $(".thank-you-state").hide();
    let clickedID;
    $('.rating-button').click(function (event) {
        clickedID = event.target.id;
        $('button.rating-button').removeClass('clicked');
        $('#' + clickedID).addClass('clicked');
        $(".rating-text").html("You selected " + clickedID + " out of 5");
        if (clickedID != '') {
            $('.submit-button').click(submitPage);
        }
    });

    function submitPage() {
        $(".rating-state").hide();
        $(".thank-you-state").show();
    };
});