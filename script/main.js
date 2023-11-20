async function getInfoPreview(){
    let responseInfo = await fetch("/data/personalInfo.json")

    if(responseInfo.ok){
        const jsonInfoData = await responseInfo.json();

        const infoPreviewH2 = document.createElement('h2');
        infoPreviewH2.className = 'infoPreviewH2';
        infoPreviewH2.textContent = 'About Me';

        const infoTile = document.getElementById('infoPreview');
        infoTile.appendChild(infoPreviewH2);

        const firstName = document.createElement('p');
        const firstNameText = document.createTextNode(jsonInfoData.personalInfo[0].firstName)
        firstName.appendChild(firstNameText);

        const lastName = document.createElement('p');
        const lastNameText = document.createTextNode(jsonInfoData.personalInfo[0].lastName)
        lastName.appendChild(lastNameText);


        



        const infoPText = document.createElement('p');
        const infoPTextContent = document.createTextNode(`My name is ${firstName.innerHTML} ${lastName.innerHTML} and I have worked as a `);
        infoPText.appendChild(infoPTextContent);

        infoTile.appendChild(infoPText);
        
        
        
        




    } else{
        console.log(responseInfo.status)
    }
};



async function getProjects(){
    let responseProject = await fetch("/data/projects.json")
    if(responseProject.ok){
        const jsonProjectData = await responseProject.json();

        const previewTiles = document.getElementById('previewTiles');

        console.log(previewTiles);
        
        const previewTilesG1 = document.createElement('div');
        previewTilesG1.className = 'previewTilesG1';
        previewTiles.appendChild(previewTilesG1);

        // console.log(previewTilesG1)

        
        const previewTilesG2 = document.createElement('div');
        previewTilesG2.className = 'previewTilesG2';
        previewTiles.appendChild(previewTilesG2);

        const previewTilesG101 = document.createElement('div');
        previewTilesG101.className = 'previewTilesG101';
        previewTilesG1.appendChild(previewTilesG101);

        const previewTilesG102 = document.createElement('div');
        previewTilesG102.className = 'previewTilesG102';
        previewTilesG1.appendChild(previewTilesG102);

        const previewTilesG201 = document.createElement('div');
        previewTilesG201.className = 'previewTilesG201';
        previewTilesG2.appendChild(previewTilesG201);

        const previewTilesG202 = document.createElement('div');
        previewTilesG202.className = 'previewTilesG202';
        previewTilesG2.appendChild(previewTilesG202);

        jsonProjectData.projects.forEach(function(projecct){
            
        });




    } else {
        console.log(responseProject.status)
    }
}





getInfoPreview();
getProjects();