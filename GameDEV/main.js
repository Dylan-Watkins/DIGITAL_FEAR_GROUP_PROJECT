var game = new Phaser.Game(1080, 720, Phaser.CANVAS, 'game01v', { preload: preload,
 create: create,update: update });

var cursors;

function preload() {
	game.load.image('space','assets/starfield.png');
	game.load.image('warship','assets/warship.png');
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.image(0,0, 'space')
	players = game.add.group();
	players.enableBody = true;

	createPlayer(40,300);

	cursors = game.input.keyboard.createCursorKeys();
}

function update(){
	playerUpdate();
}

function createPlayer(x,y){
	var player = players.create(x,y, 'warship');
	player.body.bounce.y =.25;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;
}

function playerUpdate(){
	players.forEach(function(p){
		p.body.velocity.x = 0;
		if(cursors.left.isDown){
			p.body.velocity.x = -150;
		}else if(cursors.right.isDown){
			p.body.velocity.x = 150;
		}
		});
}