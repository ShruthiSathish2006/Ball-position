var dataBase;
var hypnoticBall;
var position;
function setup(){
    dataBase = firebase.database()

    console.log(dataBase)
    createCanvas(500, 500)
    hypnoticBall = createSprite(250, 250, 10, 10)
    hypnoticBall.shapeColor = "red"
    var hypnoticBallposition = dataBase.ref('ball/position');
    hypnoticBallposition.on("value", readPosition, showError)
}
function draw(){
    background("white")
    if(keyDown(LEFT_ARROW)){
        writePosition(-1, 0)
    }
    if(keyDown(RIGHT_ARROW)){
        writePosition(1, 0)
     }
     if(keyDown(UP_ARROW)){
        writePosition(0, -1)
     }
     if(keyDown(DOWN_ARROW)){
        writePosition(0, 1)
     }
drawSprites();
    }
function writePosition(x, y){
    dataBase.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })
}
function readPosition(data){
    position = data.val();
    console.log(position.x)
    console.log(position.y)
    hypnoticBall.x = position.x
    hypnoticBall.y = position.y
}
function showError(){
    console.log("error in writing dataBase")
}