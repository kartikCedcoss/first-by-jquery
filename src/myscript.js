$(document).ready(function(){

    $('#btnconvert').on('click',function(){
  var input =$('#input1').val();
   var fd=$('#unit1').val();
    var sd=$('#unit2').val();
    
    if(fd=='km' && sd=='m'){
        a= parseFloat(input) * 1000;
        $('#input2').val(a);
    }

    else if(fd=='km' && sd == 'cm'){
        a= parseFloat(input) * 100000;
        $('#input2').val(a);

        
    }
    else if(fd=='km' && sd == 'mm'){
        a= parseFloat(input) * 1000000;
        $('#input2').val(a);
       
    }
    else if(fd=='m' && sd == 'km'){
        a= parseFloat(input) /1000;
        $('#input2').val(a);
       
    }
    else if(fd=='m' && sd == 'cm'){
        a= parseFloat(input) * 100;
        $('#input2').val(a);
        
    }
    else if(fd=='m' && sd == 'mm'){
        a= parseFloat(input) * 1000;
        $('#input2').val(a);

       
    }
    else if(fd=='cm' && sd == 'km'){
        a= parseFloat(input) /100000;
        $('#input2').val(a);

        
    }
    else if(fd=='cm' && sd == 'm'){
        a= parseFloat(input) / 100;
        $('#input2').val(a);

        
    }
    else if(fd=='cm' && sd == 'mm'){
        a= parseFloat(input) * 10;
        $('#input2').val(a);
       
    }
    else if(fd=='mm' && sd == 'km'){
        a= parseFloat(input) / 1000000;
        $('#input2').val(a);

        
    }
    else if(fd=='mm' && sd == 'm'){
        a= parseFloat(input) / 1000;
        $('#input2').val(a);
       
    }
    else if(fd=='mm' && sd == 'cm'){
        a= parseFloat(input) / 10;
        $('#input2').val(a);
        
    }

    else {
        document.getElementById("input2").value = "Please select the different units" ;
    }

     
    

})
})