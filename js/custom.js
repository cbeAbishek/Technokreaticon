// Format SatSchedule
class scheduleEvent {
    constructor(title, start, end, track) {
        this.title = title;
        this.startTime = start;
        
        if (track == undefined){
          this.end = null
          this.track = end;
        }
        else{
          this.endTime = end;
          this.track = track;
        }
        
    }

}

var saturday = [];
var sunday = [];

// track = {main, ws} where ws is workshop
saturday.push(new scheduleEvent("Registration and Welcome", "09:00", "main"));
saturday.push(new scheduleEvent("Participants will check in, receive their welcome kits, and settle into the venue.", "09:00", "09:30", "ws"));

saturday.push(new scheduleEvent("Opening Remarks and Event Overview", "09:30", "main"));
saturday.push(new scheduleEvent("Introduction to event structure, rules, and expectations.", "09:30", "10:00", "ws"));

saturday.push(new scheduleEvent("Domain 1: AI & Machine Learning Idea Pitching", "10:00", "main"));
saturday.push(new scheduleEvent("Teams present their ideas in the AI & Machine Learning domain.", "10:00", "11:30", "ws"));

saturday.push(new scheduleEvent("Break", "11:30", "main"));
saturday.push(new scheduleEvent("Participants take a short break and network.", "11:30", "11:45", "ws"));

saturday.push(new scheduleEvent("Domain 2: Automation & Robotics Idea Pitching", "11:45", "main"));
saturday.push(new scheduleEvent("Teams present their ideas in the Automation & Robotics domain.", "11:45", "13:00", "ws"));

saturday.push(new scheduleEvent("Lunch Break", "13:00", "main"));
saturday.push(new scheduleEvent("Enjoy lunch and network with participants and mentors.", "13:00", "14:00", "ws"));

saturday.push(new scheduleEvent("Domain 3: Business Models & Innovations Idea Pitching", "14:00", "main"));
saturday.push(new scheduleEvent("Teams present their ideas in the Business Models & Innovations domain.", "14:00", "15:30", "ws"));

saturday.push(new scheduleEvent("Finalists Announcement", "15:30", "main"));
saturday.push(new scheduleEvent("Judges announce the finalists for Day 2.", "15:30", "16:00", "ws"));

saturday.push(new scheduleEvent("Day 1 Wrap-up", "16:00", "main"));
saturday.push(new scheduleEvent("Closing remarks and overview of the next day.", "16:00", "16:30", "ws"));

sunday.push(new scheduleEvent("Day 2 Registration and Welcome", "09:00", "main"));
sunday.push(new scheduleEvent("Participants check in and prepare for the second day.", "09:00", "09:30", "ws"));

sunday.push(new scheduleEvent("Domain 4: Software Development & Engineering Idea Pitching", "09:30", "main"));
sunday.push(new scheduleEvent("Teams present their ideas in the Software Development & Engineering domain.", "09:30", "11:00", "ws"));

sunday.push(new scheduleEvent("Break", "11:00", "main"));
sunday.push(new scheduleEvent("Participants take a short break.", "11:00", "11:15", "ws"));

sunday.push(new scheduleEvent("Domain 5: Open Innovation Idea Pitching", "11:15", "main"));
sunday.push(new scheduleEvent("Teams present their ideas in the Open Innovation domain.", "11:15", "12:45", "ws"));

sunday.push(new scheduleEvent("Lunch Break", "12:45", "main"));
sunday.push(new scheduleEvent("Enjoy lunch and connect with other participants.", "12:45", "13:45", "ws"));

sunday.push(new scheduleEvent("Final Round: On-the-Spot Problem Statement", "13:45", "main"));
sunday.push(new scheduleEvent("The 5 domain finalists will receive a problem statement and have 1 hour to create a solution.", "13:45", "14:45", "ws"));

sunday.push(new scheduleEvent("Final Round Presentations", "14:45", "main"));
sunday.push(new scheduleEvent("Finalists present their solutions to the jury panel.", "14:45", "15:45", "ws"));

sunday.push(new scheduleEvent("Judging and Deliberation", "15:45", "main"));
sunday.push(new scheduleEvent("Judges deliberate and finalize the winners.", "15:45", "16:15", "ws"));

sunday.push(new scheduleEvent("Award Ceremony and Closing Remarks", "16:15", "main"));
sunday.push(new scheduleEvent("Winners are announced, and prizes are distributed.", "16:15", "17:00", "ws"));

sunday.push(new scheduleEvent("Networking & Farewell", "17:00", "main"));
sunday.push(new scheduleEvent("Participants, mentors, and jury members interact and close the event.", "17:00", "17:30", "ws"));


saturday.sort((a,b) => (a.startTime >= b.startTime) ? 1: -1);
sunday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );

var str = '<tbody>';
str +=  '<tr><th>Time</th><th>Title</th><th>Duration</th><th>Description</th></tr>';
saturday.forEach(function(ev, index){
  if (index ==0  || saturday[index-1].startTime != ev.startTime){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != saturday.length-1 && ev.startTime == saturday[index+1].startTime){
        str += '<th>';
        str+=saturday[index+1].startTime
        if(saturday[index+1].endTime){
        str +=  '<br />|<br />' + saturday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + saturday[index+1].title+ '</td>';
    }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("saturdayContainer").innerHTML = str;

var str = '<tbody>';
str +=  '<tr><th>Time</th><th>Title</th><th></th><th>Description</th></tr>';
sunday.forEach(function(ev, index){
  if (index ==0  || (sunday[index-1].startTime != ev.startTime || sunday[index-1].track == ev.track) ){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }
    
    

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
    if (index != sunday.length-1 && ev.startTime == sunday[index+1].startTime && ev.track != sunday[index+1].track){
        str += '<th>';
        str+=sunday[index+1].startTime
        if(sunday[index+1].endTime){
        str +=  '<br />|<br />' + sunday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + sunday[index+1].title+ '</td>';
    
  }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("sundayContainer").innerHTML = str;