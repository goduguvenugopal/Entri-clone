// page navigation code goes here

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

// form submittimg code  starts here
const maimformfunc = document.getElementById("mainform");
const textformfunc = document.getElementById("text");
const headrefunc = document.querySelectorAll(".modal-title");
const numformfunc = document.getElementById("txt");
const numrefunc = document.querySelectorAll(".number, .number1");
const hiiText = document.getElementById("promodal");

maimformfunc.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Profile Details have been Changed");

  const myfunc = textformfunc.value;
  headrefunc.forEach(function (element) {
    element.textContent = myfunc;
  });

  hiiText.textContent = `Hi, ${myfunc}`;

  const numvar = numformfunc.value;
  numrefunc.forEach(function (element) {
    element.textContent = numvar;
  });

  maimformfunc.reset();
});

// theme code starts here

const setcolfun = document.getElementById("selcolor");
const bodyfunc = document.getElementById("bdbgid");

setcolfun.addEventListener("change", function () {
  bodyfunc.style.backgroundColor = setcolfun.value;
});

// preview image code starts here

function handleFile() {
  const fileInput = document.getElementById("file");
  const previewImages = document.querySelectorAll(
    ".profile-img1,.profi-img,.profile-img,.profile-img2"
  );

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
      previewImage.style.display = "block";
    });
  }
}

//  Expand image code starts here

function expandfunc(expaimg) {
  document.getElementById("expand-card").style.display = "flex";

  document.getElementById("srcimgid").src = expaimg.src;
}

function closefunc() {
  document.getElementById("expand-card").style.display = "none";
}
