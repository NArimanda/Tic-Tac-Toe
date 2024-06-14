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


            //check for rows
            for (let i=0; i<3; i++){
                let counter =0;
                for (let j=0; j<3; j++){
                    console.log(gameArray[i][j])
                    if (gameArray[i][j] == name){
                        counter+=1
                    }
                    if (counter ==3){
                        return true;

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
                        return true;

                    }

                }
            }

            //check diagonals
            if(gameArray[0][0] == name && gameArray[1][1]==name && gameArray[2][2] ==name){
                return true;
            } 
            if(gameArray[0][2]==name && gameArray[1][1] ==name && gameArray[2][0]==name){
                return true;
            }
            

            return false;
        }
    }

    const player = function(name){
        this.name = name;
        this.askCoordinates = function(){
             return prompt('Please enter coordinates:')
        }
        this.endGame = function(){
            alert(`${this.name} won`)
        }
    }

    GameFlow = new gameflow()

    GameFlow.gameDisplay()

    //instantiate the two players
    const Player_x = new player('X')
    const Player_O = new player('O')


    while(true){
        GameFlow.updateArray(Player_x.askCoordinates(), Player_x.name)
        GameFlow.gameDisplay()

        if (GameFlow.checkVictory(Player_x.name)){
            Player_x.endGame()
            break;
        }

        GameFlow.updateArray(Player_O.askCoordinates(), Player_O.name)
        GameFlow.gameDisplay()

        if (GameFlow.checkVictory(Player_O.name)){
            Player_O.endGame()
            break;
        }
        
    }
    

})()