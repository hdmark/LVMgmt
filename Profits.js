function getProfitShowValue(val){
	var radios = document.getElementsByName('optProfitShow');
	
	if(val=="Yes"){


		addProfitDiv("vertcoin","profitOne", 7.50, 200);
		addProfitDiv("dogecoin","profitTwo", .01, 25);
				// $.getJSON("https://api.coinmarketcap.com/v1/ticker/vertcoin/", function(data){

		// 	//-----------------------------------------------------------
		// 	//DATA EVALUATION 
		// 	var current = Number(data[0]["price_usd"]);

		// 	console.log(current +100);
		// 	var diff = 7.50 - current;
		// 	//-----------------------------------------------------------


		// 	//-----------------------------------------------------------
		// 	// HTML MODIFIERS
		// 	//create a text element with the data i need to add
		// 	var h = document.createElement("h1");                // Create a <h1> element
		// 	var t = document.createTextNode("vertcoin: " + diff );     // Create a text node

		// 	// create div called profit one
		// 	var d = document.createElement("div");
		// 	d.setAttribute("class","container");
		// 	d.setAttribute("id","profitOne");

		// 	// add text element to the div and add it to the file
		// 	h.appendChild(t);
		// 	d.appendChild(h)
		// 	document.body.appendChild(d);
		// 	//profit = data;
		// 	})
		// 	//-----------------------------------------------------------

			
	}else{
		//deletes out the h1
		var element = document.getElementById("profitOne");
		if(element!= null){
			element.outerHTML = "";
		delete element;}
		var element = document.getElementById("profitTwo");
		if(element!= null){
			element.outerHTML = "";
		delete element;}
	}
	
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

function addProfitDiv(coin,divName, initPrice, initAmt){
			$.getJSON("https://api.coinmarketcap.com/v1/ticker/" + coin + "/", function(data){

			//-----------------------------------------------------------
			//DATA EVALUATION 
			var current = Number(data[0]["price_usd"]);
			var newAmt = initAmt *  (current/initPrice);

			var success
			if(initAmt>newAmt){
				success = "down";}else{sucess="up";};
			//-----------------------------------------------------------


			//-----------------------------------------------------------
			// HTML MODIFIERS
			//create a text element with the data i need to add
			var h = document.createElement("h5");                // Create a <h1> element
			var t = document.createTextNode(coin +": $" + newAmt + " from $" + initAmt + " which puts us "+ success);     // Create a text node

			// create div called profit one
			var d = document.createElement("div");
			d.setAttribute("class","container");
			d.setAttribute("id",divName);

			// add text element to the div and add it to the file
			h.appendChild(t);
			d.appendChild(h)
			document.body.appendChild(d);
			//profit = data;
			})
			//-----------------------------------------------------------
		}
