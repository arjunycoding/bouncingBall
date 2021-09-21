let level = ['1', 's', 's', ' ', 's', 'b', 'b', '2']
function makeLevel(){
    maxNum = 3
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
        if(obstacles[i] == 3){
            obstacles[i] = "l"
        }
    }
    obstacles.unshift("1", ' ', ' ')
    obstacles.push("2")
    return obstacles
}
function readArray(array, append){
    appendTo = $("#course")
    for(let i = 0; i < array.length; i++){
        if(array[i] == 's'){
            appendTo.append("<div class='spike noBreack'></div>&nbsp;");
        }
        if(array[i] == 'b'){
           appendTo.append("<div class='block noBreack'></div>&nbsp;");
        }
        if(array[i] == 'l'){
            appendTo.append("<div class='lava noBreack'></div>&nbsp;");
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
            appendTo.append("<div class='noBreack' id='me'></div>&nbsp;");
        }
        if(array[i] == '2'){
            appendTo.append("<div class='portal noBreack'></div>&nbsp;");
        }
        
    }
}
setInterval(function(){readArray(makeLevel())}, 1000)
// readArray(makeLevel())