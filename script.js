// const fnameId = document.getElementById("#fname");
// console.log(fnameId);
// const valuesId = document.getElementById("#values");

const fnameId = document.getElementById("fname");
document.getElementById("values").addEventListener("click", function () {
  // const arr = [];
  function sortirAscending(fnameId) {
    for (let a = 0; a < fnameId.length; a++) {
      for (let b = 0; b < fnameId.length; b++) {
        if (fnameId[b] > fnameId[b + 1]) {
          let tamp = fnameId[b];
          fnameId[b] = fnameId[b + 1];
          fnameId[b + 1] = tamp;
        }
      }
    }
    return fnameId;
  }
  console.log(sortirAscending(fnameId.value));
});
