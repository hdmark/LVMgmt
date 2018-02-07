function getProfitShowValue(val){
	var radios = document.getElementsByName('optProfitShow');
	// console.log("hi");
	if(val=="Yes"){
		console.log(val);
		var d = document.createElement("div");
		d.setAttribute("class","container");
		d.setAttribute("id","profitOne");

		var h = document.createElement("h1");                // Create a <h1> element
		var t = document.createTextNode("hahaha were broke");     // Create a text node
		h.appendChild(t);
		d.appendChild(h)
		document.body.appendChild(d);

	}else{
		console.log(val);
		var element = document.getElementById("profitOne");
		if(element!= null){
			element.outerHTML = "";
		delete element;}
	}
	
	for (var i = 0, length = radios.length; i < length; i++)
	{
	 if (radios[i].checked)
	 {
	  // do whatever you want with the checked radio
	  alert(radios[i].value);

	  // only one radio can be logically checked, don't check the rest
	  break;
	 }
	}
}