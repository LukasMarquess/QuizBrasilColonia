var tela = 0
var img = [] 
var font;

function preload() { 
  img[0] = loadImage('CAPA JOGO.jpg');
  img[1] = loadImage('TL instruções.jpg')
  img[2] = loadImage('Carta.jpg')
  img[3] = loadImage('Lucas.jpg')
  img[4] = loadImage('Carta P.jpg')
  img[5] = loadImage('Terra Plana.jpg')
  img[6] = loadImage('Eurekaa.jpg') 
  img[7] = loadImage('Fundo TT.jpg')
  img[8] = loadImage('Nassau.png')
  font = loadFont('Suave.ttf')
}

function mouseReleased() {
  if(tela==1){ if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){tela=6}}
  else if(tela==6){ if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){tela=7}}
  else if(tela==7){ if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){tela=8}}
  else if(tela==8){ if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){tela=9}}
  else if(tela==9){ if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){tela=10}}
  else if(tela==10){ if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){tela=11}}
  else if(tela==11){ if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){tela=12}}
  else if(tela==12){ if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){tela=13}}
  else if(tela==13){ if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){tela=14}}
  else if(tela==14){ if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){tela=15}}
  else if(tela==15){ if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){tela=16}}
  else if(tela==16){ if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){tela=17}}
  else if(tela==17){ if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){tela=18}}
  else if(tela==18){ if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){tela=19}}
  else if(tela==19){ if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){tela=20}}
  else if(tela==20){ if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){tela=21}}
  else if(tela==21){ if(mouseX > 30 && mouseX < 60 && mouseY > 600 && mouseY < 630){tela=22}}
  else if(tela==22){ if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){tela=23}}
  else if(tela==23){ if(mouseX > 30 && mouseX < 60 && mouseY > 600 && mouseY < 630){tela=24}}
  else if(tela==24){ if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){tela=25}}
  else if(tela==25){ if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){tela=26}}
  else if(tela==26){ if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){tela=27}}
  else if(tela==27){ if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){tela=28}}
  else if(tela==28){ if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){tela=29}}
  else if(tela==29){ if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){tela=30}}
  else if(tela==30){ if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){tela=31}}
  else if(tela==31){ if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){tela=32}} 
  else if(tela==32){ if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){tela=33}}
  else if(tela==33){ if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){tela=34}}
  else if(tela==34){ if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){tela=35}}
  else if(tela==35){ if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){tela=36}}
  else if(tela==36){ if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){tela=37}}
  else if(tela==37){ if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){tela=38}}
  else if(tela==38){ if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){tela=39}}
  else if(tela==39){ if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){tela=40}}
  else if(tela==40){ if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){tela=41}}
  else if(tela==41){ if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){tela=42}}
  else if(tela==42){ if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){tela=43}}
  else if(tela==43){ if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){tela=44}}
  else if(tela==44){ if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){tela=45}}
  else if(tela==45){ if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){tela=5}}
  
}

function draw() {
  
  // Menu;
  if(tela==0){
    
  stroke(0)    
  createCanvas(600, 640);
  image(img[0], -250, 0)
  imageMode(CORNER)
  image(img[7], 60, 60, 460, 120)
  
  fill(240) 
  rect(190, 200, 200, 100);
  if(mouseX > 190 && mouseX < 390 && mouseY > 200 && mouseY < 300){
    fill(150)
    rect(190, 200, 200, 100);
    if(mouseIsPressed){tela=1}}
  
  fill(240)
  rect(190, 350, 200, 100);
  if(mouseX > 190 && mouseX < 390 && mouseY > 350 && mouseY < 450){
    fill(150)
    rect(190, 350, 200, 100);
     if (mouseIsPressed){tela=2}}
  
  fill(240)
  rect(190, 500, 200, 100);
  if(mouseX > 190 && mouseX < 390 && mouseY > 500 && mouseY < 600){
    fill(150)
    rect(190, 500, 200, 100)
    if (mouseIsPressed){tela=3}}
    
  noStroke()  
  textAlign(CENTER)
  textFont(font)
  textSize(50)
  fill(0)
  text("Iniciar", 285, 260)
  text("Instruções", 285, 410)
  text("Créditos", 285, 560)
  textSize(58)
  fill(240)
  text("Quiz Brasil Colônia", 285, 130) }
  
  // Instruções
  if(tela==2){
    
    createCanvas(637, 474)
    image(img[1], -20 , 0)
    
    textAlign(CENTER)
    textSize(29)
    fill(0)
    text("O jogo consiste em perguntas e respostas, onde colocará em prova \n os seus conhecimentos relacionados ao período colonial do Brasil . \nO jogo contém um total de 41 questões. Caso ocorra de você errar \nalguma pergunta, o jogo dará game over e você terá de começar tudo \nde novo. Sendo assim o jogo também irá trabalhar sua memória, bom \njogo e divirta-se, enquanto aprende. Para responder as perguntas é \nsó clicar no quadradinho correspondente a resposta certa.", 300, 145)
    
    stroke(0)
    fill(240)
    rect(30, 380, 100, 65)
    
    if(mouseX > 30 && mouseX < 130 && mouseY > 380 && mouseY < 445){
      
      fill(150)
      rect(30, 380, 100, 65)
      
       if (mouseIsPressed){tela=0}}
    
    noStroke(0)
    textSize(28)
    fill(0)
    text("Voltar", 81, 420)}
  
  //Créditos
  if(tela==3){
    
  createCanvas(600, 640)
  image(img[2], -500, -100)
    
  imageMode(CORNER) 
  image(img[3], 10, 10, 230, 300)
    
  stroke(0)
  fill(240)
  rect(5, 540, 100, 65)
  if(mouseX > 5 && mouseX < 105 && mouseY > 540 && mouseY < 605){
    fill(150)
    rect(5, 540, 100, 65)
    
    if(mouseIsPressed){tela=0}}
    
  noStroke()  
  textAlign(LEFT)
  textSize(32)
  fill(0)
  text("Lucas Marques \nContato: lucas.marques.111@ufrn.edu.br", 50, 350)
  textAlign(CENTER)
  textSize(28)
  text("Voltar", 55, 583)
  
  }
  
  //Pergunta 1
  if(tela==1){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("No período pré-colonial a atividade econômica que teve \nmaior destaque foi:", 10, 80)
    textAlign(LEFT)
    text("Pau-brasil", 70, 223)
    text("Cana-de-açúcar", 70, 275)
    text("Café", 70, 325)
    text("Mineração", 70, 375)
  }
  
  //Game Over
  if(tela==4){
    
  createCanvas(600, 640)
  imageMode(CORNER)
  image(img[5], 0, 0, 600, 640)
  
  stroke(0)  
  fill(240)
  rect(450, 540, 100, 65)
  if(mouseX > 450 && mouseX < 550 && mouseY > 540 && mouseY < 605){
    fill(150)
    rect(450, 540, 100, 65)
    
    if(mouseIsPressed){tela=0}}
    
    noStroke()
    textAlign(CENTER)
    textSize(28)
    fill(0)
    text("Voltar", 500, 580)
    fill(240)
    textSize(50)
    text("GAME OVER!", 290, 75)
    
  
  }
  
  //Win
  if(tela==5){
  fill(240)  
  createCanvas(600, 640)
  image(img[6], 0, 0)
  
  textAlign(CENTER)
  textSize(50)
  fill(0)
  text("Fim...", 400, 240)
    
  textAlign(LEFT)
  textSize(28)
  text("A história é testemunha do passado, luz da verdade, vida da \nmemória, mestra da vida, anunciadora dos tempos antigos - Cícero", 45, 500)
    
   
  fill("#FFFFFF")
  noStroke()
  rect(5, 550, 100, 65)
  if(mouseX > 5 && mouseX < 105 && mouseY > 540 && mouseY < 605){
    stroke(0)
    fill("#FFFFFF")
    rect(5, 550, 100, 65)
    
    if(mouseIsPressed){tela=0}} 
  
  noStroke()
  fill(0)
  textAlign(CENTER)
  textSize(30)
  text("Voltar", 55, 590)
  
  }
  
  //Pergunta 2
   if(tela==6){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(CENTER)
    textSize(40)
    fill(0)
    text("A primeira capital do Brasil foi:", 350, 80)
    textAlign(LEFT)
    text("São Paulo", 70, 223)
    text("Rio de Janeiro", 70, 275)
    text("Salvador", 70, 325)
    text("Brasília", 70, 375)
  }
  
  //Pergunta 3
   if(tela==7){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30)
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(CENTER)
    textSize(40)
    fill(0)
    text("O Tratado de Tordesilhas foi um acordo entre:", 350, 80)
    textAlign(LEFT)
    text("Brasil e Portugal", 70, 223)
    text("Espanha e Portugal", 70, 275)
    text("Portugal e Inglaterra", 70, 325)
    text("França e Portugal", 70, 375)
  }
  
  //Pergunta 4
   if(tela==8){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);}
    
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Oficialmente, a abolição da escravidão no Brasil \nocorreu através da:", 10, 80)
    textAlign(LEFT)
    text("Lei do Ventre Livre", 70, 223)
    text("Lei Eusébio de Queirós", 70, 275)
    text("Lei Áurea", 70, 325)
    text("Lei dos Sexagenário", 70, 375)
  }
  
  //Pergunta 5
   if(tela==9){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(CENTER)
    textSize(40)
    fill(0)
    text("O que foi a lei do Ventre Livre?", 350, 80)
    textAlign(LEFT)
    text("Todo filho de escrava nascido após a promulgação \nda lei seria considerado livre.", 70, 223)
    text("Garantia liberdade aos escravos com 60 anos de \nidade ou mais.", 70, 320)
    text("Extinguiu a escravidão no Brasil.", 70, 425)
    text("Proibição do tráfico de africanos escravizados para \no Brasil.", 70, 470)
  }
  
  //Pergunta 6
  if(tela==10){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);}
    
    noStroke()
    textFont(font)
    textAlign(CENTER)
    textSize(40)
    fill(0)
    text("O período colonial no Brasil teve início em:", 350, 80)
    textAlign(LEFT)
    text("1500", 70, 223)
    text("1515", 70, 275)
    text("1589", 70, 325)
    text("1530", 70, 375)
  }
  
  //Pergunta 7
  if(tela==11){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Em 1534, a Coroa portuguesa dividiu o território em 15 \npartes que ficaram conhecidos como:", 5, 80)
    textAlign(LEFT)
    text("Capitanias hereditárias", 70, 223)
    text("Sesmarias", 70, 275)
    text("Tratado de donatários", 70, 325)
    text("Governos gerais", 70, 375)
  }
  
  //Pergunta 8
  if(tela==12){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    noStroke()
    textFont(font)
    textAlign(CENTER)
    textSize(40)
    fill(0)
    text("O período chamado de Brasil colônia terminou com o:", 350, 80)
    textAlign(LEFT)
    text("Tratado de Madrid", 70, 223)
    text("Ciclo do ouro", 70, 275)
    text("Elevação do Brasil a Reino Unido", 70, 325)
    text("Leis abolicionistas", 70, 375)
  }
  
  //Pergunta 9
  if(tela==13){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("No Brasil colonial, a escravidão caracterizou-se \nessencialmente:", 10, 80)
    textAlign(LEFT)
    text(" Por sua vinculação exclusiva ao sistema agrário \nexportador.", 70, 223)
    text(" Por destinar os trabalhos mais penosos aos negros e \nmais leves aos índios.", 70, 320)
    text(" Pelo incentivo da Igreja e da Coroa à escravidão \nde índios e negros.", 70, 425)
    text("Por estar amplamente distribuída entre a população \nlivre, constituindo a base econômica da sociedade.", 70, 520)
  }
  
  //Pergunta 10
  if(tela==14){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);}
     
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    noStroke()
    textFont(font)
    textAlign(CENTER)
    textSize(40)
    fill(0)
    text("No Brasil colônia, a pecuária teve um papel decisivo na:", 350, 80)
    textAlign(LEFT)
    text("Expansão para o interior", 70, 223)
    text("Ocupação das áreas litorâneas", 70, 275)
    text("Formação e exploração dos minifúndios", 70, 325)
    text("Fixação do escravo na agricultura", 70, 375)
  }
  
  //Pergunta 11
  if(tela==15){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);}
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 550, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){
    fill("#61380B")
    rect(30, 550, 30, 30);}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Podemos afirmar sobre o período da mineração no \nBrasil que:", 10, 80)
    textAlign(LEFT)
    text("A exploração das minas de ouro só trouxe benefícios \npara Portugal.", 70, 223)
    text("A mineração contribuiu para interligar as várias \nregiões do Brasil e foi fator de diferenciação \nda sociedade.", 70, 320)
    text("A mineração deu origem a uma classe média urbana \nque teve papel decisivo na independência do Brasil.", 70, 470)
    text("O ouro beneficiou apenas a Inglaterra, que \nfinanciou sua exploração.", 70, 575)
  }
  
  //Pergunta 12
  if(tela==16){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);}
    
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Após a restauração Portuguesa, ocorrida em 1640:", 10, 80)
    textAlign(LEFT)
    text("As relações entre Portugal e o Brasil tornaram-se \nmais liberais.", 70, 223)
    text(" A autonomia administrativa do Brasil foi ampliada.", 60, 320)
    text("O Pacto Colonial luso enrijeceu-se.", 70, 375)
    text("A justiça colonial passou a ser exercida pelos \n“homens novos”.", 70, 425)
  }
  
  //Pergunta 13
  if(tela==17){
    
    createCanvas(1000, 1000)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 550, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){
    fill("#61380B")
    rect(30, 550, 30, 30);}
    
    fill(240)
    rect(30, 600, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 600 && mouseY < 630){
    fill("#61380B")
    rect(30, 600, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 650, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 650 && mouseY < 680){
    fill("#61380B")
    rect(30, 650, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(38)
    fill(0)
    text("O que ocorreu na Bahia de 1798, ao contrário das \noutras situações de contestação política na América \nPortuguesa, é que o projeto que lhe era subjacente não \ntocou somente na condição, ou no instrumento, da integração \nsubordinada das colônias no império luso. Dessa feita, ao \ncontrário do que se deu nas Minas Gerais (1789), a \nsedição avançou sobre a sua decorrência. \nA diferença entre as sedições abordadas no texto \nencontrava-se na pretensão de:", 5, 50)
    textAlign(LEFT)
    text("Eliminar a hierarquia militar.", 70, 525)
    text("Abolir a escravidão africana.", 70, 575)
    text("Extinguir o absolutismo monárquico.", 70, 625)
    text("Suprimir a propriedade fundiária.", 70, 675)
  }
  
  //Pergunta 14
  if(tela==18){
    
    createCanvas(1000, 1000)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);}
    
    
    fill(240)
    rect(30, 550, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){
    fill("#61380B")
    rect(30, 550, 30, 30);
    if(mouseIsPressed){tela=4}}
    
   
    fill(240)
    rect(30, 600, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 600 && mouseY < 630){
    fill("#61380B")
    rect(30, 600, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 650, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 650 && mouseY < 680){
    fill("#61380B")
    rect(30, 650, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(38)
    fill(0)
    text(" Seguiam-se vinte criados custosamente vestidos e montados \nem soberbos cavalos; depois destes, marchava o Embaixador \ndo Rei do Congo magnificamente ornado de seda azul \npara anunciar ao Senado que a vinda do Rei estava \ndestinada para o dia dezesseis. Em resposta obteve repetidas \nvivas do povo que concorreu alegre e admirado de tanta \ngrandeza. \nOriginária dos tempos coloniais, a festa da Coroação do \nRei do Congo evidencia um processo de: ", 10, 50)
    textAlign(LEFT)
    text("Ressignificação cultural.", 70, 525)
    text("Supressão simbólica.", 70, 575)
    text("Acomodação política", 70, 625)
    text("Exclusão social.", 70, 675)
  }
  
  //Pergunta 15
  if(tela==19){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);}
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 600, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 600 && mouseY < 630){
    fill("#61380B")
    rect(30, 600, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Todas as alternativas apresentam fatores que explicam a \nprimazia dos portugueses no cenário dos grandes \ndescobrimentos, exceto:", 20, 50)
    textAlign(LEFT)
    text("A atuação empreendedora da burguesia lusa no \ndesenvolvimento da indústria náutica.", 70, 225)
    text(" A localização geográfica de Portugal, distante do \nMediterrâneo oriental e sem ligações comerciais com \no restante do continente.", 70, 325)
    text(" A presença da fé e o espírito da cavalaria e das \ncruzadas que atribuíam aos portugueses a missão de \ncristianizar os povos chamados 'infiéis.' ", 70, 475)
    text("O aparecimento pioneiro da monarquia absolutista em \nPortugal responsável pela formação do Estado \nmoderno.", 70, 625)
  }
  
  //Pergunta 16
  if(tela==20){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 550, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){
    fill("#61380B")
    rect(30, 550, 30, 30);}
    
    
    fill(240)
    rect(30, 600, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 650 && mouseY < 680){
    fill("#61380B")
    rect(30, 650, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Em 1534, o governo português concluiu que a única forma \nde ocupação do Brasil seria através da colonização. Era \nnecessário colonizar, simultaneamente, todo o extenso \nterritório brasileiro. \nEssa colonização dirigida pelo governo português se deu \natravés da:", 5, 50)
    textAlign(LEFT)
    text(" Criação da Companhia Geral do Comércio do \nEstado do Brasil.", 70, 375)
    text("Criação do sistema de governo-geral e câmaras \nmunicipais.", 70, 475)
    text("Criação das capitanias hereditárias.", 70, 575)
    text("Montagem do sistema colonial.", 70, 625)
  }
  
  //Pergunta 17
  if(tela==21){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
   
    
    
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 550, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){
    fill("#61380B")
    rect(30, 550, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 600, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 600 && mouseY < 630){
    fill("#61380B")
    rect(30, 600, 30, 30);}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text(" 'A partir da segunda metade do século 18, o número de \nescravos recém-chegados cresce no Rio e se estabiliza na \nBahia. Nenhum lugar servia tão bem à recepção de \nescravos quanto o Rio de Janeiro'. \n Na matéria, o jornalista informa uma mudança na \ndinâmica do tráfico atlântico que está relacionada à seguinte \natividade:", 5, 80)
    textAlign(LEFT)
    text("Coleta de drogas do sertão", 70, 475)
    text("Retirada de madeira do litoral.  ", 70, 525)
    text("Adoção da pecuária extensiva", 70, 575)
    text("Extração de metais preciosos. ", 70, 625)
  }
  
  //Pergunta 18
  if(tela==22){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);} 
    
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(20, 600, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 600 && mouseY < 630){
    fill("#61380B")
    rect(20, 600, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("As terras brasileiras foram divididas por meio de tratados \nentre Portugal e Espanha. De acordo com esses tratados \n conclui-se que:", 0, 80)
    textAlign(LEFT)
    text("O Tratado de Madri reconheceu a expansão \nportuguesa além da linha de Tordesilhas.", 70, 275)
    text("Portugal, pelo Tratado de Tordesilhas, detinha o \ncontrole da foz do rio Amazonas.", 70, 375)
    text("Portugal, pelo Tratado de San Ildefonso, \nperdia territórios na América em relação ao de \nTordesilhas.", 70, 475)
    text("O Tratado de Madri criou a divisão administrativa \nda América Portuguesa em Vice-Reinos \nOriental e Ocidental.", 55, 625)
  }
  
  //Pergunta 19
  if(tela==23){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 550, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){
    fill("#61380B")
    rect(30, 550, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 600, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 600 && mouseY < 630){
    fill("#61380B")
    rect(30, 600, 30, 30);}
    
    
    fill(240)
    rect(30, 650, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 650 && mouseY < 680){
    fill("#61380B")
    rect(30, 650, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("A rebelião luso-brasileira em Pernambuco começou a ser \nurdida em 1644 e explodiu em 13 de junho de 1645, dia \nde Santo Antônio. Uma das primeiras medidas de \nJoão Fernandes foi decretar nulas as dívidas que os \nrebeldes tinham com os holandeses. Houve grande adesão \nda “nobreza da terra”, entusiasmada com esta proclamação \nheroica. \nO desencadeamento dessa revolta na América portuguesa \nseiscentista foi o resultado do(a):", 10, 35)
    textAlign(LEFT)
    text("Fraqueza bélica dos protestantes batavos. ", 70, 525)
    text("Comércio transatlântico da África ocidental. ", 70, 575)
    text("Interesse econômico dos senhores de engenho. ", 70, 625)
    text("Auxílio financeiro dos negociantes flamengos.", 70, 675)
  }
  
  //Pergynta 20
  if(tela==24){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);}
    
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 550, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){
    fill("#61380B")
    rect(30, 550, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(36)
    fill(0)
    text(" A transferência da corte trouxe para a América portuguesa a \nfamília real e o governo da Metrópole. Trouxe também, e \nsobretudo, boa parte do aparato administrativo português. \nPersonalidades diversas e funcionários régios continuaram \nembarcando para o Brasil atrás da corte, dos seus empregos \ne dos seus parentes após o ano de 1808. \nOs fatos apresentados acima se relacionam ao processo de \nindependência da América portuguesa por terem:", 10, 35)
    textAlign(LEFT)
    text("Incentivado o clamor popular por liberdade.", 70, 425)
    text("Enfraquecido o pacto de dominação metropolitana.", 70, 475)
    text("Obtido o apoio do grupo constitucionalista português.", 70, 525)
    text("Provocado os movimentos separatistas das províncias.", 70, 575)
  }
  
  //Pergunta 21
  if(tela==25){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);}
    
    
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(36)
    fill(0)
    text("A sesmaria foi o atrativo utilizado pela Coroa Portuguesa para \ndispor de recursos humanos e financeiros no processo colonizador.” \nSobre o sistema de sesmarias, marque a alternativa correta:", 5, 35)
    textAlign(LEFT)
    text("O sesmeiro não detinha a posse útil da terra, mas apenas o \ndever de administrá-la.", 70, 225)
    text("A doação de sesmarias definiu a colonização nos moldes da \npequena propriedade agrícola.", 70, 325)
    text("O sesmeiro tinha posse plena da terra e o dever de torná-la \nprodutiva.", 70, 425)
    text("A doação de sesmarias substituiu as fracassadas capitanias \nhereditárias.", 70, 525)
  }
  
  //Pergunta 22 
  if(tela==26){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);}
    
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 550, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){
    fill("#61380B")
    rect(30, 550, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(36)
    fill(0)
    text("A elevação de Recife à condição de vila; os protestos contra a \nimplantação das Casas de Fundição e contra a cobrança de \nquinto; a extrema miséria e carestia reinantes em Salvador, no \nfinal do século 18, foram episódios que colaboraram, respectiva- \nmente, para as seguintes sublevações coloniais:", 5, 35)
    textAlign(LEFT)
    text("Guerra dos Mascates, Revolta de Felipe dos Santos \ne Conjura dos Alfaiates.", 70, 275)
    text("Guerra dos Emboabas, Inconfidência Mineira e \nConjura dos Alfaiates.", 70, 375)
    text("Conspiração dos Suassunas, Inconfidência Mineira e \nRevolta do Maneta.", 70, 475)
    text("Guerra dos Mascates, Motim do Pitangui e \nRevolta dos Malês.", 70, 575)
  }
  
  //Pergunta 23
  if(tela==27){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 150, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 150 && mouseY < 180){
    fill("#61380B")
    rect(30, 150, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);}
    
    
    fill(240)
    rect(30, 600, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 600 && mouseY < 630){
    fill("#61380B")
    rect(30, 600, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(36)
    fill(0)
    text("A Guerra dos Emboabas, a dos Mascates e a Revolta de \nVila Rica, verificadas nas primeiras décadas do século 18, \npodem ser caracterizadas como:", 5, 35)
    textAlign(LEFT)
    text("Movimentos isolados em defesa de ideias liberais, nas \ndiversas capitanias, com a intenção de se criarem governos \nrepublicanos.", 70, 175)
    text(" Mvimentos de defesa das terras brasileiras, que resul- \ntaram num sentimento nacionalista, visando à independência \npolítica.", 70, 325)
    text("Manifestações de rebeldia localizadas, que contestavam \nalguns aspectos da política econômica de dominação do \ngoverno português.", 70, 475)
    text("Manifestações separatistas de ideologia liberal contrárias \nao domínio português.", 70, 625)
  }
  
  //Pergunta 24
  if(tela==28){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);}
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(36)
    fill(0)
    text(" A colonização brasileira foi sempre marcada por confrontos que \nrefletiam a diversidade de interesses presentes na sociedade colonial \ncomo pode ser observado nos(as): ", 5, 35)
    textAlign(LEFT)
    text("Conflitos internos, sem conteúdo emancipacionista, como as \nGuerras dos Emboabas e dos Mascates. ", 70, 225)
    text("Ideais monárquicos e democráticos defendidos pelos mine- \nradores e agricultores na Conjuração Mineira. ", 70, 325)
    text("Projetos imperiais adotados pela Revolução Pernambu- \ncana de 1817 por influência da burocracia lusitana. ", 70, 425)
    text("Características nacionalistas de todos os movimentos ocorri- \ndos no período colonial, como nas Revoltas do Rio de \nJaneiro e de Beckman. ", 70, 525)
  }
  
  //Pergunta 25
  if(tela==29){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 150, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 150 && mouseY < 180){
    fill("#61380B")
    rect(30, 150, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(36)
    fill(0)
    text("O desenvolvimento da economia mineradora no século 17 teve \ndiferentes repercussões sobre a vida colonial, conforme se apresenta \ncaracterizado numa das opções a seguir. Assinale-a. ", 5, 35)
    textAlign(LEFT)
    text("Movimento de interiorização conhecido como bandeirismo, \nresponsável pelo fornecimento de mão de obra indígena para \nas minas. ", 70, 175)
    text("Incremento do comércio interno e das atividades voltadas \npara o abastecimento na região centro-sul. ", 70, 325)
    text(" Sufocamento dos movimentos de rebelião, graças à riqueza \nmaterial gerada pelo ouro e pela prata. ", 70, 425)
    text("Descentralização da administração colonial para facilitar \no controle da produção. ", 70, 525)
  }
  
  //Pergunta 26
  if(tela==30){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 150, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 150 && mouseY < 180){
    fill("#61380B")
    rect(30, 150, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(36)
    fill(0)
    text("A respeito dos espaços econômicos do açúcar e do ouro no Bra- \nsil colonial, é correto afirmar:", 5, 35)
    textAlign(LEFT)
    text("A pecuária no sertão nordestino surgiu em resposta às de- \nmandas de transporte da economia mineradora.", 70, 175)
    text("A produção açucareira estimulou a formação de uma rede \nurbana mais ampla do que a atividade aurífera.", 70, 275)
    text("A mão de obra escrava indígena foi mais empregada na \nexploração do ouro do que na produção de açúcar.", 70, 375)
    text(" Custo relativo do frete dos metais preciosos viabilizou a \ninteriorização da colonização portuguesa.", 70, 475)
  }
  
  //Pergunta 27
  if(tela==31){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);}
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("As primeiras expressões da arte colonial brasileira tiveram \ninicio por questões funcionais e religiosa . Essas manifesta- \nções podem ser observadas principalmente na:", 10, 80)
    textAlign(LEFT)
    text("Arte em ouro.", 70, 325)
    text("Pintura e escultura.", 70, 375)
    text("Arquitetura e escultura.", 70, 425)
    text("Formação de instrumentistas para capelas.", 70, 475)
  }
  
  //Pergunta 28
  if(tela==32){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);} 
    
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("As esculturas criadas pelos freis beneditinos Agostinho da \nPiedade(Bahia) e Agostinho de Jesus(Rio de \nJaneiro) ainda encontram-se expostas nos principais mu- \nseus do país.  Suas imagens eram compostas geralmente", 10, 80)
    textAlign(LEFT)
    text("de barro ou madeira policromada.", 70, 325)
    text("de madeira cobertas por ouro e articuladas.", 70, 375)
    text("de ouro talhado, com detalhes em pedras preciosas", 70, 425)
    text("de taipa de pilão, com detalhes em madeira e ouro.", 70, 475)
  }
  
  //Pergunta 29
  if(tela==33){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("O Brasil possui uma grande variedade de estilos e ritmos. \nNossa formação musical recebeu influências da música eu- \nropeia, indígena e africana. Dentre todos os estilos, o que \npode ser considerado o primeiro ritmo genuinamente brasi- \nleiro é:", 5, 50)
    textAlign(LEFT)
    text("O Samba de roda", 70, 325)
    text("A Modinha", 70, 375)
    text("O Cateretê", 70, 425)
    text(" O Lundu", 70, 475)
  }
  
  //Pergunta 30
  if(tela==34){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);}
    
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 550, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 550 && mouseY < 580){
    fill("#61380B")
    rect(30, 550, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("A igreja de São Francisco de Assis é um exemplo da \narquitetura barroca no Brasil. Além da arquitetura, o \nbarroco se fez presente na pintura e escultura. Podemos di- \nzer que o auge do barroco brasileiro foi:", 5, 50)
    textAlign(LEFT)
    text("Durante os primeiros anos da colonização, com os \njesuítas.", 70, 325)
    text(" Durante o ciclo do ouro, principalmente em Minas \nGerais.", 70, 425)
    text("Principalmente na Bahia, durante o ciclo do cacau. ", 70, 525)
    text(" Somente em São Paulo de piratininga, onde se \ntornaria a cidade de São Paulo.", 70, 575)
  }
  
  //Pergunta 31
  if(tela==35){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    image(img[8],400 ,300 , 0,0)
    
    stroke(0)
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("A imagem abaixo foi pintada no século 17 pelo pintor \nAlbert Eckhout. Ele era um dos que vieram ao Brasil \ncom a tarefa de pintar as características da nossa flora e fa- \nuna. Eckhout pertencia a caravana de", 5, 50)
    textAlign(LEFT)
    text("Pedro Álvares Cabral", 70, 325)
    text("Maurício de Nassau", 70, 375)
    text("Bandeirantes", 70, 425)
    text("Jean Baptist Debret", 70, 475)
  }
  
  //Pergunta 32
  if(tela==36){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Os Jesuítas foram os primeiros a utilizar a música brasi- \nleira. Um dos ritmos utilizados pelos catequizadores foi \nexatamente o cateretê, uma dança:", 5, 50)
    textAlign(LEFT)
    text("Indígena, semelhante ao samba.", 70, 225)
    text("Conhecida também como lundu", 70, 275)
    text("africana, que os jesuítas trouxeram por achar que os \nnativos aprenderiam mais rápido.", 70, 325)
    text("Indígena, que era aprendida e adaptada com letras \nda doutrina católica.", 70, 425)
  }
  
  //Pergunta 33
  if(tela==37){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Os doze profetas, as imagens representativas da paixão de \nCristo em madeira de cedro, e a imagens articuladas no \nsantuário de Congonhas do Campo são exemplos", 10, 50)
    textAlign(LEFT)
    text("de obras de Eckhout, artista influente durante a \ncolônia.", 70, 223)
    text("de obras de aleijadinho, cujo nome era Antônio \nFrancisco Lisboa.", 70, 320)
    text("de obras que foram rejeitadas pela igreja, por causa \nda sua falta de semelhança com as imagens originais.", 70, 425)
    text("de obras trazidas pelos jesuítas ao Brasil, durante o \nperíodo de catequização dos nativos.", 70, 520)
  }
  
  //Pergunta 34
  if(tela==38){
    
    createCanvas(1000, 1000)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 500, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 500 && mouseY < 530){
    fill("#61380B")
    rect(30, 500, 30, 30);}
    
    
    fill(240)
    rect(30, 600, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 600 && mouseY < 630){
    fill("#61380B")
    rect(30, 600, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(38)
    fill(0)
    text("As primeiras manifestações da música erudita no Brasil \nforam com a importação de partituras de Portugal. Com o \naumento das orquestras, geralmente formadas por negros escra- \nvos, foi necessário importar partituras de Portugal, fazendo \ncom que", 5, 50)
    textAlign(LEFT)
    text("Nossa música fosse sendo modificada para adaptar ao \ngosto brasileiro", 70, 325)
    text("Surgissem novos compositores negros, que acabaram \ndominando a arte musical no Brasil.", 70, 425)
    text("Os estilos mais comuns fossem as óperas, os minuetos, \nmodinhas e fandangos.", 70, 525)
    text("A música tocada no brasil fosse, basicamente, música \npopular europeia.", 70, 625)
  }
  
  //Pergunta 35
  if(tela==39){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(CENTER)
    textSize(40)
    fill(0)
    text("A modinha era um estilo:", 350, 80)
    textAlign(LEFT)
    text(" Lírico romântico, acompanhado de viola.", 70, 223)
    text("Rápido e batucado", 70, 275)
    text("Lento e erudito", 70, 325)
    text("Dançado, que deu origem ao forró.", 70, 375)
  }
  
  //Pergunta 36
  if(tela==40){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);}
    
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text(" ''A efervescência que conheceram em Minas Gerais do \nséculo 18, as artes e as letras também teve feição peculiar. \nPela primeira vez na Colônia buscava-se solução própria \npara a expressão artística.'' São exemplos do que o texto \nafirma:", 10, 50)
    textAlign(LEFT)
    text(" A pintura e a escultura renascentistas.", 70, 325)
    text("A poesia e a pintura românticas.", 70, 375)
    text(" A arquitetura barroca e a poesia árcade.", 60, 425)
    text("A literatura de viagem e a arquitetura gótica.", 70, 475)
  }
  
  //Pergunta 37
  if(tela==41){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 150, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 150 && mouseY < 180){
    fill("#61380B")
    rect(30, 150, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 450, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 450 && mouseY < 480){
    fill("#61380B")
    rect(30, 450, 30, 30);}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Quais destes autores fizeram parte do período colonial?", 10, 80)
    textAlign(LEFT)
    text("Lima Barreto, Augusto dos Anjo e Euclides da \nCunha.", 70, 175)
    text("Machado de Assis, Raul Pompeia e Olavo \nBilac.", 70, 275)
    text("Castro Alves, José de Alencar e Fagundes \nVarela.", 70, 375)
    text("Grégorio de Matos, Claudio Manuel da Costa \ne Alvarenga Peixoto.", 70, 475)
  }
  
  //Pergunta 38
  if(tela==42){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 400, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 400 && mouseY < 430){
    fill("#61380B")
    rect(30, 400, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Primeiro documento escrito em território nacional, encami- \nnhado ao rei dom Manuel de Portugal, dando notícias \n do descobrimento da terra de Vera Cruz", 10, 80)
    textAlign(LEFT)
    text("Tratado de Tordesilhas.", 70, 275)
    text("Carta de Pero Vaz da Caminha.", 70, 325)
    text("Tratado de Madrid. ", 70, 375)
    text("Carta que elevou o Brasil a Reino Unido de \n Portugal e Algarves.", 70, 425)
  }
  
  //Pergunta 39
  if(tela==43){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Quem foi o primeiro Governador do Brasil?", 10, 80)
    textAlign(LEFT)
    text("Tomé de Souza", 70, 223)
    text("Duarte da Costa", 70, 275)
    text("Mem de Sá", 70, 325)
    text("Pedro Álvares Cabral", 70, 375)
  }
  
  //Pergunta 40
  if(tela==44){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Primeiro nome dado ao Brasil pelos colonizadores:", 10, 80)
    textAlign(LEFT)
    text("Novo Mundo", 70, 223)
    text("Terra de Santa Cruz", 70, 275)
    text("Pindorama", 70, 325)
    text("Ilha de Vera Cruz", 70, 375)
  }
  
  //Pergunta 41
  if(tela==45){
    
    createCanvas(800, 800)
    imageMode(CORNER)
    image(img[4], 0, 0, 700, 740)
    
    stroke(0)
    fill(240)
    rect(30, 200, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
    fill("#61380B")
    rect(30, 200, 30, 30);
    if(mouseIsPressed){tela=4}} 
    
    
    fill(240)
    rect(30, 250, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 250 && mouseY < 280){
    fill("#61380B")
    rect(30, 250, 30, 30);}
    
    fill(240)
    rect(30, 300, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 300 && mouseY < 330){
    fill("#61380B")
    rect(30, 300, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    fill(240)
    rect(30, 350, 30, 30);
  if(mouseX > 30 && mouseX < 60 && mouseY > 350 && mouseY < 380){
    fill("#61380B")
    rect(30, 350, 30, 30);
    if(mouseIsPressed){tela=4}}
    
    noStroke()
    textFont(font)
    textAlign(LEFT)
    textSize(40)
    fill(0)
    text("Os nativos chamavam o Brasil de ''Pindorama'', \n o que significa esta palavra?", 10, 80)
    textAlign(LEFT)
    text("Vermelho como uma brasa", 70, 223)
    text("Terra de Palmeiras", 70, 275)
    text("Terra de papagaios", 70, 325)
    text("Terra verde e amarela", 70, 375)
  }
  
  
  
 
  
}
 