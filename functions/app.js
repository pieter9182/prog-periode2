class App
{
    runApplication()
    {
        this.mario()
        let laugh = this.whahaha()
        console.log(laugh)
        let calculated = this.getal(5,5)
        console.log(calculated)
    }
        mario()
        {
            console.log("MARIO!!")

        }

        whahaha()
        {
            let laugh = "whahahaha!!!"

            return laugh
        }
        
        getal(x, y)
        {
        
        
        let calculated = x + y
        return calculated
        }
    
}

let app = new App();
app.runApplication();



