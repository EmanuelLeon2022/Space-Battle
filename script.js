// create player classes
 class pilot {
    constructor(){
        this.player = ''
        this.hull =  20;
        this.firepower = 5
        this.accuracy = .7
    }
    bigShot(){

    }
    ugotShot(){

    }
    uDied(){

    }
}

const player1 = new pilot()
for (let i = 0; i<5; i++){
    player1.bigShot()
}
for (let i = 0; i<5; i--){
    player1.ugotShot()
}
for (let i = 20; i<0;){
    player1.out()
}


const player2 = new pilot()
/*if (attack alien)
    then alien attack
*/

//created enemy class
class enemy{
    constructor(){
        this.name =''
        this.hull = 0
        this.firepower = 0
        this.accuracy = 0
    }
    eShot(){
    }
    egShot(){
    }
}

const Mars = document.querySelector('#mars')
const Griffin = document.querySelector('#griffin')
const Chimera = document.querySelector('#chimera')
const Typhon = document.querySelector('#typhon')
const Serberus = document.querySelector('#serberus')
const Harpy = document.querySelector('#harpy')