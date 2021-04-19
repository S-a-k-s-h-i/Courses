document.addEventListener('DOMContentLoaded',function(){
     AllData()
})
document.querySelector('table tbody').addEventListener('click',(event) => {
   if(event.target.className === "delete-row-btn"){
       deleteRowById(event.target.id);
   }
   if(event.target.className === "edit-row-btn"){
      editRowById(event.target.id)
}

});
const updateBtn = document.querySelector('#update-row-btn')
const searchBtn =document.querySelector("#search-btn");

searchBtn.onclick= function(){
    const searchValue = document.querySelector('#search').value;
    fetch('http://localhost:3000/search/'+searchValue)
    .then(response => response.json())
    .then(jsonData => loadHTMLTable(jsonData["data"]));
}

function AllData(){
    fetch('http://localhost:3000/getall')
    .then(response => response.json())
    .then(jsonData => loadHTMLTable(jsonData["data"]));
}

function editRowById(id){
    const updateSection = document.querySelector('#update-row');
    updateSection.hidden = false;
    document.querySelector('#update-row-btn').dataset.id = id
}
updateBtn.onclick = function(){
     const updateNameInput = document.querySelector('#update-name-input');
     const id =  document.querySelector('#update-row-btn').dataset.id;
     fetch('http://localhost:3000/edit',{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            id: id,
            name:updateNameInput.value
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.success){
            AllData()
            const updateSection = document.querySelector('#update-row');
            updateSection.hidden = true;
        }
    })
}

function deleteRowById(id){
    fetch('http://localhost:3000/delete/'+id,{
        method:'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            AllData()
        }
    })
}

const addBtn = document.querySelector('#add-name-btn');
addBtn.onclick = function(){
    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;
    nameInput.value = "";
    
    fetch('http://localhost:3000/insert',{
        headers:{
            'Content-type':'application/json'
        },
        method:'POST',
        body:JSON.stringify({name:name})
    })
    .then(response => response.json())
    .then(jsonData =>insertRowIntoTable(jsonData["data"]) )

}

function insertRowIntoTable(data){
     const table = document.querySelector('table tbody');
     const isTableData = table.querySelector('.no-data');
     let tableHtml = "<tr>";
     for(var key in data){
        if(data.hasOwnProperty(key)){
            if(key === 'dateAdded'){
                data[key] = new Date(data[key]).toLocaleString()
            }
            tableHtml += `<td>${data[key]}</td>`
        }

     }
     tableHtml += `<td><button class="edit-row-btn" id=${data.id}>Edit</button></td>`;
     tableHtml += `<td><button class="delete-row-btn" id=${data.id}>Delete</button></td>`;
     tableHtml +="</tr>"
     if(isTableData){
         table.innerHTML = tableHtml;
     }else{
         const newRow = table.insertRow();
         newRow.innerHTML = tableHtml;
     }
}

function  loadHTMLTable(data){
    const table = document.querySelector('table tbody');
    if(data.length === 0){
        table.innerHTML="<tr><td class='no-data' colspan='5'>No Data</td></tr>"
        return;
    }
    let tableHtml= '';
    data.forEach(({id,name,date_added})=>{
        console.log(id,name)
        tableHtml +="<tr>";
        tableHtml += `<td>${id}</td>`;
        tableHtml += `<td>${name}</td>`;
        tableHtml += `<td>${new Date(date_added).toLocaleString()}</td>`;
        tableHtml += `<td><button class="edit-row-btn" id=${id}>Edit</button></td>`;
        tableHtml += `<td><button class="delete-row-btn" id=${id}>Delete</button></td>`;
        tableHtml +="</tr>";
    });

    table.innerHTML = tableHtml;
}








