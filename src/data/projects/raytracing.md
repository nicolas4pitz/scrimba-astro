---
title: RayTracing
description: Learn what the Document Object Model (DOM) is with a simple analogy and discover how it enables interactivity on any website.
date: "2025-09-04"
image: " "
tags:
  - JavaScript
  - DOM
  - Front-End
  - Fundamentals
slug: raytracing
githubURL: "https://github.com/nicolas4pitz/rayTracing"
liveSiteURL: "https://github.com/nicolas4pitz/rayTracing"
---

RayTracing is a technology that generates real-time reflections and realistic lighting by simulating the physical behavior of light rays.  
This project implements a simple ray tracer that renders an image based on predefined geometric shapes. Once the scene is configured, the program can be executed to generate the final image, performing all ray tracing computations during the rendering process.

The system follows the structure and concepts presented in **Peter Shirley's "Ray Tracing in One Weekend" book series**, featuring key components such as rays, hitable objects, materials, and cameras. Each pixel of the image is determined by tracing rays from the camera into the scene, calculating intersections with objects, and applying material properties like reflection, refraction, and diffuse scattering to compute the final color.

The project supports multiple geometric primitives such as **spheres**, **planes**, and **lambertian surfaces**, with extendable interfaces for adding new shapes or materials. The renderer includes features like **antialiasing**, **depth of field**, and **recursive ray bounces** for global illumination.

The goal of this implementation is to provide a clear, educational, and minimalistic foundation for understanding the fundamentals of ray tracing, focusing on readability and step-by-step experimentation rather than performance optimization.



## Features
- Real-time image generation based on scene configuration  
- Support for multiple material types (diffuse, metal, dielectric)  
- Recursive light scattering for realistic reflections and refractions  
- Camera configuration with adjustable field of view and focus  
- Simple, modular architecture inspired by Peter Shirley’s approach  



## Future Improvements
- Add support for textured materials  
- Implement multithreading for faster rendering  
- Add motion blur and dynamic lighting  
- Extend geometric library with custom shapes  


## References
- *Peter Shirley — Ray Tracing in One Weekend*  
- *Ray Tracing: The Rest of Your Life*  
- *Ray Tracing: The Next Week*

