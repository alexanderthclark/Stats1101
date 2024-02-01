```{html}
<!-- HTML for input fields and plot container -->
<div>
    <label for="mean">Mean:</label>
    <input type="number" id="mean" value="0">
    <label for="stddev">Standard Deviation:</label>
    <input type="number" id="stddev" value="1">
    <button onclick="plotNormalDistribution()">Plot</button>
    <div id="plot"></div>
</div>

<!-- Plotly.js library -->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<!-- JavaScript for plotting the normal distribution -->
<script>
function plotNormalDistribution() {
    var mean = parseFloat(document.getElementById('mean').value);
    var stddev = parseFloat(document.getElementById('stddev').value);
    var x = [];
    for (var i = -10; i < 10; i += 0.1) {
        x.push(i * stddev + mean);
    }
    var y = x.map(z => Math.exp(-Math.pow(z - mean, 2) / (2 * Math.pow(stddev, 2))) / (stddev * Math.sqrt(2 * Math.PI)));
    var trace = {x: x, y: y, type: 'scatter'};
    var data = [trace];
    Plotly.newPlot('plot', data, {title: 'Normal Distribution'});
}
</script>
```


test