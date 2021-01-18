let data = [
    {
        name: 'safaa',
        age: '26'
    },
    {
        name: 'mayssa',
        age: '20'
    },
    {
        name: 'sabaa',
        age: '25'
    },
    {
        name: 'balqis',
        age: '30'
    },
    {
        name: 'sofia',
        age: '21'
    },
    {
        name: 'laila',
        age: '18'
    },
];

const info = document.querySelector("#info");

let details = data.map(function(item){
return (
    '<div>'+item.name+' is '+item.age+' years old '+'</div>'
);
});

info.innerHTML = details.join('\n');