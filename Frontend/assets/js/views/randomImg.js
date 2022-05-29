async function RandomImage(){
    let api = "https://dog.ceo/api/breeds/image/random/50";
    let res = await fetch(api);
    let result = await res.json();

    imageSlide(result.message);
    console.log(result.message);
}

function imageSlide(imgs){
    let btn = document.getElementById('btn');
    let section = document.querySelector('section');
    section.style.backgroundImage = `url('${imgs[1]}')`;
    btn.onclick = function(){
        let count = Math.floor(Math.random() *imgs.length);
        let img = imgs[count];
        section.style.backgroundImage = `url('${img}')`;

        console.log(imgs[a]);
    }
 
}

export default RandomImage;