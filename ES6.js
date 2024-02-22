const multiple = (num1, num2, num3) => num1 * num2 * num3;

//console.log(multiple(3,4,6));

const text = `I am a web developer.
I love to code.
I love to eat biryani.`;
//console.log(text);

const defaultValue = (num1, num2 = 0) => num1 + num2;
//console.log(defaultValue(10));


// Problem 2 solved

const friend = ['Rahim', 'Karim', 'Ali', 'Jaba', 'Salam', 'Abul', 'Jabu'];

const eventFriend = (friends) => {
      let newArray = [];
      for (const friend of friends) {
            if(friend.length % 2 === 0){
                  newArray.push(friend);
                  
            }
      }
      return newArray;
}
//console.log(eventFriend(friend));

// Problem 3 solved


const number = [12,21,32,43,53,23];
const squareNumber = (array) => {
      let sum = 0;
      let squareArray = [];
      let length = array.length;
      for (const num of array){
            const square = num * num;
            squareArray.push(square);
      }
      for (const sumation of squareArray){
            sum += sumation;
      }
      const average =  (sum / squareArray.length).toFixed(2);
      return average;

      
}
//console.log(squareNumber(number));


const number1 = [2,4,2,3,5,3];
const number2 = [3,4,24,532,56,23];

const maxNumber = (array1, array2) => {
      const combine = [...array1, ...array2];
      const max = Math.max(...combine);
      return max;

}
console.log(maxNumber(number1, number2));