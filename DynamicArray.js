
   var employee = [
     {
       ename: "ravi",
       num: "1",
       salary: "5000"
     },
     {
       ename: "siva",
       num: "2",
       salary: "6000"
     },
     {
       ename: "aravind",
       num: "3",
       salary: "8000"
     },
     {
       ename: "balu",
       num: "4",
       salary: "9000"
     },
     {
       ename: "charan",
       num: "5",
       salary: "4000"
     },
     {
       ename: "delhi",
       num: "6",
       salary: "1000"
     }
   ];
   var employeeSection1 = [
     {
       ename: "omkar",
       num: "7",
       salary: "5000"
     },
     {
       ename: "nagrjuna",
       num: "8",
       salary: "6000"
     },
     {
       ename: "james",
       num: "9",
       salary: "8000"
     },
     {
       ename: "arnold",
       num: "10",
       salary: "9000"
     },
     {
       ename: "stonecold",
       num: "11",
       salary: "4000"
     },
     {
       ename: "rock",
       num: "12",
       salary: "1000"
     }
   ];

   var str;
   str += "<table><tr><td>search:- <input type='text' id='text'></td>"
   str += "<td><button = 'button' id= 'button'>clikHere  </button></td></tr></table><br><br>";

   str += "<table border = '1' id='table' ><tr>"
   str += "<th id = 'th1' class='th'> Emp_name </th>"
   str += "<th id = 'th2' class='th'>Emp_Id</th>"
   str += "<th id = 'th3' class='th'>Emp_Sal</th></tr>";
    for( var i = 0; i < employee.length; i++){
     str += "<tr><td>" +employee[i].ename+ "</td><td>" +employee[i].num+ "</td><td>" +employee[i].salary+ "</td></tr>";
  }

   str += "</table>";
   str += "<br>";
   str += "<div id='pagination1'><ul>";
   str += "<li><a href = '#'>1</a></li>";
   str += "<li><a href = '#'> 2 </a></li>";
   str += "<li><a href = '#' id = '3list'> 3 </a></li>";
   str += "<li><a href = '#' id = '4list'> 4 </a></li>";
   str += "<li><a href = '#' id = '5list'> 5 </a></li>";
   str += "</ul><div>";
   var body = document.getElementById("body");

   body.innerHTML = str;


th1.addEventListener("click",sorting(0));
th2.addEventListener("click",sorting2(1));
th3.addEventListener("click",sorting3(2));
button.addEventListener("click",Filter);
//2list.addEventListener("click",pagenation);


/*function sorting(column){
var table = document.getElementById("table");
var rowCount = table.rows.length;
var temp = "", a, b;
for( var i = 1; i <= rowCount; i++ )
  {
    for ( var j = i; j < rowCount-1; j++ )
    {
      var k = j+1;
      a = table.rows[j].cells[column].innerHTML;
      b = table.rows[k].cells[column].innerHTML;
      console.log(a);
      console.log(b);
      if( a > b )
      {
        temp = table.rows[j].innerHTML;
        console.log(temp);
        table.rows[j].innerHTML = table.rows[k].innerHTML;
        table.rows[k].innerHTML = temp;
      }
    }
  }
}*/
function sorting(col){
  var table = document.getElementById("table");
var len=employee.length;
var a=employee;
for (var i = 1; i < len; i++) {
      for (var j = i + 1 ; j < len + 1; j++) {
         if (table.rows[i].cells[col].innerHTML > table.rows[j].cells[col].innerHTML ) {
            temp = table.rows[i].innerHTML

            table.rows[i].innerHTML = table.rows[j].innerHTML;
            table.rows[j+1].innerHTML = temp;
            console.log(table.rows[j+1].innerHTML);
         }
      }
    }
  }

/*function sorting1(){
var len=employee.length;
var a=employee;
for (var i = 0; i < len-1; i++) {
      for (var j = i + 1 ; j < len; j++) {
         if (a[i]["ename"] > a[j]["ename"]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
         }
      }
    }
    display(a);
  }

function sorting2(){

var len=employee.length;
var a=employee;
for (var i = 0; i < len-1; i++) {
      for (var j = i + 1 ; j < len; j++) {
         if (a[i]["num"] > a[j]["num"]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
         }
      }
    }display(a);
  }

function sorting3(){

var len = employee.length;
var a = employee;
for (var i = 0; i < len-1; i++) {
      for (var j = i + 1 ; j < len; j++) {
         if (a[i]["salary"] > a[j]["salary"]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
         }
      }
    }display(a);
}
function display(a){

    var table = document.getElementById("table");
    var rows = table.rows;
    for (i = 0; i < a.length; i++) {
    rows[i+1].innerHTML = "<td>"+a[i]["ename"]+"</td><td>"+a[i].num+"</td><td>"+a[i].salary+"</td>";
  }
}*/
function Filter() {

  var name = document.getElementById("text").value;
  var tbody = document.getElementById("table");
  var rows = tbody.rows,
      rlen = rows.length,
      arr = new Array(),
      i, j, cells, clen,r;

  for (i = 0; i < rlen; i++) {
      cells = rows[i].cells;
      clen = cells.length;
      arr[i] = new Array();
      for (j = 0; j < clen; j++) {
          arr[i][j] = cells[j].innerHTML;

           if(arr[i][j]==name){
               r = i;

          }
       }
     }
     for(i = 1; i < rlen; i++){
       if(i === r){
         continue;
       }
       else{
         tbody.rows[i].style.display = "none";
    }
  }
}
/*function pagenation(){
  var tbody=document.getElementById("table");
  var rows = tbody.rows,
  var i,j;
  for(i = 0, j = 0; i < employeeSection.length; i++){
   tbody.rows[i+1].cells[j++].innerHTML=employeeSection1[i].ename;
   tbody.rows[i+1].cells[j++].innerHTML=employeeSection1[i].num;
   tbody.rows[i+1].cells[j].innerHTML=employeeSection1[i].salary;
  }
}*/
