let player = document.getElementById('player')

 function play(musica) {
    player.innerHTML = `<audio autoplay loop controls id="player">
    <source src="${musica}">
</audio>`
 }