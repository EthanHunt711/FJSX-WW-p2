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
        mainSlideShowContainerDiv.className = 'mainSlideShowContainerDiv';
        mainSlideShowContainer.appendChild(mainSlideShowContainerDiv);


        //targeting the div inside main
        const mainSlideShow = document.getElementById('slideShow');
        mainSlideShow.appendChild(mainSlideShowContainer);


        

        //looping through the json for extracting each category
        jsonEducationData.educations.forEach(function(education) {
            const educationTile = document.createElement('section');
            educationTile.className = 'educationTile';
            mainSlideShowContainerDiv.appendChild(educationTile);


            const educationTitle = document.createElement('h2');
            educationTitle.className = 'educationTitle';
            educationTitle.textContent = education.educationName;
            educationTile.appendChild(educationTitle);

            const educationDescription = document.createElement('ul');
            educationDescription.className = 'educatoinDescription';
            educationTile.appendChild(educationDescription);

            const schoolName = document.createElement('li');
            schoolName.textContent = education.schoolName;
            educationDescription.appendChild(schoolName);

            const schoolPeriod = document.createElement('li');
            schoolPeriod.textContent = `${education.startDate}-${education.endDate}`;
            educationDescription.appendChild(schoolPeriod);

            const schoolLevel = document.createElement('li');
            schoolLevel.textContent = education.programLevel;
            educationDescription.appendChild(schoolLevel);

            const schoolLocation = document.createElement('li');
            schoolLocation.textContent = education.country;
            educationDescription.appendChild(schoolLocation);

            
        });

        const controls = document.createElement('div');
        controls.className = 'controls';
        mainSlideShowContainer.appendChild(controls);

        const leftArrow = document.createElement('span');
        leftArrow.className = 'leftArrow';
        const leftArrowIcon = document.createElement('i');
        leftArrowIcon.className = "fa-solid fa-angle-left";
        leftArrow.appendChild(leftArrowIcon);
        controls.appendChild(leftArrow);

        const rightArrow = document.createElement('span');
        rightArrow.className = 'rightArrow';
        const rightArrowIcon = document.createElement('i');
        rightArrowIcon.className = "fa-solid fa-angle-right";
        rightArrow.appendChild(rightArrowIcon);
        controls.appendChild(rightArrow);

        
    } else {
        console.log(responseEducation.status);
    };

    
    const slider = document.querySelector('.mainSlideShowContainerDiv');
    let numberOfSlides = slider.children.length;
    
    const leftArrowSlide = document.querySelector('.leftArrow');
   
    const rightArrowSlide = document.querySelector('.rightArrow');

    let sectionIndex = 0;

    rightArrowSlide.addEventListener('click', function(){
        sectionIndex = (sectionIndex < (numberOfSlides - 1) ) ? sectionIndex + 1 : (numberOfSlides - 1);
        slider.style.transform = 'translate(' + (sectionIndex) * -14.3 + '%)';    
    });

    leftArrowSlide.addEventListener('click', function(){
        sectionIndex = (sectionIndex > 0 ) ? sectionIndex - 1 : 0;
        slider.style.transform = 'translate(' + (sectionIndex) * -14.3 + '%)';    
    });




};

getEducation();





// // function slideShow(){
// //     const mainSlideShowContainerDiv = document.querySelector('.mainSlideShowContainerDiv');

// //     const leftArrow = document.querySelector('.leftArrow');
// //     const rightArrow = document.querySelector('.rightArrow');

// //     rightArrow.addEventListener('click', function(){
// //         console.log('got it')
// //     });



// // };


// // slideShow();