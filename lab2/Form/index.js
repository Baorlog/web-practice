$(document).ready(() => {
    $('#name-div input').focus();

    $('form').submit((e) => {
        e.preventDefault();
    })

    $("input").keyup(function(e){ 
        var code = e.key; // recommended to use e.key, it's normalized across devices and languages
        if(code==="Enter") {
            if($(this).parent().attr('id') === 'email-div') {
                var email = $(this).val();
                if(!validateEmail(email)) {
                    $(this).next().css('display', 'flex');
                }
                else {
                    $(this).parent().next().children('input').first().focus();
                }
            }
            else {
                if($(this).parent().next().children('input').length) {
                    $(this).parent().next().children('input').first().focus();
                }
                else {
                    $(this).parent().next().children('textarea').first().focus();
                }
            }
        }
    });

    $('#email-div input').click(() => {
        $('#email-div input').next().css('display', 'none');
    })
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}