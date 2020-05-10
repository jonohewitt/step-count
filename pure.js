// const headerTags = document.querySelectorAll("h1");
// headerTags.forEach(tag => {
//   const hue = 360 * Math.random();
//   tag.style.backgroundColor = `hsl(${hue},100%, 50%)`;
// });

// const rectTags = document.querySelectorAll("rect");

// rectTags.forEach((tag, i) => {
//   // tag.style.fill = "red";
//
//   const width = data[i];
//   tag.setAttribute("width", width + "px");
// });

const data = [112, 80, 60, 98, 112, 80, 60, 98, 112, 80, 60, 98];

const todaySVG = document.querySelector("svg");
data.forEach((d, i) => {
  const rectTag = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  rectTag.setAttribute("x", 36 * i);
  rectTag.setAttribute("y", 112 - d);
  rectTag.setAttribute("width", "24px");
  rectTag.setAttribute("height", d);

  todaySVG.append(rectTag);
});
