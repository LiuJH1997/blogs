"use strict";

$(function () {
    $.ajax({
        url: "./json/data.json",
        type: "GET",
        dataType: "json",
        success: function success(response) {
            console.log(response);
            loadingHtml(response.diet.value, $(".diet"));
            loadingHtml(response.shopping.value, $(".shopping"));
            loadingHtml(response.life.value, $(".life"));
            loadingHtml(response.traffic.value, $(".traffic"));
            loadingHtml(response.entertainment.value, $(".entertainment"));
            loadingHtml(response.social.value, $(".social"));
            loadingHtml(response.finance.value, $(".finance"));
            loadingHtml(response.medicine.value, $(".medicine"));
            loadingHtml(response.other.value, $(".other"));
        }
    });

    var tool = new Tool();
    tool.basic();
    // tool.test();

});