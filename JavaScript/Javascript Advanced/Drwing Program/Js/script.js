const painter = {};

painter.colors = ['black', 'blue', 'red', 'yellow', 'green', 'purple', 'brown', 'orange'];
painter.currentColor = "black";
painter.currentTool = "pen";




var my_canvas = document.querySelector("#canvas");
var my_color_bar = document.querySelector('#colors-bar');




painter.initializer = (canvas_height = 500, canvas_width = 500) => {

    my_canvas.style.height = `${canvas_height}px`;
    my_canvas.style.width = `${canvas_width}px`;
    my_canvas.style.border = "1px solid green";




    painter.insertColors = () => {

        for (const color of painter.colors) {
            var newElement = document.createElement('div');
            newElement.setAttribute('id', color);
            newElement.style.backgroundColor = color;
            newElement.style.width = '40px';
            newElement.style.height = '60.5px';
            newElement.style.border = 'black 1px solid';

            document.querySelector("#colors-bar").appendChild(newElement);




        }
    }

    painter.insertColors();




    var flag = true;




    painter.draw = () => {

        if (flag) {
            var new_Div = document.createElement('div');
            document.body.appendChild(new_Div);
            new_Div.style.position = "absolute";
            new_Div.style.left = `${event.pageX}px`;
            new_Div.style.top = `${event.pageY}px`;
            new_Div.style.backgroundColor = painter.currentColor;

            if (painter.currentTool == "pen") {
                new_Div.style.width = "2px";
                new_Div.style.height = "2px";
            }
            else if (painter.currentTool == "eraser") {
                new_Div.style.backgroundColor = "white";
                new_Div.style.width = "20px";
                new_Div.style.height = "20px";

            }

            else if (painter.currentTool == "brush") {
                new_Div.style.width = "7px";
                new_Div.style.height = "7px";

            }


        }
    }


    painter.stop = () => {
        flag = false;
        // return flag;
    }


    painter.start = () => {
        flag = true;

    }


    my_canvas.addEventListener('mousedown', () => { my_canvas.addEventListener('mousemove', painter.draw) });
    window.addEventListener('mouseup', painter.stop);
    window.addEventListener('mousedown', painter.start);



    changeColor = () => {

        var temp = event.target;

        if (temp.id == "colors-bar") {
            return;
        }
        painter.currentColor = temp.id;


    }


    my_color_bar.addEventListener('click', changeColor);


    changeTool = () => {

        var temp = event.target;
        if (temp.id == "left-menu") {
            return;
        }

        painter.currentTool = temp.id;


    }

    my_left_menu.addEventListener('click', changeTool);



painter.clear=()=>{

// my_canvas.innerHTML='';
location.reload();


}

clear_btn.addEventListener("click",painter.clear);




// edit_size_btn.addEventListener('click')





}



var canvas_height = 500;
var canvas_width = 900;




painter.initializer(canvas_height,canvas_width);