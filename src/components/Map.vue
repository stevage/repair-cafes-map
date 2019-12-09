<template lang="pug">
#map.absolute.absolute--fill
</template>

<script>
import mapboxgl from 'mapbox-gl';
import U from 'mapbox-gl-utils';
const d3 = require('d3-fetch');

// Replace this URL with your own Google Sheets ID (the part of the url .../d/TH1sB1t/edit/... )
// const sheetsId = '1m9yfDs4nSAeZv4YFUfaC16oTV51GVsuwuKgnPgBEFjs';
const sheetsId = '2PACX-1vQjDnqpI1AvtDvIM7QDsioGGs8VsvqnAgP1tXhMT6aGtlIXqnRdlQP-eSix8KDhO0Gspx3NdlDXKkXP';
const csvSource = `https://docs.google.com/spreadsheets/d/e/${sheetsId}/pub?gid=0&single=true&output=csv`;

const sheetNo = 1;
// I don't know in which context json1 works vs json2. 
// https://medium.com/dali-lab/google-sheets-and-json-easy-backend-e29e9ef3df2
const json1 = `https://spreadsheets.google.com/feeds/cells/${sheetsId}/${sheetNo}/public/full?alt=json`
const json2 = `https://spreadsheets.google.com/feeds/cells/${sheetsId}/${sheetNo}/od6/public/values?alt=json`

function toPoints(rows) {
    return {
        type: 'FeatureCollection',
        features: rows.map((row, id) => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [+row.Longitude, +row.Latitude], // These are the column names
            },
            properties: {
                id,
                ...row
            }
        }))
    }
}

export default {
    async mounted() {
        // replace this Mapbox access token with your own
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazNmNGV5enAwMTF1M2tuejhtc2twcXo5In0.mLPrYIYJ2FiFZ3KMqVIj6w';
        const map = new mapboxgl.Map({
            container: 'map',
            center: [144.96, -37.81],
            zoom: 14,
            style: 'mapbox://styles/mapbox/light-v9',
        });
        U.init(map, mapboxgl);
        window.map = map;
        window.Map = this;

        const points = toPoints(await d3.csv(csvSource));
        map.U.addGeoJSON('points', points);
        map.U.addCircle('points-circles', 'points', {
            circleColor: 'hsl(330,100%,40%)',
            circleRadius: { stops: [[10,3], [12, 10]] }
        });
        map.U.hoverPointer('points-circles');
        map.on('click', 'points-circles', e => {
            console.log(e);
            window.FeatureInfo.feature = e.features[0];
        });
        
    }
}
import 'mapbox-gl/dist/mapbox-gl.css';

</script>

<style scoped>
</style>