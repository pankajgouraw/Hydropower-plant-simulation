	// Water flow image
	var Height=1;
	var index=0;
    var animateFrame;
	var waterFlow = [
	                  "waterFlow/waterFlow_5.png",
	                  "waterFlow/waterFlow_4.png",
	                  "waterFlow/waterFlow_3.png",
	                  "waterFlow/waterFlow_2.png",
	                  "waterFlow/waterFlow_1.png"
	                ];
	var waterFlow_1_Sequence = [
	                             "waterFlow_1_Sequence/waterFlow_10001.png",
	                             "waterFlow_1_Sequence/waterFlow_10002.png",
	                             "waterFlow_1_Sequence/waterFlow_10003.png",
	                             "waterFlow_1_Sequence/waterFlow_10004.png",
	                             "waterFlow_1_Sequence/waterFlow_10005.png",
	                             "waterFlow_1_Sequence/waterFlow_10006.png",
	                             "waterFlow_1_Sequence/waterFlow_10007.png",
	                             "waterFlow_1_Sequence/waterFlow_10008.png",
	                             "waterFlow_1_Sequence/waterFlow_10009.png",
	                             "waterFlow_1_Sequence/waterFlow_10010.png",
	                             "waterFlow_1_Sequence/waterFlow_10011.png",
	                             "waterFlow_1_Sequence/waterFlow_10012.png",
	                             "waterFlow_1_Sequence/waterFlow_10013.png",
	                             "waterFlow_1_Sequence/waterFlow_10014.png",
	                             "waterFlow_1_Sequence/waterFlow_10015.png",
	                             "waterFlow_1_Sequence/waterFlow_10016.png",
	                             "waterFlow_1_Sequence/waterFlow_10017.png"

	                           ];

	    var waterFlow_2_Sequence = [
	                             "waterFlow_2_Sequence/waterFlow_20001.png",
	                             "waterFlow_2_Sequence/waterFlow_20002.png",
	                             "waterFlow_2_Sequence/waterFlow_20003.png",
	                             "waterFlow_2_Sequence/waterFlow_20004.png",
	                             "waterFlow_2_Sequence/waterFlow_20005.png",
	                             "waterFlow_2_Sequence/waterFlow_20006.png",
	                             "waterFlow_2_Sequence/waterFlow_20007.png",
	                             "waterFlow_2_Sequence/waterFlow_20008.png",
	                             "waterFlow_2_Sequence/waterFlow_20009.png",
	                             "waterFlow_2_Sequence/waterFlow_20010.png",
	                             "waterFlow_2_Sequence/waterFlow_20011.png",
	                             "waterFlow_2_Sequence/waterFlow_20012.png",
	                             "waterFlow_2_Sequence/waterFlow_20013.png",
	                             "waterFlow_2_Sequence/waterFlow_20014.png",
	                             "waterFlow_2_Sequence/waterFlow_20015.png",
	                             "waterFlow_2_Sequence/waterFlow_20016.png"

	                           ];

	    	var waterFlow_3_Sequence = [
	                             "waterFlow_3_Sequence/waterFlow_30001.png",
	                             "waterFlow_3_Sequence/waterFlow_30002.png",
	                             "waterFlow_3_Sequence/waterFlow_30003.png",
	                             "waterFlow_3_Sequence/waterFlow_30004.png",
	                             "waterFlow_3_Sequence/waterFlow_30005.png",
	                             "waterFlow_3_Sequence/waterFlow_30006.png",
	                             "waterFlow_3_Sequence/waterFlow_30007.png",
	                             "waterFlow_3_Sequence/waterFlow_30008.png",
	                             "waterFlow_3_Sequence/waterFlow_30009.png",
	                             "waterFlow_3_Sequence/waterFlow_30010.png",
	                             "waterFlow_3_Sequence/waterFlow_30011.png",
	                             "waterFlow_3_Sequence/waterFlow_30012.png",
	                             "waterFlow_3_Sequence/waterFlow_30013.png",
	                             "waterFlow_3_Sequence/waterFlow_30014.png",
	                             "waterFlow_3_Sequence/waterFlow_30015.png",
	                             "waterFlow_3_Sequence/waterFlow_30016.png",
	                             "waterFlow_3_Sequence/waterFlow_30017.png"

	                           ];
	    	var waterFlow_4_Sequence = [
	                             "waterFlow_4_Sequence/waterFlow_40001.png",
	                             "waterFlow_4_Sequence/waterFlow_40002.png",
	                             "waterFlow_4_Sequence/waterFlow_40003.png",
	                             "waterFlow_4_Sequence/waterFlow_40004.png",
	                             "waterFlow_4_Sequence/waterFlow_40005.png",
	                             "waterFlow_4_Sequence/waterFlow_40006.png",
	                             "waterFlow_4_Sequence/waterFlow_40007.png",
	                             "waterFlow_4_Sequence/waterFlow_40008.png",
	                             "waterFlow_4_Sequence/waterFlow_40009.png",
	                             "waterFlow_4_Sequence/waterFlow_40010.png",
	                             "waterFlow_4_Sequence/waterFlow_40011.png",
	                             "waterFlow_4_Sequence/waterFlow_40012.png",
	                             "waterFlow_4_Sequence/waterFlow_40013.png",
	                             "waterFlow_4_Sequence/waterFlow_40014.png",
	                             "waterFlow_4_Sequence/waterFlow_40015.png",
	                             "waterFlow_4_Sequence/waterFlow_40016.png",
	                             "waterFlow_4_Sequence/waterFlow_40017.png"

	                           ];


	    var waterFlow_5_Sequence = [
	                             "waterFlow_5_Sequence/waterFlow_50001.png",
	                             "waterFlow_5_Sequence/waterFlow_50002.png",
	                             "waterFlow_5_Sequence/waterFlow_50003.png",
	                             "waterFlow_5_Sequence/waterFlow_50004.png",
	                             "waterFlow_5_Sequence/waterFlow_50005.png",
	                             "waterFlow_5_Sequence/waterFlow_50006.png",
	                             "waterFlow_5_Sequence/waterFlow_50007.png",
	                             "waterFlow_5_Sequence/waterFlow_50008.png",
	                             "waterFlow_5_Sequence/waterFlow_50009.png",
	                             "waterFlow_5_Sequence/waterFlow_50010.png",
	                             "waterFlow_5_Sequence/waterFlow_50011.png",
	                             "waterFlow_5_Sequence/waterFlow_50012.png",
	                             "waterFlow_5_Sequence/waterFlow_50013.png",
	                             "waterFlow_5_Sequence/waterFlow_50014.png",
	                             "waterFlow_5_Sequence/waterFlow_50015.png",
	                             "waterFlow_5_Sequence/waterFlow_50016.png",
	                             "waterFlow_5_Sequence/waterFlow_50017.png"

	                           ];

	       var allImage = [
		                  waterFlow_5_Sequence,
		                  waterFlow_4_Sequence,
		                  waterFlow_3_Sequence,
		                  waterFlow_2_Sequence,
		                  waterFlow_1_Sequence
		                  ];


	//  dam height controm slider
	function damHeight(dHeight){
		$("#showDamHeight").html(dHeight);
		if(dHeight < 20){
			$("#damHeight").val("20");
		    $("#showDamHeight").html(20);

		}
		console.log("dHeight : "+ dHeight);
	    Height = parseInt(dHeight / 20);
		if(Height==0){
			Height =1;
		}
		console.log("height : "+ Height);

		//update dam image
		var index = Height-1;
		$("#damImage").attr("src",waterFlow[index]);
	}

    // efficiency control system
	function efficiencyofPlant(dHeight){
		$("#showEfficiency").html(dHeight+"%");
	}

	//start the thermal plant
	$("#start").click(function(){
		

		// for(let i=0; i<= allImage[sequence].length){
		animateFrame = setInterval(frame, 500);
		// }
		// console.log("sequence"+innerArrayLength)
		// for(let i=0; i<=innerArrayLength; i++){
		// 	$("#damImage").attr("src",allImage[sequence][i]);
		// }
		 });

		// watar flow animation
		function frame() {
			if(Height==0){
			Height =1;
			}
			var sequence = Height-1;
	        var  innerArrayLength = allImage[sequence].length;
			  if (innerArrayLength == index) {
			    clearInterval(animateFrame);
			    index=0;
			    console.log("clear animation");
			  } else {
			     $("#damImage").attr("src",allImage[sequence][index]);
			     index++;
			  }
			}

	





