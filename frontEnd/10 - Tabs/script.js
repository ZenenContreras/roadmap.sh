const firstTab = document.getElementById("first");
const secondTab = document.getElementById("second");
const thirdTab = document.getElementById("third");
const fourthTab = document.getElementById("fourth");

const firstContent = document.getElementById("tab1");
const secondContent = document.getElementById("tab2");
const thirdContent = document.getElementById("tab3");
const fourthContent = document.getElementById("tab4");

firstTab.addEventListener("click", () => {
  firstContent.style.display = "block";
  secondContent.style.display = "none";
  thirdContent.style.display = "none";
  fourthContent.style.display = "none";
});

secondTab.addEventListener("click", () => {
  firstContent.style.display = "none";
  secondContent.style.display = "block";
  thirdContent.style.display = "none";
  fourthContent.style.display = "none";
});

thirdTab.addEventListener("click", () => {  
  firstContent.style.display = "none";
  secondContent.style.display = "none";
  thirdContent.style.display = "block";
  fourthContent.style.display = "none";
});

fourthTab.addEventListener("click", () => {
  firstContent.style.display = "none";
  secondContent.style.display = "none";
  thirdContent.style.display = "none";
  fourthContent.style.display = "block";
});
