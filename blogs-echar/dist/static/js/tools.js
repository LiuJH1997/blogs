"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tool = function () {
    function Tool() {
        _classCallCheck(this, Tool);
    }

    _createClass(Tool, [{
        key: "basic",
        value: function basic() {
            var myChar = echarts.init($("#column")[0]);
            var legend = ["食品酒水", "购物消费", "家居生活", "行车交通", "休闲娱乐", "人情费用", "金融保险", "药品医疗", "其他消费"];
            var week = ["周一", "周二", "周三", "周四", "周五", "周六", "周末"];
            myChar.setOption({
                title: {
                    text: "本周生活数据消费",
                    subtext: "数据仅供参考"

                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                        dataZoom: {},
                        magicType: {
                            type: ["line", "bar"]
                        },
                        restore: {}
                    }
                },
                tooltip: {
                    show: true
                },
                legend: {
                    data: legend,
                    orient: "vertical",
                    right: -10,
                    top: 60
                },
                xAxis: {
                    data: week
                },
                yAxis: {},
                series: []
            });

            //ajax请求
            setTimeout(function () {
                $.ajax({
                    url: "./json/data.json",
                    type: "GET",
                    dataType: "json",
                    success: function success(response) {
                        myChar.hideLoading();
                        // let data = response.goodInfo;
                        myChar.setOption({
                            series: [{
                                name: response.diet.name,
                                type: "bar",
                                data: response.diet.value
                            }, {
                                name: response.shopping.name,
                                type: "bar",
                                data: response.shopping.value
                            }, {
                                name: response.life.name,
                                type: "bar",
                                data: response.life.value
                            }, {
                                name: response.traffic.name,
                                type: "bar",
                                data: response.traffic.value
                            }, {
                                name: response.entertainment.name,
                                type: "bar",
                                data: response.entertainment.value
                            }, {
                                name: response.social.name,
                                type: "bar",
                                data: response.social.value
                            }, {
                                name: response.finance.name,
                                type: "bar",
                                data: response.finance.value
                            }, {
                                name: response.medicine.name,
                                type: "bar",
                                data: response.medicine.value
                            }, {
                                name: response.other.name,
                                type: "bar",
                                data: response.other.value
                            }]
                        });
                    }

                });
            });
        }
    }, {
        key: "test",
        value: function test() {
            var myChar = echarts.init($("#cyclo")[0]);
            var legend = ["食品酒水", "购物消费", "家居生活", "行车交通", "休闲娱乐", "人情费用", "金融保险", "药品医疗", "其他消费"];
            myChar.setOption({
                title: {
                    text: "本周消费比较重",
                    subtext: "数据仅供参考"
                },
                tooltip: {
                    trigger: "item"

                },
                legend: {
                    data: legend
                },
                series: []
            });
        }
    }]);

    return Tool;
}();