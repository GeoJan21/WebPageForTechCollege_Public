// Public portfolio version.
// Real room photographs and identifying room descriptions have been removed.
// Map coordinates and room IDs are retained because they are required for the map functionality.

const floors = {
    1: {
        // size of map x:1558 y:760
        image: "img/maps/firstFloor.svg",
        rooms: [
            {id: "101", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.3, y: 0.660, width: 0.031, height: 0.127},
            {id: "102", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.274, y: 0.659, width: 0.02, height: 0.128},
            {id: "107", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.186, y: 0.861, width: 0.118, height: 0.135},
            {id: "108", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.388, y: 0.855, width: 0.026, height: 0.140},
            {id: "109", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.414, y: 0.855, width: 0.031, height: 0.140},
            {id: "110", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.446, y: 0.855, width: 0.115, height: 0.140},
            {id: "111", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.561, y: 0.855, width: 0.028, height: 0.140},
            {id: "112", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.590, y: 0.855, width: 0.141, height: 0.140},
            {id: "113", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.731, y: 0.855, width: 0.034, height: 0.140},
            {id: "114", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.820, y: 0.657, width: 0.179, height: 0.338},
            {id: "115", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.762, y: 0.657, width: 0.02, height: 0.136},
            {id: "116", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.727, y: 0.657, width: 0.03, height: 0.136},
            {id: "117", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.588, y: 0.657, width: 0.137, height: 0.136},
            {id: "118", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.559, y: 0.657, width: 0.028, height: 0.136},
            {id: "119", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.532, y: 0.657, width: 0.026, height: 0.136},
            {id: "120", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.471, y: 0.657, width: 0.059, height: 0.136},
            {id: "121", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.357, y: 0.336, width: 0.173, height: 0.321},
            {id: "124/125", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0, y: 0, width: 0.329, height: 0.122},
            {id: "128/129", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0, y: 0.171, width: 0.304, height: 0.125},
            {id: "130", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.389, y: 0, width: 0.226, height: 0.176},
            {id: "131", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.439, y: 0.181, width: 0.177, height: 0.115},
            {id: "132", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.616, y: 0.243, width: 0.137, height: 0.243},
            {id: "152", name: "Room", img: "img/cabinets/firstFloor/none.png", x: 0.021, y: 0.656, width: 0.164, height: 0.344}
        ]
    },

    2: {
        // size of map x:1128 y:627
        image: "img/maps/secondFloor.svg",
        rooms: [
            {id: "201", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.276, y: 0.667, width: 0.053, height: 0.140},
            {id: "202", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.248, y: 0.667, width: 0.031, height: 0.140},
            {id: "203", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.199, y: 0.667, width: 0.051, height: 0.140},
            {id: "204", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.170, y: 0.667, width: 0.031, height: 0.140},
            {id: "205", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.170, y: 0.740, width: 0.014, height: 0.070},
            {id: "206", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.170, y: 0.853, width: 0.027, height: 0.144},
            {id: "207", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.195, y: 0.853, width: 0.052, height: 0.144},
            {id: "208", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.248, y: 0.853, width: 0.051, height: 0.144},
            {id: "209", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.301, y: 0.853, width: 0.029, height: 0.144},
            {id: "210", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.386, y: 0.853, width: 0.029, height: 0.144},
            {id: "211", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.414, y: 0.853, width: 0.027, height: 0.144},
            {id: "212", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.442, y: 0.853, width: 0.027, height: 0.144},
            {id: "213", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.470, y: 0.853, width: 0.027, height: 0.144},
            {id: "214", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.495, y: 0.853, width: 0.061, height: 0.144},
            {id: "215", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.557, y: 0.853, width: 0.143, height: 0.144},
            {id: "216", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.703, y: 0.853, width: 0.033, height: 0.144},
            {id: "218", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.796, y: 0.853, width: 0.200, height: 0.144},
            {id: "219", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.798, y: 0.667, width: 0.197, height: 0.140},
            {id: "221", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.672, y: 0.667, width: 0.094, height: 0.140},
            {id: "222", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.551, y: 0.667, width: 0.119, height: 0.140},
            {id: "223", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.414, y: 0.667, width: 0.085, height: 0.140},
            {id: "224", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.358, y: 0.667, width: 0.073, height: 0.140},
            {id: "229", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.183, y: 0.000, width: 0.118, height: 0.134},
            {id: "230", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.151, y: 0.000, width: 0.064, height: 0.134},
            {id: "231", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.028, y: 0.000, width: 0.123, height: 0.134},
            {id: "232", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.000, y: 0.000, width: 0.065, height: 0.134},
            {id: "233", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.000, y: 0.185, width: 0.077, height: 0.121},
            {id: "234", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.078, y: 0.185, width: 0.073, height: 0.121},
            {id: "235", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.175, y: 0.185, width: 0.104, height: 0.121},
            {id: "182", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.013, y: 0.662, width: 0.158, height: 0.336},
            {id: "130", name: "Room", img: "img/cabinets/secondFloor/none.png", x: 0.356, y: 0.000, width: 0.234, height: 0.304}
        ]
    },

    3: {
        // size of map x:1216 y:269
        image: "img/maps/thirdFloor.svg",
        rooms: [
            {id: "301", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.091, y: 0, width: 0.085, height: 0.416},
            {id: "302", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0, y: 0, width: 0.089, height: 0.416},
            {id: "303", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0, y: 0.584, width: 0.089, height: 0.405},
            {id: "304", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.091, y: 0.584, width: 0.085, height: 0.405},
            {id: "305", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.238, y: 0.584, width: 0.111, height: 0.405},
            {id: "306", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.349, y: 0.584, width: 0.102, height: 0.405},
            {id: "307", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.451, y: 0.584, width: 0.177, height: 0.405},
            {id: "308", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.628, y: 0.584, width: 0.041, height: 0.405},
            {id: "309", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.746, y: 0.584, width: 0.199, height: 0.405},
            {id: "310", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.946, y: 0.584, width: 0.052, height: 0.405},
            {id: "311", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.946, y: 0, width: 0.052, height: 0.416},
            {id: "312", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.746, y: 0, width: 0.199, height: 0.416},
            {id: "313", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.628, y: 0, width: 0.077, height: 0.416},
            {id: "314", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.445, y: 0, width: 0.183, height: 0.416},
            {id: "315", name: "Room", img: "img/cabinets/thirdFloor/none.png", x: 0.284, y: 0, width: 0.097, height: 0.416}
        ]
    },

    4: {
        // size of map x: 1219 y: 272
        image: "img/maps/fourthFloor.svg",
        rooms: [
            {id: "401", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.09, y: 0, width: 0.086, height: 0.401},
            {id: "402", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0, y: 0, width: 0.086, height: 0.401},
            {id: "403", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0, y: 0.588, width: 0.086, height: 0.401},
            {id: "404", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.09, y: 0.588, width: 0.086, height: 0.401},
            {id: "405", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.24, y: 0.588, width: 0.098, height: 0.401},
            {id: "406", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.338, y: 0.588, width: 0.102, height: 0.401},
            {id: "407", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.439, y: 0.588, width: 0.108, height: 0.401},
            {id: "408", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.547, y: 0.588, width: 0.112, height: 0.401},
            {id: "409", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.737, y: 0.588, width: 0.122, height: 0.401},
            {id: "410", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.859, y: 0.588, width: 0.139, height: 0.401},
            {id: "411", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.783, y: 0, width: 0.217, height: 0.401},
            {id: "412", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.741, y: 0, width: 0.041, height: 0.401},
            {id: "413", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.584, y: 0, width: 0.109, height: 0.401},
            {id: "414", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.476, y: 0, width: 0.107, height: 0.401},
            {id: "415", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.441, y: 0, width: 0.035, height: 0.401},
            {id: "416", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.372, y: 0, width: 0.067, height: 0.401},
            {id: "417", name: "Room", img: "img/cabinets/fourthFloor/none.png", x: 0.276, y: 0, width: 0.096, height: 0.401}
        ]
    }
}

// made by https://github.com/GeoJan21