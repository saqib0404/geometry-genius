let count = 0;
function calc(item) {
    count ++
    const input1 = (item.parentNode.children[2].children[0]);
    const input2 = (item.parentNode.children[2].children[2]);
    const itemName= item.parentNode.children[1].innerText;

    const result = input1.value * input2.value;
    input1.value = ""
    input2.value = ""

    const calculations = document.getElementById("calculation")
    const li = document.createElement("li");
    li.innerText = `${count}. ${itemName}  ${result} cm`

    calculations.appendChild(li)
}