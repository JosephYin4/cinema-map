// Singapore

const map = L.map('map').setView([1.3521,103.8198],12);

// OpenStreetMap

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:'© OpenStreetMap'
}
).addTo(map);

const markers = [];

cinemas.forEach(cinema=>{

    const marker = L.marker([cinema.lat,cinema.lng])
    .addTo(map);

    marker.bindPopup(`
        <h3>${cinema.name}</h3>

        <b>Brand:</b> ${cinema.brand}<br>

        <b>Address:</b><br>
        ${cinema.address}<br><br>

        🚇 <b>Nearest MRT</b><br>
        ${cinema.mrt}
    `);

    markers.push({
        marker,
        cinema
    });

});


// Search

document
.getElementById("search")
.addEventListener("keyup",function(){

    const keyword = this.value.toLowerCase();

    markers.forEach(item=>{

        if(item.cinema.name.toLowerCase().includes(keyword)){

            map.setView(
                [item.cinema.lat,item.cinema.lng],
                16
            );

            item.marker.openPopup();
        }

    });

});
