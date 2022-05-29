

async function app(){
    let api = "https://dog.ceo/api/breeds/list/all";
    let res = await fetch(api);
    let data = await res.json();
    console.log(data);
    createPetList(data.message);
}


function createPetList(petList){
    let selectValue = document.getElementById("selectValue");
    console.log(selectValue);
    selectValue.innerHTML = `
            <option>Vui lòng chọn giống thú cưng bạn muốn</option>
                ${Object.keys(petList).map(function(pet){
                    return `<option>${pet}</option>`
                }).join('')}
    `;

}


export default app;