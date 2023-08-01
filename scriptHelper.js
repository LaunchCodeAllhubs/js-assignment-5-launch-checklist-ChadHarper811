// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let numTest = /^[0-9]+$/
   if (testInput === "") {
    return "Empty"
   } else if (isNaN(testInput)) {
    return "Not A number"
   } else if (testInput.toString().match(numTest)) {
    return "Is a Number"
   }
}

function formSubmission(document , list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilot = document.querySelector("input[name=pilotName]")
    const copilot = document.querySelector("input[name=copilotName]")
    const fuelLevel = document.querySelector("input[name=fuelLevel]")
    const cargoLevel = document.querySelector("input[name=cargoMass]")
    const list = document.getElementById("faultyItems")
    const launchStatus = document.getElementById("launchStatus")
    const pilotStatus = document.getElementById("pilotStatus")
    const copilotStatus = document.getElementById("copilotStatus")
    const fuelStatus = document.getElementById("fuelStatus")
    const cargoStatus = document.getElementById("cargoStatus")
    
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        
        if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
        } else if (validateInput(fuelLevel.value) === "Not A number" || validateInput(cargoLevel.value) === "Not A number") {
            alert("Make sure to enter valid information for each field!")
            event.preventDefault();
        } else {
            event.preventDefault();
            list.style.visibility = "visible"
            pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`
            copilotStatus.innerHTML = `Pilot ${copilot.value} is ready for launch`
            if (fuelLevel.value < 10000) {
                fuelStatus.innerHTML = "Fuel Level too low for launch"
                launchStatus.innerHTML = "Shuttle Not Ready for Launch"
                launchStatus.style.color = "rgb(199, 37, 78)"
            } else if (cargoLevel.value > 10000) {
                cargoStatus.innerHTML = "Cargo mass too heavy for launch"
                launchStatus.innerHTML = "Shuttle Not Ready for Launch"
                launchStatus.style.color = "rgb(199, 37, 78)"
            } else {
                launchStatus.style.color = "rgb(65, 159, 106)"
                launchStatus.innerHTML = "Shuttle is Ready for Launch"
            }
        }
        
    });
})

   

    
    

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
