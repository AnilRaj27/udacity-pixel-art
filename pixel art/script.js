//default Grid to display
makeGrid(10,10);


//main function for behavioural action
document.addEventListener("DOMContentLoaded", function() {
  var height_grid,width_grid,canvas;
  var colorPicker=document.getElementById('colorPicker');

  var submit = document.querySelector("button[type = 'submit']");
    submit.addEventListener('click', function(e){
      e.preventDefault();
    makeGrid(10,10);
    });
    var pcc=document.getElementById('pixelCanvas');
    pcc.addEventListener('click',function(e){
      e.preventDefault();
      pickcolourtocells();
    });


    var er=document.querySelector("button[type='button']");
      er.addEventListener('mouseover',function(e){
        e.preventDefault();
        eraser();
      });

    var clear=document.querySelector("button[type='reset']");
    clear.addEventListener('click',function(e){
      e.preventDefault();
      delete_grid();
  });
});


//function to make the grid.
function makeGrid(height_grid,width_grid) {
  height_grid=document.getElementById('inputHeight').value;
  width_grid=document.getElementById('inputWidth').value;
  canvas=document.getElementById('pixelCanvas');


      canvas.innerHTML="";
  		for(var i=0;i<height_grid;i++)
        {
          var tr=document.createElement("TR");

          for(var j=0;j<width_grid;j++)
          {
            var td=document.createElement("TD");
            td.setAttribute("class","cells");
            tr.appendChild(td);
          }
            canvas.appendChild(tr);
        }
}



//function to erase the colour.
function eraser() {
document.getElementById('pixelCanvas').addEventListener('mouseover',function(evt){
              if(evt.target.nodeName==='TD'){
                event.target.bgColor="white";
              }
});
}


//function to add colours to the grid.
function pickcolourtocells() {
        document.getElementById('pixelCanvas').addEventListener('mouseover',function (evt) {
    if (evt.target.nodeName === 'TD') {
      event.target.bgColor = document.getElementById('colorPicker').value;
    }
});
}


//function to delete the whole grid.
function delete_grid() {
        var canvas;
        canvas=document.getElementById('pixelCanvas');
        canvas.innerHTML="";
}




var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
