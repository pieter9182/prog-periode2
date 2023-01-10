class App{
    runApplication(){
        console.log("hello world");
       
        let d1 = this.rollDice();
        console.log(d1);
    
    }
    rollDice(){
        let random = Math.floor(Math.random() * 6 + 1);
        return random
    }

}
let app = new App();
app.runApplication();