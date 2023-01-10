class App{
    runApplication(){
        let button = document.getElementById("button1");
        button.addEventListener('click', ()=>{
            console.log("hello click")
            let stat1 = this.rollStat(); 
            console.log(stat1)
            let header1 =document.getElementById("s1")
            header1.innerHTML = stat1
            let stat2 = this.rollStat(); 
            console.log(stat2)
            let header2 =document.getElementById("s2")
            header2.innerHTML = stat2
            let stat3 = this.rollStat();
            console.log(stat3) 
            let header3 =document.getElementById("s3")
            header3.innerHTML = stat3
            let stat4 = this.rollStat();
            console.log(stat4) 
            let header4 =document.getElementById("s4")
            header4.innerHTML = stat4
            let stat5 = this.rollStat();
            console.log(stat5)
            let header5 =document.getElementById("s5")
            header5.innerHTML = stat5 
            let stat6 = this.rollStat();
            console.log(stat6)
            let header6 =document.getElementById("s6")
            header6.innerHTML = stat6
        })
      


    
    }
    rollDice(){
        return Math.floor(Math.random() * 6 + 1);
        return random
    }
    rollStat(){

    let d1 = this.rollDice();
    let d2 = this.rollDice();
    let d3 = this.rollDice();
    let d4 = this.rollDice();
    let diceArray = [d1, d2, d3, d4];
        diceArray.sort();
        let som = diceArray[1] + diceArray [2] + diceArray [3];
        return som;


    }

}
let app = new App();
app.runApplication();
