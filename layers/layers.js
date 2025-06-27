var wms_layers = [];


        var lyr_Argenmapgris_0 = new ol.layer.Tile({
            'title': 'Argenmap (gris)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });

        var lyr_Argenmap_1 = new ol.layer.Tile({
            'title': 'Argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_Barrios_2 = new ol.format.GeoJSON();
var features_Barrios_2 = format_Barrios_2.readFeatures(json_Barrios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_2.addFeatures(features_Barrios_2);
var lyr_Barrios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_2, 
                style: style_Barrios_2,
                popuplayertitle: 'Barrios',
                interactive: false,
                title: '<img src="styles/legend/Barrios_2.png" /> Barrios'
            });
var format_Productores_3 = new ol.format.GeoJSON();
var features_Productores_3 = format_Productores_3.readFeatures(json_Productores_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Productores_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Productores_3.addFeatures(features_Productores_3);
var lyr_Productores_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Productores_3, 
                style: style_Productores_3,
                popuplayertitle: 'Productores',
                interactive: true,
                title: '<img src="styles/legend/Productores_3.png" /> Productores'
            });

lyr_Argenmapgris_0.setVisible(true);lyr_Argenmap_1.setVisible(true);lyr_Barrios_2.setVisible(true);lyr_Productores_3.setVisible(true);
var layersList = [lyr_Argenmapgris_0,lyr_Argenmap_1,lyr_Barrios_2,lyr_Productores_3];
lyr_Barrios_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', });
lyr_Productores_3.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'dni': 'dni', 'nom_emp': 'nom_emp', 'ant': 'ant', 'correo': 'correo', 'contacto': 'contacto', 'domicilio': 'domicilio', 'barrio': 'barrio', 'produccion': 'produccion', 'medidor': 'medidor', 'act_huevos': 'act_huevos', 'act_frut': 'act_frut', 'act_huerta': 'act_huerta', 'act_arom': 'act_arom', 'act_cons': 'act_cons', 'act_carne': 'act_carne', 'act_olivos': 'act_olivos', 'act_vides': 'act_vides', 'act_cerdos': 'act_cerdos', 'act_hidrop': 'act_hidrop', 'act_caball': 'act_caball', 'act_emb': 'act_emb', 'act_miel': 'act_miel', 'act_ovejas': 'act_ovejas', 'lat': 'lat', 'lng': 'lng', });
lyr_Barrios_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', });
lyr_Productores_3.set('fieldImages', {'id': 'Range', 'nombre': '', 'dni': 'Range', 'nom_emp': '', 'ant': 'Range', 'correo': 'TextEdit', 'contacto': 'TextEdit', 'domicilio': 'TextEdit', 'barrio': 'TextEdit', 'produccion': 'Range', 'medidor': 'Range', 'act_huevos': 'Range', 'act_frut': 'Range', 'act_huerta': 'Range', 'act_arom': 'Range', 'act_cons': 'Range', 'act_carne': 'Range', 'act_olivos': 'Range', 'act_vides': 'Range', 'act_cerdos': 'Range', 'act_hidrop': 'Range', 'act_caball': 'Range', 'act_emb': 'Range', 'act_miel': 'Range', 'act_ovejas': 'Range', 'lat': 'TextEdit', 'lng': 'TextEdit', });
lyr_Barrios_2.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'header label - always visible', });
lyr_Productores_3.set('fieldLabels', {'id': 'hidden field', 'nombre': 'hidden field', 'dni': 'hidden field', 'nom_emp': 'inline label - visible with data', 'ant': 'hidden field', 'correo': 'hidden field', 'contacto': 'hidden field', 'domicilio': 'hidden field', 'barrio': 'inline label - visible with data', 'produccion': 'inline label - visible with data', 'medidor': 'inline label - visible with data', 'act_huevos': 'inline label - visible with data', 'act_frut': 'inline label - visible with data', 'act_huerta': 'inline label - visible with data', 'act_arom': 'inline label - visible with data', 'act_cons': 'inline label - visible with data', 'act_carne': 'inline label - visible with data', 'act_olivos': 'inline label - visible with data', 'act_vides': 'inline label - visible with data', 'act_cerdos': 'inline label - visible with data', 'act_hidrop': 'inline label - visible with data', 'act_caball': 'inline label - visible with data', 'act_emb': 'inline label - visible with data', 'act_miel': 'inline label - visible with data', 'act_ovejas': 'inline label - visible with data', 'lat': 'hidden field', 'lng': 'hidden field', });
lyr_Productores_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});