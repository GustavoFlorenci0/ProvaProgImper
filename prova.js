function microOndas(prato, tempoDePreparo= -1) {
    switch (prato) {
        case 'pipoca':
            if (tempoDePreparo > 30 ) {
                return 'kabummmm!!!';
            } else if (tempoDePreparo > 20 ) {
                return 'Sua pipoca queimou';
            } else if (tempoDePreparo < 10  &&  tempoDePreparo >= 0 ) {
                return  'tempo insuficiente';
            } else return 'Pipoca pronta, bom apetite!!!';

            break;
        case 'macarrão':
            if (tempoDePreparo > 24 ) {
                return 'kabummmm!!!';
            } else if (tempoDePreparo > 16 ) {
                return 'Seu macarrão queimou';
            } else if (tempoDePreparo < 8  &&  tempoDePreparo >= 0 ) {
                return  'tempo insuficiente';
            } else return 'Macarrão pronto, bom apetite!!!';
    
            break;
        case 'carne':
            if (tempoDePreparo > 45 ) {
                return 'kabummmm!!!';
            } else if (tempoDePreparo > 30 ) {
                return 'Sua carne queimou';
            } else if (tempoDePreparo < 15  &&  tempoDePreparo >= 0 ) {
                return  'tempo insuficiente';
            } else return 'Prato de carne pronto, bom apetite!!!';
        
            break;
        case 'feijão':
            if (tempoDePreparo > 36 ) {
                return 'kabummmm!!!';
            } else if (tempoDePreparo > 24 ) {
                return 'Seu feijão queimou';
            } else if (tempoDePreparo < 12  &&  tempoDePreparo >= 0 ) {
                return  'tempo insuficiente';
            } else return 'Prato de feijão pronto, bom apetite!!!';

            break;
        case 'brigadeiro':
            if (tempoDePreparo > 24 ) {
                return 'kabummmm!!!';
            } else if (tempoDePreparo > 16 ) {
                return 'Seu Brigradeiro queimou';
            } else if (tempoDePreparo < 8  &&  tempoDePreparo >= 0 ) {
                return  'tempo insuficiente';
            } else return 'Prato de brigadeiro pronto, bom apetite!!!';

            break;
       
        default:
            break;
    }
    
}

// podendo passar o tempo desejado ou deixar o tempo padrão 

let prato = microOndas( 'pipoca');
let prato1 = microOndas( 'macarrão');
let prato2 = microOndas( 'carne');
let prato3 = microOndas( 'feijão');
let prato4 = microOndas( 'brigadeiro');

// ixibição dos dados 
console.log(prato);
console.log(prato1);
console.log(prato2);
console.log(prato3);
console.log(prato4);