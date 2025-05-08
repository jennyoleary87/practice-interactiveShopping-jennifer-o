window.addEventListener("load", () => {
    const buttonAdd = document.getElementById("buttonAdd");
    const textInput = document.getElementById("newInput");
    const list = document.getElementById("list");

    // addItem will create a list item that includes input text, an edit button, and a remove button for each item
    function addItem() {
        // create list item with text input from html input field
        const newItem = document.createElement("li");
        newItem.textContent = textInput.value; // .value to fix [object HTMLInputElement]
        list.appendChild(newItem);

        // edit button for each list item
        const buttonEdit = document.createElement("button");
        buttonEdit.textContent = "edit";
        newItem.appendChild(buttonEdit);
        buttonEdit.addEventListener("click", function () {
            newItem.innerHTML = `<input type="text" value="" />
            <button class="buttonSave">save</button>`; // removes edit and remove buttons & adds input field and save button
            const editInput = newItem.querySelector("input");
            const buttonSave = newItem.querySelector(".buttonSave");
            buttonSave.addEventListener("click", function () {
                const editedItem = editInput.value;
                newItem.textContent = editedItem;

                newItem.appendChild(buttonEdit);
                newItem.appendChild(buttonRemove);
                newItem = editedItem;
            })
        })

        // remove button for each list item    
        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = "remove";
        newItem.appendChild(buttonRemove);
        buttonRemove.addEventListener("click", function () {
            newItem.remove();
        });
    }

    buttonAdd.addEventListener("click", addItem);

});


// const buttonEdit = document.createElement("button");
// buttonEdit.textContent = "edit";
// newItem.appendChild(buttonEdit);
// buttonEdit.addEventListener("click", function () {
//     newItem.innerHTML = `<input type="text" value="" />
//     <button class="buttonSave">save</button>`; // removes edit and remove buttons & adds input field and save button
//     const editInput = newItem.querySelector("input");
//     const buttonSave = newItem.querySelector(".buttonSave");
//     buttonSave.addEventListener("click", function () {
//         const editedItem = editInput.value;
//         newItem.textContent = editedItem;

//         newItem.appendChild(buttonEdit);
//         newItem.appendChild(buttonRemove);
//         newItem = editedItem;
