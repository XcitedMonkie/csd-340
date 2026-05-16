function displayImage(imageFile, captionText) {

    var largerImage = document.getElementById("mainImage");

    largerImage.src = imageFile;

    document.getElementById("mainCaption").innerHTML = captionText;
}