var english = document.getElementById("en"),
azerbaijan = document.getElementById("az"),
change_text = document.getElementById("");

english.addEventListener("click", function() {
    change(english, azerbaijan);
    }, false
);

azerbaijan.addEventListener("click", function() {
    change(azerbaijan, english);
    }, false
)

function change(lang_on, lang_off) {
    if (!lang_on.classList.contains("current_lang")) {
        lang_on.classList.add("current_lang");
        lang_off.classList.remove("current_lang");
    }
    if (lang_on.innerHTML == "En") {
        change_text.classList.add("english");
        change_text.classList.remove("azerbaijan");
        change_text.innerHTML = 'href="./cosmic.css"'
    }
    else if (lang_on.innerHTML == "Az") {
        change_text.classList.add("azerbaijan");
        change_text.classList.remove("english");
        change_text.innerHTML = "";
    }
}