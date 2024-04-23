const title = document.getElementById("title");
title.innerHTML = title.innerHTML.slice(0,60);

let cardImage = fragmentElement.id + "cardImage";
let mimeTypeDiv = fragmentElement.id + "mimeType";
let mimeType = document.getElementById(mimeTypeDiv).innerText;

let fileSize = fragmentElement.id + "fileSize";
let fileSizeValue = document.getElementById(fileSize).innerText;

let fileSizeMb = formatBytes(fileSizeValue);



document.getElementById(fileSize).innerHTML = fileSizeMb;

let fileNameDiv = fragmentElement.id + "fileName";
let fileName = document.getElementById(fileNameDiv).innerText;
let fileExtension = fileName.split('.').pop();
document.getElementById(fileNameDiv).innerHTML = fileExtension;

if(mimeType.includes("openxml")) {
document.getElementById(cardImage).src = "/documents/d/guest/sony_default_missing_image-1";
}

if(mimeType.includes("matroska")) {
document.getElementById(cardImage).src = "/documents/d/guest/sony_default_missing_image-1";
}

function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}



