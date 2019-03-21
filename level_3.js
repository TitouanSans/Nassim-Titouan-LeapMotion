const GAME_WIDTH = 1200; //600, 300
const GAME_HEIGHT = 800; //400, 200

const cubeBouge = true;

// JOUEUR
const PLAYER_WIDTH  = 50;
const PLAYER_HEIGHT = 50;
const PLAYER_X      = (GAME_WIDTH / 2) - (PLAYER_HEIGHT / 2);
const PLAYER_Y      = (GAME_HEIGHT / 2) - (PLAYER_HEIGHT / 2);


const game = new Game(PLAYER_X, PLAYER_Y, PLAYER_WIDTH, PLAYER_HEIGHT);

// SORTIE
const Sortie = new Rect( 50, 40, 100, 100, '');

// MURS CONTOURS
const Cube_1 = new drawImage(lavaImg, 0, 0, game.canvas.width, (game.canvas.height / 20), ''); 
const Cube_2 = new drawImage(lavaImg, game.canvas.width - (game.canvas.height / 20), 0, (game.canvas.height / 20), game.canvas.height, ''); 
const Cube_3 = new drawImage(lavaImg, 0, game.canvas.height - (game.canvas.height / 20), game.canvas.width, (game.canvas.height / 20), ''); 
const Cube_4 = new drawImage(lavaImg, 0, 0, 50, game.canvas.height, ''); 

// MURS
const Cube_8 = new drawImage(lavaImg, 150, 0, 250, 270, ''); 
const Cube_5 = new drawImage(lavaImg, 150, 330, 250, 270, ''); 
const Cube_6 = new drawImage(lavaImg, 300, 500, 500, 100, ''); 
const Cube_7 = new drawImage(lavaImg, 800, 300, 100, 300, ''); 
const Cube_9 = new drawImage(lavaImg, 800, 0, 100, 100, '');  

// OBSTACLES
// DROITE
const Cube_10 = new drawImage(lavaImg, 800, 500, 160, 100, '');  
const Cube_11 = new drawImage(lavaImg, 1100, 500, 100, 100, ''); 
// BAS 1
const Cube_12 = new drawImage(lavaImg, 800, 500, 100, 115, '');  
const Cube_13 = new drawImage(lavaImg, 800, 745, 100, 100, '');  
// BAS 2
const Cube_14 = new drawImage(lavaImg, 500, 500, 100, 125, '');  
const Cube_15 = new drawImage(lavaImg, 500, 735, 100, 100, '');  
// BAS 3
const Cube_16 = new drawImage(lavaImg, 200, 500, 100, 135, '');  
const Cube_17 = new drawImage(lavaImg, 200, 725, 100, 100, '');  

const lavaImg = new Image();   // Crée un nouvel élément Image
lavaImg.src = 'images/lava.jpg'; // Définit le chemin vers sa source 

game.update(function() {
    // Dessin de la sortie
    game.context.fillStyle = 'lime';
    game.context.fillRect(Sortie.x, Sortie.y, Sortie.width, Sortie.height);
    
    // Dessin des murs
    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_1.x, Cube_1.y, Cube_1.width, Cube_1.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_2.x, Cube_2.y, Cube_2.width, Cube_2.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_3.x, Cube_3.y, Cube_3.width, Cube_3.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_4.x, Cube_4.y, Cube_4.width, Cube_4.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_5.x, Cube_5.y, Cube_5.width, Cube_5.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_6.x, Cube_6.y, Cube_6.width, Cube_6.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_7.x, Cube_7.y, Cube_7.width, Cube_7.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_8.x, Cube_8.y, Cube_8.width, Cube_8.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_9.x, Cube_9.y, Cube_9.width, Cube_9.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_10.x, Cube_10.y, Cube_10.width, Cube_10.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_11.x, Cube_11.y, Cube_11.width, Cube_11.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_12.x, Cube_12.y, Cube_12.width, Cube_12.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_14.x, Cube_14.y, Cube_14.width, Cube_14.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_15.x, Cube_15.y, Cube_15.width, Cube_15.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_16.x, Cube_16.y, Cube_16.width, Cube_16.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_17.x, Cube_17.y, Cube_17.width, Cube_17.height);

    game.context.fillStyle = 'red';
    game.context.drawImage(lavaImg, Cube_13.x, Cube_13.y, Cube_13.width, Cube_13.height);


   
    /*
    game.context.beginPath();
    game.context.arc(Cube.x, Cube.y, Cube.size, 0, Math.PI * 2);
    game.context.fill();
    game.context.closePath();
*/
    // CONDITION COLLISION
    if( collides(game.joueur, Cube_1) ) {
        console.log('TOUCHER');
        game.joueur.x = game.canvas.width / 4; 
        game.joueur.y = game.canvas.height / 3;
    } 

    if( collides(game.joueur, Cube_2) ) {
        console.log('TOUCHER');
        game.joueur.x = game.canvas.width / 4; 
        game.joueur.y = game.canvas.height / 3;
    } 

    if( collides(game.joueur, Cube_3) ) {
        console.log('TOUCHER');
        game.joueur.x = game.canvas.width / 4; 
        game.joueur.y = game.canvas.height / 3;
    } 

    if( collides(game.joueur, Cube_4) ) {
        console.log('TOUCHER');
        game.joueur.x = game.canvas.width / 4; 
        game.joueur.y = game.canvas.height / 3;
    } 

    if( collides(game.joueur, Sortie) ) {
        console.log('SORTIE');
        changeLevel("level_1.html");
    } 
});

if(cubeBouge) {
    Cube_16.y += 5;
};

