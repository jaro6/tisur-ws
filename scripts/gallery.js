const data = [
    {
        "title": "Atila",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/1.jpg",
        "width": "100",
    },
    {
        "title": "Tozu",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/02.jpg",
        "width": "50",
    },
    {
        "title": "Tozutije",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/06.jpg",
        "width": "100",
    },
    {
        "title": "Nadji pticu",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/08.jpg",
        "width": "200",
    },
    {
        "title": "Kockiception",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/IMG_20180704_161435_078.jpg",
        "width": "100",
    },
    {
        "title": "Aj aj aj",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/IMG_20180704_161614_245.jpg",
        "width": "100",

    },
    {
        "title": "Mutne kocicke",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/slika2.jpg",
        "width": "100",
    },
    {
        "title": "Tripi",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/slika3.jpg",
        "width": "100",
    },
    {
        "title": "Jazz",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/TT1.jpg",
        "width": "100",
    },
    {
        "title": "VS theme",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/TT3.jpg",
        "width": "200",
    },
    {
        "title": "Druga velika",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/in_search_for_painting/TT5.jpg",
        "width": "200",
    },


]
const maindiv = document.getElementById('gallery');

// console.log(maindiv);
// console.log(data);

data.forEach(item => {
      const img = document.createElement("img");
      img.src = item.imageUrl;
      img.alt = item.title;
      img.style.margin = "40px auto"; // optional styling
      img.style.maxWidth = item.width *6 + "px"; // optional size limit
      maindiv.appendChild(img);
    });