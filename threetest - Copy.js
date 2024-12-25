// Three.js code
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.id = 'background-canvas';
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(500, 60, 200);
const pt = new THREE.Points(
        geometry,
        new THREE.PointsMaterial({
            color: 0x00afaf,
            size: 0.015
        }));
scene.add(pt);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  pt.rotation.x += 0.001;
  pt.rotation.y += 0.001;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}