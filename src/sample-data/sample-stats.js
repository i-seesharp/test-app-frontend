const donut = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
            "rgba(255,0,0,0.4)",
            "rgba(0,255,0,0.4)",
            "rgba(0,0,255,0.4)"
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Hard',
        'Medium',
        'Easy'
    ]
};

const line = {
    labels: ["January","February","March","April","May","June","July",
                "August", "September", "October","November","December"],
    datasets: [{
        label: "Elo Rating By Month",
        data: [1500,1550,1450,1480,1580,1350, 1580, 1720,
                1630, 1800, 1820, 1970],
        backgroundColor: [
            "rgba(255,0,0,0.4)"
        ]
    }],
}

exports.donut = donut;
exports.line = line;