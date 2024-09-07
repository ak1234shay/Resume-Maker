const jobDesignations = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "Marketing Manager",
    "Sales Manager",
    "Business Analyst",
    "Financial Analyst",
    "HR Manager",
    "Operations Manager",
    "Project Manager",
    "Accountant",
    "Customer Service Executive",
    "Content Writer",
    "Graphic Designer",
    "UX/UI Designer",
    "Digital Marketing Executive",
    "SEO Specialist",
    "Software Developer",
    "Network Engineer",
    "System Administrator",
    "Database Administrator",
    "Technical Support Engineer",
    "Quality Assurance Engineer",
    "Mechanical Engineer",
    "Electrical Engineer",
    "Civil Engineer",
    "Chemical Engineer",
    "Architect",
    "Doctor",
    "Nurse",
    "Pharmacist",
    "Teacher",
    "Lecturer",
    "Professor",
    "Research Scientist",
    "Lab Technician",
    "Physiotherapist",
    "Dentist",
    "Chartered Accountant",
    "Investment Banker",
    "Lawyer",
    "Legal Advisor",
    "Journalist",
    "Reporter",
    "Editor",
    "Public Relations Manager",
    "Event Manager",
    "Hotel Manager",
    "Travel Agent",
    "Chef",
    "Restaurant Manager",
    "Airline Pilot",
    "Cabin Crew",
    "Logistics Manager",
    "Supply Chain Manager",
    "Procurement Manager",
    "Store Manager",
    "Retail Manager",
    "Fashion Designer",
    "Interior Designer",
    "Real Estate Agent",
    "Insurance Agent",
    "Bank Manager",
    "Branch Manager",
    "Loan Officer",
    "Credit Analyst",
    "Stock Broker",
    "Mutual Fund Advisor",
    "Risk Manager",
    "Compliance Officer",
    "Actuary",
    "Telecom Engineer",
    "Embedded Systems Engineer",
    "Automation Engineer",
    "AI/ML Engineer",
    "Blockchain Developer",
    "Cyber Security Analyst",
    "Cloud Solutions Architect",
    "IT Consultant",
    "Technical Writer",
    "Medical Representative",
    "Biotechnologist",
    "Microbiologist",
    "Environmental Engineer",
    "Geologist",
    "Urban Planner",
    "Social Media Manager",
    "Advertising Manager",
    "Brand Manager",
    "Art Director",
    "Video Editor",
    "Sound Engineer",
    "Animator",
    "Game Developer",
    "Fitness Trainer",
    "Dietitian",
    "Personal Assistant",
    "Executive Assistant",
    "Receptionist",
    "Office Administrator",
    "Security Officer",
    "Safety Officer"
];

const successful = document.querySelector(".submissionDone")  // to show details submitted succefully
const completed = () => {
  successful.classList.remove("hidden")
  setTimeout(() => {
    successful.classList.add("hidden")
  }, 600);
}

const deleted = document.querySelector(".deleteDone")
const removing = ()=>{
    deleted.classList.remove("hidden")
    console.log("delete Done")
    setTimeout(() => {
    deleted.classList.add("hidden")        
    }, 600);
}
//personal details
//input
const designation = document.querySelector("#designationInput")
const desResult = document.querySelector("#desResult")
const username = document.querySelector("#nameInput")
const phoneNumber = document.querySelector("#phoneNumberInput")
const email = document.querySelector("#emailInput")
const submitPersonal = document.querySelector("#submit-personal")
//show
const showName = document.querySelector("#pdfName")
const showDesignation = document.querySelector("#pdfDesignation")
const showNumber = document.querySelector("#pdfPhoneNumber")
const showEmail = document.querySelector("#pdfEmail")


const submitPersonalDetails = () => {
    showDesignation.innerText = designation.value ? designation.value : "Designation"
    showName.innerText = username.value ? username.value : "Name"
    showEmail.innerText = email.value ? email.value : "Email"
    showNumber.innerText = phoneNumber.value ? phoneNumber.value : "Phone Number"
}

submitPersonal.addEventListener("click", () => {
    submitPersonalDetails()
    completed()
})


const summaryInput = document.querySelector("#summaryInput")
const showSummary = document.querySelector(".summarypdf")

summaryInput.addEventListener("input", (e) => {
    showSummary.innerText = e.target.value
})



let count = 0;

const addCompany = document.querySelector(".addNewSection")
const companies = document.querySelector(".companyList")
const showEmployeement = document.querySelector(".employeementPdf")

addCompany.addEventListener("click", () => {
    count++
    const company = document.createElement("div")
    company.innerHTML = `<div class="personal-details employeeBox">
    <div class="inputManager">
        <span> Job Title</span>
        <input type="text" class="jobTitle${count}">
    </div>

    <div class="inputManager">
        <span> Employer </span>
        <input type="text" class="company${count}"> 
    </div>
    <div class="start-end-date">
        <div class="">
            <span >Start Date</span>
            <input type="date" name="" class="startDate${count}">
        </div>
        <div class="">
            <span >End Date</span>
            <input type="date" name="" class="endDate${count}">
        </div>
    </div>
    <div class="inputManager">
        <span> City</span>
        <input type="text" class="companyCity${count}">
    </div>
    <div class=inputManager> 
        <span> Job Responsibilities</span>
        <textarea class="jobDescription${count}"></textarea>
        </div>
        <button class="submit${count} submit"> submit </button>
    <button class="cross${count} cross "> x </button>
</div>

`
    companies.appendChild(company)

    const jobTitle = document.querySelector(`.jobTitle${count}`)
    const companyName = document.querySelector(`.company${count}`)
    const companyCity = document.querySelector(`.companyCity${count}`)
    const jobDiscript = document.querySelector(`.jobDescription${count}`)
    const startDate = document.querySelector(`.startDate${count}`)
    const endDate = document.querySelector(`.endDate${count}`)


    const submitJob = document.querySelector(`.submit${count}`)

    let isappended = true;
    const employement = document.createElement("div")
    submitJob.addEventListener("click", () => {
        console.log(jobTitle.value)
        completed()
        employement.innerHTML = `
         <div class="employeeManage">
              <h3 id="employerpdf"> ${companyName.value}</h3>
             <span id="cityPdf"> ${companyCity.value}</span>
         </div>
        <div class="employeeManage">
            <h5 id="designationPdf">${jobTitle.value}</h5>
            <span id="datePdf"> (${startDate.value} to ${endDate.value} )</span>
        </div>
        <div id="descriptionPdf">
            ${jobDiscript.value}
        </div>
    `

        if (isappended == true) {
            showEmployeement.appendChild(employement)
            isappended = false
        }
    })
    const cross = document.querySelector(`.cross${count}`)
    cross.addEventListener("click", () => {
        company.style.display = "none"
        console.log("hello")
        employement.style.display = "none"
        removing()
    })

})

const addEducation = document.querySelector(".newEducation")
const educations = document.querySelector(".educationList")
const showEduction = document.querySelector(".eduactionPdf")
addEducation.addEventListener("click", () => {
    count++
    const education = document.createElement("div")
    education.innerHTML = `<div class="personal-details employeeBox">
    <div class="inputManager">
        <span> University</span>
        <input type="text" class="university${count} ">
    </div>
    <div class="inputManager">
        <span> Degree </span>
        <input type="text" class="Degree${count} "> 
    </div>
    <div class="start-end-date">
        <div class="">
            <span >Start Date</span>
            <input type="date" name="" class="startDate${count} ">
        </div>
        <div class="">
            <span >End Date</span>
            <input type="date" name="" class="endDate${count} ">
        </div>
    </div>
    <div class="inputManager">
        <span> City</span>
        <input type="text" class="collegeCity${count} ">
    </div>
    <div class=inputManager> 
        <span> Write your achievements and Extra-curricular activities </span>
        <textarea class="learnDescription${count}"></textarea>
    </div>
    <button class="submit${count} submit"> submit </button>


    <button class="cross${count} cross "> X </button>
</div>


`
    educations.appendChild(education)
    const submitClass = document.querySelector(`.submit${count}`)
    const university = document.querySelector(`.university${count}`)
    const degree = document.querySelector(`.Degree${count}`)
    const startDate = document.querySelector(`.startDate${count}`)
    const endDate = document.querySelector(`.endDate${count}`)
    const collegeCity = document.querySelector(`.collegeCity${count}`)
    const educationDescr = document.querySelector(`.learnDescription${count}`)

    const educationAdded = document.createElement("div")

    submitClass.addEventListener("click", () => {
        completed()
        console.log("submission hit")
        educationAdded.innerHTML = `
    <div class="employeeManage">
        <h3 id="employerpdf"> ${degree.value}</h3>
        <span id="cityPdf"> ${collegeCity.value}</span>
    
    </div>
    <div class="employeeManage">
        <h5 id="designationPdf">${university.value}</h5>
        <span id="datePdf"> (${startDate.value} to ${endDate.value} )</span>
    </div>
    <div id="descriptionPdf">
        ${educationDescr.value}
    </div>
    `

        console.log("hello")
        showEduction.appendChild(educationAdded)
    })
    const cross = document.querySelector(`.cross${count}`)
    cross.addEventListener("click", () => {
        education.style.display = "none"
        console.log("hello")
        educationAdded.style.display = "none"
        removing()
    })
})

const addSocialLink = document.querySelector(".addSocialLink")
const SocialLinks = document.querySelector(".socialLinks")
const showSocial = document.querySelector(".socialPdf")
addSocialLink.addEventListener("click", () => {
    count++
    const socialLink = document.createElement("div")
    socialLink.innerHTML = `
    <div class="employeeBox personal-details">
        <div class="inputManager">
           <span> Label </span>
           <input class="socialName${count}" type"text"/>
        </div>
        <div class="inputManager">
            <span> Link </span>
            <input class="socialLink${count}" type"text"/>
        </div>
        <button class="submit${count} submit"> submit </button>
    <button class="cross${count} cross "> X </button>

    </div>
    `
    SocialLinks.appendChild(socialLink)
    const  socialLable = document.querySelector(`.socialName${count}`)
    const  linkForLable= document.querySelector(`.socialLink${count}`)
    const submitSocial = document.querySelector(`.submit${count}`)
    const socialAdded =document.createElement("div")
    submitSocial.addEventListener("click",()=>{
        console.log("hello")
        socialAdded.innerHTML=`
        <div > 
        <a target="_blank" href="${linkForLable.value}"> ${socialLable.value}</a>
        </div>
        ` 
        // console.log(socialLable,socialLable.value, "lable")
        completed()
        showSocial.appendChild(socialAdded)
    })


    const cross = document.querySelector(`.cross${count}`)
    cross.addEventListener("click", () => {
        socialLink.style.display = "none"
        console.log("hello")
        removing()
    })
})


const addProject = document.querySelector(".addProject")
const projects = document.querySelector(".projects")
const showProject = document.querySelector(".projectsPdf")
addProject.addEventListener("click", () => {
    count++
    const project = document.createElement("div")
    project.innerHTML =
        `<div class="personal-details employeeBox">
             <div class="inputManager">
                <span> Project Title</span>
                <input type="text" class="projectTitle${count}">
            </div>

            <div class="inputManager">
                <span> Project Link </span>
                <span class="additionalInfo" > This link is attached to the title directly </span>
                <input type="text" class="projectLink${count}" />
            </div>
    
            <div  class="inputManager" >
                <span> Tools used in Projects</span>
                <input type="text" class="projectTools${count}">
            </div>
    
            <div class="inputManager projectDesc" > 
                <span> Project Description</span>
                <textarea class="jobDescription projectDescription${count}" ></textarea>
            </div>
            <button class="submit${count} submit"> Submit </button> 
            <button class="cross${count} cross "> X </button>
        </div>
    `
    projects.appendChild(project)
    const submitProjects = document.querySelector(`.submit${count}`)
    const projectTitle = document.querySelector(`.projectTitle${count}`)
    const projectLink = document.querySelector(`.projectLink${count}`)
    const projectTools = document.querySelector(`.projectTools${count}`)
    const projectDescription = document.querySelector(`.projectDescription${count}`)
    const projectAdded = document.createElement("div")
    submitProjects.addEventListener("click", ()=>{
        projectAdded.innerHTML =`
         <div>
                <h3 > <a class= "projectTitle" target="_blank" href=${projectLink.value}>  ${projectTitle.value}</a> </h3>
         </div>
         <div>
             <p>  ${projectTools.value} </p>
         </div>
         <div>
            <p> ${projectDescription.value}
         </div>
        `
        completed()

        showProject.appendChild(projectAdded)
    })





    const cross = document.querySelector(`.cross${count}`)
    cross.addEventListener("click", () => {
        project.style.display = "none"
        console.log("hello")
        removing()
    })
})


designation.addEventListener("input", (e) => {
    const inserted = e.target.value.toLowerCase()
    desResult.innerHTML = ''
    desResult.style.display = "block"
    if (inserted) {
        let selected = jobDesignations.filter((val) => {
            return val.toLowerCase().includes(inserted)
        })

        if (selected.length > 0) {
            selected.forEach((val) => {
                const suggested = document.createElement("div")
                suggested.innerText = val
                desResult.appendChild(suggested)
                suggested.addEventListener("click", () => {
                    designation.value = suggested.innerText
                    desResult.style.display = "none"
                })
            })
        }
    }
})

const previewPdf = document.querySelector("#previewPdf")
previewPdf.addEventListener("click", ()=>{
    console.log("hello")
})



var element = document.querySelector('.resumePdfPage');

document.getElementById('downloadPdf').addEventListener('click', function () {
    var element = document.querySelector('.resumePdfPage');

    var clone = element.cloneNode(true);
    clone.style.width = '200mm'; // Set the width to A2 size in mm
    clone.style.margin = 'auto';
    document.body.appendChild(clone);

   
    

     // Determine the height of the cloned element
     var height = clone.offsetHeight;
     var heightInMm = height * 0.264583; // Convert px to mm

    setTimeout(() => {
        
     // Calculate the content height in mm
     var contentHeightMm = clone.scrollHeight * 0.264583;

     // Determine the- format based on content height
     if (contentHeightMm > 297 ){
        formatted = "a3"
        clone.style.width= "280mm"
     } else{
        formatted= "a4"
     }
     
     
     console.log(contentHeightMm)

    var opt = {
        margin: [4, 4, 4, 4], // [top, left, bottom, right] margins in mm
        filename: 'content.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: formatted, orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(clone).save().then(
        function () {
            document.body.removeChild(clone);
        }
    )
}, 100);

});


const fontColor = document.querySelector("#fontColorSet")
fontColor.addEventListener("input", (e) => {
    element.style.color = e.target.value
})

