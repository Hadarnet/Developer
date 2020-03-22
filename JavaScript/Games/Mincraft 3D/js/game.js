const minCraft = {}
console.log(minCraft)

minCraft.start = () => {
    minCraft.matrix();
    minCraft.toolBar();   
    minCraft.invetory();

}

minCraft.matrix = () => {
    const matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1],
        [1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]

    ];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const target = document.getElementById("matrix");
            const el = document.createElement("div");
            el.addEventListener("click", minCraft.ming)
            el.classList.add("tile");
            target.appendChild(el);

            switch (matrix[i][j]) {
                case 0:
                    break;
                case 1:
                    el.classList.add("dirt");
                    break;
                case 2:
                    el.classList.add("trunk");
                    break;
                case 3:
                    el.classList.add("leafs");
                    break;
                case 4:
                    el.classList.add("lava");
                    break;

                case 5:
                    el.classList.add("rocks");
                    break;

            }


            // if (matrix[i][j] === 0) {
            //     el.classList.add("sky");


            // } 
            // if (matrix[i][j] === 1) {
            //     el.classList.add("dirt");

        }

    }
};

minCraft.toolBar = () => {
    const toolKit = [
        {
            name: "axe",
            url: "./img/axe.jpg"

        },
        {
            name: "shovel",
            url: "./img/shovel.jpg"

        },
        {
            name: "pickAxe",
            url: "./img/pickAxe.jpg"

        }
    ];

    toolKit.map(tool => {
        const target = document.getElementById("toolBar");
        const el = document.createElement("div");
        el.classList.add(tool.name, "tool");
        el.setAttribute("data-type", tool.name)
        el.style.backgroundImage =  `url(${tool.url})` ;
        el.addEventListener("click", minCraft.pic)
        target.appendChild(el);
        console.log(tool)
    });
};

minCraft.invetory = () => {
    const target = document.getElementById("Storage");
    const el = document.createElement("div");
    el.classList.add("invetory");
    target.appendChild(el);
};

minCraft.ming = event =>  {

};

minCraft.pickedTool = event =>{
    console.log (event.target.getAttribute("data-type"));

}
        

minCraft.start()


// Hardcode in HTML:
// 1) Wrapper container
// 2) Matrix container
// 3) Tool bar container
// 4) Storage container
//     1) Matrix
//     a) 2d Array
//         [
//         [0,0,0,0,0,0,0,0],
//         [0,1,1,0,0,0,0,0],
//         [0,2,0,0,0,0,0,0],
//         []
//         ]
//         b) We loop over this 2d array and attach classes to them.
//          1) sky,leafs,trunk,rocks,dirt,lava, [tile]
//     2) Tool bar
//         a) create an array of tools ["axe", "pick-axe", "shovel"] or create an object with the name and img url
//         b) loop creates divs with classes and put them in the DOM
//     3) Storage place
//     a) create one div and attach a class
//     4) Connect everything together
