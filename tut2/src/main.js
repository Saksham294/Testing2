import * as THREE from 'three'

import gsap from 'gsap'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


  //Create scene
const scene=new THREE.Scene()
// scene.background = new THREE.Color( 0xff0000 );
//Create our sphere 
const verticesOfCube = [
  -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
  -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
  2,1,0,    0,3,2,
  0,4,7,    7,3,0,
  0,1,5,    5,4,0,
  1,2,6,    6,5,1,
  2,3,7,    7,6,2,
  4,5,6,    6,7,4
];

const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
const material=new THREE.MeshStandardMaterial({
  color:"#6D73C5"
})
const mesh=new THREE.Mesh(geometry,material)
scene.add(mesh)

//Sizes
const sizes={
  width:window.innerWidth,
  height:window.innerHeight
}


//Create camera
const camera=new THREE.PerspectiveCamera(45,sizes.width/sizes.height,0.1,100)
camera.position.z=20
scene.add(camera)

//Create Light
const light=new THREE.PointLight(0xfffffa,1,100)
light.position.set(0,10,10)
scene.add(light)



//Renderer
const canvas=document.querySelector(".webgl")
const renderer=new THREE.WebGLRenderer({canvas,alpha:true})


const controls=new OrbitControls(camera,canvas)
controls.enableDamping=true
controls.autoRotate=true
controls.autoRotateSpeed=10
controls.enableZoom=false

window.addEventListener('resize',()=>{
  sizes.width=window.innerWidth,
  sizes.height=window.innerHeight;


  camera.aspect=sizes.width/sizes.height;
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width,sizes.height)
})

const loop=()=>{
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}

loop()

renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)

const t1=gsap.timeline({defaults:{duration:1}})

t1.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})



