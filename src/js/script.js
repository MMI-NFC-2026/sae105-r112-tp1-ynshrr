// TODO
const aMettreEnRouge =  document.querySelector("#a-mettre-en-rouge");
aMettreEnRouge.computedStyleMap.color = "red";

const collH2.querySelectorAll("h2")
collH2.forEach((elm)=>{
    elm.addEventListener("click" ,(evt)=>{
        evt.target.style.color = "rfed";
});
});

const enRougeSuiteAClick = document.querySelector("en-rouge-suite-a-click");

enRougeSuiteAClick.addEventListener("click",(evt)=>{
    enRougeSuiteAClick.style.color = "red"
});