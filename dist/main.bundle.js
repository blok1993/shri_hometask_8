!function(e){var t={};function s(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);var r=e=>new Promise(t=>{t('Данные "'+e+'" были успешно приняты сервером.')});class i{constructor(){this.responseValue=null}getModelValue(){return this.responseValue}setModelValue(e){this.responseValue=e}sendRequest(e){return r(e).then(e=>{this.setModelValue(e)})}}class n{constructor(e){this.view=e}log(e){console.log(e);let t=document.createElement("li");t.innerText=e,this.view.addLogRecord(t)}}class o{constructor(e){this.view=e,this.model=new i,this.logger=new n(e)}keyPressed(){-1!==this.view.getUserInput().indexOf("@")&&this.view.setUserInput("")}sendRequestTrigger(){const e=this.view.getUserInput();return this.logger.log("Вызываем метод sendRequest из Model для отправки данных на сервер."),this.model.sendRequest(e).then(()=>{this.logger.log("Получен ответ от сервера (берем его из Model).");const e=this.model.getModelValue();this.logger.log("Отображаем ответ от сервера. Передаем сигнал во View для отрисовки."),this.view.setServerAnswer(e)})}}s.d(t,"default",function(){return l});class l{constructor(e){this.appViewEl=e,this.addListeners(this.appViewEl),this.presenter=new o(this),this.logger=new n(this)}addListeners(){this.appViewEl.querySelector(".view-stub__input").addEventListener("keyup",this.keyPressed.bind(this)),this.appViewEl.querySelector(".view-stub__apply").addEventListener("click",this.buttonClicked.bind(this))}keyPressed(){this.logger.log("Пользователь изменил содержимое input."),this.presenter.keyPressed()}buttonClicked(){this.logger.log("Нажали на кнопку отправки."),this.presenter.sendRequestTrigger()}getUserInput(){return this.appViewEl.querySelector(".view-stub__input").value}setUserInput(e){return this.appViewEl.querySelector(".view-stub__input").value=e}addLogRecord(e){this.appViewEl.querySelector(".log-list").appendChild(e)}setServerAnswer(e){this.appViewEl.querySelector(".view-stub__label").innerText=e}}const u=document.querySelector(".application-container");new l(u)}]);