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
  font-size: 14px;
}
h1,
h2 {
  text-align: center;
}
.container {
  justify-content: space-around;
  align-items: center;
  background-color: dodgerblue;
  display: flex;
  max-height: 600px;
}
.box {
  flex-grow: 1;
  background-color: whitesmoke;
  border: 1px solid white;
  width: 100px;
  height: 100px;
}
#row {
  flex-direction: row;
}
#row-reverse {
  flex-direction: row-reverse;
}
#column {
  flex-direction: column;
}
#column-reverse {
  flex-direction: column-reverse;
}


Html


<!DOCTYPE html>
<html>
<head>
  <title>Direction</title>
  <link href='style.css' rel='stylesheet' />
  <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet'>
</head>
<body>
  <h1>Flex-Direction: Row</h1>
  <div class='container' id='row'>
    <div class='box'>
      <h2>1</h2>
    </div>
    <div class='box'>
      <h2>2</h2>
    </div>
    <div class='box'>
      <h2>3</h2>
    </div>
    <div class='box'>
      <h2>4</h2>
    </div>
    <div class='box'>
      <h2>5</h2>
    </div>
  </div>
  <h1>Flex-Direction: Row-Reverse</h1>
  <div class='container' id='row-reverse'>
    <div class='box'>
      <h2>1</h2>
    </div>
    <div class='box'>
      <h2>2</h2>
    </div>
    <div class='box'>
      <h2>3</h2>
    </div>
    <div class='box'>
      <h2>4</h2>
    </div>
    <div class='box'>
      <h2>5</h2>
    </div>
  </div>
  <h1>Flex-Direction: Column</h1>
  <div class='container' id='column'>
    <div class='box'>
      <h2>1</h2>
    </div>
    <div class='box'>
      <h2>2</h2>
    </div>
    <div class='box'>
      <h2>3</h2>
    </div>
    <div class='box'>
      <h2>4</h2>
    </div>
    <div class='box'>
      <h2>5</h2>
    </div>
  </div>
  <h1>Flex-Direction: Column-Reverse</h1>
  <div class='container' id='column-reverse'>
    <div class='box'>
      <h2>1</h2>
    </div>
    <div class='box'>
      <h2>2</h2>
    </div>
    <div class='box'>
      <h2>3</h2>
    </div>
    <div class='box'>
      <h2>4</h2>
    </div>
    <div class='box'>
      <h2>5</h2>
    </div>
  </div>
</body>
</html>

