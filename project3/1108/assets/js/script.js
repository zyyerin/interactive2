$(function(){
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setColor(0xffffff);
renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;

var axis = new THREE.AxisHelper(10);
// scene.add(axis);

var geometry = new THREE.BoxGeometry(25, 25, 2, 50, 50, 50);
var white = new THREE.MeshLambertMaterial({color:0xffffff});
var cube = new THREE.Mesh(geometry, white);

cube.position.x = 0;
cube.position.y = 0;
cube.position.z = 0;

cube.castShadow = true;
scene.add(cube);


var planeGeo = new THREE.PlaneGeometry(50, window.innerHeight, 500, 500);
var wall = new THREE.Mesh(planeGeo, white);
wall.receiveShadow = true;
scene.add(wall);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.castShadow = true;
spotLight.position.set(15, 30, 50);
scene.add(spotLight);

camera.position.x = 10;
camera.position.y = 10;
camera.position.z = 50;

camera.lookAt(scene.position);

renderer.render(scene, camera);
$("#webGL-container").append(renderer.domElement);

// var render = function (){
//     requestAnimationFrame(render);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// };

// render();

});