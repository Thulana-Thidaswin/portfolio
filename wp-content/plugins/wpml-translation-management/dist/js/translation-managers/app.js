!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var o=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$=t,this.dialogId=n,this.content=i,this.maxWidth="95%",this.setupDialog()}return i(e,[{key:"setupDialog",value:function(){this.dialogElement=this.content.find("#"+this.dialogId),this.dialogElement.dialog({autoOpen:!1,resizable:!1,draggable:!1,modal:!0,width:"auto",dialogClass:"wpml-dialog otgs-ui-dialog",closeText:this.dialogElement.data("cancel-text"),closeOnEscape:!0,buttons:this.getButtons()})}},{key:"getButtons",value:function(){return[this.getDefaultCancelButton()]}},{key:"getDefaultCancelButton",value:function(){var e=this;return{class:"button-secondary alignleft "+this.dialogId+"-cancel",text:this.dialogElement.data("cancel-text"),click:function(){return e.onCancel()}}}},{key:"onCancel",value:function(){this.close()}},{key:"open",value:function(){var e=this;this.$(window).on("resize.repositionDialog",function(){return e.repositionDialog()}),this.dialogElement.dialog("open"),this.repositionDialog()}},{key:"close",value:function(){this.$(window).off("resize.repositionDialog"),this.dialogElement.dialog("close")}},{key:"destroy",value:function(){this.dialogElement.dialog("destroy").remove()}},{key:"repositionDialog",value:function(){this.$(".otgs-ui-dialog .ui-dialog-content").css({"max-height":this.$(window).height()-180}),this.$(".otgs-ui-dialog").css({"max-width":this.maxWidth});var e=this.getFullWidthElements();e.length&&this.dialogElement.find(e.join()).css({"max-width":"100%"}),this.setPosition({my:"center",at:"center",of:window})}},{key:"getFullWidthElements",value:function(){return[]}},{key:"setTitle",value:function(e){this.dialogElement.dialog("option","title",e)}},{key:"setMaxWidth",value:function(e){this.maxWidth=e,this.repositionDialog()}},{key:"setPosition",value:function(e){this.dialogElement.dialog("option","position",e)}},{key:"find",value:function(e){return this.dialogElement.find(e)}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$=t,this.section=null}return i(e,[{key:"show",value:function(e){e?this.section.show():this.section.hide()}},{key:"isShown",value:function(){return this.section.is(":visible")}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));var a=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.role=n,i.currentMode=null,i.selectedUser=null,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),i(t,[{key:"init",value:function(e,t){var n=this;this.initializeSelectors(e,t),WPML_TM.translationRolesSelect2(this.existingUserSelect,this.nonce,this.role,function(e){return n.selectChange(e)}),this.addTranslationRole=new WPML_TM.setTranslationRole(this.$,t,this.nonce,this.role,function(e){return n.enableButton(e)})}},{key:"initializeSelectors",value:function(e,t){var n=this;this.existingUserSelect=t.find(".js-translation-user-select"),this.section=t.find(".js-select-user"),this.nonce=this.section.data("nonce"),this.modeRadios=t.find('[name="user"]').on("change",function(e){return n.onMode()}),this.existingSection=t.find(".js-existing-user-section"),this.newSection=t.find(".js-new-user-section"),this.dialogOK=this.$("."+e+"-ok").attr("disabled","disabled")}},{key:"reset",value:function(){this.addTranslationRole.resetInputs(),this.existingUserSelect.select2("val",""),this.selectedUser=null,this.modeRadios.prop("checked",!1),this.existingSection.hide(),this.newSection.hide()}},{key:"selectChange",value:function(e){this.selectedUser=this.$(e.target).select2("data"),this.enableButton(""!==this.selectedUser.ID)}},{key:"onMode",value:function(){var e=this;this.modeRadios.each(function(t,n){return e.showSelectedSection(n)}),this.enableButtonIfRequired(),this.closeExistingUserSelect()}},{key:"closeExistingUserSelect",value:function(){this.existingUserSelect.select2("close")}},{key:"showSelectedSection",value:function(e){if((e=this.$(e)).is(":checked"))switch(this.currentMode=e.val(),this.currentMode){case"existing":this.existingSection.show(),this.newSection.hide();break;case"new":this.existingSection.hide(),this.newSection.show()}}},{key:"enableButton",value:function(e){e?this.dialogOK.removeAttr("disabled"):this.dialogOK.attr("disabled","disabled")}},{key:"enableButtonIfRequired",value:function(){if(this.currentMode)switch(this.currentMode){case"new":this.enableButton(this.addTranslationRole.isValid());break;case"existing":this.enableButton(this.selectedUser&&""!==this.selectedUser.ID)}}},{key:"show",value:function(e){(function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(i):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this,e),e&&(this.dialogOK.text(this.section.data("set-languages-text")),this.enableButtonIfRequired())}},{key:"getUserName",value:function(){switch(this.currentMode){case"new":return this.addTranslationRole.getUserName();case"existing":return this.selectedUser.display_name}}},{key:"addTranslationRoleUserViaAjax",value:function(e,t,n){switch(this.enableButton(!1),this.currentMode){case"new":this.addTranslationRole.addNew(t,n,{languagePairs:e});break;case"existing":this.addTranslationRole.setExisting(this.selectedUser.ID,t,n,{languagePairs:e})}}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(i):void 0},a=s(n(2)),r=s(n(0));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,"js-add-translation-manager-dialog",n));return o.translationManagerAddedCallback=i,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default),i(t,[{key:"setupDialog",value:function(){o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setupDialog",this).call(this),this.addTranslationManager=new a.default(this.$,"manager"),this.addTranslationManager.init(this.dialogId,this.dialogElement)}},{key:"getButtons",value:function(){var e=this,n=o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getButtons",this).call(this);return n.push({class:"button-primary alignright "+this.dialogId+"-ok",text:this.dialogElement.data("ok-text"),click:function(){return e.buttonClick()}}),n}},{key:"open",value:function(){this.addTranslationManager.reset(),o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"open",this).call(this)}},{key:"close",value:function(){this.addTranslationManager.closeExistingUserSelect(),o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"close",this).call(this)}},{key:"buttonClick",value:function(){var e=this;this.addTranslationManager.addTranslationRoleUserViaAjax({},this.translationManagerAddedCallback,function(t){return e.translatorFailedCallback(t)})}},{key:"translatorFailedCallback",value:function(e){this.dialogElement.find(".js-error").show().html(e)}},{key:"getFullWidthElements",value:function(){return[".js-select-user"]}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(3));var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$=t,this.content=n,this.addNewTranslationManagerDialog=null,this.observers=[]}return i(e,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.wizardMode=t,this.nonce=this.content.data("nonce"),this.addTranslationManagerButton=this.content.find(".js-add-translation-manager"),this.addTranslationManagerButton.on("click",function(t){return e.openAddTranslationManagerDialog()}),this.managersList=this.$(".js-translation-managers-list"),this.noTranslationManagersMessage=this.$(".js-no-translation-managers"),this.content.find(".js-remove-translation-manager").off("click").on("click",function(t){return e.removeTranslationManager(t)}),this.error=this.content.find(".js-error-message"),this.showOrHideList(),this.setButtonText(),this.wizardMode&&(this.hideHeading(),this.noTranslationManagersMessage.hide())}},{key:"hideHeading",value:function(){this.content.find("h2").hide()}},{key:"openAddTranslationManagerDialog",value:function(){var e=this;this.addNewTranslationManagerDialog||(this.addNewTranslationManagerDialog=new o.default(this.$,this.content,function(t){return e.translationManagerAdded(t)})),this.addNewTranslationManagerDialog.open()}},{key:"translationManagerAdded",value:function(e){var t=this;this.addNewTranslationManagerDialog.close(),this.managersList.prepend(e),this.showOrHideList(),this.setButtonText(),this.content.find(".js-remove-translation-manager").off("click").on("click",function(e){return t.removeTranslationManager(e)}),this.refreshPageIfYouAddedYourself(),this.notifyObservers()}},{key:"showOrHideList",value:function(){this.getManagerCount()?(this.managersList.show(),this.noTranslationManagersMessage.hide()):(this.managersList.hide(),this.wizardMode||this.noTranslationManagersMessage.show())}},{key:"setButtonText",value:function(){this.getManagerCount()?this.addTranslationManagerButton.html(this.addTranslationManagerButton.data("add-text")).removeClass("button-primary").addClass("button-secondary alignright"):this.addTranslationManagerButton.html(this.addTranslationManagerButton.data("set-text")).removeClass("button-secondary alignright").addClass("button-primary")}},{key:"getManagerCount",value:function(){return this.managersList.find("li").length}},{key:"removeTranslationManager",value:function(e){var t=this,n=this.$(e.target).closest("li"),i=n.data("user_id");this.$.ajax({type:"POST",url:ajaxurl,dataType:"json",data:{action:"wpml_remove_translation_manager",nonce:this.nonce,user_id:i},success:function(e){return t.userRemoved(e,n)}})}},{key:"userRemoved",value:function(e,t){var n=this;e.success?t.fadeOut(300,function(){t.remove(),n.showOrHideList(),n.setButtonText(),n.refreshPageIfYouRemoveYourself(t.data("user_id")),n.notifyObservers()}):this.showError(e.data)}},{key:"showError",value:function(e){var t=this;this.error.text(e),this.error.show(),setTimeout(function(){t.error.fadeOut()},5e3)}},{key:"refreshPageIfYouRemoveYourself",value:function(e){0===this.observers.length&&this.content.data("current-user-id")===e&&location.reload()}},{key:"refreshPageIfYouAddedYourself",value:function(){0===this.observers.length&&(this.content.data("current-user-id")===this.managersList.find("li:first").data("user_id")&&location.reload())}},{key:"addObserver",value:function(e){this.observers.push(e)}},{key:"notifyObservers",value:function(){this.observers.forEach(function(e){return e.onTranslationManagerChange()})}}]),e}();t.default=a},function(e,t,n){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(n(4));jQuery(document).ready(function(){new i.default(jQuery,jQuery(".js-translation-managers")).init()})},function(e,t,n){e.exports=n(5)}]);