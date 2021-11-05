const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let averages = [];
for (const user of users) {
  let avg = 0;
  let count = 0;
  for (const property in user.favoritesSounds) {
    avg += user.favoritesSounds[property].volume;
    count++;
  }
  averages.push(user.name, avg / count);
}
console.log(averages);

//---------------------------------------------------------------
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

for (let user of users){

let sounds = user.favoritesSounds;

for (let property in sounds){

    console.log(property);
   

    let sonidos=[];

    sonidos.push(property);

    console.log(sonidos);

   let repetidos={};
   sonidos.forEach(function(numero){repetidos[numero]= (repetidos[numero]|| 0) + 1;});

   console.log(repetidos);
    


}
}
//-----------------------------------------------------------
let array= ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
function findArrayIndex(array, text) {

   let indices =[];

   let idx= array.indexOf (text);
   while (idx != -1){
       indices.push(idx);
       idx =array.indexOf(text,idx+1);
   }
   return indices
}
console.log(findArrayIndex(array, "Salamandra"));
//----------------------------------------------------

function rollDice(min,max){
    var min = Math.ceil(min);
    var max = Math.floor(max);
    
    return Math.floor(Math.random() * (max-min+1)+min);
    
    }
    console.log(rollDice(3,6));

    //----------------------------------------------------
    
    let array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
    let aux =" ";
    function swap(arr,i1,i2){

        aux=arr[i1];
        arr[i1]= arr[i2];
        arr[i2]=aux;

        return arr;

    }
    console.log(swap(array,1,2));