const todaySvg = d3.select("svg.today");

const barScale = d3
  .scaleLinear()
  .domain([d3.min(todayData), d3.max(todayData)])
  .range([1, 100]);

const todayGroups = todaySvg
  .selectAll("g")
  .data(todayData)
  .enter()
  .append("g")
  .attr("transform", (d, i) => {
    return "translate(" + i * 30 + ", 0)";
  });

const hourFormat = d3.format("02");
const stepsFormat = d3.format(",.0f");

todayGroups
  .append("rect")
  .attr("x", 0)
  .attr("y", (d, i) => 100)
  .attr("width", 20)
  .attr("height", 0)
  .transition()
  .duration(1000)
  .delay((d, i) => i * 40)
  .ease(d3.easeExpOut)
  .attr("y", (d, i) => 130 - barScale(d))
  .attr("height", (d, i) => barScale(d));

todayGroups
  .append("text")
  .attr("x", 10)
  .attr("y", 150)
  .attr("class", "hours")
  .text((d, i) => hourFormat(i));

todayGroups
  .append("text")
  .attr("x", 10)
  .attr("y", (d, i) => 120 - barScale(d))
  .attr("class", "steps")
  .text((d, i) => stepsFormat(d));

todayGroups
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 30)
  .attr("height", 150)
  .attr("class", "transparent");
