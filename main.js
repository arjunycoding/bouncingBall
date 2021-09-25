let level = ['1', 's', 's', ' ', 's', 'b', 'b', '2']
function makeLevel(){
    maxNum = 2
    obstacle1 = Math.floor(Math.random() * maxNum) + 1;
    obstacle2 = Math.floor(Math.random() * maxNum) + 1;
    obstacle3 = Math.floor(Math.random() * maxNum) + 1;
    obstacle4 = Math.floor(Math.random() * maxNum) + 1;
    obstacle5 = Math.floor(Math.random() * maxNum) + 1;
    obstacle6 = Math.floor(Math.random() * maxNum) + 1;
    obstacle7 = Math.floor(Math.random() * maxNum) + 1;
    obstacle8 = Math.floor(Math.random() * maxNum) + 1;
    obstacle9 = Math.floor(Math.random() * maxNum) + 1;
    obstacles = [obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9]
    for(let i = 0; i <= 9; i++){
        if(obstacles[i] == 1){
            obstacles[i] = "b"
        }
        if(obstacles[i] == 2){
            obstacles[i] = "s"
        }
    }
    obstacles.unshift("1", ' ', ' ')
    obstacles.push("2")
    return obstacles
}
function createCoruse(array, append){
    appendTo = $("#course")
    for(let i = 0; i < array.length; i++){
        if(array[i] == 's'){
            appendTo.append("<img class='bush'src='/bush.png'>");
        }
        if(array[i] == 'b'){
           appendTo.append("<div class='block noBreack'></div>&nbsp;");
        }
        if(array[i] == '1'){
            appendTo.append("<div class='start noBreack'></div>&nbsp;");
        }
        if(array[i] == '2'){
            appendTo.append("<div class='finish noBreack'></div>&nbsp;");
        }
        if(array[i] == ' '){
            appendTo.append("<div class='noBreack'>&nbsp;&nbsp;</div>&nbsp;");
        }
        if(array[i] == '1'){
            appendTo.append("<div class='noBreack' id='me'></div>&emsp; &emsp; ");
        }
        if(array[i] == '2'){
            appendTo.append("<div class='portal noBreack'></div>&nbsp;");
        }
        
    }
}
function bounce(){
    let bounceBy = 5
    $("body").keydown(function (event) {
        key = event.keyCode
        player = $("#me")
        playerTop = player.css("top")
        playerLeft = player.css("left")
        if(key == 32){
            console.log(parseInt(playerTop.replace('px', '')))
            if(playerTop <= parseInt(playerTop.replace('px', ''))){
                player.css("top", playerTop);
            } else {
                playerTop = (parseInt(playerTop.replace('px', '')) - bounceBy) + 'px'
                player.css("top", playerTop);
            }
        } else {

        }
    });
    $("body").keyup(function(event) {
            player = $("#me")
            playerTop = player.css("top")
            playerLeft = player.css("left")
            while(playerTop <= "0px"){
                playerTop = (parseInt(playerTop.replace('px', '')) + bounceBy) + 'px'
                player.css("top", playerTop);    
            }
    })
}
function playGame(){
    createCoruse(makeLevel())
    bounce()
}
playGame()