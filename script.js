// Write your JavaScript code here!
// import { addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch} from "./scriptHelper";

window.addEventListener("load", function() {
    
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
        
        if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        } else if (isNaN(fuelLevel.value) || isNaN(cargoLevel.value)) {
            alert("Make sure to enter valid information for each field!")
            event.preventDefault();
        } else {
            event.preventDefault();
            list.style.visibility = "visible"
            pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`
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

async function myFetch() {
    let response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    let planetsData = await response.json();
    console.log(planetsData);
    let planetIndex = Math.floor(Math.random()*planetsData.length)
    let missionPlanet = planetsData[planetIndex]
    console.log(missionPlanet)
    let missionTarget = document.getElementById('missionTarget')
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${missionPlanet.name}</li>
        <li>Diameter: ${missionPlanet.diameter}</li>
        <li>Star: ${missionPlanet.star}</li>
        <li>Distance from Earth: ${missionPlanet.distance}</li>
        <li>Number of Moons: ${missionPlanet.moons}</li>
    </ol>
    <img src=${missionPlanet.image} />
    `
}
myFetch()

});