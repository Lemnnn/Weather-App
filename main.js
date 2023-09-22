const search = document.querySelector(".inputButton");

search.addEventListener("click", () => {
  const APIKey = "f50bcb371337fd4812dde5ecf1abc31e";
  const city = document.querySelector(".input").value;

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  ).then();
});
