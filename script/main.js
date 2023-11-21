//function for displaying the about me section
async function getInfoPreview(){
    let responseInfo = await fetch("/data/personalInfo.json")

    if(responseInfo.ok){
        //parsing the personal info json file
        const jsonInfoData = await responseInfo.json();

        //adding a header
        const infoPreviewH2 = document.createElement('h2');
        infoPreviewH2.className = 'infoPreviewH2';
        infoPreviewH2.textContent = 'About Me';

        //targeting the location
        const infoTile = document.getElementById('infoPreview');
        infoTile.appendChild(infoPreviewH2);

        //make a p tag for last name
        const firstName = document.createElement('p');
        const firstNameText = document.createTextNode(jsonInfoData.personalInfo[0].firstName)
        firstName.appendChild(firstNameText);

        //make a p tag for last name
        const lastName = document.createElement('p');
        const lastNameText = document.createTextNode(jsonInfoData.personalInfo[0].lastName)
        lastName.appendChild(lastNameText);

        //make a p tag for place of birth
        const placeOfBirth = document.createElement('p');
        const placeOfBirthText = document.createTextNode(jsonInfoData.personalInfo[0].placeOfBirth)
        placeOfBirth.appendChild(placeOfBirthText);

        //make a p tag for current residency
        const placeOfResidence = document.createElement('p');
        const placeOfResidenceText = document.createTextNode(jsonInfoData.personalInfo[0].placeOfResidence)
        placeOfResidence.appendChild(placeOfResidenceText);

        //make a p tag for the date of birth
        const dateOfBirth = document.createElement('p');
        const dateOfBirthText = document.createTextNode(jsonInfoData.personalInfo[0].dateOfBirth)
        dateOfBirth.appendChild(dateOfBirthText);
        
        //adding the information above to a paragraph 
        const infoPText = document.createElement('p');
        const infoPTextContent = document.createTextNode(`My name is ${firstName.innerHTML} ${lastName.innerHTML}. I was born in ${placeOfBirth.innerHTML} where I grew up and got my first experiences with programming and computers in general. I currently live in ${placeOfResidence.innerHTML}.`);
        infoPText.appendChild(infoPTextContent);

        //aooending the paragraph to the div
        infoTile.appendChild(infoPText);
        
        
    } else{
        //in case the data is not retrieved correctly
        console.log(responseInfo.status)
    }
};


//function for displaying the latest projects
async function getProjects(){
    //arrays for saving jason data in
    let titlesArray = [];
    let affiliation = [];
    let projectsType = [];
    let period =[];
    let endDate = [];
    let programmingLanguage = [];
    


    let responseProject = await fetch("/data/projects.json")
    if(responseProject.ok){
        //parsing the project json data file
        const jsonProjectData = await responseProject.json();

        //targeting the div 
        const previewTiles = document.getElementById('previewTiles');
        
        //creating the first group of tile
        const previewTilesG1 = document.createElement('div');
        previewTilesG1.className = 'previewTilesG1';
        previewTiles.appendChild(previewTilesG1);

        //creating the second group of tiles        
        const previewTilesG2 = document.createElement('div');
        previewTilesG2.className = 'previewTilesG2';
        previewTiles.appendChild(previewTilesG2);

        //creating the first tile in the first group
        const previewTilesG101 = document.createElement('div');
        previewTilesG101.className = 'previewTilesG101';
        previewTilesG1.appendChild(previewTilesG101);

        //creating the second tile in the first group
        const previewTilesG102 = document.createElement('div');
        previewTilesG102.className = 'previewTilesG102';
        previewTilesG1.appendChild(previewTilesG102);

        //creating the first tile in the second group
        const previewTilesG201 = document.createElement('div');
        previewTilesG201.className = 'previewTilesG201';
        previewTilesG2.appendChild(previewTilesG201);

        //creating the second tile in the second group
        const previewTilesG202 = document.createElement('div');
        previewTilesG202.className = 'previewTilesG202';
        previewTilesG2.appendChild(previewTilesG202);


        //function for looping the data file 
        jsonProjectData.projects.forEach(function(project){
            //creating the title 
            const projectTitle = document.createElement('h3');
            projectTitle.className = 'projectTileTitle';
            projectTitle.textContent = project.title;
            titlesArray.push(projectTitle.innerHTML);
            
            
        });

        

        console.log(titlesArray);

    } else {
        console.log(responseProject.status)
    }
}




getInfoPreview();
getProjects();