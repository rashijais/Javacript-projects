const items = document.querySelectorAll(".item");
let imageURLs = [
    "./images/dog1.jpeg",
    "./images/dog2.jpeg",
    "./images/dog3.jpg",
    "./images/dog4.jpg",
    "./images/dog5.jpeg",
];

const events = {
    mouse: {
      start: "mouseover",
      end: "mouseout",
    },
    touch: {
      start: "touchstart",
      end: "touchend",
    }
};

const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
};

const deviceType = isTouchDevice() ? 'touch' : 'mouse';

items.forEach((item, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", imageURLs[index]);
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    item.appendChild(img);
    // Initial CSS properties for all items
    item.style.flex = "1";
    item.style.transition = "flex 0.8s ease";
    item.addEventListener(events[deviceType].start, () => {
      item.style.flex = "2"; // Expand the item more visibly
    });
    item.addEventListener(events[deviceType].end, () => {
      item.style.flex = "1"; // Contract the item
    });
});
