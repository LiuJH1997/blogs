'use strict';

var loadingHtml = function loadingHtml(arr, html) {
    var htmlStr = '';
    arr.forEach(function (data) {
        htmlStr += '\n        <li contenteditable="">' + data + '</li>\n        ';
    });
    htmlStr += '<li></li>';
    html.html(htmlStr);
};