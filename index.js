
let Display= document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('buttons')) ;
buttons.map(button =>{
  button.addEventListener('click', (e)=>{
    switch(e.target.innerText){
      case 'RESET':
        Display.innerText='';
        break;
        case'=':
        try{
          Display.innerText=eval(Display.innerText);
        }
        catch{
          Display.innerText='Error'
        }
        break;
        case'DEL':
        if(Display.innerText){
          Display.innerText=Display.innerText.slice(0, -1);
        }
        break;
        default:
          Display.innerText += e.target.innerText;
    }

  });
});


// TOGGLE SWITCHING
let toggleBtns = document.getElementsByClassName('toggle-btn');
let arrayToggleBtns = [... toggleBtns];

arrayToggleBtns.forEach((element, index) => {
  element.addEventListener('click', () => {
    element.style.opacity = '1';


    if (index == 0) {
      document.getElementsByClassName('main-container')[0].style.backgroundColor = 'hsl(222, 26%, 31%)';
      document.getElementsByClassName('cal')[0].style.color = 'white';
      document.getElementsByClassName('container__flex')[0].style.color = 'white';
      document.getElementsByClassName('theme')[0].style.color = 'white';
      document.getElementsByClassName('tri-state-toggle')[0].style.backgroundColor = 'hsl(223, 31%, 20%)'
      document.getElementsByClassName('section__display')[0].style.backgroundColor = 'hsl(224, 36%, 15%)';
      document.getElementsByClassName('grid-container')[0].style.backgroundColor = 'hsl(223, 31%, 20%)';
      document.getElementsByClassName('reset')[0].style.backgroundColor = 'hsl(225, 21%, 49%)';
      document.getElementsByClassName('reset')[0].style.boxShadow = '0 5px 1px -1px hsl(224, 19%, 57%)';
      document.getElementsByClassName('del')[0].style.backgroundColor = 'hsl(225, 21%, 49%)';
      document.getElementsByClassName('del')[0].style.boxShadow = '0 5px 1px -1px hsl(224, 19%, 57%)';
      document.getElementsByClassName('equal')[0].style.backgroundColor = 'hsl(6, 63%, 50%)';
      document.getElementsByClassName('equal')[0].style.boxShadow = 'hsl(28, 16%, 65%)';
      document.getElementsByClassName('input')[0].style.backgroundColor = 'hsl(6, 63%, 50%)';
      const collection = document.getElementsByClassName('button');
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = 'hsl(221, 14%, 31%)';
        collection[i].style.backgroundColor='hsl(30, 25%, 89%)'
        // collection[i].style.boxShadow='0 5px 1px -1px hsl(28, 16%, 65%)';
      }
      // for (let i = 0; i < collection.length; i++) {
      //   collection[i].style.color = 'hsl(52, 100%, 62%)';
      //   collection[i].style.backgroundColor='hsl(281, 89%, 26%)';
      //   collection[i].style.boxShadow='0 5px 1px -1px hsl(285, 91%, 52%)';
      //   // // collection[i].style.color = 'white'
      // }
    } else if (index == 1) {
      document.getElementsByClassName('main-container')[0].style.backgroundColor = 'hsl(0, 0%, 90%)';
      document.getElementsByClassName('cal')[0].style.color = 'black';
      document.getElementsByClassName('container__flex')[0].style.color = 'black';
      document.getElementsByClassName('theme')[0].style.color = 'black';
      document.getElementsByClassName('tri-state-toggle')[0].style.backgroundColor = 'hsl(0, 5%, 81%)'
      document.getElementsByClassName('section__display')[0].style.backgroundColor = 'hsl(0, 0%, 95%)';
      document.getElementsByClassName('grid-container')[0].style.backgroundColor = 'hsl(0, 5%, 78%)';
      document.getElementsByClassName('reset')[0].style.backgroundColor = 'hsl(185, 42%, 37%)';
      document.getElementsByClassName('reset')[0].style.boxShadow = '0 5px 1px -1px hsl(185, 58%, 25%)';
      document.getElementsByClassName('del')[0].style.backgroundColor = 'hsl(185, 42%, 37%)';
      document.getElementsByClassName('del')[0].style.boxShadow = '0 5px 1px -1px hsl(185, 58%, 25%)';
      document.getElementsByClassName('equal')[0].style.backgroundColor = 'hsl(25, 98%, 40%)';
      document.getElementsByClassName('equal')[0].style.boxShadow = 'hsl(35, 11%, 61%)';
      document.getElementsByClassName('input')[0].style.backgroundColor = 'hsl(25, 98%, 40%)';
      const collection = document.getElementsByClassName('button');
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = 'black';
        collection[i].style.backgroundColor='hsl(45, 7%, 89%)'
        collection[i].style.boxShadow='0 5px 1px -1px hsl(35, 11%, 61%)';
      }

    } else {
      document.getElementsByClassName('main-container')[0].style.backgroundColor = 'hsl(268, 75%, 9%)';
      document.getElementsByClassName('cal')[0].style.color = 'hsl(52, 100%, 62%)';
      document.getElementsByClassName('container__flex')[0].style.color = 'hsl(52, 100%, 62%)';
      document.getElementsByClassName('theme')[0].style.color = 'hsl(52, 100%, 62%)';
      document.getElementsByClassName('tri-state-toggle')[0].style.backgroundColor = 'hsl(268, 71%, 12%)'
      document.getElementsByClassName('section__display')[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
      document.getElementsByClassName('grid-container')[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
      document.getElementsByClassName('reset')[0].style.backgroundColor = 'hsl(281, 89%, 26%)';
      document.getElementsByClassName('reset')[0].style.boxShadow = '0 5px 1px -1px hsl(285, 91%, 52%)';
      document.getElementsByClassName('del')[0].style.backgroundColor = 'hsl(281, 89%, 26%)';
      document.getElementsByClassName('del')[0].style.boxShadow = '0 5px 1px -1px hsl(285, 91%, 52%)';
      document.getElementsByClassName('equal')[0].style.backgroundColor = 'hsl(176, 100%, 44%)';
      document.getElementsByClassName('equal')[0].style.boxShadow = '0 5px 1px -1px hsl(177, 92%, 70%)';

      document.getElementsByClassName('input')[0].style.backgroundColor = 'hsl(25, 98%, 40%)';
      const collection = document.getElementsByClassName('button');
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = 'hsl(52, 100%, 62%)';
        collection[i].style.backgroundColor='hsl(281, 89%, 26%)';
        collection[i].style.boxShadow='0 5px 1px -1px hsl(285, 91%, 52%)';
        // // collection[i].style.color = 'white'
      }

    } arrayToggleBtns.filter(function (item) {
      return item != element;
    }).forEach((item) => {
      item.style.opacity = '0';
    });
  });
});
