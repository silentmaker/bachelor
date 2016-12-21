// Compiled by ClojureScript 1.9.229 {}
goog.provide('monkey.components');
goog.require('cljs.core');
goog.require('sablono.core');
monkey.components.monkey_thumbs_up = (function monkey$components$monkey_thumbs_up(data){
return React.createElement("div",null,React.createElement("h1",null,"how many thumbs up you want:",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"likes","likes",792554542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"likes","likes",792554542)], null),cljs.core.inc);
})}),"thumbs up")));
});

//# sourceMappingURL=components.js.map?rel=1482247823423