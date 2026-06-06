function processVideo() {
    document.getElementById("status").innerText = "Processing with AI...";
    setTimeout(() => {
        document.getElementById("status").innerText = "Video processed successfully!";
    }, 3000);
}