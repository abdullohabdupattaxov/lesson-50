let sonlar = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(sonlar, 'boshlanishdagi array');



let juftSonlar = sonlar.filter(function(son) {
    return son % 2 === 0;
});


console.log(juftSonlar, 'juft sonlarga ajratilgan array');
