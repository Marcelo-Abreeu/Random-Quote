const changeThemeBtn = document.querySelector("#change-theme");

    // TOGLE DARK MODE
    function toggleDarkMode(){
        document.body.classList.toggle("dark");
    }

    // CARREGA TEMA LIGHT OU DARK

    function loadTheme() {
        const darkMode = localStorage.getItem("dark");

        if(darkMode){
            toggleDarkMode();
        }
    }

    loadTheme();

    changeThemeBtn.addEventListener("change", function (){
        toggleDarkMode();

    // SALVA OU REMOVE DARK MODE

     localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
         }
    });