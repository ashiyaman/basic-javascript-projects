let imagesURLS = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg",
    "images/image12.jpg",
    "images/image13.jpg",
    "images/image14.jpg"
]

window.addEventListener("DOMContentLoaded", () => {
    let gallery = document.getElementById("gallery-section")
    imagesURLS.forEach((imageUrl) => {
        let image = document.createElement("img")
        image.src = imageUrl
        gallery.appendChild(image)
    })
})