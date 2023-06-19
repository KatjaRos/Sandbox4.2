import "./styles.css";

const btnSubmit = document.getElementById("submit-data");
btnSubmit.addEventListener("click", submitData);
async function submitData() {
  const body = document.getElementById("b");
  const search = document.getElementById("input-show").value;
  let url1 = "https://api.tvmaze.com/search/shows?q=";
  const url = url1 + search;
  const data = await fetch(url);
  const tv_data = await data.json();
  const values = tv_data;
  for (var i = 0; i < values.length; i++) {
    let div1 = document.createElement("div");
    div1.setAttribute("class", "show-data");
    let img = document.createElement("img");
    let imageURL = values[i].show.image?.medium;
    img.setAttribute("src", imageURL);
    let div2 = document.createElement("div");
    div2.setAttribute("class", "show-info");
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "show-title");
    h1.innerHTML = values[i].show.name;
    console.log(values[i].show.name);
    div2.appendChild(h1);
    let p = document.createElement("div");
    p.innerHTML = values[i].show.summary;
    div2.appendChild(p);
    div1.appendChild(img);
    div1.appendChild(div2);
    console.log(img.src);
    body.appendChild(div1);
  }
}
