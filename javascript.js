let gameLoop = (function(){
    let gameArray = [['_', '_', '_'],['_', '_', '_'],['_', '_', '_']]
    

    let boxes = document.querySelectorAll('td')

    let h3 = document.querySelector('h3')


    const gameflow = function(){
        this.gameDisplay = function(){
            for(row of gameArray){
                console.log(row)
            }
        }

        this.checkDraw = function(){
            for(item of gameArray){
                for (x of item){
                    if (x == '_'){

                        return false;
                    }
                }
            }

            return true;
        }

        this.updateArray = function(slider, name){

            let a = slider[0]
            let b = slider[1]



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

                    if (gameArray[i][j] == name){
                        counter+=1
                    }
                    if (counter ==3){
                        let text =`${i} ${j}`
                        let text2 = `${i} ${j-1}`
                        let text3 = `${i} ${j-2}`
                        document.getElementById(text).style.backgroundColor = 'red'
                        document.getElementById(text2).style.backgroundColor = 'red'
                        document.getElementById(text3).style.backgroundColor = 'red'
                        return true;

                    }

                    
                }
            }


            //check for columns
            for (let i=0; i<3; i++){
                let counter =0;
                for (let j=0; j<3; j++){

                    if (gameArray[j][i] == name){
                        counter+=1
                    }
                    
                    if (counter ==3){

                        let text =`${j} ${i}`
                        let text2 = `${j-1} ${i}`
                        let text3 = `${j-2} ${i}`
                        document.getElementById(text).style.backgroundColor = 'red'
                        document.getElementById(text2).style.backgroundColor = 'red'
                        document.getElementById(text3).style.backgroundColor = 'red'
                        return true

                    }

                }
            }

            //check diagonals
            if(gameArray[0][0] == name && gameArray[1][1]==name && gameArray[2][2] ==name){
                document.getElementById('0 0').style.backgroundColor = 'red'
                document.getElementById('1 1').style.backgroundColor = 'red'
                document.getElementById('2 2').style.backgroundColor = 'red'
                return true;
            } 
            if(gameArray[0][2]==name && gameArray[1][1] ==name && gameArray[2][0]==name){
                document.getElementById('0 2').style.backgroundColor = 'red'
                document.getElementById('1 1').style.backgroundColor = 'red'
                document.getElementById('2 0').style.backgroundColor = 'red'
                return true;
            }
            

            return false;
        }
    }

    

    const player = function(name){
        this.name = name;
        this.askCoordinates = function(kiln){
             
             let klein = kiln.split(' ')

             while(gameArray[klein[0]][klein[1]] != '_'){
                kiln = prompt('Try again:')
                klein = kiln.split(' ')
             }
             return klein;
        }

        this.endGame = function(){
            console.log(`${this.name} won`)
            h3.innerText = `${this.name} has won`
        }
    }

    GameFlow = new gameflow()

    GameFlow.gameDisplay()

    //instantiate the two players
    const Player_x = new player('X')
    const Player_O = new player('O')


    currentplayer = Player_x
    isDone = false
    for (box of boxes){
        box.innerText = '!'
        box.addEventListener('click', (box) => {
            if(isDone == false){
            let x = currentplayer.askCoordinates(String(box.target.id))
            GameFlow.updateArray(x, currentplayer.name)
            document.getElementById(x.join(' ')).innerText = String(currentplayer.name)
            GameFlow.gameDisplay()

            if (GameFlow.checkVictory(currentplayer.name)){
                currentplayer.endGame()
                isDone = true
                return
            }

            if (GameFlow.checkDraw()){
                console.log('DRAW')
                h3.innerText = 'Draw'
                
                isDone = true
                return
            }

            if(currentplayer == Player_x){
                currentplayer = Player_O
                h3.innerText = `O's turn`
            }
            else{
                currentplayer = Player_x
                h3.innerText = `X's turn`
            }
        }
        })
    }

    


    

})()
