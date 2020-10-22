gdjs.InicioCode = {};
gdjs.InicioCode.GDterrenoObjects1= [];
gdjs.InicioCode.GDterrenoObjects2= [];
gdjs.InicioCode.GDtankObjects1= [];
gdjs.InicioCode.GDtankObjects2= [];
gdjs.InicioCode.GDcanhao3Objects1= [];
gdjs.InicioCode.GDcanhao3Objects2= [];
gdjs.InicioCode.GDmissil2Objects1= [];
gdjs.InicioCode.GDmissil2Objects2= [];
gdjs.InicioCode.GDbala1Objects1= [];
gdjs.InicioCode.GDbala1Objects2= [];
gdjs.InicioCode.GDbalinhaObjects1= [];
gdjs.InicioCode.GDbalinhaObjects2= [];
gdjs.InicioCode.GDchamaObjects1= [];
gdjs.InicioCode.GDchamaObjects2= [];
gdjs.InicioCode.GDexplosaoObjects1= [];
gdjs.InicioCode.GDexplosaoObjects2= [];
gdjs.InicioCode.GDsangueObjects1= [];
gdjs.InicioCode.GDsangueObjects2= [];
gdjs.InicioCode.GDinim1Objects1= [];
gdjs.InicioCode.GDinim1Objects2= [];
gdjs.InicioCode.GDinim2Objects1= [];
gdjs.InicioCode.GDinim2Objects2= [];
gdjs.InicioCode.GDdangerObjects1= [];
gdjs.InicioCode.GDdangerObjects2= [];
gdjs.InicioCode.GDlevelObjects1= [];
gdjs.InicioCode.GDlevelObjects2= [];
gdjs.InicioCode.GDlevel_95nObjects1= [];
gdjs.InicioCode.GDlevel_95nObjects2= [];
gdjs.InicioCode.GDscoreObjects1= [];
gdjs.InicioCode.GDscoreObjects2= [];
gdjs.InicioCode.GDn_95inimigosObjects1= [];
gdjs.InicioCode.GDn_95inimigosObjects2= [];
gdjs.InicioCode.GDtempoObjects1= [];
gdjs.InicioCode.GDtempoObjects2= [];
gdjs.InicioCode.GDinim11Objects1= [];
gdjs.InicioCode.GDinim11Objects2= [];
gdjs.InicioCode.GDmedalObjects1= [];
gdjs.InicioCode.GDmedalObjects2= [];
gdjs.InicioCode.GDampulhetaObjects1= [];
gdjs.InicioCode.GDampulhetaObjects2= [];
gdjs.InicioCode.GDteclasObjects1= [];
gdjs.InicioCode.GDteclasObjects2= [];
gdjs.InicioCode.GDpointerObjects1= [];
gdjs.InicioCode.GDpointerObjects2= [];
gdjs.InicioCode.GDleftObjects1= [];
gdjs.InicioCode.GDleftObjects2= [];
gdjs.InicioCode.GDrightObjects1= [];
gdjs.InicioCode.GDrightObjects2= [];
gdjs.InicioCode.GDinfo1Objects1= [];
gdjs.InicioCode.GDinfo1Objects2= [];
gdjs.InicioCode.GDinfo2Objects1= [];
gdjs.InicioCode.GDinfo2Objects2= [];
gdjs.InicioCode.GDinfo3Objects1= [];
gdjs.InicioCode.GDinfo3Objects2= [];
gdjs.InicioCode.GDinfo4Objects1= [];
gdjs.InicioCode.GDinfo4Objects2= [];
gdjs.InicioCode.GDbig_95tankObjects1= [];
gdjs.InicioCode.GDbig_95tankObjects2= [];

gdjs.InicioCode.conditionTrue_0 = {val:false};
gdjs.InicioCode.condition0IsTrue_0 = {val:false};
gdjs.InicioCode.condition1IsTrue_0 = {val:false};


gdjs.InicioCode.eventsList0x5b6e18 = function(runtimeScene) {

{



}


{


{
gdjs.InicioCode.GDbalinhaObjects1.createFrom(runtimeScene.getObjects("balinha"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.InicioCode.GDbalinhaObjects1.length !== 0 ? gdjs.InicioCode.GDbalinhaObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.InicioCode.GDbalinhaObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbalinhaObjects1[i].hide();
}
}}

}


{


gdjs.InicioCode.condition0IsTrue_0.val = false;
{
gdjs.InicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.InicioCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Controlos", false);
}}

}


}; //End of gdjs.InicioCode.eventsList0x5b6e18


gdjs.InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InicioCode.GDterrenoObjects1.length = 0;
gdjs.InicioCode.GDterrenoObjects2.length = 0;
gdjs.InicioCode.GDtankObjects1.length = 0;
gdjs.InicioCode.GDtankObjects2.length = 0;
gdjs.InicioCode.GDcanhao3Objects1.length = 0;
gdjs.InicioCode.GDcanhao3Objects2.length = 0;
gdjs.InicioCode.GDmissil2Objects1.length = 0;
gdjs.InicioCode.GDmissil2Objects2.length = 0;
gdjs.InicioCode.GDbala1Objects1.length = 0;
gdjs.InicioCode.GDbala1Objects2.length = 0;
gdjs.InicioCode.GDbalinhaObjects1.length = 0;
gdjs.InicioCode.GDbalinhaObjects2.length = 0;
gdjs.InicioCode.GDchamaObjects1.length = 0;
gdjs.InicioCode.GDchamaObjects2.length = 0;
gdjs.InicioCode.GDexplosaoObjects1.length = 0;
gdjs.InicioCode.GDexplosaoObjects2.length = 0;
gdjs.InicioCode.GDsangueObjects1.length = 0;
gdjs.InicioCode.GDsangueObjects2.length = 0;
gdjs.InicioCode.GDinim1Objects1.length = 0;
gdjs.InicioCode.GDinim1Objects2.length = 0;
gdjs.InicioCode.GDinim2Objects1.length = 0;
gdjs.InicioCode.GDinim2Objects2.length = 0;
gdjs.InicioCode.GDdangerObjects1.length = 0;
gdjs.InicioCode.GDdangerObjects2.length = 0;
gdjs.InicioCode.GDlevelObjects1.length = 0;
gdjs.InicioCode.GDlevelObjects2.length = 0;
gdjs.InicioCode.GDlevel_95nObjects1.length = 0;
gdjs.InicioCode.GDlevel_95nObjects2.length = 0;
gdjs.InicioCode.GDscoreObjects1.length = 0;
gdjs.InicioCode.GDscoreObjects2.length = 0;
gdjs.InicioCode.GDn_95inimigosObjects1.length = 0;
gdjs.InicioCode.GDn_95inimigosObjects2.length = 0;
gdjs.InicioCode.GDtempoObjects1.length = 0;
gdjs.InicioCode.GDtempoObjects2.length = 0;
gdjs.InicioCode.GDinim11Objects1.length = 0;
gdjs.InicioCode.GDinim11Objects2.length = 0;
gdjs.InicioCode.GDmedalObjects1.length = 0;
gdjs.InicioCode.GDmedalObjects2.length = 0;
gdjs.InicioCode.GDampulhetaObjects1.length = 0;
gdjs.InicioCode.GDampulhetaObjects2.length = 0;
gdjs.InicioCode.GDteclasObjects1.length = 0;
gdjs.InicioCode.GDteclasObjects2.length = 0;
gdjs.InicioCode.GDpointerObjects1.length = 0;
gdjs.InicioCode.GDpointerObjects2.length = 0;
gdjs.InicioCode.GDleftObjects1.length = 0;
gdjs.InicioCode.GDleftObjects2.length = 0;
gdjs.InicioCode.GDrightObjects1.length = 0;
gdjs.InicioCode.GDrightObjects2.length = 0;
gdjs.InicioCode.GDinfo1Objects1.length = 0;
gdjs.InicioCode.GDinfo1Objects2.length = 0;
gdjs.InicioCode.GDinfo2Objects1.length = 0;
gdjs.InicioCode.GDinfo2Objects2.length = 0;
gdjs.InicioCode.GDinfo3Objects1.length = 0;
gdjs.InicioCode.GDinfo3Objects2.length = 0;
gdjs.InicioCode.GDinfo4Objects1.length = 0;
gdjs.InicioCode.GDinfo4Objects2.length = 0;
gdjs.InicioCode.GDbig_95tankObjects1.length = 0;
gdjs.InicioCode.GDbig_95tankObjects2.length = 0;

gdjs.InicioCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['InicioCode'] = gdjs.InicioCode;
