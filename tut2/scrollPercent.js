import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";

export function scrollPercent() {
    let scrollPercent = 0

    document.getElementById("parentCont").onscroll = () => {
        //calculate the current scroll progress as a percentage
        scrollPercent =
            ((document.getElementById("parentCont").scrollTop) /
                ((4236)//2824
                    -
                    document.getElementById("parentCont").clientHeight)) *
            100
            ; (document.getElementById('scrollProgress')).innerText =
                'Scroll Progress : ' + scrollPercent.toFixed(2)
    }


    let scroll = 0;

    window.addEventListener('wheel', function (event) {
        if (event.deltaY < 0) {
            scroll = 1

        }
        else if (event.deltaY > 0) {
            scroll = 0

        }
    });


    const scene = new THREE.Scene()
    const gltfLoader = new GLTFLoader();
    // gltfLoader.load('/Sketchfab_Scene.gltf')
    // scene.background = new THREE.Color( 0xff0000 );
    //Create our sphere 

    const geometry = new THREE.SphereGeometry(6, 64, 64);
    const material = new THREE.MeshStandardMaterial({
        color: "#6D73C5"
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)


    //Sizes
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }


    //Create camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 21
    scene.add(camera)

    //Create Light
    const light = new THREE.PointLight(0xfffffa, 1, 100)
    light.position.set(0, 10, 10)
    scene.add(light)



    //Renderer
    let canvas = document.querySelector(".first")
    let renderer = new THREE.WebGLRenderer({ canvas, alpha: true })


    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.autoRotate = true
    controls.autoRotateSpeed = 5
    controls.enableZoom = false

    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth,
            sizes.height = window.innerHeight;


        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix()
        renderer.setSize(sizes.width, sizes.height)
    })

    renderer.setSize(sizes.width, sizes.height)
    renderer.render(scene, camera)

    const t1 = gsap.timeline({ defaults: { duration: 1 } })

    t1.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 })


    const smoothness = 0.1// 0 to 1 only

    let targetPosition = mesh.position.clone();
    console.log(targetPosition)

    function lerp(x, y, a) {
        return (1 - a) * x + a * y
    }

    function rotate2(vector) {
        mesh.position.lerp(vector, smoothness);
    }

    let x = window.innerWidth;
    let animationScripts = []

    function loop() {

        mesh.rotation.x += 0.0001
        mesh.rotation.y = 0.001

        renderer.render(scene, camera)
        window.requestAnimationFrame(loop)

    }

    if (x > 600) {

        animationScripts.push({
            start: 0,
            end: 22.24,
            func: () => {
                // mesh.position.x=0
                // mesh.position.y=-5
                // //console.log(cube.position.z)
                // targetPosition=mesh.position.clone()
                // rotate2(targetPosition)
                if (scroll == 0) {
                    mesh.position.lerp(new THREE.Vector3(0, -5, 0), 0.05)
                }
                else {
                    mesh.position.lerp(new THREE.Vector3(0, -5, 0), 0.05)
                }
            },
        })



        animationScripts.push({
            start: 22.24,
            end: 43.11,

            func: () => {
                if (scroll == 0) {
                    mesh.position.lerp(new THREE.Vector3(-9, 1, 0), 0.05)
                }
                // mesh.position.y=-4
                // targetPosition=mesh.position.clone()
                // rotate2(targetPosition)

                else {
                    mesh.position.lerp(new THREE.Vector3(0, -6, 0), 0.05)
                }




            }
        })


        animationScripts.push({
            start: 43.12,
            end: 64.44,
            func: () => {

                if (scroll == 0) {
                    mesh.position.lerp(new THREE.Vector3(+9, 1, 0), 0.05)

                }
                else {
                    mesh.position.lerp(new THREE.Vector3(-9, 1, 0), 0.05)
                }
                // mesh.position.x=-9
                // mesh.position.y=1
                // targetPosition=mesh.position.clone()
                // rotate2(targetPosition)

                // mesh.position.y=0.5
                // mesh.position.x=-9

                //console.log(camera.position.x + " " + camera.position.y)
            },
        })
        animationScripts.push({
            start: 64.45,
            end: 85.77,
            func: () => {
                // mesh.position.x=0
                // mesh.position.y=-5
                // //console.log(cube.position.z)
                // targetPosition=mesh.position.clone()
                // rotate2(targetPosition)
                if (scroll == 0) {
                    mesh.position.lerp(new THREE.Vector3(-9, 1, 0), 0.05)
                }

                else {
                    mesh.position.lerp(new THREE.Vector3(9, 1, 0), 0.05)
                }
            },
        })
        animationScripts.push({
            start: 85.78,
            end: 105.72,
            func: () => {
                // mesh.position.x=0
                // mesh.position.y=-5
                // //console.log(cube.position.z)
                // targetPosition=mesh.position.clone()
                // rotate2(targetPosition)
                if (scroll == 0) {
                    console.log(scroll)
                    mesh.position.lerp(new THREE.Vector3(0, -5, 0), 0.05)
                }
                else if (scroll == 1) {
                    console.log(scroll)
                    mesh.position.lerp(new THREE.Vector3(-9, 1, 0), 0.05)
                }

            },
        })
        // upAnimationScripts.push({
        //     start: 105.72,
        //     end: 85.78,
        //     func: () => {
        //         // mesh.position.x=0
        //         // mesh.position.y=-5
        //         // //console.log(cube.position.z)
        //         // targetPosition=mesh.position.clone()
        //         // rotate2(targetPosition)
        //         mesh.position.lerp(new THREE.Vector3(0, -5, 0), 0.05)

        //     },
        // })
        // upAnimationScripts.push({
        //     start: 85.78,
        //     end:64.45,
        //     func: () => {
        //         // mesh.position.x=0
        //         // mesh.position.y=-5
        //         // //console.log(cube.position.z)
        //         // targetPosition=mesh.position.clone()
        //         // rotate2(targetPosition)
        //         mesh.position.lerp(new THREE.Vector3(-9, 1, 0), 0.05)

        //     },
        // })
        // upAnimationScripts.push({
        //     start: 64.45,
        //     end:43.12,
        //     func: () => {
        //         // mesh.position.x=0
        //         // mesh.position.y=-5
        //         // //console.log(cube.position.z)
        //         // targetPosition=mesh.position.clone()
        //         // rotate2(targetPosition)
        //         mesh.position.lerp(new THREE.Vector3(18, 1, 0), 0.05)

        //     },
        // })
    }
    if (x < 600) {
        camera.position.z = 25
        animationScripts.push({
            start: 0,
            end: 22.24,
            func: () => {
                // mesh.position.x=0
                // mesh.position.y=-5
                // //console.log(cube.position.z)
                // targetPosition=mesh.position.clone()
                // rotate2(targetPosition)
                mesh.position.lerp(new THREE.Vector3(0, -5, 0), 0.05)
                camera.position.z = 20
            },
        })



        animationScripts.push({
            start: 22.24,
            end: 43.12,

            func: () => {
                camera.position.z = 24
                mesh.position.lerp(new THREE.Vector3(2, 3.5, 0), 0.05)
                // mesh.position.y=-4
                // targetPosition=mesh.position.clone()
                // rotate2(targetPosition)






            }
        })


        animationScripts.push({
            start: 43.12,
            end: 64.45,
            func: () => {
                camera.position.z = 25
                mesh.position.lerp(new THREE.Vector3(-2, 3, 0), 0.05)


                // mesh.position.x=-9
                // mesh.position.y=1
                // targetPosition=mesh.position.clone()
                // rotate2(targetPosition)

                // mesh.position.y=0.5
                // mesh.position.x=-9

                //console.log(camera.position.x + " " + camera.position.y)
            },
        })
        animationScripts.push({
            start: 64.45,
            end: 85.78,
            func: () => {
                // mesh.position.x=0
                // mesh.position.y=-5
                // //console.log(cube.position.z)
                // targetPosition=mesh.position.clone()
                // rotate2(targetPosition)
                camera.position.z = 25
                mesh.position.lerp(new THREE.Vector3(2, 3.5, 0), 0.05)
            },
        })
        animationScripts.push({
            start: 85.78,
            end: 105.72,
            func: () => {
                camera.position.z = 20
                // mesh.position.x=0
                // mesh.position.y=-5
                // //console.log(cube.position.z)
                // targetPosition=mesh.position.clone()
                // rotate2(targetPosition)
                mesh.position.lerp(new THREE.Vector3(0, -5, 0), 0.05)

            },
        })
    }



    function playDownScrollAnimations() {
        animationScripts.forEach((a) => {
            if (scrollPercent >= a.start && scrollPercent < a.end) {
                a.func()

            }
        })
    }

    // function playUpScrollAnimations() {
    //     upAnimationScripts.forEach((a) => {
    //         if (scrollPercent <= a.start && scrollPercent >a.end) {
    //             a.func()

    //         }
    //     })
    // }


    console.log(scroll)
    function animate() {
        requestAnimationFrame(animate)


        playDownScrollAnimations()
        // playUpScrollAnimations()

        render()


    }

    function render() {
        renderer.render(scene, camera)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })

    animate()


}


/*
4236
0-22.24
22.24-43.12
43.12-64.45
64.45-85.78
85.78-105.72



2824
107.41-142.97
142.97-176.20

*/