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
            hash: true
        });
        U.init(map, mapboxgl);
        window.map = map;
        window.Map = this;

        const points = toPoints(await d3.csv(csvSource));
        map.U.addGeoJSON('points', points, { generateId: true });
        map.U.addCircle('points-circles', 'points', {
            circleColor: ['match', ['get', 'Category'],
                'Repair cafe', 'hsl(330,100%,40%)',
                'Tool library', 'hsl(210,100%,40%)',
                'black'
            ],
            circleStrokeWidth: ['case', ['feature-state', 'selected'], 2, 0],
            circleRadius: { stops: [[10,6], [12, 10]] },

        });
        map.U.addSymbol('points-labels', 'points', {
            textField: ['get', 'Name'],
            textAnchor: 'left',
            textColor: ['match', ['get', 'Category'],
                'Repair cafe', 'hsl(330,100%,40%)',
                'Tool library', 'hsl(210,100%,40%)',
                'black'
            ],
            textJustify: 'left',
            textOffset:[0.6, 0],
            minzoom: 11
        });
        map.U.hoverPointer('points-circles');
        let lastSelectedId;
        map.on('click', 'points-circles', e => {
            console.log(e);
            window.FeatureInfo.feature = e.features[0];
            if (lastSelectedId) {
                map.setFeatureState({ source: 'points', id: lastSelectedId }, { selected: false });
            }
            lastSelectedId = e.features[0].id;

            map.setFeatureState({ source: 'points', id: e.features[0].id }, { selected: true });
        });
        
    }
}
import 'mapbox-gl/dist/mapbox-gl.css';

</script>

<style scoped>
</style>