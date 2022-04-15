const fruits =  new Map([
    ["apples", 500],
    ["bananas", 400],
    ["oranges", 200]
])
// fruits.set("apples", 342)
// fruits.delete('apples')
// fruits.clear()
// let text = ""
for(const e of fruits.entries()){
    console.log(e)
}
for(const k of fruits.keys()){
    console.log(k);
}
for(const v of fruits.values()){
    console.log(v);
}
// console.log(text);
// One Can Also Use Objects as keys in map 

const akash = {name: 'akash'}
const ambani = {name: 'ambani'}
const tata = {name: 'tata'}
const names = new Map()
names.set(akash, 1293)
names.set(ambani, 12904)
names.set(tata, 13432)
console.log(names);