/*
 ZEVMS冒险岛(079)游戏服务端
 玩具塔副本事件
 小z 71447500
 */
var minPlayers = 6;

function init() {
    em.setProperty("state", "0");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    em.setProperty("state", "1");
    var eim = em.newInstance("LudiPQ");
    var map = eim.setInstanceMap(922010100);
    map.resetFully();
    map.getPortal("next00").setScriptName("lpq1");
    map = eim.setInstanceMap(922010200);
    map.resetFully();
    map.getPortal("next00").setScriptName("lpq2");
    eim.setInstanceMap(922010201).resetFully();
    map = eim.setInstanceMap(922010300);
    map.resetFully();
    map.getPortal("next00").setScriptName("lpq3");
    map = eim.setInstanceMap(922010400);
    map.resetFully();
    map.getPortal("next00").setScriptName("lpq4");
    eim.setInstanceMap(922010401).resetFully();
    eim.setInstanceMap(922010402).resetFully();
    eim.setInstanceMap(922010403).resetFully();
    eim.setInstanceMap(922010404).resetFully();
    eim.setInstanceMap(922010405).resetFully();
    map = eim.setInstanceMap(922010500);
    map.resetFully();
    map.getPortal("next00").setScriptName("lpq5");
    eim.setInstanceMap(922010501).resetFully();
    eim.setInstanceMap(922010502).resetFully();
    eim.setInstanceMap(922010503).resetFully();
    eim.setInstanceMap(922010504).resetFully();
    eim.setInstanceMap(922010505).resetFully();
    eim.setInstanceMap(922010506).resetFully();
    map = eim.setInstanceMap(922010700);
    map.resetFully();
    map.getPortal("next00").setScriptName("lpq7");
    map = eim.setInstanceMap(922010800);
    map.getPortal("next00").setScriptName("lpq8");
    eim.setInstanceMap(922010900).resetFully();
    eim.setInstanceMap(922011000).resetFully();
    eim.startEventTimer(60 * 1000 * 60);
    return eim;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 922010000 : 922011100);
    em.setProperty("state", "0");
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 922010100:
        case 922010200:
        case 922010201:
        case 922010300:
        case 922010400:
        case 922010401:
        case 922010402:
        case 922010403:
        case 922010404:
        case 922010405:
        case 922010500:
        case 922010501:
        case 922010502:
        case 922010503:
        case 922010504:
        case 922010505:
        case 922010506:
        case 922010600:
        case 922010700:
        case 922010800:
        case 922010900:
        case 922011000:
            return;
    }
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}

function playerEntry(eim, player) {
    var map = em.getMapFactory().getMap(922010100);
    player.changeMap(map, map.getPortal(0));
    player.tryPartyQuest(1202);
}

function playerRevive(eim, player) {
}

function playerDisconnected(eim, player) {
    return -3;
}

function leftParty(eim, player) {
    if (eim.disposeIfPlayerBelow(minPlayers, eim.getProperty("cleared") == null ? 922010000 : 922011100)) {
        em.setProperty("state", "0");
    } else {
        playerExit(eim, player);
    }
}

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 922010000 : 922011100);
    em.setProperty("state", "0");
}

function playerExit(eim, player) {
    var map = em.getMapFactory().getMap(eim.getProperty("cleared") == null ? 922010000 : 922011100);
    eim.unregisterPlayer(player);
    player.changeMap(map, map.getPortal(0));
}

function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
}

function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 922010000 : 922011100);
    em.setProperty("state", "0");
}

function finish(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 922010000 : 922011100);
    em.setProperty("state", "0");
}

function timeOut(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 922010000 : 922011100);
    em.setProperty("state", "0");
}

function cancelSchedule() {}
function playerDead() {}
function allMonstersDead(eim) {}