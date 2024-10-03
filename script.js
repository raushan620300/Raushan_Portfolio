let userResponse = confirm(`Are you a Developer?`);
let message;
  if(userResponse) {
    const name = prompt(`Enter your name ->`);
    message = `Welcome! ${name} to My Portfolio.`;
  }else {
    message = `Just enjoy:).`;
  }
  alert(message);

//* For span1 -
const span1 = document.querySelector('.span1');
const text1 = 'Raushan Sinha';
let index1 = 0;
function type1() {
  span1.textContent += text1[index1];
  index1++;
  if (index1 < text1.length) {
    setTimeout(type1, 150); // adjust the speed of typing
  }
}
type1();

//* For span2-
const span2 = document.querySelector('.span2');
const text2 = 'Frontend Development';
let index2 = 0;
function type2() {
    span2.textContent += text2[index2];
    index2++;
    if (index2 < text2.length) {
        setTimeout(type2, 150); // adjust the speed of typing
    }
}
type2();

//* For span3-
const span3 = document.querySelector('.span3');
const text3 = 'See My Projects >>>';
let index3 = 0;
function type3() {
  span3.textContent += text3[index3];
  index3++;
  if(index3 < text3.length) {
    setTimeout(type3, 150); // adjust the speed of typing
  }
}
type3();