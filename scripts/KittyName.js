let camera;
let font;
let geometry;
let loader;
let renderer;
let scene;
let mesh;
let Kitty3DName;

function init() {
	//Get a reference to the container element that will hold our scene
	Kitty3DName = document.getElementById('Kitty3DName');
	
	//create a Scene
	scene = new THREE.Scene();
	
	scene.background = new THREE.Color('skyblue');
	
	//setup the options for a perspective camera
	const fov = 35; //fov = Field of View
	const aspect = Kitty3DName.offsetWidth / Kitty3DName.offsetHeight;
	const near = 0.1;
	const far = 100;
	
	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	
	//every object is initially create at (0, 0, 0)
	//we'll move the camera back a bit so that we can view the scene
	camera.position.set(0, 0, 10);
	
	//create a loader for the font
	loader = new THREE.FontLoader();
	
	font = loader.load(
	'../threeJS/three.js-master/examples/fonts/helvetiker_bold.typeface.json',
	function(font) {
				geometry = new THREE.TextBufferGeometry('Kitty', {
			font: font,
			size: 40,
			height: 5,
			curveSegments: 12,
			bevelEnabled: true,
			bevelThickness: 10,
			bevelSize: 8,
			bevelOffset: 0,
			bevelSegments: 5
	});
});
	
	//create a default (white) Basic material
	const material = new THREE.MeshStandardMaterial({color: 0x800080});
	
	//create a Mesh containing the geometry and material
	mesh = new THREE.Mesh(geometry, material);
	
	//add the mesh to the scene object
	scene.add(mesh);
	
	//create a directional light
	const light = new THREE.DirectionalLight(0xffffff, 5.0);
	
	//move the light back and up a bit
	light.position.set(0, 3, 3);
	
	//remember to add the light to the scene
	scene.add(light);
	
	//create a WebGLRenderer and set its width and height
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(Kitty3DName.offsetWidth, Kitty3DName.offsetHeight);
	
	renderer.setPixelRatio(window.devicePixelRatio);
		
	//add the automatically created <canvas> element to the page
	Kitty3DName.appendChild(renderer.domElement);
	
	renderer.render(scene, camera);
	
}

/*function animate() {
	//call animate recursively
	requestAnimationFrame(animate);
	
	//render or 'create a still image' of the scene
	//this will create one still image / frame each time the animate
	//function calls itself
	renderer.render(scene, camera);
}*/

//call the init function to set everything updateCommands
init();

//then call the animate function to render the scene
//animate();