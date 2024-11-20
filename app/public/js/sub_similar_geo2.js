am5.ready(function () {

    // Create root and chart
    const root2 = am5.Root.new("sim-geo2");

    // Set themes
    root2.setThemes([
        am5themes_Animated.new(root2)
    ]);

    var chart = root2.container.children.push(
        am5map.MapChart.new(root2, {
            projection: am5map.geoNaturalEarth1(),
            panX: "none", // X축 팬닝 비활성화
            panY: "none", // Y축 팬닝 비활성화
            zoomLevel: 1, // 기본 확대 수준
            maxZoomLevel: 1, // 최대 확대 수준 제한
            minZoomLevel: 1 // 최소 확대 수준 제한
        })
    );

    // Create polygon series
    var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root2, {
            geoJSON: am5geodata_continentsLow,
            exclude: ["antarctica"]
        })
    );

    polygonSeries.mapPolygons.template.setAll({
        interactive: true,
        templateField: "settings"
    });

    var colors = am5.ColorSet.new(root2, {});

    polygonSeries.data.setAll([
        { id: "europe", settings: { fill: colors.next() } },
        { id: "asia", settings: { fill: colors.next() } },
        { id: "africa", settings: { fill: colors.next() } },
        { id: "northAmerica", settings: { fill: colors.next() } },
        { id: "southAmerica", settings: { fill: colors.next() } },
        { id: "oceania", settings: { fill: colors.next() } }
    ]);

    // Create a point series to place labels at continent centers
    var pointSeries = chart.series.push(am5map.MapPointSeries.new(root2, {}));

    pointSeries.bullets.push(function (root, series, dataItem) {
        return am5.Bullet.new(root, {
            sprite: am5.Label.new(root, {
                text: dataItem.dataContext.name, // Display continent name
                fontSize: "15px",
                centerX: am5.p50,
                centerY: am5.p50,
                fill: am5.color(0xFFFFFF)
            })
        });
    });

    pointSeries.data.setAll([
        { geometry: { type: "Point", coordinates: [30, 50] }, name: "유럽" },        // Europe
        { geometry: { type: "Point", coordinates: [95, 45] }, name: "아시아" },          // Asia
        { geometry: { type: "Point", coordinates: [25, 10] }, name: "아프리카" },          // Africa
        { geometry: { type: "Point", coordinates: [-100, 45] }, name: "북아메리카" }, // North America
        { geometry: { type: "Point", coordinates: [-55, -10] }, name: "남아메리카" }, // South America
        { geometry: { type: "Point", coordinates: [135, -25] }, name: "오세아니아" }       // Oceania
    ]);


}); // end am5.ready()
