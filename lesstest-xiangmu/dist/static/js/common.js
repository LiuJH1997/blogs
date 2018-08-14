let loadingHtml = (keyword,response) => {
    switch(keyword) {
        case "commodity":{
            let datas = response["datainfo"];
            let htmlStr = '';
            datas.forEach((data) => {
                htmlStr +=`
                <div class="commodity-box">
                        <div class="com-box-img">
                            <img src="../static/images/${data.img}" alt="">
                            <p class="glass">${data.glass}</p>
                            <div class="null"></div>
                            <p class="glass-price">${data.price}</p>
                        </div> 
                    </div>
                `;
            });
            $(".commodity").html(htmlStr);
        }break;
        case "news":{
            let goods = response["imgInfo"];
            $(".news").html(`
            <div class="news-left">
            <div class="news-box">
                <div class="news-box-left">
                    <img src="./images/${goods[0].img}" alt="">
                </div>
                <div class="news-box-right">
                    <h2>${goods[0].title}</h2>
                    <p>${goods[0].time}</p>
                    <p>${goods[0].text}</p>
                </div>
            </div>
            <div class="news-box">
                <div class="news-box-left">
                    <img src="./images/${goods[1].img}" alt="">
                </div>
                <div class="news-box-right">
                    <h2>${goods[1].title}</h2>
                    <p>${goods[1].time}</p>
                    <p>${goods[1].text}</p>
                </div>
            </div>
        </div>
        <div class="news-right">
            <img src="./images/${goods[2].img}" alt="">
        </div>
            `);
        }break;
    }  
};

