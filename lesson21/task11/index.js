export const manageClasses = () => {
    const elClassOne = document.querySelector('.one');
    elClassOne.classList.add('selected');
    const elClassTwo = document.querySelector('.two');
    elClassTwo.classList.remove('selected');
    const elClassThree = document.querySelector('.three');
    elClassThree.classList.toggle('three_done');
    const elClassFour = document.querySelector('.four');
    if(elClassFour.classList.contains('some-class')){
        elClassFour.classList.add('another-class');
    }
  
  
} 


