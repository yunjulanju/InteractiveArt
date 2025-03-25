function preload(){
    img = loadImage('https://upload.wikimedia.org/wikipedia/commons/a/a7/Sarah_Bernhardt_Mucha_.jpg')
    img.resize(435,650)
}

function setup(){
    createCanvas(435,650)
    t=0
    speed=0.025
}

function draw(){
    t+=deltaTime
    //ellipseLoop()
    mosaic()
}

function ellipseLoop(){
    colorMode(HSB)
    noFill()
    background(255)
    for (let x=0;x<width;x+=100){
        for (let y=0;y<height;y+=100){
            stroke((x+y)*255/2000,200,200)
            ellipse(x+25,y+25,speed*t,speed*t)
        }
    }
}

function mosaic(){
    for(let x=0;x<width;x+=5){
        for(let y=0;y<height;y+=5){
            c = img.get(x,y)
            fill(c)
            rect(x,y,5,5)
        }
    }
}