function copyToClipboard () {
    navigator.clipboard.writeText('play.wintertale.su');
}

function toMainPage() {
    document.getElementById("right-conteiner-main-content").style.display = 'flex';
    document.getElementById("right-container-rules-content").style.display = 'none';
    document.getElementById("right-container-loyal-content").style.display = 'none';
}

function toRulesPage() {
    document.getElementById("right-conteiner-main-content").style.display = 'none';
    document.getElementById("right-container-rules-content").style.display = 'flex';
    document.getElementById("right-container-loyal-content").style.display = 'none';
}

function toLoyalPage() {
    document.getElementById("right-conteiner-main-content").style.display = 'none';
    document.getElementById("right-container-rules-content").style.display = 'none';
    document.getElementById("right-container-loyal-content").style.display = 'flex';
}

function redirect(link) {
    window.open(link, '_blank').focus();
}
