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
//створви всі об'єкти і їх бокси
document.body.appendChild(h1)
document.body.appendChild(addBox)
inputbox.append(labelInput,input)
addBox.append(inputbox,add)
document.body.appendChild(manipulateSection)
manipulationButtons.append(sortName,sortValue,del)
listBox.append(nameList,list)
manipulateSection.append(listBox, manipulationButtons)
//створив дом структуру

h1.innerText = `Test`
labelInput.innerText = `Name=Value`
add.innerText = `Add`
nameList.innerText = `Name/Value Pair List`
sortName.innerText = `Sort by Name`
sortValue.innerText = `Sort by Value`
del.innerText =`Delete`
//додав кожному об'єкту текс


inputbox.classList.add(`inputbox`,`flex`)
input.classList.add(`input`)
addBox.classList.add(`addBox`)
add.classList.add(`adder`)
labelInput.classList.add(`tutorLabel`)
h1.classList.add(`title`)
manipulateSection.classList.add(`manipulationBox`)
listBox.classList.add(`flex`,`column`)
list.classList.add(`list`)
manipulationButtons.classList.add(`column`,`flex`,`manipulationButtons`)
//присвоїв класи




add.onclick =function () { //звернувся до кнопки`add` івент клік
    const li = document.createElement(`li`) // стіорив елемент списку
    li.classList.add(`li`) // додав стилізацію для елементу
    const trim = input.value.trim() //забрав всі пробіли з початку і кінця
    if (trim.includes("=")){//перевірив чи має введений текст `=`
        let split = trim.split(`=`).map(piece => piece.trim())//розділив інпут і видалив пробіли
        name = split[0] // присвоїв першому елементу split name
        value = split[1]// присвоїв першому елементу split value
        if (name && value) { //перевірив чи є name і value
            li.innerText = name + `=` + value; // задав текст для елементу списку
            li.onclick = function () { //задав івент клік для елементу списку
                li.classList.toggle('selected');// задав стилізацію для елементу списку яку надати і забрати
            };
            list.appendChild(li); //додав ліст в список
        } else {//вивів помилку якщо користувач погано ввів дані
            alert("Обидві частини (name і value) мають бути заповнені!");
        }
    }
}
sortName.onclick = function () {// задав івент клік для кнопки 'sortName'
    const items = document.querySelectorAll(`li`) //получив всі елементи списку
    const itemsArray = Array.from(items); //зробив масив з усіх елементів списку
    items.forEach(item => item.classList.add('li')); //додав стидізацю кожному елементу списку

    itemsArray.sort((a,b) =>{//задав функцію сортування

        const A = a.innerText.split(`=`)[0] // створив змінну яка має значення name
        const B = b.innerText.split(`=`)[0] // створив 2змінну яка має значення name
        if(A < B){
            return -1
        }
        if (A> B){
            return 1
        }
        if (A == B){
            return 0
        }//вивів сортування
    })
    const ul = document.querySelector('ul');//получив елемент саисок
    list.innerText = '';//очистив список
    itemsArray.forEach(item => list.appendChild(item));//заповнив список відсортованими елементами
}
sortValue.onclick = function (){//задав івент клік для кнопки 'sortValue'
    const items = document.querySelectorAll(`li`)//получив всі елементи li
    const itemsArray = Array.from(items)//зробив масив з усіх получених елементів
    itemsArray.sort((a,b) =>{//створв функцію сортування
        const A = a.innerText.split(`=`)[1] // створив змінну яка має значення value
        const B = b.innerText.split(`=`)[1] // створив 2 змінну яка має значення value
        if(A < B){
            return -1
        }
        if (A> B){
            return 1
        }
        if (A == B){
            return 0
        } // вивів відсортовані елементи
    })

    const ul = document.querySelector('ul');//звернувся до списку
    ul.innerText = '';//очистив список
    itemsArray.forEach(item => ul.appendChild(item));//додав відсортовані елементи
}
del.onclick = function () {//додав івент клік для кнопки `del`
    const Items = document.querySelectorAll('li.selected')//звернувся до всіх виділених елементів
    Items.forEach(item => item.remove())//видалив виділені елементи
}