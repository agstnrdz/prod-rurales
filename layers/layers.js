var wms_layers = [];


        var lyr_Argenmapgris_0 = new ol.layer.Tile({
            'title': 'Argenmap gris',
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
                interactive: true,
                title: '<img src="styles/legend/Barrios_2.png" /> Barrios'
            });
var format_ActividadHuerta_3 = new ol.format.GeoJSON();
var features_ActividadHuerta_3 = format_ActividadHuerta_3.readFeatures(json_ActividadHuerta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActividadHuerta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActividadHuerta_3.addFeatures(features_ActividadHuerta_3);
var lyr_ActividadHuerta_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActividadHuerta_3, 
                style: style_ActividadHuerta_3,
                popuplayertitle: 'Actividad: Huerta',
                interactive: false,
    title: 'Actividad: Huerta<br />\
    <img src="styles/legend/ActividadHuerta_3_0.png" /> Principal<br />\
    <img src="styles/legend/ActividadHuerta_3_1.png" /> Secundaria<br />\
    <img src="styles/legend/ActividadHuerta_3_2.png" /> <br />' });
var format_ActividadFrutales_4 = new ol.format.GeoJSON();
var features_ActividadFrutales_4 = format_ActividadFrutales_4.readFeatures(json_ActividadFrutales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActividadFrutales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActividadFrutales_4.addFeatures(features_ActividadFrutales_4);
var lyr_ActividadFrutales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActividadFrutales_4, 
                style: style_ActividadFrutales_4,
                popuplayertitle: 'Actividad: Frutales',
                interactive: false,
    title: 'Actividad: Frutales<br />\
    <img src="styles/legend/ActividadFrutales_4_0.png" /> Principal<br />\
    <img src="styles/legend/ActividadFrutales_4_1.png" /> Secundaria<br />\
    <img src="styles/legend/ActividadFrutales_4_2.png" /> <br />' });
var format_ActividadHuevos_5 = new ol.format.GeoJSON();
var features_ActividadHuevos_5 = format_ActividadHuevos_5.readFeatures(json_ActividadHuevos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActividadHuevos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActividadHuevos_5.addFeatures(features_ActividadHuevos_5);
var lyr_ActividadHuevos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActividadHuevos_5, 
                style: style_ActividadHuevos_5,
                popuplayertitle: 'Actividad: Huevos',
                interactive: false,
    title: 'Actividad: Huevos<br />\
    <img src="styles/legend/ActividadHuevos_5_0.png" /> Principal<br />\
    <img src="styles/legend/ActividadHuevos_5_1.png" /> Secundaria<br />\
    <img src="styles/legend/ActividadHuevos_5_2.png" /> <br />' });
var format_Productores_6 = new ol.format.GeoJSON();
var features_Productores_6 = format_Productores_6.readFeatures(json_Productores_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Productores_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Productores_6.addFeatures(features_Productores_6);
var lyr_Productores_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Productores_6, 
                style: style_Productores_6,
                popuplayertitle: 'Productores',
                interactive: true,
                title: '<img src="styles/legend/Productores_6.png" /> Productores'
            });

lyr_Argenmapgris_0.setVisible(true);lyr_Argenmap_1.setVisible(true);lyr_Barrios_2.setVisible(true);lyr_ActividadHuerta_3.setVisible(true);lyr_ActividadFrutales_4.setVisible(true);lyr_ActividadHuevos_5.setVisible(true);lyr_Productores_6.setVisible(true);
var layersList = [lyr_Argenmapgris_0,lyr_Argenmap_1,lyr_Barrios_2,lyr_ActividadHuerta_3,lyr_ActividadFrutales_4,lyr_ActividadHuevos_5,lyr_Productores_6];
lyr_Barrios_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', });
lyr_ActividadHuerta_3.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'dni': 'dni', 'emprendimi': 'emprendimi', 'antig': 'antig', 'correo': 'correo', 'contacto': 'contacto', 'domicilio': 'domicilio', 'produccion': 'produccion', 'medidor_ag': 'medidor_ag', 'act_huevos': 'act_huevos', 'act_carne': 'act_carne', 'act_cerdos': 'act_cerdos', 'act_ovejas': 'act_ovejas', 'act_caball': 'act_caball', 'act_huerta': 'act_huerta', 'act_miel': 'act_miel', 'act_frut': 'act_frut', 'act_olivos': 'act_olivos', 'act_vides': 'act_vides', 'act_hidrop': 'act_hidrop', 'act_cons': 'act_cons', 'act_arom': 'act_arom', 'act_emb': 'act_emb', 'lat': 'lat', 'lng': 'lng', 'fid': 'fid', 'nombre_2': 'nombre_2', });
lyr_ActividadFrutales_4.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'dni': 'dni', 'emprendimi': 'emprendimi', 'antig': 'antig', 'correo': 'correo', 'contacto': 'contacto', 'domicilio': 'domicilio', 'produccion': 'produccion', 'medidor_ag': 'medidor_ag', 'act_huevos': 'act_huevos', 'act_carne': 'act_carne', 'act_cerdos': 'act_cerdos', 'act_ovejas': 'act_ovejas', 'act_caball': 'act_caball', 'act_huerta': 'act_huerta', 'act_miel': 'act_miel', 'act_frut': 'act_frut', 'act_olivos': 'act_olivos', 'act_vides': 'act_vides', 'act_hidrop': 'act_hidrop', 'act_cons': 'act_cons', 'act_arom': 'act_arom', 'act_emb': 'act_emb', 'lat': 'lat', 'lng': 'lng', 'fid': 'fid', 'nombre_2': 'nombre_2', });
lyr_ActividadHuevos_5.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'dni': 'dni', 'emprendimi': 'emprendimi', 'antig': 'antig', 'correo': 'correo', 'contacto': 'contacto', 'domicilio': 'domicilio', 'produccion': 'produccion', 'medidor_ag': 'medidor_ag', 'act_huevos': 'act_huevos', 'act_carne': 'act_carne', 'act_cerdos': 'act_cerdos', 'act_ovejas': 'act_ovejas', 'act_caball': 'act_caball', 'act_huerta': 'act_huerta', 'act_miel': 'act_miel', 'act_frut': 'act_frut', 'act_olivos': 'act_olivos', 'act_vides': 'act_vides', 'act_hidrop': 'act_hidrop', 'act_cons': 'act_cons', 'act_arom': 'act_arom', 'act_emb': 'act_emb', 'lat': 'lat', 'lng': 'lng', 'fid': 'fid', 'nombre_2': 'nombre_2', });
lyr_Productores_6.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'dni': 'dni', 'emprendimi': 'emprendimi', 'antig': 'antig', 'correo': 'correo', 'contacto': 'contacto', 'domicilio': 'domicilio', 'produccion': 'produccion', 'medidor_ag': 'medidor_ag', 'act_huevos': 'act_huevos', 'act_carne': 'act_carne', 'act_cerdos': 'act_cerdos', 'act_ovejas': 'act_ovejas', 'act_caball': 'act_caball', 'act_huerta': 'act_huerta', 'act_miel': 'act_miel', 'act_frut': 'act_frut', 'act_olivos': 'act_olivos', 'act_vides': 'act_vides', 'act_hidrop': 'act_hidrop', 'act_cons': 'act_cons', 'act_arom': 'act_arom', 'act_emb': 'act_emb', 'lat': 'lat', 'lng': 'lng', 'fid': 'fid', 'nombre_2': 'nombre_2', });
lyr_Barrios_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', });
lyr_ActividadHuerta_3.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'dni': 'TextEdit', 'emprendimi': '', 'antig': 'TextEdit', 'correo': 'TextEdit', 'contacto': 'TextEdit', 'domicilio': 'TextEdit', 'produccion': 'TextEdit', 'medidor_ag': '', 'act_huevos': 'TextEdit', 'act_carne': 'TextEdit', 'act_cerdos': 'TextEdit', 'act_ovejas': 'TextEdit', 'act_caball': 'TextEdit', 'act_huerta': 'TextEdit', 'act_miel': 'TextEdit', 'act_frut': 'TextEdit', 'act_olivos': 'TextEdit', 'act_vides': 'TextEdit', 'act_hidrop': 'TextEdit', 'act_cons': 'TextEdit', 'act_arom': 'TextEdit', 'act_emb': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'fid': '', 'nombre_2': '', });
lyr_ActividadFrutales_4.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'dni': 'TextEdit', 'emprendimi': '', 'antig': 'TextEdit', 'correo': 'TextEdit', 'contacto': 'TextEdit', 'domicilio': 'TextEdit', 'produccion': 'TextEdit', 'medidor_ag': '', 'act_huevos': 'TextEdit', 'act_carne': 'TextEdit', 'act_cerdos': 'TextEdit', 'act_ovejas': 'TextEdit', 'act_caball': 'TextEdit', 'act_huerta': 'TextEdit', 'act_miel': 'TextEdit', 'act_frut': 'TextEdit', 'act_olivos': 'TextEdit', 'act_vides': 'TextEdit', 'act_hidrop': 'TextEdit', 'act_cons': 'TextEdit', 'act_arom': 'TextEdit', 'act_emb': 'TextEdit', 'lat': 'TextEdit', 'lng': '', 'fid': '', 'nombre_2': '', });
lyr_ActividadHuevos_5.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'dni': 'TextEdit', 'emprendimi': 'TextEdit', 'antig': 'TextEdit', 'correo': 'TextEdit', 'contacto': 'TextEdit', 'domicilio': 'TextEdit', 'produccion': 'TextEdit', 'medidor_ag': 'TextEdit', 'act_huevos': 'TextEdit', 'act_carne': 'TextEdit', 'act_cerdos': 'TextEdit', 'act_ovejas': 'TextEdit', 'act_caball': 'TextEdit', 'act_huerta': 'TextEdit', 'act_miel': 'TextEdit', 'act_frut': 'TextEdit', 'act_olivos': 'TextEdit', 'act_vides': 'TextEdit', 'act_hidrop': 'TextEdit', 'act_cons': 'TextEdit', 'act_arom': 'TextEdit', 'act_emb': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'fid': 'TextEdit', 'nombre_2': 'TextEdit', });
lyr_Productores_6.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'dni': 'TextEdit', 'emprendimi': 'TextEdit', 'antig': 'TextEdit', 'correo': 'TextEdit', 'contacto': 'TextEdit', 'domicilio': 'TextEdit', 'produccion': 'TextEdit', 'medidor_ag': 'TextEdit', 'act_huevos': 'TextEdit', 'act_carne': 'TextEdit', 'act_cerdos': 'TextEdit', 'act_ovejas': 'TextEdit', 'act_caball': 'TextEdit', 'act_huerta': 'TextEdit', 'act_miel': 'TextEdit', 'act_frut': 'TextEdit', 'act_olivos': 'TextEdit', 'act_vides': 'TextEdit', 'act_hidrop': 'TextEdit', 'act_cons': 'TextEdit', 'act_arom': 'TextEdit', 'act_emb': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'fid': 'TextEdit', 'nombre_2': 'TextEdit', });
lyr_Barrios_2.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'header label - always visible', });
lyr_ActividadHuerta_3.set('fieldLabels', {'id': 'no label', 'nombre': 'hidden field', 'dni': 'hidden field', 'emprendimi': 'no label', 'antig': 'no label', 'correo': 'hidden field', 'contacto': 'hidden field', 'domicilio': 'hidden field', 'produccion': 'no label', 'medidor_ag': 'no label', 'act_huevos': 'hidden field', 'act_carne': 'hidden field', 'act_cerdos': 'hidden field', 'act_ovejas': 'hidden field', 'act_caball': 'hidden field', 'act_huerta': 'hidden field', 'act_miel': 'hidden field', 'act_frut': 'hidden field', 'act_olivos': 'hidden field', 'act_vides': 'hidden field', 'act_hidrop': 'hidden field', 'act_cons': 'hidden field', 'act_arom': 'hidden field', 'act_emb': 'hidden field', 'lat': 'hidden field', 'lng': 'hidden field', 'fid': 'hidden field', 'nombre_2': 'hidden field', });
lyr_ActividadFrutales_4.set('fieldLabels', {'id': 'no label', 'nombre': 'hidden field', 'dni': 'hidden field', 'emprendimi': 'no label', 'antig': 'no label', 'correo': 'hidden field', 'contacto': 'hidden field', 'domicilio': 'hidden field', 'produccion': 'no label', 'medidor_ag': 'no label', 'act_huevos': 'hidden field', 'act_carne': 'hidden field', 'act_cerdos': 'hidden field', 'act_ovejas': 'hidden field', 'act_caball': 'hidden field', 'act_huerta': 'hidden field', 'act_miel': 'hidden field', 'act_frut': 'hidden field', 'act_olivos': 'hidden field', 'act_vides': 'hidden field', 'act_hidrop': 'hidden field', 'act_cons': 'hidden field', 'act_arom': 'hidden field', 'act_emb': 'hidden field', 'lat': 'hidden field', 'lng': 'hidden field', 'fid': 'hidden field', 'nombre_2': 'hidden field', });
lyr_ActividadHuevos_5.set('fieldLabels', {'id': 'hidden field', 'nombre': 'hidden field', 'dni': 'hidden field', 'emprendimi': 'no label', 'antig': 'no label', 'correo': 'hidden field', 'contacto': 'hidden field', 'domicilio': 'hidden field', 'produccion': 'no label', 'medidor_ag': 'no label', 'act_huevos': 'hidden field', 'act_carne': 'hidden field', 'act_cerdos': 'hidden field', 'act_ovejas': 'hidden field', 'act_caball': 'hidden field', 'act_huerta': 'hidden field', 'act_miel': 'hidden field', 'act_frut': 'hidden field', 'act_olivos': 'hidden field', 'act_vides': 'hidden field', 'act_hidrop': 'hidden field', 'act_cons': 'hidden field', 'act_arom': 'hidden field', 'act_emb': 'hidden field', 'lat': 'hidden field', 'lng': 'hidden field', 'fid': 'hidden field', 'nombre_2': 'hidden field', });
lyr_Productores_6.set('fieldLabels', {'id': 'hidden field', 'nombre': 'hidden field', 'dni': 'hidden field', 'emprendimi': 'header label - always visible', 'antig': 'header label - always visible', 'correo': 'hidden field', 'contacto': 'hidden field', 'domicilio': 'hidden field', 'produccion': 'header label - always visible', 'medidor_ag': 'hidden field', 'act_huevos': 'hidden field', 'act_carne': 'hidden field', 'act_cerdos': 'hidden field', 'act_ovejas': 'hidden field', 'act_caball': 'hidden field', 'act_huerta': 'hidden field', 'act_miel': 'hidden field', 'act_frut': 'hidden field', 'act_olivos': 'hidden field', 'act_vides': 'hidden field', 'act_hidrop': 'hidden field', 'act_cons': 'hidden field', 'act_arom': 'hidden field', 'act_emb': 'hidden field', 'lat': 'hidden field', 'lng': 'hidden field', 'fid': 'hidden field', 'nombre_2': 'hidden field', });
lyr_Productores_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});