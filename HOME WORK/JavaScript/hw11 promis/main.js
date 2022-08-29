// let money = 0;
//
// function goWork(isWorkingDay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isWorkingDay) {
//         // money += 1000
//         money = money + 1000;
//
//         resolve(money);
//
//         console.log('TEST');
//       } else {
//         console.log('I am relaxing');
//         reject('Its not working day');
//       }
//     }, 800);
//   })
// }
//
// function goToCroatia(money) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money < 800) {
//         console.log('No money no honey');
//         reject('Ну поїду до батьків в село (');
//       } else {
//         console.log('Hoooray. Swimming all day!');
//         // money -= 600
//         money = money - 600
//         resolve(money);
//       }
//     }, 400);
//   })
// }
//
// function buySouvenirs(money) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money < 300) {
//         console.log('Ну просто пофоткаюсь норм');
//         reject('Нe було грошей на магнітики')
//       } else {
//         console.log('Купив магнітика');
//         money -= 250;
//         resolve(money)
//       }
//     }, 1000);
//   });
// }
// goWork(true)
//     .then(payment=> {
//       console.log(('i got', payment, 'after working dey'));
//       return goToCroatia(money)
//     })
//     .then(moneyTrip=>
// {
//   console.log(('i got',moneyTrip, 'after working dey'));
//   return buySouvenirs(money)
// })
// .then(sdfsds=> {
//   console.log(('jasfdhjafh', sdfsds));
//
// })



function ranok(istime,time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (istime) {
        console.log('в',time,'я пробудився від сну');
        time = time + 1;

        resolve(time);


      } else {
        console.log('я проспав');

        reject('я не встигаю виконати ранкові задачі');
      }
    }, 870);
  })
}

function snidanok(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time >= 8 && time<9 ) {
        console.log('в',time,'снідаю');
        time = time + 1
        resolve(time);
      } else {
        console.log('іду на роботу без сніданку');



        reject('буду голодний (');
      }
    }, 200);
  })
}

function work (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time <= 9) {
        console.log('в',time,'йду на роботу');
        time+=5
        resolve(time)

      } else {
        console.log('спізнився на роботу');

       reject(':(')
      }
    }, 340);
  });
}
function  brekfast(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time <= 14) {
        console.log('в',time,'обідаю');
        time+=1
        resolve(time)

      } else {
        console.log('лишився без обіду');

        reject(':(')
      }
    }, 700);
  });
}
function workAfterBrekfast (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time <= 15) {
        console.log('в',time,'йду на роботу');
        time+=3
        resolve(time)

      } else {
        console.log('спізнився на роботу');

        reject(':(')
      }
    }, 650);
  });
}
function rest (time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (time >= 18) {
        console.log('в',time,'йду з роботи');
        time+=3
        resolve(time)

      }
    }, 105);
  });
}

// ranok(true,7)
//     .then(istime => {
//
//       return snidanok(istime)
//     })
//     .then(istime => {
//       // console.log('я снідаю', istime,);
//       return work(istime)
//     })
//     .then(istime => {
//       // console.log('йду на роботу', istime);
//       return brekfast(istime)
//     })
//     .then(istime => {
//       return workAfterBrekfast(istime)
//     })
//     .then(istime => {
//       return rest(istime)
//     })

async function vacation(istime,time) {
  try {
    const time0 = await ranok(istime,time);
    const time1 = await snidanok(time0);
    const time2 = await work(time1);
    const time3 = await brekfast(time2);
    const time4 = await workAfterBrekfast(time3);
    const time5 = await rest(time4);
  } catch (e) {
    console.warn('OOOOOPS!!!', e)
  }
}

vacation(true,7);

