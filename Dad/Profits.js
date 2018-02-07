function getProfitShowValue(val){
	var radios = document.getElementsByName('optProfitShow');
	
	// console.log("hi");
	if(val=="Yes"){
		console.log(val);
		var d = document.createElement("div");
		d.setAttribute("class","container");
		d.setAttribute("id","profitOne");

		var h = document.createElement("h1");                // Create a <h1> element
		var t = document.createTextNode("vertcoin: " + 7.50 - " - 0 : losses - way more than the gains");     // Create a text node
		h.appendChild(t);
		d.appendChild(h)
		document.body.appendChild(d);

		
		
	}else{
		console.log(val);
		var element = document.getElementById("profitOne");
		if(element!= null){
			element.outerHTML = "";
		delete element;}

		// var newData = document.createElement("div");
		// 	newData.setAttribute("id","coin2data");
		// 	newData.setAttribute('class', 'coinmarketcap-currency-widget');
		//     newData.setAttribute('data-currency', 'bitcoin');
		//     newData.setAttribute('data-base', 'USD');
		//     coin2.appendChild(newData);

	 //    var script = document.createElement("script");
	 //    	script.setAttribute('type', 'text/javascript');
		//     script.setAttribute('src', 'https://files.coinmarketcap.com/static/widget/currency.js');
		//     coin2.appendChild(script);
	}
	
	// for (var i = 0, length = radios.length; i < length; i++)
	// {
	//  if (radios[i].checked)
	//  {
	//   // do whatever you want with the checked radio
	//   alert(radios[i].value);

	//   // only one radio can be logically checked, don't check the rest
	//   break;
	//  }
	// }
}

function reDraw(coin){
	var coin2 = document.getElementById("coin2");
	var varDiv = document.getElementById("varDiv");

		
	var coin2data = document.getElementById("coin2data");
		coin2data.setAttribute("data-currency",coin);

	var script = document.getElementById("coin2script");
		script.outerHTML = "";
		delete script


	var script = document.createElement("script");
		script.setAttribute('id', 'coin2script');
    	script.setAttribute('type', 'text/javascript');
	    script.setAttribute('src', 'https://files.coinmarketcap.com/static/widget/currency.js');
	    varDiv.appendChild(script);
		// coin2data.outerHTML = "";
		// delete coin2data;
}

function apicall(coin){

	fetch("https://api.coinmarketcap.com/v1/ticker/"+coin+"/")
	.then(res => res.json())
	.then((out) => {
	  console.log('Checkout this JSON! ', out);
	  console.log(out["0"]["price_usd"]);
	})
	.catch(err => { throw err });
	 return out["0"]["price_usd"]
}