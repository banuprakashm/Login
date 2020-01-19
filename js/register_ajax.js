$(document).ready(function() {
    $('#btnsubmit').click(function() {
      $.ajax({
        type: "POST",
        url: 'php/register.php',
        data: {
          firstname: $("#firstname").val(),
          username: $("#username").val(),
          lastname: $("#lastname").val(),
          password: $("#password").val()
        }
      });
      window.location.replace('index.php');
    });
  });

  