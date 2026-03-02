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
  "ذو الجلال و الاكرام"
];


let container = document.querySelector(".conatiner");
let names = document.querySelector(".names");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let form = document.querySelector(".form");
let number = document.querySelector(".number");
let finish = document.querySelector(".finish");
let all = document.querySelector(".all_names");
let left = document.querySelector(".left");
let count = 0;
let fin = 99;
input.focus();
let item = [];
form.addEventListener("submit", function(e){
    e.preventDefault(); // prevent reload
        let value = input.value.trim()
        if (value === "") return;
        item.push(value) 
        if (!arr.includes(value)){
            input.value = ""; 
            return;
        }
        let exist = document.querySelector(`h1[data-value="${value}"]`)
        if(!exist){
                count++;
                number.textContent = "الاسماء: " + count;
                left.textContent ="الباقي: " + (fin - count)
                let h1 = document.createElement("h3");
                h1.textContent= value;
                h1.className = "show-name";
                h1.setAttribute("data-value", item)
                names.append(h1); 
        }
        input.value = "";
        finish.addEventListener("click", ()=>{
            all.innerHTML= "";
            let rest = arr.filter(te => !item.includes(te) );
            rest.forEach(te =>{
                let hh1 = document.createElement("h3");
                hh1.textContent = te;
                hh1.className = "show-name";
                all.append(hh1)
            })
        })
})

    












