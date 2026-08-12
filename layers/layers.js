var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Productores_2 = new ol.format.GeoJSON();
var features_Productores_2 = format_Productores_2.readFeatures(json_Productores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Productores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Productores_2.addFeatures(features_Productores_2);
var lyr_Productores_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Productores_2, 
                style: style_Productores_2,
                popuplayertitle: 'Productores',
                interactive: true,
                title: '<img src="styles/legend/Productores_2.png" /> Productores'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Productores_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_Productores_2];
lyr_Productores_2.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'DNI': 'DNI', 'Contacto': 'Contacto', 'Domicilio': 'Domicilio', 'Barrio': 'Barrio', 'Lat': 'Lat', 'Lng': 'Lng', });
lyr_Productores_2.set('fieldImages', {'id': 'Range', 'Nombre': 'TextEdit', 'DNI': 'TextEdit', 'Contacto': 'TextEdit', 'Domicilio': 'TextEdit', 'Barrio': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', });
lyr_Productores_2.set('fieldLabels', {'id': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'DNI': 'inline label - always visible', 'Contacto': 'inline label - always visible', 'Domicilio': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lng': 'inline label - always visible', });
lyr_Productores_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});