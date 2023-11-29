//function for retrieving educational history
async function getEducation(){
    let responseEducation = await fetch("/data/education.json");

    if (responseEducation.ok){
        const jsonEducationData = await responseEducation.json();
       
        const mainSlideShowContainer = document.createElement('div');
        mainSlideShowContainer.className = 'mainSlideShowContainer';
        
        //targeting the div inside main
        const mainSlideShow = document.getElementById('slideShow');
        mainSlideShow.appendChild(mainSlideShowContainer);
        

        //looping through the json for extracting each category
        jsonEducationData.educations.forEach(function(education) {
            const educationTile = document.createElement('div');
            educationTile.className = 'educationTile';
            mainSlideShowContainer.appendChild(educationTile)


            const educationTitle = document.createElement('h2');
            educationTitle.className = 'educationTitle';
            educationTitle.textContent = education.educationName;
            educationTile.appendChild(educationTitle);

            const educationDescription = document.createElement('ul');
            educationDescription.className = 'educatoinDescription'
            educationTile.appendChild(educationDescription)

            const schoolName = document.createElement('li');
            schoolName.textContent = education.schoolName;
            educationDescription.appendChild(schoolName);

            const schoolPeriod = document.createElement('li');
            schoolPeriod.textContent = `${education.startDate}-${education.endDate}`;
            educationDescription.appendChild(schoolPeriod);

            const schoolLevel = document.createElement('li');
            schoolLevel.textContent = education.programLevel;
            educationDescription.appendChild(schoolLevel);
        });
        
    } else {
        console.log(responseEducation.status)
    };
};






getEducation();