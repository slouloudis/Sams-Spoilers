const images = [
  { title: "algo_spa", path: "/client/img/algo_spa.jpg" },
  { title: "berserk", path: "/client/img/berserk001.jpg" },
  { title: "berserk", path: "/client/img/berserk002.jpg" },
  { title: "berserk", path: "/client/img/berserk003.jpeg" },
  { title: "berserk", path: "/client/img/berserk004.jpeg" },
  { title: "berserk", path: "/client/img/berserk005.png" },
  { title: "enterthevoid", path: "/client/img/enterthevoid_01.jpg" },
  { title: "enterthevoid", path: "/client/img/enterthevoid_02.jpg" },
  { title: "housekinokuni", path: "/client/img/housekinokuni01.jpg" },
  { title: "housekinokuni", path: "/client/img/housekinokuni02.jpg" },
  { title: "housekinokuni", path: "/client/img/housekinokuni03.jpg" },
  { title: "housekinokuni", path: "/client/img/housekinokuni04.jpg" },
  { title: "housekinokuni", path: "/client/img/housekinokuni05.jpg" },
  { title: "ladysnowblood", path: "/client/img/ladysnowblood01.jpg" },
  { title: "ladysnowblood", path: "/client/img/ladysnowblood02.jpg" },
  { title: "macbeth", path: "/client/img/macbeth01.png" },
  { title: "macbeth", path: "/client/img/macbeth02.png" },
  { title: "macbeth", path: "/client/img/macbeth03.png" },
  { title: "Nausica", path: "/client/img/Nausica_01.jpg" },
  { title: "Nausica", path: "/client/img/Nausica_02.jpg" },
  { title: "Perfect_Blue", path: "/client/img/Perfect_Blue_01.jpg" },
  { title: "pi", path: "/client/img/pi01.jpg" },
  { title: "pi", path: "/client/img/pi02.jpg" },
  { title: "primer", path: "/client/img/primer01.jpg" },
  { title: "primer", path: "/client/img/primer02.jpg" },
  { title: "primer", path: "/client/img/primer03.jpg" },
  { title: "RAN", path: "/client/img/ran01.jpeg" },
  { title: "RAN", path: "/client/img/ran02.jpg" },
  { title: "RAN", path: "/client/img/ran03.jpg" },
  { title: "theGlory", path: "/client/img/theGlory_01.jpg" },
  { title: "theGlory", path: "/client/img/theGlory_02.jpg" },
  { title: "wolfchildren", path: "/client/img/wolfchildren01.jpg" },
  { title: "wolfchildren", path: "/client/img/wolfchildren002.jpg" },
];


const container = document.getElementById("masonry-container");

images.forEach((image) => {
  const item = document.createElement("div");
  item.classList.add("masonry-item");

  const img = document.createElement("img");
  img.src = image.path;
  img.alt = "Iasdfasdfasdf";

  const label = document.createElement("div");
  label.classList.add("title-label");
  label.textContent = image.title;

  item.appendChild(img);
  item.appendChild(label);
  container.appendChild(item);
});