$(function(){
    $.ajax({
        url:"../static/json/data.json",
        type:"GET",
        dataType:"json",
        success:(response) => {
            loadingHtml("commodity",response);
        }
    });

    $.ajax({
        url:"../static/json/data.json",
        type:"GET",
        dataType:"json",
        success:(response) => {
            loadingHtml("news",response);
        }
    })

    setInterval(function(){
        $(".img").toggleClass("show");
    },3000);



})