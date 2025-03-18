function setup(){
    createCanvas(1600,900)
    background(255)

    c = get(0,0)
    w = 5;
}
function draw(){
    fill(104,198,246)
    noStroke()
    rect(0,0,width,200)
    fill(255);rect(10,10,80,80);
    fill(0);rect(10,110,80,80);
    fill(255,0,0);rect(110,10,80,80);
    fill(0,255,0);rect(110,110,80,80);
    fill(0,0,255);rect(210,10,80,80);
    fill(255,160,180);rect(210,110,80,80);
    if(mouseIsPressed&&mouseY<200&&mouseX<800){
        c = get(mouseX,mouseY);
    }
    //800,0 ~ 1000,100
    if(mouseIsPressed&&mouseX>800&&mouseX<1000&&mouseY<100)
        w = (mouseX-800)/10
    stroke(0)
    strokeWeight(5)
    line(800,50,1000,50)
    rect(800+w*10,10,25,80)
    
    if(mouseIsPressed&&mouseButton===LEFT&&mouseY>210&&pmouseY>210){  
        strokeWeight(w)
        stroke(c)
        line(mouseX,mouseY,pmouseX,pmouseY) //Pen
    }
}