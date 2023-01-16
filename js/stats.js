//    Main stats
var points = 0
var pointgain = 1
var clicks = 0
var divtime = 15
var divisionvalue = 2
var buttondelay = 0.075
var point_auto = 0
var upgrade_auto = 0
var prestige_auto = 0
var facility = 0
var area = 0
var iron = 0
var irongain = 1
var irongatherers = 1
var irondisplay = ((irongain * irongatherers) / 5);
var gold = 0
var goldgatherers = 0
var goldgain = 1
var golddisplay = ((goldgain * goldgatherers) / 20);
var pointpowervalue1 = 1
//    Upgrade stats (messages)
var upgrades = [
0,0,0,0,0,0,0,0,0,0,0
]
var factoryupgrades = [
0,0,0,0,0,0,0,0,0
]
var upgradetimes = [
'upg111times','upg112times','upg113times','upg114times','upg115times',
'upg116times','upg117times','upg118times','upg119times','upg120times',
'upg121times', 'upgf111times', 'upgf112times', 'upgf113times', 'upgf114times',
'upgf115times', 'upgf116times', 'upgf117times',
'upgf118times', 'upgf119times',
]
var upgradeprices = [
'upg111price','upg112price','upg113price','upg114price','upg115price',
'upg116price','upg117price','upg118price','upg119price','upg120price',
'upg121price', 'upgf111price', 'upgf112price', 'upgf113price', 'upgf114price',
'upgf115price', 'upgf116price', 'upgf117price',
'upgf118price', 'upgf119price',
]
var costs = [
30,400,6000,100000,10**6,10**9,10**15,10**22,10**26,10**36
]
var factorycosts = [
150,20,120,2,2,4,10,10,10
]
var times = [
1000,450,200,200,100,100,100,100,10,3
]
var scaling = [
1.12, 1.3, 1.5, 2, 2.2, 2.5, 2.7, 25, 200
]
var automation = [
1500, 500, 5000
]	
var pointsautodisplay = (pointgain / (automation[0] / 1000));

console.log("im watching :)")

function incrementButton() {
  if (buttondelay == 0) {
	  points += pointgain
     document.getElementById("clickautomessage").innerHTML = Math.round(pointsautodisplay);
    ++clicks
    document.getElementById('messagecount').innerHTML = Math.round(points);
    document.getElementById('clickmessage').innerHTML =  Math.round(pointgain);
  }
}
function incrementIron() {

	  iron += (irongain * irongatherers)
    document.getElementById('ironcount').innerHTML = Math.round(iron);
    document.getElementById('ironautomessage').innerHTML = irondisplay.toFixed(2);
}
function incrementGold() {
	  gold += (goldgain * goldgatherers)
    document.getElementById('goldcount').innerHTML = Math.round(gold);
    document.getElementById('goldautomessage').innerHTML = golddisplay.toFixed(2);
  
}



function updatepointgain(upgrade) {
	  pointgain = 1
	  if (upgrade == 1) {
		  if (upgrades[1] < 0) {
	   pointgain *= 1.3**upgrades[1]
		  }
	   else {
		   pointgain = ((upgrades[0] + 1) * pointpowervalue1)
	   }
	  
	  }
	  if (upgrade == 0) {
	  pointgain += (upgrades[0] * pointpowervalue1)
	  pointgain *= 1.3**upgrades[1]
	  }
	  if (upgrade == 2) {
		  pointgain += (upgrades[0] * pointpowervalue1)
		   pointgain *= 1.3**upgrades[1]
		     
	  }
	    document.getElementById('messagecount').innerHTML = Math.round(points);
        document.getElementById('clickmessage').innerHTML = Math.round(pointgain);
		document.getElementById("clickautomessage").innerHTML = Math.round(pointsautodisplay);
}

function updatefacilitygain() {
	
	if (factoryupgrades[3] != 0) {
	}
	else {
		irongain = 1
	goldgain = 1
	}
	  document.getElementById('ironcount').innerHTML = Math.round(iron);
	   document.getElementById('ironautomessage').innerHTML = Math.round((irongain * irongatherers));
		 document.getElementById('ironautomessage').innerHTML = irondisplay.toFixed(2);
	 document.getElementById('goldcount').innerHTML = Math.round(gold);
	     document.getElementById('goldautomessage').innerHTML = golddisplay.toFixed(2);
				 document.getElementById('irongatherdisplay').innerHTML = Math.round(irongatherers);
				  irondisplay = ((irongain * irongatherers) / 5);
				  golddisplay = ((goldgain * goldgatherers) / 20);
}

function trueupdate() {
	updatepointgain(2)
	updatefacilitygain()
}

function upgrade(number) {
	if (points>=costs[number] && upgrades[number] != times[number]) {
		points -= costs[number]
		costs[number] *= scaling[number]
		++upgrades[number]
		 document.getElementById(upgradetimes[number]).innerHTML = Math.round(upgrades[number]);
		  document.getElementById(upgradeprices[number]).innerHTML = Math.round(costs[number]);
		  pointsautodisplay = (pointgain / (automation[0] / 1000));
		  document.getElementById("clickautomessage").innerHTML = Math.round(pointsautodisplay);
	}
}
    function upgrade111() {
        if (points >= costs[0]) {
            if (upgrades[0] != times[0]) {
				upgrade(0)
                pointgain += pointpowervalue1
				  updatepointgain(1)
                document.getElementById('messagecount').innerHTML = Math.round(points);
                document.getElementById('clickmessage').innerHTML = Math.round(pointgain);
				 
				  if (upgrades[0] == times[1]) {
                  document.getElementById('upg111').style.backgroundColor = 106100
				  document.getElementById('upg111price').innerHTML = "Maxed"
  	              }
				  if (upgrades[0] >= 6) {
					  document.getElementById('upg112').style.display = "inline-block";
				  }
				   if (upgrades[0] >= 16) {
					  document.getElementById('upgauto1').style.display = "inline-block";
				  }
				   if (upgrades[0] >= 45) {
					  document.getElementById('upgfacility').style.display = "inline-block";
				  }
				
            }
        }
    }
	function upgrade112() {
        if (points >= costs[1]) {
            if (upgrades[1] != times[1]) {
				upgrade(1)
				updatepointgain(0)
				if (pointpowervalue1 != 2) {
				pointgain *= 1.3
				}
				else {
                pointgain *= (1.3 * (pointvaluepower / 1.5))
				}
                document.getElementById('messagecount').innerHTML = Math.round(points);
                document.getElementById('clickmessage').innerHTML = Math.round(pointgain);
				  if (upgrades[1] == times[1]) {
                  document.getElementById('upg112').style.backgroundColor = 106100
				  document.getElementById('upg112price').innerHTML = "Maxed"
  	              }
				
            }
        }
    }
	
	function upgradeauto1() {
        if (points >= 1250) {
            if (point_auto != 1) {
				points -= 1250
                ++point_auto            
                updatepointgain()				
				document.getElementById('autopointsdisplay').style.display = "inline";
				document.getElementById("clickautomessage").innerHTML = Math.round(pointsautodisplay);
				pointsautodisplay = (pointgain / (automation[0] / 1000));
				 document.getElementById('upgauto1times').innerHTML = "1"
				  if (point_auto == 1) {			
                  document.getElementById('upgauto1').style.backgroundColor = 106100
				  document.getElementById('upgauto1price').innerHTML = "Maxed"		
  	              }
				
            }
        }
    }
	function upgradefacility() {
        if (points >= 80000) {
            if (facility != 1) {
				points -= 80000
                 ++facility
				document.getElementById('facilityswitch').style.display = "inline";				
				 document.getElementById('upgfactimes').innerHTML = "1"
                  document.getElementById('upgfacility').style.backgroundColor = 106100
				  document.getElementById('upgfacprice').innerHTML = "Maxed"		
  	              }
				
            }
        }
		function upgradef111() {
        if (iron >= factorycosts[0]) {
			if (factoryupgrades[0] != 3) {
            if (facility == 1) {
				iron -= factorycosts[0]
				factorycosts[0] **= 2
				pointpowervalue1 *= 2
                 ++factoryupgrades[0]     			
				 document.getElementById('upgf111times').innerHTML = factoryupgrades[0];
				 document.getElementById('upgf111price').innerHTML = factorycosts[0];
				 document.getElementById('ironcount').innerHTML = Math.round(iron);
				 if (factoryupgrades[0] == 3) {
                  document.getElementById('upgf111').style.backgroundColor = 106100
				  document.getElementById('upgf111price').innerHTML = "Maxed"		
				 }
  	              }
			}
            }
        }
		function upgradef112() {
			
        if (iron >= factorycosts[1]) {
			if (factoryupgrades[1] != 60) {
            if (facility == 1) {
				iron -= factorycosts[1]
				factorycosts[1] *= 1.6
				++irongatherers
                 ++factoryupgrades[1]     			
				 document.getElementById('upgf112times').innerHTML = factoryupgrades[1];
				 document.getElementById('upgf112price').innerHTML = Math.round(factorycosts[1]);
				 document.getElementById('ironcount').innerHTML = Math.round(iron);
				 document.getElementById('ironautomessage').innerHTML = Math.round((irongain * irongatherers));
				 document.getElementById('irongatherdisplay').innerHTML = Math.round(irongatherers);
				  if (factoryupgrades[1] == 3) {
                  document.getElementById('upgf113').style.display = "inline"	
				 }
				 if (factoryupgrades[1] == 60) {
                  document.getElementById('upgf112').style.backgroundColor = 106100
				  document.getElementById('upgf112price').innerHTML = "Maxed"		
				 }
				 
  	              }
			}
            }
        }
		function upgradef113() {
			
        if (iron >= factorycosts[2]) {
			if (factoryupgrades[2] != 15) {
            if (facility == 1) {
				iron -= factorycosts[2]
				factorycosts[2] *= 1.6
				++goldgatherers
                 ++factoryupgrades[2]     			
				 document.getElementById('upgf113times').innerHTML = factoryupgrades[2];
				 document.getElementById('upgf113price').innerHTML = Math.round(factorycosts[2]);
				 document.getElementById('ironcount').innerHTML = Math.round(iron);
				 document.getElementById('goldupgrades').style.display = "inline"	
				 document.getElementById('upgf114').style.display = "inline"	
				 if (factoryupgrades[2] == 15) {
                  document.getElementById('upgf113').style.backgroundColor = 106100
				  document.getElementById('upgf113price').innerHTML = "Maxed"		
				 }
  	              }
			}
            }
        }
		function upgradef114() {
			
        if (gold >= factorycosts[3]) {
			if (factoryupgrades[3] != 6) {
            if (facility == 1) {
				gold -= factorycosts[3]
				factorycosts[3] *= 3
				irongain *= 2
                 ++factoryupgrades[3]     			
				 document.getElementById('upgf114times').innerHTML = factoryupgrades[3];
				 document.getElementById('upgf114price').innerHTML = Math.round(factorycosts[3]);
				 if (factoryupgrades[3] == 6) {
                  document.getElementById('upgf114').style.backgroundColor = 106100
				  document.getElementById('upgf114price').innerHTML = "Maxed"		
				 }
  	              }
			}
            }
        }
		
		function facilityarea() {
        	document.getElementById('main_area').style.display = "none";
			document.getElementById('mainswitch').style.display = "inline";
			document.getElementById('facilityswitch').style.display = "none";
			document.getElementById('facility_area').style.display = "inline";
			document.getElementById('background').style.backgroundColor = "#2e2e2e";
			area = 1
        }
		function mainarea() {
        	document.getElementById('main_area').style.display = "inline";
			document.getElementById('mainswitch').style.display = "none";
			document.getElementById('facilityswitch').style.display = "inline";
			document.getElementById('facility_area').style.display = "none";
			document.getElementById('background').style.backgroundColor = "black";
			area = 0
        }
    
    
    
	
	
	    setInterval(function() {divtime -= 1
		document.getElementById('divisiontime').innerHTML = Math.round(divtime);
		if (divtime <= 0) {
			points /= divisionvalue
			document.getElementById('messagecount').innerHTML = Math.round(points);
			divtime = 15		
		
			
			
		}
  }, 1000);
  
   setInterval(function() {buttondelay -= 0.001
		
		if (buttondelay <= 0) {
			buttondelay = 0								
		 }
  }, 1);
  
  setInterval(function() {
	  if (point_auto == 1) {
		  incrementButton()
		  document.getElementById('messagecount').innerHTML = Math.round(points);
		  pointsautodisplay = (pointgain / (automation[0] / 1000));
	  }
  }, automation[0]);
  

    setInterval(function() {	 
	       if (area == 1) {
		  incrementIron()		
		   }
		    
  }, 5000);

setInterval(function() {	 
	     trueupdate()
		   
  }, 25);  
   
    setInterval(function() {	 
	       if (area == 1) {
		    if (goldgatherers != 0) {
				  incrementGold()		 
			   }	
		   }
		    
  }, 20000);
 
	
		
  
           
       
            
      
        
    
    
