let artists = ["Pearl Jam", "Soundgarden", "Audioslave"];
let songs = document.getElementById("songs");
let output = document.getElementById("artist");
songs.addEventListener("change",artistName);
function artistName() {
    let i = this.options.selectedIndex;
    let id = this.options[i].getAttribute("data-artist-id");
    let name = artists[id];
    output.value = name;
}

