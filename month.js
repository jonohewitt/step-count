const monthSvg = d3.select("svg.month");
const circleScale = d3
  .scaleSqrt()
  .domain([1000, d3.max(monthData)])
  .range([5, 40]);

const monthGroups = monthSvg
  .selectAll("g")
  .data(monthData)
  .enter()
  .append("g")
  .attr("transform", (d, i) => {
    const x = (i % 7) * 100 + 60;
    const y = Math.floor(i / 7) * 105 + 60;
    return `translate(${x},${y})`;
  });

const colorScale = d3
  .scaleLinear()
  .domain([d3.min(monthData), d3.max(monthData)])
  .range([0, 60]);

monthGroups
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", circleScale(10000))
  .attr("class", "ring goal");

monthGroups
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", circleScale(20000))
  .attr("class", "ring extra");

monthGroups
  .append("circle")
  .attr("fill", (d, i) => {
    return (
      "hsl(" +
      (60 - colorScale(d)) +
      "," +
      (colorScale(d) + 60) +
      "%, " +
      (90 - colorScale(d)) +
      "%)"
    );
  })
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 5)
  .transition()
  .duration(1000)
  .delay((d, i) => i * 25 + 100)
  .ease(d3.easeBackInOut)
  .attr("r", (d, i) => circleScale(d))
  .attr("class", "actual");

monthGroups
  .append("text")
  .attr("class", "day")
  .attr("x", 0)
  .attr("y", 55)
  .text((d, i) => i + 1);

monthGroups
  .append("text")
  .attr("class", "steps")
  .attr("x", 0)
  .attr("y", 55)
  .text((d, i) => d.toLocaleString() + " steps");
