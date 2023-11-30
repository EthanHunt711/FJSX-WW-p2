//function for retrieving educational history
async function getEducation(){
    // fetch the json file
    let responseEducation = await fetch("./data/education.json");
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
        jsonEducationData.educations.forEach(function(education) {
            // create sections for the slides
            const educationTile = document.createElement('section');
            educationTile.className = 'educationTile';
            mainSlideShowContainerDiv.appendChild(educationTile);

            // slide title
            const educationTitle = document.createElement('h2');
            educationTitle.className = 'educationTitle';
            educationTitle.textContent = education.educationName;
            educationTile.appendChild(educationTitle);

            // slide description list
            const educationDescription = document.createElement('ul');
            educationDescription.className = 'educatoinDescription';
            educationTile.appendChild(educationDescription);

            // name of the education center
            const schoolName = document.createElement('li');
            schoolName.textContent = education.schoolName;
            educationDescription.appendChild(schoolName);

            // the period of the education
            const schoolPeriod = document.createElement('li');
            schoolPeriod.textContent = `${education.startDate}-${education.endDate}`;
            educationDescription.appendChild(schoolPeriod);

            // the level of the education
            const schoolLevel = document.createElement('li');
            schoolLevel.textContent = education.programLevel;
            educationDescription.appendChild(schoolLevel);

            // the location of the education
            const schoolLocation = document.createElement('li');
            schoolLocation.textContent = education.country;
            educationDescription.appendChild(schoolLocation);

            
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
getEducation();




