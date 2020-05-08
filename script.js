
var content= document.getElementsByClassName('content')
var links= document.querySelectorAll('.sidebar>a')

window.addEventListener('scroll', function() {

    var scrollTop = document.body.scrollTop
    // console.log(document.body.scrollHeight)
    links.forEach(e=>e.style.background='white')
    links.forEach(e=>e.style.color='black')

    
    for(let i=0;i<content.length;i++){
        let top= content[i].offsetTop
        let bottom= content[i].offsetHeight+content[i].offsetTop
        if(scrollTop>top && scrollTop<bottom){
            // console.log('scrollTop',scrollTop)
            // console.log('top',top)
            // console.log('bottom',bottom)
            console.log(content[i].id)
            links[i].style.background='black'
            links[i].style.color='white'
        }
    }
})