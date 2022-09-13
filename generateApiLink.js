function genarateLink()
{
    const value = getSearchValue();
    let link = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZp_COq8hBzXEJdHDXS0bGfzzG3dkGT8c&type=video&part=snippet&maxResults=${maxResults}&q=${value}`;
    return link;
}