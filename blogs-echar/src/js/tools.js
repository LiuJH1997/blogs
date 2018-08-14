class Tool{
    constructor(){}

    basic(){
        let myChar = echarts.init($("#column")[0]);
        let legend = ["食品酒水", "购物消费", "家居生活", "行车交通", "休闲娱乐", "人情费用", "金融保险", "药品医疗", "其他消费"];
        let week = ["周一","周二","周三","周四","周五","周六","周末"];
        myChar.setOption({
            title:{
                text:"本周生活数据消费",
                subtext:"数据仅供参考"
            
            },
            toolbox:{
                feature:{
                    saveAsImage:{},
                    dataZoom:{},
                    magicType:{
                        type:["line","bar"]
                    },
                    restore:{}
                }
            },
            tooltip:{
                show:true
            },
            legend:{
                data:legend,
                orient:"vertical",
                right:-10,
                top:60
            },
            xAxis:{
                data:week,
            },
            yAxis:{
            },
            series:[]
        });

        //ajax请求
        setTimeout(() => {
            $.ajax({
                url:"./json/data.json",
                type:"GET",
                dataType:"json",
                success:(response) => {
                    myChar.hideLoading();
                    // let data = response.goodInfo;
                    myChar.setOption({
                        series:[
                            {
                                name:response.diet.name,
                                type:"bar",
                                data:response.diet.value
                            },
                            {
                                name:response.shopping.name,
                                type:"bar",
                                data:response.shopping.value
                            },
                            {
                                name:response.life.name,
                                type:"bar",
                                data:response.life.value
                            },
                            {
                                name:response.traffic.name,
                                type:"bar",
                                data:response.traffic.value
                            },
                            {
                                name:response.entertainment.name,
                                type:"bar",
                                data:response.entertainment.value
                            },
                            {
                                name:response.social.name,
                                type:"bar",
                                data:response.social.value
                            },
                            {
                                name:response.finance.name,
                                type:"bar",
                                data:response.finance.value
                            },
                            {
                                name:response.medicine.name,
                                type:"bar",
                                data:response.medicine.value
                            },
                            {
                                name:response.other.name,
                                type:"bar",
                                data:response.other.value
                            },
                        ]
                    })
                }

            });
        });
    }
    test(){
        let myChar = echarts.init($("#cyclo")[0]);
        let legend = ["食品酒水", "购物消费", "家居生活", "行车交通", "休闲娱乐", "人情费用", "金融保险", "药品医疗", "其他消费"];
        myChar.setOption({
            title:{
                text:"本周消费比较重",
                subtext:"数据仅供参考"
            },
           tooltip:{
               trigger:"item",

           },
           legend:{
               data:legend
           },
           series:[

           ]
        })

    }
}