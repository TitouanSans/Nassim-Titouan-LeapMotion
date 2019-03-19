const GAME_WIDTH = 1124;
const GAME_HEIGHT = 750;

// JOUEUR
const PLAYER_X      = GAME_WIDTH / 4
const PLAYER_Y      = GAME_HEIGHT / 3
const PLAYER_WIDTH  = 50;
const PLAYER_HEIGHT = 50;

const game = new Game(PLAYER_X, PLAYER_Y, PLAYER_WIDTH, PLAYER_HEIGHT);

// SORTIE
const Sortie = new Rect (game.canvas.width - (game.canvas.width / 4) - 50, game.canvas.height - (game.canvas.height / 3) - 50, 100, 100, '');

// MURS CONTOURS
const Cube_1 = new Rect (0, 0, game.canvas.width, 200, ''); 
const Cube_2 = new Rect (game.canvas.width - 200, 0, 200, game.canvas.height, ''); 
const Cube_3 = new Rect (0, game.canvas.height - 200, game.canvas.width, 200, ''); 
const Cube_4 = new Rect (0, 0, 200, game.canvas.height, ''); 

// MURS OBSTACLES
const Cube_5 = new Rect ( (game.canvas.width / 2.5), 0, 100, game.canvas.height / 2, ''); 
const Cube_6 = new Rect ( (game.canvas.width / (10/6) ) - 50, game.canvas.height / 2, 100, game.canvas.height / 2, ''); 


game.update(function() {
    // Dessin de la sortie
    game.context.fillStyle = 'lime';
    game.context.fillRect(Sortie.x, Sortie.y, Sortie.width, Sortie.height);
    
    // Dessin des murs
    game.context.fillStyle = 'red';
    game.context.fillRect(Cube_1.x, Cube_1.y, Cube_1.width, Cube_1.height);

    game.context.fillStyle = 'red';
    game.context.fillRect(Cube_2.x, Cube_2.y, Cube_2.width, Cube_2.height);

    game.context.fillStyle = 'red';
    game.context.fillRect(Cube_3.x, Cube_3.y, Cube_3.width, Cube_3.height);

    game.context.fillStyle = 'red';
    game.context.fillRect(Cube_4.x, Cube_4.y, Cube_4.width, Cube_4.height);

    game.context.fillStyle = 'red';
    game.context.fillRect(Cube_5.x, Cube_5.y, Cube_5.width, Cube_5.height);

    game.context.fillStyle = 'red';
    game.context.fillRect(Cube_6.x, Cube_6.y, Cube_6.width, Cube_6.height);

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