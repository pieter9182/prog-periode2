class App
{
    runApplication()
    {
        console.log("hello world!");
                
        let canvasvariable=document.getElementById("canvasId")   
        console.log(canvasvariable)
            
        let g = canvasvariable.getContext("2d");
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill()
        
        g.beginPath()
        g.fillStyle = "pink";
        g.moveTo(70,20);
        g.lineTo(60,40);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.closePath();
        g.stroke();
        g.fill()
        
        g.beginPath()
        g.fillStyle = "pink";
        g.moveTo(80,30);
        g.lineTo(80,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(80,30);
        g.closePath();
        g.stroke();
        g.fill()
        
        g.beginPath()
        g.fillStyle = "pink";
        g.moveTo(60,40);
        g.lineTo(60,60);
        g.lineTo(20,50);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill()


        g.beginPath()
        g.fillStyle = "grey";
        let randomGetal = Math.random();
        if (randomGetal > 0.2 && randomGetal < 0.6){
            g.fillStyle = "yellow";
        }
        g.moveTo(30,40);
        g.lineTo(32.5,40);
        g.lineTo(32.5,42.5);
        g.lineTo(30,42.5);
        g.lineTo(30,40);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        randomGetal = Math.random();
        if (randomGetal > 0.2 && randomGetal < 0.6){
            g.fillStyle = "yellow";
        }
        g.moveTo(33,40);
        g.lineTo(35.5,40);
        g.lineTo(35.5,42.5);
        g.lineTo(33,42.5);
        g.lineTo(33,40);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        randomGetal = Math.random();
        if (randomGetal > 0.2 && randomGetal < 0.6){
            g.fillStyle = "green";
        }
        g.moveTo(33,43);
        g.lineTo(35.5,43);
        g.lineTo(35.5,45.5);
        g.lineTo(33,45.5);
        g.lineTo(33,43);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "grey";
       randomGetal = Math.random();
        if (randomGetal > 0.2 && randomGetal < 0.6){
            g.fillStyle = "yellow";
        }
        g.moveTo(30,43);
        g.lineTo(32.5,43);
        g.lineTo(32.5,45.5);
        g.lineTo(30,45.5);
        g.lineTo(30,43);
        g.closePath();
        g.stroke();
        g.fill()

        




        
        

    }   
}
let app = new App();
app.runApplication();

