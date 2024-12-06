let h1 = document.createElement('h1')
let addBox = document.createElement(`div`)
let labelInput = document.createElement(`label`)
let input = document.createElement(`input`)
let inputbox = document.createElement(`div`)
let add = document.createElement(`button`)
let listBox = document.createElement(`div`)
let nameList = document.createElement(`label`)
let manipulationButtons = document.createElement(`div`)
let list = document.createElement(`ul`)
let sortName = document.createElement(`button`)
let sortValue = document.createElement(`button`)
let del = document.createElement(`button`)
let manipulateSection = document.createElement(`div`)
document.body.appendChild(h1)
document.body.appendChild(addBox)
inputbox.append(labelInput,input)
addBox.append(inputbox,add)
document.body.appendChild(manipulateSection)
manipulationButtons.append(sortName,sortValue,del)
listBox.append(nameList,list)
manipulateSection.append(listBox, manipulationButtons)
h1.innerText = `Test`
labelInput.innerText = `Name=Value`
add.innerText = `Add`
nameList.innerText = `Name/Value Pair List`
sortName.innerText = `Sort by Name`
sortValue.innerText = `Sort by Value`
del.innerText =`Delete`


inputbox.classList.add(`inputbox`,`flex`)
input.classList.add(`input`)
addBox.classList.add(`flex`)
add.classList.add(`adder`)
labelInput.classList.add(`tutorLabel`)
h1.classList.add(`title`)
manipulateSection.classList.add(`manipulationBox`)
listBox.classList.add(`flex`,`column`)
list.classList.add(`list`)
manipulationButtons.classList.add(`column`,`flex`,`manipulationButtons`)





add.onclick =function () {
    const li = document.createElement(`li`)
    li.classList.add(`li`)
    const trim = input.value.trim()
    if (trim.includes("=")){
        let split = trim.split(`=`).map(piece => piece.trim())
        name = split[0]
        value = split[1]
        if (name && value) {
            li.innerText = name + `=` + value;
            li.onclick = function () {
                li.classList.toggle('selected');
            };
            list.appendChild(li);
        } else {
            alert("Обидві частини (name і value) мають бути заповнені!");
        }
    }
}
sortName.onclick = function () {
    const items = document.querySelectorAll(`li`)
    const itemsArray = Array.from(items);
    items.forEach(item => item.classList.add('li'));

    itemsArray.sort((a,b) =>{

        const A = a.innerText.split(`=`)[0]
        const B = b.innerText.split(`=`)[0]
        return A.length - B.length
    })
    const ul = document.querySelector('ul');
    list.innerText = '';
    itemsArray.forEach(item => list.appendChild(item));
}
sortValue.onclick = function (){
    const items = document.querySelectorAll(`li`)
    const itemsArray = Array.from(items)
    itemsArray.sort((a,b) =>{
        const A = a.innerText.split(`=`)[1]
        const B = b.innerText.split(`=`)[1]
        return A.length - B.length
    })

    const ul = document.querySelector('ul');
    ul.innerText = '';
    itemsArray.forEach(item => ul.appendChild(item));
}
del.onclick = function () {
    const selectedItems = document.querySelectorAll('li.selected')
    selectedItems.forEach(item => item.remove())
}