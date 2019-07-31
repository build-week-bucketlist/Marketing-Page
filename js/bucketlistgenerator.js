function randomItem(items){
    return items[Math.floor(Math.random()*items.length)];
}

const items = ['sky diving', 'Climb a Mountain', 'Run a Marathon', 'Travel to Every State', 'Learn How to Rock Climb', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];

const selectedItem = randomItem(items);

function randomGenerator(selectedItem){
    x=selectedItem;
    document.getElementById('output').innerHTML= x;
}

