'use strict';

function handleSubmit(event) {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Select an SVG file');
        return false;
    }
    
    const reader = new FileReader();
    
    reader.onload = function (event) {
        const svgContent = event.target.result;
        const svgCodeContainer = document.getElementById('svgCodeContainer');
        svgCodeContainer.textContent = svgContent;
    };
    
    reader.readAsText(file);
    
    // Display message
    const msg = document.getElementById("svgCodeContainerData");
    msg.innerHTML = "If you cannot find the <span>'fill='</span> property inside the <span>'path'</span> element, please copy and paste the following line under the <span>'path'</span> element and add your desired color: <span>fill=\"your_color_here\".</span>";

    return false;
}
