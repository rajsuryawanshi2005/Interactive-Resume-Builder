document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const languages = document.getElementById('languages').value;
    const template = document.getElementById('template').value;

    const photoInput = document.getElementById('photo');
    const photo = photoInput.files[0] ? URL.createObjectURL(photoInput.files[0]) : '';

    // Create resume content
    let resumeContent = `
        <div class="resume-header">
            <div class="resume-info">
            <div class="resume-photo">
                <img src="${photo}" alt="Profile Photo" style="max-width: 150px; border-radius: 50%;">
            </div>
                <h2>${name}</h2>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Email:</strong> ${email}</p>
                <h3>Work Experience:</h3>
                <p>${experience}</p>
                <h3>Education:</h3>
                <p>${education}</p>
                <h3>Skills:</h3>
                <p>${skills}</p>
                <h3>Languages:</h3>
                <p>${languages}</p>
            </div>
            
        </div>
    `;

    if (template === "template1") {
        document.getElementById('resume-output').style.backgroundColor = "#f0f0f0";
        document.getElementById('resume-output').style.padding = "20px";
    } else if (template === "template2") {
        document.getElementById('resume-output').style.backgroundColor = "#e0e0e0";
        document.getElementById('resume-output').style.padding = "30px";
    }

    // Show the resume output
    document.getElementById('resume-output').innerHTML = resumeContent;

    // Show the download button
    document.getElementById('download-btn').style.display = "block";
});

// Download resume
document.getElementById('download-btn').addEventListener('click', function() {
    const resumeContent = document.getElementById('resume-output').innerText;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.txt';
    link.click();
});
