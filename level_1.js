const GAME_WIDTH = 1124;
const GAME_HEIGHT = 750;

// JOUEUR
const PLAYER_X      = 300;
const PLAYER_Y      = 250;
const PLAYER_WIDTH  = 50;
const PLAYER_HEIGHT = 50;

const game = new Game(PLAYER_X, PLAYER_Y, PLAYER_WIDTH, PLAYER_HEIGHT);

// SORTIE
const Sortie = new Rect (game.context, game.canvas.width - (game.canvas.width / 4) - 50, game.canvas.height - (game.canvas.height / 3) - 50, 100, 100, '');

// MURS CONTOURS
const Cube_1 = new Rect (game.context, 0, 0, game.canvas.width, 200, ''); 
const Cube_2 = new Rect (game.context, game.canvas.width - 200, 0, 200, game.canvas.height, ''); 
const Cube_3 = new Rect (game.context, 0, game.canvas.height - 200, game.canvas.width, 200, ''); 
const Cube_4 = new Rect (game.context, 0, 0, 200, game.canvas.height, ''); 

// MURS OBSTACLES
const Cube_5 = new Rect (game.context,  (game.canvas.width / 2.5), 0, 100, game.canvas.height / 2, ''); 
const Cube_6 = new Rect (game.context,  (game.canvas.width / (10/6) ) - 50, game.canvas.height / 2, 100, game.canvas.height / 2, ''); 

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

    if( collides(game.joueur, Cube_5) ) {
        console.log('TOUCHER');
        game.joueur.x = game.canvas.width / 4; 
        game.joueur.y = game.canvas.height / 3;
    } 
    
    if( collides(game.joueur, Cube_6) ) {
        console.log('TOUCHER');
        game.joueur.x = game.canvas.width / 4; 
        game.joueur.y = game.canvas.height / 3;
    } 

    if( collides(game.joueur, Sortie) ) {
        console.log('SORTIE');
        changeLevel("level_2.html");
    } 
})