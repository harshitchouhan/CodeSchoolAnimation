/*
https://github.com/daybrush/scenejs
*/
const scene = new Scene({
    ".container": {}
  }, {
    selector: true,
  });
  
  const item = scene.getItem(".container");
  
  
  function move(startTime, endTime, left, top, rotate, scale) {
    item.set({
      [`${startTime}, ${endTime}`]: Scene.kineticFrame({
        left: `${left}px`,
        top: `${top}px`
      }).set({
        transform: {
          rotate: `${rotate}deg`,
          scale,
        }
      }),
    });
  }
  
  
  
  move(0, 0, 60, 115, 0, 5);
  move(1, 1, 90, 115, 0, 1);
  move(2, 3.5, 0, 115, 0, 1.5);
  move(4.5, 6, 0, 0, 0, 4);
  move(6, 8, -52, -18, 0, 2);
  move(9, 11, 0, -10, -90, 5);
  move(12.5, 14.5,  10, 30, 0, 1.3);
  move(15, 17.5, -70, 0, 0, 2.8);
  move(18, 20, -300, -50, -90, 2);
  move(21, 24.5, 35, -70, 0, 2.5);
  move(25, 28, 70, -80, 0, 1.5);
  move(28.5, 35, 0, -255, 0, 3);
  move(38, 40, 0, 0, 0, 1);
  
  
  /*
  typing
  https://github.com/daybrush/scenejs-effects
  */
  scene.set({
    "[data-typing='i']": Scene.typing({ text: "CodeSchool", duration: 1}),
    "[data-typing='frontend']": {
      2: Scene.typing({ text: "PRESENTS", duration: 1}),
    },
    "[data-typing='engineer']": {
      4: Scene.typing({ text: "BOOTCAMP", duration: 1}),
    },
    "[data-typing='with']": {
      6: Scene.typing({ text: "WHERE YOU WILL BE", duration: 1.5}),
    },
    "[data-typing='javascript']": {
      9: Scene.typing({ text: "TAUGHT HOW TO BECOME", duration: 1.5}),
    },
    "[data-typing='typescript']": {
      12.5: Scene.typing({ text: "FULL STACK WEB DEVELOPER", duration: 1.5}),
    },
    "[data-typing='css']": {
      14.8: Scene.typing({ text: "AND HOW TO MAKE", duration: 1.5}),
    },
    "[data-typing='nodejs']": {
      18: Scene.typing({ text: "STUNNING", duration: 1}),
    },
    "[data-typing='animation']": {
      21.5: Scene.typing({ text: "AND KILLER WEBSITES", duration: 1.8}),
    },
    "[data-typing='scenejs']": {
      25: Scene.typing({ text: "ALL THIS IN SHORT PERIOD OF TIME", duration: 2}),
    },
    "[data-typing='contact']": {
      29: Scene.typing({ text: "DIAL : 6375580448", duration: 2}),
    }
  });
  
  scene.setPlaySpeed(1);
  scene.setEasing("ease-in-out");
  scene.setIterationCount("infinite");
  scene.play();