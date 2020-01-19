<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Register</title>
  <script
  src="http://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="js/register_ajax.js"></script>
  <script src="js/validate_register.js"></script>
</head>
<body>	
  

  <div class="container">
  
  <h2>Register</h2>
  
  <form>
    <div class="form-group">
      <label for="text">firstname:</label>
      <input type="text" class="form-control" id="firstname">
    </div>
    <div class="form-group">
      <label for="text">lastname:</label>
      <input type="text" class="form-control" id="lastname">
    </div>
    <div class="form-group">
      <label for="text">username:</label>
      <input type="text" class="form-control" id="username">
    </div>
    <div class="form-group">
      <label for="password">password:</label>
      <input type="password" class="form-control" id="password">
    </div>
  </form>
  <button type="submit" class="btn btn-success" id="btnsubmit">Register</button>
  <a href="index.php"><h4>Back to login</h4></a>
</div>

</body>
</html>