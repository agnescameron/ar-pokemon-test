var printDist = () => {
    const distanceMsg = document.querySelector("a-entity").getAttribute('distanceMsg');
    console.log("distance is", distanceMsg); 
}

window.onload = () => {
    let testEntitiesAdded = false;
    const el = document.querySelector("[gps-new-camera]");
    el.addEventListener("gps-camera-update-position", e => {
    if(!testEntitiesAdded) {
            const entity = document.createElement("a-box");
            entity.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity.setAttribute('material', { color: 'yellow' } );

            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude + 0.001
            });
            
            document.querySelector("a-scene").appendChild(entity);
            testEntitiesAdded = true;
        }
    });

        setInterval(printDist, 1000);
};


