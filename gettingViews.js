async function getStats(videoID1,videoID2,videoID3,videoID4,videoID5)
{
    
    let link=`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDZp_COq8hBzXEJdHDXS0bGfzzG3dkGT8c&id=${videoID1},${videoID2},${videoID3},${videoID4},${videoID5},REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics`;
    return fetch(link).then((res) => {
        return res.json();
    })
    .then((res)=>{return res.items;})
    .catch(() => alert("Error in Fetching stats,Check Again"));

}