$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290, "white");
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(200, 600, 30, 20, "black");
    createPlatform(400, 800, 0, 100, "blue");
    createPlatform(1000, 100, 40, 300, "pink");


    // TODO 3 - Create Collectables
    createCollectable("grace", 1350, 50, 0.2, 0.11);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("max", 800, 100, 0.4, 0.10);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 900);
    createCannon("right", 300, 2000);
    createCannon("bottom", 500, 500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
