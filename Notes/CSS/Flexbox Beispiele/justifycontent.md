Css


body {
  border: 0;
  margin: 0;
  font-family: 'Roboto Mono', monospace;
}
h1 {
  text-align: center;
  display: block;
  font-size: 18px;
}
.container {
  height: 150px;
  width: 100%;
  display: flex;
  background-color: whitesmoke;
}
.box {
  height: 75px;
  width: 100px;
  background-color: dodgerblue;
  border: 1px solid lightgrey;
  display: inline-block;
}
#flexstart {
  justify-content: flex-start;
}
#flexend {
  justify-content: flex-end;
}
#center {
  justify-content: center;
}
#spacearound {
  justify-content: space-around;
}
#spacebetween {
  justify-content: space-between;
}




Html


<!DOCTYPE html>
<html>
<head>
  <title>Flex Justify</title>
  <link href='style.css' rel='stylesheet' />
  <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet'>
</head>
<body>
  <h1>Flex Start</h1>
  <div class='container' id='flexstart'>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
  </div>
  <h1>Flex End</h1>
  <div class='container' id='flexend'>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
  </div>
  <h1>Center</h1>
  <div class='container' id='center'>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
  </div>
  <h1>Space Around</h1>
  <div class='container' id='spacearound'>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
  </div>
  <h1>Space Between</h1>
  <div class='container' id='spacebetween'>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
  </div>
</body>
</html>

