$(document).ready(function(){
    $("#password").keyup(function(){
        var pass = $('#password').val().length;


        if (pass >= 6) {
            $('.circle-pass').removeClass('invalid').removeClass('fa-close').addClass('valid').addClass('fa-check');

            $('#password').css({
                'border': '2px solid #27ae60' 
            });

        } else {
            $('.circle-pass').removeClass('valid').removeClass('fa-check').addClass('invalid').addClass('fa-close');
           
            $('#password').css({
                'border': '2px solid #e74c3c' 
            });

        }
    });

    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        } else {
            return false;
        }

    }
    $('#email').keyup(function() {
        var sEmail = $('#email').val();


        if ($.trim(sEmail).length) {
            $('.circle').removeClass('valid').removeClass('fa-check').addClass('invalid').addClass('fa-close');

            $('#email').css({
                'border': '2px solid #e74c3c' 
            });

        }
        if (validateEmail(sEmail)) {
            $('.circle').removeClass('invalid').removeClass('fa-close').addClass('valid').addClass('fa-check');

            $('#email').css({
                'border': '2px solid #27ae60' 
            });
        } 
         else {
            $('.circle').removeClass('valid').removeClass('fa-check').addClass('invalid').addClass('fa-close');
           
            $('#email').css({
                'border': '2px solid #e74c3c' 
            });

        }
    });
});