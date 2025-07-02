document.addEventListener("DOMContentLoaded", () => {
  console.log("Present");
  const words = [
    "Designer",
    "Freelancer",
    "Moon Walker",
    "Billionaire in the fam",
    "Best Brother",
  ];

  const box = document.querySelector(".box");

  i = 0;
  setInterval(() => {
    box.textContent = words[i++];
    i = i % words.length;
    console.log("I am absent");
  }, 2000);
});
