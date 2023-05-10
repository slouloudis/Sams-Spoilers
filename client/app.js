
const images = [
  { title: "berserk", path: "/client/img/berserk001.jpg" },
  // { title: "berserk", path: "/client/img/berserk002.jpg" },
  // { title: "berserk", path: "/client/img/berserk003.jpeg" },
  // { title: "berserk", path: "/client/img/berserk004.jpeg" },
  // { title: "berserk", path: "/client/img/berserk005.png" },
  // { title: "enterthevoid", path: "/client/img/enterthevoid_01.jpg" },
  // { title: "enterthevoid", path: "/client/img/enterthevoid_02.jpg" },
  // { title: "housekinokuni", path: "/client/img/housekinokuni01.jpg" },
  // { title: "housekinokuni", path: "/client/img/housekinokuni02.jpg" },
  // { title: "housekinokuni", path: "/client/img/housekinokuni03.jpg" },
  // { title: "housekinokuni", path: "/client/img/housekinokuni04.jpg" },
  // { title: "housekinokuni", path: "/client/img/housekinokuni05.jpg" },
  // { title: "ladysnowblood", path: "/client/img/ladysnowblood01.jpg" },
  // { title: "ladysnowblood", path: "/client/img/ladysnowblood02.jpg" },
  // { title: "macbeth", path: "/client/img/macbeth01.png" },
  // { title: "macbeth", path: "/client/img/macbeth02.png" },
  // { title: "macbeth", path: "/client/img/macbeth03.png" },
  // { title: "Nausica", path: "/client/img/Nausica_01.jpg" },
  // { title: "Nausica", path: "/client/img/Nausica_02.jpg" },
  { title: "Perfect_Blue", path: "/client/img/Perfect_Blue_01.jpg" },
  // { title: "pi", path: "/client/img/pi01.jpg" },
  // { title: "pi", path: "/client/img/pi02.jpg" },
  // { title: "primer", path: "/client/img/primer01.jpg" },
  // { title: "primer", path: "/client/img/primer02.jpg" },
  // { title: "primer", path: "/client/img/primer03.jpg" },
  // { title: "RAN", path: "/client/img/ran01.jpeg" },
  { title: "RAN", path: "/client/img/ran02.jpg" },
  // { title: "RAN", path: "/client/img/ran03.jpg" },
  { title: "theGlory", path: "/client/img/theGlory_01.jpg" },
  // { title: "theGlory", path: "/client/img/theGlory_02.jpg" },
  // { title: "wolfchildren", path: "/client/img/wolfchildren01.jpg" },
  { title: "wolfchildren", path: "/client/img/wolfchildren002.jpg" },
];


Isotope.LayoutMode.create('customHorizontal', {
  _resetLayout() {
    this.columnWidth = this.options.columnWidth;
    this.currentColumn = 0;
    this.columnHeight = [];
  },

  _getItemLayoutPosition(item) {
    const itemSize = item.size.outerHeight;
    const viewportHeight = this.isotope.size.innerHeight;
    const gridItem = item.element.querySelector('.grid-item-inner');
    const img = gridItem.querySelector('img');
    const imgAspectRatio = img.width / img.height;

    // Check if the current item will exceed the column's max-height (viewport height)
    if (this.columnHeight[this.currentColumn] && this.columnHeight[this.currentColumn] + itemSize > viewportHeight) {
      // Move to the next column
      this.currentColumn++;
    }

    // Set x and y position for the current grid item
    const x = this.currentColumn * this.columnWidth;
    const y = this.columnHeight[this.currentColumn] || 0;

    // Update column height
    this.columnHeight[this.currentColumn] = y + itemSize / imgAspectRatio;

    return {
      x: x,
      y: y
    };
  },

  _getContainerSize() {
    const containerWidth = (this.currentColumn + 1) * this.columnWidth;
    const containerHeight = Math.max(...this.columnHeight);

    return {
      width: containerWidth,
      height: containerHeight
    };
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');

  // Add images to the grid
  images.forEach(image => {
    const gridItem = document.createElement('div');
    if (Math.floor(Math.random() * 10 ) < 7) {
      gridItem.className = 'grid-item'; 
    } else {
      gridItem.className = 'grid-item large'
    }
    console.log("image loaded")
    const img = document.createElement('img');
    img.src = image.path;
    img.alt = image.title;

    gridItem.appendChild(img);
    grid.appendChild(gridItem);
  });

  // Initialize Isotope with horizontalOrder layout mode
  imagesLoaded(grid, () => { $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'customHorizontal',
    customHorizontal: {
      columnWidth: '.grid-item:not(.large)'
    },
    masonry: {
      columnWidth: '.grid-item:not(.large)',
      horizontalOrder: true
    }
  })
});
})
