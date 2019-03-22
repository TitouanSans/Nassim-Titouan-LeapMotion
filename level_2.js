const GAME_WIDTH = 1200; //600, 300
const GAME_HEIGHT = 800; //400, 200

// JOUEUR
const PLAYER_WIDTH  = 50;
const PLAYER_HEIGHT = 50;
const PLAYER_X      = (GAME_WIDTH / 2) - (PLAYER_HEIGHT / 2);
const PLAYER_Y      = (GAME_HEIGHT / 2) - (PLAYER_HEIGHT / 2);


const game = new Game(PLAYER_X, PLAYER_Y, PLAYER_WIDTH, PLAYER_HEIGHT);

// SORTIE
const Sortie = new Rect(game.context, 50, 40, 150, 50, '');

// MURS CONTOURS
const Cube_1 = new Rect(game.context, 0, 0, game.canvas.width, (game.canvas.height / 20), ''); 
const Cube_2 = new Rect(game.context, game.canvas.width - (game.canvas.height / 20), 0, (game.canvas.height / 20), game.canvas.height, ''); 
const Cube_3 = new Rect(game.context, 0, game.canvas.height - (game.canvas.height / 20), game.canvas.width, (game.canvas.height / 20), ''); 
const Cube_4 = new Rect(game.context, 0, 0, 50, game.canvas.height, ''); 

// MURS
const Cube_8 = new Rect(game.context, 200, 0, 200, 270, ''); 
const Cube_5 = new Rect(game.context, 200, 330, 200, 270, ''); 
const Cube_6 = new Rect(game.context, 300, 500, 500, 100, ''); 
const Cube_7 = new Rect(game.context, 800, 300, 100, 300, ''); 
const Cube_9 = new Rect(game.context, 800, 0, 100, 100, '');  

// OBSTACLES
// DROITE
const Cube_10 = new Rect(game.context, 800, 500, 160, 100, '');  
const Cube_11 = new Rect(game.context, 1100, 500, 100, 100, ''); 
// BAS 1
const Cube_12 = new Rect(game.context, 800, 500, 50, 115, '');  
const Cube_13 = new Rect(game.context, 800, 745, 50, 100, '');  
// BAS 2
const Cube_14 = new Rect(game.context, 500, 500, 50, 125, '');  
const Cube_15 = new Rect(game.context, 500, 735, 50, 100, '');  
// BAS 3
const Cube_16 = new Rect(game.context, 200, 500, 50, 135, '');  
const Cube_17 = new Rect(game.context, 200, 725, 50, 100, ''); 

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

   
    // CONDITION COLLISION
    if( collides(game.joueur, Cube_1) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_2) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_3) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_4) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_5) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_6) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_7) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_8) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_9) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_10) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_11) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_12) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_13) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_14) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_15) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_16) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Cube_17) ) {
        console.log('TOUCHER');
        game.joueur.x = GAME_WIDTH  / 2; 
        game.joueur.y = GAME_HEIGHT / 2;
    } 

    if( collides(game.joueur, Sortie) ) {
        console.log('SORTIE');
        changeLevel("level_3.html");
    } 
});



