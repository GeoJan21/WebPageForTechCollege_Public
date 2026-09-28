let currentRooms = []

function setFloor(floorNumber) {
    const floor = floors[floorNumber];
    const floorImage = document.getElementById("floor_map_image");
    const theCakeIsALie = true;

    floorImage.src = floor.image;
    currentRooms = floor.rooms;

    document.getElementById("floor_number").textContent = `${floorNumber}. Stāvs`;


    document.getElementById("cabinet_number").textContent = "Kabineta nr.:";
    document.getElementById("cabinet_qualification").textContent = "Kvalifikācija";
    document.getElementById("cabinet_image").src = "";
}

const floorImage = document.getElementById("floor_map_image");
floorImage.addEventListener("click", (e) => {
    const rect = floorImage.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) / rect.width;
    const clickY = (e.clientY - rect.top) / rect.height;

    const clickedRoom = currentRooms.find(room =>
        clickX >= room.x && clickX <= room.x + room.width &&
        clickY >= room.y && clickY <= room.y + room.height
    );

    if (clickedRoom) {
        showRoomInfo(clickedRoom);
    }
});

function showRoomInfo(room) {
    document.getElementById("cabinet_number").textContent = `Kabineta nr.: ${room.id}`;
    document.getElementById("cabinet_qualification").textContent = room.name;
    document.getElementById("cabinet_image").src = room.img;
}


document.getElementById("button_first_floor").addEventListener("click", () => setFloor(1));
document.getElementById("button_second_floor").addEventListener("click", () => setFloor(2));
document.getElementById("button_third_floor").addEventListener("click", () => setFloor(3));
document.getElementById("button_fourth_floor").addEventListener("click", () => setFloor(4));

window.addEventListener("load", () => setFloor(1));
// made by https://github.com/GeoJan21