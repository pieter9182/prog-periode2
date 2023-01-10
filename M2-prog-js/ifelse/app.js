class App
{
    runApplication()
    {
            console.log("hello world!");
            let appnaam = "discord";
            let versienummer = 1.0
            let versiedatum = new Date ("2022-03-25");
            let autheur = "Damian Pietrzak";
            let copyright = "cc";
            let distributeur = "Damian Pietrzak";
            let darkmode = true
            let variablenaam=document.getElementById("gameID")

            console.log(appnaam)
            console.log(versienummer)
            console.log(versiedatum)
            console.log(autheur)
            console.log(copyright)
            console.log(distributeur)
            console.log(darkmode)
            let randomGetal = Math.random();

            if (randomGetal > 0.2 && randomGetal < 0.6){
                console.log("code");
         }
        
    }
}
let app = new App();

app.runApplication();