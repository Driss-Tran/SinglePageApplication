async function adsImg(){
    let api = "https://dog.ceo/api/breeds/image/random/50";
    let res = await fetch(api);
    let result = await res.json();

    imageRandom(result.message);
    console.log(result.message);
}

function imageRandom(imgs){
    let btn = document.getElementById('btn');
    let ad1 = document.querySelector('.well1');
    let ad2 = document.querySelector('.well2');
    ad1.innerHTML = `<img src="${imgs[0]}" style="width:100%;">`;
    ad2.innerHTML = `<img src="${imgs[1]}" style="width:100%;">`;

    
    
 
}

export default adsImg;