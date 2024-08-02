const search = document
  .querySelector(".filter")
  .addEventListener("input", runFunction);

function runFunction(e) {
  let input = e.target.value.toLowerCase();
  // console.log(input);
  let items = document.querySelectorAll(".items").forEach(function (items) {
    let find = items.textContent.toLowerCase();
    // console.log(find);
    if (find.includes(input)) {
      items.style.display = "block";
    } else {
      items.style.display = "none";
    }
  });
}
