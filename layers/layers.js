var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Colonneaverre_1 = new ol.format.GeoJSON();
var features_Colonneaverre_1 = format_Colonneaverre_1.readFeatures(json_Colonneaverre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonneaverre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonneaverre_1.addFeatures(features_Colonneaverre_1);
var lyr_Colonneaverre_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonneaverre_1, 
                style: style_Colonneaverre_1,
                interactive: true,
                title: '<img src="styles/legend/Colonneaverre_1.png" /> Colonne a verre'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Colonneaverre_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Colonneaverre_1];
lyr_Colonneaverre_1.set('fieldAliases', {'Nom du rep': 'Nom du rep', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Etat': 'Etat', 'Affichage': 'Affichage', 'Litrage': 'Litrage', 'Nombre': 'Nombre', });
lyr_Colonneaverre_1.set('fieldImages', {'Nom du rep': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Etat': 'TextEdit', 'Affichage': 'TextEdit', 'Litrage': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Colonneaverre_1.set('fieldLabels', {'Nom du rep': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Etat': 'no label', 'Affichage': 'no label', 'Litrage': 'no label', 'Nombre': 'no label', });
lyr_Colonneaverre_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});