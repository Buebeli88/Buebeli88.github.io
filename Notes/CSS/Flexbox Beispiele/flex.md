Css


body {
  border: 0;
  margin: 0 15px;
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
.side,
.center {
  height: 75px;
  background-color: dodgerblue;
  border: 1px solid lightgrey;
  display: inline-block;
}
#top .side {
  flex: 2 2 100px;
}
#top .center {
  flex: 1 3 50px;
}
#bottom .side {
  flex: 1 2 75px;
}
#bottom .center {
  flex: 2 1 100px;
}


Html


<!DOCTYPE html>
<html>
<head>
  <title>Flex</title>
  <link rel='stylesheet' href='style.css' />
  <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet'>
</head>
<body>
  <h1>Top</h1>
  <div class='container' id='top'>
    <div class='side'></div>
    <div class='center'></div>
    <div class='side'></div>
  </div>
  <h1>Bottom</h1>
  <div class='container' id='bottom'>
    <div class='side'></div>
    <div class='center'></div>
    <div class='side'></div>
  </div>
</body>
</html>

