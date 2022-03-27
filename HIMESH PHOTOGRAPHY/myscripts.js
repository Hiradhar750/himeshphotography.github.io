var imageInput = document.getElementById("image-input");
var previewImage = document.getElementById("preview-image");
imageInput.addEventListener("change",function(event){
if(event.target.files.length == 0){
  return;
}
vartempUrl = URL.createObjectURL(event.target.files[0])
previewImage.setAttribute("src",tempUrl);
});