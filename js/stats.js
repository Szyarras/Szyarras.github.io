//    Main stats
var points = 0
var pointsoftcap = 2e9
var pointgain = 1
var clicks = 0
var divtime = 10
var divisionvalue = 2
var buttondelay = 0.015
var point_auto = 0
var upgrade_auto = 0
var prestige_auto = 0
var facility = 0
var area = 0
var goldinterval = 15
var ironinterval = 3.5
var iron = 0
var irongain = 1
var irongatherers = 1
var irondisplay = ((irongain * irongatherers) / ironinterval);
var gold = 0
var goldgatherers = 0
var goldgain = 1
var golddisplay = ((goldgain * goldgatherers) / goldinterval);
var pointpowervalue1 = 1
var crystalpod = 0
var steel = 0
var point_essence = 0
var poiroid = 0
var crystalresets = 0
var crystals = [
0,0,0
]

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
145,10,60,2,15,4,10,10,10
]
var times = [
1000,450,200,200,100,100,100,100,10,3
]
var scaling = [
1.12, 1.35, 1.5, 2, 2.2, 2.5, 2.7, 25, 200
]
var automation = [
1500, 500, 5000
]	
var pointsautodisplay = (pointgain / (automation[0] / 1000));

console.log("im watching :)");

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
    document.getElementById('ironautomessage').innerHTML = irondisplay.toFixed(3);
}
function incrementGold() {
	  gold += (goldgain * goldgatherers)
    document.getElementById('goldcount').innerHTML = Math.round(gold);
    document.getElementById('goldautomessage').innerHTML = golddisplay.toFixed(3);
  
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
	  if (points > pointsoftcap) {
		  points = pointsoftcap
	  }
	    document.getElementById('messagecount').innerHTML = Math.round(points);
        document.getElementById('clickmessage').innerHTML = Math.round(pointgain);
		document.getElementById("clickautomessage").innerHTML = Math.round(pointsautodisplay);
		document.getElementById("softcap").innerHTML = Math.round(pointsoftcap);
}

function updatefacilitygain() {
	
	if (factoryupgrades[3] != 0) {
	}
	else {
		irongain = (1 + crystals[0])
	goldgain =(1  + crystals[0])
	}
	  document.getElementById('ironcount').innerHTML = Math.round(iron);
	   document.getElementById('ironautomessage').innerHTML = Math.round((irongain * irongatherers));
		 document.getElementById('ironautomessage').innerHTML = irondisplay.toFixed(2);
	 document.getElementById('goldcount').innerHTML = Math.round(gold);
	     document.getElementById('goldautomessage').innerHTML = golddisplay.toFixed(2);
				 document.getElementById('irongatherdisplay').innerHTML = Math.round(irongatherers);
				 	 document.getElementById('goldgatherdisplay').innerHTML = Math.round(goldgatherers);
					  document.getElementById('steeldisplay').innerHTML = Math.round(steel);
					   document.getElementById('pointessencedisplay').innerHTML = Math.round(point_essence);
					    document.getElementById('poiroiddisplay').innerHTML = Math.round(poiroid);
				  irondisplay = ((irongain * irongatherers) / ironinterval);
				  golddisplay = ((goldgain * goldgatherers) / goldinterval);
}

function trueupdate() {
	updatepointgain(2)
	updatefacilitygain()
}


function Reset(number, number2) {
	// 1 - Crystal Reset
	// 2 - Rebirth Reset
	// 3 - Rebirth Challenge Reset
	// 4 - Barrier Reset
	// 5 - Infinity Reset
	if (number == 1) {
  points = 0
 pointgain = 1
 point_auto = 0
 upgrade_auto = 0
 prestige_auto = 0
 facility = 0
 area = 0
 goldinterval = 15
 ironinterval = 3.5
 iron = 0
 irongain = 1
 irongatherers = 1
 irondisplay = ((irongain * irongatherers) / ironinterval);
 gold = 0
 goldgatherers = 0
 goldgain = 1
 golddisplay = ((goldgain * goldgatherers) / goldinterval);
 pointpowervalue1 = 1
 crystalpod = 0

 ++crystals[number2]
 ++crystalresets
 upgrades = [
0,0,0,0,0,0,0,0,0,0,0
]
 factoryupgrades = [
0,0,0,0,0,0,0,0,0
]
 costs = [
30,400,6000,100000,10**6,10**9,10**15,10**22,10**26,10**36
]
 factorycosts = [
145,10,60,2,15,4,10,10,10
]
 times = [
1000,450,200,200,100,100,100,100,10,3
]
 scaling = [
1.12, 1.35, 1.5, 2, 2.2, 2.5, 2.7, 25, 200
]
 automation = [
1500, 500, 5000
]	
 pointsautodisplay = (pointgain / (automation[0] / 1000));
 
  document.getElementById('upgf111times').innerHTML = factoryupgrades[0];
 document.getElementById('upgf111price').innerHTML = Math.round(factorycosts[0]);
  document.getElementById('upgf112times').innerHTML = factoryupgrades[1];
 document.getElementById('upgf112price').innerHTML = Math.round(factorycosts[1]);
 document.getElementById('upgf113times').innerHTML = factoryupgrades[2];
document.getElementById('upgf113price').innerHTML = Math.round(factorycosts[2]);
 document.getElementById('upgf114times').innerHTML = factoryupgrades[3];
 document.getElementById('upgf114price').innerHTML = Math.round(factorycosts[3]);
 document.getElementById('upgf115times').innerHTML = factoryupgrades[4];
 document.getElementById('upgf115price').innerHTML = Math.round(factorycosts[4]);
  document.getElementById('upgf116times').innerHTML = factoryupgrades[5];
 document.getElementById('upgf116price').innerHTML = Math.round(factorycosts[5]);
  document.getElementById('upgf113').style.display = "none";	
   document.getElementById('upgf114').style.display = "none";	
    document.getElementById('upgf115').style.display = "none";	
	 document.getElementById('upgf116').style.display = "none";
   document.getElementById('upg112').style.display = "none";
    document.getElementById('upgauto1').style.display = "none";
document.getElementById('crystalpodcontent').style.display = "none";
document.getElementById('autopointsdisplay').style.display = "none";
 document.getElementById('main_area').style.display = "none";
 document.getElementById('facility_area').style.display = "none";
document.getElementById('mainswitch').style.display = "none";
document.getElementById('facilityswitch').style.display = "none";
document.getElementById('facility_area').style.display = "none";
 	if (crystals[0] == 1) {
	 document.getElementById('upgfacility').style.display = "none";
	 irongain *= 2
	 goldgain *= 2
	 points = 80000
	 upgradefacility()
	}
document.getElementById('reset_flashbang').style.display = "inline";
document.getElementById('reset_flashbang').style.animationPlayState = "running";
document.body.style.animationPlayState = "running";
setTimeout(function() {
	document.getElementById('reset_text').style.display = "inline";
	document.getElementById('crystalcount').style.innerHTML = crystalresets;
	}, 7000);
	setTimeout(function() {
	document.getElementById('resetbutton').style.display = "inline";
	}, 2000);
	}
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
				factorycosts[0] **= 3
				pointpowervalue1 *= 2
                 ++factoryupgrades[0]     			
				 document.getElementById('upgf111times').innerHTML = factoryupgrades[0];
				 document.getElementById('upgf111price').innerHTML = Math.round(factorycosts[0]);
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
			if (factoryupgrades[3] != 10) {
            if (facility == 1) {
				gold -= factorycosts[3]
				factorycosts[3] *= 2.25
				irongain *= 2
                 ++factoryupgrades[3]     			
				 document.getElementById('upgf114times').innerHTML = factoryupgrades[3];
				 document.getElementById('upgf114price').innerHTML = Math.round(factorycosts[3]);
				 if (factoryupgrades[3] == 10) {
                  document.getElementById('upgf114').style.backgroundColor = 106100
				  document.getElementById('upgf114price').innerHTML = "Maxed"		
				 }
				 if (factoryupgrades[3] == 2) {
					  document.getElementById('upgf115').style.display = "inline"
  	              }
			}
            }
        }
		}
			function upgradef115() {
			
        if (gold >= factorycosts[4]) {
			if (factoryupgrades[4] != 1) {
            if (facility == 1) {
				gold -= factorycosts[4]
				goldinterval -= 5
                 ++factoryupgrades[4]     			
				 document.getElementById('upgf115times').innerHTML = factoryupgrades[4];
				 document.getElementById('upgf115price').innerHTML = Math.round(factorycosts[4]);
				   document.getElementById('upgf115').style.backgroundColor = 106100
				  document.getElementById('upgf115price').innerHTML = "Maxed"		
				 if (factoryupgrades[4] == 1) {
                    document.getElementById('upgf116').style.display = "inline"
				 }
  	              }
			}
            }
        }
		
		function upgradef116() {
			
        if (gold >= 30 && iron >= 1600) {
			if (factoryupgrades[5] != 1) {
            if (facility == 1) {
				gold -= 30
				iron -= 1600
				++crystalpod
                 ++factoryupgrades[5]     			
				 document.getElementById('upgf116times').innerHTML = factoryupgrades[5];
				 document.getElementById('upgf116price').innerHTML = Math.round(factorycosts[5]);
				   document.getElementById('upgf115').style.backgroundColor = 106100
				  document.getElementById('upgf116price').innerHTML = "Maxed"	
                   document.getElementById('upgf116price2').innerHTML = "Maxed"		
				   document.getElementById('crystalpodcontent').style.display = "inline"
				    document.getElementById('metalcrystal').style.display = "inline"
  	              }
			}
            }
        }
	function craft1() {
	   if (iron >= 25) {
            if (facility == 1) {
				iron -= 25
				++steel
  	              }
			
            }
        }
	function craft2() {
	   if (points >= 5e8) {
            if (facility == 1) {
				points -= 5e8
				++point_essence
  	              }
			
            }
        }
		function craft3() {
	   if (points >= 1e9 && iron >= 1500 && gold >= 25) {
            if (facility == 1) {
				points -= 1e9
				iron -= 1500
				gold -= 25
				++poiroid
  	              }
			
            }
        }
		function crystalreset1() {
	   if ( steel >= 100) {
            if (facility == 1) {
				Reset(1, 0)
  	              }
			
            }
        }
		
		function facilityarea() {
        	document.getElementById('main_area').style.display = "none";
			document.getElementById('mainswitch').style.display = "inline";
			document.getElementById('facilityswitch').style.display = "none";
			document.getElementById('facility_area').style.display = "inline";
			document.body.style.backgroundColor = "#2e2e2e";
	
			area = 1
        }
		function mainarea() {
        	document.getElementById('main_area').style.display = "inline";
			document.getElementById('mainswitch').style.display = "none";
			document.getElementById('facilityswitch').style.display = "inline";
			document.getElementById('facility_area').style.display = "none";
            document.body.style.backgroundColor = "black";
			area = 0
        }
			function resetcontinue() {
        	document.getElementById('main_area').style.display = "inline";
			document.getElementById('mainswitch').style.display = "none";
			document.getElementById('facility_area').style.display = "none";
			document.getElementById('reset_flashbang').style.animationDirection = "reverse";
				document.body.style.animationDirection = "reverse";
				document.getElementById('reset_flashbang').style.display = "none";
					document.getElementById('reset_text').style.display = "none";
					document.getElementById('resetbutton').style.display = "none";
					document.body.style.backgroundColor = "black";
		
			area = 0
        }
    
    
    
	
	
	    setInterval(function() {divtime -= 1
		document.getElementById('divisiontime').innerHTML = Math.round(divtime);
		if (divtime <= 0) {
			points /= divisionvalue
			document.getElementById('messagecount').innerHTML = Math.round(points);
			divtime = 10		
		
			
			
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
	       if (facility == 1) {
		  incrementIron()		
		   }
		    
  }, (ironinterval * 1000));

setInterval(function() {	 
	     trueupdate()
		   
  }, 25);  
   
    setInterval(function() {	 
	       if (facility == 1) {
		    if (goldgatherers != 0) {
				  incrementGold()		 
			   }	
		   }
		    
  }, (goldinterval * 1000))
