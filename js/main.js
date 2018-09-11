
	var attractions,amenities,accessibility,price;	        

  function vibration() {
   var time = 500;
   navigator.vibrate(time);
  }

  $$(document).on('page:init', function (e) {
	    var page = e.detail;
	    //console.log(page);
	    // Code for About page
	    if (page.name === 'start') {
	        
	        

	        $("body").off('click', '.select-all').on('click', '.select-all',function(e) {
	        	//console.log("ll");
	        	$("#attractions,#amenities,#accessibility,#price").prop("checked",true);
	        });

	        $("body").off('click', '.delete-all').on('click', '.delete-all',function(e) {
	        	//console.log("ll1");
	        	$("#attractions,#amenities,#accessibility,#price").prop("checked",false);
	        });


	        $("body").off('click', '.btn-search').on('click', '.btn-search',function(er){
	        	attractions = undefined;
	        	amenities = undefined;
	        	accessibility = undefined;
	        	price = undefined;
	        	if($("#attractions").prop("checked") == true){
	        		attractions = "yes";
	        	}

	        	if($("#amenities").prop("checked") == true){
	        		amenities = "yes";
	        	}

	        	if($("#accessibility").prop("checked") == true){
	        		accessibility = "yes";
	        	}

	        	if($("#price").prop("checked") == true){
	        		price = "yes";
	        	}


	        	/*console.log(attractions);
	        	console.log(amenities);
	        	console.log(accessibility);
	        	console.log(price);*/


	        	if(attractions == undefined && amenities == undefined && accessibility == undefined && price == undefined){
	        		app.dialog.alert("Kindly select at least one factor!");
	        		return;
	        	}


	        	app.dialog.confirm("Are you sure you want to search",function(s){
	        		mainView.router.navigate('/result/',{});
	        	});



	        });
	    }



	    if(page.name === 'result'){
    		/*console.log(attractions);
        	console.log(amenities);
        	console.log(accessibility);
        	console.log(price);*/


        	//var all = ;
        	var string = "<ol type='i'>";
        	if(attractions !== undefined){
        		string += "<li>Attractions</li>";
        	}

        	if(amenities !== undefined){
        		string += "<li>Amenities</li>";
        	}

        	if(accessibility !== undefined){
        		string += "<li>Accessibility</li>";
        	}

        	if(price !== undefined){
        		string += "<li>Fair Price</li>";
        	}

        	string += "</ol>";

        	$("#factors").html(string);

        	app.preloader.show();

        	$.ajax({
        		url: url,
        		type: 'get',
        		dataType: 'json',
        		timeout: 30000,
        		cache: true,
        		data: {
        			'search': '',
        			'accessibility': accessibility,
        			'amenities': amenities,
        			'attractions': attractions,
        			'price': price
        		},
        		success: function(f){
        			console.log(f);
        			var rec = f.rec;
        			console.log(rec[0]);
        			var t = rec.length;
        			if(t == 0){
        				app.toast.create({
        					text: 'No result found',
        					position: 'center',
        					closeTimeout: 2500
        				}).open();
        			}

        			var text = "";
        			for(var j = 0; j < t; j++){
        				var d = rec[j].name;
        				var u = rec[j].link;
        				text += '<li><a href="" class="item-link visit-link" data-link="'+u+'">'+d+'</a></li>';
        			}

        			$("#center-list").html(text);
        			app.preloader.hide();
        		},
        		error: function(er){
        			console.log(er);
        			app.preloader.hide();
        			app.toast.create({
        				text: 'Network error, kindly go back and try again!',
        				position: 'center',
        				closeTimeout: 2500
        			}).open();
        		}
        	});


        	$("body").off('click', '.visit-link').on('click', '.visit-link',function(e) {
	        	var dd = $(this).attr("data-link");
	        	goto(dd);
	        	//$("#attractions,#amenities,#accessibility,#price").prop("checked",true);
	        });
	    }


	    if(page.name === 'all'){
        	app.preloader.show();

        	$.ajax({
        		url: url,
        		type: 'get',
        		dataType: 'json',
        		timeout: 30000,
        		cache: true,
        		data: {
        			'search': ''        			
        		},
        		success: function(f){
        			console.log(f);
        			var rec = f.rec;
        			console.log(rec[0]);        			
        			var t = rec.length;
        			if(t == 0){
        				app.toast.create({
        					text: 'No result found',
        					position: 'center',
        					closeTimeout: 2500
        				}).open();
        			}

        			var text = "";
        			for(var j = 0; j < t; j++){
        				var d = rec[j].name;
        				var u = rec[j].link;
        				text += '<li><a href="" class="item-link visit-link" data-link="'+u+'">'+d+'</a></li>';
        			}

        			$("#amuse-list").html(text);
        			app.preloader.hide();
        		},
        		error: function(er){
        			console.log(er);
        			app.preloader.hide();
        			app.toast.create({
        				text: 'Network error, kindly go back and try again!',
        				position: 'center',
        				closeTimeout: 2500
        			}).open();
        		}
        	});


        	$("body").off('click', '.visit-link').on('click', '.visit-link',function(e) {
	        	var dd = $(this).attr("data-link");
	        	goto(dd);
	        	//$("#attractions,#amenities,#accessibility,#price").prop("checked",true);
	        });
	    }

	    if(page.name === 'search_region'){
        	
	    	$("body").off('click', '.search-region').on('click', '.search-region',function(e) {
        	app.preloader.show();

	        	$.ajax({
	        		url: url,
	        		type: 'get',
	        		dataType: 'json',
	        		timeout: 30000,
	        		cache: true,
	        		data: {
	        			'region': $("#region").val()
	        		},
	        		success: function(f){
	        			console.log(f);
	        			var rec = f.rec;
	        			console.log(rec[0]);        			
	        			var t = rec.length;
	        			if(t == 0){
	        				app.toast.create({
	        					text: 'No result found',
	        					position: 'center',
	        					closeTimeout: 2500
	        				}).open();
	        			}

	        			var text = "";
	        			for(var j = 0; j < t; j++){
	        				var d = rec[j].name;
	        				var u = rec[j].link;
	        				text += '<li><a href="" class="item-link visit-link" data-link="'+u+'">'+d+'</a></li>';
	        			}

	        			$("#region-list").html(text);
	        			app.preloader.hide();
	        		},
	        		error: function(er){
	        			console.log(er);
	        			app.preloader.hide();
	        			app.toast.create({
	        				text: 'Network error, kindly go back and try again!',
	        				position: 'center',
	        				closeTimeout: 2500
	        			}).open();
	        		}
	        	});

	        });


        	$("body").off('click', '.visit-link').on('click', '.visit-link',function(e) {
	        	var dd = $(this).attr("data-link");
	        	goto(dd);
	        	//$("#attractions,#amenities,#accessibility,#price").prop("checked",true);
	        });
	    }

	    if(page.name === 'search_name'){
        	
	    	$("body").off('click', '.search-name').on('click', '.search-name',function(e) {

	    		if($("#s-name").val() == ""){
	    			app.toast.create({
	    				text: "Kindly enter the park name!",
	    				position: "center",
	    				closeTimeout: 2500
	    			}).open();
	    			return;
	    		}
        	app.preloader.show();

	        	$.ajax({
	        		url: url,
	        		type: 'get',
	        		dataType: 'json',
	        		timeout: 30000,
	        		cache: true,
	        		data: {
	        			'name': $("#s-name").val()
	        		},
	        		success: function(f){
	        			console.log(f);
	        			var rec = f.rec;
	        			console.log(rec[0]);        			
	        			var t = rec.length;
	        			if(t == 0){
	        				app.toast.create({
	        					text: 'No result found',
	        					position: 'center',
	        					closeTimeout: 2500
	        				}).open();
	        			}

	        			var text = "";
	        			for(var j = 0; j < t; j++){
	        				var d = rec[j].name;
	        				var u = rec[j].link;
	        				text += '<li><a href="" class="item-link visit-link" data-link="'+u+'">'+d+'</a></li>';
	        			}

	        			$("#name-list").html(text);
	        			app.preloader.hide();
	        		},
	        		error: function(er){
	        			console.log(er);
	        			app.preloader.hide();
	        			app.toast.create({
	        				text: 'Network error, kindly go back and try again!',
	        				position: 'center',
	        				closeTimeout: 2500
	        			}).open();
	        		}
	        	});

	        });


        	$("body").off('click', '.visit-link').on('click', '.visit-link',function(e) {
	        	var dd = $(this).attr("data-link");
	        	goto(dd);
	        	//$("#attractions,#amenities,#accessibility,#price").prop("checked",true);
	        });
	    }
	    // Code for Services page
    
	});



/*
document.addEventListener('deviceready', function () {

  //console.log("ready...");
   

}, false);*/

function goto(url){
	window.open(url);
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
}