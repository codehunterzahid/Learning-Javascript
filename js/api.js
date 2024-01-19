const URl = "https://catfact.ninja/fact";
const para = document.querySelector("#showData");
const btn = document.querySelector("#getapi");

const catFacts = async () =>{
    let response = await fetch (URl);
    console.log(response);
    let finalData = await response.json();
    para.innerText = finalData.fact;
};

btn.addEventListener("click",catFacts);
