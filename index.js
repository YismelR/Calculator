let form = document.querySelector("form");
form.addEventListener("click", function (btn) {
  let selected = form.querySelector('input[name="nums"]:checked');
  document.querySelector("#text").value = selected.value;
});
