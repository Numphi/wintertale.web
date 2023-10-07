function copyToClipboard() {
    navigator.clipboard.writeText('play.wintertale.su');
}

function toMainPage() {
    document.getElementById("right-conteiner-main-content").style.display = 'flex';
    document.getElementById("right-container-rules-content").style.display = 'none';
    document.getElementById("right-container-loyal-content").style.display = 'none';

    document.getElementById("id-top-bar-button-loyal").classList.remove("active-text");
    document.getElementById("id-top-bar-button-loyal").classList.add("passive-text");
    document.getElementById("id-top-bar-button-main").classList.remove("passive-text");
    document.getElementById("id-top-bar-button-main").classList.add("active-text");
    document.getElementById("id-top-bar-button-rules").classList.remove("active-text");
    document.getElementById("id-top-bar-button-rules").classList.add("passive-text");

    document.getElementById("id-top-bar-2button-loyal").classList.remove("active");
    document.getElementById("id-top-bar-2button-loyal").classList.add("passive");
    document.getElementById("id-top-bar-2button-main").classList.remove("passive");
    document.getElementById("id-top-bar-2button-main").classList.add("active");
    document.getElementById("id-top-bar-2button-rules").classList.remove("active");
    document.getElementById("id-top-bar-2button-rules").classList.add("passive");
}

function toRulesPage() {
    document.getElementById("right-conteiner-main-content").style.display = 'none';
    document.getElementById("right-container-rules-content").style.display = 'flex';
    document.getElementById("right-container-loyal-content").style.display = 'none';

    document.getElementById("id-top-bar-button-loyal").classList.remove("active-text");
    document.getElementById("id-top-bar-button-loyal").classList.add("passive-text");
    document.getElementById("id-top-bar-button-main").classList.remove("active-text");
    document.getElementById("id-top-bar-button-main").classList.add("passive-text");
    document.getElementById("id-top-bar-button-rules").classList.remove("passive-text");
    document.getElementById("id-top-bar-button-rules").classList.add("active-text");

    document.getElementById("id-top-bar-2button-loyal").classList.remove("active");
    document.getElementById("id-top-bar-2button-loyal").classList.add("passive");
    document.getElementById("id-top-bar-2button-main").classList.remove("active");
    document.getElementById("id-top-bar-2button-main").classList.add("passive");
    document.getElementById("id-top-bar-2button-rules").classList.remove("passive");
    document.getElementById("id-top-bar-2button-rules").classList.add("active");
}

function toLoyalPage() {
    document.getElementById("right-conteiner-main-content").style.display = 'none';
    document.getElementById("right-container-rules-content").style.display = 'none';
    document.getElementById("right-container-loyal-content").style.display = 'flex';

    document.getElementById("id-top-bar-button-loyal").classList.remove("passive-text");
    document.getElementById("id-top-bar-button-loyal").classList.add("active-text");
    document.getElementById("id-top-bar-button-main").classList.remove("active-text");
    document.getElementById("id-top-bar-button-main").classList.add("passive-text");
    document.getElementById("id-top-bar-button-rules").classList.remove("active-text");
    document.getElementById("id-top-bar-button-rules").classList.add("passive-text");

    document.getElementById("id-top-bar-2button-loyal").classList.remove("passive");
    document.getElementById("id-top-bar-2button-loyal").classList.add("active");
    document.getElementById("id-top-bar-2button-main").classList.remove("active");
    document.getElementById("id-top-bar-2button-main").classList.add("passive");
    document.getElementById("id-top-bar-2button-rules").classList.remove("active");
    document.getElementById("id-top-bar-2button-rules").classList.add("passive");
}

function redirect(link) {
    window.open(link, '_blank').focus();
}
