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


        for (var i = jsonProjectData.projects.length - 1; i >= jsonProjectData.projects.length -4; i--){
            
            var obj = jsonProjectData.projects[i];
            console.log(obj);
            
            // //create tile
            // const projectsTile = document.createElement('div');
            // projectsTile.className = 'projectsTile';
            
            // //create tile title
            // const projectsTileTitle = document.createElement('div');
            // projectsTileTitle.className = 'projectsTileTitle';
            // projectsTileTitle.textContent = project.title;
            // projectsTile.appendChild(projectsTileTitle);

            // //create elemets list
            // const projectTileDescription = document.createElement('ul');
            // projectTileDescription.className = 'projecctTileDescription';
            // projectsTile.appendChild(projectTileDescription);

            // //Affiliation
            // const affiliationDescription = document.createElement('li');
            // affiliationDescription.textContent = `Project Manager: ${project.affiliation}`;

            // //Type of projects
            // projectTileDescription.appendChild(affiliationDescription);
            // const projectTypeDescription = document.createElement('li');
            // projectTypeDescription.textContent = `Project Type: ${project.projectsType}`;

            // // the last update
            // projectTileDescription.appendChild(projectTypeDescription);
            // const endDateDescription = document.createElement('li');
            // endDateDescription.textContent = `Last Update: ${project.endDate}`;

            // //Programming Language used
            // projectTileDescription.appendChild(endDateDescription);
            // const programmingLanguageDescription = document.createElement('li');
            // programmingLanguageDescription.textContent = `Programming Language: ${project.programmingLanguage}`;
            // projectTileDescription.appendChild(programmingLanguageDescription);
            
            // console.log(projectsTile);
            // previewTiles.appendChild(projectsTile);
        };

        //function for looping the data file 
        // jsonProjectData.projects.forEach(function(project){
            
        //     //create tile
        //     const projectsTile = document.createElement('div');
        //     projectsTile.className = 'projectsTile';
            
        //     //create tile title
        //     const projectsTileTitle = document.createElement('div');
        //     projectsTileTitle.className = 'projectsTileTitle';
        //     projectsTileTitle.textContent = project.title;
        //     projectsTile.appendChild(projectsTileTitle);

        //     //create elemets list
        //     const projectTileDescription = document.createElement('ul');
        //     projectTileDescription.className = 'projecctTileDescription';
        //     projectsTile.appendChild(projectTileDescription);

        //     //Affiliation
        //     const affiliationDescription = document.createElement('li');
        //     affiliationDescription.textContent = `Project Manager: ${project.affiliation}`;

        //     //Type of projects
        //     projectTileDescription.appendChild(affiliationDescription);
        //     const projectTypeDescription = document.createElement('li');
        //     projectTypeDescription.textContent = `Project Type: ${project.projectsType}`;

        //     // the last update
        //     projectTileDescription.appendChild(projectTypeDescription);
        //     const endDateDescription = document.createElement('li');
        //     endDateDescription.textContent = `Last Update: ${project.endDate}`;

        //     //Programming Language used
        //     projectTileDescription.appendChild(endDateDescription);
        //     const programmingLanguageDescription = document.createElement('li');
        //     programmingLanguageDescription.textContent = `Programming Language: ${project.programmingLanguage}`;
        //     projectTileDescription.appendChild(programmingLanguageDescription);
            
        //     console.log(projectsTile);
        //     previewTiles.appendChild(projectsTile);
        // });

        
        // //creating the first group of tile
        // const previewTilesG1 = document.createElement('div');
        // previewTilesG1.className = 'previewTilesG1';
        // previewTiles.appendChild(previewTilesG1);

        // //creating the second group of tiles        
        // const previewTilesG2 = document.createElement('div');
        // previewTilesG2.className = 'previewTilesG2';
        // previewTiles.appendChild(previewTilesG2);

        // //creating the first tile in the first group
        // const previewTilesG101 = document.createElement('div');
        // previewTilesG101.className = 'previewTilesG101';
        // previewTilesG1.appendChild(previewTilesG101);
        // // previewTilesG101.appendChild(document.getElementById('projectsTile6'));
        
       
        

        // //creating the second tile in the first group
        // const previewTilesG102 = document.createElement('div');
        // previewTilesG102.className = 'previewTilesG102';
        // previewTilesG1.appendChild(previewTilesG102);
        // // previewTilesG102.appendChild(document.getElementById('projectsTile5'));
        

        // //creating the first tile in the second group
        // const previewTilesG201 = document.createElement('div');
        // previewTilesG201.className = 'previewTilesG201';
        // previewTilesG2.appendChild(previewTilesG201);
        // // previewTilesG201.appendChild(document.getElementById('projectsTile4'));
        

        // //creating the second tile in the second group
        // const previewTilesG202 = document.createElement('div');
        // previewTilesG202.className = 'previewTilesG202';
        // previewTilesG2.appendChild(previewTilesG202);
        // // previewTilesG202.appendChild(document.getElementById('projectsTile3'));
        

        

        

        

    } else {
        console.log(responseProject.status)
    }
}




getInfoPreview();
getProjects();