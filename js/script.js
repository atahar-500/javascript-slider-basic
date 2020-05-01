 var imageData = ['emage/img1.jpeg','emage/img2.jpg','emage/img3.jpg','emage/img4.jpeg','emage/img2.jpg'];
  var index = 0;
  function changeEmage(){
      
      var mainEmage = document.getElementById('mainEmage');
      mainEmage.setAttribute('src',imageData[index]);
      index++;
      if(index >= imageData.length){
          index = 0;
      }
          
  }
    setInterval(changeEmage,2000);


     var imageTne = document.getElementById('imgtow');
     imageTne.onclick = function(){
     var imageattribute = document.getElementById('imgtow').getAttribute('src');
     document.getElementById('mainEmage').setAttribute('src' , imageattribute)
    };
        var imageThree = document.getElementById('imgthree');
     imageThree.onclick = function(){
     var imageathreebute = document.getElementById('imgthree').getAttribute('src');
     document.getElementById('mainEmage').setAttribute('src' , imageathreebute)
    };
var imagefour = document.getElementById('imgfour');
     imagefour.onclick = function(){
     var imagefouratribute = document.getElementById('imgfour').getAttribute('src');
     document.getElementById('mainEmage').setAttribute('src' , imagefouratribute)
    };
var imageone = document.getElementById('imgOne');
     imageone.onclick = function(){
     var imageoneatribute = document.getElementById('imgOne').getAttribute('src');
     document.getElementById('mainEmage').setAttribute('src' , imageoneatribute)
    };
     


var homeBtn = document.getElementById('home');
   homeBtn.onclick = function(){
      var headinh_e =  document.getElementById('heading');
       headinh_e.innerHTML = 'this is home eliment';
   }
   
   var aboueBtn = document.getElementById('about');
   aboueBtn.onclick = function(){
      var headinh_e =  document.getElementById('heading');
       headinh_e.innerHTML = 'this is about  eliment';
       var paraEli = document.getElementById('pera');
       paraEli.innerHTML ='basha number :12344';
   }




var redbtn = document.getElementById('redBtn');
 redbtn.onclick = function(){
     var dive_one = document.getElementById('diveOne');
     dive_one.style.display = 'block';
     dive_one.className= '';
 };










var submitBtn = document.getElementById('btm');
submitBtn.onclick = function(){
    var starting_number = document.getElementById('startingNumber').value;
    var ending_document = document.getElementById('endingNumber').value;
    var res = ' ';
     for(var i= starting_number; i<=ending_document; i++){
       res = res+i;
     }document.getElementById('result').innerHTML = res;
    
};