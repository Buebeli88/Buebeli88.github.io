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
  height: 300px;
  width: 600px;
  background-color: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}
.left,
.center,
.right {
  min-height: 75px;
  width: 200px;
  margin: 2px;
  background-color: dodgerblue;
  border: 2px solid lightgrey;
}
#flexstart {
  align-content: flex-start;
}
#flexend {
  align-content: flex-end;
}
#center {
  align-content: center;
}
#between {
  align-content: space-between;
}
#around {
  align-content: space-around;
}


Html


<!DOCTYPE html>
<html>
<head>
  <title>Align Content</title>
  <link href='style.css' rel='stylesheet' />
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
  <h1>Space Between</h1>
  <div class='container' id='between'>
    <div class='left'></div>
    <div class='center'></div>
    <div class='right'></div>
  </div>
  <h1>Space Around</h1>
  <div class='container' id='around'>
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

