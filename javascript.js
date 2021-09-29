'use strict'

window.onload=function(){
    var dropdown = document.getElementsByClassName('dropdown');
    var dropdowncontent = document.getElementsByClassName('dropdown-content');

    dropdown[0].addEventListener('click',toggleMenu);
    dropdowncontent[0].style.display="none";

    function toggleMenu(){

            if(dropdowncontent[0].style.display=="none"){
                dropdowncontent[0].style.display="block";
                return 'aaa';
            }else{
                dropdowncontent[0].style.display="none";
                return 'aaaa';
            }
         };
    }

  



