function addEventListeners(deatils)
        {
            for(let i=1;i<=5;i++)
            {
                document.getElementById("pagination-btn"+i).addEventListener("click", () => {
                    changeVideosByPagination(i,details);
                })
            }
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

        }