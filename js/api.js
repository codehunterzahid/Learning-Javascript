const URl = "https://api.publicapis.org/entries";

const publicNews = async () =>{
    let response = await fetch (URl);
    console.log(response);
}

publicNews();