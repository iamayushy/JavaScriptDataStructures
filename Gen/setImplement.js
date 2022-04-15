
function checkPanagram(Chek, dev, str){
    for(let i = 0; i < str.length; i++){
    if(!Chek.has(str[i])){
        console.log('Not Panagram');
        return
    }
    }
    console.log('Panagram');
}
const dev = 'The quick brown fo'
const Chek = new Set()
for(let i = 0; i < dev.length; i++){
    Chek.add(dev[i])
}
const str = 'abcdefghijklmnopqrstuvwxyz';
checkPanagram(Chek, dev, str)
