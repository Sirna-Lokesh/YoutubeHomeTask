var pageCount = 0;
var currentPage = 1; 
function changeVideosByPagination(val) {
    let index = val * 5;
    currentPage = val;
    let previousPageNumber = document.getElementById("CurrentPageNumber").innerText = "You are Currently Viewing Page: " + Number(pageCount + currentPage);
    let videoIDArray=new Array();
    for (let i = 1; i <= 5; i++) {
        videoIDArray.push(details[index].id.videoId);
        document.getElementById("thumbnail" + i).src = details[index].snippet.thumbnails.medium.url;
        document.getElementById("description" + i).innerText = "DESCRIPTION : " + details[index].snippet.description.substring(0, 50);
        document.getElementById("channel" + i).innerText = "Channel :" + details[index].snippet.channelTitle;
        document.getElementById("publishDate" + i).innerText = details[index].snippet.publishTime.substring(0, 10);
        document.getElementById("thumbnail" + i).setAttribute("onclick", "window.open('https://www.youtube.com/watch?v=" + details[index].id.videoId + "')");
        index += 1;
    }
    getStats(...videoIDArray).then((items)=>{
        console.log(items);
        for(let i=1;i<=5;i++)
        {
            document.getElementById("viewscount"+i).innerText="Views:"+items[i].statistics.viewCount;
        }
       
    })

}
function numberedButtons() {
    let PageButtonsCollection = document.getElementsByClassName("pagination-btn");
    let ArrayOfPageButtons = Array.from(PageButtonsCollection);
    return ArrayOfPageButtons;
}