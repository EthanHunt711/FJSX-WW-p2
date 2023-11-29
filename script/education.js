//function for retrieving educational history
async function getEducation(){
    let responseEducation = await fetch("/data/education.json");

    if (responseEducation.ok){
        const jsonEducationData = await responseEducation.json();
       
        // the carousel
        const mainSlideShowContainer = document.createElement('div');
        mainSlideShowContainer.className = 'mainSlideShowContainer';
        
        //the slider
        const mainSlideShowContainerDiv = document.createElement('div');
        mainSlideShowContainerDiv.className = 'mainSlideShowContainerDiv'
        mainSlideShowContainer.appendChild(mainSlideShowContainerDiv)


        //targeting the div inside main
        const mainSlideShow = document.getElementById('slideShow');
        mainSlideShow.appendChild(mainSlideShowContainer);


        

        //looping through the json for extracting each category
        jsonEducationData.educations.forEach(function(education) {
            const educationTile = document.createElement('section');
            educationTile.className = 'educationTile';
            mainSlideShowContainerDiv.appendChild(educationTile)


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

        const controls = document.createElement('div');
        controls.className = 'controls';
        mainSlideShowContainer.appendChild(controls)

        const leftArrow = document.createElement('span');
        leftArrow.className = 'leftArrow'
        leftArrow.textContent = 'Left'
        controls.appendChild(leftArrow);

        const rightArrow = document.createElement('span');
        rightArrow.className = 'rightArrow'
        rightArrow.textContent = 'Right'
        controls.appendChild(rightArrow);

        
    } else {
        console.log(responseEducation.status)
    };
};






getEducation();