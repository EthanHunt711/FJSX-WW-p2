//function for retrieving educational history
async function getWorkExperience(){
    // fetch the json file
    let responseEducation = await fetch("./data/workExperience.json");
    // check if the json is connected
    if (responseEducation.ok){
        const jsonEducationData = await responseEducation.json();
       
        // the carousel
        const mainSlideShowContainer = document.createElement('div');
        mainSlideShowContainer.className = 'mainSlideShowContainer';
        
        //the slider
        const mainSlideShowContainerDiv = document.createElement('div');
        mainSlideShowContainerDiv.className = 'mainSlideShowContainerDiv';
        mainSlideShowContainer.appendChild(mainSlideShowContainerDiv);


        //targeting the div inside main
        const mainSlideShow = document.getElementById('slideShow');
        mainSlideShow.appendChild(mainSlideShowContainer);


        

        //looping through the json for extracting each category
        jsonEducationData.workExperiences.forEach(function(workExperience) {
            // create sections for the slides
            const workExperienceTile = document.createElement('section');
            workExperienceTile.className = 'workExperienceTile';
            mainSlideShowContainerDiv.appendChild(workExperienceTile);

            // slide title
            const workExperienceTitle = document.createElement('h2');
            workExperienceTitle.className = 'educationTitle';
            workExperienceTitle.textContent = workExperience.jobTitle;
            workExperienceTile.appendChild(workExperienceTitle);

            // slide description list
            const workExperienceDescription = document.createElement('ul');
            workExperienceDescription.className = 'workExperienceDescription';
            workExperienceTile.appendChild(workExperienceDescription);

            // job position
            const workExperienceName = document.createElement('li');
            workExperienceName.textContent = workExperience.position;
            workExperienceDescription.appendChild(workExperienceName);

            // working period
            const workExperiencePeriod = document.createElement('li');
            workExperiencePeriod.textContent = `${workExperience.startDate}-${workExperience.endDate}`;
            workExperienceDescription.appendChild(workExperiencePeriod);

            // location 
            const workExperienceLocation = document.createElement('li');
            workExperienceLocation.textContent = workExperience.country;
            workExperienceDescription.appendChild(workExperienceLocation);

            
        });

        // div for controlling the slides
        const controls = document.createElement('div');
        controls.className = 'controls';
        mainSlideShowContainer.appendChild(controls);

        // creating the left arrow
        const leftArrow = document.createElement('span');
        leftArrow.className = 'leftArrow';
        // appending the icon 
        const leftArrowIcon = document.createElement('i');
        leftArrowIcon.className = "fa-solid fa-angle-left";
        leftArrow.appendChild(leftArrowIcon);
        //appending the arrow
        controls.appendChild(leftArrow);

        //creating the right arrow
        const rightArrow = document.createElement('span');
        rightArrow.className = 'rightArrow';
        //appending the icon
        const rightArrowIcon = document.createElement('i');
        rightArrowIcon.className = "fa-solid fa-angle-right";
        rightArrow.appendChild(rightArrowIcon);
        //appending the arrow
        controls.appendChild(rightArrow);

        
    } else {
        console.log(responseEducation.status);
    };

    //creating the slider
    const slider = document.querySelector('.mainSlideShowContainerDiv');
    // counting the number of slides
    let numberOfSlides = slider.children.length;
    
    
    //selection of left arrow
    const leftArrowSlide = document.querySelector('.leftArrow');
   //selection of right arrow
    const rightArrowSlide = document.querySelector('.rightArrow');
    // counter for arrows to make stops at both ends
    let sectionIndex = 0;
    // listener for clicks and counting right arrow
    rightArrowSlide.addEventListener('click', function(){
        sectionIndex = (sectionIndex < (numberOfSlides - 1) ) ? sectionIndex + 1 : (numberOfSlides - 1);
        slider.style.transform = 'translate(' + (sectionIndex) * -100/numberOfSlides + '%)';    
    });
    // listener for clicks and counting left arrow
    leftArrowSlide.addEventListener('click', function(){
        sectionIndex = (sectionIndex > 0 ) ? sectionIndex - 1 : 0;
        slider.style.transform = 'translate(' + (sectionIndex) * -100/numberOfSlides + '%)';    
    });

};

// running the function
getWorkExperience();
