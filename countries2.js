document.getElementById("region").addEventListener("change", activacity)
document.getElementById("comuna").disabled;
let comStgo = ["Pirque", "Recoleta", "Cerrillos", "San Miguel", "La Florida", "Macul", "Ñuñoa"];
let comChacabuco = ["Colina", "Lampa", "TilTil"];
let comTalagante = ["Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"];
let comMaipo = ["San Bernardo", "Buin", "Calera de Tango", "Paine"];
let ciudad = document.getElementById("ciudad");
ciudad.addEventListener("change", activacity);


function activacity() {
    document.getElementById("ciudad").disabled=false;
    let i = ciudad.options.selectedIndex;
    let id = ciudad.options[i].getAttribute("data-ciudad-id");
        if (id == "1") {
                document.getElementById("comuna").length = 0;
                let city = document.createElement("option");
                city.text = "Comunas";
                document.getElementById("comuna").appendChild(city);
                city.disabled = true;
                document.getElementById("comuna").disabled=false;
            for (i = 0; i < comStgo.length; i++) {
                let city = document.createElement("option");
                city.text = comStgo[i];
                document.getElementById("comuna").appendChild(city);
                }
        } else if (id == "2") {
                document.getElementById("comuna").length = 0;
                let city = document.createElement("option");
                city.text = "Comunas";
                document.getElementById("comuna").appendChild(city);
                city.disabled = true;
                document.getElementById("comuna").disabled=false;
            for (i = 0; i < comChacabuco.length; i++) {
                let city = document.createElement("option");
                city.text = comChacabuco[i];
                document.getElementById("comuna").appendChild(city);
        }
        
        } else if (id == "3") {
                document.getElementById("comuna").length = 0;
                let city = document.createElement("option");
                city.text = "Comunas";
                document.getElementById("comuna").appendChild(city);
                city.disabled = true;
                document.getElementById("comuna").disabled=false;
            for (i = 0; i < comTalagante.length; i++) {
                let city = document.createElement("option");
                city.text = comTalagante[i];
                document.getElementById("comuna").appendChild(city);
        }  
        } else if (id == "4") {
                document.getElementById("comuna").length = 0;
                let city = document.createElement("option");
                city.text = "Comunas";
                document.getElementById("comuna").appendChild(city);
                city.disabled = true;
                document.getElementById("comuna").disabled=false;
            for (i = 0; i < comMaipo.length; i++) {
                let city = document.createElement("option");
                city.text = comMaipo[i];
                document.getElementById("comuna").appendChild(city);
        }
}
}