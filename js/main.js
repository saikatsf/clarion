// To set date in date field

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById('user_date').value = today;

// For gallery image slider

var $owl = $('.owl-carousel');
$owl.children().each(function (index) {
    $(this).attr('data-position', index); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: true,
    items: 3,
    // autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-header_carousel .owl-nav-prev'), $('.owl-navigation-header_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 3
        }
    }
});

$(document).on('click', '.owl-item>div', function () {
    $owl.trigger('to.owl.carousel', $(this).data('position'));
});

function hasNumbers(t) {
   var regex = /\d/g;
   return regex.test(t);
}

function validEmail(mail) {
   var pattern = /@gmail\.com/i;
   if (pattern.test(mail)) {
      return true
   } else {
      return false;
   }
}


function submitForm() {
    var user_name = document.getElementById('user_name').value;
    var user_email = document.getElementById('user_email').value;
    var user_mobile = document.getElementById('user_mobile').value;
    var user_date = document.getElementById('user_date').value;
    if(user_name == '' || user_email == '' || user_mobile == '' || user_date == ''){
        alert("Please enter all fields");
    }
    else{
        if(hasNumbers(user_name) == false){
            if(validEmail(user_email) == true){
                // all validations passed and form gets submitted
                document.location.href = "form_submitted.html";
            }
            else{
                alert("Please enter a valid email id");
            }
        }
        else{
            alert("Name cannot contain numbers");
        }
    }
}

$("#header_carousel .owl-item").click(function(){
    if($(this).hasClass("center") == true){
        $(this).children().css('transform', 'scale(1.7)');
    }
    else{
        $("#header_carousel .owl-item").children().removeAttr('style');
    }
});

$(".owl-nav > button").click(function(){
    $("#header_carousel .owl-item").children().removeAttr('style');
});