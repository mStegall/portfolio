$(document).ready(function () {
    $(".collapser").click(function () {
        $(".collapse").collapse("hide");
    });

    $('#contactForm').submit(function () {
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        }
        formData = JSON.stringify(formData); 
        $.ajax({
            url: '/contact',
            type: 'POST',
            contentType: 'application/json',
            data: formData
        });
        return false;
    })
})