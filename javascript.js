let nota1=parseInt(prompt('digite sua nota'))
let nota2=parseInt(prompt('digite sua segunda nota'))
média=(nota1+nota2)/2

if(média<=4.5){
    document.writeln('Reprovado'+média)
}
else if(média>=4.6 && média<=5.9){
    document.writeln('Aprovado por média'+ média)
}
else if(média>=6 && média<=9.9){
    document.writeln('Aprovado, acima da média' + média)
}

else if(média==10){
    document.writeln('Aprovado com média máxima, Parabéns'+média)
}
else {
    document.writeln('Nota Inválida')

}
