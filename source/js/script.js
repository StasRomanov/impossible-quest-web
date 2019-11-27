"use strict";
(function () {

  var mainContent = document.getElementById("contentInfo");
  var answers = document.querySelectorAll("button.answer-content");
  var scene = 0;

  function textMain(gameScene, content, gameSceneNext) {
    if (scene === gameScene) {
      scene = gameSceneNext;
      mainContent.innerText = content;
    }
    console.log(scene);
    return scene;
  }

  answers[0].addEventListener("click", function () {
    textMain(1, "test1-2", 2);
    textMain(0, "test1-1", 1);
  });
  answers[1].addEventListener("click", function () {
    textMain(3, "test2-2", 4);
    textMain(2, "test2-1", 3);
  });
  answers[2].addEventListener("click", function () {
    textMain(5, "test3-2", 6);
    textMain(4, "test3-1", 5);
  });
  answers[3].addEventListener("click", function () {
    textMain(7, "test4-2", 8);
    textMain(6, "test4-1", 7);

  });
})();
