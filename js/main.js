	// Water flow image
	var Height = 1;
	var index = 0;
	var tindex = 0;
	var animateFrame;
	var turbineFrame;
	var innerArrayLength;
	var originalHeight=20;
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

	var turbineArray = [
	 "turbine/Motor Rotation0001.png",
	 "turbine/Motor Rotation0002.png",
	 "turbine/Motor Rotation0003.png",
	 "turbine/Motor Rotation0004.png",
	 "turbine/Motor Rotation0005.png",
	 "turbine/Motor Rotation0006.png",
	 "turbine/Motor Rotation0007.png",
	 "turbine/Motor Rotation0008.png",
	 "turbine/Motor Rotation0009.png",
	 "turbine/Motor Rotation0010.png",
	 "turbine/Motor Rotation0010.png",
	 "turbine/Motor Rotation0010.png",
	 "turbine/Motor Rotation0011.png",
	 "turbine/Motor Rotation0012.png",
	 "turbine/Motor Rotation0013.png",
	 "turbine/Motor Rotation0014.png",
	 "turbine/Motor Rotation0015.png",
	 "turbine/Motor Rotation0016.png",
	 "turbine/Motor Rotation0017.png",
	 "turbine/Motor Rotation0018.png",
	 "turbine/Motor Rotation0019.png",
	 "turbine/Motor Rotation0020.png",
	 "turbine/Motor Rotation0021.png",
	 "turbine/Motor Rotation0022.png",
	 "turbine/Motor Rotation0023.png",
	 "turbine/Motor Rotation0024.png",
	 "turbine/Motor Rotation0025.png",
	 "turbine/Motor Rotation0026.png",
	 "turbine/Motor Rotation0027.png",
	 "turbine/Motor Rotation0028.png",
	 "turbine/Motor Rotation0029.png",
	 "turbine/Motor Rotation0030.png",
	 "turbine/Motor Rotation0031.png",
	 "turbine/Motor Rotation0032.png",
	 "turbine/Motor Rotation0033.png",
	 "turbine/Motor Rotation0034.png",
	 "turbine/Motor Rotation0035.png",
	 "turbine/Motor Rotation0036.png",
	 "turbine/Motor Rotation0037.png",
	 "turbine/Motor Rotation0038.png",
	 "turbine/Motor Rotation0039.png",
	 "turbine/Motor Rotation0040.png",
	 "turbine/Motor Rotation0041.png",
	 "turbine/Motor Rotation0042.png",
	 "turbine/Motor Rotation0043.png",
	 "turbine/Motor Rotation0044.png",
	 "turbine/Motor Rotation0045.png",
	 "turbine/Motor Rotation0046.png",
	 "turbine/Motor Rotation0047.png",
	 "turbine/Motor Rotation0048.png",
	 "turbine/Motor Rotation0049.png",
	 "turbine/Motor Rotation0050.png"

	];


	//  dam height controm slider
	function damHeight(dHeight) {
	   $("#powerOutput").html("0 kW");

	 originalHeight = dHeight;
	 $("#showDamHeight").html(dHeight);
	 if (dHeight < 20) {
	  $("#damHeight").val("20");
	  $("#showDamHeight").html(20);

	 }
	 Height = parseInt(dHeight / 20);
	 if (Height == 0) {
	  Height = 1;
	 }

	 //update dam image
	 var index = Height - 1;
	 $("#damImage").attr("src", waterFlow[index]);

	 //stop turbine
	 $("#turbine").hide();
	 $("#turbine2").show();

	}

	// efficiency control system
	function efficiencyofPlant(dHeight) {

	 $("#showEfficiency").html(dHeight + "%");

	}

	//start the thermal plant
	$("#start").click(function() {

        // calculate the power output in kW
		if(originalHeight<20){
			originalHeight = 20;
		}
	   setTimeout(function(){ 
	   $("#powerOutput").html(4*originalHeight+" kW");
	   }, 5000);

	 var AnimationSequence = Height - 1;
	 if (AnimationSequence == 0) {
	  animateFrame = setInterval(frame, 200);


	 }

	 if (AnimationSequence == 1) {
	  animateFrame = setInterval(frame, 150);

	 }

	 if (AnimationSequence == 2) {
	  animateFrame = setInterval(frame, 100);

	 }

	 if (AnimationSequence == 3) {
	  animateFrame = setInterval(frame, 50);

	 }

	 if (AnimationSequence == 4) {
	  animateFrame = setInterval(frame, 20);

	 }

	});


	// watar flow animation
	function frame() {
	 if (Height == 0) {
	  Height = 1;
	 }
	 var sequence = Height - 1;
	 var innerArrayLength = allImage[sequence].length;

	 if (innerArrayLength == index) {
	  clearInterval(animateFrame);
	  index = 0;
	 } else {
	  $("#damImage").attr("src", allImage[sequence][index]);
	  index++;
	 }

	 // turbine speed control
	 var AnimationSequence = Height - 1;

	 if (AnimationSequence == 0 && index > 12) {
	  turbineFrame = setInterval(turbineAnimation, 500);
	  $("#turbine").show();
	  $("#turbine2").hide();
	 }
	 if (AnimationSequence == 1 && index > 12) {
	  turbineFrame = setInterval(turbineAnimation, 100);
	  $("#turbine").show();
	  $("#turbine2").hide();
	 }
	 if (AnimationSequence == 2 && index > 12) {
	  turbineFrame = setInterval(turbineAnimation, 80);
	  $("#turbine").show();
	  $("#turbine2").hide();
	 }
	 if (AnimationSequence == 3 && index > 12) {
	  turbineFrame = setInterval(turbineAnimation, 40);
	  $("#turbine").show();
	  $("#turbine2").hide();
	 }
	 if (AnimationSequence == 4 && index > 12) {
	  turbineFrame = setInterval(turbineAnimation, 10);
	  $("#turbine").show();
	  $("#turbine2").hide();
	 }


	}


	// $("#damHeight").click(function(){
	// 		clearInterval(turbineFrame);
	// })


	// turbine Animation
	function turbineAnimation() {
	 turbineArrayLength = turbineArray.length;
	 $("#turbine").attr("src", turbineArray[tindex]);
	 tindex++;
	 if (tindex == turbineArrayLength) {
	  tindex = 0;
	 }
	}

	// information toggle
	$(".mobileMenu").click(function(){
	  $(".system-control-box").slideToggle(400);
	})
