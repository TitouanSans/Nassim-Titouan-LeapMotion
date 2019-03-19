

const canvas  = document.querySelector('canvas'); // Récupération du <canvas>
const context = canvas.getContext('2d'); // Obtention du contexte de dessin 2d

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const controller = new Leap.Controller({enableGestures: true}); // Initialisation du contrôleur Leap Motion
controller.connect(); // Ouvre la connexion WebSocket vers le service Leap de l'ordinateur
 
let grab = false;
let AlignementJ = false;


function object (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

// 100 = (canvas.height / 10)
// 50 = (canvas.height / 20)
// 25 = (canvas.height / 40)
// JOUEUR
const Joueur = new object ( (canvas.width / 2) - (canvas.height / 40), (canvas.height / 2) - (canvas.height / 40), (canvas.height / 20), (canvas.height / 20), '');

// SORTIE
const Sortie = new object (canvas.width / 6 - (canvas.height / 20), canvas.height / 6 - (canvas.height / 20), (canvas.height / 10), (canvas.height / 10), '');

// MURS CONTOURS
const Cube_1 = new object (0, 0, canvas.width, (canvas.height / 20), ''); 
const Cube_2 = new object (canvas.width - (canvas.height / 20), 0, (canvas.height / 20), canvas.height, ''); 
const Cube_3 = new object (0, canvas.height - (canvas.height / 20), canvas.width, (canvas.height / 20), ''); 
const Cube_4 = new object (0, 0, (canvas.height / 20), canvas.height, ''); 

// MURS OBSTACLES
const Cube_5 = new object ( ( (canvas.width / 2) * (canvas.height * 0.0011)) + (canvas.height / 20), canvas.height / 3, (canvas.height / 10), canvas.height / 3, ''); 
const Cube_6 = new object ( (canvas.width / 2) * (canvas.height * 0.0009) - (canvas.height / 20), canvas.height - (canvas.height / 3), 340, (canvas.height / 10), ''); 
const Cube_7 = new object ( (canvas.width / 2) * 0.9 - (canvas.height), (canvas.height / 3) - (1000 - (canvas.height / 3) ) + 100, 100, 1000, ''); 


// À chaque "frame" détectée par le device, on exécute une fonction qui récupère cet objet "frame" ...
controller.on('frame', function(frame) {

    console.log(grab);


    // Efface le canvas
    context.fillStyle = 'rgba(0, 0, 0, 0.3)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Détection des gestures
    /*frame.gestures.forEach(function(gesture) {
        switch (gesture.type) {
            case 'swipe':
                renderSwipe(frame, gesture);
                break;

            case 'circle':
                renderCircle(frame, gesture);
                break;
            
            case 'keyTap':
                renderKeyTap(frame, gesture);
                break;
        }
    });
    */
    
    // Récupération de chaque main détectée...
    frame.hands.forEach(function(hand) {

        console.log('GRAB', hand.grabStrength);
        
        // Dessin de la paume
        const palmPosition = get2dCoords(hand.stabilizedPalmPosition, frame, canvas);
        context.fillStyle = 'yellow';
        context.fillRect(palmPosition.x, palmPosition.y, 15, 15);

        // Pour cette main : Récupération de la position de chaque doigt...
        hand.fingers.forEach(function(finger) {
            // Conversion des coordonnées du doigt de 3D vers 2D
            const fingerMcp = get2dCoords(finger.mcpPosition, frame, canvas);
            const fingerPip = get2dCoords(finger.pipPosition, frame, canvas);
            const fingerDip = get2dCoords(finger.dipPosition, frame, canvas);
            const fingerCarp = get2dCoords(finger.carpPosition, frame, canvas);
            const fingerTip = get2dCoords(finger.stabilizedTipPosition, frame, canvas);
            
            // Dessin d'un carré de 5x5 à la position
            context.fillStyle = 'white';
            context.fillRect(fingerMcp.x, fingerMcp.y, 5, 5);
            context.fillRect(fingerPip.x, fingerPip.y, 5, 5);
            context.fillRect(fingerDip.x, fingerDip.y, 5, 5);
            context.fillRect(fingerCarp.x, fingerCarp.y, 5, 5);
            context.fillStyle = '#09F'; // bleu clair
            context.fillRect(fingerTip.x, fingerTip.y, 10, 10);
        });

        // Toujours pour cette main, vérification du grab
        dragCube(hand, frame);

    });

    // Dessin du Joueur
    context.fillStyle = 'cyan';
    context.fillRect(Joueur.x, Joueur.y, Joueur.width, Joueur.height);
    
    // Dessin de la sortie
    context.fillStyle = 'lime';
    context.fillRect(Sortie.x, Sortie.y, Sortie.width, Sortie.height);
    
    // Dessin des murs
    context.fillStyle = 'red';
    context.fillRect(Cube_1.x, Cube_1.y, Cube_1.width, Cube_1.height);

    context.fillStyle = 'red';
    context.fillRect(Cube_2.x, Cube_2.y, Cube_2.width, Cube_2.height);

    context.fillStyle = 'red';
    context.fillRect(Cube_3.x, Cube_3.y, Cube_3.width, Cube_3.height);

    context.fillStyle = 'red';
    context.fillRect(Cube_4.x, Cube_4.y, Cube_4.width, Cube_4.height);

    context.fillStyle = 'red';
    context.fillRect(Cube_5.x, Cube_5.y, Cube_5.width, Cube_5.height);

    context.fillStyle = 'red';
    context.fillRect(Cube_6.x, Cube_6.y, Cube_6.width, Cube_6.height);

    context.fillStyle = 'red';
    context.fillRect(Cube_7.x, Cube_7.y, Cube_7.width, Cube_7.height);


   
    /*
    context.beginPath();
    context.arc(Cube.x, Cube.y, Cube.size, 0, Math.PI * 2);
    context.fill();
    context.closePath();
*/
    // CONDITION COLLISION
    if( collides(Joueur, Cube_1) ) {
        console.log('TOUCHER');
        Joueur.x = canvas.width / 4; 
        Joueur.y = canvas.height / 3;
    } 

    if( collides(Joueur, Cube_2) ) {
        console.log('TOUCHER');
        Joueur.x = canvas.width / 4; 
        Joueur.y = canvas.height / 3;
    } 

    if( collides(Joueur, Cube_3) ) {
        console.log('TOUCHER');
        Joueur.x = canvas.width / 4; 
        Joueur.y = canvas.height / 3;
    } 

    if( collides(Joueur, Cube_4) ) {
        console.log('TOUCHER');
        Joueur.x = canvas.width / 4; 
        Joueur.y = canvas.height / 3;
    } 

    if( collides(Joueur, Sortie) ) {
        console.log('SORTIE');
        myFunction();
    } 


});

// COLLISIONS
function collides (a, b) {
    /*return a.x > b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;*/
    return  a.x + a.width > b.x &&
            a.x < b.x + b.width &&
            a.y + a.height > b.y &&
            a.y < b.y + b.height;
    
}

// CHANGE LEVEL
function myFunction() {
    location.href = "index.html";
}

// GRAB CUBE
function dragCube(hand, frame) {

    const palmPosition = get2dCoords(hand.stabilizedPalmPosition, frame, canvas);

    // MAIN FERMÉE
    if (hand.grabStrength === 1) {
        grab = true;
    }

    if (hand.grabStrength === 1 && 
        palmPosition.x > Joueur.x - (Joueur.height * 2)  &&
        palmPosition.x < Joueur.x + (Joueur.height * 2) &&
        palmPosition.y > Joueur.y - (Joueur.width * 2) &&
        palmPosition.y < Joueur.y + (Joueur.width * 2) ) {

        Joueur.x = palmPosition.x - (Joueur.width / 2);
        Joueur.y = palmPosition.y - (Joueur.height / 2);
    }
    
}

/**
 * Dessine un gesture "swipe" à l'écran
 * @param {Object} frame Objet "frame" transmit par le Leap Motion
 * @param {Object} gesture Objet "gesture" de type "swipe" à dessiner
 *
function renderSwipe(frame, gesture) {
    const startPosition   = get2dCoords(gesture.startPosition, frame, canvas);
    const currentPosition = get2dCoords(gesture.position, frame, canvas);

    context.strokeStyle = '#0f0';
    context.beginPath();
    context.moveTo(startPosition.x, startPosition.y);
    context.lineTo(currentPosition.x, currentPosition.y);
    context.stroke();
    context.closePath();
}
*/

/**
 * Dessine un gesture "circle" à l'écran
 * @param {Object} frame Objet "frame" transmit par le Leap Motion
 * @param {Object} gesture Objet "gesture" de type "circle" à dessiner
 
function renderCircle(frame, gesture) {
    const centerPosition = get2dCoords(gesture.center, frame, canvas);
    const radius         = gesture.radius;

    context.strokeStyle  = 'pink';
    context.lineWidth    = 3;
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, radius, 0, Math.PI * 2);
    context.stroke();
    context.closePath();
}
*/

/**
 * Dessine un gesture "keyTap" à l'écran
 * @param {Object} frame Objet "frame" transmit par le Leap Motion
 * @param {Object} gesture Objet "gesture" de type "keyTap" à dessiner
 *
function renderKeyTap(frame, gesture) {
    const tapPosition = get2dCoords(gesture.position, frame, canvas);

    context.fillStyle = '#f09';
    context.beginPath();
    context.arc(tapPosition.x, tapPosition.y, 30, 0, Math.PI * 2);
    context.fill();
    context.closePath();
}
*/

/**
 * Transforme les coordonnées 3D récupérée par le Leap en coordonnées 2D pour un <canvas> web
 * @param {Array} leapPosition Tableau de coordonnées 3D [x, y, z]
 * @param {Object} frame Objet "frame" transmit par le Leap Motion
 * @param {HTMLCanvasElement} canvas Objet canvas sur lequel sont dessinés les éléments
 */
function get2dCoords(leapPosition, frame, canvas) {
    const interactionBox  = frame.interactionBox;
    const normalizedPoint = interactionBox.normalizePoint(leapPosition, true);

    return {
        x : normalizedPoint[0] * canvas.width,
        y : (1 - normalizedPoint[1]) * canvas.height,
    }
}