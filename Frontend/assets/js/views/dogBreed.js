
import AbstractView from "./AbstractView.js";
import app from "./App.js";
import imageSlider from "./imageBreed.js";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("dogBreed");
    }


    async getHtml() {
        app();
        imageSlider();
        return `
        <div id="home">
            <div class="header_nav">
            <h1>Chọn loài chó mà bạn yêu thích</h1>
            <div id="petBreed">
            <select id="selectValue" class="optionList">
            </select>
            </div>
            </div>
            <div id="imageSlide">
            </div>
            </div>


        `;
    }


}

