var cursor = document.querySelector('#cursor');
var main = document.querySelector('#main');
var imageDiv = document.querySelector('#image');
main.addEventListener('mousemove', function (e) {

    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.5,
        ease: "back.out"
    })
})
imageDiv.addEventListener('mouseenter', function (e){
    cursor.innerHTML="Montains and stars"
    gsap.to(cursor,{
        scale: 2,
        borderRadius: 20,
        duration: 0.5
    })
})
imageDiv.addEventListener('mouseleave', function (e){
    cursor.innerHTML=""
    gsap.to(cursor,{
        width:20,
        scale: 1,
        borderRadius: 100,
        duration: 0.5
    })
})