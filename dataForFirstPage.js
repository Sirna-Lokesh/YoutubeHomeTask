function loadFirstPage(videoIDArray)
{
    for (let i = 1; i <= 5; i++) {
            videoIDArray.push(details[i].id.videoId);
            document.getElementById("viewscount1").innerText="Views:";
            document.getElementById("thumbnail" + i).src = details[i].snippet.thumbnails.medium.url;
            document.getElementById("description" + i).innerText = details[i].snippet.description.substring(0, 50);
            document.getElementById("channel" + i).innerText = details[i].snippet.channelTitle.substring(0, 20);
            document.getElementById("publishDate" + i).innerText = details[index].snippet.publishTime.substring(0, 10);
            document.getElementById("thumbnail" + i).setAttribute("onclick", "window.open('https://www.youtube.com/watch?v=" + details[index].id.videoId + "')");
            document.getElementById("playButton" + i).setAttribute("onclick", "window.open('https://www.youtube.com/watch?v=" + details[index].id.videoId + "')");
        }
}