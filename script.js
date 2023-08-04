// Write your JavaScript code here!


window.addEventListener("load", function() {
    const pilot = document.querySelector("input[name=pilotName]")
    const copilot = document.querySelector("input[name=copilotName]")
    const fuelLevel = document.querySelector("input[name=fuelLevel]")
    const cargoLevel = document.querySelector("input[name=cargoMass]")
    const list = document.getElementById("faultyItems")

    let form = document.querySelector('form');
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    })


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let missionPlanet = pickPlanet(listedPlanets)
        addDestinationInfo(document, missionPlanet.name, missionPlanet.diameter, missionPlanet.star, missionPlanet.distance, missionPlanet.moons, missionPlanet.image)
    })
    
 });