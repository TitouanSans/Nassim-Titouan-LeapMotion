const GAME_WIDTH = 1200; //600, 300
const GAME_HEIGHT = 800; //400, 200

// JOUEUR
const PLAYER_WIDTH  = 50;
const PLAYER_HEIGHT = 50;
const PLAYER_X      = 125 - (PLAYER_HEIGHT / 2);
const PLAYER_Y      = 150 - (PLAYER_HEIGHT / 2);


const game = new Game(PLAYER_X, PLAYER_Y, PLAYER_WIDTH, PLAYER_HEIGHT);

// SORTIE
const Sortie = new Rect(game.context, 1069.24, 625, 50, 50, '');

// MURS CONTOURS
const Cube_1 = new Rect(game.context, 0, 0, 1200, 50, ''); 
const Cube_2 = new Rect(game.context, 1150, 0, 50, 800, ''); 
const Cube_3 = new Rect(game.context, 0, 750, 1200, 50, ''); 
const Cube_4 = new Rect(game.context, 0, 0, 50, 800, ''); 

// MURS HAUT
const Cube_A1 = new Rect(game.context, 100, 0, 50, 100, ''); 
const Cube_A2 = new Rect(game.context, 180.77, 0, 50, 200, ''); 
const Cube_A3 = new Rect(game.context, 261.54, 0, 50, 300, ''); 
const Cube_A4 = new Rect(game.context, 342.31, 0, 50, 400, ''); 
const Cube_A5 = new Rect(game.context, 423.08, 0, 50, 500, ''); 
const Cube_A6 = new Rect(game.context, 503.85, 0, 50, 400, ''); 
const Cube_A7 = new Rect(game.context, 584.62, 0, 50, 300, ''); 
const Cube_A8 = new Rect(game.context, 665.39, 0, 50, 200, ''); 
const Cube_A9 = new Rect(game.context, 746.16, 0, 50, 100, ''); 
const Cube_A10 = new Rect(game.context, 826.93, 0, 50, 200, ''); 
const Cube_A11 = new Rect(game.context, 907.7, 0, 50, 300, ''); 
const Cube_A12 = new Rect(game.context, 988.47, 0, 50, 400, ''); 
const Cube_A13 = new Rect(game.context, 1069.24, 0, 50, 500, ''); 

// MURS BAS
const Cube_B1 = new Rect(game.context, 100, 300, 50, 500, ''); 
const Cube_B2 = new Rect(game.context, 180.77, 400, 50, 450, ''); 
const Cube_B3 = new Rect(game.context, 261.54, 500, 50, 300, ''); 
const Cube_B4 = new Rect(game.context, 342.31, 600, 50, 250, ''); 
const Cube_B5 = new Rect(game.context, 423.08, 700, 50, 200, ''); 
const Cube_B6 = new Rect(game.context, 503.85, 600, 50, 250, ''); 
const Cube_B7 = new Rect(game.context, 584.62, 500, 50, 300, ''); 
const Cube_B8 = new Rect(game.context, 665.39, 400, 50, 450, ''); 
const Cube_B9 = new Rect(game.context, 746.16, 300, 50, 500, ''); 
const Cube_B10 = new Rect(game.context, 826.93, 400, 50, 450, ''); 
const Cube_B11 = new Rect(game.context, 907.7, 500, 50, 300, ''); 
const Cube_B12 = new Rect(game.context, 988.47, 600, 50, 250, ''); 
const Cube_B13 = new Rect(game.context, 1069.24, 700, 50, 200, ''); 

game.update(function() {
    // Dessin de la sortie
    game.context.fillStyle = 'lime';
    game.context.fillRect(Sortie.x, Sortie.y, Sortie.width, Sortie.height);
    
    // Dessin des murs
    Cube_1.draw();
    Cube_2.draw();
    Cube_3.draw();
    Cube_4.draw();
    Cube_A1.draw();
    Cube_A2.draw();
    Cube_A3.draw();
    Cube_A4.draw();
    Cube_A5.draw();
    Cube_A6.draw();
    Cube_A7.draw();
    Cube_A8.draw();
    Cube_A9.draw();
    Cube_A10.draw();
    Cube_A11.draw();
    Cube_A12.draw();
    Cube_A13.draw();
    
    Cube_B1.draw();
    Cube_B2.draw();
    Cube_B3.draw();
    Cube_B4.draw();
    Cube_B5.draw();
    Cube_B6.draw();
    Cube_B7.draw();
    Cube_B8.draw();
    Cube_B9.draw();
    Cube_B10.draw();
    Cube_B11.draw();
    Cube_B12.draw();
    Cube_B13.draw();


   
    /*
    game.context.beginPath();
    game.context.arc(Cube.x, Cube.y, Cube.size, 0, Math.PI * 2);
    game.context.fill();
    game.context.closePath();
*/
    // CONDITION COLLISION
    if( collides(game.joueur, Cube_1) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    } 

    if( collides(game.joueur, Cube_2) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    } 

    if( collides(game.joueur, Cube_3) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    } 

    if( collides(game.joueur, Cube_4) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    } 

    // COLLISISON BAS
    if( collides(game.joueur, Cube_A1) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A2) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A3) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A4) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A5) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A6) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A7) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A8) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A9) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A10) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A11) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A12) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_A13) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    } 

     // COLLISISON HAUT
     if( collides(game.joueur, Cube_B1) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B2) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B3) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B4) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B5) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B6) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B7) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B8) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B9) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B10) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B11) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B12) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    }

    if( collides(game.joueur, Cube_B13) ) {
        console.log('TOUCHER');
        game.joueur.x = 125 - (PLAYER_HEIGHT / 2) 
        game.joueur.y = 150 - (PLAYER_HEIGHT / 2);
    } 
    if( collides(game.joueur, Sortie) ) {
        console.log('SORTIE');
        changeLevel("game_over.html");
    } 
});

