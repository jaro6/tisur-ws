const data = [
    {
        "title": "Atila",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/02122020.jpg",
        "width": "100",
    },
    {
        "title": "Tozu",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/06102020.jpg",
        "width": "50",
    },
    {
        "title": "Tozutije",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/07102020.jpg",
        "width": "100",
    },
    {
        "title": "Nadji pticu",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/08012021.jpg",
        "width": "200",
    },
    {
        "title": "Kockiception",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/08012021II.jpg",
        "width": "100",
    },
    {
        "title": "Aj aj aj",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/08102020.jpg",
        "width": "100",

    },
    {
        "title": "Mutne kocicke",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/10102020.jpg",
        "width": "100",
    },
    {
        "title": "Tripi",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/10112020.jpg",
        "width": "100",
    },
    {
        "title": "Jazz",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/13102020.jpg",
        "width": "100",
    },
    {
        "title": "VS theme",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/15102020.jpg",
        "width": "100",
    },
    {
        "title": "Druga velika",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/16102020.jpg",
        "width": "200",
    },
    {
        "title": "Druga velika",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/21122020.jpg",
        "width": "200",
    },
    {
        "title": "Druga velika",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/24122020.jpg",
        "width": "200",
    },
    {
        "title": "Druga velika",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/25112020.jpg",
        "width": "200",
    },
    {
        "title": "Druga velika",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/26112020.jpg",
        "width": "200",
    },
    {
        "title": "Druga velika",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/28122020.jpg",
        "width": "200",
    },
    {
        "title": "Druga velika",
        "description": "A vibrant depiction of a sunset over a bustling cityscape.",
        "imageUrl": "../assets/images/works/drawings2020/30122020.jpg",
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