$(function(){
    let myChart = echarts.init(document.querySelector('.graph'));
    let hobby   = ["足球","羽毛球","看电影","画画","打游戏","听歌"];
    let number  = [45,56,23,78,34,90];

    myChart.setOption({
        title:{
            text:"爱好统计表",
            subtext:"数据仅供参考"
        },
        toolbox:{
            feature:{
                savaAsImage:{},
                dataZoom:{},
                magicType:{
                    type:["line","bar"]
                },
                restore:{}
            }
        },
        tooltip:{
            trigger:"axis",
            formatter:"爱好：{b}<br> 人数:{a}"
        },
        legend:{
            type:"scroll",
            data:number,
            orient:"horizontal",
            bottom:0
        },
        xAxis:{
            type:"category",
            data:hobby
        },
        yAxis:{},
        series:{
            data:number,
            type:"bar"
        }
    })

});


