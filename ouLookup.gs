function listSubOUs() {
  var listOUs = CBOU[14]; // This grabs the incoming array into the listOUs var for reuse
    let htmlT=`<select id="idOUs" value="${CBOU[6]}">`; // This was supposed to select the actual OU, but didn't quite work - see below for necessary code
    for (let i=0; i<listOUs.length; i++) {
      const optionT = listOUs[i].replace(/<|>/g,'');
      htmlT+=`<option ${optionT==CBOU[6]?`selected`:``} value="${optionT}">${optionT}</option>`;
    }
    htmlT+='</select>'

    document.getElementById("selectinput").innerHTML = htmlT;
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    Logger.log(CBOU[6])
}