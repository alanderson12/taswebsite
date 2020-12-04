function populateChart() {
 
    // set the data
    var data = {
        header: ["Name", "Surveys Completed"],
        rows: [
          ["Freddie Mercury", 1],
          ["Jeff Bezos", 4],
          ["Alex Christian", 2],
          ["Abigail Anderson", 1],
          ["Christopher Nolan", 3],
          ["Johnny Depp", 1],
          ["Noah DiRoberto", 1],
    ]};

    // create the chart
    var chart = anychart.column();

    // add the data
    chart.data(data);

    // set the chart title
    chart.title("EMPLOYEE REVIEW ACTIVITY");

    // draw
    chart.container("container");
    chart.draw();
  }