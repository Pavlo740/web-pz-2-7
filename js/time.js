$(document).ready(function () {
  function createTableRow1(result) {
    return $(`<tr><td>${result.id}</td><td>${result.time}</td></tr>`);
  }

  const results = JSON.parse(localStorage.getItem("results"));

  if (results) {
    const $table = $(".table");

    let smallestTimeObj = results[0];

    for (let i = 1; i < results.length; i++) {
      const currentTime = parseInt(results[i].time);
      const smallestTime = parseInt(smallestTimeObj.time);

      if (currentTime < smallestTime) {
        smallestTimeObj = results[i];
      }
    }

    smallestTimeObj.smallest = true;

    results.forEach((result) => {
      const tr = createTableRow1(result);

      if (result.smallest) {
        tr.addClass("smallest-time");
      }

      $table.append(tr);
    });

    $("#clearDataButton").on("click", function () {
      localStorage.removeItem("results");

      $(".table").empty();
    });
  }
});
