console.log("This is TODO List APP version 1.1.2021")


// Function to Get and Add TODO List
function getAndAddTODOList(){
    let addTODO = document.getElementById('addTODO')
    var numOfTODO = 1
    addTODO.addEventListener('click' , function(){
        let getTODO = document.getElementById('getTODO').value
        let html = `<div id="listTODO" class="card text-dark bg-warning mb-3 my-5 mx-5" style="max-width: 18rem;">
                    <div class="card-header">TODO List ${numOfTODO}</div>
                    <div class="card-body">
                    <p class="card-text">${getTODO}</p>
                    </div>
                    </div>`
        let container = document.getElementById('container')
        container.innerHTML += html
        let success = document.getElementById('success')
            success.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Successfully Added ! ; ) </strong> Now You won't forget about TODO's
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>` 
        getTODO.value = ""
        console.log("Done Writing TODO")
        numOfTODO += 1
    })
}


// Function To search TODO list

function searchTODO(){
    // Pending
}
    

getAndAddTODOList()
// searchTODO()