Css


body {
  font-family: 'Roboto Mono', monospace;
}
h1 {
  font-size: 18px;
}
h1,
h3 {
  text-align: center;
}
.container {
  justify-content: space-around;
  background-color: dodgerblue;
  display: flex;
  align-items: center;
  min-height: 125px;
}
.box {
  background-color: whitesmoke;
  border: 1px solid white;
  width: 100px;
  height: 100px;
}
#wrap {
  flex-wrap: wrap;
}
#nowrap {
  flex-wrap: nowrap;
}
#reverse {
  flex-wrap: wrap-reverse;
}


Html


<!DOCTYPE html>
<html>
<head>
  <title>Wrap</title>
  <link href='style.css' rel='stylesheet' />
  <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet'>
</head>
<body>
  <h1>Flex-Wrap: Wrap</h1>
  <div class='container' id='wrap'>
    <div class='box'>
      <h3>1</h3>
    </div>
    <div class='box'>
      <h3>2</h3>
    </div>
    <div class='box'>
      <h3>3</h3>
    </div>
    <div class='box'>
      <h3>4</h3>
    </div>
    <div class='box'>
      <h3>5</h3>
    </div>
  </div>
  <h1>Flex-Wrap: No-Wrap</h1>
  <div class='container' id='nowrap'>
    <div class='box'>
      <h3>1</h3>
    </div>
    <div class='box'>
      <h3>2</h3>
    </div>
    <div class='box'>
      <h3>3</h3>
    </div>
    <div class='box'>
      <h3>4</h3>
    </div>
    <div class='box'>
      <h3>5</h3>
    </div>
  </div>
  <h1>Flex-Wrap: Wrap-Reverse</h1>
  <div class='container' id='reverse'>
    <div class='box'>
      <h3>1</h3>
    </div>
    <div class='box'>
      <h3>2</h3>
    </div>
    <div class='box'>
      <h3>3</h3>
    </div>
    <div class='box'>
      <h3>4</h3>
    </div>
    <div class='box'>
      <h3>5</h3>
    </div>
  </div>
</body>
</html>

