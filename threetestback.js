// Three.js code
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.id = 'background-canvas';
document.body.appendChild(renderer.domElement);

var vertexHeight = 15000,
planeDefinition = 100,
planeSize = 100,
totalObjects = 1,
background = "#002135",
meshColor = "#fff"; 

const geometry = new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition);
const pt = new THREE.Points(
        geometry,
        new THREE.PointsMaterial({
            color: 0x00afaf,
            size: 0.015
        }));
scene.add(pt);


// var planeGeo = new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition);
// 	var plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({
// 		color: meshColor,
// 		wireframe: true
// 	}));
// 	plane.rotation.x -= Math.PI * .5;

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  pt.rotation.x += 0.001;
//   pt.rotation.y += 0.001;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}