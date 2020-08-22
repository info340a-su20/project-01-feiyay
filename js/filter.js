'use strict';




  $(document).ready(function(){
    $("#myInput").on("keyup",function(){
        var keyname =$(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(keyname)>-1)
        });
    });
  });