Css


body {
  margin: 0;
  border: 0;
  font-family: 'Roboto Mono', monospace;
}
h1 {
  font-size: 18px;
}
h2 {
  font-size: 16px;
}
h1,
h2 {
  text-align: center;
}
.top,
.middle,
.bottom {
  width: 100px;
  height: 100px;
  background-color: dodgerblue;
  border: 2px solid lightgrey;
  margin: 10px 30px;
}
.top.side {
  flex-shrink: 2;
}
.top.center {
}
.middle.side {
  flex-shrink: 0;
}
.middle.center {
  flex-shrink: 0;
}
.bottom.side {
}
.bottom.center {
  flex-shrink: 2; 
}
#top,
#middle,
#bottom {
  display: flex;
  background-color: whitesmoke;
  justify-content: center;
  min-height: 200px;
  align-items: center;
}


Html


<!DOCTYPE html>
<html>
<head>
  <title>Flex Grow and Shrink</title>
  <link href='style.css' type='text/css' rel='stylesheet' />
  <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet'>
</head>
<body>
  <h1>Step 1</h1>
  <div id='top'>
    <div class='top side'>
      <h2>1</h2>
    </div>
    <div class='top center'>
      <h2>2</h2>
    </div>
    <div class='top side'>
      <h2>3</h2>
    </div>
  </div>
  <h1>Step 2</h1>
  <div id='middle'>
    <div class='middle side'>
      <h2>1</h2>
    </div>
    <div class='middle center'>
      <h2>2</h2>
    </div>
    <div class='middle side'>
      <h2>3</h2>
    </div>
  </div>
  <h1>Step 3</h1>
  <div id='bottom'>
    <div class='bottom side'>
      <h2>1</h2>
    </div>
    <div class='bottom center'>
      <h2>2</h2>
    </div>
    <div class='bottom side'>
      <h2>3</h2>
    </div>
  </div>
</body>
</html>

