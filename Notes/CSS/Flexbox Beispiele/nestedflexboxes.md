Css


body {
  font-family: 'Roboto Mono', monospace;
}
h2 {
  text-align: center;
  font-size: 18px;
}
.main {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: lightgrey;
  width: 400px;
  height: 700px;
}
.container {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 300px;
  height: 300px;
  background-color: dodgerblue;
  border: 1px solid white;
}
.child {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 75px;
  background-color: whitesmoke;
  border: 1px solid snow;
}


Html


<!DOCTYPE html>
<html>
<head>
  <title>Nested</title>
  <link href='style.css' rel='stylesheet' />
  <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet'>
</head>
<body>
  <div class='main'>
    <div class='container'>
      <div class='child'>
        <h2>Child 1</h2>
      </div>
      <div class='child'>
        <h2>Child 2</h2>
      </div>
      <div class='child'>
        <h2>Child 3</h2>
      </div>
    </div>
    <div class='container'></div>
  </div>
</body>
</html>

