if (1){
    console.log('Ok!');
} else {
    console.log('Error');
}

/* const num = 50;

/* if (num< 49){
    console.log('Error');
}else if (num>100){
    console.log('A lot');
}else{
    console.log('Ok!');
}

(num===50)? console.log('Ok!') : console.log('Error');  */ */

const num = 50;

switch (num) {
    case 49:
        console.log('Not rigth');
        break;
    case 100:
        console.log('Not rigth');
        break;
    case 50:
        console.log('You got it!');
        break;
    default:
        console.log('Not this time bro');
        break;        
}