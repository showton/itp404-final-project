import Route from "@ember/routing/route";

export default Route.extend({
  actions: {
    onMapEvent: function(event) {
      console.info(
        "Click coordinate",
        event.latLng.lat(), // Latitude
        event.latLng.lng() // Longitude
      );
      console.info(
        "Map boundaries",
        event.bounds[0], // Northeast map coordinate
        event.bounds[1] // Southwest map coordinate
      );
      console.info("Map's center", this.controller.lat, this.controller.lng);
      event.mapIdle.then(function() {
        // Promise
        console.log(
          "maps done loading tiles and user is not interacting with map"
        );
      });
      event.mapTilesLoaded.then(function() {
        // Promise
        console.log("Map tiles have finished loading");
      });
    }
  },
  titleToken: "Home Page"
});
