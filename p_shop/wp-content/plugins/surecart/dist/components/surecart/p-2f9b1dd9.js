import{a as r}from"./p-cc7ce8c7.js";var n=function(){var n;return{promise:new Promise((function(o){n=o})),resolve:n}},e=function(o,e,t){void 0===t&&(t=!0);var i="Function"===o.constructor.name?o.prototype:o,c=i.componentWillLoad;i.componentWillLoad=function(){var o=this,i=r(this),s=n(),u=new CustomEvent("openWormhole",{bubbles:!0,composed:!0,detail:{consumer:this,fields:e,updater:function(n,e){(n in i?i:o)[n]=e},onOpen:s}});i.dispatchEvent(u);var a=function(){if(c)return c.call(o)};return t?s.promise.then((function(){return a()})):a()}};export{e as o};