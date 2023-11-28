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
    // counter for making id
 

    let responseProject = await fetch("/data/projects.json")
    if(responseProject.ok){
        //parsing the project json data file
        const jsonProjectData = await responseProject.json();

        //targeting the div 
        const previewTiles = document.getElementById('previewTiles');
        
        //create the first group
        const previewTilesG1 = document.createElement('div');
        previewTilesG1.className = 'previewTilesG1'
        previewTiles.appendChild(previewTilesG1);


        for (var i = jsonProjectData.projects.length - 1; i >= jsonProjectData.projects.length -2; i--){
            
            var project = jsonProjectData.projects[i];
            console.log(i, project);

            //constructing upper tiles
            const upperTiles = document.createElement('div');
            upperTiles.className = `previewTilesG10${i}`;
            previewTilesG1.appendChild(upperTiles);

            const tileTiltle = document.createElement('div');
            tileTiltle.id = `upperTile${i}`
            tileTiltle.textContent = project.title;
            upperTiles.appendChild(tileTiltle);
            

            const tileDescription = document.createElement('ul');
            tileDescription.className = 'tileDescription';
            upperTiles.appendChild(tileDescription);

            const projectManager = document.createElement('li');
            projectManager.className = 'projectManager';
            projectManager.textContent = `Manager: ${project.affiliation}`;
            tileDescription.appendChild(projectManager);
            
            const projectType = document.createElement('li');
            projectType.className = 'projectType';
            projectType.textContent = `Project Type: ${project.projectsType}`;
            tileDescription.appendChild(projectType);

            const projectEndDate = document.createElement('li');
            projectEndDate.className = 'projectEndDate';
            projectEndDate.textContent = `Completed in ${project.endDate}`;
            tileDescription.appendChild(projectEndDate);

            const projectProgrammingLanguage = document.createElement('li');
            projectProgrammingLanguage.className = 'programmingLanguage';
            projectProgrammingLanguage.textContent = `Language: ${project.programmingLanguage}`;
            tileDescription.appendChild(projectProgrammingLanguage);


        };

        //create the first group
        const previewTilesG2 = document.createElement('div');
        previewTilesG2.className = 'previewTilesG1'
        previewTiles.appendChild(previewTilesG2);
        
        for (var i = jsonProjectData.projects.length - 3; i >= jsonProjectData.projects.length -4; i--){
            
            var project = jsonProjectData.projects[i];
            console.log(i, project);

            //constructing lower tiles
            const upperTiles = document.createElement('div');
            upperTiles.className = `previewTilesG20${i}`;
            previewTilesG2.appendChild(upperTiles);

            const tileTiltle = document.createElement('div');
            tileTiltle.id = `upperTile${i}`
            tileTiltle.textContent = project.title;
            upperTiles.appendChild(tileTiltle);
            

            const tileDescription = document.createElement('ul');
            tileDescription.className = 'tileDescription';
            upperTiles.appendChild(tileDescription);

            const projectManager = document.createElement('li');
            projectManager.className = 'projectManager';
            projectManager.textContent = `Manager: ${project.affiliation}`;
            tileDescription.appendChild(projectManager);
            
            const projectType = document.createElement('li');
            projectType.className = 'projectType';
            projectType.textContent = `Project Type: ${project.projectsType}`;
            tileDescription.appendChild(projectType);

            const projectEndDate = document.createElement('li');
            projectEndDate.className = 'projectEndDate';
            projectEndDate.textContent = `Completed in ${project.endDate}`;
            tileDescription.appendChild(projectEndDate);

            const projectProgrammingLanguage = document.createElement('li');
            projectProgrammingLanguage.className = 'programmingLanguage';
            projectProgrammingLanguage.textContent = `Language: ${project.programmingLanguage}`;
            tileDescription.appendChild(projectProgrammingLanguage);

        };
        

        

        

    } else {
        console.log(responseProject.status)
    }
}




getInfoPreview();
getProjects();