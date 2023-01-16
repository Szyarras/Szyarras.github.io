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
//    Upgrade stats (messages)
var upgrades = [
0,0,0,0,0,0,0,0,0,0,0
]
var upgradetimes = [
'upg111times','upg112times','upg113times','upg114times','upg115times',
'upg116times','upg117times','upg118times','upg119times','upg120times',
'upg121times'
]
var upgradeprices = [
'upg111price','upg112price','upg113price','upg114price','upg115price',
'upg116price','upg117price','upg118price','upg119price','upg120price',
'upg121price'
]
var costs = [
30,400,6000,100000,10**6,10**9,10**15,10**22,10**26,10**36
]
var times = [
1000,450,200,200,100,100,100,100,10,3
]
var scaling = [
1.15, 1.25, 1.5, 2, 2.2, 2.5, 2.7, 25, 200
]
var automation = [
1500, 500, 5000
]	
var pointsautodisplay = (pointgain / (automation[0] / 1000));

function incrementButton() {
  if (buttondelay == 0) {
    upgs1=0;
    upgs2=0;
    upgs3=0;
	  points += pointgain
    
    ++clicks
    document.getElementById('messagecount').innerHTML = Math.round(points);
    document.getElementById('clickmessage').innerHTML = Math.round(pointgain);
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
                pointgain += 1
                document.getElementById('messagecount').innerHTML = Math.round(points);
                document.getElementById('clickmessage').innerHTML = Math.round(pointgain);
				 
				  if (upgrades[0] == times[1]) {
                  document.getElementById('upg111').style.backgroundColor = 106100
				  document.getElementById('upg111price').innerHTML = Maxed
  	              }
				  if (upgrades[0] >= 6) {
					  document.getElementById('upg112').style.display = "inline-block";
				  }
				   if (upgrades[0] >= 16) {
					  document.getElementById('upgauto1').style.display = "inline-block";
				  }
				
            }
        }
    }
	function upgrade112() {
        if (points >= costs[1]) {
            if (upgrades[1] != times[1]) {
				upgrade(1)
                pointgain *= 1.3
                document.getElementById('messagecount').innerHTML = Math.round(points);
                document.getElementById('clickmessage').innerHTML = Math.round(pointgain);
				  if (upgrades[1] == times[1]) {
                  document.getElementById('upg112').style.backgroundColor = 106100
				  document.getElementById('upg112price').innerHTML = Maxed
  	              }
				
            }
        }
    }
	function upgradeauto1() {
        if (points >= 1250) {
            if (point_auto != 1) {
				points -= 1250
                ++point_auto              
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
	
		
  
           
       
            
      
        
    
    
