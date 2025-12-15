const ImgCompany = document.querySelectorAll(".icone-galeria");

const InfoOfCompany = {
  "4th1": {
    name: "4th1",
    description: "Descrição da empresa 4th1",
  },
  dark1: {
    name: "Dark",
    description: "Descrição da empresa Dark",
  },
  carb1: {
    name: "Carb",
    description: "Descrição da empresa Carb",
  },
  studio7: {
    name: "Studio 7",
    description: "Descrição da empresa Studio 7",
  },
  "last-lab": {
    name: "Last Lab",
    description: "Descrição da empresa Last Lab",
  },
  kabba1: {
    name: "Kabba",
    description: "Descrição da empresa Kabba",
  },
  "wake-up": {
    name: "Wake Up",
    description: "Descrição da empresa Wake Up",
  },
  vender: {
    name: "Vender",
    description: "Descrição da empresa Vender",
  },
  indra: {
    name: "Indra",
    description: "Descrição da empresa Indra",
  },
  mihail: {
    name: "Mihail",
    description: "Descrição da empresa Mihail",
  },
  jumper: {
    name: "Jumper",
    description: "Descrição da empresa Jumper",
  },
  jk: {
    name: "JK",
    description: "Descrição da empresa JK",
  },
};
const section = document.getElementById("section-modal");

ImgCompany.forEach((img) => {
  img.addEventListener("click", () => {
    const nameCompany = img.title;
    const company = InfoOfCompany[nameCompany];
    PrintInfoCompany(company);
    console.log(company.description);
  });
});

function PrintInfoCompany(company) {
  const modal = `
        <div id="div-modal">
          <h1>${company.name}</h1>
          <p>${company.description}</p>
        </div>
    `;
  section.classList.add("active");
  section.innerHTML = modal;
}

function removeModal(){
    section.classList.remove("active")
}
