function randomItem(items){
    return items[Math.floor(Math.random()*items.length)];
}

const items = ['Sky Diving', 'Climb a Mountain', 'Run a Marathon', 'Travel to Every State', 'Learn How to Rock Climb', 'Go to Italy', 'Learn a New Language', 'Fly to Japan', 'Ride in Hot Air Balloon', 'Learn Karate', 'Learn How to Beat-Box', 'Do a Triathalon'];

const selectedItem = randomItem(items);

function randomGenerator(selectedItem){
    x=selectedItem;
    document.getElementById('output').innerHTML= x;
}

