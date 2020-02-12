$(document).ready(function() {
    flag = 1;
    $("#nex").click(function() {
      if (flag == 0) {
        $("#side1").css("z-index", "999");
        $("#side2").css("z-index", "9");
        $("#side3").css("z-index", "9");
        $("#side4").css("z-index", "6");
        $("#side5").css("z-index", "6");
        $("#side6").css("z-index", "4");
        $("#side1").css("transform", "translateX(0px) scale(1.5)");
        $("#side2").css("transform", "translateX(-100px) scale(1)");
        $("#side3").css("transform", "translateX(100px)");
        $("#side4").css("transform", "translateX(-180px) scale(0.75)");
        $("#side5").css("transform", "translateX(180px) scale(0.75)");
        $("#side6").css("transform", "translateX(240px) scale(0.50)");
        
        flag = 1;
      } else if (flag == 1) {
        $("#side2").css("z-index", "999");
        $("#side1").css("z-index", "9");
        $("#side3").css("z-index", "9");
        $("#side4").css("z-index", "6");
        $("#side5").css("z-index", "6");
        $("#side6").css("z-index", "4");
        $("#side2").css("transform", "translateX(0px) scale(1.5)");
        $("#side1").css("transform", "translateX(-100px) scale(1)");
        $("#side3").css("transform", "translateX(100px)");
        $("#side4").css("transform", "translateX(-180px) scale(0.75)");
        $("#side5").css("transform", "translateX(180px) scale(0.75)");
        $("#side6").css("transform", "translateX(240px) scale(0.50)");

        flag = 2;
      } else if (flag == 2) {
        $("#side3").css("z-index", "999");
        $("#side1").css("z-index", "9");
        $("#side2").css("z-index", "9");
        $("#side4").css("z-index", "6");
        $("#side5").css("z-index", "6");
        $("#side6").css("z-index", "4");
        $("#side3").css("transform", "translateX(0px) scale(1.5)");
        $("#side1").css("transform", "translateX(-100px) scale(1)");
        $("#side2").css("transform", "translateX(100px)");
        $("#side4").css("transform", "translateX(-180px) scale(0.75)");
        $("#side5").css("transform", "translateX(180px) scale(0.75)");
        $("#side6").css("transform", "translateX(240px) scale(0.50)");
        flag = 3;
      } else if (flag == 3) {
        $("#side4").css("z-index", "999");
        $("#side1").css("z-index", "9");
        $("#side2").css("z-index", "9");
        $("#side3").css("z-index", "6");
        $("#side5").css("z-index", "6");
        $("#side6").css("z-index", "4");
        $("#side4").css("transform", "translateX(0px) scale(1.5)");
        $("#side1").css("transform", "translateX(-100px) scale(1)");
        $("#side2").css("transform", "translateX(100px)");
        $("#side3").css("transform", "translateX(-180px) scale(0.75)");
        $("#side5").css("transform", "translateX(180px) scale(0.75)");
        $("#side6").css("transform", "translateX(240px) scale(0.50)");
        flag = 4;
      } else if (flag == 4) {
        $("#side5").css("z-index", "999");
        $("#side1").css("z-index", "9");
        $("#side2").css("z-index", "9");
        $("#side3").css("z-index", "6");
        $("#side4").css("z-index", "6");
        $("#side6").css("z-index", "4");
        $("#side5").css("transform", "translateX(0px) scale(1.5)");
        $("#side1").css("transform", "translateX(-100px) scale(1)");
        $("#side2").css("transform", "translateX(100px)");
        $("#side3").css("transform", "translateX(-180px) scale(0.75)");
        $("#side4").css("transform", "translateX(180px) scale(0.75)");
        $("#side6").css("transform", "translateX(240px) scale(0.50)");
        flag = 5;
      } else if (flag == 5) {
        $("#side6").css("z-index", "999");
        $("#side1").css("z-index", "9");
        $("#side2").css("z-index", "9");
        $("#side3").css("z-index", "6");
        $("#side4").css("z-index", "6");
        $("#side5").css("z-index", "4");
        $("#side6").css("transform", "translateX(0px) scale(1.5)");
        $("#side1").css("transform", "translateX(-100px) scale(1)");
        $("#side2").css("transform", "translateX(100px)");
        $("#side3").css("transform", "translateX(-180px) scale(0.75)");
        $("#side4").css("transform", "translateX(180px) scale(0.75)");
        $("#side5").css("transform", "translateX(240px) scale(0.50)");
        flag = 0;
      }
    });
    $("#pre").click(function() {
        if (flag == 0) {
            $("#side1").css("z-index", "999");
            $("#side2").css("z-index", "9");
            $("#side3").css("z-index", "9");
            $("#side4").css("z-index", "6");
            $("#side5").css("z-index", "6");
            $("#side6").css("z-index", "4");
            $("#side1").css("transform", "translateX(0px) scale(1.5)");
            $("#side2").css("transform", "translateX(-100px) scale(1)");
            $("#side3").css("transform", "translateX(100px)");
            $("#side4").css("transform", "translateX(-180px) scale(0.75)");
            $("#side5").css("transform", "translateX(180px) scale(0.75)");
            $("#side6").css("transform", "translateX(240px) scale(0.50)");
            
            flag = 5;
          } else if (flag == 1) {
            $("#side2").css("z-index", "999");
            $("#side1").css("z-index", "9");
            $("#side3").css("z-index", "9");
            $("#side4").css("z-index", "6");
            $("#side5").css("z-index", "6");
            $("#side6").css("z-index", "4");
            $("#side2").css("transform", "translateX(0px) scale(1.5)");
            $("#side1").css("transform", "translateX(-100px) scale(1)");
            $("#side3").css("transform", "translateX(100px)");
            $("#side4").css("transform", "translateX(-180px) scale(0.75)");
            $("#side5").css("transform", "translateX(180px) scale(0.75)");
            $("#side6").css("transform", "translateX(240px) scale(0.50)");
    
            flag = 0;
          } else if (flag == 2) {
            $("#side3").css("z-index", "999");
            $("#side1").css("z-index", "9");
            $("#side2").css("z-index", "9");
            $("#side4").css("z-index", "6");
            $("#side5").css("z-index", "6");
            $("#side6").css("z-index", "4");
            $("#side3").css("transform", "translateX(0px) scale(1.5)");
            $("#side1").css("transform", "translateX(-100px) scale(1)");
            $("#side2").css("transform", "translateX(100px)");
            $("#side4").css("transform", "translateX(-180px) scale(0.75)");
            $("#side5").css("transform", "translateX(180px) scale(0.75)");
            $("#side6").css("transform", "translateX(240px) scale(0.50)");
            flag = 1;
          } else if (flag == 3) {
            $("#side4").css("z-index", "999");
            $("#side1").css("z-index", "9");
            $("#side2").css("z-index", "9");
            $("#side3").css("z-index", "6");
            $("#side5").css("z-index", "6");
            $("#side6").css("z-index", "4");
            $("#side4").css("transform", "translateX(0px) scale(1.5)");
            $("#side1").css("transform", "translateX(-100px) scale(1)");
            $("#side2").css("transform", "translateX(100px)");
            $("#side3").css("transform", "translateX(-180px) scale(0.75)");
            $("#side5").css("transform", "translateX(180px) scale(0.75)");
            $("#side6").css("transform", "translateX(240px) scale(0.50)");
            flag = 2;
          } else if (flag == 4) {
            $("#side5").css("z-index", "999");
            $("#side1").css("z-index", "9");
            $("#side2").css("z-index", "9");
            $("#side3").css("z-index", "6");
            $("#side4").css("z-index", "6");
            $("#side6").css("z-index", "4");
            $("#side5").css("transform", "translateX(0px) scale(1.5)");
            $("#side1").css("transform", "translateX(-100px) scale(1)");
            $("#side2").css("transform", "translateX(100px)");
            $("#side3").css("transform", "translateX(-180px) scale(0.75)");
            $("#side4").css("transform", "translateX(180px) scale(0.75)");
            $("#side6").css("transform", "translateX(240px) scale(0.50)");
            flag = 3;
          } else if (flag == 5) {
            $("#side6").css("z-index", "999");
            $("#side1").css("z-index", "9");
            $("#side2").css("z-index", "9");
            $("#side3").css("z-index", "6");
            $("#side4").css("z-index", "6");
            $("#side5").css("z-index", "4");
            $("#side6").css("transform", "translateX(0px) scale(1.5)");
            $("#side1").css("transform", "translateX(-100px) scale(1)");
            $("#side2").css("transform", "translateX(100px)");
            $("#side3").css("transform", "translateX(-180px) scale(0.75)");
            $("#side4").css("transform", "translateX(180px) scale(0.75)");
            $("#side5").css("transform", "translateX(240px) scale(0.50)");
            flag = 4;
          }
    });
  });


