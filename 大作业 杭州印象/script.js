let rSquare=[];//雨滴
let img;//鸭子图片
let imgea;//船1
let imgeb;//船2
let imgec;//船3
let imged;//船4
let imgee;//船5
let imgef//船6
let imgeh;//灯光遮罩
let imgei;//下方城市剪影
let imgej;//i  hz
let imgek;//三潭印月
let imgel;//baoshuta
let imgem;//心
let o=15;
let x=5;//鸭子运动
let y=1;//鸭子运动
let speed=0.3;//鸭子运动
let speeds=0.2;//鸭子运动
let t=0;
let q=80;//透明度
let u=0;//移动小球灯带
let c=[];//底部方块
let video;//心跳声


function preload(){
  img=loadImage("8-1.png");
  imgea=loadImage("1-1.png");
  imgeb=loadImage("1-2.png");
  imgec=loadImage("1-3.png");
  imged=loadImage("1-4.png");
  imgee=loadImage("1-5.png");
  imgef=loadImage("1-6.png");
  imgeh=loadImage("7-1.png");
  imgei=loadImage("7-2.png");
  imgej=loadImage("7-3.png");
  imgek=loadImage("7-4.png");
  imgel=loadImage("7-5.png");
  imgem=loadImage("7-6.png");
  video=createVideo("video1.mp4");
  }//加载图片视频


function setup() {
    createCanvas(1000,500);
    video.hide();
    background(230,223,213);
    rectMode(CENTER);
    noStroke();
    for(let i=0;i<1000;i++){
        let x=random(width);
        let y=random(-1000,0);
        let s=random(1,5);
        let c=color(238,245,243);
        let tSpeed=random(1,2);
        rSquare[i]=new RotatingSquare(x,y,s,c,tSpeed);
      }//雨滴参数设置

      for(let i=0;i<1728;i++){ //存储24*24*3种颜色
         c[i]=random(255);
      } 
  }

  function draw(){
    image(video,0,0);
    background(230,223,213);;//遮挡前面落下的雨滴，使其不是条状
      x+=speed;
      y+=speeds;
      if ((y>20)||(y<-5)){
        speeds=-speeds;
        }
      image(img,0-x,120+y/2);//鸭子图片
      image(imgea,130-x/5,300);
      image(imgeb,230+x/4,260);
      image(imgec,430-x/3,300);
      image(imged,10+x/2,280);
      image(imgee,630-x/2,250);
      image(imgef,-50+x/3,240);//小船
      image(imgek,100,30);//santanyingyue
      image(imgel,80,0);//baoshuta

     
    noStroke();
    fill(182,204,191,80);
    beginShape();//绘制背景山1
        vertex(0,174);
        vertex(6,179);
        vertex(14,179);
        vertex(26,171);
        vertex(35,174);
        vertex(43,180);
        vertex(56,183);
        vertex(71,189);
        vertex(87,196);
        vertex(96,203);
        vertex(122,209);
        vertex(144,227);
        vertex(156,230);
        vertex(170,239);
        vertex(182,245);
        vertex(0,245);
        vertex(0,174);
    endShape(CLOSE);

    noStroke();
    fill(162,182,123,80);
    beginShape();//绘制背景山2
        vertex(0,210);
        vertex(11,209);
        vertex(20,204);
        vertex(29,203);
        vertex(40,203);
        vertex(50,204);
        vertex(61,207);
        vertex(70,204);
        vertex(77,203);
        vertex(84,204);
        vertex(91,208);
        vertex(103,203);
        vertex(132,197);
        vertex(158,197);
        vertex(176,204);
        vertex(198,215);
        vertex(226,221);
        vertex(243,215);
        vertex(277,205);
        vertex(307,203);
        vertex(334,203);
        vertex(355,203);
        vertex(370,204);
        vertex(380,209);
        vertex(400,214);
        vertex(420,212);
        vertex(433,219);
        vertex(468,233);
        vertex(507,233);
        vertex(530,235);
        vertex(543,225);
        vertex(567,221);
        vertex(596,228);
        vertex(612,230);
        vertex(630,224);
        vertex(650,219);
        vertex(667,225);
        vertex(685,235);
        vertex(70,236);
        vertex(712,231);
        vertex(721,236);
        vertex(733,238);
        vertex(770,238);
        vertex(802,236);
        vertex(823,233);
        vertex(834,236);
        vertex(855,236);
        vertex(883,233);
        vertex(900,236);
        vertex(920,239);
        vertex(930,238);
        vertex(945,237);
        vertex(965,230);
        vertex(980,225);
        vertex(990,220);
        vertex(1000,220);
        vertex(1000,245);
        vertex(0,245);
    endShape(CLOSE);

    noStroke();
    fill(81,108,73,80);
    beginShape();//绘制背景山3
        vertex(0,245);
        vertex(21,231);
        vertex(38,228);
        vertex(62,223);
        vertex(83,213);
        vertex(96,215);
        vertex(105,216);
        vertex(115,211);
        vertex(137,208);
        vertex(154,205);
        vertex(168,208);
        vertex(189,207);
        vertex(231,201);
        vertex(255,182);
        vertex(288,165);
        vertex(325,170);
        vertex(350,184);
        vertex(372,184);
        vertex(398,186);
        vertex(424,184);
        vertex(442,192);
        vertex(463,212);
        vertex(486,225);
        vertex(504,245);
        vertex(0,245);

    noStroke();
    fill(177,185,187,80);
    beginShape();//绘制背景山4
        vertex(350,245);
        vertex(368,240);
        vertex(394,235);
        vertex(413,227);
        vertex(427,230);
        vertex(441,231);
        vertex(458,227);
        vertex(489,214);
        vertex(521,216);
        vertex(539,223);
        vertex(558,228);
        vertex(577,223);
        vertex(604,216);
        vertex(617,202);
        vertex(635,191);
        vertex(652,188);
        vertex(678,190);
        vertex(705,199);
        vertex(728,220);
        vertex(755,228);
        vertex(782,221);
        vertex(804,206);
        vertex(805,201);
        vertex(847,197);
        vertex(871,195);
        vertex(888,197);
        vertex(904,199);
        vertex(934,187);
        vertex(964,177);
        vertex(979,174);
        vertex(1000,182);
        vertex(1000,245);
    endShape(CLOSE);
  
    noStroke();
    fill(182,204,191,80);
    beginShape();//绘制背景山5
        vertex(643,245);
        vertex(661,234);
        vertex(683,225);
        vertex(706,220);
        vertex(729,205);
        vertex(758,197);
        vertex(779,199);
        vertex(805,212);
        vertex(832,216);
        vertex(873,218);
        vertex(888,222);
        vertex(902,225);
        vertex(917,230);
        vertex(936,235);
        vertex(952,233);
        vertex(967,237);
        vertex(990,235);
        vertex(1000,230);
        vertex(1000,245);
    endShape(CLOSE);

    beginShape();//绘制柳枝1
    stroke(2);
    noFill();
    vertex(14,0);
    vertex(15,12);
    vertex(20,26);
    vertex(25,42);
    vertex(24,57);
    vertex(35,80);
    vertex(52,119);
    vertex(75,151);
    vertex(98,175);
    endShape(OPEN);
    beginShape();//绘制柳枝2
    stroke(2);
    noFill();
    vertex(49,0);
    vertex(48,12);
    vertex(43,26);
    vertex(42,42);
    vertex(39,59);
    vertex(30,95);
    vertex(32,133);
    vertex(42,154);
    endShape(OPEN);
    beginShape();//绘制柳枝3
    stroke(2);
    noFill();
    vertex(35,0);
    vertex(37,20);
    vertex(47,52);
    vertex(60,83);
    vertex(63,111);
    vertex(65,155);
    vertex(78,196);
    vertex(99,244);
    vertex(120,265);
    endShape(OPEN);
    beginShape();//绘制柳枝4
    stroke(2);
    noFill();
    vertex(70,0);
    vertex(80,24);
    vertex(88,52);
    vertex(109,78);
    vertex(128,102);
    vertex(148,111);
    vertex(161,112);
    endShape(OPEN);

    noStroke();
    fill(186,211,208,);

    for(let i=0;i<rSquare.length;i++){//雨滴
        rSquare[i].translating();
        rSquare[i].drawing();
      }

      
      if(mouseIsPressed==true){
        video.play();
        video.loop();
      fill(28,20,69);
      rect(500,250,1000,500);
      fill(241,211,97);
      background(7,38,83,5)
      o+=5;
      if(o>985){
          o=15
      }
  
      
      ellipse(o, 300, 30, 1000);
      ellipse(o+200, 300, 30, 1000);
      ellipse(o+400, 300, 30, 1000);
      ellipse(o+600, 300, 30, 1000);
      ellipse(o+800, 300, 30, 1000);
      ellipse(o-200, 300, 30, 1000);
      ellipse(o-400, 300, 30, 1000);
      ellipse(o-600, 300, 30, 1000);
      ellipse(o-800, 300, 30, 1000);
      tint(255, 250);
      image(imgeh,16,0);
      stroke(242,194,64);
      background(0,2);
      line(mouseX,mouseY,516,350);
      line(mouseX+10,mouseY,500,350);
      line(mouseX+20,mouseY,500,350);
      line(mouseX+30,mouseY,500,350);
      line(mouseX+40,mouseY,500,350);
      line(mouseX+50,mouseY,500,350);
      line(mouseX+60,mouseY,500,350);
      line(mouseX-10,mouseY,516,350);
      line(mouseX-20,mouseY,516,350);
      line(mouseX-30,mouseY,516,350);
      line(mouseX-40,mouseY,516,350);
      line(mouseX-50,mouseY,516,350);
      line(mouseX-60,mouseY,516,350);//灯光射线

      strokeWeight(2);
      line(mouseX - 66, mouseY, mouseX + 66, mouseY);
      line(mouseX, mouseY - 66, mouseX, mouseY + 66);

      image(imgei,16,0);
    
      u+=5;
      if(u>180){
        u=0
      }
      fill(242,194,64);
      noStroke();
      ellipse(516+u, 420, 10, 10);
      ellipse(516+2*u, 420, 10, 10);
      ellipse(516+3*u, 420, 10, 10);
      ellipse(516-u, 420, 10, 10);
      ellipse(516-2*u, 420, 10, 10);
      ellipse(516-3*u, 420, 10, 10);//底部灯球

      image(imgej,16,0);
      t+=5
      if(t>39){
        t=0
      tint(255, 100);
      }
      image(imgem,16,0);//心深浅按节奏变化

      for(let i=0;i<51;i++){
        for(let j=22;j<26;j++){
         fill(61,214,105,random(50,100));
            rect(i*20,j*20,18,18);
          } //底部方形潮水
      }

    }

        }

  





class RotatingSquare{
    constructor(sX,sY,sSize,sColor,sTSpeed){
      this.squareX=sX;
      this.squareY=sY;
      this.squareSize=sSize;
      this.squareColor=sColor;
      this.squareTSpeed=sTSpeed;
    }
    translating(){
      push();
      translate(this.squareX,this.squareY);
      this.squareX += 0;
      this.squareY += this.squareTSpeed;
    }
    drawing(){
      fill(this.squareColor);
      rect(0,0,this.squareSize,this.squareSize);
      pop();
    }
  } //雨滴数组