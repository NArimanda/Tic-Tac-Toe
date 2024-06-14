(function(){
    let gameArray = [['_', '_', '_'],['_', '_', '_'],['_', '_', '_']]
    
    const gameflow = function(){
        this.gameDisplay = function(){
            for(row of gameArray){
                console.log(row)
            }
        }

        this.updateArray = function(inpt, name){
            let slider = inpt.split(' ')
            let a = slider[0]
            let b = slider[1]

            console.log(`${a}, ${b}`)

            if (name == 'X'){
                gameArray[a][b] ='X'
            }
            else if(name=='O'){
                gameArray[a][b]='O'
            }
        }

        this.checkVictory = function(name){
            let storeVariable = false;

            //check for rows
            for (let i=0; i<3; i++){
                let counter =0;
                for (let j=0; j<3; j++){
                    console.log(gameArray[i][j])
                    if (gameArray[i][j] == name){
                        counter+=1
                    }
                    if (counter ==3){
                        storeVariable = true;
                        break;
                    }

                    
                }
            }


            //check for columns
            for (let i=0; i<3; i++){
                let counter =0;
                for (let j=0; j<3; j++){
                    console.log(gameArray[j][i])
                    if (gameArray[j][i] == name){
                        counter+=1
                    }
                    
                    if (counter ==3){
                        storeVariable = true;
                        break;
                    }

                }
            }

            console.log(storeVariable)
        }
    }

    GameFlow = new gameflow()

    GameFlow.gameDisplay()

    GameFlow.updateArray('1 1', 'X')
    GameFlow.updateArray('1 0', 'X')
    GameFlow.updateArray('1 2', 'X')
    GameFlow.gameDisplay()

    GameFlow.checkVictory('X');
    

})()