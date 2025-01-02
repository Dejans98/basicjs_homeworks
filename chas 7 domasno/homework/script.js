const firstHeader = document.getElementById("myTitle");
const firstHeaderTextContent = firstHeader.textContent;

firstHeader.textContent = "First header";

// const allParagraph = document.getElementsByTagName("p");
// const allParagraphTextContent = allParagraph.textContent;
// console.log("all p elements", allParagraph);
// allParagraph.textContent = "All p elements Changed";

// const allParagraph = document.getElementsByClassName(
//   "paragraph",
//   "paragraph second"
// );
// const allParagraphTextContent = allParagraph.textContent;
// allParagraph.textContent = "ALL p";

//Sakav da gi selektiram i dvata od ednas i ovoj odgovor mi e od chatgpt
const allParagraphs = document.querySelectorAll(".paragraph, .second");

allParagraphs.forEach((paragraph) => {
  paragraph.textContent = "ALL p";
});

const headerThree = document.querySelector("h3");
headerThreeTextContent = headerThree.textContent;
headerThree.textContent = "h3 header";
console.log(headerThree);

const allDivs = document.querySelectorAll("div");
const lastDiv = allDivs[allDivs.length - 1];
const secondHeader = lastDiv.querySelector("h1");
secondHeader.textContent = "Changed";
