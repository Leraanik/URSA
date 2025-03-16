document.addEventListener("DOMContentLoaded", function () {
    const languageDropdown = document.getElementById("language-dropdown");
    const flagIcon = document.getElementById("flag_icon");

    // Проверяем, есть ли сохраненный язык в localStorage
    let savedLang = localStorage.getItem("selectedLanguage");
    let savedFlag = localStorage.getItem("selectedFlag");

    if (savedLang) {
        languageDropdown.value = savedLang; // Устанавливаем сохраненный язык в select
    }
    if (savedFlag) {
        flagIcon.src = savedFlag; // Устанавливаем сохраненный флаг
    }

    // Обработчик изменения языка
    languageDropdown.addEventListener("change", function () {
        let selectedOption = this.options[this.selectedIndex]; // Выбранный язык
        let selectedLang = this.value; // Код языка
        let selectedFlag = selectedOption.getAttribute("data-flag"); // Флаг

        // Сохраняем язык и флаг в localStorage
        localStorage.setItem("selectedLanguage", selectedLang);
        localStorage.setItem("selectedFlag", selectedFlag);

        // Меняем флаг
        flagIcon.src = selectedFlag;

        // Переходим на нужную страницу
        let pageMap = {
            "en": "index.html",
            "tur": "index-tur.html",
            "ru": "index-ru.html",
            "de": "index-de.html",
            "ita": "index-ita.html",
            "ar": "index-ar.html",
            "isp": "index-isp.html",
            "fr": "index-fr.html",

            "en2": "aboutUs.html",
            "tur2": "aboutUs-tur.html",
            "ru2": "aboutUs-ru.html",
            "de2": "aboutUs-de.html",
            "ita2": "aboutUs-ita.html",
            "ar2": "aboutUs-ar.html",
            "isp2": "aboutUs-isp.html",
            "fr2": "aboutUs-fr.html",

            "en3": "services.html",
            "tur3": "services-tur.html",
            "ru3": "services-ru.html",
            "de3": "services-de.html",
            "ita3": "services-ita.html",
            "ar3": "services-ar.html",
            "isp3": "services-isp.html",
            "fr3": "services-fr.html",

            "en4": "whyursa.html",
            "tur4": "whyursa-tur.html",
            "ru4": "whyursa-ru.html",
            "de4": "whyursa-de.html",
            "ita4": "whyursa-ita.html",
            "ar4": "whyursa-ar.html",
            "isp4": "whyursa-isp.html",
            "fr4": "whyursa-fr.html",

            "en5": "airfreight.html",
            "tur5": "airfreight-tur.html",
            "ru5": "airfreight-ru.html",
            "de5": "airfreight-de.html",
            "ita5": "airfreight-ita.html",
            "ar5": "airfreight-ar.html",
            "isp5": "airfreight-isp.html",
            "fr5": "airfreight-fr.html",

            "en6": "contact.html",
            "tur6": "contact-tur.html",
            "ru6": "contact-ru.html",
            "de6": "contact-de.html",
            "ita6": "contact-ita.html",
            "ar6": "contact-ar.html",
            "isp6": "contact-isp.html",
            "fr6": "contact-fr.html",

            "en7": "oceanfreight.html",
            "tur7": "oceanfreight-tur.html",
            "ru7": "oceanfreight-ru.html",
            "de7": "oceanfreight-de.html",
            "ita7": "oceanfreight-ita.html",
            "ar7": "oceanfreight-ar.html",
            "isp7": "oceanfreight-isp.html",
            "fr7": "oceanfreight-fr.html",

            "en8": "landfreight.html",
            "tur8": "landfreight-tur.html",
            "ru8": "landfreight-ru.html",
            "de8": "landfreight-de.html",
            "ita8": "landfreight-ita.html",
            "ar8": "landfreight-ar.html",
            "isp8": "landfreight-isp.html",
            "fr8": "landfreight-fr.html",

            "en9": "minivan.html",
            "tur9": "minivan-tur.html",
            "ru9": "minivan-ru.html",
            "de9": "minivan-de.html",
            "ita9": "minivan-ita.html",
            "ar9": "minivan-ar.html",
            "isp9": "minivan-isp.html",
            "fr9": "minivan-fr.html",
            
            "en10": "multi.html",
            "tur10": "multi-tur.html",
            "ru10": "multi-ru.html",
            "de10": "multi-de.html",
            "ita10": "multi-ita.html",
            "ar10": "multi-ar.html",
            "isp10": "multi-isp.html",
            "fr10": "multi-fr.html",

            "en11": "supply.html",
            "tur11": "supply-tur.html",
            "ru11": "supply-ru.html",
            "de11": "supply-de.html",
            "ita11": "supply-ita.html",
            "ar11": "supply-ar.html",
            "isp11": "supply-isp.html",
            "fr11": "supply-fr.html",
        };

        if (pageMap[selectedLang]) {
            window.location.href = pageMap[selectedLang];
        }
    });
});
