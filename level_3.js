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
const Sortie = new Rect(game.context, 50, 40, 100, 100, '');

// MURS CONTOURS
const Cube_1 = new Rect(game.context, 0, 0, game.canvas.width, (game.canvas.height / 20), ''); 
const Cube_2 = new Rect(game.context, game.canvas.width - (game.canvas.height / 20), 0, (game.canvas.height / 20), game.canvas.height, ''); 
const Cube_3 = new Rect(game.context, 0, game.canvas.height - (game.canvas.height / 20), game.canvas.width, (game.canvas.height / 20), ''); 
const Cube_4 = new Rect(game.context, 0, 0, 50, game.canvas.height, ''); 

// MURS
const Cube_8 = new Rect(game.context, 150, 0, 250, 270, ''); 
const Cube_5 = new Rect(game.context, 150, 330, 250, 270, ''); 
const Cube_6 = new Rect(game.context, 300, 500, 500, 100, ''); 
const Cube_7 = new Rect(game.context, 800, 300, 100, 300, ''); 
const Cube_9 = new Rect(game.context, 800, 0, 100, 100, '');  

// OBSTACLES
// DROITE
const Cube_10 = new Rect(game.context, 800, 500, 160, 100, '');  
const Cube_11 = new Rect(game.context, 1100, 500, 100, 100, ''); 
// BAS 1
const Cube_12 = new Rect(game.context, 800, 500, 100, 115, '');  
const Cube_13 = new Rect(game.context, 800, 745, 100, 100, '');  
// BAS 2
const Cube_14 = new Rect(game.context, 500, 500, 100, 125, '');  
const Cube_15 = new Rect(game.context, 500, 735, 100, 100, '');  
// BAS 3
const Cube_16 = new Rect(game.context, 200, 500, 100, 135, '');  
const Cube_17 = new Rect(game.context, 200, 725, 100, 100, '');  

game.update(function() {
    // Dessin de la sortie
    game.context.fillStyle = 'lime';
    game.context.fillRect(Sortie.x, Sortie.y, Sortie.width, Sortie.height);
    
    // Dessin des murs
    Cube_1.draw();
    Cube_2.draw();
    Cube_3.draw();
    Cube_4.draw();
    Cube_5.draw();
    Cube_6.draw();
    Cube_7.draw();
    Cube_8.draw();
    Cube_9.draw();
    Cube_10.draw();
    Cube_11.draw();
    Cube_12.draw();
    Cube_13.draw();
    Cube_14.draw();
    Cube_15.draw();
    Cube_16.draw();
    Cube_17.draw();


   
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

