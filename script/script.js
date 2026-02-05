window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if(includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200)
                    el.outerHTML = this.responseText;
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

// Copy email to clipboard
function copyEmail() {
    const email = "korhary@gmail.com";
    navigator.clipboard.writeText(email).then(function() {
        alert("Email copied to clipboard!");
    }).catch(function(err) {
        console.error("Failed to copy:", err);
    });
}

// Scroll projects carousel
function scrollProjects(containerId, direction) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const card = container.querySelector('.project_card');
    const style = card ? window.getComputedStyle(card) : null;
    const gap = style ? parseInt(window.getComputedStyle(container).columnGap || 20) : 20;
    const cardWidth = card ? (card.offsetWidth + gap) : Math.floor(container.clientWidth * 0.8);
    container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

// Optional: support keyboard left/right when focused
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        scrollProjects('projects_scroll', -1);
    } else if (e.key === 'ArrowRight') {
        scrollProjects('projects_scroll', 1);
    }
});