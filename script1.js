window.addEventListener("load", () => {
    const buttonAdd = document.getElementById("buttonAdd");
    const textInput = document.getElementById("newInput");
    const itemOutput = document.getElementById("output");

    // addItem will create a list item that includes input text, an edit button, and a remove button for each item
    function addItem() {
        // create list item with text input from html input field
        const newItem = document.createElement("li");
        newItem.textContent = textInput.value; // .value to fix [object HTMLInputElement]
        itemOutput.appendChild(newItem);

        // edit button for each list item
        const buttonEdit = document.createElement("button");
        buttonEdit.textContent = "edit";
        newItem.appendChild(buttonEdit);

        // remove button for each list item    
        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = "remove";
        newItem.appendChild(buttonRemove);
    }

    buttonAdd.addEventListener("click", addItem);
});

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

