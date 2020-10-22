gdjs.TransicaoCode = {};
gdjs.TransicaoCode.GDterrenoObjects1= [];
gdjs.TransicaoCode.GDterrenoObjects2= [];
gdjs.TransicaoCode.GDtankObjects1= [];
gdjs.TransicaoCode.GDtankObjects2= [];
gdjs.TransicaoCode.GDcanhao3Objects1= [];
gdjs.TransicaoCode.GDcanhao3Objects2= [];
gdjs.TransicaoCode.GDmissil2Objects1= [];
gdjs.TransicaoCode.GDmissil2Objects2= [];
gdjs.TransicaoCode.GDbala1Objects1= [];
gdjs.TransicaoCode.GDbala1Objects2= [];
gdjs.TransicaoCode.GDbalinhaObjects1= [];
gdjs.TransicaoCode.GDbalinhaObjects2= [];
gdjs.TransicaoCode.GDchamaObjects1= [];
gdjs.TransicaoCode.GDchamaObjects2= [];
gdjs.TransicaoCode.GDexplosaoObjects1= [];
gdjs.TransicaoCode.GDexplosaoObjects2= [];
gdjs.TransicaoCode.GDsangueObjects1= [];
gdjs.TransicaoCode.GDsangueObjects2= [];
gdjs.TransicaoCode.GDinim1Objects1= [];
gdjs.TransicaoCode.GDinim1Objects2= [];
gdjs.TransicaoCode.GDinim2Objects1= [];
gdjs.TransicaoCode.GDinim2Objects2= [];
gdjs.TransicaoCode.GDdangerObjects1= [];
gdjs.TransicaoCode.GDdangerObjects2= [];
gdjs.TransicaoCode.GDlevelObjects1= [];
gdjs.TransicaoCode.GDlevelObjects2= [];
gdjs.TransicaoCode.GDlevel_95nObjects1= [];
gdjs.TransicaoCode.GDlevel_95nObjects2= [];
gdjs.TransicaoCode.GDscoreObjects1= [];
gdjs.TransicaoCode.GDscoreObjects2= [];
gdjs.TransicaoCode.GDn_95inimigosObjects1= [];
gdjs.TransicaoCode.GDn_95inimigosObjects2= [];
gdjs.TransicaoCode.GDtempoObjects1= [];
gdjs.TransicaoCode.GDtempoObjects2= [];
gdjs.TransicaoCode.GDinim11Objects1= [];
gdjs.TransicaoCode.GDinim11Objects2= [];
gdjs.TransicaoCode.GDmedalObjects1= [];
gdjs.TransicaoCode.GDmedalObjects2= [];
gdjs.TransicaoCode.GDampulhetaObjects1= [];
gdjs.TransicaoCode.GDampulhetaObjects2= [];
gdjs.TransicaoCode.GDteclasObjects1= [];
gdjs.TransicaoCode.GDteclasObjects2= [];
gdjs.TransicaoCode.GDpointerObjects1= [];
gdjs.TransicaoCode.GDpointerObjects2= [];
gdjs.TransicaoCode.GDleftObjects1= [];
gdjs.TransicaoCode.GDleftObjects2= [];
gdjs.TransicaoCode.GDrightObjects1= [];
gdjs.TransicaoCode.GDrightObjects2= [];
gdjs.TransicaoCode.GDinfo1Objects1= [];
gdjs.TransicaoCode.GDinfo1Objects2= [];
gdjs.TransicaoCode.GDinfo2Objects1= [];
gdjs.TransicaoCode.GDinfo2Objects2= [];
gdjs.TransicaoCode.GDinfo3Objects1= [];
gdjs.TransicaoCode.GDinfo3Objects2= [];
gdjs.TransicaoCode.GDinfo4Objects1= [];
gdjs.TransicaoCode.GDinfo4Objects2= [];
gdjs.TransicaoCode.GDnivObjects1= [];
gdjs.TransicaoCode.GDnivObjects2= [];

gdjs.TransicaoCode.conditionTrue_0 = {val:false};
gdjs.TransicaoCode.condition0IsTrue_0 = {val:false};
gdjs.TransicaoCode.condition1IsTrue_0 = {val:false};


gdjs.TransicaoCode.eventsList0x5b6e18 = function(runtimeScene) {

{



}


{


{
gdjs.TransicaoCode.GDnivObjects1.createFrom(runtimeScene.getObjects("niv"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.TransicaoCode.GDnivObjects1.length !== 0 ? gdjs.TransicaoCode.GDnivObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.TransicaoCode.condition0IsTrue_0.val = false;
{
gdjs.TransicaoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "c2_delay");
}if (gdjs.TransicaoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena2", false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "c2_delay");
}}

}


}; //End of gdjs.TransicaoCode.eventsList0x5b6e18


gdjs.TransicaoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TransicaoCode.GDterrenoObjects1.length = 0;
gdjs.TransicaoCode.GDterrenoObjects2.length = 0;
gdjs.TransicaoCode.GDtankObjects1.length = 0;
gdjs.TransicaoCode.GDtankObjects2.length = 0;
gdjs.TransicaoCode.GDcanhao3Objects1.length = 0;
gdjs.TransicaoCode.GDcanhao3Objects2.length = 0;
gdjs.TransicaoCode.GDmissil2Objects1.length = 0;
gdjs.TransicaoCode.GDmissil2Objects2.length = 0;
gdjs.TransicaoCode.GDbala1Objects1.length = 0;
gdjs.TransicaoCode.GDbala1Objects2.length = 0;
gdjs.TransicaoCode.GDbalinhaObjects1.length = 0;
gdjs.TransicaoCode.GDbalinhaObjects2.length = 0;
gdjs.TransicaoCode.GDchamaObjects1.length = 0;
gdjs.TransicaoCode.GDchamaObjects2.length = 0;
gdjs.TransicaoCode.GDexplosaoObjects1.length = 0;
gdjs.TransicaoCode.GDexplosaoObjects2.length = 0;
gdjs.TransicaoCode.GDsangueObjects1.length = 0;
gdjs.TransicaoCode.GDsangueObjects2.length = 0;
gdjs.TransicaoCode.GDinim1Objects1.length = 0;
gdjs.TransicaoCode.GDinim1Objects2.length = 0;
gdjs.TransicaoCode.GDinim2Objects1.length = 0;
gdjs.TransicaoCode.GDinim2Objects2.length = 0;
gdjs.TransicaoCode.GDdangerObjects1.length = 0;
gdjs.TransicaoCode.GDdangerObjects2.length = 0;
gdjs.TransicaoCode.GDlevelObjects1.length = 0;
gdjs.TransicaoCode.GDlevelObjects2.length = 0;
gdjs.TransicaoCode.GDlevel_95nObjects1.length = 0;
gdjs.TransicaoCode.GDlevel_95nObjects2.length = 0;
gdjs.TransicaoCode.GDscoreObjects1.length = 0;
gdjs.TransicaoCode.GDscoreObjects2.length = 0;
gdjs.TransicaoCode.GDn_95inimigosObjects1.length = 0;
gdjs.TransicaoCode.GDn_95inimigosObjects2.length = 0;
gdjs.TransicaoCode.GDtempoObjects1.length = 0;
gdjs.TransicaoCode.GDtempoObjects2.length = 0;
gdjs.TransicaoCode.GDinim11Objects1.length = 0;
gdjs.TransicaoCode.GDinim11Objects2.length = 0;
gdjs.TransicaoCode.GDmedalObjects1.length = 0;
gdjs.TransicaoCode.GDmedalObjects2.length = 0;
gdjs.TransicaoCode.GDampulhetaObjects1.length = 0;
gdjs.TransicaoCode.GDampulhetaObjects2.length = 0;
gdjs.TransicaoCode.GDteclasObjects1.length = 0;
gdjs.TransicaoCode.GDteclasObjects2.length = 0;
gdjs.TransicaoCode.GDpointerObjects1.length = 0;
gdjs.TransicaoCode.GDpointerObjects2.length = 0;
gdjs.TransicaoCode.GDleftObjects1.length = 0;
gdjs.TransicaoCode.GDleftObjects2.length = 0;
gdjs.TransicaoCode.GDrightObjects1.length = 0;
gdjs.TransicaoCode.GDrightObjects2.length = 0;
gdjs.TransicaoCode.GDinfo1Objects1.length = 0;
gdjs.TransicaoCode.GDinfo1Objects2.length = 0;
gdjs.TransicaoCode.GDinfo2Objects1.length = 0;
gdjs.TransicaoCode.GDinfo2Objects2.length = 0;
gdjs.TransicaoCode.GDinfo3Objects1.length = 0;
gdjs.TransicaoCode.GDinfo3Objects2.length = 0;
gdjs.TransicaoCode.GDinfo4Objects1.length = 0;
gdjs.TransicaoCode.GDinfo4Objects2.length = 0;
gdjs.TransicaoCode.GDnivObjects1.length = 0;
gdjs.TransicaoCode.GDnivObjects2.length = 0;

gdjs.TransicaoCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['TransicaoCode'] = gdjs.TransicaoCode;
