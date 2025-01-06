// Initial path of the SVG line
let initialPath;

// Final path of the SVG line
let finalPath = `M 30 100 Q 500 100 970 100`;

// Select the SVG element
let svg = document.querySelector("svg");

// Add mousemove event listener to the SVG
svg.addEventListener("mousemove", function(event){
    // Get the bounding rectangle of the SVG
    let rect = svg.getBoundingClientRect();
    // Calculate the x and y coordinates relative to the SVG
    let x = Math.max(0, Math.min(event.clientX - rect.left, 1000));
    let y = Math.max(0, Math.min(event.clientY - rect.top, 200));
    // Update the initial path with the new coordinates
    initialPath = `M 30 100 Q ${x} ${y} 970 100`;
    console.log(y, x);
    // Animate the SVG path to the new path
    gsap.to("svg path", {
        attr:{ d : initialPath },
        duration: 0.3,
    });
});

// Add mouseleave event listener to the SVG
svg.addEventListener("mouseleave", function(event){
    // Animate the SVG path back to the final path
    gsap.to("svg path", {
        attr:{ d : finalPath },
        duration: 1.2,
        ease: "elastic.out(1,0.3)"
    });
});