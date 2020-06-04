var vet = []

function verificar(){
var n1 = window.document.getElementById('iNNSC')
var stab = window.document.getElementById('seltabuada')

if(n1.value.length == 0 || n1.value > 100 || n1.value <=0){
    window.alert('Insira os dados corretamente')
}else {
   var stab = window.document.getElementById('seltabuada')
   var n2 = Number(n1.value)
   var item = window.document.createElement('option')
  
   
    if(vet.indexOf(n2) == -1){
        vet.push(n2)
        item.text = `Você adicionol o numero ${n2}`
        stab.appendChild(item) 
    }else{
        window.alert('Esse numero ja existe!')
    } 
 }
}
function finalizando(){
    var res = window.document.getElementById('resf')
    res.innerHTML = `Ao todo temos ${vet.length} números cadastrados`
    vet.sort()
    var tam = vet.length
    res.innerHTML = `O maior valor informado é ${vet[tam-1]}</br>`
    res.innerHTML += `O menor valor informado é ${vet[0]}</br>`
    var soma =0
    for(var x=0 in vet){
       soma += vet[x]
    }
    res.innerHTML += `Samando todos os valores temos ${soma}.</br>`
    res.innerHTML += `A media dos valores é ${soma/tam}`
}