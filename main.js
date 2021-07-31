var name_array=[];
function submit(){
    var display_guest_array=[];
    for(var j=1;j<=4;j++){
        var name1=document.getElementById("guest_name_"+j).value;
        console.log(name1);
        
    name_array.push(name1);
    }

    console.log(name_array);
var length_array=name_array.length;
console.log(length_array);
for(var k=0;k<length_array;k++){
    display_guest_array.push("<h4>name - "+name_array[k]+"</h4>");
    console.log(display_guest_array);
    
}
   

    document.getElementById("display_name_with_comma").innerHTML=display_guest_array;

    var remove_comma=display_guest_array.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_comma").innerHTML=remove_comma;

        document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
   names_of_people.sort();
        
    }
       
    
        document.getElementById("display_name_with_comma").innerHTML=display_guest_array_sorting;
    
        var remove_comma=display_guest_array_sorting.join(" ");
        console.log(remove_comma);
        document.getElementById("display_name_without_comma").innerHTML=remove_comma;
}

var guestname = document.getElementById(name1).value;
names_of_people.push(guestname)

function searching()
{
    var s= document.getElementById("s1").value
    var found=0
    var j
    for (j=0 j<names_of_people.length; j++)
        {
            if(s==names_of_people[j]){
                found=found+1
            }
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s"
    console.log("found name "+found+" Time/s");
}
 