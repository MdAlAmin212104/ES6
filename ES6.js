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