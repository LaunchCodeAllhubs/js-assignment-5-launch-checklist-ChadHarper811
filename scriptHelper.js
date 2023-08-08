// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById('missionTarget')
   missionTarget.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}" />`
}

function validateInput(testInput) {
    let numTest = /^[0-9]+$/
   if (testInput === "") {
    return "Empty"
   } else if (isNaN(testInput)) {
    return "Not a Number"
   } else if (testInput.toString().match(numTest)) {
    return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const launchStatus = document.getElementById("launchStatus")
    const pilotStatus = document.getElementById("pilotStatus")
    const copilotStatus = document.getElementById("copilotStatus")
    const fuelStatus = document.getElementById("fuelStatus")
    const cargoStatus = document.getElementById("cargoStatus")
        
    if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number" || validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number") {
        alert("Make sure to enter valid information for each field!")
    } else {
        list.style.visibility = "visible"
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`
        copilotStatus.innerHTML = `Pilot ${copilot.value} is ready for launch`
        if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
            fuelStatus.innerHTML = "Fuel Level too low for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "rgb(199, 37, 78)"
        } else if(fuelLevel.value < 10000 && cargoLevel.value <= 10000) {
            fuelStatus.innerHTML = "Fuel Level too low for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "rgb(199, 37, 78)"
        } else if (fuelLevel.value >= 10000 && cargoLevel.value > 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "rgb(199, 37, 78)"
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.style.color = "rgb(65, 159, 106)"
            launchStatus.innerHTML = "Shuttle is Ready for Launch"
        }
    }
}

   

    
    

async function myFetch() {
        let response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
        let planetsData = await response.json();
        return planetsData
}




function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)]
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
