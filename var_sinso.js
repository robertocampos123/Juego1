var c = document.getElementById("lienzo");
var lienzo = c.getContext("2d");



// Cara y piel
lienzo.fillStyle="rgb(254,213,029)";
lienzo.strokeStyle="rgb(0,0,0)";
lienzo.lineWidth=2;
lienzo.beginPath();
lienzo.moveTo(121,189);
lienzo.lineTo(122,100);
lienzo.lineTo(135,115);
lienzo.lineTo(145,98);
lienzo.lineTo(155,114);
lienzo.lineTo(161,97);
lienzo.lineTo(168,112);
lienzo.lineTo(179,98);
lienzo.lineTo(186,112);
lienzo.lineTo(199,99);
lienzo.lineTo(204,117);
lienzo.lineTo(218,103);
lienzo.lineTo(222,120);
lienzo.lineTo(234,105);
lienzo.lineTo(237,125);
lienzo.lineTo(249,111);
lienzo.lineTo(253,129);
lienzo.lineTo(266,117);
lienzo.lineTo(240,280);
lienzo.lineTo(243,323);
lienzo.quadraticCurveTo(220,340,186,339);
lienzo.lineTo(185,325);
lienzo.quadraticCurveTo(184,322,181,322);
lienzo.quadraticCurveTo(166,319,165,310);
lienzo.quadraticCurveTo(115,313,108,299);
lienzo.quadraticCurveTo(106,293,109,285);
lienzo.quadraticCurveTo(117,250,115,210);
lienzo.quadraticCurveTo(108,194,121,189);
lienzo.lineCap = 'round';
lienzo.fill();
lienzo.stroke();
    
    //Boca
    lienzo.beginPath();
    lienzo.moveTo(165,310);	  
    lienzo.quadraticCurveTo(185,310,211,304);
    lienzo.lineWidth = 2;
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(206,302);	  
    lienzo.quadraticCurveTo(212,302,215,305);
    lienzo.lineWidth = 2;
    lienzo.stroke();

    //OjoIz
    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(137,229,33, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.beginPath();	  
    lienzo.arc(131,229,2, 0, 2*Math.PI);
    lienzo.lineWidth = 4;
    lienzo.stroke();

    //Nariz
    lienzo.fillStyle="rgb(254,213,029)";
    lienzo.beginPath();
    lienzo.moveTo(140,270);
    lienzo.quadraticCurveTo(112,270,113,258);
    lienzo.quadraticCurveTo(112,242,134,245);
    lienzo.lineTo(170,247);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //OjoDer
    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(183,230,33, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.beginPath();	  
    lienzo.arc(188,230,2, 0, 2*Math.PI);
    lienzo.lineWidth = 4;
    lienzo.stroke();

    //Oreja
    lienzo.fillStyle="rgb(254,213,029)";
    lienzo.beginPath();
    lienzo.moveTo(235,263);
    lienzo.bezierCurveTo(263, 245, 263, 299, 235, 285);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(238,272);
    lienzo.quadraticCurveTo(243,264,249,270);
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(238,273);
    lienzo.quadraticCurveTo(241,268,249,270);
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(238,272);
    lienzo.quadraticCurveTo(246,270,245,277);
    lienzo.lineWidth = 2;
    lienzo.stroke();
   
    //BrazoDer
    lienzo.fillStyle="rgb(254,213,029)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(160,412);
    lienzo.lineTo(167,384);
    lienzo.lineTo(172,387);
    lienzo.lineTo(172,412);
    lienzo.lineTo(160,412);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(242,78,40)";
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(180,350);
    lienzo.lineTo(172,387);
    lienzo.lineTo(162,380);
    lienzo.quadraticCurveTo(169,355,180,350);
    lienzo.fill();
    lienzo.stroke();
    
    //Playera
    lienzo.fillStyle="rgb(242,78,40)";
    lienzo.beginPath();
    lienzo.moveTo(184,336);
    lienzo.lineTo(166,406);
    lienzo.quadraticCurveTo(147,425,146,462);
    lienzo.quadraticCurveTo(173,475,250,470);
    lienzo.quadraticCurveTo(278,479,295,472);
    lienzo.quadraticCurveTo(295,435,272,407);
    lienzo.lineTo(270,395);
    lienzo.quadraticCurveTo(274,395,276,390);
    lienzo.quadraticCurveTo(275,365,252,338);
    lienzo.quadraticCurveTo(254,328,243,322);
    lienzo.quadraticCurveTo(220,340,184,339);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //LPiernaDer
    lienzo.fillStyle="rgb(254,213,029)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(175,517);
    lienzo.lineTo(207,517);
    lienzo.lineTo(207,567);
    lienzo.quadraticCurveTo(191,573,175,567);
    lienzo.lineTo(175,517);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(175,567);
    lienzo.quadraticCurveTo(164,565,165,575);
    lienzo.quadraticCurveTo(191,587,217,575);
    lienzo.quadraticCurveTo(215,565,207,567);
    lienzo.quadraticCurveTo(191,573,175,567);
    lienzo.fill();
    lienzo.stroke();

    //ZapatoDer
    lienzo.fillStyle="rgb(0,157,220)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(165,575);
    lienzo.quadraticCurveTo(145,588,138,605);
    lienzo.quadraticCurveTo(185,615,230,603);
    lienzo.quadraticCurveTo(228,587,216,575);
    lienzo.quadraticCurveTo(191,587,165,575);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(138,605);
    lienzo.quadraticCurveTo(135,612,138,614);
    lienzo.quadraticCurveTo(185,625,235,612);
    lienzo.quadraticCurveTo(235,609,231,603);
    lienzo.quadraticCurveTo(185,615,138,605);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(200,595,10, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //PiernaIzq
    lienzo.fillStyle="rgb(254,213,029)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(222,517);
    lienzo.lineTo(251,517);
    lienzo.lineTo(251,570);
    lienzo.quadraticCurveTo(240,575,222,570);
    lienzo.lineTo(222,517);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(222,570);
    lienzo.quadraticCurveTo(215,570,220,579);
    lienzo.quadraticCurveTo(235,586,258,579);
    lienzo.quadraticCurveTo(258,571,255,569);
    lienzo.quadraticCurveTo(220,573,222,570);
    lienzo.fill();
    lienzo.stroke();

    //ZapIzq
    lienzo.fillStyle="rgb(0,157,220)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(220,579);
    lienzo.quadraticCurveTo(195,590,188,615);
    lienzo.quadraticCurveTo(220,625,269,613);
    lienzo.quadraticCurveTo(269,595,258,579);
    lienzo.quadraticCurveTo(235,586,220,579);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(188,615);
    lienzo.quadraticCurveTo(184,620,188,627);
    lienzo.quadraticCurveTo(235,635,272,623);
    lienzo.quadraticCurveTo(272,615,269,613);
    lienzo.quadraticCurveTo(220,625,188,615);
    lienzo.fill();
    lienzo.stroke();

    //Chor
    lienzo.fillStyle="rgb(0,157,220)";
    lienzo.beginPath();
    lienzo.moveTo(151,464);
    lienzo.quadraticCurveTo(178,477,250,470);
    lienzo.quadraticCurveTo(278,479,289,474);
    lienzo.quadraticCurveTo(288,488,278,495);
    lienzo.lineTo(279,519);
    lienzo.quadraticCurveTo(255,528,204,525);
    lienzo.lineTo(204,520);
    lienzo.quadraticCurveTo(173,520,154,512);
    lienzo.lineTo(156,483);
    lienzo.quadraticCurveTo(150,475,151,464);
    lienzo.fill();
    lienzo.lineWidth = 2;
    lienzo.stroke();

     
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(151,464);
    lienzo.quadraticCurveTo(152,500,205,509);
    lienzo.lineTo(204,520);
    lienzo.stroke();
    
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(212,478);
    lienzo.quadraticCurveTo(210,496,216,504);
    lienzo.stroke();

    //BrazoIz
    lienzo.fillStyle="rgb(254,213,029)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(220,476);
    lienzo.lineTo(228,387);
    lienzo.quadraticCurveTo(245,383,264,389);
    lienzo.lineTo(257,487);
    lienzo.lineTo(220,476);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(242,78,40)";
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(227,393);
    lienzo.quadraticCurveTo(218,393,218,387);
    lienzo.bezierCurveTo(223, 318, 265, 318, 276, 390);
    lienzo.quadraticCurveTo(274,397,265,395);
    lienzo.lineTo(264,389);
    lienzo.quadraticCurveTo(245,382,228,387);
    lienzo.lineTo(227,393);
    lienzo.fill();
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(223,387);
    lienzo.quadraticCurveTo(250,382,271,390);
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(220,476);
    lienzo.quadraticCurveTo(265,491,262,487);
    lienzo.stroke();

//Piel
$('#btnCambiar').click(function () {
    let color = $('#col').val();
    let color2 = $('#colS').val();
    let color3 = $('#colSh').val();
    let color4 = $('#colT').val();
    lienzo.fillStyle=color;
    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(121,189);
    lienzo.lineTo(122,100);
    lienzo.lineTo(135,115);
    lienzo.lineTo(145,98);
    lienzo.lineTo(155,114);
    lienzo.lineTo(161,97);
    lienzo.lineTo(168,112);
    lienzo.lineTo(179,98);
    lienzo.lineTo(186,112);
    lienzo.lineTo(199,99);
    lienzo.lineTo(204,117);
    lienzo.lineTo(218,103);
    lienzo.lineTo(222,120);
    lienzo.lineTo(234,105);
    lienzo.lineTo(237,125);
    lienzo.lineTo(249,111);
    lienzo.lineTo(253,129);
    lienzo.lineTo(266,117);
    lienzo.lineTo(240,280);
    lienzo.lineTo(243,323);
    lienzo.quadraticCurveTo(220,340,186,339);
    lienzo.lineTo(185,325);
    lienzo.quadraticCurveTo(184,322,181,322);
    lienzo.quadraticCurveTo(166,319,165,310);
    lienzo.quadraticCurveTo(115,313,108,299);
    lienzo.quadraticCurveTo(106,293,109,285);
    lienzo.quadraticCurveTo(117,250,115,210);
    lienzo.quadraticCurveTo(108,194,121,189);
    lienzo.lineCap = 'round';
    lienzo.fill();
    lienzo.stroke();
    
    //mouth
    lienzo.beginPath();
    lienzo.moveTo(165,310);	  
    lienzo.quadraticCurveTo(185,310,211,304);
    lienzo.lineWidth = 2;
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(206,302);	  
    lienzo.quadraticCurveTo(212,302,215,305);
    lienzo.lineWidth = 2;
    lienzo.stroke();

    //EyeL
    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(137,229,33, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.beginPath();	  
    lienzo.arc(131,229,2, 0, 2*Math.PI);
    lienzo.lineWidth = 4;
    lienzo.stroke();

    //Nose
    lienzo.fillStyle=color;
    lienzo.beginPath();
    lienzo.moveTo(140,270);
    lienzo.quadraticCurveTo(112,270,113,258);
    lienzo.quadraticCurveTo(112,242,134,245);
    lienzo.lineTo(170,247);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //EyeR
    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(183,230,33, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.beginPath();	  
    lienzo.arc(188,230,2, 0, 2*Math.PI);
    lienzo.lineWidth = 4;
    lienzo.stroke();

    //Ear
    lienzo.fillStyle=color;
    lienzo.beginPath();
    lienzo.moveTo(235,263);
    lienzo.bezierCurveTo(263, 245, 263, 299, 235, 285);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(238,272);
    lienzo.quadraticCurveTo(243,264,249,270);
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(238,273);
    lienzo.quadraticCurveTo(241,268,249,270);
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(238,272);
    lienzo.quadraticCurveTo(246,270,245,277);
    lienzo.lineWidth = 2;
    lienzo.stroke();
   
    //ArmR
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(160,412);
    lienzo.lineTo(167,384);
    lienzo.lineTo(172,387);
    lienzo.lineTo(172,412);
    lienzo.lineTo(160,412);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle=color2;
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(180,350);
    lienzo.lineTo(172,387);
    lienzo.lineTo(162,380);
    lienzo.quadraticCurveTo(169,355,180,350);
    lienzo.fill();
    lienzo.stroke();
    
    //shirt
    lienzo.fillStyle=color2;
    lienzo.beginPath();
    lienzo.moveTo(184,336);
    lienzo.lineTo(166,406);
    lienzo.quadraticCurveTo(147,425,146,462);
    lienzo.quadraticCurveTo(173,475,250,470);
    lienzo.quadraticCurveTo(278,479,295,472);
    lienzo.quadraticCurveTo(295,435,272,407);
    lienzo.lineTo(270,395);
    lienzo.quadraticCurveTo(274,395,276,390);
    lienzo.quadraticCurveTo(275,365,252,338);
    lienzo.quadraticCurveTo(254,328,243,322);
    lienzo.quadraticCurveTo(220,340,184,339);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //LegR
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(175,517);
    lienzo.lineTo(207,517);
    lienzo.lineTo(207,567);
    lienzo.quadraticCurveTo(191,573,175,567);
    lienzo.lineTo(175,517);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(175,567);
    lienzo.quadraticCurveTo(164,565,165,575);
    lienzo.quadraticCurveTo(191,587,217,575);
    lienzo.quadraticCurveTo(215,565,207,567);
    lienzo.quadraticCurveTo(191,573,175,567);
    lienzo.fill();
    lienzo.stroke();

    //ShoeR
    lienzo.fillStyle=color4;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(165,575);
    lienzo.quadraticCurveTo(145,588,138,605);
    lienzo.quadraticCurveTo(185,615,230,603);
    lienzo.quadraticCurveTo(228,587,216,575);
    lienzo.quadraticCurveTo(191,587,165,575);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(138,605);
    lienzo.quadraticCurveTo(135,612,138,614);
    lienzo.quadraticCurveTo(185,625,235,612);
    lienzo.quadraticCurveTo(235,609,231,603);
    lienzo.quadraticCurveTo(185,615,138,605);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(200,595,10, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //LegL
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(222,517);
    lienzo.lineTo(251,517);
    lienzo.lineTo(251,570);
    lienzo.quadraticCurveTo(240,575,222,570);
    lienzo.lineTo(222,517);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(222,570);
    lienzo.quadraticCurveTo(215,570,220,579);
    lienzo.quadraticCurveTo(235,586,258,579);
    lienzo.quadraticCurveTo(258,571,255,569);
    lienzo.quadraticCurveTo(220,573,222,570);
    lienzo.fill();
    lienzo.stroke();

    //ShoeL
    lienzo.fillStyle=color4;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(220,579);
    lienzo.quadraticCurveTo(195,590,188,615);
    lienzo.quadraticCurveTo(220,625,269,613);
    lienzo.quadraticCurveTo(269,595,258,579);
    lienzo.quadraticCurveTo(235,586,220,579);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(188,615);
    lienzo.quadraticCurveTo(184,620,188,627);
    lienzo.quadraticCurveTo(235,635,272,623);
    lienzo.quadraticCurveTo(272,615,269,613);
    lienzo.quadraticCurveTo(220,625,188,615);
    lienzo.fill();
    lienzo.stroke();

    //short
    lienzo.fillStyle=color3;
    lienzo.beginPath();
    lienzo.moveTo(151,464);
    lienzo.quadraticCurveTo(178,477,250,470);
    lienzo.quadraticCurveTo(278,479,289,474);
    lienzo.quadraticCurveTo(288,488,278,495);
    lienzo.lineTo(279,519);
    lienzo.quadraticCurveTo(255,528,204,525);
    lienzo.lineTo(204,520);
    lienzo.quadraticCurveTo(173,520,154,512);
    lienzo.lineTo(156,483);
    lienzo.quadraticCurveTo(150,475,151,464);
    lienzo.fill();
    lienzo.lineWidth = 2;
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(151,464);
    lienzo.quadraticCurveTo(152,500,205,509);
    lienzo.lineTo(204,520);
    lienzo.stroke();
    
    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(212,478);
    lienzo.quadraticCurveTo(210,498,216,504);
    lienzo.stroke();

    //ArmL
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(220,476);
    lienzo.lineTo(228,387);
    lienzo.quadraticCurveTo(245,383,264,389);
    lienzo.lineTo(257,487);
    lienzo.lineTo(220,476);
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.fillStyle=color2;
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(227,393);
    lienzo.quadraticCurveTo(218,393,218,387);
    lienzo.bezierCurveTo(223, 318, 265, 318, 276, 390);
    lienzo.quadraticCurveTo(274,397,265,395);
    lienzo.lineTo(264,389);
    lienzo.quadraticCurveTo(245,382,228,387);
    lienzo.lineTo(227,393);
    lienzo.fill();
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(223,387);
    lienzo.quadraticCurveTo(250,382,271,390);
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(220,476);
    lienzo.quadraticCurveTo(265,491,262,487);
    lienzo.stroke();
});

//Shirt
$('#btnCambiarS').click(function () {
    let color = $('#col').val();
    let color2 = $('#colS').val();
    let color3 = $('#colSh').val();
    let color4 = $('#colT').val();
    lienzo.fillStyle=color;
    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(121,189);
    lienzo.lineTo(122,100);
    lienzo.lineTo(135,115);
    lienzo.lineTo(145,98);
    lienzo.lineTo(155,114);
    lienzo.lineTo(161,97);
    lienzo.lineTo(168,112);
    lienzo.lineTo(179,98);
    lienzo.lineTo(186,112);
    lienzo.lineTo(199,99);
    lienzo.lineTo(204,117);
    lienzo.lineTo(218,103);
    lienzo.lineTo(222,120);
    lienzo.lineTo(234,105);
    lienzo.lineTo(237,125);
    lienzo.lineTo(249,111);
    lienzo.lineTo(253,129);
    lienzo.lineTo(266,117);
    lienzo.lineTo(240,280);
    lienzo.lineTo(243,323);
    lienzo.quadraticCurveTo(220,340,186,339);
    lienzo.lineTo(185,325);
    lienzo.quadraticCurveTo(184,322,181,322);
    lienzo.quadraticCurveTo(166,319,165,310);
    lienzo.quadraticCurveTo(115,313,108,299);
    lienzo.quadraticCurveTo(106,293,109,285);
    lienzo.quadraticCurveTo(117,250,115,210);
    lienzo.quadraticCurveTo(108,194,121,189);
    lienzo.lineCap = 'round';
    lienzo.fill();
    lienzo.stroke();
    
    //mouth
    lienzo.beginPath();
    lienzo.moveTo(165,310);	  
    lienzo.quadraticCurveTo(185,310,211,304);
    lienzo.lineWidth = 2;
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(206,302);	  
    lienzo.quadraticCurveTo(212,302,215,305);
    lienzo.lineWidth = 2;
    lienzo.stroke();

    //EyeL
    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(137,229,33, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.beginPath();	  
    lienzo.arc(131,229,2, 0, 2*Math.PI);
    lienzo.lineWidth = 4;
    lienzo.stroke();

    //Nose
    lienzo.fillStyle=color;
    lienzo.beginPath();
    lienzo.moveTo(140,270);
    lienzo.quadraticCurveTo(112,270,113,258);
    lienzo.quadraticCurveTo(112,242,134,245);
    lienzo.lineTo(170,247);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //EyeR
    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(183,230,33, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.beginPath();	  
    lienzo.arc(188,230,2, 0, 2*Math.PI);
    lienzo.lineWidth = 4;
    lienzo.stroke();

    //Ear
    lienzo.fillStyle=color;
    lienzo.beginPath();
    lienzo.moveTo(235,263);
    lienzo.bezierCurveTo(263, 245, 263, 299, 235, 285);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(238,272);
    lienzo.quadraticCurveTo(243,264,249,270);
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(238,273);
    lienzo.quadraticCurveTo(241,268,249,270);
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(238,272);
    lienzo.quadraticCurveTo(246,270,245,277);
    lienzo.lineWidth = 2;
    lienzo.stroke();
   
    //ArmR
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(160,412);
    lienzo.lineTo(167,384);
    lienzo.lineTo(172,387);
    lienzo.lineTo(172,412);
    lienzo.lineTo(160,412);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle=color2;
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(180,350);
    lienzo.lineTo(172,387);
    lienzo.lineTo(162,380);
    lienzo.quadraticCurveTo(169,355,180,350);
    lienzo.fill();
    lienzo.stroke();
    
    //shirt
    lienzo.fillStyle=color2;
    lienzo.beginPath();
    lienzo.moveTo(184,336);
    lienzo.lineTo(166,406);
    lienzo.quadraticCurveTo(147,425,146,462);
    lienzo.quadraticCurveTo(173,475,250,470);
    lienzo.quadraticCurveTo(278,479,295,472);
    lienzo.quadraticCurveTo(295,435,272,407);
    lienzo.lineTo(270,395);
    lienzo.quadraticCurveTo(274,395,276,390);
    lienzo.quadraticCurveTo(275,365,252,338);
    lienzo.quadraticCurveTo(254,328,243,322);
    lienzo.quadraticCurveTo(220,340,184,339);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //LegR
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(175,517);
    lienzo.lineTo(207,517);
    lienzo.lineTo(207,567);
    lienzo.quadraticCurveTo(191,573,175,567);
    lienzo.lineTo(175,517);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(175,567);
    lienzo.quadraticCurveTo(164,565,165,575);
    lienzo.quadraticCurveTo(191,587,217,575);
    lienzo.quadraticCurveTo(215,565,207,567);
    lienzo.quadraticCurveTo(191,573,175,567);
    lienzo.fill();
    lienzo.stroke();

    //ShoeR
    lienzo.fillStyle=color4;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(165,575);
    lienzo.quadraticCurveTo(145,588,138,605);
    lienzo.quadraticCurveTo(185,615,230,603);
    lienzo.quadraticCurveTo(228,587,216,575);
    lienzo.quadraticCurveTo(191,587,165,575);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(138,605);
    lienzo.quadraticCurveTo(135,612,138,614);
    lienzo.quadraticCurveTo(185,625,235,612);
    lienzo.quadraticCurveTo(235,609,231,603);
    lienzo.quadraticCurveTo(185,615,138,605);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(200,595,10, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //LegL
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(222,517);
    lienzo.lineTo(251,517);
    lienzo.lineTo(251,570);
    lienzo.quadraticCurveTo(240,575,222,570);
    lienzo.lineTo(222,517);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(222,570);
    lienzo.quadraticCurveTo(215,570,220,579);
    lienzo.quadraticCurveTo(235,586,258,579);
    lienzo.quadraticCurveTo(258,571,255,569);
    lienzo.quadraticCurveTo(220,573,222,570);
    lienzo.fill();
    lienzo.stroke();

    //ShoeL
    lienzo.fillStyle=color4;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(220,579);
    lienzo.quadraticCurveTo(195,590,188,615);
    lienzo.quadraticCurveTo(220,625,269,613);
    lienzo.quadraticCurveTo(269,595,258,579);
    lienzo.quadraticCurveTo(235,586,220,579);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(188,615);
    lienzo.quadraticCurveTo(184,620,188,627);
    lienzo.quadraticCurveTo(235,635,272,623);
    lienzo.quadraticCurveTo(272,615,269,613);
    lienzo.quadraticCurveTo(220,625,188,615);
    lienzo.fill();
    lienzo.stroke();

    //short
    lienzo.fillStyle=color3;
    lienzo.beginPath();
    lienzo.moveTo(151,464);
    lienzo.quadraticCurveTo(178,477,250,470);
    lienzo.quadraticCurveTo(278,479,289,474);
    lienzo.quadraticCurveTo(288,488,278,495);
    lienzo.lineTo(279,519);
    lienzo.quadraticCurveTo(255,528,204,525);
    lienzo.lineTo(204,520);
    lienzo.quadraticCurveTo(173,520,154,512);
    lienzo.lineTo(156,483);
    lienzo.quadraticCurveTo(150,475,151,464);
    lienzo.fill();
    lienzo.lineWidth = 2;
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(151,464);
    lienzo.quadraticCurveTo(152,500,205,509);
    lienzo.lineTo(204,520);
    lienzo.stroke();
    
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(212,478);
    lienzo.quadraticCurveTo(210,496,216,504);
    lienzo.stroke();

    //ArmL
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(220,476);
    lienzo.lineTo(228,387);
    lienzo.quadraticCurveTo(245,383,264,389);
    lienzo.lineTo(257,487);
    lienzo.lineTo(220,476);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle=color2;
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(227,393);
    lienzo.quadraticCurveTo(218,393,218,387);
    lienzo.bezierCurveTo(223, 318, 265, 318, 276, 390);
    lienzo.quadraticCurveTo(274,397,265,395);
    lienzo.lineTo(264,389);
    lienzo.quadraticCurveTo(245,382,228,387);
    lienzo.lineTo(227,393);
    lienzo.fill();
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(223,387);
    lienzo.quadraticCurveTo(250,382,271,390);
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(220,476);
    lienzo.quadraticCurveTo(265,491,262,487);
    lienzo.stroke();
});

//Short
$('#btnCambiarSh').click(function () {
    let color = $('#col').val();
    let color2 = $('#colS').val();
    let color3 = $('#colSh').val();
    let color4 = $('#colT').val();
    lienzo.fillStyle=color;
    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(121,189);
    lienzo.lineTo(122,100);
    lienzo.lineTo(135,115);
    lienzo.lineTo(145,98);
    lienzo.lineTo(155,114);
    lienzo.lineTo(161,97);
    lienzo.lineTo(168,112);
    lienzo.lineTo(179,98);
    lienzo.lineTo(186,112);
    lienzo.lineTo(199,99);
    lienzo.lineTo(204,117);
    lienzo.lineTo(218,103);
    lienzo.lineTo(222,120);
    lienzo.lineTo(234,105);
    lienzo.lineTo(237,125);
    lienzo.lineTo(249,111);
    lienzo.lineTo(253,129);
    lienzo.lineTo(266,117);
    lienzo.lineTo(240,280);
    lienzo.lineTo(243,323);
    lienzo.quadraticCurveTo(220,340,186,339);
    lienzo.lineTo(185,325);
    lienzo.quadraticCurveTo(184,322,181,322);
    lienzo.quadraticCurveTo(166,319,165,310);
    lienzo.quadraticCurveTo(115,313,108,299);
    lienzo.quadraticCurveTo(106,293,109,285);
    lienzo.quadraticCurveTo(117,250,115,210);
    lienzo.quadraticCurveTo(108,194,121,189);
    lienzo.lineCap = 'round';
    lienzo.fill();
    lienzo.stroke();
    
    //mouth
    lienzo.beginPath();
    lienzo.moveTo(165,310);	  
    lienzo.quadraticCurveTo(185,310,211,304);
    lienzo.lineWidth = 2;
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(206,302);	  
    lienzo.quadraticCurveTo(212,302,215,305);
    lienzo.lineWidth = 2;
    lienzo.stroke();

    //EyeL
    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(137,229,33, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.beginPath();	  
    lienzo.arc(131,229,2, 0, 2*Math.PI);
    lienzo.lineWidth = 4;
    lienzo.stroke();

    //Nose
    lienzo.fillStyle=color;
    lienzo.beginPath();
    lienzo.moveTo(140,270);
    lienzo.quadraticCurveTo(112,270,113,258);
    lienzo.quadraticCurveTo(112,242,134,245);
    lienzo.lineTo(170,247);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //EyeR
    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(183,230,33, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.beginPath();	  
    lienzo.arc(188,230,2, 0, 2*Math.PI);
    lienzo.lineWidth = 4;
    lienzo.stroke();

    //Ear
    lienzo.fillStyle=color;
    lienzo.beginPath();
    lienzo.moveTo(235,263);
    lienzo.bezierCurveTo(263, 245, 263, 299, 235, 285);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(238,272);
    lienzo.quadraticCurveTo(243,264,249,270);
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(238,273);
    lienzo.quadraticCurveTo(241,268,249,270);
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(238,272);
    lienzo.quadraticCurveTo(246,270,245,277);
    lienzo.lineWidth = 2;
    lienzo.stroke();
   
    //ArmR
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(160,412);
    lienzo.lineTo(167,384);
    lienzo.lineTo(172,387);
    lienzo.lineTo(172,412);
    lienzo.lineTo(160,412);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle=color2;
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(180,350);
    lienzo.lineTo(172,387);
    lienzo.lineTo(162,380);
    lienzo.quadraticCurveTo(169,355,180,350);
    lienzo.fill();
    lienzo.stroke();
    
    //shirt
    lienzo.fillStyle=color2;
    lienzo.beginPath();
    lienzo.moveTo(184,336);
    lienzo.lineTo(166,406);
    lienzo.quadraticCurveTo(147,425,146,462);
    lienzo.quadraticCurveTo(173,475,250,470);
    lienzo.quadraticCurveTo(278,479,295,472);
    lienzo.quadraticCurveTo(295,435,272,407);
    lienzo.lineTo(270,395);
    lienzo.quadraticCurveTo(274,395,276,390);
    lienzo.quadraticCurveTo(275,365,252,338);
    lienzo.quadraticCurveTo(254,328,243,322);
    lienzo.quadraticCurveTo(220,340,184,339);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //LegR
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(175,517);
    lienzo.lineTo(207,517);
    lienzo.lineTo(207,567);
    lienzo.quadraticCurveTo(191,573,175,567);
    lienzo.lineTo(175,517);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(175,567);
    lienzo.quadraticCurveTo(164,565,165,575);
    lienzo.quadraticCurveTo(191,587,217,575);
    lienzo.quadraticCurveTo(215,565,207,567);
    lienzo.quadraticCurveTo(191,573,175,567);
    lienzo.fill();
    lienzo.stroke();

    //ShoeR
    lienzo.fillStyle=color4;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(165,575);
    lienzo.quadraticCurveTo(145,588,138,605);
    lienzo.quadraticCurveTo(185,615,230,603);
    lienzo.quadraticCurveTo(228,587,216,575);
    lienzo.quadraticCurveTo(191,587,165,575);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(138,605);
    lienzo.quadraticCurveTo(135,612,138,614);
    lienzo.quadraticCurveTo(185,625,235,612);
    lienzo.quadraticCurveTo(235,609,231,603);
    lienzo.quadraticCurveTo(185,615,138,605);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(200,595,10, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //LegL
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(222,517);
    lienzo.lineTo(251,517);
    lienzo.lineTo(251,570);
    lienzo.quadraticCurveTo(240,575,222,570);
    lienzo.lineTo(222,517);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(222,570);
    lienzo.quadraticCurveTo(215,570,220,579);
    lienzo.quadraticCurveTo(235,586,258,579);
    lienzo.quadraticCurveTo(258,571,255,569);
    lienzo.quadraticCurveTo(220,573,222,570);
    lienzo.fill();
    lienzo.stroke();

    //ShoeL
    lienzo.fillStyle=color4;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(220,579);
    lienzo.quadraticCurveTo(195,590,188,615);
    lienzo.quadraticCurveTo(220,625,269,613);
    lienzo.quadraticCurveTo(269,595,258,579);
    lienzo.quadraticCurveTo(235,586,220,579);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(188,615);
    lienzo.quadraticCurveTo(184,620,188,627);
    lienzo.quadraticCurveTo(235,635,272,623);
    lienzo.quadraticCurveTo(272,615,269,613);
    lienzo.quadraticCurveTo(220,625,188,615);
    lienzo.fill();
    lienzo.stroke();

    //short
    lienzo.fillStyle=color3;
    lienzo.beginPath();
    lienzo.moveTo(151,464);
    lienzo.quadraticCurveTo(178,477,250,470);
    lienzo.quadraticCurveTo(278,479,289,474);
    lienzo.quadraticCurveTo(288,488,278,495);
    lienzo.lineTo(279,519);
    lienzo.quadraticCurveTo(255,528,204,525);
    lienzo.lineTo(204,520);
    lienzo.quadraticCurveTo(173,520,154,512);
    lienzo.lineTo(156,483);
    lienzo.quadraticCurveTo(150,475,151,464);
    lienzo.fill();
    lienzo.lineWidth = 2;
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(151,464);
    lienzo.quadraticCurveTo(152,500,205,509);
    lienzo.lineTo(204,520);
    lienzo.stroke();
    
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(212,478);
    lienzo.quadraticCurveTo(210,496,216,504);
    lienzo.stroke();

    //ArmL
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(220,476);
    lienzo.lineTo(228,387);
    lienzo.quadraticCurveTo(245,383,264,389);
    lienzo.lineTo(257,487);
    lienzo.lineTo(220,476);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle=color2;
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(227,393);
    lienzo.quadraticCurveTo(218,393,218,387);
    lienzo.bezierCurveTo(223, 318, 265, 318, 276, 390);
    lienzo.quadraticCurveTo(274,397,265,395);
    lienzo.lineTo(264,389);
    lienzo.quadraticCurveTo(245,382,228,387);
    lienzo.lineTo(227,393);
    lienzo.fill();
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(223,387);
    lienzo.quadraticCurveTo(250,382,271,390);
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(220,476);
    lienzo.quadraticCurveTo(265,491,262,487);
    lienzo.stroke();
});

//Shoes
$('#btnCambiarT').click(function () {
    let color = $('#col').val();
    let color2 = $('#colS').val();
    let color3 = $('#colSh').val();
    let color4 = $('#colT').val();
    lienzo.fillStyle=color;
    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(121,189);
    lienzo.lineTo(122,100);
    lienzo.lineTo(135,115);
    lienzo.lineTo(145,98);
    lienzo.lineTo(155,114);
    lienzo.lineTo(161,97);
    lienzo.lineTo(168,112);
    lienzo.lineTo(179,98);
    lienzo.lineTo(186,112);
    lienzo.lineTo(199,99);
    lienzo.lineTo(204,117);
    lienzo.lineTo(218,103);
    lienzo.lineTo(222,120);
    lienzo.lineTo(234,105);
    lienzo.lineTo(237,125);
    lienzo.lineTo(249,111);
    lienzo.lineTo(253,129);
    lienzo.lineTo(266,117);
    lienzo.lineTo(240,280);
    lienzo.lineTo(243,323);
    lienzo.quadraticCurveTo(220,340,186,339);
    lienzo.lineTo(185,325);
    lienzo.quadraticCurveTo(184,322,181,322);
    lienzo.quadraticCurveTo(166,319,165,310);
    lienzo.quadraticCurveTo(115,313,108,299);
    lienzo.quadraticCurveTo(106,293,109,285);
    lienzo.quadraticCurveTo(117,250,115,210);
    lienzo.quadraticCurveTo(108,194,121,189);
    lienzo.lineCap = 'round';
    lienzo.fill();
    lienzo.stroke();
    
    //mouth
    lienzo.beginPath();
    lienzo.moveTo(165,310);	  
    lienzo.quadraticCurveTo(185,310,211,304);
    lienzo.lineWidth = 2;
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(206,302);	  
    lienzo.quadraticCurveTo(212,302,215,305);
    lienzo.lineWidth = 2;
    lienzo.stroke();

    //EyeL
    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(137,229,33, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.beginPath();	  
    lienzo.arc(131,229,2, 0, 2*Math.PI);
    lienzo.lineWidth = 4;
    lienzo.stroke();

    //Nose
    lienzo.fillStyle=color;
    lienzo.beginPath();
    lienzo.moveTo(140,270);
    lienzo.quadraticCurveTo(112,270,113,258);
    lienzo.quadraticCurveTo(112,242,134,245);
    lienzo.lineTo(170,247);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //EyeR
    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(183,230,33, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle="rgb(0,0,0)";
    lienzo.beginPath();	  
    lienzo.arc(188,230,2, 0, 2*Math.PI);
    lienzo.lineWidth = 4;
    lienzo.stroke();

    //Ear
    lienzo.fillStyle=color;
    lienzo.beginPath();
    lienzo.moveTo(235,263);
    lienzo.bezierCurveTo(263, 245, 263, 299, 235, 285);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(238,272);
    lienzo.quadraticCurveTo(243,264,249,270);
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(238,273);
    lienzo.quadraticCurveTo(241,268,249,270);
    lienzo.lineWidth = 2;
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(238,272);
    lienzo.quadraticCurveTo(246,270,245,277);
    lienzo.lineWidth = 2;
    lienzo.stroke();
   
    //ArmR
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(160,412);
    lienzo.lineTo(167,384);
    lienzo.lineTo(172,387);
    lienzo.lineTo(172,412);
    lienzo.lineTo(160,412);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle=color2;
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(180,350);
    lienzo.lineTo(172,387);
    lienzo.lineTo(162,380);
    lienzo.quadraticCurveTo(169,355,180,350);
    lienzo.fill();
    lienzo.stroke();
    
    //shirt
    lienzo.fillStyle=color2;
    lienzo.beginPath();
    lienzo.moveTo(184,336);
    lienzo.lineTo(166,406);
    lienzo.quadraticCurveTo(147,425,146,462);
    lienzo.quadraticCurveTo(173,475,250,470);
    lienzo.quadraticCurveTo(278,479,295,472);
    lienzo.quadraticCurveTo(295,435,272,407);
    lienzo.lineTo(270,395);
    lienzo.quadraticCurveTo(274,395,276,390);
    lienzo.quadraticCurveTo(275,365,252,338);
    lienzo.quadraticCurveTo(254,328,243,322);
    lienzo.quadraticCurveTo(220,340,184,339);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //LegR
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(175,517);
    lienzo.lineTo(207,517);
    lienzo.lineTo(207,567);
    lienzo.quadraticCurveTo(191,573,175,567);
    lienzo.lineTo(175,517);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(175,567);
    lienzo.quadraticCurveTo(164,565,165,575);
    lienzo.quadraticCurveTo(191,587,217,575);
    lienzo.quadraticCurveTo(215,565,207,567);
    lienzo.quadraticCurveTo(191,573,175,567);
    lienzo.fill();
    lienzo.stroke();

    //ShoeR
    lienzo.fillStyle=color4;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(165,575);
    lienzo.quadraticCurveTo(145,588,138,605);
    lienzo.quadraticCurveTo(185,615,230,603);
    lienzo.quadraticCurveTo(228,587,216,575);
    lienzo.quadraticCurveTo(191,587,165,575);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(138,605);
    lienzo.quadraticCurveTo(135,612,138,614);
    lienzo.quadraticCurveTo(185,625,235,612);
    lienzo.quadraticCurveTo(235,609,231,603);
    lienzo.quadraticCurveTo(185,615,138,605);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.beginPath();	  
    lienzo.arc(200,595,10, 0, 2*Math.PI);
    lienzo.lineWidth = 2;
    lienzo.fill();
    lienzo.stroke();

    //LegL
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(222,517);
    lienzo.lineTo(251,517);
    lienzo.lineTo(251,570);
    lienzo.quadraticCurveTo(240,575,222,570);
    lienzo.lineTo(222,517);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(222,570);
    lienzo.quadraticCurveTo(215,570,220,579);
    lienzo.quadraticCurveTo(235,586,258,579);
    lienzo.quadraticCurveTo(258,571,255,569);
    lienzo.quadraticCurveTo(220,573,222,570);
    lienzo.fill();
    lienzo.stroke();

    //ShoeL
    lienzo.fillStyle=color4;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(220,579);
    lienzo.quadraticCurveTo(195,590,188,615);
    lienzo.quadraticCurveTo(220,625,269,613);
    lienzo.quadraticCurveTo(269,595,258,579);
    lienzo.quadraticCurveTo(235,586,220,579);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle="rgb(255,255,255)";
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(188,615);
    lienzo.quadraticCurveTo(184,620,188,627);
    lienzo.quadraticCurveTo(235,635,272,623);
    lienzo.quadraticCurveTo(272,615,269,613);
    lienzo.quadraticCurveTo(220,625,188,615);
    lienzo.fill();
    lienzo.stroke();

    //short
    lienzo.fillStyle=color3;
    lienzo.beginPath();
    lienzo.moveTo(151,464);
    lienzo.quadraticCurveTo(178,477,250,470);
    lienzo.quadraticCurveTo(278,479,289,474);
    lienzo.quadraticCurveTo(288,488,278,495);
    lienzo.lineTo(279,519);
    lienzo.quadraticCurveTo(255,528,204,525);
    lienzo.lineTo(204,520);
    lienzo.quadraticCurveTo(173,520,154,512);
    lienzo.lineTo(156,483);
    lienzo.quadraticCurveTo(150,475,151,464);
    lienzo.fill();
    lienzo.lineWidth = 2;
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(151,464);
    lienzo.quadraticCurveTo(152,500,205,509);
    lienzo.lineTo(204,520);
    lienzo.stroke();
    
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(212,478);
    lienzo.quadraticCurveTo(210,496,216,504);
    lienzo.stroke();

    //ArmL
    lienzo.fillStyle=color;
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(220,476);
    lienzo.lineTo(228,387);
    lienzo.quadraticCurveTo(245,383,264,389);
    lienzo.lineTo(257,487);
    lienzo.lineTo(220,476);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle=color2;
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(227,393);
    lienzo.quadraticCurveTo(218,393,218,387);
    lienzo.bezierCurveTo(223, 318, 265, 318, 276, 390);
    lienzo.quadraticCurveTo(274,397,265,395);
    lienzo.lineTo(264,389);
    lienzo.quadraticCurveTo(245,382,228,387);
    lienzo.lineTo(227,393);
    lienzo.fill();
    lienzo.stroke();
    
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(223,387);
    lienzo.quadraticCurveTo(250,382,271,390);
    lienzo.stroke();

    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo(220,476);
    lienzo.quadraticCurveTo(265,491,262,487);
    lienzo.stroke();
});

//Reset
function mensaje(){
    var opcion = confirm("¿Estas seguro que quieres restablecer la imagen?");
    var men;
    if(opcion){
        lienzo.clearRect(0, 0, c.width, c.height);
        $('#col').val('#fed51d');
        $('#colS').val('#f24e28');
        $('#colSh').val('#009ddc');
        $('#colT').val('#009ddc');
        lienzo.fillStyle="rgb(254,213,029)";
        lienzo.strokeStyle="rgb(0,0,0)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(121,189);
        lienzo.lineTo(122,100);
        lienzo.lineTo(135,115);
        lienzo.lineTo(145,98);
        lienzo.lineTo(155,114);
        lienzo.lineTo(161,97);
        lienzo.lineTo(168,112);
        lienzo.lineTo(179,98);
        lienzo.lineTo(186,112);
        lienzo.lineTo(199,99);
        lienzo.lineTo(204,117);
        lienzo.lineTo(218,103);
        lienzo.lineTo(222,120);
        lienzo.lineTo(234,105);
        lienzo.lineTo(237,125);
        lienzo.lineTo(249,111);
        lienzo.lineTo(253,129);
        lienzo.lineTo(266,117);
        lienzo.lineTo(240,280);
        lienzo.lineTo(243,323);
        lienzo.quadraticCurveTo(220,340,186,339);
        lienzo.lineTo(185,325);
        lienzo.quadraticCurveTo(184,322,181,322);
        lienzo.quadraticCurveTo(166,319,165,310);
        lienzo.quadraticCurveTo(115,313,108,299);
        lienzo.quadraticCurveTo(106,293,109,285);
        lienzo.quadraticCurveTo(117,250,115,210);
        lienzo.quadraticCurveTo(108,194,121,189);
        lienzo.lineCap = 'round';
        lienzo.fill();
        lienzo.stroke();
            
        //mouth
        lienzo.beginPath();
        lienzo.moveTo(165,310);	  
        lienzo.quadraticCurveTo(185,310,211,304);
        lienzo.lineWidth = 2;
        lienzo.stroke();

        lienzo.beginPath();
        lienzo.moveTo(206,302);	  
        lienzo.quadraticCurveTo(212,302,215,305);
        lienzo.lineWidth = 2;
        lienzo.stroke();

        //EyeL
        lienzo.fillStyle="rgb(255,255,255)";
        lienzo.beginPath();	  
        lienzo.arc(137,229,33, 0, 2*Math.PI);
        lienzo.lineWidth = 2;
        lienzo.fill();
        lienzo.stroke();

        lienzo.strokeStyle="rgb(0,0,0)";
        lienzo.beginPath();	  
        lienzo.arc(131,229,2, 0, 2*Math.PI);
        lienzo.lineWidth = 4;
        lienzo.stroke();

        //Nose
        lienzo.fillStyle="rgb(254,213,029)";
        lienzo.beginPath();
        lienzo.moveTo(140,270);
        lienzo.quadraticCurveTo(112,270,113,258);
        lienzo.quadraticCurveTo(112,242,134,245);
        lienzo.lineTo(170,247);
        lienzo.lineWidth = 2;
        lienzo.fill();
        lienzo.stroke();

        //EyaR
        lienzo.fillStyle="rgb(255,255,255)";
        lienzo.beginPath();	  
        lienzo.arc(183,230,33, 0, 2*Math.PI);
        lienzo.lineWidth = 2;
        lienzo.fill();
        lienzo.stroke();

        lienzo.strokeStyle="rgb(0,0,0)";
        lienzo.beginPath();	  
        lienzo.arc(188,230,2, 0, 2*Math.PI);
        lienzo.lineWidth = 4;
        lienzo.stroke();

        //Ear
        lienzo.fillStyle="rgb(254,213,029)";
        lienzo.beginPath();
        lienzo.moveTo(235,263);
        lienzo.bezierCurveTo(263, 245, 263, 299, 235, 285);
        lienzo.lineWidth = 2;
        lienzo.fill();
        lienzo.stroke();

        lienzo.beginPath();
        lienzo.moveTo(238,272);
        lienzo.quadraticCurveTo(243,264,249,270);
        lienzo.lineWidth = 2;
        lienzo.stroke();
        lienzo.beginPath();
        lienzo.moveTo(238,273);
        lienzo.quadraticCurveTo(241,268,249,270);
        lienzo.lineWidth = 2;
        lienzo.stroke();
        lienzo.beginPath();
        lienzo.moveTo(238,272);
        lienzo.quadraticCurveTo(246,270,245,277);
        lienzo.lineWidth = 2;
        lienzo.stroke();

        //ArmR
        lienzo.fillStyle="rgb(254,213,029)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(160,412);
        lienzo.lineTo(167,384);
        lienzo.lineTo(172,387);
        lienzo.lineTo(172,412);
        lienzo.lineTo(160,412);
        lienzo.fill();
        lienzo.stroke();

        lienzo.fillStyle="rgb(242,78,40)";
        lienzo.lineWidth = 2;
        lienzo.beginPath();
        lienzo.moveTo(180,350);
        lienzo.lineTo(172,387);
        lienzo.lineTo(162,380);
        lienzo.quadraticCurveTo(169,355,180,350);
        lienzo.fill();
        lienzo.stroke();
        
        //shirt
        lienzo.fillStyle="rgb(242,78,40)";
        lienzo.beginPath();
        lienzo.moveTo(184,336);
        lienzo.lineTo(166,406);
        lienzo.quadraticCurveTo(147,425,146,462);
        lienzo.quadraticCurveTo(173,475,250,470);
        lienzo.quadraticCurveTo(278,479,295,472);
        lienzo.quadraticCurveTo(295,435,272,407);
        lienzo.lineTo(270,395);
        lienzo.quadraticCurveTo(274,395,276,390);
        lienzo.quadraticCurveTo(275,365,252,338);
        lienzo.quadraticCurveTo(254,328,243,322);
        lienzo.quadraticCurveTo(220,340,184,339);
        lienzo.lineWidth = 2;
        lienzo.fill();
        lienzo.stroke();

        //LegR
        lienzo.fillStyle="rgb(254,213,029)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(175,517);
        lienzo.lineTo(207,517);
        lienzo.lineTo(207,567);
        lienzo.quadraticCurveTo(191,573,175,567);
        lienzo.lineTo(175,517);
        lienzo.fill();
        lienzo.stroke();

        lienzo.fillStyle="rgb(255,255,255)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(175,567);
        lienzo.quadraticCurveTo(164,565,165,575);
        lienzo.quadraticCurveTo(191,587,217,575);
        lienzo.quadraticCurveTo(215,565,207,567);
        lienzo.quadraticCurveTo(191,573,175,567);
        lienzo.fill();
        lienzo.stroke();

        //ShoeR
        lienzo.fillStyle="rgb(0,157,220)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(165,575);
        lienzo.quadraticCurveTo(145,588,138,605);
        lienzo.quadraticCurveTo(185,615,230,603);
        lienzo.quadraticCurveTo(228,587,216,575);
        lienzo.quadraticCurveTo(191,587,165,575);
        lienzo.fill();
        lienzo.stroke();

        lienzo.fillStyle="rgb(255,255,255)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(138,605);
        lienzo.quadraticCurveTo(135,612,138,614);
        lienzo.quadraticCurveTo(185,625,235,612);
        lienzo.quadraticCurveTo(235,609,231,603);
        lienzo.quadraticCurveTo(185,615,138,605);
        lienzo.fill();
        lienzo.stroke();

        lienzo.fillStyle="rgb(255,255,255)";
        lienzo.beginPath();	  
        lienzo.arc(200,595,10, 0, 2*Math.PI);
        lienzo.lineWidth = 2;
        lienzo.fill();
        lienzo.stroke();

        //LegL
        lienzo.fillStyle="rgb(254,213,029)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(222,517);
        lienzo.lineTo(251,517);
        lienzo.lineTo(251,570);
        lienzo.quadraticCurveTo(240,575,222,570);
        lienzo.lineTo(222,517);
        lienzo.fill();
        lienzo.stroke();

        lienzo.fillStyle="rgb(255,255,255)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(222,570);
        lienzo.quadraticCurveTo(215,570,220,579);
        lienzo.quadraticCurveTo(235,586,258,579);
        lienzo.quadraticCurveTo(258,571,255,569);
        lienzo.quadraticCurveTo(220,573,222,570);
        lienzo.fill();
        lienzo.stroke();

        //ShoeL
        lienzo.fillStyle="rgb(0,157,220)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(220,579);
        lienzo.quadraticCurveTo(195,590,188,615);
        lienzo.quadraticCurveTo(220,625,269,613);
        lienzo.quadraticCurveTo(269,595,258,579);
        lienzo.quadraticCurveTo(235,586,220,579);
        lienzo.fill();
        lienzo.stroke();

        lienzo.fillStyle="rgb(255,255,255)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(188,615);
        lienzo.quadraticCurveTo(184,620,188,627);
        lienzo.quadraticCurveTo(235,635,272,623);
        lienzo.quadraticCurveTo(272,615,269,613);
        lienzo.quadraticCurveTo(220,625,188,615);
        lienzo.fill();
        lienzo.stroke();

        //short
        lienzo.fillStyle="rgb(0,157,220)";
        lienzo.beginPath();
        lienzo.moveTo(151,464);
        lienzo.quadraticCurveTo(178,477,250,470);
        lienzo.quadraticCurveTo(278,479,289,474);
        lienzo.quadraticCurveTo(288,488,278,495);
        lienzo.lineTo(279,519);
        lienzo.quadraticCurveTo(255,528,204,525);
        lienzo.lineTo(204,520);
        lienzo.quadraticCurveTo(173,520,154,512);
        lienzo.lineTo(156,483);
        lienzo.quadraticCurveTo(150,475,151,464);
        lienzo.fill();
        lienzo.lineWidth = 2;
        lienzo.stroke();

        lienzo.lineWidth = 2;
        lienzo.beginPath();
        lienzo.moveTo(151,464);
        lienzo.quadraticCurveTo(152,500,205,509);
        lienzo.lineTo(204,520);
        lienzo.stroke();
        
        lienzo.lineWidth = 2;
        lienzo.beginPath();
        lienzo.moveTo(212,478);
        lienzo.quadraticCurveTo(210,496,216,504);
        lienzo.stroke();

        //ArmL
        lienzo.fillStyle="rgb(254,213,029)";
        lienzo.lineWidth=2;
        lienzo.beginPath();
        lienzo.moveTo(220,476);
        lienzo.lineTo(228,387);
        lienzo.quadraticCurveTo(245,383,264,389);
        lienzo.lineTo(257,487);
        lienzo.lineTo(220,476);
        lienzo.fill();
        lienzo.stroke();

        lienzo.fillStyle="rgb(242,78,40)";
        lienzo.lineWidth = 2;
        lienzo.beginPath();
        lienzo.moveTo(227,393);
        lienzo.quadraticCurveTo(218,393,218,387);
        lienzo.bezierCurveTo(223, 318, 265, 318, 276, 390);
        lienzo.quadraticCurveTo(274,397,265,395);
        lienzo.lineTo(264,389);
        lienzo.quadraticCurveTo(245,382,228,387);
        lienzo.lineTo(227,393);
        lienzo.fill();
        lienzo.stroke();

        lienzo.lineWidth = 2;
        lienzo.beginPath();
        lienzo.moveTo(223,387);
        lienzo.quadraticCurveTo(250,382,271,390);
        lienzo.stroke();

        lienzo.lineWidth = 2;
        lienzo.beginPath();
        lienzo.moveTo(220,476);
        lienzo.quadraticCurveTo(265,491,262,487);
        lienzo.stroke();
    }else{
       return false;
    }      
}






  