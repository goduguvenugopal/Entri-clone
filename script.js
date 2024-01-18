const premiumbtnfunc = document.getElementById("premiumbtid");
const premiumfunc = document.getElementById("premiumid");
const exam = document.getElementById("exampageid");
const skill = document.getElementById("skillspageid");
const skillButton = document.getElementById("skillbt");
const downPop = document.getElementById("contpop");
const closePop = document.getElementById("closeid");
const goldskilpagefun = document.getElementById("preskillpageid");
const gcoursepagefun = document.getElementById("goldcoursepageid");
const sikkiprebt = document.getElementById("skillsprebtid");
const groupsfunbt = document.getElementById("groupsbtnid");
const groupsfunpage = document.getElementById("groupspageid");
const backfuncid = document.getElementById("backbtid");
const exbackfuncid = document.getElementById("exbackbtn");
const navbtmfuncid = document.getElementById("btmnavid");
const morepagefunc = document.getElementById("smorepageid");
const morebtnfunc = document.getElementById("morebtnid");

skillButton.onclick = showskill;

function showskill() {
  exam.style.display = "none";
  skill.style.display = "block";
  downPop.style.display = "none";
  premiumfunc.style.display = "none";
  goldskilpagefun.style.display = "none";
  groupsfunpage.style.display = "none";
  morepagefunc.style.display = "none";
}

document.getElementById("exambt").addEventListener("click", skillhide);

function skillhide() {
  exam.style.display = "block";
  skill.style.display = "none";
  downPop.style.display = "none";
  premiumfunc.style.display = "none";
  goldskilpagefun.style.display = "none";
  groupsfunpage.style.display = "none";
  morepagefunc.style.display = "none";
}

closeid.onclick = showpop;

function showpop() {
  downPop.style.display = "block";
}

document.getElementById("close-bt-pop").addEventListener("click", pophide);

function pophide() {
  downPop.style.display = "none";
}

premiumbtnfunc.onclick = showpremium;

function showpremium() {
  exam.style.display = "none";
  skill.style.display = "none";
  downPop.style.display = "none";
  premiumfunc.style.display = "block";
  goldskilpagefun.style.display = "none";
  groupsfunpage.style.display = "none";
  morepagefunc.style.display = "none";
}

document
  .getElementById("skillsprebtid")
  .addEventListener("click", hidegoldprepg);

function hidegoldprepg() {
  exam.style.display = "none";
  skill.style.display = "none";
  downPop.style.display = "none";
  premiumfunc.style.display = "block";
  goldskilpagefun.style.display = "block";
  gcoursepagefun.style.display = "none";
  groupsfunpage.style.display = "none";
  navbtmfuncid.style.display = "none";
  exbackfuncid.style.display = "none";
  backfuncid.style.display = "block";
  morepagefunc.style.display = "none";
}

document
  .getElementById("examsprebtid")
  .addEventListener("click", hidegoldprebt);

function hidegoldprebt() {
  exam.style.display = "none";
  skill.style.display = "none";
  downPop.style.display = "none";
  premiumfunc.style.display = "block";
  goldskilpagefun.style.display = "none";
  gcoursepagefun.style.display = "block";
  groupsfunpage.style.display = "none";
  navbtmfuncid.style.display = "block";

  exbackfuncid.style.display = "block";
  backfuncid.style.display = "none";
  morepagefunc.style.display = "none";
}

groupsfunbt.onclick = showgroupspage;

function showgroupspage() {
  exam.style.display = "none";
  skill.style.display = "none";
  downPop.style.display = "none";
  premiumfunc.style.display = "none";
  goldskilpagefun.style.display = "none";
  groupsfunpage.style.display = "block";
  morepagefunc.style.display = "none";
}

morebtnfunc.onclick = showmorefun;

function showmorefun() {
  morepagefunc.style.display = "block";
  groupsfunpage.style.display = "none";
  exam.style.display = "none";
  skill.style.display = "none";
  downPop.style.display = "none";
  premiumfunc.style.display = "none";
  goldskilpagefun.style.display = "none";
}
function openfile() {
  const openfiy = document.getElementById("file");
  openfiy.classList.toggle("pick");
}

const maimformfunc = document.getElementById("mainform");
const textformfunc = document.getElementById("text");
const headrefunc = document.querySelectorAll(".modal-title");
const numformfunc = document.getElementById("txt");
const numrefunc = document.querySelectorAll(".number");

maimformfunc.addEventListener("submit", function (x) {
  x.preventDefault();
  alert("Profile Details have been Changed");
  const myfunc = textformfunc.value;

  headrefunc.forEach(function (a) {
    a.textContent = myfunc;
  });

  const numvar = numformfunc.value;

  numrefunc.forEach(function (a) {
    a.textContent = numvar;
  });

  maimformfunc.reset();
});

const setcolfun = document.getElementById("selcolor");
const bodyfunc = document.getElementById("bdbgid");

setcolfun.addEventListener("change", function () {
  bodyfunc.style.backgroundColor = setcolfun.value;
});

  



function handleFile() {
  const fileInput = document.getElementById("file");
  const previewImages = document.querySelectorAll(".profile-img1,.profi-img");

  const selectedFile = fileInput.files[0];

  if (selectedFile && selectedFile.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImages.forEach(function (previewImage) {
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
      });
    };

    reader.readAsDataURL(selectedFile);
  } else {
    previewImages.forEach(function (previewImage) {
      previewImage.style.display = "none";
    });
  }
}

