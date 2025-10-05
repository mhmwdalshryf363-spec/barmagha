/* -------------------------------------------------
   🎯 برمجها | Barmegha
   وظائف JavaScript للموقع
   تصميم وتطوير: ELMNSYE
--------------------------------------------------- */

// ✅ البحث داخل الموقع
function searchSite() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const resultsDiv = document.getElementById("search-results");
  resultsDiv.innerHTML = "";

  if (query.trim() === "") {
    resultsDiv.innerHTML = "<p>من فضلك اكتب كلمة للبحث 🔎</p>";
    return;
  }

  const pages = [
    { name: "ابدأ التعلم", url: "pages/learn.html", keywords: ["تعلم", "البرمجة", "الأساسيات", "مفاهيم"] },
    { name: "لغات البرمجة", url: "pages/languages.html", keywords: ["python", "c++", "java", "javascript", "php", "html"] },
    { name: "تصميم الألعاب", url: "pages/games.html", keywords: ["game", "unity", "snake", "لعبة", "تصميم"] },
    { name: "المؤسسون", url: "pages/founders.html", keywords: ["turing", "ada", "مؤسس", "البرمجة"] },
    { name: "المصادر", url: "pages/resources.html", keywords: ["كتب", "كورسات", "ادوات", "مواقع", "تعلم"] },
    { name: "تواصل معنا", url: "pages/contact.html", keywords: ["اتصال", "راسل", "elmnsye", "دعم"] },
  ];

  const matched = pages.filter(page =>
    page.keywords.some(keyword => keyword.includes(query))
  );

  if (matched.length === 0) {
    resultsDiv.innerHTML = `<p>❌ لا توجد نتائج لكلمة "<strong>${query}</strong>"</p>`;
    return;
  }

  let html = "<ul class='search-list'>";
  matched.forEach(page => {
    html += `<li><a href='${page.url}' target='_blank'>${page.name}</a></li>`;
  });
  html += "</ul>";
  resultsDiv.innerHTML = html;
}

// ✅ تأثيرات بسيطة عند التحميل
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transition = "opacity 1.5s ease";
    setTimeout(() => hero.style.opacity = 1, 200);
  }
});

// ✅ التمرير السلس بين الأقسام
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// ✅ تحسين تجربة الموبايل (إغلاق القائمة)
const navbarLinks = document.querySelectorAll(".navbar a");
navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      document.querySelector(".navbar").classList.remove("open");
    }
  });
});