$(document).ready(function($) {
    $("#agreeTerms").click(function(){
        if ($('#submit-register').prop('disabled')) {
            $("#submit-register").removeAttr("disabled");
        } else {
            $("#submit-register").attr('disabled', true);
        }
    });

    $("#checkAll").click(function(){
        $('input:checkbox').not(this).prop('checked', this.checked);
        $('#agreeTerms, [name="plan"]').attr('checked', false);
    });

    $('#contactForm').submit(function (e) {
        e.preventDefault();
        console.log('SENDING...');
        var un = $('#name').val();
        var em = $('#email').val();
        var su = $('#subject').val();
        var ph = $('#phone').val();
        var msg = $('#message').val();
        $.ajax({
            type: "POST",
            url: "sendemail.php",
            data: {
                'name': un,
                'email': em,
                'message': msg
            },
            success: function (message) {
                var response = message;
                console.log('response:', response);
                if (response.status === 'success') {
                    console.log('response on success:', response);
                    $('.contact-form')[0].reset();
                }

                $('.contact-form')[0].reset();

                $('#error_contact').html(response.message);
            }
        });
    });

    $('#register-submit').submit(function (e) {
        e.preventDefault();
        var firstName = $('#fname').val();
        var lastName = $('#lName').val();
        var email = $('#email').val();
        var confirmEmail = $('#cemail').val();
        var password = $('#password').val();
        var confirmPass = $('#cpassword').val();
        var country = $('#country').val();
        var number = $('#phone').val();
        var area = $('#area').val();
        var details = $('#details').val();
        var nameoncard = $('#nameoncard').val();
        var ccnumber = $('#ccnumber').val();
        var expirymonth = $('#expiry-month').val();
        var expiryyear = $('#expiry-year').val();
        var ccv = $('#ccv').val();
        var services = [];
        var plan = [];
        var agreeTerms = [];

        $('[name="services"]:checked').each(function (i, e) {
            services.push(e.value);
        });

        $('[name="plan"]:checked').each(function (i, e) {
            plan.push(e.value);
        });

        $('[name="agreeTerms"]:checked').each(function (i, e) {
            agreeTerms.push(e.value);
        });

        var data =  {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'confirmEmail': confirmEmail,
            'password': password,
            'confirmPass': confirmPass,
            'country': country,
            'number': number,
            'area': area,
            'details': details,
            'nameoncard': nameoncard,
            'ccnumber': ccnumber,
            'expirymonth': expirymonth,
            'expiryyear': expiryyear,
            'ccv': ccv,
            'services': services,
            'plan': plan,
            'agreeTerms': agreeTerms
        };

        $.ajax({
            type: "POST",
            url: "register.php",
            data: data,
            success: function (message) {
                var response = message;
                console.log('response top:', response);
                if (response.status === 'success') {
                    $('.register-form')[0].reset();
                    console.log('response:', response);
                    window.location.href = 'confirmation.html';
                    // $('.confirmation-msg').html(response.message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('response:', textStatus);
                console.log('XMLHttpRequest:', XMLHttpRequest);
                console.log('errorThrown:', errorThrown);
            }
        });
    });
});
