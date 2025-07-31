Css


body {
  margin: 0;
  border: 0;
  font-family: 'Roboto Mono', monospace;
}
h1 {
  text-align: center;
  font-size: 18px;
}
h2 {
  text-align: center;
  font-size: 16px;
}
.grow,
.shrink {
  width: 100px;
  height: 100px;
  background-color: dodgerblue;
  border: 2px solid lightgrey;
  margin: 10px 30px;
}
.grow.side {
  flex-basis: 60px;
  flex-grow: 1;
}
.grow.center {
  flex-grow: 3;
}
.shrink.side {
  flex-basis: 300px;
  flex-shrink: 3;
}
.shrink.center {
  flex-shrink: 2;
  flex-basis: 150px;
}
#grows,
#shrinks {
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
  <title>Flex Basis</title>
  <link href='style.css' rel='stylesheet' />
  <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet'>
</head>
<body>
  <h1>Grows</h1>
  <div id='grows'>
    <div class='grow side'>
      <h2>1</h2>
    </div>
    <div class='grow center'>
      <h2>2</h2>
    </div>
    <div class='grow side'>
      <h2>3</h2>
    </div>
  </div>
  <h1>Shrinks</h1>
  <div id='shrinks'>
    <div class='shrink side'>
      <h2>1</h2>
    </div>
    <div class='shrink center'>
      <h2>2</h2>
    </div>
    <div class='shrink side'>
      <h2>3</h2>
    </div>
  </div>
</body>
</html>

