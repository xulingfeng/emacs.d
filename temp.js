function doSubmit(){
  var PROJECT_IDObj = document.getElementById("PROJECT_ID");
  var verifyFlag = "0";
  var verify_Project_str = "P8214407500002,P8476264360024";
  var verify_Project_Arr = null;
  if(verify_Project_str!=""){
    verify_Project_Arr = verify_Project_str.split(",");
  }
  if(verify_Project_Arr!=null){
    for(var i=0;i<verify_Project_Arr.length;i++){
      if(verify_Project_Arr[i]==PROJECT_IDObj.value){
        verifyFlag = "1";
        break;
      }
    }
  }
  var formObj = document.getElementById("acceptForm");
  if(verifyFlag=="0"){
    doAjaxSubmit();
  }else{
    var eleObj = null;
    var submitFlag = true;
    common.getRequiredField(PROJECT_IDObj.value,'1',function(vrequiredField){
      var vrequired = null;
      for(var i=0;i<vrequiredField.length;i++)
      {
        vrequired = new Array();
        vrequired = vrequiredField[i];
        if(vrequired[2]=='9'){
          eleObj = document.getElementsByName(vrequired[0]);
          var checked = false;
          for(var j=0;j<eleObj.length;j++){
            if(eleObj[j].checked){
              checked = true;
              break;
            }
          }
          if(!checked){
            alert(vrequired[1]+"不能为空");
            submitFlag = false;
            break;
          }
          vrequired = null;
        }else if(vrequired[2]=='10'){
          eleObj = document.getElementsByName(vrequired[0]);
          var checked = false;
          for(var j=0;j<eleObj.length;j++){
            if(eleObj[j].checked){
              checked = true;
              break;
            }
          }
          if(!checked){
            alert(vrequired[1]+"不能为空");
            submitFlag = false;
            break;
          }
          vrequired = null;
        }else if(vrequired[2]=='4'||vrequired[2]=='5'||vrequired[2]=='11'){
          eleObj = document.getElementsByName(vrequired[0]);
          var selected = false;
          for(var j=0;j<eleObj.length;j++){
            if(eleObj[j].value!=""){
              selected = true;
              break;
            }
          }
          if(!selected){
            alert(vrequired[1]+"不能为空");
            submitFlag = false;
            break;
          }
          vrequired = null;
        }else{
          eleObj = document.getElementById(vrequired[0]);
          if(eleObj.value==null||eleObj.value==""){
            alert(vrequired[1]+"不能为空");
            submitFlag = false;
            eleObj.focus();
            break;
          }
          vrequired = null;
        }
      }
      if(submitFlag){
        doAjaxSubmit();
      }
    });
  }
}
