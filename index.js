const createImage = (src, alt) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  return img;
};

const createHeading = (text) => {
  const h5 = document.createElement("h5");
  h5.textContent = text;
  return h5;
};

const createParagraph = (text) => {
  const p = document.createElement("p");
  p.innerHTML = `<span>${text}</span> / 100`;
  return p;
};

const map = document.getElementById("map");

fetch("data.json").then((res) => {
  res.json().then((data) => {
    data.map((el) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("container");
      const left = document.createElement("div");

      left.appendChild(createImage(el.icon, el.name));
      left.appendChild(createHeading(el.category));

      const right = document.createElement("div");
      right.appendChild(createParagraph(el.score));

      wrapper.appendChild(left);
      wrapper.appendChild(right);

      map.appendChild(wrapper);
    });
  });
});
