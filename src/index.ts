import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: window.innerWidth,
	height: window.innerHeight,
});

const star: Sprite = Sprite.from("star.png");

star.anchor.set(0.5);

star.x = app.screen.width / 2;
star.y = app.screen.height / 2;

app.stage.addChild(star);

app.ticker.add((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    star.rotation += 0.01 * delta;
});