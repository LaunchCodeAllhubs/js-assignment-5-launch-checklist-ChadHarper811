// Write your JavaScript code here!
// const formSubmission = require('./scriptHelper.js')

window.addEventListener("load", function() {

    // formSubmission(document , list, pilot, copilot, fuelLevel, cargoLevel)
    
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

    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   

});