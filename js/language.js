
console.log("Language JS Loaded");
const translations = {
  en: {
    navbar_home: "Home",
    navbar_register: "Register",
    navbar_login: "Login",
    navbar_contact: "Contact",

    hero_title: "Connecting Local Farmers with Bulk Buyers",
    hero_desc:
      "A local platform that helps farmers list their agricultural products and enables bulk buyers to discover, contact, and coordinate directly.",

    get_started: "Get Started",

    login_title: "Login",
    login_button: "Login",

    logout_button: "Logout"
  },

  mr: {
    navbar_home: "मुख्यपृष्ठ",
    navbar_register: "नोंदणी",
    navbar_login: "लॉगिन",
    navbar_contact: "संपर्क",

    hero_title: "स्थानिक शेतकऱ्यांना घाऊक खरेदीदारांशी जोडणे",
    hero_desc:
      "एक स्थानिक प्लॅटफॉर्म जो शेतकऱ्यांना त्यांची कृषी उत्पादने सूचीबद्ध करण्यास मदत करतो आणि घाऊक खरेदीदारांना शोध, संपर्क आणि समन्वय साधण्यास सक्षम करतो.",

    get_started: "सुरू करा",

    login_title: "लॉगिन",
    login_button: "लॉगिन",

    logout_button: "लॉगआउट"
  }
};


/* ========================= */
/* LANGUAGE SYSTEM */
/* ========================= */

function applyLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");

    if (translations[lang] && translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });

  localStorage.setItem("kisanLang", lang);
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {

  const langSelect = document.getElementById("languageSelect");

  // Detect saved language OR browser language
  let savedLang = localStorage.getItem("kisanLang");

  if (!savedLang) {
    savedLang = navigator.language.startsWith("mr") ? "mr" : "en";
  }

  applyLanguage(savedLang);

  if (langSelect) {
    langSelect.value = savedLang;

    langSelect.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
    });
  }
});