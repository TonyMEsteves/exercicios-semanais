// var usuario = {
//     nome: 'Fulano',
//     senha: '12654sadkjfhbd',
//     podeAcessarRecursosEscondidos: false
// };




var meuModulo = (function(){
// Isso aqui é um modulo
//Aqui dentro tudo é privado


        var usuario = {
            nome: 'Fulano',
            senha: '12654sadkjfhbd',
            podeAcessarRecursosEscondidos: false
};

        var nomeUsuario = usuario.nome;

        return {
            nomeUsuario
        }


})()


// var meuModulo = (() =>{

// })()




// var batatinha = (function(){

// })()







