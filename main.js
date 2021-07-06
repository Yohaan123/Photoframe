function setup(){
    canvas = createCanvas(640,480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
 }
 
 function draw(){
     image(video,230,150,220,200);

     fill(255, 165, 0);
     stroke(255,0,0);
     
     ellipse(99,470,37,35);

     ellipse(565,46,37,35);
     
     

     fill(0,0,0);
     stroke(128,0,0);
     rect(90,40,460,20);
     

     rect(90,40,20,410);
     

 }
 
 function take_snapshot(){
     save('snapshot.png');
 }
 