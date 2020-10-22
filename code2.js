gdjs.Cena1Code = {};
gdjs.Cena1Code.GDbala1Objects1_1final = [];

gdjs.Cena1Code.GDcanhao3Objects1_1final = [];

gdjs.Cena1Code.GDdangerObjects1_1final = [];

gdjs.Cena1Code.GDinim1Objects1_1final = [];

gdjs.Cena1Code.GDinim2Objects1_1final = [];

gdjs.Cena1Code.forEachIndex2 = 0;

gdjs.Cena1Code.forEachObjects2 = [];

gdjs.Cena1Code.forEachTemporary2 = null;

gdjs.Cena1Code.forEachTotalCount2 = 0;

gdjs.Cena1Code.GDterrenoObjects1= [];
gdjs.Cena1Code.GDterrenoObjects2= [];
gdjs.Cena1Code.GDtankObjects1= [];
gdjs.Cena1Code.GDtankObjects2= [];
gdjs.Cena1Code.GDcanhao3Objects1= [];
gdjs.Cena1Code.GDcanhao3Objects2= [];
gdjs.Cena1Code.GDmissil2Objects1= [];
gdjs.Cena1Code.GDmissil2Objects2= [];
gdjs.Cena1Code.GDbala1Objects1= [];
gdjs.Cena1Code.GDbala1Objects2= [];
gdjs.Cena1Code.GDbalinhaObjects1= [];
gdjs.Cena1Code.GDbalinhaObjects2= [];
gdjs.Cena1Code.GDchamaObjects1= [];
gdjs.Cena1Code.GDchamaObjects2= [];
gdjs.Cena1Code.GDexplosaoObjects1= [];
gdjs.Cena1Code.GDexplosaoObjects2= [];
gdjs.Cena1Code.GDsangueObjects1= [];
gdjs.Cena1Code.GDsangueObjects2= [];
gdjs.Cena1Code.GDinim1Objects1= [];
gdjs.Cena1Code.GDinim1Objects2= [];
gdjs.Cena1Code.GDinim2Objects1= [];
gdjs.Cena1Code.GDinim2Objects2= [];
gdjs.Cena1Code.GDdangerObjects1= [];
gdjs.Cena1Code.GDdangerObjects2= [];
gdjs.Cena1Code.GDlevelObjects1= [];
gdjs.Cena1Code.GDlevelObjects2= [];
gdjs.Cena1Code.GDlevel_95nObjects1= [];
gdjs.Cena1Code.GDlevel_95nObjects2= [];
gdjs.Cena1Code.GDscoreObjects1= [];
gdjs.Cena1Code.GDscoreObjects2= [];
gdjs.Cena1Code.GDn_95inimigosObjects1= [];
gdjs.Cena1Code.GDn_95inimigosObjects2= [];
gdjs.Cena1Code.GDtempoObjects1= [];
gdjs.Cena1Code.GDtempoObjects2= [];
gdjs.Cena1Code.GDinim11Objects1= [];
gdjs.Cena1Code.GDinim11Objects2= [];
gdjs.Cena1Code.GDmedalObjects1= [];
gdjs.Cena1Code.GDmedalObjects2= [];
gdjs.Cena1Code.GDampulhetaObjects1= [];
gdjs.Cena1Code.GDampulhetaObjects2= [];
gdjs.Cena1Code.GDteclasObjects1= [];
gdjs.Cena1Code.GDteclasObjects2= [];
gdjs.Cena1Code.GDpointerObjects1= [];
gdjs.Cena1Code.GDpointerObjects2= [];
gdjs.Cena1Code.GDleftObjects1= [];
gdjs.Cena1Code.GDleftObjects2= [];
gdjs.Cena1Code.GDrightObjects1= [];
gdjs.Cena1Code.GDrightObjects2= [];
gdjs.Cena1Code.GDinfo1Objects1= [];
gdjs.Cena1Code.GDinfo1Objects2= [];
gdjs.Cena1Code.GDinfo2Objects1= [];
gdjs.Cena1Code.GDinfo2Objects2= [];
gdjs.Cena1Code.GDinfo3Objects1= [];
gdjs.Cena1Code.GDinfo3Objects2= [];
gdjs.Cena1Code.GDinfo4Objects1= [];
gdjs.Cena1Code.GDinfo4Objects2= [];

gdjs.Cena1Code.conditionTrue_0 = {val:false};
gdjs.Cena1Code.condition0IsTrue_0 = {val:false};
gdjs.Cena1Code.condition1IsTrue_0 = {val:false};
gdjs.Cena1Code.condition2IsTrue_0 = {val:false};
gdjs.Cena1Code.condition3IsTrue_0 = {val:false};
gdjs.Cena1Code.condition4IsTrue_0 = {val:false};
gdjs.Cena1Code.conditionTrue_1 = {val:false};
gdjs.Cena1Code.condition0IsTrue_1 = {val:false};
gdjs.Cena1Code.condition1IsTrue_1 = {val:false};
gdjs.Cena1Code.condition2IsTrue_1 = {val:false};
gdjs.Cena1Code.condition3IsTrue_1 = {val:false};
gdjs.Cena1Code.condition4IsTrue_1 = {val:false};


gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDmissil2Objects1Objects = Hashtable.newFrom({"missil2": gdjs.Cena1Code.GDmissil2Objects1});gdjs.Cena1Code.eventsList0x717abc = function(runtimeScene) {

{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "disparo");
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
gdjs.Cena1Code.GDcanhao3Objects1.createFrom(runtimeScene.getObjects("canhao3"));
gdjs.Cena1Code.GDmissil2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDmissil2Objects1Objects, (( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getPointX("mira3")), (( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getPointY("mira3")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "som\\rocket.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Cena1Code.GDmissil2Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDmissil2Objects1[i].setZOrder(80);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDmissil2Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDmissil2Objects1[i].setAngle((( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Cena1Code.GDmissil2Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDmissil2Objects1[i].addPolarForce((gdjs.Cena1Code.GDmissil2Objects1[i].getAngle()), 600, 1);
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "disparo");
}}

}


}; //End of gdjs.Cena1Code.eventsList0x717abc
gdjs.Cena1Code.eventsList0x7178dc = function(runtimeScene) {

{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
{gdjs.Cena1Code.conditionTrue_1 = gdjs.Cena1Code.condition0IsTrue_0;
gdjs.Cena1Code.condition0IsTrue_1.val = false;
{
gdjs.Cena1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}gdjs.Cena1Code.conditionTrue_1.val = true && gdjs.Cena1Code.condition0IsTrue_1.val;
}
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Cena1Code.eventsList0x717abc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Cena1Code.eventsList0x7178dc
gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDbalinhaObjects1Objects = Hashtable.newFrom({"balinha": gdjs.Cena1Code.GDbalinhaObjects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDchamaObjects1Objects = Hashtable.newFrom({"chama": gdjs.Cena1Code.GDchamaObjects1});gdjs.Cena1Code.eventsList0x71849c = function(runtimeScene) {

{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "disparo1");
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
gdjs.Cena1Code.GDcanhao3Objects1.createFrom(runtimeScene.getObjects("canhao3"));
gdjs.Cena1Code.GDbalinhaObjects1.length = 0;

gdjs.Cena1Code.GDchamaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDbalinhaObjects1Objects, (( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getPointX("mira31")), (( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getPointY("mira31")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDchamaObjects1Objects, (( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getPointX("mira31")), (( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getPointY("mira31")), "");
}{for(var i = 0, len = gdjs.Cena1Code.GDbalinhaObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDbalinhaObjects1[i].setZOrder(100);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDchamaObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDchamaObjects1[i].setZOrder(100);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "som\\tiro1.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.Cena1Code.GDbalinhaObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDbalinhaObjects1[i].setAngle((( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Cena1Code.GDchamaObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDchamaObjects1[i].setAngle((( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Cena1Code.GDbalinhaObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDbalinhaObjects1[i].addPolarForce((gdjs.Cena1Code.GDbalinhaObjects1[i].getAngle()), 800, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "disparo1");
}}

}


}; //End of gdjs.Cena1Code.eventsList0x71849c
gdjs.Cena1Code.eventsList0x718294 = function(runtimeScene) {

{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
{gdjs.Cena1Code.conditionTrue_1 = gdjs.Cena1Code.condition0IsTrue_0;
gdjs.Cena1Code.condition0IsTrue_1.val = false;
{
gdjs.Cena1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}gdjs.Cena1Code.conditionTrue_1.val = true && gdjs.Cena1Code.condition0IsTrue_1.val;
}
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Cena1Code.eventsList0x71849c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Cena1Code.eventsList0x718294
gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim2Objects1Objects = Hashtable.newFrom({"inim2": gdjs.Cena1Code.GDinim2Objects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDmissil2Objects1Objects = Hashtable.newFrom({"missil2": gdjs.Cena1Code.GDmissil2Objects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim1Objects1Objects = Hashtable.newFrom({"inim1": gdjs.Cena1Code.GDinim1Objects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDexplosaoObjects1Objects = Hashtable.newFrom({"explosao": gdjs.Cena1Code.GDexplosaoObjects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDbalinhaObjects1Objects = Hashtable.newFrom({"balinha": gdjs.Cena1Code.GDbalinhaObjects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim2Objects1Objects = Hashtable.newFrom({"inim2": gdjs.Cena1Code.GDinim2Objects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDsangueObjects1Objects = Hashtable.newFrom({"sangue": gdjs.Cena1Code.GDsangueObjects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDexplosaoObjects1Objects = Hashtable.newFrom({"explosao": gdjs.Cena1Code.GDexplosaoObjects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDbala1Objects2Objects = Hashtable.newFrom({"bala1": gdjs.Cena1Code.GDbala1Objects2});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDchamaObjects2Objects = Hashtable.newFrom({"chama": gdjs.Cena1Code.GDchamaObjects2});gdjs.Cena1Code.eventsList0x71aae4 = function(runtimeScene) {

}; //End of gdjs.Cena1Code.eventsList0x71aae4
gdjs.Cena1Code.eventsList0x71a9a4 = function(runtimeScene) {

{

gdjs.Cena1Code.GDinim1Objects1.createFrom(runtimeScene.getObjects("inim1"));

for(gdjs.Cena1Code.forEachIndex2 = 0;gdjs.Cena1Code.forEachIndex2 < gdjs.Cena1Code.GDinim1Objects1.length;++gdjs.Cena1Code.forEachIndex2) {
gdjs.Cena1Code.GDbala1Objects2.length = 0;

gdjs.Cena1Code.GDchamaObjects2.length = 0;

gdjs.Cena1Code.GDinim1Objects2.length = 0;


gdjs.Cena1Code.forEachTemporary2 = gdjs.Cena1Code.GDinim1Objects1[gdjs.Cena1Code.forEachIndex2];
gdjs.Cena1Code.GDinim1Objects2.push(gdjs.Cena1Code.forEachTemporary2);
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDbala1Objects2Objects, (( gdjs.Cena1Code.GDinim1Objects2.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim1Objects2[0].getPointX("mira_inim1")), (( gdjs.Cena1Code.GDinim1Objects2.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim1Objects2[0].getPointY("mira_inim1")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDchamaObjects2Objects, (( gdjs.Cena1Code.GDinim1Objects2.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim1Objects2[0].getPointX("mira_inim1")), (( gdjs.Cena1Code.GDinim1Objects2.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim1Objects2[0].getPointY("mira_inim1")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "som\\canhao_inim.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Cena1Code.GDbala1Objects2.length ;i < len;++i) {
    gdjs.Cena1Code.GDbala1Objects2[i].setZOrder(90);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDchamaObjects2.length ;i < len;++i) {
    gdjs.Cena1Code.GDchamaObjects2[i].setZOrder(90);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDbala1Objects2.length ;i < len;++i) {
    gdjs.Cena1Code.GDbala1Objects2[i].setAngle((( gdjs.Cena1Code.GDinim1Objects2.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim1Objects2[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Cena1Code.GDchamaObjects2.length ;i < len;++i) {
    gdjs.Cena1Code.GDchamaObjects2[i].setAngle((( gdjs.Cena1Code.GDinim1Objects2.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim1Objects2[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Cena1Code.GDbala1Objects2.length ;i < len;++i) {
    gdjs.Cena1Code.GDbala1Objects2[i].addPolarForce((( gdjs.Cena1Code.GDinim1Objects2.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim1Objects2[0].getAngle()), 600, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "balas_timer");
}}
}

}


}; //End of gdjs.Cena1Code.eventsList0x71a9a4
gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDbala1Objects2Objects = Hashtable.newFrom({"bala1": gdjs.Cena1Code.GDbala1Objects2});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDcanhao3Objects2Objects = Hashtable.newFrom({"canhao3": gdjs.Cena1Code.GDcanhao3Objects2});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim2Objects2Objects = Hashtable.newFrom({"inim2": gdjs.Cena1Code.GDinim2Objects2});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDcanhao3Objects2Objects = Hashtable.newFrom({"canhao3": gdjs.Cena1Code.GDcanhao3Objects2});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDcanhao3Objects2Objects = Hashtable.newFrom({"canhao3": gdjs.Cena1Code.GDcanhao3Objects2});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDdangerObjects2Objects = Hashtable.newFrom({"danger": gdjs.Cena1Code.GDdangerObjects2});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDcanhao3Objects2Objects = Hashtable.newFrom({"canhao3": gdjs.Cena1Code.GDcanhao3Objects2});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim1Objects2Objects = Hashtable.newFrom({"inim1": gdjs.Cena1Code.GDinim1Objects2});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDexplosaoObjects1Objects = Hashtable.newFrom({"explosao": gdjs.Cena1Code.GDexplosaoObjects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDexplosaoObjects1Objects = Hashtable.newFrom({"explosao": gdjs.Cena1Code.GDexplosaoObjects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDbalinhaObjects1Objects = Hashtable.newFrom({"balinha": gdjs.Cena1Code.GDbalinhaObjects1});gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim1Objects1Objects = Hashtable.newFrom({"inim1": gdjs.Cena1Code.GDinim1Objects1});gdjs.Cena1Code.eventsList0x71be4c = function(runtimeScene) {

{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "go_delay");
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_over", false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "go_delay");
}}

}


}; //End of gdjs.Cena1Code.eventsList0x71be4c
gdjs.Cena1Code.eventsList0x71c2cc = function(runtimeScene) {

{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "go_delay1");
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Transicao", false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "go_delay1");
}}

}


}; //End of gdjs.Cena1Code.eventsList0x71c2cc
gdjs.Cena1Code.eventsList0x5b6e18 = function(runtimeScene) {

{



}


{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
gdjs.Cena1Code.GDlevel_95nObjects1.createFrom(runtimeScene.getObjects("level_n"));
gdjs.Cena1Code.GDn_95inimigosObjects1.createFrom(runtimeScene.getObjects("n_inimigos"));
gdjs.Cena1Code.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
gdjs.Cena1Code.GDtempoObjects1.createFrom(runtimeScene.getObjects("tempo"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "disparo");
}{gdjs.evtTools.sound.playSound(runtimeScene, "som\\rw_walk.mp3", true, 70, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "som\\tank1.wav", true, 60, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.Cena1Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(10);
}{for(var i = 0, len = gdjs.Cena1Code.GDn_95inimigosObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDn_95inimigosObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(240);
}{for(var i = 0, len = gdjs.Cena1Code.GDtempoObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDtempoObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Cena1Code.GDlevel_95nObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDlevel_95nObjects1[i].setString("01");
}
}}

}


{



}


{


{
gdjs.Cena1Code.GDcanhao3Objects1.createFrom(runtimeScene.getObjects("canhao3"));
gdjs.Cena1Code.GDtankObjects1.createFrom(runtimeScene.getObjects("tank"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Cena1Code.GDcanhao3Objects1.length !== 0 ? gdjs.Cena1Code.GDcanhao3Objects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Cena1Code.GDtankObjects1.length !== 0 ? gdjs.Cena1Code.GDtankObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Cena1Code.GDcanhao3Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDcanhao3Objects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 45, runtimeScene);
}
}}

}


{



}


{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
{gdjs.Cena1Code.conditionTrue_1 = gdjs.Cena1Code.condition0IsTrue_0;
gdjs.Cena1Code.condition0IsTrue_1.val = false;
gdjs.Cena1Code.condition1IsTrue_1.val = false;
{
gdjs.Cena1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if( gdjs.Cena1Code.condition0IsTrue_1.val ) {
    gdjs.Cena1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Cena1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if( gdjs.Cena1Code.condition1IsTrue_1.val ) {
    gdjs.Cena1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Cena1Code.eventsList0x7178dc(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
{gdjs.Cena1Code.conditionTrue_1 = gdjs.Cena1Code.condition0IsTrue_0;
gdjs.Cena1Code.condition0IsTrue_1.val = false;
gdjs.Cena1Code.condition1IsTrue_1.val = false;
{
gdjs.Cena1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.Cena1Code.condition0IsTrue_1.val ) {
    gdjs.Cena1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Cena1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Cena1Code.condition1IsTrue_1.val ) {
    gdjs.Cena1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Cena1Code.eventsList0x718294(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "cria_inim2");
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
gdjs.Cena1Code.GDinim2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim2Objects1Objects, gdjs.random(800), -(50), "");
}{for(var i = 0, len = gdjs.Cena1Code.GDinim2Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDinim2Objects1[i].setZOrder(100);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cria_inim2");
}}

}


{


{
gdjs.Cena1Code.GDcanhao3Objects1.createFrom(runtimeScene.getObjects("canhao3"));
gdjs.Cena1Code.GDinim2Objects1.createFrom(runtimeScene.getObjects("inim2"));
{for(var i = 0, len = gdjs.Cena1Code.GDinim2Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDinim2Objects1[i].addForceTowardObject((gdjs.Cena1Code.GDcanhao3Objects1.length !== 0 ? gdjs.Cena1Code.GDcanhao3Objects1[0] : null), 50, 0);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDinim2Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDinim2Objects1[i].rotateTowardPosition((( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getPointX("mira3")), (( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getPointY("mira3")), 0, runtimeScene);
}
}}

}


{



}


{

gdjs.Cena1Code.GDinim1Objects1.createFrom(runtimeScene.getObjects("inim1"));
gdjs.Cena1Code.GDmissil2Objects1.createFrom(runtimeScene.getObjects("missil2"));

gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDmissil2Objects1Objects, gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim1Objects1Objects, false, runtimeScene, false);
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cena1Code.GDinim1Objects1 */
/* Reuse gdjs.Cena1Code.GDmissil2Objects1 */
gdjs.Cena1Code.GDn_95inimigosObjects1.createFrom(runtimeScene.getObjects("n_inimigos"));
gdjs.Cena1Code.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
gdjs.Cena1Code.GDexplosaoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDexplosaoObjects1Objects, (( gdjs.Cena1Code.GDinim1Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim1Objects1[0].getPointX("")), (( gdjs.Cena1Code.GDinim1Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim1Objects1[0].getPointY("")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "som\\Tiro2.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.Cena1Code.GDexplosaoObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDexplosaoObjects1[i].setZOrder(50);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).sub(1);
}{for(var i = 0, len = gdjs.Cena1Code.GDn_95inimigosObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDn_95inimigosObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(20);
}{for(var i = 0, len = gdjs.Cena1Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.Cena1Code.GDinim1Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDinim1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDmissil2Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDmissil2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Cena1Code.GDexplosaoObjects1.createFrom(runtimeScene.getObjects("explosao"));

gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cena1Code.GDexplosaoObjects1.length;i<l;++i) {
    if ( gdjs.Cena1Code.GDexplosaoObjects1[i].hasAnimationEnded() ) {
        gdjs.Cena1Code.condition0IsTrue_0.val = true;
        gdjs.Cena1Code.GDexplosaoObjects1[k] = gdjs.Cena1Code.GDexplosaoObjects1[i];
        ++k;
    }
}
gdjs.Cena1Code.GDexplosaoObjects1.length = k;}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cena1Code.GDexplosaoObjects1 */
{for(var i = 0, len = gdjs.Cena1Code.GDexplosaoObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDexplosaoObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Cena1Code.GDchamaObjects1.createFrom(runtimeScene.getObjects("chama"));

gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cena1Code.GDchamaObjects1.length;i<l;++i) {
    if ( gdjs.Cena1Code.GDchamaObjects1[i].hasAnimationEnded() ) {
        gdjs.Cena1Code.condition0IsTrue_0.val = true;
        gdjs.Cena1Code.GDchamaObjects1[k] = gdjs.Cena1Code.GDchamaObjects1[i];
        ++k;
    }
}
gdjs.Cena1Code.GDchamaObjects1.length = k;}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cena1Code.GDchamaObjects1 */
{for(var i = 0, len = gdjs.Cena1Code.GDchamaObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDchamaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.Cena1Code.GDbalinhaObjects1.createFrom(runtimeScene.getObjects("balinha"));
gdjs.Cena1Code.GDinim2Objects1.createFrom(runtimeScene.getObjects("inim2"));

gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDbalinhaObjects1Objects, gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cena1Code.GDbalinhaObjects1 */
/* Reuse gdjs.Cena1Code.GDinim2Objects1 */
gdjs.Cena1Code.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
gdjs.Cena1Code.GDexplosaoObjects1.length = 0;

gdjs.Cena1Code.GDsangueObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDsangueObjects1Objects, (( gdjs.Cena1Code.GDinim2Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim2Objects1[0].getPointX("")), (( gdjs.Cena1Code.GDinim2Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim2Objects1[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDexplosaoObjects1Objects, (( gdjs.Cena1Code.GDinim2Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim2Objects1[0].getPointX("")), (( gdjs.Cena1Code.GDinim2Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDinim2Objects1[0].getPointY("")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "som\\Tiro2.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.Cena1Code.GDexplosaoObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDexplosaoObjects1[i].setZOrder(50);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDsangueObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDsangueObjects1[i].setZOrder(50);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(2);
}{for(var i = 0, len = gdjs.Cena1Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.Cena1Code.GDinim2Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDinim2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDbalinhaObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDbalinhaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Cena1Code.GDsangueObjects1.createFrom(runtimeScene.getObjects("sangue"));

gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cena1Code.GDsangueObjects1.length;i<l;++i) {
    if ( gdjs.Cena1Code.GDsangueObjects1[i].hasAnimationEnded() ) {
        gdjs.Cena1Code.condition0IsTrue_0.val = true;
        gdjs.Cena1Code.GDsangueObjects1[k] = gdjs.Cena1Code.GDsangueObjects1[i];
        ++k;
    }
}
gdjs.Cena1Code.GDsangueObjects1.length = k;}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cena1Code.GDsangueObjects1 */
{for(var i = 0, len = gdjs.Cena1Code.GDsangueObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDsangueObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "balas_timer");
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Cena1Code.eventsList0x71a9a4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Cena1Code.GDbala1Objects1.length = 0;

gdjs.Cena1Code.GDcanhao3Objects1.length = 0;

gdjs.Cena1Code.GDdangerObjects1.length = 0;

gdjs.Cena1Code.GDinim1Objects1.length = 0;

gdjs.Cena1Code.GDinim2Objects1.length = 0;


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
{gdjs.Cena1Code.conditionTrue_1 = gdjs.Cena1Code.condition0IsTrue_0;
gdjs.Cena1Code.GDbala1Objects1_1final.length = 0;gdjs.Cena1Code.GDcanhao3Objects1_1final.length = 0;gdjs.Cena1Code.GDdangerObjects1_1final.length = 0;gdjs.Cena1Code.GDinim1Objects1_1final.length = 0;gdjs.Cena1Code.GDinim2Objects1_1final.length = 0;gdjs.Cena1Code.condition0IsTrue_1.val = false;
gdjs.Cena1Code.condition1IsTrue_1.val = false;
gdjs.Cena1Code.condition2IsTrue_1.val = false;
gdjs.Cena1Code.condition3IsTrue_1.val = false;
{
gdjs.Cena1Code.GDbala1Objects2.createFrom(runtimeScene.getObjects("bala1"));
gdjs.Cena1Code.GDcanhao3Objects2.createFrom(runtimeScene.getObjects("canhao3"));
gdjs.Cena1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDbala1Objects2Objects, gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDcanhao3Objects2Objects, false, runtimeScene, false);
if( gdjs.Cena1Code.condition0IsTrue_1.val ) {
    gdjs.Cena1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Cena1Code.GDbala1Objects2.length;j<jLen;++j) {
        if ( gdjs.Cena1Code.GDbala1Objects1_1final.indexOf(gdjs.Cena1Code.GDbala1Objects2[j]) === -1 )
            gdjs.Cena1Code.GDbala1Objects1_1final.push(gdjs.Cena1Code.GDbala1Objects2[j]);
    }
    for(var j = 0, jLen = gdjs.Cena1Code.GDcanhao3Objects2.length;j<jLen;++j) {
        if ( gdjs.Cena1Code.GDcanhao3Objects1_1final.indexOf(gdjs.Cena1Code.GDcanhao3Objects2[j]) === -1 )
            gdjs.Cena1Code.GDcanhao3Objects1_1final.push(gdjs.Cena1Code.GDcanhao3Objects2[j]);
    }
}
}
{
gdjs.Cena1Code.GDcanhao3Objects2.createFrom(runtimeScene.getObjects("canhao3"));
gdjs.Cena1Code.GDinim2Objects2.createFrom(runtimeScene.getObjects("inim2"));
gdjs.Cena1Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim2Objects2Objects, gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDcanhao3Objects2Objects, false, runtimeScene, true);
if( gdjs.Cena1Code.condition1IsTrue_1.val ) {
    gdjs.Cena1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Cena1Code.GDcanhao3Objects2.length;j<jLen;++j) {
        if ( gdjs.Cena1Code.GDcanhao3Objects1_1final.indexOf(gdjs.Cena1Code.GDcanhao3Objects2[j]) === -1 )
            gdjs.Cena1Code.GDcanhao3Objects1_1final.push(gdjs.Cena1Code.GDcanhao3Objects2[j]);
    }
    for(var j = 0, jLen = gdjs.Cena1Code.GDinim2Objects2.length;j<jLen;++j) {
        if ( gdjs.Cena1Code.GDinim2Objects1_1final.indexOf(gdjs.Cena1Code.GDinim2Objects2[j]) === -1 )
            gdjs.Cena1Code.GDinim2Objects1_1final.push(gdjs.Cena1Code.GDinim2Objects2[j]);
    }
}
}
{
gdjs.Cena1Code.GDcanhao3Objects2.createFrom(runtimeScene.getObjects("canhao3"));
gdjs.Cena1Code.GDdangerObjects2.createFrom(runtimeScene.getObjects("danger"));
gdjs.Cena1Code.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDcanhao3Objects2Objects, gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDdangerObjects2Objects, false, runtimeScene, true);
if( gdjs.Cena1Code.condition2IsTrue_1.val ) {
    gdjs.Cena1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Cena1Code.GDcanhao3Objects2.length;j<jLen;++j) {
        if ( gdjs.Cena1Code.GDcanhao3Objects1_1final.indexOf(gdjs.Cena1Code.GDcanhao3Objects2[j]) === -1 )
            gdjs.Cena1Code.GDcanhao3Objects1_1final.push(gdjs.Cena1Code.GDcanhao3Objects2[j]);
    }
    for(var j = 0, jLen = gdjs.Cena1Code.GDdangerObjects2.length;j<jLen;++j) {
        if ( gdjs.Cena1Code.GDdangerObjects1_1final.indexOf(gdjs.Cena1Code.GDdangerObjects2[j]) === -1 )
            gdjs.Cena1Code.GDdangerObjects1_1final.push(gdjs.Cena1Code.GDdangerObjects2[j]);
    }
}
}
{
gdjs.Cena1Code.GDcanhao3Objects2.createFrom(runtimeScene.getObjects("canhao3"));
gdjs.Cena1Code.GDinim1Objects2.createFrom(runtimeScene.getObjects("inim1"));
gdjs.Cena1Code.condition3IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDcanhao3Objects2Objects, gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim1Objects2Objects, false, runtimeScene, true);
if( gdjs.Cena1Code.condition3IsTrue_1.val ) {
    gdjs.Cena1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Cena1Code.GDcanhao3Objects2.length;j<jLen;++j) {
        if ( gdjs.Cena1Code.GDcanhao3Objects1_1final.indexOf(gdjs.Cena1Code.GDcanhao3Objects2[j]) === -1 )
            gdjs.Cena1Code.GDcanhao3Objects1_1final.push(gdjs.Cena1Code.GDcanhao3Objects2[j]);
    }
    for(var j = 0, jLen = gdjs.Cena1Code.GDinim1Objects2.length;j<jLen;++j) {
        if ( gdjs.Cena1Code.GDinim1Objects1_1final.indexOf(gdjs.Cena1Code.GDinim1Objects2[j]) === -1 )
            gdjs.Cena1Code.GDinim1Objects1_1final.push(gdjs.Cena1Code.GDinim1Objects2[j]);
    }
}
}
{
gdjs.Cena1Code.GDbala1Objects1.createFrom(gdjs.Cena1Code.GDbala1Objects1_1final);
gdjs.Cena1Code.GDcanhao3Objects1.createFrom(gdjs.Cena1Code.GDcanhao3Objects1_1final);
gdjs.Cena1Code.GDdangerObjects1.createFrom(gdjs.Cena1Code.GDdangerObjects1_1final);
gdjs.Cena1Code.GDinim1Objects1.createFrom(gdjs.Cena1Code.GDinim1Objects1_1final);
gdjs.Cena1Code.GDinim2Objects1.createFrom(gdjs.Cena1Code.GDinim2Objects1_1final);
}
}
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cena1Code.GDbala1Objects1 */
/* Reuse gdjs.Cena1Code.GDcanhao3Objects1 */
/* Reuse gdjs.Cena1Code.GDinim2Objects1 */
gdjs.Cena1Code.GDtankObjects1.createFrom(runtimeScene.getObjects("tank"));
gdjs.Cena1Code.GDexplosaoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDexplosaoObjects1Objects, (( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getPointX("")), (( gdjs.Cena1Code.GDcanhao3Objects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDcanhao3Objects1[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDexplosaoObjects1Objects, (( gdjs.Cena1Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDtankObjects1[0].getPointX("")), (( gdjs.Cena1Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.Cena1Code.GDtankObjects1[0].getPointY("")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "som\\Tiro2.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.Cena1Code.GDexplosaoObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDexplosaoObjects1[i].setZOrder(50);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDtankObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDtankObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDcanhao3Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDcanhao3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDinim2Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDinim2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Cena1Code.GDbala1Objects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDbala1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.Cena1Code.GDbalinhaObjects1.createFrom(runtimeScene.getObjects("balinha"));
gdjs.Cena1Code.GDinim1Objects1.createFrom(runtimeScene.getObjects("inim1"));

gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDbalinhaObjects1Objects, gdjs.Cena1Code.mapOfGDgdjs_46Cena1Code_46GDinim1Objects1Objects, false, runtimeScene, false);
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cena1Code.GDbalinhaObjects1 */
{for(var i = 0, len = gdjs.Cena1Code.GDbalinhaObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDbalinhaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
{gdjs.Cena1Code.conditionTrue_1 = gdjs.Cena1Code.condition0IsTrue_0;
gdjs.Cena1Code.condition0IsTrue_1.val = false;
gdjs.Cena1Code.condition1IsTrue_1.val = false;
{
gdjs.Cena1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if( gdjs.Cena1Code.condition0IsTrue_1.val ) {
    gdjs.Cena1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Cena1Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1;
if( gdjs.Cena1Code.condition1IsTrue_1.val ) {
    gdjs.Cena1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Cena1Code.eventsList0x71be4c(runtimeScene);} //End of subevents
}

}


{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Cena1Code.eventsList0x71c2cc(runtimeScene);} //End of subevents
}

}


{


gdjs.Cena1Code.condition0IsTrue_0.val = false;
{
gdjs.Cena1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "tempo_jogo");
}if (gdjs.Cena1Code.condition0IsTrue_0.val) {
gdjs.Cena1Code.GDtempoObjects1.createFrom(runtimeScene.getObjects("tempo"));
{runtimeScene.getGame().getVariables().getFromIndex(3).sub(1);
}{for(var i = 0, len = gdjs.Cena1Code.GDtempoObjects1.length ;i < len;++i) {
    gdjs.Cena1Code.GDtempoObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tempo_jogo");
}}

}


{


{
}

}


}; //End of gdjs.Cena1Code.eventsList0x5b6e18


gdjs.Cena1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena1Code.GDterrenoObjects1.length = 0;
gdjs.Cena1Code.GDterrenoObjects2.length = 0;
gdjs.Cena1Code.GDtankObjects1.length = 0;
gdjs.Cena1Code.GDtankObjects2.length = 0;
gdjs.Cena1Code.GDcanhao3Objects1.length = 0;
gdjs.Cena1Code.GDcanhao3Objects2.length = 0;
gdjs.Cena1Code.GDmissil2Objects1.length = 0;
gdjs.Cena1Code.GDmissil2Objects2.length = 0;
gdjs.Cena1Code.GDbala1Objects1.length = 0;
gdjs.Cena1Code.GDbala1Objects2.length = 0;
gdjs.Cena1Code.GDbalinhaObjects1.length = 0;
gdjs.Cena1Code.GDbalinhaObjects2.length = 0;
gdjs.Cena1Code.GDchamaObjects1.length = 0;
gdjs.Cena1Code.GDchamaObjects2.length = 0;
gdjs.Cena1Code.GDexplosaoObjects1.length = 0;
gdjs.Cena1Code.GDexplosaoObjects2.length = 0;
gdjs.Cena1Code.GDsangueObjects1.length = 0;
gdjs.Cena1Code.GDsangueObjects2.length = 0;
gdjs.Cena1Code.GDinim1Objects1.length = 0;
gdjs.Cena1Code.GDinim1Objects2.length = 0;
gdjs.Cena1Code.GDinim2Objects1.length = 0;
gdjs.Cena1Code.GDinim2Objects2.length = 0;
gdjs.Cena1Code.GDdangerObjects1.length = 0;
gdjs.Cena1Code.GDdangerObjects2.length = 0;
gdjs.Cena1Code.GDlevelObjects1.length = 0;
gdjs.Cena1Code.GDlevelObjects2.length = 0;
gdjs.Cena1Code.GDlevel_95nObjects1.length = 0;
gdjs.Cena1Code.GDlevel_95nObjects2.length = 0;
gdjs.Cena1Code.GDscoreObjects1.length = 0;
gdjs.Cena1Code.GDscoreObjects2.length = 0;
gdjs.Cena1Code.GDn_95inimigosObjects1.length = 0;
gdjs.Cena1Code.GDn_95inimigosObjects2.length = 0;
gdjs.Cena1Code.GDtempoObjects1.length = 0;
gdjs.Cena1Code.GDtempoObjects2.length = 0;
gdjs.Cena1Code.GDinim11Objects1.length = 0;
gdjs.Cena1Code.GDinim11Objects2.length = 0;
gdjs.Cena1Code.GDmedalObjects1.length = 0;
gdjs.Cena1Code.GDmedalObjects2.length = 0;
gdjs.Cena1Code.GDampulhetaObjects1.length = 0;
gdjs.Cena1Code.GDampulhetaObjects2.length = 0;
gdjs.Cena1Code.GDteclasObjects1.length = 0;
gdjs.Cena1Code.GDteclasObjects2.length = 0;
gdjs.Cena1Code.GDpointerObjects1.length = 0;
gdjs.Cena1Code.GDpointerObjects2.length = 0;
gdjs.Cena1Code.GDleftObjects1.length = 0;
gdjs.Cena1Code.GDleftObjects2.length = 0;
gdjs.Cena1Code.GDrightObjects1.length = 0;
gdjs.Cena1Code.GDrightObjects2.length = 0;
gdjs.Cena1Code.GDinfo1Objects1.length = 0;
gdjs.Cena1Code.GDinfo1Objects2.length = 0;
gdjs.Cena1Code.GDinfo2Objects1.length = 0;
gdjs.Cena1Code.GDinfo2Objects2.length = 0;
gdjs.Cena1Code.GDinfo3Objects1.length = 0;
gdjs.Cena1Code.GDinfo3Objects2.length = 0;
gdjs.Cena1Code.GDinfo4Objects1.length = 0;
gdjs.Cena1Code.GDinfo4Objects2.length = 0;

gdjs.Cena1Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Cena1Code'] = gdjs.Cena1Code;
