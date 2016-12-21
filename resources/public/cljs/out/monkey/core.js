// Compiled by ClojureScript 1.9.229 {}
goog.provide('monkey.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('monkey.components');
monkey.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"likes","likes",792554542),(0)], null));
monkey.core.render_BANG_ = (function monkey$core$render_BANG_(){
return ReactDOM.render(monkey.components.monkey_thumbs_up.call(null,monkey.core.app_state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,monkey.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return monkey.core.render_BANG_.call(null);
}));
monkey.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1482247823431