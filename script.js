let initialPath;

let finalPath = `M 30 100 Q 500 100 970 100`;

let svg = document.querySelector("svg");

svg.addEventListener("mousemove", function(event){
    let x = Math.max(0, Math.min(event.x, 1000));
    initialPath = `M 30 100 Q ${x} ${event.y} 970 100`;
    console.log(event.y, event.x);
    gsap.to("svg path", {
        attr:{ d : initialPath },
        duration: 0.3,
    });
})
svg.addEventListener("mouseleave", function(event){
    gsap.to("svg path", {
        attr:{ d : finalPath },
        duration: 1.2,
        ease: "elastic.out(1,0.3)"
    });
})