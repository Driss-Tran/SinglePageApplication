import AbstractView from "./AbstractView.js";
import adsImg from "./Ads.js"

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("DashBoard");
    }


    async getHtml() {
        adsImg();
        return `
        <div class="container-fluid text-center">    
        <div class="row content">
          <div class="col-sm-2 sidenav">
            <p class="linknav"><a href="/" data-link>Trang chủ</a></p>
            <p class="linknav"><a href="./dogBreed" data-link>Giống thú cưng</a></p>
            <p class="linknav"><a href="./imageShow" data-link>Giải trí</a></p>
          </div>
          <div class="col-sm-8 text-left"> 
            <h1>Chào mừng bạn đến với thế giới thú cưng</h1>
            <p style="font-size:24px;">Đây là trang web quảng bá về các chú chó đến từ khắp nơi trên thế giới- được thành lập bởi những bạn trẻ có niềm đam mê với chó mèo.
                Đây là Website phi lợi nhuận để đáp ứng niềm đam mê yêu thích thú cưng đặc biệt là những chú chó đáng yêu của mọi người.
            </p>
            <hr>
            <h2>Nội dung</h2>
            <p style="font-size:24px; padding-left: 14px;">Chào mừng các bạn đã đến với thế giới thú cưng. Nơi bạn có thể đắm chìm vào niềm đam mê vô tận với thú cưng đặc biệt là những chú cún đáng yêu</p>
            <p style="font-size:24px; padding-left: 14px;">Web được thành lập bởi ba bạn trẻ, xuất phát từ lòng yêu thương và có tình cảm đặc biệt với những chú chó đến từ mọi nơi trên thế giới. Ba anh chàng
                này luôn mới lan tỏa những cảm xúc tích cực này đến mọi người, và tuyên truyền chống bạo lực với thú cưng. 
            </p>
            <p style="font-size:24px; padding-left: 14px;">
                Ở trang Web này có hai mục chính đó là chọn những chú chó mà mình thích. Hay thỏa sức ngắm nhìn các chú chó một cách ngẫu nhiên.
            </p>
          </div>
          <div class="col-sm-2 sidenav">
            <div class="well well1">
              <p>ADS</p>
            </div>
            <div class="well well2">
              <p>ADS</p>
            </div>
          </div>
        </div>
      </div>
      
      <footer class="container-fluid text-center">
        <p style="font-size: 18px;">©Bản quyền thuộc về Phúc - Phát - Sơn</p>
      </footer>


        `;
    }


}

