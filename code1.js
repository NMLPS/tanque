gdjs.ControlosCode = {};
gdjs.ControlosCode.GDterrenoObjects1= [];
gdjs.ControlosCode.GDterrenoObjects2= [];
gdjs.ControlosCode.GDtankObjects1= [];
gdjs.ControlosCode.GDtankObjects2= [];
gdjs.ControlosCode.GDcanhao3Objects1= [];
gdjs.ControlosCode.GDcanhao3Objects2= [];
gdjs.ControlosCode.GDmissil2Objects1= [];
gdjs.ControlosCode.GDmissil2Objects2= [];
gdjs.ControlosCode.GDbala1Objects1= [];
gdjs.ControlosCode.GDbala1Objects2= [];
gdjs.ControlosCode.GDbalinhaObjects1= [];
gdjs.ControlosCode.GDbalinhaObjects2= [];
gdjs.ControlosCode.GDchamaObjects1= [];
gdjs.ControlosCode.GDchamaObjects2= [];
gdjs.ControlosCode.GDexplosaoObjects1= [];
gdjs.ControlosCode.GDexplosaoObjects2= [];
gdjs.ControlosCode.GDsangueObjects1= [];
gdjs.ControlosCode.GDsangueObjects2= [];
gdjs.ControlosCode.GDinim1Objects1= [];
gdjs.ControlosCode.GDinim1Objects2= [];
gdjs.ControlosCode.GDinim2Objects1= [];
gdjs.ControlosCode.GDinim2Objects2= [];
gdjs.ControlosCode.GDdangerObjects1= [];
gdjs.ControlosCode.GDdangerObjects2= [];
gdjs.ControlosCode.GDlevelObjects1= [];
gdjs.ControlosCode.GDlevelObjects2= [];
gdjs.ControlosCode.GDlevel_95nObjects1= [];
gdjs.ControlosCode.GDlevel_95nObjects2= [];
gdjs.ControlosCode.GDscoreObjects1= [];
gdjs.ControlosCode.GDscoreObjects2= [];
gdjs.ControlosCode.GDn_95inimigosObjects1= [];
gdjs.ControlosCode.GDn_95inimigosObjects2= [];
gdjs.ControlosCode.GDtempoObjects1= [];
gdjs.ControlosCode.GDtempoObjects2= [];
gdjs.ControlosCode.GDinim11Objects1= [];
gdjs.ControlosCode.GDinim11Objects2= [];
gdjs.ControlosCode.GDmedalObjects1= [];
gdjs.ControlosCode.GDmedalObjects2= [];
gdjs.ControlosCode.GDampulhetaObjects1= [];
gdjs.ControlosCode.GDampulhetaObjects2= [];
gdjs.ControlosCode.GDteclasObjects1= [];
gdjs.ControlosCode.GDteclasObjects2= [];
gdjs.ControlosCode.GDpointerObjects1= [];
gdjs.ControlosCode.GDpointerObjects2= [];
gdjs.ControlosCode.GDleftObjects1= [];
gdjs.ControlosCode.GDleftObjects2= [];
gdjs.ControlosCode.GDrightObjects1= [];
gdjs.ControlosCode.GDrightObjects2= [];
gdjs.ControlosCode.GDinfo1Objects1= [];
gdjs.ControlosCode.GDinfo1Objects2= [];
gdjs.ControlosCode.GDinfo2Objects1= [];
gdjs.ControlosCode.GDinfo2Objects2= [];
gdjs.ControlosCode.GDinfo3Objects1= [];
gdjs.ControlosCode.GDinfo3Objects2= [];
gdjs.ControlosCode.GDinfo4Objects1= [];
gdjs.ControlosCode.GDinfo4Objects2= [];
gdjs.ControlosCode.GDstartObjects1= [];
gdjs.ControlosCode.GDstartObjects2= [];
gdjs.ControlosCode.GDinstr1Objects1= [];
gdjs.ControlosCode.GDinstr1Objects2= [];

gdjs.ControlosCode.conditionTrue_0 = {val:false};
gdjs.ControlosCode.condition0IsTrue_0 = {val:false};
gdjs.ControlosCode.condition1IsTrue_0 = {val:false};


gdjs.ControlosCode.eventsList0x5b6e18 = function(runtimeScene) {

{



}


{


{
gdjs.ControlosCode.GDbalinhaObjects1.createFrom(runtimeScene.getObjects("balinha"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.ControlosCode.GDbalinhaObjects1.length !== 0 ? gdjs.ControlosCode.GDbalinhaObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.ControlosCode.GDbalinhaObjects1.length ;i < len;++i) {
    gdjs.ControlosCode.GDbalinhaObjects1[i].hide();
}
}}

}


{


gdjs.ControlosCode.condition0IsTrue_0.val = false;
{
gdjs.ControlosCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.ControlosCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena1", false);
}}

}


}; //End of gdjs.ControlosCode.eventsList0x5b6e18


gdjs.ControlosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ControlosCode.GDterrenoObjects1.length = 0;
gdjs.ControlosCode.GDterrenoObjects2.length = 0;
gdjs.ControlosCode.GDtankObjects1.length = 0;
gdjs.ControlosCode.GDtankObjects2.length = 0;
gdjs.ControlosCode.GDcanhao3Objects1.length = 0;
gdjs.ControlosCode.GDcanhao3Objects2.length = 0;
gdjs.ControlosCode.GDmissil2Objects1.length = 0;
gdjs.ControlosCode.GDmissil2Objects2.length = 0;
gdjs.ControlosCode.GDbala1Objects1.length = 0;
gdjs.ControlosCode.GDbala1Objects2.length = 0;
gdjs.ControlosCode.GDbalinhaObjects1.length = 0;
gdjs.ControlosCode.GDbalinhaObjects2.length = 0;
gdjs.ControlosCode.GDchamaObjects1.length = 0;
gdjs.ControlosCode.GDchamaObjects2.length = 0;
gdjs.ControlosCode.GDexplosaoObjects1.length = 0;
gdjs.ControlosCode.GDexplosaoObjects2.length = 0;
gdjs.ControlosCode.GDsangueObjects1.length = 0;
gdjs.ControlosCode.GDsangueObjects2.length = 0;
gdjs.ControlosCode.GDinim1Objects1.length = 0;
gdjs.ControlosCode.GDinim1Objects2.length = 0;
gdjs.ControlosCode.GDinim2Objects1.length = 0;
gdjs.ControlosCode.GDinim2Objects2.length = 0;
gdjs.ControlosCode.GDdangerObjects1.length = 0;
gdjs.ControlosCode.GDdangerObjects2.length = 0;
gdjs.ControlosCode.GDlevelObjects1.length = 0;
gdjs.ControlosCode.GDlevelObjects2.length = 0;
gdjs.ControlosCode.GDlevel_95nObjects1.length = 0;
gdjs.ControlosCode.GDlevel_95nObjects2.length = 0;
gdjs.ControlosCode.GDscoreObjects1.length = 0;
gdjs.ControlosCode.GDscoreObjects2.length = 0;
gdjs.ControlosCode.GDn_95inimigosObjects1.length = 0;
gdjs.ControlosCode.GDn_95inimigosObjects2.length = 0;
gdjs.ControlosCode.GDtempoObjects1.length = 0;
gdjs.ControlosCode.GDtempoObjects2.length = 0;
gdjs.ControlosCode.GDinim11Objects1.length = 0;
gdjs.ControlosCode.GDinim11Objects2.length = 0;
gdjs.ControlosCode.GDmedalObjects1.length = 0;
gdjs.ControlosCode.GDmedalObjects2.length = 0;
gdjs.ControlosCode.GDampulhetaObjects1.length = 0;
gdjs.ControlosCode.GDampulhetaObjects2.length = 0;
gdjs.ControlosCode.GDteclasObjects1.length = 0;
gdjs.ControlosCode.GDteclasObjects2.length = 0;
gdjs.ControlosCode.GDpointerObjects1.length = 0;
gdjs.ControlosCode.GDpointerObjects2.length = 0;
gdjs.ControlosCode.GDleftObjects1.length = 0;
gdjs.ControlosCode.GDleftObjects2.length = 0;
gdjs.ControlosCode.GDrightObjects1.length = 0;
gdjs.ControlosCode.GDrightObjects2.length = 0;
gdjs.ControlosCode.GDinfo1Objects1.length = 0;
gdjs.ControlosCode.GDinfo1Objects2.length = 0;
gdjs.ControlosCode.GDinfo2Objects1.length = 0;
gdjs.ControlosCode.GDinfo2Objects2.length = 0;
gdjs.ControlosCode.GDinfo3Objects1.length = 0;
gdjs.ControlosCode.GDinfo3Objects2.length = 0;
gdjs.ControlosCode.GDinfo4Objects1.length = 0;
gdjs.ControlosCode.GDinfo4Objects2.length = 0;
gdjs.ControlosCode.GDstartObjects1.length = 0;
gdjs.ControlosCode.GDstartObjects2.length = 0;
gdjs.ControlosCode.GDinstr1Objects1.length = 0;
gdjs.ControlosCode.GDinstr1Objects2.length = 0;

gdjs.ControlosCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['ControlosCode'] = gdjs.ControlosCode;
