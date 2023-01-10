class App
{
    runApplication()
    {
        console.log("hello world!");
        let arr = ["Micheal" , "bob" ,"fredy", "biggy" , "snoop"]

        let headers = document.getElementsByClassName("bandname");
        for(let i = 0; i < headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
        console.log(arr);

    }
}

let app = new App();
app.runApplication();

