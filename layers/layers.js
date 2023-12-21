var wms_layers = [];

        var lyr_googlesatelitte_0 = new ol.layer.Tile({
            'title': 'googlesatelitte_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });var format_RT_1 = new ol.format.GeoJSON();
var features_RT_1 = format_RT_1.readFeatures(json_RT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RT_1.addFeatures(features_RT_1);var lyr_RT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RT_1, 
                style: style_RT_1,
    title: 'RT <br />\
    <img src="styles/legend/RT_1_0.png" /> 61<br />\
    <img src="styles/legend/RT_1_1.png" /> 62<br />\
    <img src="styles/legend/RT_1_2.png" /> 63<br />\
    <img src="styles/legend/RT_1_3.png" /> 64<br />\
    <img src="styles/legend/RT_1_4.png" /> <br />'
        });var format_PetaPemanfaatanGanasari_2 = new ol.format.GeoJSON();
var features_PetaPemanfaatanGanasari_2 = format_PetaPemanfaatanGanasari_2.readFeatures(json_PetaPemanfaatanGanasari_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaPemanfaatanGanasari_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PetaPemanfaatanGanasari_2.addFeatures(features_PetaPemanfaatanGanasari_2);var lyr_PetaPemanfaatanGanasari_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PetaPemanfaatanGanasari_2, 
                style: style_PetaPemanfaatanGanasari_2,
    title: 'Peta Pemanfaatan Ganasari<br />\
    <img src="styles/legend/PetaPemanfaatanGanasari_2_0.png" /> Kegiatan Ekonomi<br />\
    <img src="styles/legend/PetaPemanfaatanGanasari_2_1.png" /> Pemanfaatan Tempat Tinggal<br />\
    <img src="styles/legend/PetaPemanfaatanGanasari_2_2.png" /> Tidak Ada Pemanfaatan<br />\
    <img src="styles/legend/PetaPemanfaatanGanasari_2_3.png" /> <br />'
        });var format_StrukturJalan_3 = new ol.format.GeoJSON();
var features_StrukturJalan_3 = format_StrukturJalan_3.readFeatures(json_StrukturJalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrukturJalan_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_StrukturJalan_3.addFeatures(features_StrukturJalan_3);var lyr_StrukturJalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrukturJalan_3, 
                style: style_StrukturJalan_3,
    title: 'Struktur Jalan<br />\
    <img src="styles/legend/StrukturJalan_3_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/StrukturJalan_3_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/StrukturJalan_3_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/StrukturJalan_3_3.png" /> Jalan Setapak<br />\
    <img src="styles/legend/StrukturJalan_3_4.png" /> <br />'
        });

lyr_googlesatelitte_0.setVisible(true);lyr_RT_1.setVisible(true);lyr_PetaPemanfaatanGanasari_2.setVisible(true);lyr_StrukturJalan_3.setVisible(true);
var layersList = [lyr_googlesatelitte_0,lyr_RT_1,lyr_PetaPemanfaatanGanasari_2,lyr_StrukturJalan_3];
lyr_RT_1.set('fieldAliases', {'Id': 'Id', 'RT': 'RT', 'RW': 'RW', });
lyr_PetaPemanfaatanGanasari_2.set('fieldAliases', {'Pemanfaata': 'Pemanfaata', });
lyr_StrukturJalan_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RT_1.set('fieldImages', {'Id': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', });
lyr_PetaPemanfaatanGanasari_2.set('fieldImages', {'Pemanfaata': 'TextEdit', });
lyr_StrukturJalan_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_RT_1.set('fieldLabels', {'Id': 'no label', 'RT': 'inline label', 'RW': 'inline label', });
lyr_PetaPemanfaatanGanasari_2.set('fieldLabels', {'Pemanfaata': 'inline label', });
lyr_StrukturJalan_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_StrukturJalan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});