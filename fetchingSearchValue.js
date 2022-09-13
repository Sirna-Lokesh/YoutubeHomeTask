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