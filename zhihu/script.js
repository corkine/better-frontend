// ==UserScript==
// @name         屏蔽知乎视频推荐
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  屏蔽知乎视频推荐，默认开启
// @author       Yixiong
// @match        https://www.zhihu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var monitor = new MutationObserver(mutations=>block_video());

    function block_video(){
        document.querySelectorAll(".ZVideoItem").forEach((element)=>{element.parentNode.parentNode.remove()})
    }
    monitor.observe(document.querySelector(".ListShortcut"),{
        childList: true,
        subtree: true,
        characterData: false,
        attributes: false
    });



})();


//使用知乎内置的暗黑模式
setTimeout(() => document.getElementsByTagName("html")[0].setAttribute("data-theme","dark"), 500);