function addEventListeners(deatils)
        {
            document.getElementById("pagination-btn1").addEventListener("click", () => {

                changeVideosByPagination(1,details);
            })
    
            document.getElementById("pagination-btn2").addEventListener("click", () => {
    
                changeVideosByPagination(2,details);
            })
    
            document.getElementById("pagination-btn3").addEventListener("click", () => {
    
                changeVideosByPagination(3,details);
            })
    
            document.getElementById("pagination-btn4").addEventListener("click", () => {
    
                changeVideosByPagination(4,details);
            })
    
            document.getElementById("pagination-btn5").addEventListener("click", () => {
    
                changeVideosByPagination(5,details);
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

        }