$(document).ready(function(){function a(){$("#name").val(""),$("#email").val(""),$("#message").val("")}$(".collapser").click(function(){$(".collapse").collapse("hide")}),$("#contactForm").submit(function(){var e={name:$("#name").val(),email:$("#email").val(),message:$("#message").val()};return e=JSON.stringify(e),$.ajax({url:"/contact",type:"POST",contentType:"application/json",data:e,success:function(){alert("I'll get back to you soon!"),a()},error:function(){alert("Failed to send.")}}),!1})});