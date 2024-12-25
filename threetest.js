// Scene setup
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer setup
const renderer = new THREE.WebGLRenderer( { alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.id = 'background-canvas';
document.body.appendChild(renderer.domElement);

// Plane geometry and points material
const geometry = new THREE.PlaneGeometry(1, 10, 30, 10);
const material = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.01 });
const plane = new THREE.Points(geometry, material);
plane.rotation.x = Math.PI / 2; //turn plane
// Add plane to the scene
scene.add(plane);

// Noise setup
const noise = new SimplexNoise();
const vertices = geometry.attributes.position.array;

// Animation function
function animate() {
    requestAnimationFrame(animate);

    // Update the vertices with noise to create waves
    for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const y = vertices[i + 1];
        const time = performance.now() * 0.0001;

        // Use noise to displace the z position
        vertices[i + 2] = noise.noise2D(x + time, y + time) * 0.1;
    }
    geometry.attributes.position.needsUpdate = true;

    // Render the scene from the perspective of the camera
    renderer.render(scene, camera);
}

// Start the animation loop
animate();