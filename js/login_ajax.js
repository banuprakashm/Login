$(document).ready(function() {
    $('#btnsubmit').click(function() {
      $.ajax({
        type: "POST",
        url: 'php/login.php',
        data: {
          username: $("#username").val(),
          password: $("#password").val()
        },
        success: function(data)
        {

          if (data === 'success') {
            window.location.replace('profile.php');
          }
          else {
            alert("Wrong combination of username and password!");
          }
        }
      });
    });
  });