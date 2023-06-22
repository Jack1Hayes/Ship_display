
function myFunction(){

    var token = "/5JkSkCSaRXJdgxB4/"

    var fromDate = new Date(document.getElementById("from").value);
    
    var ReportDate = fromDate.toLocaleDateString('en-CA').replace(/-/g,"");

    var APIaccess = String(token +"/" + ReportDate);

    return APIaccess

}
  
function getData(){
  
    fetch("https://www.ssyreports.com/api/ExampleEodCommentary/"+myFunction())
							.then(res => {
								return res.json();
							}).then(data => { document.querySelector('ul').innerHTML = "<ul></ul>";
								data.forEach(user =>{ 
                  
                  const markup = `<h3>${user.commentCode}</h3><p>${user.comment}</p>`;
  
                  document.querySelector('ul').insertAdjacentHTML('beforeend',markup);

                  

                
                });
              
							})
              .catch(error => alert(error + '<br>Please Choose valid date'));
}



function getTableData(){
    fetch("https://www.ssyreports.com/api/ExampleEodPrices/"+myFunction())
							.then(res_table => {
								return res_table.json();
							}).then(data_table => { document.querySelector('tbody').innerHTML = `<tr id="root"></tr>`
								data_table.forEach(element =>{
                  var root = document.getElementById('root');
                  data_table.forEach(element => root.insertAdjacentHTML('beforebegin', `<tr><td>${element.periodCode}</td><td>${element.price}</td><td>${element.doD}</td></tr>`));                                    
                  
                  });
							})

              .catch(error => console.log(error));
}



function clickFunction(){
  getData();
  getTableData();
}


