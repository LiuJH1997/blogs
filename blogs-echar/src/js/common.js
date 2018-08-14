let loadingHtml = (arr,html) => {
    let htmlStr = '';
    arr.forEach((data) => {
        htmlStr += `
        <li contenteditable="">${data}</li>
        `
    });
    htmlStr += `<li></li>`
    html.html(htmlStr);
    
}
 