
document.getElementById("questionnaireForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission -- looked this up

    //collects formData
    const formData = new FormData(this);

    // storing the enteries
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
    }
    
    alert("Form Submitted! (This is just for pretend, I didnt actually go this far )");
});