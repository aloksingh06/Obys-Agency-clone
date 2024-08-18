function loader(){
    var tl = gsap.timeline();
// tl.from(".line h1 ,.line h2",{
//     y:150,
//     Duration:0.6,
//     delay:0.5,
//     stagger:0.2
// }) 
// tl.to("#loader",{
//     opacity:0,
//     Duration:0.5,
//     delay:3,
// })
// gsap.from(".line1-part1",{
//     opacity:0,
//     delay:1,
//     onStart:function(){
//         var h5timer = document.querySelector(".line1-part1 h6")
// var count= 0;
// var int = setInterval(function(){
//     if(count===100){
//         clearInterval(int)
//     }
//     else{
//         count++;
//         h5timer.textContent=count;
//     }
// },30)
//     }})
tl.from("#page1",{
    y:150,
    opacity:0,
    delay:0.5,
   ease:Power4

})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from(".hero h1,.hero h2",{
    y:500,
    opacity:0,
    stagger:0.2,
    Duration:0.3
    
})

}
function magnethover(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    Shery.makeMagnet("#nav-part2 h4", {
      });
    
}
magnethover();
loader();
