window.addEventListener("load", () => {
    const buttonAdd = document.getElementById("buttonAdd");
    const textInput = document.getElementById("newInput");
    const itemOutput = document.getElementById("output");
    const buttonEdit = document.createElement("button");
    const buttonRemove = document.createElement('button');

    function addItem() {
        const newItem = document.createElement("li");
        newItem.textContent = textInput.value;
        itemOutput.appendChild(newItem);
    }

    buttonAdd.addEventListener("click", addItem);

})

// const button = document.body.getElementById("add");
// button.addEventListener("click", function () {
//     const input = document.body.getElementById("newInput");
//     const output = document.body.createElement("li");
//     output.textContent = "kiwi";
//     document.body.appendChild(output);
//     input.addEventListener("newInput", function (event) {
//         output.textContent = `item: ${event.target.value}`;
//     });
// });

// const element = document.body.getElementById("li");
// element.remove();

