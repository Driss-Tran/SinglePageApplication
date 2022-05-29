import AbstractView from "./AbstractView.js";
import RandomImage from "./randomImg.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("imageShow");
    }

    async getHtml() {
        RandomImage();
        return `
        <div id="home">
        <div class="header_nav">
            <h1>Nơi để bạn có thể ngắm nhìn các chú chó trên thế giới</h1>
            <button id="btn">Đổi sang chú chó khác</button>
        </div>
        <section></section>
        </div>
        `;
    }
}