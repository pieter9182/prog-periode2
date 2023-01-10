class dino
{

    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }
}

class plant
{
    constructor(eennaam)
    {
        this.naam = eennaam;
    }
}

class App
{
    runApplication()
    {
        let trex = new dino("Trex",true,10 );
        let ankilo = new dino("ankilo",false,23)
        let raptor = new dino("raptor",true,4)
        console.log(trex)
        console.log(ankilo)
        console.log(raptor)
    }

}

let app = new App();
app.runApplication();