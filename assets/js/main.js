let sidebar = document.getElementById("sidebar");
function findName(number) {
  this.index;
  for(var i = 0; i < descriptions.length; i++) {
    if(descriptions[i].num == number) {
      this.index = i;
      return(descriptions[this.index].name);
    }
  }
}
function findDesc(number) {
  this.index;
  for(var j = 0; j < descriptions.length; j++) {
    if(descriptions[j].num == number) {
      this.index = j;
      return(descriptions[this.index].description)
    }
  }
}
function returnInfo(num) {
  //console.log(findName(num));
  sidebar.innerHTML = "<h4 style='color: #0fb9b1'>" + findName(num) + ": </h4>";
  desc(num);
}
function desc(num) {
  sidebar.innerHTML = sidebar.innerHTML + "<div id='styleshit' style='font-family: helvetica;'><br><br>" + findDesc(num) + "</div>";
}
function show(num) {
  if(num==1) {
    returnInfo(1);
  } else if(num == 2) {
    returnInfo(2);
  } else if(num == 3) {
    returnInfo(3);
  } else if(num == 4) {
    returnInfo(4);
  } else if(num == 5) {
    returnInfo(5);
  } else if(num == 6) {
    returnInfo(6);
  } else if(num == 7) {
    returnInfo(7);
  } else if(num == 8) {
    returnInfo(8);
  } else if(num == 9) {
    returnInfo(9);
  } else if(num == 10) {
    returnInfo(10);
  } else if(num == 11) {
    returnInfo(11);
  } else if(num == 12) {
    returnInfo(12);
  } else if(num == 13) {
    returnInfo(13);
  } else if(num == 14) {
    returnInfo(14);
  } else if(num == 15) {
    returnInfo(15);
  }
}
document.getElementById('one').onmouseover=function(){show(1);};
document.getElementById('two').onmouseover=function(){show(2);};
document.getElementById('three').onmouseover=function(){show(3);};
document.getElementById('four').onmouseover=function(){show(4);};
document.getElementById('five').onmouseover=function(){show(5);};
document.getElementById('six').onmouseover=function(){show(6);};
document.getElementById('seven').onmouseover=function(){show(7);};
document.getElementById('eight').onmouseover=function(){show(8);};
document.getElementById('nine').onmouseover=function(){show(9);};
document.getElementById('ten').onmouseover=function(){show(10);};
document.getElementById('eleven').onmouseover=function(){show(11);};
document.getElementById('twelve').onmouseover=function(){show(12);};
document.getElementById('thirteen').onmouseover=function(){show(13);};
document.getElementById('fourteen').onmouseover=function(){show(14);};
document.getElementById('fifteen').onmouseover=function(){show(15);};

var descriptions = [
  {
   "name": "Superior Vena Cava",
   "num": 1,
   "description": "This is the largest vein in the human body (vena is Latin for vein). Its essential function is to carry blood from all around the body all the way to the heart. There is a superior vena cava and an inferior vena cava. The superior vena cava is tasked with carrying blood to the upper body: neck, head, and both upper limbs back to the heart. What the inferior vena cava does is carrying blood back from the lower parts of the body back to the heart."
  },{
    "name": "Aorta",
    "num": 2,
    "description": "This is the largest artery in the human body. Arteries are tubular branching elastic-walled muscle vessels that carry blood all the way from the heart through the body. The main function of the aorta is to take oxygenated blood all the way from the left ventricle to the rest of the body."
  },{
    "name": "Pulmonary Artery",
    "num": 3,
    "description": "This artery is responsible for carrying deoxygenated blood all the way from the right ventricle to the lungs."
  },{
    "name": "Pulmonary Artery",
    "num": 4,
    "description": "This artery is responsible for carrying deoxygenated blood all the way from the right ventricle to the lungs."
  },{
    "name": "Pulmonary Veins",
    "num": 5,
    "description": "Veins are the tubular branching vessels that carry blood all the way from the capillaries and take it to the heard. The function of the pulmonary vein is to take oxygenated blood all the way from the lungs to the left atrium."
  },{
    "name": "Pulmonary Valve",
    "num": 15,
    "description": "valve that is pulmonary"
  },{
    "name": "Tricuspid Valve",
    "num": 10,
    "description": "This is the valve that is located between the right ventricle and the right atrium. Most people are born with a tricuspid valve, which is the valve with three cusps located between the aorta and the left ventricle."
  },{
    "name": "Bicuspid Valve",
    "num": 9,
    "description": "Valves are bodily structures (such as the mitral valve) that either shut down temporarily an orifice or passage or that permits fluid to move, but always in only one direction. The Bicuspid Valve is the valve located between the left ventricle and the left atrium."
  },{
    "name": "Inferior Vena Cava",
    "num": 14,
    "description": "This is the largest vein in the human body (vena is Latin for vein). Its essential function is to carry blood from all around the body all the way to the heart. There is a superior vena cava and an inferior vena cava. The superior vena cava is tasked with carrying blood to the upper body: neck, head, and both upper limbs back to the heart. What the inferior vena cava does is carrying blood back from the lower parts of the body back to the heart."
  },{
    "name": "Aortic Valve",
    "num": 8,
    "description": "valve close to aorta that does valve stuff"
  },{
    "name": "Decending Aorta",
    "num": 13,
    "description": "This is the largest artery in the human body. Arteries are tubular branching elastic-walled muscle vessels that carry blood all the way from the heart through the body. The main function of the aorta is to take oxygenated blood all the way from the left ventricle to the rest of the body."
  },{
    "name": "Right Atrium",
    "num": 6,
    "description": "This part of the human body is tasked with receiving deoxygenated blood from the rest of the body."
  },{
    "name": "Right Ventricle",
    "num": 11,
    "description": "The right ventricle is tasked with pumping deoxygenated blood into the pulmonary artery."
  },{
    "name": "Left Atrium",
    "num": 7,
    "description": "like right atrium but its on the left"
  },{
    "name": "Left Ventricle",
    "num": 12,
    "description": "A ventricle is any of the cavities of a bodily part or organ. This ventricle, in particular, is the chamber of the heart that gets blood from a corresponding atrium. The left verticle is from where the blood is forced into the different arteries. The essential function that the left ventricle carries out is pumping oxygenated blood into the aorta."
  }
];