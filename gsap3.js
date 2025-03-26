var path = `M 10 100 Q 500 100 990 100`
var final = `M 10 100 Q 500 100 990 100`


var string = document.querySelector("#string")

string.addEventListener("mousemove",function(val){

    console.log(val.x,val.y)
    path=`M 10 100 Q ${val.x-300} ${val.y-100} 990 100`
    gsap.to("svg path",{
        attr:{ d : path },
        duration: 0.3,
        ease: "power3.out"
    })
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{ d : final },
        duration: 0.8,
        ease: "elastic.out(1.2,0.1)"
    })
})