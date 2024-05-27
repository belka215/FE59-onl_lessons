const array = [
    {name: 'кукла', position: 1, isFixedPosition: false},
    {name: 'дрель', position: 2, isFixedPosition: true},
    {name: 'сметана', position: 3, isFixedPosition: false},
    {name: 'штаны', position: 4, isFixedPosition: false},
    {name: 'колесо', position: 5, isFixedPosition: false},
];

function addIntoStart(array, newObj) {
    const fixedObj = array.find(item => item.isFixedPosition == true);
    const fixedPositionIndex = fixedObj.position - 1;

    array.unshift(newObj);
    array.splice(fixedPositionIndex, 2, fixedObj, array[fixedPositionIndex]);
    array.forEach(item => {
        item.position = array.indexOf(item) + 1;
    })
}


addIntoStart(array, {name: 'торт', position: 1, isFixedPosition: false});
console.log(array)
