class Rect {
    constructor(context, x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.context = context;

        const piqueImg = new Image();   // Crée un nouvel élément Image
        piqueImg.width = 
        piqueImg.src = 'images/lava_pattern.jpg'; // Définit le chemin vers sa source
        piqueImg.onload = () => {
            this.pattern = this.context.createPattern(piqueImg, 'repeat');
        }
    }

    draw() {
        // this.context.drawImage(piqueImg, this.x, this.y, this.width, this.height);
        this.context.fillStyle = this.pattern || 'red';
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Game {
    constructor(px, py, pw, ph) {
        // Canvas et contexte
        this.canvas        = document.querySelector('canvas'); // Récupération du <canvas>
        this.canvas.width  = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        this.context       = this.canvas.getContext('2d'); // Obtention du contexte de dessin 2d
        
        // Propriétés du joueur
        this.joueur = new Rect(this.context, px, py, pw, ph, 'white');
        this.grab = false;
        
        // Leap
        this.controller = new Leap.Controller({enableGestures: true}); // Initialisation du contrôleur Leap Motion
        this.controller.connect(); // Ouvre la connexion WebSocket vers le service Leap de l'ordinateur
    }

    dragCube(hand, frame) {
        const palmPosition = get2dCoords(hand.stabilizedPalmPosition, frame, this.canvas);
    
        // MAIN FERMÉE
        if (hand.grabStrength === 1) {
            this.grab = true;
        }

        const palmSquare = {
            x: palmPosition.x,
            y: palmPosition.y,
            width: 15,
            height: 15
        };
    
        if (hand.grabStrength === 1 && collides(this.joueur, palmSquare)) {
            this.joueur.x = palmPosition.x - (this.joueur.width / 2);
            this.joueur.y = palmPosition.y - (this.joueur.height / 2);
        }
    }

    drawHand(hand, frame) {
        // console.log('GRAB', hand.grabStrength);
        
        // Dessin de la paume
        const palmPosition = get2dCoords(hand.stabilizedPalmPosition, frame, this.canvas);
        this.context.fillStyle = 'yellow';
        this.context.fillRect(palmPosition.x, palmPosition.y, 15, 15);
    
        // Pour cette main : Récupération de la position de chaque doigt...
        hand.fingers.forEach((finger) => {
            // Conversion des coordonnées du doigt de 3D vers 2D
            const fingerMcp = get2dCoords(finger.mcpPosition, frame, this.canvas);
            const fingerPip = get2dCoords(finger.pipPosition, frame, this.canvas);
            const fingerDip = get2dCoords(finger.dipPosition, frame, this.canvas);
            const fingerCarp = get2dCoords(finger.carpPosition, frame, this.canvas);
            const fingerTip = get2dCoords(finger.stabilizedTipPosition, frame, this.canvas);
            
            // Dessin d'un carré de 5x5 à la position
            this.context.fillStyle = 'white';
            this.context.fillRect(fingerMcp.x, fingerMcp.y, 5, 5);
            this.context.fillRect(fingerPip.x, fingerPip.y, 5, 5);
            this.context.fillRect(fingerDip.x, fingerDip.y, 5, 5);
            this.context.fillRect(fingerCarp.x, fingerCarp.y, 5, 5);
            this.context.fillStyle = '#09F'; // bleu clair
            this.context.fillRect(fingerTip.x, fingerTip.y, 10, 10);
        });
    
        // Toujours pour cette main, vérification du grab
        this.dragCube(hand, frame);
    }

    update(callback) {
        this.controller.on('frame', (frame) => {
            // Efface le canvas
            // this.context.fillStyle = 'rgba(0, 0, 0, 0.3)';
            // this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // Récupération de la main détectée...
            if (frame.hands[0]) {
                game.drawHand(frame.hands[0], frame);
            }

            // Dessin du Joueur
            game.context.fillStyle = 'cyan';
            game.context.fillRect(game.joueur.x, game.joueur.y, game.joueur.width, game.joueur.height);

            // Propre à chaque niveau
            callback();
        })
    }
}