Css


body {
  font-family: 'Roboto Mono', monospace;
}
h1 {
  margin: 20px;
  text-align: center;
  font-size: 18px;
}
.container {
  height: 150px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
}
.left,
.center,
.right {
  min-height: 75px;
  width: 125px;
  background-color: dodgerblue;
  border: 2px solid lightgrey;
}
#baseline .center {
  height: 100px;
  width: 100px;
  border: 5px solid turquoise;
}
#flexstart {
  align-items: flex-start;
}
#flexend {
  align-items: flex-end;
}
#center {
  align-items: center;
}
#baseline {
  align-items: baseline;
}


Html


<!DOCTYPE html>
<html>
<head>
  <title>Align Items</title>
  <link href='style.css' rel='stylesheet'/>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet'>
</head>
<body>
  <h1>Flex Start</h1>
  <div class='container' id='flexstart'>
    <div class='left'></div>
    <div class='center'></div>
    <div class='right'></div>
  </div>
  <h1>Flex End</h1>
  <div class='container' id='flexend'>
    <div class='left'></div>
    <div class='center'></div>
    <div class='right'></div>
  </div>
  <h1>Center</h1>
  <div class='container' id='center'>
    <div class='left'></div>
    <div class='center'></div>
    <div class='right'></div>
  </div>
  <h1>Baseline</h1>
  <div class='container' id='baseline'>
    <div class='left'></div>
    <div class='center'></div>
    <div class='right'></div>
  </div>
  <h1>Stretch</h1>
  <div class='container' id='stretch'>
    <div class='left'></div>
    <div class='center'></div>
    <div class='right'></div>
  </div>
</body>
</html>



