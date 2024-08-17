function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Find the copy button's parent element
    const copyButton = document.querySelector('.copy-button');
    
    // Create the "Copied!" message
    const copiedMessage = document.createElement('span');
    copiedMessage.innerText = 'Copied!';
    copiedMessage.className = 'copied-message';
    copyButton.parentNode.insertBefore(copiedMessage, copyButton.nextSibling);

    // Remove the "Copied!" message after 2 seconds
    setTimeout(() => {
        copiedMessage.remove();
    }, 2000);
}

// JavaScript to handle popup and blur effect

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var img = document.getElementById("popup-img");
    var span = document.getElementsByClassName("close")[0];

    document.querySelector(".highlight-text").addEventListener("click", function() {
        popup.style.display = "block";
        document.body.classList.add("blur-background");
    });

    span.onclick = function() {
        popup.style.display = "none";
        document.body.classList.remove("blur-background");
    };

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            document.body.classList.remove("blur-background");
        }
    };
});
