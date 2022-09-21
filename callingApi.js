function fetchSearchResults() 
{
    let link = genarateLink()||(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZp_COq8hBzXEJdHDXS0bGfzzG3dkGT8c&type=video&part=snippet&maxResults=15&q=java`);

    return fetch(link)
    .then((res) => {
        return res.json();
    }).catch(() => alert("Error in Fetching Results,Check Again"));
}