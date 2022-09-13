
var maxResults = 100;
var details;
var searchButton = document.querySelector("#searchButton");

var index = 0;

if(searchButton)
{
    searchButton.addEventListener("click", getVideosOfSearchedText);
}

function getVideosOfSearchedText() {
    fetchSearchResults().then((res) => {
        details = res.items;
        makeVideosVisible();
        let videoIDArray=new Array();
        loadFirstPage(videoIDArray);
        getStats(...videoIDArray).then((items)=>{
            console.log(items);
            for(let i=1;i<=5;i++)
            {
                document.getElementById("viewscount"+i).innerText="Views:"+items[i].statistics.viewCount;
            }
           
        })
       
        var pageCount = 0;
        var currentPage = 1; 
        addEventListeners(details);
    })
}











