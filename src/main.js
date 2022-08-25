const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const url = "http://localhost:5000/constellations";

function getAllNames() {
  axios
    .get(url)
    .then((response) => {
      const named = response.data.map((constellation) => constellation.name);
      console.log(named);
    })
    .catch((error) => console.log(error.message));
}

function getConstellationsByQuadrant(quadrant) {
  axios
    .get(url)
    .then((response) => {
      const filtered = response.data.filter((constellation) => {
        return constellation.quadrant == quadrant;
      });
      console.log(filtered);
    })
    .catch((error) => console.log(error.message));
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
