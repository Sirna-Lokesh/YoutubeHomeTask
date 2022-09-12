
let maxResults = 100;
let details;
let searchButton = document.querySelector("#sbutton");

var index = 0;

function getVideos() {
    fetchSearchResults().then((res) => {
        details = res.items;
        console.log(details);
        document.getElementById("CurrentPageNumber").classList.remove("hide");
        document.getElementById("pagination").classList.remove("hide");

        for (let i = 1; i <= 5; i++) {
            document.getElementById("thumbnail" + i).src = details[i].snippet.thumbnails.medium.url;
            document.getElementById("description" + i).innerText = details[i].snippet.description.substring(0, 50);
            document.getElementById("channel" + i).innerText = details[i].snippet.channelTitle.substring(0, 20);
            document.getElementById("publishDate" + i).innerText = details[index].snippet.publishTime.substring(0, 10);
            document.getElementById("thumbnail" + i).setAttribute("onclick", "window.open('https://www.youtube.com/watch?v=" + details[index].id.videoId + "')");
            document.getElementById("playButton" + i).setAttribute("onclick", "window.open('https://www.youtube.com/watch?v=" + details[index].id.videoId + "')");
        }
        document.getElementById("listOfImages").classList.remove("hide");
        var pageCount = 0;
        var currentPage = 1;
        function changeVideosByPagination(val) {
            let index = val * 5;
            currentPage = val;
            let previousPageNumber = document.getElementById("CurrentPageNumber").innerText = "You are Currently Viewing Page: " + Number(pageCount + currentPage);
            for (let i = 1; i <= 5; i++) {

                document.getElementById("thumbnail" + i).src = details[index].snippet.thumbnails.medium.url;
                document.getElementById("description" + i).innerText = "DESCRIPTION : " + details[index].snippet.description.substring(0, 50);
                document.getElementById("channel" + i).innerText = "Channel :" + details[index].snippet.channelTitle;
                document.getElementById("publishDate" + i).innerText = details[index].snippet.publishTime.substring(0, 10);
                document.getElementById("thumbnail" + i).setAttribute("onclick", "window.open('https://www.youtube.com/watch?v=" + details[index].id.videoId + "')");
                index += 1;
            }
        }
        document.getElementById("pagination-btn1").addEventListener("click", () => {

            changeVideosByPagination(1);
        })

        document.getElementById("pagination-btn2").addEventListener("click", () => {

            changeVideosByPagination(2);
        })

        document.getElementById("pagination-btn3").addEventListener("click", () => {

            changeVideosByPagination(3);
        })

        document.getElementById("pagination-btn4").addEventListener("click", () => {

            changeVideosByPagination(4);
        })

        document.getElementById("pagination-btn5").addEventListener("click", () => {

            changeVideosByPagination(5);
        })

        document.getElementById("pagination-btnNext").addEventListener("click", () => {
            let PageButtonsCollection = document.getElementsByClassName("pagination-btn");
            let ArrayOfPageButtons = Array.from(PageButtonsCollection);
            if (Number(ArrayOfPageButtons[0].innerText) <15) {
                pageCount += 5;
                for (let element of ArrayOfPageButtons) {
                    let previousInnerText = element.innerText;
                    element.innerText = Number(previousInnerText) + 5;
                }
            }
            
        })
        document.getElementById("pagination-btnPrevious").addEventListener("click", () => {
            let PageButtonsCollection = document.getElementsByClassName("pagination-btn");
            let ArrayOfPageButtons = Array.from(PageButtonsCollection);

            if (Number(ArrayOfPageButtons[0].innerText) > 5) {
                pageCount -= 5;
            }
            for (let element of ArrayOfPageButtons) {
                let previousInnerText = element.innerText;
                if (Number(previousInnerText) > 5) {
                    element.innerText = Number(previousInnerText) - 5;
                }

            }
        })

    })
}
if(searchButton)
{
    searchButton.addEventListener("click", getVideos);
}
    

function getSearchValue() {
    var value = "";
    if(document.querySelector("#search"))
    {
        value=document.querySelector("#search").value
    }
    else
    {
        value="java";
    }
    return value; 
}
function numberedButtons() {
    let PageButtonsCollection = document.getElementsByClassName("pagination-btn");
    let ArrayOfPageButtons = Array.from(PageButtonsCollection);
    return ArrayOfPageButtons;
}
function fetchSearchResults() {
    
    // AIzaSyDZp_COq8hBzXEJdHDXS0bGfzzG3dkGT8c
    let link = genarateLink()||`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZp_COq8hBzXEJdHDXS0bGfzzG3dkGT8c&type=video&part=snippet&maxResults=15&q=java`;

    return fetch(link).then((res) => {
        return res.json();
    }).catch(() => alert("Error in Fetching Results,Check Again"));
}
function genarateLink()
{
    const value = getSearchValue();
    let link = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZp_COq8hBzXEJdHDXS0bGfzzG3dkGT8c&type=video&part=snippet&maxResults=${maxResults}&q=${value}`;
    return link;
}






