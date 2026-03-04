const arr = [
  "الله", "الرحمن", "الرحيم", "الملك", "القدوس", "السلام", "المؤمن",
  "المهيمن", "العزيز", "الجبار", "المتكبر", "الخالق", "البارئ", "المصور",
  "الغفار", "القهار", "الوهاب", "الرزاق", "الفتاح", "العليم", "القابض",
  "الباسط", "الخافض", "الرافع", "المعز", "المذل", "السميع", "البصير",
  "الحكم", "العدل", "اللطيف", "الخبير", "الحليم", "العظيم", "الغفور",
  "الشكور", "العلي", "الكبير", "الحفيظ", "المقيت", "الحسيب", "الجليل",
  "الكريم", "الرقيب", "المجيب", "الواسع", "الحكيم", "الودود", "المجيد",
  "الباعث", "الشهيد", "الحق", "الوكيل", "القوي", "المتين", "الولي",
  "الحميد", "المحصي", "المبدي", "المعيد", "المحيي", "المميت", "الحي",
  "القيوم", "الواجد", "الماجد", "الواحد", "الصمد", "القادر", "المقتدر",
  "المقدم", "المؤخر", "الأول", "الآخر", "الظاهر", "الباطن", "الوالي",
  "المتعال", "البر", "التواب", "المنتقم", "العفو", "الرؤوف", "المقسط",
  "الجامع", "الغني", "المغني", "المانع", "الضار", "النافع", "النور",
  "الهادي", "البديع", "الباقي", "الوارث", "الرشيد", "الصبور", "مالك الملك",
  "ذو الجلال والإكرام"
];

let container = document.querySelector(".conatiner");
let names = document.querySelector(".names");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let form = document.querySelector(".form");

// Flag to ensure rendering happens only once
let rendered = false;

form.addEventListener("submit", function(e){
  e.preventDefault();
  if (!rendered) {
    arr.forEach(el => {
      let h1 = document.createElement("h1");
      h1.className = "show-name active";
      h1.textContent = el;
      names.append(h1);
      if (input.value == el) {
        h1.style.backgroundColor = "red";
      }
    });
    rendered = true;
  }
  input.value = "";
});
