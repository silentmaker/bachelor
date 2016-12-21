// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35279 = [];
var len__25852__auto___35282 = arguments.length;
var i__25853__auto___35283 = (0);
while(true){
if((i__25853__auto___35283 < len__25852__auto___35282)){
args35279.push((arguments[i__25853__auto___35283]));

var G__35284 = (i__25853__auto___35283 + (1));
i__25853__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var G__35281 = args35279.length;
switch (G__35281) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35279.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25859__auto__ = [];
var len__25852__auto___35287 = arguments.length;
var i__25853__auto___35288 = (0);
while(true){
if((i__25853__auto___35288 < len__25852__auto___35287)){
args__25859__auto__.push((arguments[i__25853__auto___35288]));

var G__35289 = (i__25853__auto___35288 + (1));
i__25853__auto___35288 = G__35289;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35286){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35286));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25859__auto__ = [];
var len__25852__auto___35291 = arguments.length;
var i__25853__auto___35292 = (0);
while(true){
if((i__25853__auto___35292 < len__25852__auto___35291)){
args__25859__auto__.push((arguments[i__25853__auto___35292]));

var G__35293 = (i__25853__auto___35292 + (1));
i__25853__auto___35292 = G__35293;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35290){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35290));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35294 = cljs.core._EQ_;
var expr__35295 = (function (){var or__24777__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35298){if((e35298 instanceof Error)){
var e = e35298;
return false;
} else {
throw e35298;

}
}})();
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35294.call(null,"true",expr__35295))){
return true;
} else {
if(cljs.core.truth_(pred__35294.call(null,"false",expr__35295))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35295)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35300){if((e35300 instanceof Error)){
var e = e35300;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35300;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35301){
var map__35304 = p__35301;
var map__35304__$1 = ((((!((map__35304 == null)))?((((map__35304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35304):map__35304);
var message = cljs.core.get.call(null,map__35304__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35304__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24777__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24765__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24765__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24765__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27900__auto___35466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___35466,ch){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___35466,ch){
return (function (state_35435){
var state_val_35436 = (state_35435[(1)]);
if((state_val_35436 === (7))){
var inst_35431 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
var statearr_35437_35467 = state_35435__$1;
(statearr_35437_35467[(2)] = inst_35431);

(statearr_35437_35467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (1))){
var state_35435__$1 = state_35435;
var statearr_35438_35468 = state_35435__$1;
(statearr_35438_35468[(2)] = null);

(statearr_35438_35468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (4))){
var inst_35388 = (state_35435[(7)]);
var inst_35388__$1 = (state_35435[(2)]);
var state_35435__$1 = (function (){var statearr_35439 = state_35435;
(statearr_35439[(7)] = inst_35388__$1);

return statearr_35439;
})();
if(cljs.core.truth_(inst_35388__$1)){
var statearr_35440_35469 = state_35435__$1;
(statearr_35440_35469[(1)] = (5));

} else {
var statearr_35441_35470 = state_35435__$1;
(statearr_35441_35470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (15))){
var inst_35395 = (state_35435[(8)]);
var inst_35410 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35395);
var inst_35411 = cljs.core.first.call(null,inst_35410);
var inst_35412 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35411);
var inst_35413 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35412)].join('');
var inst_35414 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35413);
var state_35435__$1 = state_35435;
var statearr_35442_35471 = state_35435__$1;
(statearr_35442_35471[(2)] = inst_35414);

(statearr_35442_35471[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (13))){
var inst_35419 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
var statearr_35443_35472 = state_35435__$1;
(statearr_35443_35472[(2)] = inst_35419);

(statearr_35443_35472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (6))){
var state_35435__$1 = state_35435;
var statearr_35444_35473 = state_35435__$1;
(statearr_35444_35473[(2)] = null);

(statearr_35444_35473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (17))){
var inst_35417 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
var statearr_35445_35474 = state_35435__$1;
(statearr_35445_35474[(2)] = inst_35417);

(statearr_35445_35474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (3))){
var inst_35433 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35435__$1,inst_35433);
} else {
if((state_val_35436 === (12))){
var inst_35394 = (state_35435[(9)]);
var inst_35408 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35394,opts);
var state_35435__$1 = state_35435;
if(cljs.core.truth_(inst_35408)){
var statearr_35446_35475 = state_35435__$1;
(statearr_35446_35475[(1)] = (15));

} else {
var statearr_35447_35476 = state_35435__$1;
(statearr_35447_35476[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (2))){
var state_35435__$1 = state_35435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35435__$1,(4),ch);
} else {
if((state_val_35436 === (11))){
var inst_35395 = (state_35435[(8)]);
var inst_35400 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35401 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35395);
var inst_35402 = cljs.core.async.timeout.call(null,(1000));
var inst_35403 = [inst_35401,inst_35402];
var inst_35404 = (new cljs.core.PersistentVector(null,2,(5),inst_35400,inst_35403,null));
var state_35435__$1 = state_35435;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35435__$1,(14),inst_35404);
} else {
if((state_val_35436 === (9))){
var inst_35395 = (state_35435[(8)]);
var inst_35421 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35422 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35395);
var inst_35423 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35422);
var inst_35424 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35423)].join('');
var inst_35425 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35424);
var state_35435__$1 = (function (){var statearr_35448 = state_35435;
(statearr_35448[(10)] = inst_35421);

return statearr_35448;
})();
var statearr_35449_35477 = state_35435__$1;
(statearr_35449_35477[(2)] = inst_35425);

(statearr_35449_35477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (5))){
var inst_35388 = (state_35435[(7)]);
var inst_35390 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35391 = (new cljs.core.PersistentArrayMap(null,2,inst_35390,null));
var inst_35392 = (new cljs.core.PersistentHashSet(null,inst_35391,null));
var inst_35393 = figwheel.client.focus_msgs.call(null,inst_35392,inst_35388);
var inst_35394 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35393);
var inst_35395 = cljs.core.first.call(null,inst_35393);
var inst_35396 = figwheel.client.autoload_QMARK_.call(null);
var state_35435__$1 = (function (){var statearr_35450 = state_35435;
(statearr_35450[(8)] = inst_35395);

(statearr_35450[(9)] = inst_35394);

return statearr_35450;
})();
if(cljs.core.truth_(inst_35396)){
var statearr_35451_35478 = state_35435__$1;
(statearr_35451_35478[(1)] = (8));

} else {
var statearr_35452_35479 = state_35435__$1;
(statearr_35452_35479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (14))){
var inst_35406 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
var statearr_35453_35480 = state_35435__$1;
(statearr_35453_35480[(2)] = inst_35406);

(statearr_35453_35480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (16))){
var state_35435__$1 = state_35435;
var statearr_35454_35481 = state_35435__$1;
(statearr_35454_35481[(2)] = null);

(statearr_35454_35481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (10))){
var inst_35427 = (state_35435[(2)]);
var state_35435__$1 = (function (){var statearr_35455 = state_35435;
(statearr_35455[(11)] = inst_35427);

return statearr_35455;
})();
var statearr_35456_35482 = state_35435__$1;
(statearr_35456_35482[(2)] = null);

(statearr_35456_35482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (8))){
var inst_35394 = (state_35435[(9)]);
var inst_35398 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35394,opts);
var state_35435__$1 = state_35435;
if(cljs.core.truth_(inst_35398)){
var statearr_35457_35483 = state_35435__$1;
(statearr_35457_35483[(1)] = (11));

} else {
var statearr_35458_35484 = state_35435__$1;
(statearr_35458_35484[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27900__auto___35466,ch))
;
return ((function (switch__27788__auto__,c__27900__auto___35466,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27789__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27789__auto____0 = (function (){
var statearr_35462 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35462[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27789__auto__);

(statearr_35462[(1)] = (1));

return statearr_35462;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27789__auto____1 = (function (state_35435){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_35435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e35463){if((e35463 instanceof Object)){
var ex__27792__auto__ = e35463;
var statearr_35464_35485 = state_35435;
(statearr_35464_35485[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35486 = state_35435;
state_35435 = G__35486;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27789__auto__ = function(state_35435){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27789__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27789__auto____1.call(this,state_35435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27789__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27789__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___35466,ch))
})();
var state__27902__auto__ = (function (){var statearr_35465 = f__27901__auto__.call(null);
(statearr_35465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___35466);

return statearr_35465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___35466,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35487_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35487_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35490 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35490){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35489){if((e35489 instanceof Error)){
var e = e35489;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35490], null));
} else {
var e = e35489;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35490))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35491){
var map__35500 = p__35491;
var map__35500__$1 = ((((!((map__35500 == null)))?((((map__35500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35500):map__35500);
var opts = map__35500__$1;
var build_id = cljs.core.get.call(null,map__35500__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35500,map__35500__$1,opts,build_id){
return (function (p__35502){
var vec__35503 = p__35502;
var seq__35504 = cljs.core.seq.call(null,vec__35503);
var first__35505 = cljs.core.first.call(null,seq__35504);
var seq__35504__$1 = cljs.core.next.call(null,seq__35504);
var map__35506 = first__35505;
var map__35506__$1 = ((((!((map__35506 == null)))?((((map__35506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35506):map__35506);
var msg = map__35506__$1;
var msg_name = cljs.core.get.call(null,map__35506__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35504__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35503,seq__35504,first__35505,seq__35504__$1,map__35506,map__35506__$1,msg,msg_name,_,map__35500,map__35500__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35503,seq__35504,first__35505,seq__35504__$1,map__35506,map__35506__$1,msg,msg_name,_,map__35500,map__35500__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35500,map__35500__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35514){
var vec__35515 = p__35514;
var seq__35516 = cljs.core.seq.call(null,vec__35515);
var first__35517 = cljs.core.first.call(null,seq__35516);
var seq__35516__$1 = cljs.core.next.call(null,seq__35516);
var map__35518 = first__35517;
var map__35518__$1 = ((((!((map__35518 == null)))?((((map__35518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35518):map__35518);
var msg = map__35518__$1;
var msg_name = cljs.core.get.call(null,map__35518__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35516__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35520){
var map__35532 = p__35520;
var map__35532__$1 = ((((!((map__35532 == null)))?((((map__35532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35532):map__35532);
var on_compile_warning = cljs.core.get.call(null,map__35532__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35532__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35532,map__35532__$1,on_compile_warning,on_compile_fail){
return (function (p__35534){
var vec__35535 = p__35534;
var seq__35536 = cljs.core.seq.call(null,vec__35535);
var first__35537 = cljs.core.first.call(null,seq__35536);
var seq__35536__$1 = cljs.core.next.call(null,seq__35536);
var map__35538 = first__35537;
var map__35538__$1 = ((((!((map__35538 == null)))?((((map__35538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35538):map__35538);
var msg = map__35538__$1;
var msg_name = cljs.core.get.call(null,map__35538__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35536__$1;
var pred__35540 = cljs.core._EQ_;
var expr__35541 = msg_name;
if(cljs.core.truth_(pred__35540.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35541))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35540.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35541))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35532,map__35532__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto__,msg_hist,msg_names,msg){
return (function (state_35769){
var state_val_35770 = (state_35769[(1)]);
if((state_val_35770 === (7))){
var inst_35689 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
if(cljs.core.truth_(inst_35689)){
var statearr_35771_35821 = state_35769__$1;
(statearr_35771_35821[(1)] = (8));

} else {
var statearr_35772_35822 = state_35769__$1;
(statearr_35772_35822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (20))){
var inst_35763 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
var statearr_35773_35823 = state_35769__$1;
(statearr_35773_35823[(2)] = inst_35763);

(statearr_35773_35823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (27))){
var inst_35759 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
var statearr_35774_35824 = state_35769__$1;
(statearr_35774_35824[(2)] = inst_35759);

(statearr_35774_35824[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (1))){
var inst_35682 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35769__$1 = state_35769;
if(cljs.core.truth_(inst_35682)){
var statearr_35775_35825 = state_35769__$1;
(statearr_35775_35825[(1)] = (2));

} else {
var statearr_35776_35826 = state_35769__$1;
(statearr_35776_35826[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (24))){
var inst_35761 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
var statearr_35777_35827 = state_35769__$1;
(statearr_35777_35827[(2)] = inst_35761);

(statearr_35777_35827[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (4))){
var inst_35767 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35769__$1,inst_35767);
} else {
if((state_val_35770 === (15))){
var inst_35765 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
var statearr_35778_35828 = state_35769__$1;
(statearr_35778_35828[(2)] = inst_35765);

(statearr_35778_35828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (21))){
var inst_35718 = (state_35769[(2)]);
var inst_35719 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35720 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35719);
var state_35769__$1 = (function (){var statearr_35779 = state_35769;
(statearr_35779[(7)] = inst_35718);

return statearr_35779;
})();
var statearr_35780_35829 = state_35769__$1;
(statearr_35780_35829[(2)] = inst_35720);

(statearr_35780_35829[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (31))){
var inst_35748 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35769__$1 = state_35769;
if(cljs.core.truth_(inst_35748)){
var statearr_35781_35830 = state_35769__$1;
(statearr_35781_35830[(1)] = (34));

} else {
var statearr_35782_35831 = state_35769__$1;
(statearr_35782_35831[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (32))){
var inst_35757 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
var statearr_35783_35832 = state_35769__$1;
(statearr_35783_35832[(2)] = inst_35757);

(statearr_35783_35832[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (33))){
var inst_35744 = (state_35769[(2)]);
var inst_35745 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35746 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35745);
var state_35769__$1 = (function (){var statearr_35784 = state_35769;
(statearr_35784[(8)] = inst_35744);

return statearr_35784;
})();
var statearr_35785_35833 = state_35769__$1;
(statearr_35785_35833[(2)] = inst_35746);

(statearr_35785_35833[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (13))){
var inst_35703 = figwheel.client.heads_up.clear.call(null);
var state_35769__$1 = state_35769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35769__$1,(16),inst_35703);
} else {
if((state_val_35770 === (22))){
var inst_35724 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35725 = figwheel.client.heads_up.append_warning_message.call(null,inst_35724);
var state_35769__$1 = state_35769;
var statearr_35786_35834 = state_35769__$1;
(statearr_35786_35834[(2)] = inst_35725);

(statearr_35786_35834[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (36))){
var inst_35755 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
var statearr_35787_35835 = state_35769__$1;
(statearr_35787_35835[(2)] = inst_35755);

(statearr_35787_35835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (29))){
var inst_35735 = (state_35769[(2)]);
var inst_35736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35737 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35736);
var state_35769__$1 = (function (){var statearr_35788 = state_35769;
(statearr_35788[(9)] = inst_35735);

return statearr_35788;
})();
var statearr_35789_35836 = state_35769__$1;
(statearr_35789_35836[(2)] = inst_35737);

(statearr_35789_35836[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (6))){
var inst_35684 = (state_35769[(10)]);
var state_35769__$1 = state_35769;
var statearr_35790_35837 = state_35769__$1;
(statearr_35790_35837[(2)] = inst_35684);

(statearr_35790_35837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (28))){
var inst_35731 = (state_35769[(2)]);
var inst_35732 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35733 = figwheel.client.heads_up.display_warning.call(null,inst_35732);
var state_35769__$1 = (function (){var statearr_35791 = state_35769;
(statearr_35791[(11)] = inst_35731);

return statearr_35791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35769__$1,(29),inst_35733);
} else {
if((state_val_35770 === (25))){
var inst_35729 = figwheel.client.heads_up.clear.call(null);
var state_35769__$1 = state_35769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35769__$1,(28),inst_35729);
} else {
if((state_val_35770 === (34))){
var inst_35750 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35769__$1 = state_35769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35769__$1,(37),inst_35750);
} else {
if((state_val_35770 === (17))){
var inst_35709 = (state_35769[(2)]);
var inst_35710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35711 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35710);
var state_35769__$1 = (function (){var statearr_35792 = state_35769;
(statearr_35792[(12)] = inst_35709);

return statearr_35792;
})();
var statearr_35793_35838 = state_35769__$1;
(statearr_35793_35838[(2)] = inst_35711);

(statearr_35793_35838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (3))){
var inst_35701 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35769__$1 = state_35769;
if(cljs.core.truth_(inst_35701)){
var statearr_35794_35839 = state_35769__$1;
(statearr_35794_35839[(1)] = (13));

} else {
var statearr_35795_35840 = state_35769__$1;
(statearr_35795_35840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (12))){
var inst_35697 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
var statearr_35796_35841 = state_35769__$1;
(statearr_35796_35841[(2)] = inst_35697);

(statearr_35796_35841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (2))){
var inst_35684 = (state_35769[(10)]);
var inst_35684__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35769__$1 = (function (){var statearr_35797 = state_35769;
(statearr_35797[(10)] = inst_35684__$1);

return statearr_35797;
})();
if(cljs.core.truth_(inst_35684__$1)){
var statearr_35798_35842 = state_35769__$1;
(statearr_35798_35842[(1)] = (5));

} else {
var statearr_35799_35843 = state_35769__$1;
(statearr_35799_35843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (23))){
var inst_35727 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35769__$1 = state_35769;
if(cljs.core.truth_(inst_35727)){
var statearr_35800_35844 = state_35769__$1;
(statearr_35800_35844[(1)] = (25));

} else {
var statearr_35801_35845 = state_35769__$1;
(statearr_35801_35845[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (35))){
var state_35769__$1 = state_35769;
var statearr_35802_35846 = state_35769__$1;
(statearr_35802_35846[(2)] = null);

(statearr_35802_35846[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (19))){
var inst_35722 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35769__$1 = state_35769;
if(cljs.core.truth_(inst_35722)){
var statearr_35803_35847 = state_35769__$1;
(statearr_35803_35847[(1)] = (22));

} else {
var statearr_35804_35848 = state_35769__$1;
(statearr_35804_35848[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (11))){
var inst_35693 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
var statearr_35805_35849 = state_35769__$1;
(statearr_35805_35849[(2)] = inst_35693);

(statearr_35805_35849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (9))){
var inst_35695 = figwheel.client.heads_up.clear.call(null);
var state_35769__$1 = state_35769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35769__$1,(12),inst_35695);
} else {
if((state_val_35770 === (5))){
var inst_35686 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35769__$1 = state_35769;
var statearr_35806_35850 = state_35769__$1;
(statearr_35806_35850[(2)] = inst_35686);

(statearr_35806_35850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (14))){
var inst_35713 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35769__$1 = state_35769;
if(cljs.core.truth_(inst_35713)){
var statearr_35807_35851 = state_35769__$1;
(statearr_35807_35851[(1)] = (18));

} else {
var statearr_35808_35852 = state_35769__$1;
(statearr_35808_35852[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (26))){
var inst_35739 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35769__$1 = state_35769;
if(cljs.core.truth_(inst_35739)){
var statearr_35809_35853 = state_35769__$1;
(statearr_35809_35853[(1)] = (30));

} else {
var statearr_35810_35854 = state_35769__$1;
(statearr_35810_35854[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (16))){
var inst_35705 = (state_35769[(2)]);
var inst_35706 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35707 = figwheel.client.heads_up.display_exception.call(null,inst_35706);
var state_35769__$1 = (function (){var statearr_35811 = state_35769;
(statearr_35811[(13)] = inst_35705);

return statearr_35811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35769__$1,(17),inst_35707);
} else {
if((state_val_35770 === (30))){
var inst_35741 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35742 = figwheel.client.heads_up.display_warning.call(null,inst_35741);
var state_35769__$1 = state_35769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35769__$1,(33),inst_35742);
} else {
if((state_val_35770 === (10))){
var inst_35699 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
var statearr_35812_35855 = state_35769__$1;
(statearr_35812_35855[(2)] = inst_35699);

(statearr_35812_35855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (18))){
var inst_35715 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35716 = figwheel.client.heads_up.display_exception.call(null,inst_35715);
var state_35769__$1 = state_35769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35769__$1,(21),inst_35716);
} else {
if((state_val_35770 === (37))){
var inst_35752 = (state_35769[(2)]);
var state_35769__$1 = state_35769;
var statearr_35813_35856 = state_35769__$1;
(statearr_35813_35856[(2)] = inst_35752);

(statearr_35813_35856[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35770 === (8))){
var inst_35691 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35769__$1 = state_35769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35769__$1,(11),inst_35691);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27900__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27788__auto__,c__27900__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto____0 = (function (){
var statearr_35817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35817[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto__);

(statearr_35817[(1)] = (1));

return statearr_35817;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto____1 = (function (state_35769){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_35769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e35818){if((e35818 instanceof Object)){
var ex__27792__auto__ = e35818;
var statearr_35819_35857 = state_35769;
(statearr_35819_35857[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35858 = state_35769;
state_35769 = G__35858;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto__ = function(state_35769){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto____1.call(this,state_35769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto__,msg_hist,msg_names,msg))
})();
var state__27902__auto__ = (function (){var statearr_35820 = f__27901__auto__.call(null);
(statearr_35820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto__);

return statearr_35820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__,msg_hist,msg_names,msg))
);

return c__27900__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27900__auto___35921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___35921,ch){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___35921,ch){
return (function (state_35904){
var state_val_35905 = (state_35904[(1)]);
if((state_val_35905 === (1))){
var state_35904__$1 = state_35904;
var statearr_35906_35922 = state_35904__$1;
(statearr_35906_35922[(2)] = null);

(statearr_35906_35922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (2))){
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35904__$1,(4),ch);
} else {
if((state_val_35905 === (3))){
var inst_35902 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35904__$1,inst_35902);
} else {
if((state_val_35905 === (4))){
var inst_35892 = (state_35904[(7)]);
var inst_35892__$1 = (state_35904[(2)]);
var state_35904__$1 = (function (){var statearr_35907 = state_35904;
(statearr_35907[(7)] = inst_35892__$1);

return statearr_35907;
})();
if(cljs.core.truth_(inst_35892__$1)){
var statearr_35908_35923 = state_35904__$1;
(statearr_35908_35923[(1)] = (5));

} else {
var statearr_35909_35924 = state_35904__$1;
(statearr_35909_35924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (5))){
var inst_35892 = (state_35904[(7)]);
var inst_35894 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35892);
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35904__$1,(8),inst_35894);
} else {
if((state_val_35905 === (6))){
var state_35904__$1 = state_35904;
var statearr_35910_35925 = state_35904__$1;
(statearr_35910_35925[(2)] = null);

(statearr_35910_35925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (7))){
var inst_35900 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35911_35926 = state_35904__$1;
(statearr_35911_35926[(2)] = inst_35900);

(statearr_35911_35926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (8))){
var inst_35896 = (state_35904[(2)]);
var state_35904__$1 = (function (){var statearr_35912 = state_35904;
(statearr_35912[(8)] = inst_35896);

return statearr_35912;
})();
var statearr_35913_35927 = state_35904__$1;
(statearr_35913_35927[(2)] = null);

(statearr_35913_35927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27900__auto___35921,ch))
;
return ((function (switch__27788__auto__,c__27900__auto___35921,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27789__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27789__auto____0 = (function (){
var statearr_35917 = [null,null,null,null,null,null,null,null,null];
(statearr_35917[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27789__auto__);

(statearr_35917[(1)] = (1));

return statearr_35917;
});
var figwheel$client$heads_up_plugin_$_state_machine__27789__auto____1 = (function (state_35904){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_35904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e35918){if((e35918 instanceof Object)){
var ex__27792__auto__ = e35918;
var statearr_35919_35928 = state_35904;
(statearr_35919_35928[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35929 = state_35904;
state_35904 = G__35929;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27789__auto__ = function(state_35904){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27789__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27789__auto____1.call(this,state_35904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27789__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27789__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___35921,ch))
})();
var state__27902__auto__ = (function (){var statearr_35920 = f__27901__auto__.call(null);
(statearr_35920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___35921);

return statearr_35920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___35921,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto__){
return (function (state_35950){
var state_val_35951 = (state_35950[(1)]);
if((state_val_35951 === (1))){
var inst_35945 = cljs.core.async.timeout.call(null,(3000));
var state_35950__$1 = state_35950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35950__$1,(2),inst_35945);
} else {
if((state_val_35951 === (2))){
var inst_35947 = (state_35950[(2)]);
var inst_35948 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35950__$1 = (function (){var statearr_35952 = state_35950;
(statearr_35952[(7)] = inst_35947);

return statearr_35952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35950__$1,inst_35948);
} else {
return null;
}
}
});})(c__27900__auto__))
;
return ((function (switch__27788__auto__,c__27900__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27789__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27789__auto____0 = (function (){
var statearr_35956 = [null,null,null,null,null,null,null,null];
(statearr_35956[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27789__auto__);

(statearr_35956[(1)] = (1));

return statearr_35956;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27789__auto____1 = (function (state_35950){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_35950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e35957){if((e35957 instanceof Object)){
var ex__27792__auto__ = e35957;
var statearr_35958_35960 = state_35950;
(statearr_35958_35960[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35961 = state_35950;
state_35950 = G__35961;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27789__auto__ = function(state_35950){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27789__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27789__auto____1.call(this,state_35950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27789__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27789__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto__))
})();
var state__27902__auto__ = (function (){var statearr_35959 = f__27901__auto__.call(null);
(statearr_35959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto__);

return statearr_35959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__))
);

return c__27900__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35984){
var state_val_35985 = (state_35984[(1)]);
if((state_val_35985 === (1))){
var inst_35978 = cljs.core.async.timeout.call(null,(2000));
var state_35984__$1 = state_35984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35984__$1,(2),inst_35978);
} else {
if((state_val_35985 === (2))){
var inst_35980 = (state_35984[(2)]);
var inst_35981 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35982 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35981);
var state_35984__$1 = (function (){var statearr_35986 = state_35984;
(statearr_35986[(7)] = inst_35980);

return statearr_35986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35984__$1,inst_35982);
} else {
return null;
}
}
});})(c__27900__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27788__auto__,c__27900__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto____0 = (function (){
var statearr_35990 = [null,null,null,null,null,null,null,null];
(statearr_35990[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto__);

(statearr_35990[(1)] = (1));

return statearr_35990;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto____1 = (function (state_35984){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_35984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e35991){if((e35991 instanceof Object)){
var ex__27792__auto__ = e35991;
var statearr_35992_35994 = state_35984;
(statearr_35992_35994[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35995 = state_35984;
state_35984 = G__35995;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto__ = function(state_35984){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto____1.call(this,state_35984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27902__auto__ = (function (){var statearr_35993 = f__27901__auto__.call(null);
(statearr_35993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto__);

return statearr_35993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__,figwheel_version,temp__4657__auto__))
);

return c__27900__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35996){
var map__36000 = p__35996;
var map__36000__$1 = ((((!((map__36000 == null)))?((((map__36000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36000):map__36000);
var file = cljs.core.get.call(null,map__36000__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36000__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36000__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36002 = "";
var G__36002__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36002),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36002);
var G__36002__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36002__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36002__$1);
if(cljs.core.truth_((function (){var and__24765__auto__ = line;
if(cljs.core.truth_(and__24765__auto__)){
return column;
} else {
return and__24765__auto__;
}
})())){
return [cljs.core.str(G__36002__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36002__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36003){
var map__36010 = p__36003;
var map__36010__$1 = ((((!((map__36010 == null)))?((((map__36010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36010):map__36010);
var ed = map__36010__$1;
var formatted_exception = cljs.core.get.call(null,map__36010__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36010__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36010__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36012_36016 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36013_36017 = null;
var count__36014_36018 = (0);
var i__36015_36019 = (0);
while(true){
if((i__36015_36019 < count__36014_36018)){
var msg_36020 = cljs.core._nth.call(null,chunk__36013_36017,i__36015_36019);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36020);

var G__36021 = seq__36012_36016;
var G__36022 = chunk__36013_36017;
var G__36023 = count__36014_36018;
var G__36024 = (i__36015_36019 + (1));
seq__36012_36016 = G__36021;
chunk__36013_36017 = G__36022;
count__36014_36018 = G__36023;
i__36015_36019 = G__36024;
continue;
} else {
var temp__4657__auto___36025 = cljs.core.seq.call(null,seq__36012_36016);
if(temp__4657__auto___36025){
var seq__36012_36026__$1 = temp__4657__auto___36025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36012_36026__$1)){
var c__25588__auto___36027 = cljs.core.chunk_first.call(null,seq__36012_36026__$1);
var G__36028 = cljs.core.chunk_rest.call(null,seq__36012_36026__$1);
var G__36029 = c__25588__auto___36027;
var G__36030 = cljs.core.count.call(null,c__25588__auto___36027);
var G__36031 = (0);
seq__36012_36016 = G__36028;
chunk__36013_36017 = G__36029;
count__36014_36018 = G__36030;
i__36015_36019 = G__36031;
continue;
} else {
var msg_36032 = cljs.core.first.call(null,seq__36012_36026__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36032);

var G__36033 = cljs.core.next.call(null,seq__36012_36026__$1);
var G__36034 = null;
var G__36035 = (0);
var G__36036 = (0);
seq__36012_36016 = G__36033;
chunk__36013_36017 = G__36034;
count__36014_36018 = G__36035;
i__36015_36019 = G__36036;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36037){
var map__36040 = p__36037;
var map__36040__$1 = ((((!((map__36040 == null)))?((((map__36040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36040):map__36040);
var w = map__36040__$1;
var message = cljs.core.get.call(null,map__36040__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24765__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24765__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24765__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36052 = cljs.core.seq.call(null,plugins);
var chunk__36053 = null;
var count__36054 = (0);
var i__36055 = (0);
while(true){
if((i__36055 < count__36054)){
var vec__36056 = cljs.core._nth.call(null,chunk__36053,i__36055);
var k = cljs.core.nth.call(null,vec__36056,(0),null);
var plugin = cljs.core.nth.call(null,vec__36056,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36062 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36052,chunk__36053,count__36054,i__36055,pl_36062,vec__36056,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36062.call(null,msg_hist);
});})(seq__36052,chunk__36053,count__36054,i__36055,pl_36062,vec__36056,k,plugin))
);
} else {
}

var G__36063 = seq__36052;
var G__36064 = chunk__36053;
var G__36065 = count__36054;
var G__36066 = (i__36055 + (1));
seq__36052 = G__36063;
chunk__36053 = G__36064;
count__36054 = G__36065;
i__36055 = G__36066;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36052);
if(temp__4657__auto__){
var seq__36052__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36052__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__36052__$1);
var G__36067 = cljs.core.chunk_rest.call(null,seq__36052__$1);
var G__36068 = c__25588__auto__;
var G__36069 = cljs.core.count.call(null,c__25588__auto__);
var G__36070 = (0);
seq__36052 = G__36067;
chunk__36053 = G__36068;
count__36054 = G__36069;
i__36055 = G__36070;
continue;
} else {
var vec__36059 = cljs.core.first.call(null,seq__36052__$1);
var k = cljs.core.nth.call(null,vec__36059,(0),null);
var plugin = cljs.core.nth.call(null,vec__36059,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36071 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36052,chunk__36053,count__36054,i__36055,pl_36071,vec__36059,k,plugin,seq__36052__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36071.call(null,msg_hist);
});})(seq__36052,chunk__36053,count__36054,i__36055,pl_36071,vec__36059,k,plugin,seq__36052__$1,temp__4657__auto__))
);
} else {
}

var G__36072 = cljs.core.next.call(null,seq__36052__$1);
var G__36073 = null;
var G__36074 = (0);
var G__36075 = (0);
seq__36052 = G__36072;
chunk__36053 = G__36073;
count__36054 = G__36074;
i__36055 = G__36075;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36076 = [];
var len__25852__auto___36083 = arguments.length;
var i__25853__auto___36084 = (0);
while(true){
if((i__25853__auto___36084 < len__25852__auto___36083)){
args36076.push((arguments[i__25853__auto___36084]));

var G__36085 = (i__25853__auto___36084 + (1));
i__25853__auto___36084 = G__36085;
continue;
} else {
}
break;
}

var G__36078 = args36076.length;
switch (G__36078) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36076.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36079_36087 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36080_36088 = null;
var count__36081_36089 = (0);
var i__36082_36090 = (0);
while(true){
if((i__36082_36090 < count__36081_36089)){
var msg_36091 = cljs.core._nth.call(null,chunk__36080_36088,i__36082_36090);
figwheel.client.socket.handle_incoming_message.call(null,msg_36091);

var G__36092 = seq__36079_36087;
var G__36093 = chunk__36080_36088;
var G__36094 = count__36081_36089;
var G__36095 = (i__36082_36090 + (1));
seq__36079_36087 = G__36092;
chunk__36080_36088 = G__36093;
count__36081_36089 = G__36094;
i__36082_36090 = G__36095;
continue;
} else {
var temp__4657__auto___36096 = cljs.core.seq.call(null,seq__36079_36087);
if(temp__4657__auto___36096){
var seq__36079_36097__$1 = temp__4657__auto___36096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36079_36097__$1)){
var c__25588__auto___36098 = cljs.core.chunk_first.call(null,seq__36079_36097__$1);
var G__36099 = cljs.core.chunk_rest.call(null,seq__36079_36097__$1);
var G__36100 = c__25588__auto___36098;
var G__36101 = cljs.core.count.call(null,c__25588__auto___36098);
var G__36102 = (0);
seq__36079_36087 = G__36099;
chunk__36080_36088 = G__36100;
count__36081_36089 = G__36101;
i__36082_36090 = G__36102;
continue;
} else {
var msg_36103 = cljs.core.first.call(null,seq__36079_36097__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36103);

var G__36104 = cljs.core.next.call(null,seq__36079_36097__$1);
var G__36105 = null;
var G__36106 = (0);
var G__36107 = (0);
seq__36079_36087 = G__36104;
chunk__36080_36088 = G__36105;
count__36081_36089 = G__36106;
i__36082_36090 = G__36107;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25859__auto__ = [];
var len__25852__auto___36112 = arguments.length;
var i__25853__auto___36113 = (0);
while(true){
if((i__25853__auto___36113 < len__25852__auto___36112)){
args__25859__auto__.push((arguments[i__25853__auto___36113]));

var G__36114 = (i__25853__auto___36113 + (1));
i__25853__auto___36113 = G__36114;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36109){
var map__36110 = p__36109;
var map__36110__$1 = ((((!((map__36110 == null)))?((((map__36110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36110):map__36110);
var opts = map__36110__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36108){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36108));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36116){if((e36116 instanceof Error)){
var e = e36116;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36116;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36120){
var map__36121 = p__36120;
var map__36121__$1 = ((((!((map__36121 == null)))?((((map__36121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36121):map__36121);
var msg_name = cljs.core.get.call(null,map__36121__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1482247112921