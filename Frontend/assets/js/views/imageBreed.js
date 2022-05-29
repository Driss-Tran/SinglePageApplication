


async function imageSlider(){

        let api = "https://dog.ceo/api/breed/hound/images";
        let res = await fetch(api);
        let data = await res.json();
        let selectTag = document.querySelector('#selectValue');
        
        console.log(selectTag); 
        selectTag.onchange = async function(){
            let valueOfSelect = selectTag.value;
            api = `https://dog.ceo/api/breed/${valueOfSelect}/images`;
            res = await fetch(api);
            data = await res.json();
            console.log(valueOfSelect);
            createPetImage(data.message);
        }
        



}

function createPetImage(imgPet){
    let imageSlide = document.getElementById('imageSlide');
    imageSlide.innerHTML = `
    <div class="slide" id="slide" style="background-image:url('${imgPet[0]}')"></div>
    `;
}

export default imageSlider;