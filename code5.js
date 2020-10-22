gdjs.Game_95overCode = {};
gdjs.Game_95overCode.GDterrenoObjects1= [];
gdjs.Game_95overCode.GDterrenoObjects2= [];
gdjs.Game_95overCode.GDtankObjects1= [];
gdjs.Game_95overCode.GDtankObjects2= [];
gdjs.Game_95overCode.GDcanhao3Objects1= [];
gdjs.Game_95overCode.GDcanhao3Objects2= [];
gdjs.Game_95overCode.GDmissil2Objects1= [];
gdjs.Game_95overCode.GDmissil2Objects2= [];
gdjs.Game_95overCode.GDbala1Objects1= [];
gdjs.Game_95overCode.GDbala1Objects2= [];
gdjs.Game_95overCode.GDbalinhaObjects1= [];
gdjs.Game_95overCode.GDbalinhaObjects2= [];
gdjs.Game_95overCode.GDchamaObjects1= [];
gdjs.Game_95overCode.GDchamaObjects2= [];
gdjs.Game_95overCode.GDexplosaoObjects1= [];
gdjs.Game_95overCode.GDexplosaoObjects2= [];
gdjs.Game_95overCode.GDsangueObjects1= [];
gdjs.Game_95overCode.GDsangueObjects2= [];
gdjs.Game_95overCode.GDinim1Objects1= [];
gdjs.Game_95overCode.GDinim1Objects2= [];
gdjs.Game_95overCode.GDinim2Objects1= [];
gdjs.Game_95overCode.GDinim2Objects2= [];
gdjs.Game_95overCode.GDdangerObjects1= [];
gdjs.Game_95overCode.GDdangerObjects2= [];
gdjs.Game_95overCode.GDlevelObjects1= [];
gdjs.Game_95overCode.GDlevelObjects2= [];
gdjs.Game_95overCode.GDlevel_95nObjects1= [];
gdjs.Game_95overCode.GDlevel_95nObjects2= [];
gdjs.Game_95overCode.GDscoreObjects1= [];
gdjs.Game_95overCode.GDscoreObjects2= [];
gdjs.Game_95overCode.GDn_95inimigosObjects1= [];
gdjs.Game_95overCode.GDn_95inimigosObjects2= [];
gdjs.Game_95overCode.GDtempoObjects1= [];
gdjs.Game_95overCode.GDtempoObjects2= [];
gdjs.Game_95overCode.GDinim11Objects1= [];
gdjs.Game_95overCode.GDinim11Objects2= [];
gdjs.Game_95overCode.GDmedalObjects1= [];
gdjs.Game_95overCode.GDmedalObjects2= [];
gdjs.Game_95overCode.GDampulhetaObjects1= [];
gdjs.Game_95overCode.GDampulhetaObjects2= [];
gdjs.Game_95overCode.GDteclasObjects1= [];
gdjs.Game_95overCode.GDteclasObjects2= [];
gdjs.Game_95overCode.GDpointerObjects1= [];
gdjs.Game_95overCode.GDpointerObjects2= [];
gdjs.Game_95overCode.GDleftObjects1= [];
gdjs.Game_95overCode.GDleftObjects2= [];
gdjs.Game_95overCode.GDrightObjects1= [];
gdjs.Game_95overCode.GDrightObjects2= [];
gdjs.Game_95overCode.GDinfo1Objects1= [];
gdjs.Game_95overCode.GDinfo1Objects2= [];
gdjs.Game_95overCode.GDinfo2Objects1= [];
gdjs.Game_95overCode.GDinfo2Objects2= [];
gdjs.Game_95overCode.GDinfo3Objects1= [];
gdjs.Game_95overCode.GDinfo3Objects2= [];
gdjs.Game_95overCode.GDinfo4Objects1= [];
gdjs.Game_95overCode.GDinfo4Objects2= [];
gdjs.Game_95overCode.GDmorrObjects1= [];
gdjs.Game_95overCode.GDmorrObjects2= [];
gdjs.Game_95overCode.GDinicioObjects1= [];
gdjs.Game_95overCode.GDinicioObjects2= [];

gdjs.Game_95overCode.conditionTrue_0 = {val:false};
gdjs.Game_95overCode.condition0IsTrue_0 = {val:false};
gdjs.Game_95overCode.condition1IsTrue_0 = {val:false};


gdjs.Game_95overCode.eventsList0x5b6e18 = function(runtimeScene) {

{


{
gdjs.Game_95overCode.GDmorrObjects1.createFrom(runtimeScene.getObjects("morr"));
gdjs.Game_95overCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_95overCode.GDmorrObjects1.length !== 0 ? gdjs.Game_95overCode.GDmorrObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Game_95overCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Game_95overCode.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{


gdjs.Game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.Game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.Game_95overCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", false);
}}

}


}; //End of gdjs.Game_95overCode.eventsList0x5b6e18


gdjs.Game_95overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95overCode.GDterrenoObjects1.length = 0;
gdjs.Game_95overCode.GDterrenoObjects2.length = 0;
gdjs.Game_95overCode.GDtankObjects1.length = 0;
gdjs.Game_95overCode.GDtankObjects2.length = 0;
gdjs.Game_95overCode.GDcanhao3Objects1.length = 0;
gdjs.Game_95overCode.GDcanhao3Objects2.length = 0;
gdjs.Game_95overCode.GDmissil2Objects1.length = 0;
gdjs.Game_95overCode.GDmissil2Objects2.length = 0;
gdjs.Game_95overCode.GDbala1Objects1.length = 0;
gdjs.Game_95overCode.GDbala1Objects2.length = 0;
gdjs.Game_95overCode.GDbalinhaObjects1.length = 0;
gdjs.Game_95overCode.GDbalinhaObjects2.length = 0;
gdjs.Game_95overCode.GDchamaObjects1.length = 0;
gdjs.Game_95overCode.GDchamaObjects2.length = 0;
gdjs.Game_95overCode.GDexplosaoObjects1.length = 0;
gdjs.Game_95overCode.GDexplosaoObjects2.length = 0;
gdjs.Game_95overCode.GDsangueObjects1.length = 0;
gdjs.Game_95overCode.GDsangueObjects2.length = 0;
gdjs.Game_95overCode.GDinim1Objects1.length = 0;
gdjs.Game_95overCode.GDinim1Objects2.length = 0;
gdjs.Game_95overCode.GDinim2Objects1.length = 0;
gdjs.Game_95overCode.GDinim2Objects2.length = 0;
gdjs.Game_95overCode.GDdangerObjects1.length = 0;
gdjs.Game_95overCode.GDdangerObjects2.length = 0;
gdjs.Game_95overCode.GDlevelObjects1.length = 0;
gdjs.Game_95overCode.GDlevelObjects2.length = 0;
gdjs.Game_95overCode.GDlevel_95nObjects1.length = 0;
gdjs.Game_95overCode.GDlevel_95nObjects2.length = 0;
gdjs.Game_95overCode.GDscoreObjects1.length = 0;
gdjs.Game_95overCode.GDscoreObjects2.length = 0;
gdjs.Game_95overCode.GDn_95inimigosObjects1.length = 0;
gdjs.Game_95overCode.GDn_95inimigosObjects2.length = 0;
gdjs.Game_95overCode.GDtempoObjects1.length = 0;
gdjs.Game_95overCode.GDtempoObjects2.length = 0;
gdjs.Game_95overCode.GDinim11Objects1.length = 0;
gdjs.Game_95overCode.GDinim11Objects2.length = 0;
gdjs.Game_95overCode.GDmedalObjects1.length = 0;
gdjs.Game_95overCode.GDmedalObjects2.length = 0;
gdjs.Game_95overCode.GDampulhetaObjects1.length = 0;
gdjs.Game_95overCode.GDampulhetaObjects2.length = 0;
gdjs.Game_95overCode.GDteclasObjects1.length = 0;
gdjs.Game_95overCode.GDteclasObjects2.length = 0;
gdjs.Game_95overCode.GDpointerObjects1.length = 0;
gdjs.Game_95overCode.GDpointerObjects2.length = 0;
gdjs.Game_95overCode.GDleftObjects1.length = 0;
gdjs.Game_95overCode.GDleftObjects2.length = 0;
gdjs.Game_95overCode.GDrightObjects1.length = 0;
gdjs.Game_95overCode.GDrightObjects2.length = 0;
gdjs.Game_95overCode.GDinfo1Objects1.length = 0;
gdjs.Game_95overCode.GDinfo1Objects2.length = 0;
gdjs.Game_95overCode.GDinfo2Objects1.length = 0;
gdjs.Game_95overCode.GDinfo2Objects2.length = 0;
gdjs.Game_95overCode.GDinfo3Objects1.length = 0;
gdjs.Game_95overCode.GDinfo3Objects2.length = 0;
gdjs.Game_95overCode.GDinfo4Objects1.length = 0;
gdjs.Game_95overCode.GDinfo4Objects2.length = 0;
gdjs.Game_95overCode.GDmorrObjects1.length = 0;
gdjs.Game_95overCode.GDmorrObjects2.length = 0;
gdjs.Game_95overCode.GDinicioObjects1.length = 0;
gdjs.Game_95overCode.GDinicioObjects2.length = 0;

gdjs.Game_95overCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Game_95overCode'] = gdjs.Game_95overCode;
