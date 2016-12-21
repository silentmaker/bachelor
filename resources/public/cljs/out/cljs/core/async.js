// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27945 = [];
var len__25852__auto___27951 = arguments.length;
var i__25853__auto___27952 = (0);
while(true){
if((i__25853__auto___27952 < len__25852__auto___27951)){
args27945.push((arguments[i__25853__auto___27952]));

var G__27953 = (i__25853__auto___27952 + (1));
i__25853__auto___27952 = G__27953;
continue;
} else {
}
break;
}

var G__27947 = args27945.length;
switch (G__27947) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27945.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27948 = (function (f,blockable,meta27949){
this.f = f;
this.blockable = blockable;
this.meta27949 = meta27949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27950,meta27949__$1){
var self__ = this;
var _27950__$1 = this;
return (new cljs.core.async.t_cljs$core$async27948(self__.f,self__.blockable,meta27949__$1));
});

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27950){
var self__ = this;
var _27950__$1 = this;
return self__.meta27949;
});

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27949","meta27949",-103753118,null)], null);
});

cljs.core.async.t_cljs$core$async27948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27948";

cljs.core.async.t_cljs$core$async27948.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async27948");
});

cljs.core.async.__GT_t_cljs$core$async27948 = (function cljs$core$async$__GT_t_cljs$core$async27948(f__$1,blockable__$1,meta27949){
return (new cljs.core.async.t_cljs$core$async27948(f__$1,blockable__$1,meta27949));
});

}

return (new cljs.core.async.t_cljs$core$async27948(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27957 = [];
var len__25852__auto___27960 = arguments.length;
var i__25853__auto___27961 = (0);
while(true){
if((i__25853__auto___27961 < len__25852__auto___27960)){
args27957.push((arguments[i__25853__auto___27961]));

var G__27962 = (i__25853__auto___27961 + (1));
i__25853__auto___27961 = G__27962;
continue;
} else {
}
break;
}

var G__27959 = args27957.length;
switch (G__27959) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27957.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27964 = [];
var len__25852__auto___27967 = arguments.length;
var i__25853__auto___27968 = (0);
while(true){
if((i__25853__auto___27968 < len__25852__auto___27967)){
args27964.push((arguments[i__25853__auto___27968]));

var G__27969 = (i__25853__auto___27968 + (1));
i__25853__auto___27968 = G__27969;
continue;
} else {
}
break;
}

var G__27966 = args27964.length;
switch (G__27966) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27964.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27971 = [];
var len__25852__auto___27974 = arguments.length;
var i__25853__auto___27975 = (0);
while(true){
if((i__25853__auto___27975 < len__25852__auto___27974)){
args27971.push((arguments[i__25853__auto___27975]));

var G__27976 = (i__25853__auto___27975 + (1));
i__25853__auto___27975 = G__27976;
continue;
} else {
}
break;
}

var G__27973 = args27971.length;
switch (G__27973) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27971.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27978 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27978);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27978,ret){
return (function (){
return fn1.call(null,val_27978);
});})(val_27978,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27979 = [];
var len__25852__auto___27982 = arguments.length;
var i__25853__auto___27983 = (0);
while(true){
if((i__25853__auto___27983 < len__25852__auto___27982)){
args27979.push((arguments[i__25853__auto___27983]));

var G__27984 = (i__25853__auto___27983 + (1));
i__25853__auto___27983 = G__27984;
continue;
} else {
}
break;
}

var G__27981 = args27979.length;
switch (G__27981) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27979.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25692__auto___27986 = n;
var x_27987 = (0);
while(true){
if((x_27987 < n__25692__auto___27986)){
(a[x_27987] = (0));

var G__27988 = (x_27987 + (1));
x_27987 = G__27988;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27989 = (i + (1));
i = G__27989;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27993 = (function (alt_flag,flag,meta27994){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27994 = meta27994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27995,meta27994__$1){
var self__ = this;
var _27995__$1 = this;
return (new cljs.core.async.t_cljs$core$async27993(self__.alt_flag,self__.flag,meta27994__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27995){
var self__ = this;
var _27995__$1 = this;
return self__.meta27994;
});})(flag))
;

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27993.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27994","meta27994",-1286728382,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27993";

cljs.core.async.t_cljs$core$async27993.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async27993");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27993 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27993(alt_flag__$1,flag__$1,meta27994){
return (new cljs.core.async.t_cljs$core$async27993(alt_flag__$1,flag__$1,meta27994));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27993(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27999 = (function (alt_handler,flag,cb,meta28000){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28000 = meta28000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28001,meta28000__$1){
var self__ = this;
var _28001__$1 = this;
return (new cljs.core.async.t_cljs$core$async27999(self__.alt_handler,self__.flag,self__.cb,meta28000__$1));
});

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28001){
var self__ = this;
var _28001__$1 = this;
return self__.meta28000;
});

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28000","meta28000",897413568,null)], null);
});

cljs.core.async.t_cljs$core$async27999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27999";

cljs.core.async.t_cljs$core$async27999.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async27999");
});

cljs.core.async.__GT_t_cljs$core$async27999 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27999(alt_handler__$1,flag__$1,cb__$1,meta28000){
return (new cljs.core.async.t_cljs$core$async27999(alt_handler__$1,flag__$1,cb__$1,meta28000));
});

}

return (new cljs.core.async.t_cljs$core$async27999(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28002_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28002_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28003_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28003_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24777__auto__ = wport;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28004 = (i + (1));
i = G__28004;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24777__auto__ = ret;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24765__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24765__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24765__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___28010 = arguments.length;
var i__25853__auto___28011 = (0);
while(true){
if((i__25853__auto___28011 < len__25852__auto___28010)){
args__25859__auto__.push((arguments[i__25853__auto___28011]));

var G__28012 = (i__25853__auto___28011 + (1));
i__25853__auto___28011 = G__28012;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28007){
var map__28008 = p__28007;
var map__28008__$1 = ((((!((map__28008 == null)))?((((map__28008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28008):map__28008);
var opts = map__28008__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28005){
var G__28006 = cljs.core.first.call(null,seq28005);
var seq28005__$1 = cljs.core.next.call(null,seq28005);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28006,seq28005__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28013 = [];
var len__25852__auto___28063 = arguments.length;
var i__25853__auto___28064 = (0);
while(true){
if((i__25853__auto___28064 < len__25852__auto___28063)){
args28013.push((arguments[i__25853__auto___28064]));

var G__28065 = (i__25853__auto___28064 + (1));
i__25853__auto___28064 = G__28065;
continue;
} else {
}
break;
}

var G__28015 = args28013.length;
switch (G__28015) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28013.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27900__auto___28067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___28067){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___28067){
return (function (state_28039){
var state_val_28040 = (state_28039[(1)]);
if((state_val_28040 === (7))){
var inst_28035 = (state_28039[(2)]);
var state_28039__$1 = state_28039;
var statearr_28041_28068 = state_28039__$1;
(statearr_28041_28068[(2)] = inst_28035);

(statearr_28041_28068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28040 === (1))){
var state_28039__$1 = state_28039;
var statearr_28042_28069 = state_28039__$1;
(statearr_28042_28069[(2)] = null);

(statearr_28042_28069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28040 === (4))){
var inst_28018 = (state_28039[(7)]);
var inst_28018__$1 = (state_28039[(2)]);
var inst_28019 = (inst_28018__$1 == null);
var state_28039__$1 = (function (){var statearr_28043 = state_28039;
(statearr_28043[(7)] = inst_28018__$1);

return statearr_28043;
})();
if(cljs.core.truth_(inst_28019)){
var statearr_28044_28070 = state_28039__$1;
(statearr_28044_28070[(1)] = (5));

} else {
var statearr_28045_28071 = state_28039__$1;
(statearr_28045_28071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28040 === (13))){
var state_28039__$1 = state_28039;
var statearr_28046_28072 = state_28039__$1;
(statearr_28046_28072[(2)] = null);

(statearr_28046_28072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28040 === (6))){
var inst_28018 = (state_28039[(7)]);
var state_28039__$1 = state_28039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28039__$1,(11),to,inst_28018);
} else {
if((state_val_28040 === (3))){
var inst_28037 = (state_28039[(2)]);
var state_28039__$1 = state_28039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28039__$1,inst_28037);
} else {
if((state_val_28040 === (12))){
var state_28039__$1 = state_28039;
var statearr_28047_28073 = state_28039__$1;
(statearr_28047_28073[(2)] = null);

(statearr_28047_28073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28040 === (2))){
var state_28039__$1 = state_28039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28039__$1,(4),from);
} else {
if((state_val_28040 === (11))){
var inst_28028 = (state_28039[(2)]);
var state_28039__$1 = state_28039;
if(cljs.core.truth_(inst_28028)){
var statearr_28048_28074 = state_28039__$1;
(statearr_28048_28074[(1)] = (12));

} else {
var statearr_28049_28075 = state_28039__$1;
(statearr_28049_28075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28040 === (9))){
var state_28039__$1 = state_28039;
var statearr_28050_28076 = state_28039__$1;
(statearr_28050_28076[(2)] = null);

(statearr_28050_28076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28040 === (5))){
var state_28039__$1 = state_28039;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28051_28077 = state_28039__$1;
(statearr_28051_28077[(1)] = (8));

} else {
var statearr_28052_28078 = state_28039__$1;
(statearr_28052_28078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28040 === (14))){
var inst_28033 = (state_28039[(2)]);
var state_28039__$1 = state_28039;
var statearr_28053_28079 = state_28039__$1;
(statearr_28053_28079[(2)] = inst_28033);

(statearr_28053_28079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28040 === (10))){
var inst_28025 = (state_28039[(2)]);
var state_28039__$1 = state_28039;
var statearr_28054_28080 = state_28039__$1;
(statearr_28054_28080[(2)] = inst_28025);

(statearr_28054_28080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28040 === (8))){
var inst_28022 = cljs.core.async.close_BANG_.call(null,to);
var state_28039__$1 = state_28039;
var statearr_28055_28081 = state_28039__$1;
(statearr_28055_28081[(2)] = inst_28022);

(statearr_28055_28081[(1)] = (10));


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
});})(c__27900__auto___28067))
;
return ((function (switch__27788__auto__,c__27900__auto___28067){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_28059 = [null,null,null,null,null,null,null,null];
(statearr_28059[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_28059[(1)] = (1));

return statearr_28059;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_28039){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_28039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e28060){if((e28060 instanceof Object)){
var ex__27792__auto__ = e28060;
var statearr_28061_28082 = state_28039;
(statearr_28061_28082[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28083 = state_28039;
state_28039 = G__28083;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_28039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_28039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___28067))
})();
var state__27902__auto__ = (function (){var statearr_28062 = f__27901__auto__.call(null);
(statearr_28062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___28067);

return statearr_28062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___28067))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28271){
var vec__28272 = p__28271;
var v = cljs.core.nth.call(null,vec__28272,(0),null);
var p = cljs.core.nth.call(null,vec__28272,(1),null);
var job = vec__28272;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27900__auto___28458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___28458,res,vec__28272,v,p,job,jobs,results){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___28458,res,vec__28272,v,p,job,jobs,results){
return (function (state_28279){
var state_val_28280 = (state_28279[(1)]);
if((state_val_28280 === (1))){
var state_28279__$1 = state_28279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28279__$1,(2),res,v);
} else {
if((state_val_28280 === (2))){
var inst_28276 = (state_28279[(2)]);
var inst_28277 = cljs.core.async.close_BANG_.call(null,res);
var state_28279__$1 = (function (){var statearr_28281 = state_28279;
(statearr_28281[(7)] = inst_28276);

return statearr_28281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28279__$1,inst_28277);
} else {
return null;
}
}
});})(c__27900__auto___28458,res,vec__28272,v,p,job,jobs,results))
;
return ((function (switch__27788__auto__,c__27900__auto___28458,res,vec__28272,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0 = (function (){
var statearr_28285 = [null,null,null,null,null,null,null,null];
(statearr_28285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__);

(statearr_28285[(1)] = (1));

return statearr_28285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1 = (function (state_28279){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_28279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e28286){if((e28286 instanceof Object)){
var ex__27792__auto__ = e28286;
var statearr_28287_28459 = state_28279;
(statearr_28287_28459[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28460 = state_28279;
state_28279 = G__28460;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__ = function(state_28279){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1.call(this,state_28279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___28458,res,vec__28272,v,p,job,jobs,results))
})();
var state__27902__auto__ = (function (){var statearr_28288 = f__27901__auto__.call(null);
(statearr_28288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___28458);

return statearr_28288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___28458,res,vec__28272,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28289){
var vec__28290 = p__28289;
var v = cljs.core.nth.call(null,vec__28290,(0),null);
var p = cljs.core.nth.call(null,vec__28290,(1),null);
var job = vec__28290;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25692__auto___28461 = n;
var __28462 = (0);
while(true){
if((__28462 < n__25692__auto___28461)){
var G__28293_28463 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28293_28463) {
case "compute":
var c__27900__auto___28465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28462,c__27900__auto___28465,G__28293_28463,n__25692__auto___28461,jobs,results,process,async){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (__28462,c__27900__auto___28465,G__28293_28463,n__25692__auto___28461,jobs,results,process,async){
return (function (state_28306){
var state_val_28307 = (state_28306[(1)]);
if((state_val_28307 === (1))){
var state_28306__$1 = state_28306;
var statearr_28308_28466 = state_28306__$1;
(statearr_28308_28466[(2)] = null);

(statearr_28308_28466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (2))){
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28306__$1,(4),jobs);
} else {
if((state_val_28307 === (3))){
var inst_28304 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28306__$1,inst_28304);
} else {
if((state_val_28307 === (4))){
var inst_28296 = (state_28306[(2)]);
var inst_28297 = process.call(null,inst_28296);
var state_28306__$1 = state_28306;
if(cljs.core.truth_(inst_28297)){
var statearr_28309_28467 = state_28306__$1;
(statearr_28309_28467[(1)] = (5));

} else {
var statearr_28310_28468 = state_28306__$1;
(statearr_28310_28468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (5))){
var state_28306__$1 = state_28306;
var statearr_28311_28469 = state_28306__$1;
(statearr_28311_28469[(2)] = null);

(statearr_28311_28469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (6))){
var state_28306__$1 = state_28306;
var statearr_28312_28470 = state_28306__$1;
(statearr_28312_28470[(2)] = null);

(statearr_28312_28470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (7))){
var inst_28302 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28313_28471 = state_28306__$1;
(statearr_28313_28471[(2)] = inst_28302);

(statearr_28313_28471[(1)] = (3));


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
});})(__28462,c__27900__auto___28465,G__28293_28463,n__25692__auto___28461,jobs,results,process,async))
;
return ((function (__28462,switch__27788__auto__,c__27900__auto___28465,G__28293_28463,n__25692__auto___28461,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0 = (function (){
var statearr_28317 = [null,null,null,null,null,null,null];
(statearr_28317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__);

(statearr_28317[(1)] = (1));

return statearr_28317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1 = (function (state_28306){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_28306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e28318){if((e28318 instanceof Object)){
var ex__27792__auto__ = e28318;
var statearr_28319_28472 = state_28306;
(statearr_28319_28472[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28473 = state_28306;
state_28306 = G__28473;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__ = function(state_28306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1.call(this,state_28306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__;
})()
;})(__28462,switch__27788__auto__,c__27900__auto___28465,G__28293_28463,n__25692__auto___28461,jobs,results,process,async))
})();
var state__27902__auto__ = (function (){var statearr_28320 = f__27901__auto__.call(null);
(statearr_28320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___28465);

return statearr_28320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(__28462,c__27900__auto___28465,G__28293_28463,n__25692__auto___28461,jobs,results,process,async))
);


break;
case "async":
var c__27900__auto___28474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28462,c__27900__auto___28474,G__28293_28463,n__25692__auto___28461,jobs,results,process,async){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (__28462,c__27900__auto___28474,G__28293_28463,n__25692__auto___28461,jobs,results,process,async){
return (function (state_28333){
var state_val_28334 = (state_28333[(1)]);
if((state_val_28334 === (1))){
var state_28333__$1 = state_28333;
var statearr_28335_28475 = state_28333__$1;
(statearr_28335_28475[(2)] = null);

(statearr_28335_28475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (2))){
var state_28333__$1 = state_28333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28333__$1,(4),jobs);
} else {
if((state_val_28334 === (3))){
var inst_28331 = (state_28333[(2)]);
var state_28333__$1 = state_28333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28333__$1,inst_28331);
} else {
if((state_val_28334 === (4))){
var inst_28323 = (state_28333[(2)]);
var inst_28324 = async.call(null,inst_28323);
var state_28333__$1 = state_28333;
if(cljs.core.truth_(inst_28324)){
var statearr_28336_28476 = state_28333__$1;
(statearr_28336_28476[(1)] = (5));

} else {
var statearr_28337_28477 = state_28333__$1;
(statearr_28337_28477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (5))){
var state_28333__$1 = state_28333;
var statearr_28338_28478 = state_28333__$1;
(statearr_28338_28478[(2)] = null);

(statearr_28338_28478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (6))){
var state_28333__$1 = state_28333;
var statearr_28339_28479 = state_28333__$1;
(statearr_28339_28479[(2)] = null);

(statearr_28339_28479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (7))){
var inst_28329 = (state_28333[(2)]);
var state_28333__$1 = state_28333;
var statearr_28340_28480 = state_28333__$1;
(statearr_28340_28480[(2)] = inst_28329);

(statearr_28340_28480[(1)] = (3));


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
});})(__28462,c__27900__auto___28474,G__28293_28463,n__25692__auto___28461,jobs,results,process,async))
;
return ((function (__28462,switch__27788__auto__,c__27900__auto___28474,G__28293_28463,n__25692__auto___28461,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0 = (function (){
var statearr_28344 = [null,null,null,null,null,null,null];
(statearr_28344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__);

(statearr_28344[(1)] = (1));

return statearr_28344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1 = (function (state_28333){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_28333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e28345){if((e28345 instanceof Object)){
var ex__27792__auto__ = e28345;
var statearr_28346_28481 = state_28333;
(statearr_28346_28481[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28482 = state_28333;
state_28333 = G__28482;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__ = function(state_28333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1.call(this,state_28333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__;
})()
;})(__28462,switch__27788__auto__,c__27900__auto___28474,G__28293_28463,n__25692__auto___28461,jobs,results,process,async))
})();
var state__27902__auto__ = (function (){var statearr_28347 = f__27901__auto__.call(null);
(statearr_28347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___28474);

return statearr_28347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(__28462,c__27900__auto___28474,G__28293_28463,n__25692__auto___28461,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28483 = (__28462 + (1));
__28462 = G__28483;
continue;
} else {
}
break;
}

var c__27900__auto___28484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___28484,jobs,results,process,async){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___28484,jobs,results,process,async){
return (function (state_28369){
var state_val_28370 = (state_28369[(1)]);
if((state_val_28370 === (1))){
var state_28369__$1 = state_28369;
var statearr_28371_28485 = state_28369__$1;
(statearr_28371_28485[(2)] = null);

(statearr_28371_28485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (2))){
var state_28369__$1 = state_28369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28369__$1,(4),from);
} else {
if((state_val_28370 === (3))){
var inst_28367 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28369__$1,inst_28367);
} else {
if((state_val_28370 === (4))){
var inst_28350 = (state_28369[(7)]);
var inst_28350__$1 = (state_28369[(2)]);
var inst_28351 = (inst_28350__$1 == null);
var state_28369__$1 = (function (){var statearr_28372 = state_28369;
(statearr_28372[(7)] = inst_28350__$1);

return statearr_28372;
})();
if(cljs.core.truth_(inst_28351)){
var statearr_28373_28486 = state_28369__$1;
(statearr_28373_28486[(1)] = (5));

} else {
var statearr_28374_28487 = state_28369__$1;
(statearr_28374_28487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (5))){
var inst_28353 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28369__$1 = state_28369;
var statearr_28375_28488 = state_28369__$1;
(statearr_28375_28488[(2)] = inst_28353);

(statearr_28375_28488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (6))){
var inst_28350 = (state_28369[(7)]);
var inst_28355 = (state_28369[(8)]);
var inst_28355__$1 = cljs.core.async.chan.call(null,(1));
var inst_28356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28357 = [inst_28350,inst_28355__$1];
var inst_28358 = (new cljs.core.PersistentVector(null,2,(5),inst_28356,inst_28357,null));
var state_28369__$1 = (function (){var statearr_28376 = state_28369;
(statearr_28376[(8)] = inst_28355__$1);

return statearr_28376;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28369__$1,(8),jobs,inst_28358);
} else {
if((state_val_28370 === (7))){
var inst_28365 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
var statearr_28377_28489 = state_28369__$1;
(statearr_28377_28489[(2)] = inst_28365);

(statearr_28377_28489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (8))){
var inst_28355 = (state_28369[(8)]);
var inst_28360 = (state_28369[(2)]);
var state_28369__$1 = (function (){var statearr_28378 = state_28369;
(statearr_28378[(9)] = inst_28360);

return statearr_28378;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28369__$1,(9),results,inst_28355);
} else {
if((state_val_28370 === (9))){
var inst_28362 = (state_28369[(2)]);
var state_28369__$1 = (function (){var statearr_28379 = state_28369;
(statearr_28379[(10)] = inst_28362);

return statearr_28379;
})();
var statearr_28380_28490 = state_28369__$1;
(statearr_28380_28490[(2)] = null);

(statearr_28380_28490[(1)] = (2));


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
});})(c__27900__auto___28484,jobs,results,process,async))
;
return ((function (switch__27788__auto__,c__27900__auto___28484,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0 = (function (){
var statearr_28384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__);

(statearr_28384[(1)] = (1));

return statearr_28384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1 = (function (state_28369){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_28369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e28385){if((e28385 instanceof Object)){
var ex__27792__auto__ = e28385;
var statearr_28386_28491 = state_28369;
(statearr_28386_28491[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28492 = state_28369;
state_28369 = G__28492;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__ = function(state_28369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1.call(this,state_28369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___28484,jobs,results,process,async))
})();
var state__27902__auto__ = (function (){var statearr_28387 = f__27901__auto__.call(null);
(statearr_28387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___28484);

return statearr_28387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___28484,jobs,results,process,async))
);


var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__,jobs,results,process,async){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto__,jobs,results,process,async){
return (function (state_28425){
var state_val_28426 = (state_28425[(1)]);
if((state_val_28426 === (7))){
var inst_28421 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
var statearr_28427_28493 = state_28425__$1;
(statearr_28427_28493[(2)] = inst_28421);

(statearr_28427_28493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (20))){
var state_28425__$1 = state_28425;
var statearr_28428_28494 = state_28425__$1;
(statearr_28428_28494[(2)] = null);

(statearr_28428_28494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (1))){
var state_28425__$1 = state_28425;
var statearr_28429_28495 = state_28425__$1;
(statearr_28429_28495[(2)] = null);

(statearr_28429_28495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (4))){
var inst_28390 = (state_28425[(7)]);
var inst_28390__$1 = (state_28425[(2)]);
var inst_28391 = (inst_28390__$1 == null);
var state_28425__$1 = (function (){var statearr_28430 = state_28425;
(statearr_28430[(7)] = inst_28390__$1);

return statearr_28430;
})();
if(cljs.core.truth_(inst_28391)){
var statearr_28431_28496 = state_28425__$1;
(statearr_28431_28496[(1)] = (5));

} else {
var statearr_28432_28497 = state_28425__$1;
(statearr_28432_28497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (15))){
var inst_28403 = (state_28425[(8)]);
var state_28425__$1 = state_28425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28425__$1,(18),to,inst_28403);
} else {
if((state_val_28426 === (21))){
var inst_28416 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
var statearr_28433_28498 = state_28425__$1;
(statearr_28433_28498[(2)] = inst_28416);

(statearr_28433_28498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (13))){
var inst_28418 = (state_28425[(2)]);
var state_28425__$1 = (function (){var statearr_28434 = state_28425;
(statearr_28434[(9)] = inst_28418);

return statearr_28434;
})();
var statearr_28435_28499 = state_28425__$1;
(statearr_28435_28499[(2)] = null);

(statearr_28435_28499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (6))){
var inst_28390 = (state_28425[(7)]);
var state_28425__$1 = state_28425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28425__$1,(11),inst_28390);
} else {
if((state_val_28426 === (17))){
var inst_28411 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
if(cljs.core.truth_(inst_28411)){
var statearr_28436_28500 = state_28425__$1;
(statearr_28436_28500[(1)] = (19));

} else {
var statearr_28437_28501 = state_28425__$1;
(statearr_28437_28501[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (3))){
var inst_28423 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28425__$1,inst_28423);
} else {
if((state_val_28426 === (12))){
var inst_28400 = (state_28425[(10)]);
var state_28425__$1 = state_28425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28425__$1,(14),inst_28400);
} else {
if((state_val_28426 === (2))){
var state_28425__$1 = state_28425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28425__$1,(4),results);
} else {
if((state_val_28426 === (19))){
var state_28425__$1 = state_28425;
var statearr_28438_28502 = state_28425__$1;
(statearr_28438_28502[(2)] = null);

(statearr_28438_28502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (11))){
var inst_28400 = (state_28425[(2)]);
var state_28425__$1 = (function (){var statearr_28439 = state_28425;
(statearr_28439[(10)] = inst_28400);

return statearr_28439;
})();
var statearr_28440_28503 = state_28425__$1;
(statearr_28440_28503[(2)] = null);

(statearr_28440_28503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (9))){
var state_28425__$1 = state_28425;
var statearr_28441_28504 = state_28425__$1;
(statearr_28441_28504[(2)] = null);

(statearr_28441_28504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (5))){
var state_28425__$1 = state_28425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28442_28505 = state_28425__$1;
(statearr_28442_28505[(1)] = (8));

} else {
var statearr_28443_28506 = state_28425__$1;
(statearr_28443_28506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (14))){
var inst_28403 = (state_28425[(8)]);
var inst_28405 = (state_28425[(11)]);
var inst_28403__$1 = (state_28425[(2)]);
var inst_28404 = (inst_28403__$1 == null);
var inst_28405__$1 = cljs.core.not.call(null,inst_28404);
var state_28425__$1 = (function (){var statearr_28444 = state_28425;
(statearr_28444[(8)] = inst_28403__$1);

(statearr_28444[(11)] = inst_28405__$1);

return statearr_28444;
})();
if(inst_28405__$1){
var statearr_28445_28507 = state_28425__$1;
(statearr_28445_28507[(1)] = (15));

} else {
var statearr_28446_28508 = state_28425__$1;
(statearr_28446_28508[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (16))){
var inst_28405 = (state_28425[(11)]);
var state_28425__$1 = state_28425;
var statearr_28447_28509 = state_28425__$1;
(statearr_28447_28509[(2)] = inst_28405);

(statearr_28447_28509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (10))){
var inst_28397 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
var statearr_28448_28510 = state_28425__$1;
(statearr_28448_28510[(2)] = inst_28397);

(statearr_28448_28510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (18))){
var inst_28408 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
var statearr_28449_28511 = state_28425__$1;
(statearr_28449_28511[(2)] = inst_28408);

(statearr_28449_28511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (8))){
var inst_28394 = cljs.core.async.close_BANG_.call(null,to);
var state_28425__$1 = state_28425;
var statearr_28450_28512 = state_28425__$1;
(statearr_28450_28512[(2)] = inst_28394);

(statearr_28450_28512[(1)] = (10));


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
}
}
}
}
});})(c__27900__auto__,jobs,results,process,async))
;
return ((function (switch__27788__auto__,c__27900__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0 = (function (){
var statearr_28454 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__);

(statearr_28454[(1)] = (1));

return statearr_28454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1 = (function (state_28425){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_28425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e28455){if((e28455 instanceof Object)){
var ex__27792__auto__ = e28455;
var statearr_28456_28513 = state_28425;
(statearr_28456_28513[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28514 = state_28425;
state_28425 = G__28514;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__ = function(state_28425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1.call(this,state_28425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto__,jobs,results,process,async))
})();
var state__27902__auto__ = (function (){var statearr_28457 = f__27901__auto__.call(null);
(statearr_28457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto__);

return statearr_28457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__,jobs,results,process,async))
);

return c__27900__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28515 = [];
var len__25852__auto___28518 = arguments.length;
var i__25853__auto___28519 = (0);
while(true){
if((i__25853__auto___28519 < len__25852__auto___28518)){
args28515.push((arguments[i__25853__auto___28519]));

var G__28520 = (i__25853__auto___28519 + (1));
i__25853__auto___28519 = G__28520;
continue;
} else {
}
break;
}

var G__28517 = args28515.length;
switch (G__28517) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28515.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28522 = [];
var len__25852__auto___28525 = arguments.length;
var i__25853__auto___28526 = (0);
while(true){
if((i__25853__auto___28526 < len__25852__auto___28525)){
args28522.push((arguments[i__25853__auto___28526]));

var G__28527 = (i__25853__auto___28526 + (1));
i__25853__auto___28526 = G__28527;
continue;
} else {
}
break;
}

var G__28524 = args28522.length;
switch (G__28524) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28522.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28529 = [];
var len__25852__auto___28582 = arguments.length;
var i__25853__auto___28583 = (0);
while(true){
if((i__25853__auto___28583 < len__25852__auto___28582)){
args28529.push((arguments[i__25853__auto___28583]));

var G__28584 = (i__25853__auto___28583 + (1));
i__25853__auto___28583 = G__28584;
continue;
} else {
}
break;
}

var G__28531 = args28529.length;
switch (G__28531) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28529.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27900__auto___28586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___28586,tc,fc){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___28586,tc,fc){
return (function (state_28557){
var state_val_28558 = (state_28557[(1)]);
if((state_val_28558 === (7))){
var inst_28553 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28559_28587 = state_28557__$1;
(statearr_28559_28587[(2)] = inst_28553);

(statearr_28559_28587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (1))){
var state_28557__$1 = state_28557;
var statearr_28560_28588 = state_28557__$1;
(statearr_28560_28588[(2)] = null);

(statearr_28560_28588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (4))){
var inst_28534 = (state_28557[(7)]);
var inst_28534__$1 = (state_28557[(2)]);
var inst_28535 = (inst_28534__$1 == null);
var state_28557__$1 = (function (){var statearr_28561 = state_28557;
(statearr_28561[(7)] = inst_28534__$1);

return statearr_28561;
})();
if(cljs.core.truth_(inst_28535)){
var statearr_28562_28589 = state_28557__$1;
(statearr_28562_28589[(1)] = (5));

} else {
var statearr_28563_28590 = state_28557__$1;
(statearr_28563_28590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (13))){
var state_28557__$1 = state_28557;
var statearr_28564_28591 = state_28557__$1;
(statearr_28564_28591[(2)] = null);

(statearr_28564_28591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (6))){
var inst_28534 = (state_28557[(7)]);
var inst_28540 = p.call(null,inst_28534);
var state_28557__$1 = state_28557;
if(cljs.core.truth_(inst_28540)){
var statearr_28565_28592 = state_28557__$1;
(statearr_28565_28592[(1)] = (9));

} else {
var statearr_28566_28593 = state_28557__$1;
(statearr_28566_28593[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (3))){
var inst_28555 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28557__$1,inst_28555);
} else {
if((state_val_28558 === (12))){
var state_28557__$1 = state_28557;
var statearr_28567_28594 = state_28557__$1;
(statearr_28567_28594[(2)] = null);

(statearr_28567_28594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (2))){
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28557__$1,(4),ch);
} else {
if((state_val_28558 === (11))){
var inst_28534 = (state_28557[(7)]);
var inst_28544 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28557__$1,(8),inst_28544,inst_28534);
} else {
if((state_val_28558 === (9))){
var state_28557__$1 = state_28557;
var statearr_28568_28595 = state_28557__$1;
(statearr_28568_28595[(2)] = tc);

(statearr_28568_28595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (5))){
var inst_28537 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28538 = cljs.core.async.close_BANG_.call(null,fc);
var state_28557__$1 = (function (){var statearr_28569 = state_28557;
(statearr_28569[(8)] = inst_28537);

return statearr_28569;
})();
var statearr_28570_28596 = state_28557__$1;
(statearr_28570_28596[(2)] = inst_28538);

(statearr_28570_28596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (14))){
var inst_28551 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28571_28597 = state_28557__$1;
(statearr_28571_28597[(2)] = inst_28551);

(statearr_28571_28597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (10))){
var state_28557__$1 = state_28557;
var statearr_28572_28598 = state_28557__$1;
(statearr_28572_28598[(2)] = fc);

(statearr_28572_28598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (8))){
var inst_28546 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
if(cljs.core.truth_(inst_28546)){
var statearr_28573_28599 = state_28557__$1;
(statearr_28573_28599[(1)] = (12));

} else {
var statearr_28574_28600 = state_28557__$1;
(statearr_28574_28600[(1)] = (13));

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
});})(c__27900__auto___28586,tc,fc))
;
return ((function (switch__27788__auto__,c__27900__auto___28586,tc,fc){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_28578 = [null,null,null,null,null,null,null,null,null];
(statearr_28578[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_28578[(1)] = (1));

return statearr_28578;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_28557){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_28557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e28579){if((e28579 instanceof Object)){
var ex__27792__auto__ = e28579;
var statearr_28580_28601 = state_28557;
(statearr_28580_28601[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28602 = state_28557;
state_28557 = G__28602;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_28557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_28557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___28586,tc,fc))
})();
var state__27902__auto__ = (function (){var statearr_28581 = f__27901__auto__.call(null);
(statearr_28581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___28586);

return statearr_28581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___28586,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto__){
return (function (state_28666){
var state_val_28667 = (state_28666[(1)]);
if((state_val_28667 === (7))){
var inst_28662 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
var statearr_28668_28689 = state_28666__$1;
(statearr_28668_28689[(2)] = inst_28662);

(statearr_28668_28689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (1))){
var inst_28646 = init;
var state_28666__$1 = (function (){var statearr_28669 = state_28666;
(statearr_28669[(7)] = inst_28646);

return statearr_28669;
})();
var statearr_28670_28690 = state_28666__$1;
(statearr_28670_28690[(2)] = null);

(statearr_28670_28690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (4))){
var inst_28649 = (state_28666[(8)]);
var inst_28649__$1 = (state_28666[(2)]);
var inst_28650 = (inst_28649__$1 == null);
var state_28666__$1 = (function (){var statearr_28671 = state_28666;
(statearr_28671[(8)] = inst_28649__$1);

return statearr_28671;
})();
if(cljs.core.truth_(inst_28650)){
var statearr_28672_28691 = state_28666__$1;
(statearr_28672_28691[(1)] = (5));

} else {
var statearr_28673_28692 = state_28666__$1;
(statearr_28673_28692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (6))){
var inst_28653 = (state_28666[(9)]);
var inst_28646 = (state_28666[(7)]);
var inst_28649 = (state_28666[(8)]);
var inst_28653__$1 = f.call(null,inst_28646,inst_28649);
var inst_28654 = cljs.core.reduced_QMARK_.call(null,inst_28653__$1);
var state_28666__$1 = (function (){var statearr_28674 = state_28666;
(statearr_28674[(9)] = inst_28653__$1);

return statearr_28674;
})();
if(inst_28654){
var statearr_28675_28693 = state_28666__$1;
(statearr_28675_28693[(1)] = (8));

} else {
var statearr_28676_28694 = state_28666__$1;
(statearr_28676_28694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (3))){
var inst_28664 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28666__$1,inst_28664);
} else {
if((state_val_28667 === (2))){
var state_28666__$1 = state_28666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28666__$1,(4),ch);
} else {
if((state_val_28667 === (9))){
var inst_28653 = (state_28666[(9)]);
var inst_28646 = inst_28653;
var state_28666__$1 = (function (){var statearr_28677 = state_28666;
(statearr_28677[(7)] = inst_28646);

return statearr_28677;
})();
var statearr_28678_28695 = state_28666__$1;
(statearr_28678_28695[(2)] = null);

(statearr_28678_28695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (5))){
var inst_28646 = (state_28666[(7)]);
var state_28666__$1 = state_28666;
var statearr_28679_28696 = state_28666__$1;
(statearr_28679_28696[(2)] = inst_28646);

(statearr_28679_28696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (10))){
var inst_28660 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
var statearr_28680_28697 = state_28666__$1;
(statearr_28680_28697[(2)] = inst_28660);

(statearr_28680_28697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (8))){
var inst_28653 = (state_28666[(9)]);
var inst_28656 = cljs.core.deref.call(null,inst_28653);
var state_28666__$1 = state_28666;
var statearr_28681_28698 = state_28666__$1;
(statearr_28681_28698[(2)] = inst_28656);

(statearr_28681_28698[(1)] = (10));


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
});})(c__27900__auto__))
;
return ((function (switch__27788__auto__,c__27900__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27789__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27789__auto____0 = (function (){
var statearr_28685 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28685[(0)] = cljs$core$async$reduce_$_state_machine__27789__auto__);

(statearr_28685[(1)] = (1));

return statearr_28685;
});
var cljs$core$async$reduce_$_state_machine__27789__auto____1 = (function (state_28666){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_28666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e28686){if((e28686 instanceof Object)){
var ex__27792__auto__ = e28686;
var statearr_28687_28699 = state_28666;
(statearr_28687_28699[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28700 = state_28666;
state_28666 = G__28700;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27789__auto__ = function(state_28666){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27789__auto____1.call(this,state_28666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27789__auto____0;
cljs$core$async$reduce_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27789__auto____1;
return cljs$core$async$reduce_$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto__))
})();
var state__27902__auto__ = (function (){var statearr_28688 = f__27901__auto__.call(null);
(statearr_28688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto__);

return statearr_28688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__))
);

return c__27900__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28701 = [];
var len__25852__auto___28753 = arguments.length;
var i__25853__auto___28754 = (0);
while(true){
if((i__25853__auto___28754 < len__25852__auto___28753)){
args28701.push((arguments[i__25853__auto___28754]));

var G__28755 = (i__25853__auto___28754 + (1));
i__25853__auto___28754 = G__28755;
continue;
} else {
}
break;
}

var G__28703 = args28701.length;
switch (G__28703) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28701.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto__){
return (function (state_28728){
var state_val_28729 = (state_28728[(1)]);
if((state_val_28729 === (7))){
var inst_28710 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28730_28757 = state_28728__$1;
(statearr_28730_28757[(2)] = inst_28710);

(statearr_28730_28757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (1))){
var inst_28704 = cljs.core.seq.call(null,coll);
var inst_28705 = inst_28704;
var state_28728__$1 = (function (){var statearr_28731 = state_28728;
(statearr_28731[(7)] = inst_28705);

return statearr_28731;
})();
var statearr_28732_28758 = state_28728__$1;
(statearr_28732_28758[(2)] = null);

(statearr_28732_28758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (4))){
var inst_28705 = (state_28728[(7)]);
var inst_28708 = cljs.core.first.call(null,inst_28705);
var state_28728__$1 = state_28728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28728__$1,(7),ch,inst_28708);
} else {
if((state_val_28729 === (13))){
var inst_28722 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28733_28759 = state_28728__$1;
(statearr_28733_28759[(2)] = inst_28722);

(statearr_28733_28759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (6))){
var inst_28713 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
if(cljs.core.truth_(inst_28713)){
var statearr_28734_28760 = state_28728__$1;
(statearr_28734_28760[(1)] = (8));

} else {
var statearr_28735_28761 = state_28728__$1;
(statearr_28735_28761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (3))){
var inst_28726 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28728__$1,inst_28726);
} else {
if((state_val_28729 === (12))){
var state_28728__$1 = state_28728;
var statearr_28736_28762 = state_28728__$1;
(statearr_28736_28762[(2)] = null);

(statearr_28736_28762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (2))){
var inst_28705 = (state_28728[(7)]);
var state_28728__$1 = state_28728;
if(cljs.core.truth_(inst_28705)){
var statearr_28737_28763 = state_28728__$1;
(statearr_28737_28763[(1)] = (4));

} else {
var statearr_28738_28764 = state_28728__$1;
(statearr_28738_28764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (11))){
var inst_28719 = cljs.core.async.close_BANG_.call(null,ch);
var state_28728__$1 = state_28728;
var statearr_28739_28765 = state_28728__$1;
(statearr_28739_28765[(2)] = inst_28719);

(statearr_28739_28765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (9))){
var state_28728__$1 = state_28728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28740_28766 = state_28728__$1;
(statearr_28740_28766[(1)] = (11));

} else {
var statearr_28741_28767 = state_28728__$1;
(statearr_28741_28767[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (5))){
var inst_28705 = (state_28728[(7)]);
var state_28728__$1 = state_28728;
var statearr_28742_28768 = state_28728__$1;
(statearr_28742_28768[(2)] = inst_28705);

(statearr_28742_28768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (10))){
var inst_28724 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28743_28769 = state_28728__$1;
(statearr_28743_28769[(2)] = inst_28724);

(statearr_28743_28769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (8))){
var inst_28705 = (state_28728[(7)]);
var inst_28715 = cljs.core.next.call(null,inst_28705);
var inst_28705__$1 = inst_28715;
var state_28728__$1 = (function (){var statearr_28744 = state_28728;
(statearr_28744[(7)] = inst_28705__$1);

return statearr_28744;
})();
var statearr_28745_28770 = state_28728__$1;
(statearr_28745_28770[(2)] = null);

(statearr_28745_28770[(1)] = (2));


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
});})(c__27900__auto__))
;
return ((function (switch__27788__auto__,c__27900__auto__){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_28749 = [null,null,null,null,null,null,null,null];
(statearr_28749[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_28749[(1)] = (1));

return statearr_28749;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_28728){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_28728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e28750){if((e28750 instanceof Object)){
var ex__27792__auto__ = e28750;
var statearr_28751_28771 = state_28728;
(statearr_28751_28771[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28772 = state_28728;
state_28728 = G__28772;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_28728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_28728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto__))
})();
var state__27902__auto__ = (function (){var statearr_28752 = f__27901__auto__.call(null);
(statearr_28752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto__);

return statearr_28752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__))
);

return c__27900__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25440__auto__ = (((_ == null))?null:_);
var m__25441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,_);
} else {
var m__25441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m);
} else {
var m__25441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28998 = (function (mult,ch,cs,meta28999){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28999 = meta28999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29000,meta28999__$1){
var self__ = this;
var _29000__$1 = this;
return (new cljs.core.async.t_cljs$core$async28998(self__.mult,self__.ch,self__.cs,meta28999__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29000){
var self__ = this;
var _29000__$1 = this;
return self__.meta28999;
});})(cs))
;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28998.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28998.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28999","meta28999",1111932633,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28998";

cljs.core.async.t_cljs$core$async28998.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async28998");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28998 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28998(mult__$1,ch__$1,cs__$1,meta28999){
return (new cljs.core.async.t_cljs$core$async28998(mult__$1,ch__$1,cs__$1,meta28999));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28998(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27900__auto___29223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29223,cs,m,dchan,dctr,done){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___29223,cs,m,dchan,dctr,done){
return (function (state_29135){
var state_val_29136 = (state_29135[(1)]);
if((state_val_29136 === (7))){
var inst_29131 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29137_29224 = state_29135__$1;
(statearr_29137_29224[(2)] = inst_29131);

(statearr_29137_29224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (20))){
var inst_29034 = (state_29135[(7)]);
var inst_29046 = cljs.core.first.call(null,inst_29034);
var inst_29047 = cljs.core.nth.call(null,inst_29046,(0),null);
var inst_29048 = cljs.core.nth.call(null,inst_29046,(1),null);
var state_29135__$1 = (function (){var statearr_29138 = state_29135;
(statearr_29138[(8)] = inst_29047);

return statearr_29138;
})();
if(cljs.core.truth_(inst_29048)){
var statearr_29139_29225 = state_29135__$1;
(statearr_29139_29225[(1)] = (22));

} else {
var statearr_29140_29226 = state_29135__$1;
(statearr_29140_29226[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (27))){
var inst_29083 = (state_29135[(9)]);
var inst_29076 = (state_29135[(10)]);
var inst_29078 = (state_29135[(11)]);
var inst_29003 = (state_29135[(12)]);
var inst_29083__$1 = cljs.core._nth.call(null,inst_29076,inst_29078);
var inst_29084 = cljs.core.async.put_BANG_.call(null,inst_29083__$1,inst_29003,done);
var state_29135__$1 = (function (){var statearr_29141 = state_29135;
(statearr_29141[(9)] = inst_29083__$1);

return statearr_29141;
})();
if(cljs.core.truth_(inst_29084)){
var statearr_29142_29227 = state_29135__$1;
(statearr_29142_29227[(1)] = (30));

} else {
var statearr_29143_29228 = state_29135__$1;
(statearr_29143_29228[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (1))){
var state_29135__$1 = state_29135;
var statearr_29144_29229 = state_29135__$1;
(statearr_29144_29229[(2)] = null);

(statearr_29144_29229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (24))){
var inst_29034 = (state_29135[(7)]);
var inst_29053 = (state_29135[(2)]);
var inst_29054 = cljs.core.next.call(null,inst_29034);
var inst_29012 = inst_29054;
var inst_29013 = null;
var inst_29014 = (0);
var inst_29015 = (0);
var state_29135__$1 = (function (){var statearr_29145 = state_29135;
(statearr_29145[(13)] = inst_29015);

(statearr_29145[(14)] = inst_29014);

(statearr_29145[(15)] = inst_29013);

(statearr_29145[(16)] = inst_29012);

(statearr_29145[(17)] = inst_29053);

return statearr_29145;
})();
var statearr_29146_29230 = state_29135__$1;
(statearr_29146_29230[(2)] = null);

(statearr_29146_29230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (39))){
var state_29135__$1 = state_29135;
var statearr_29150_29231 = state_29135__$1;
(statearr_29150_29231[(2)] = null);

(statearr_29150_29231[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (4))){
var inst_29003 = (state_29135[(12)]);
var inst_29003__$1 = (state_29135[(2)]);
var inst_29004 = (inst_29003__$1 == null);
var state_29135__$1 = (function (){var statearr_29151 = state_29135;
(statearr_29151[(12)] = inst_29003__$1);

return statearr_29151;
})();
if(cljs.core.truth_(inst_29004)){
var statearr_29152_29232 = state_29135__$1;
(statearr_29152_29232[(1)] = (5));

} else {
var statearr_29153_29233 = state_29135__$1;
(statearr_29153_29233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (15))){
var inst_29015 = (state_29135[(13)]);
var inst_29014 = (state_29135[(14)]);
var inst_29013 = (state_29135[(15)]);
var inst_29012 = (state_29135[(16)]);
var inst_29030 = (state_29135[(2)]);
var inst_29031 = (inst_29015 + (1));
var tmp29147 = inst_29014;
var tmp29148 = inst_29013;
var tmp29149 = inst_29012;
var inst_29012__$1 = tmp29149;
var inst_29013__$1 = tmp29148;
var inst_29014__$1 = tmp29147;
var inst_29015__$1 = inst_29031;
var state_29135__$1 = (function (){var statearr_29154 = state_29135;
(statearr_29154[(13)] = inst_29015__$1);

(statearr_29154[(18)] = inst_29030);

(statearr_29154[(14)] = inst_29014__$1);

(statearr_29154[(15)] = inst_29013__$1);

(statearr_29154[(16)] = inst_29012__$1);

return statearr_29154;
})();
var statearr_29155_29234 = state_29135__$1;
(statearr_29155_29234[(2)] = null);

(statearr_29155_29234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (21))){
var inst_29057 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29159_29235 = state_29135__$1;
(statearr_29159_29235[(2)] = inst_29057);

(statearr_29159_29235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (31))){
var inst_29083 = (state_29135[(9)]);
var inst_29087 = done.call(null,null);
var inst_29088 = cljs.core.async.untap_STAR_.call(null,m,inst_29083);
var state_29135__$1 = (function (){var statearr_29160 = state_29135;
(statearr_29160[(19)] = inst_29087);

return statearr_29160;
})();
var statearr_29161_29236 = state_29135__$1;
(statearr_29161_29236[(2)] = inst_29088);

(statearr_29161_29236[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (32))){
var inst_29076 = (state_29135[(10)]);
var inst_29078 = (state_29135[(11)]);
var inst_29075 = (state_29135[(20)]);
var inst_29077 = (state_29135[(21)]);
var inst_29090 = (state_29135[(2)]);
var inst_29091 = (inst_29078 + (1));
var tmp29156 = inst_29076;
var tmp29157 = inst_29075;
var tmp29158 = inst_29077;
var inst_29075__$1 = tmp29157;
var inst_29076__$1 = tmp29156;
var inst_29077__$1 = tmp29158;
var inst_29078__$1 = inst_29091;
var state_29135__$1 = (function (){var statearr_29162 = state_29135;
(statearr_29162[(10)] = inst_29076__$1);

(statearr_29162[(11)] = inst_29078__$1);

(statearr_29162[(22)] = inst_29090);

(statearr_29162[(20)] = inst_29075__$1);

(statearr_29162[(21)] = inst_29077__$1);

return statearr_29162;
})();
var statearr_29163_29237 = state_29135__$1;
(statearr_29163_29237[(2)] = null);

(statearr_29163_29237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (40))){
var inst_29103 = (state_29135[(23)]);
var inst_29107 = done.call(null,null);
var inst_29108 = cljs.core.async.untap_STAR_.call(null,m,inst_29103);
var state_29135__$1 = (function (){var statearr_29164 = state_29135;
(statearr_29164[(24)] = inst_29107);

return statearr_29164;
})();
var statearr_29165_29238 = state_29135__$1;
(statearr_29165_29238[(2)] = inst_29108);

(statearr_29165_29238[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (33))){
var inst_29094 = (state_29135[(25)]);
var inst_29096 = cljs.core.chunked_seq_QMARK_.call(null,inst_29094);
var state_29135__$1 = state_29135;
if(inst_29096){
var statearr_29166_29239 = state_29135__$1;
(statearr_29166_29239[(1)] = (36));

} else {
var statearr_29167_29240 = state_29135__$1;
(statearr_29167_29240[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (13))){
var inst_29024 = (state_29135[(26)]);
var inst_29027 = cljs.core.async.close_BANG_.call(null,inst_29024);
var state_29135__$1 = state_29135;
var statearr_29168_29241 = state_29135__$1;
(statearr_29168_29241[(2)] = inst_29027);

(statearr_29168_29241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (22))){
var inst_29047 = (state_29135[(8)]);
var inst_29050 = cljs.core.async.close_BANG_.call(null,inst_29047);
var state_29135__$1 = state_29135;
var statearr_29169_29242 = state_29135__$1;
(statearr_29169_29242[(2)] = inst_29050);

(statearr_29169_29242[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (36))){
var inst_29094 = (state_29135[(25)]);
var inst_29098 = cljs.core.chunk_first.call(null,inst_29094);
var inst_29099 = cljs.core.chunk_rest.call(null,inst_29094);
var inst_29100 = cljs.core.count.call(null,inst_29098);
var inst_29075 = inst_29099;
var inst_29076 = inst_29098;
var inst_29077 = inst_29100;
var inst_29078 = (0);
var state_29135__$1 = (function (){var statearr_29170 = state_29135;
(statearr_29170[(10)] = inst_29076);

(statearr_29170[(11)] = inst_29078);

(statearr_29170[(20)] = inst_29075);

(statearr_29170[(21)] = inst_29077);

return statearr_29170;
})();
var statearr_29171_29243 = state_29135__$1;
(statearr_29171_29243[(2)] = null);

(statearr_29171_29243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (41))){
var inst_29094 = (state_29135[(25)]);
var inst_29110 = (state_29135[(2)]);
var inst_29111 = cljs.core.next.call(null,inst_29094);
var inst_29075 = inst_29111;
var inst_29076 = null;
var inst_29077 = (0);
var inst_29078 = (0);
var state_29135__$1 = (function (){var statearr_29172 = state_29135;
(statearr_29172[(10)] = inst_29076);

(statearr_29172[(27)] = inst_29110);

(statearr_29172[(11)] = inst_29078);

(statearr_29172[(20)] = inst_29075);

(statearr_29172[(21)] = inst_29077);

return statearr_29172;
})();
var statearr_29173_29244 = state_29135__$1;
(statearr_29173_29244[(2)] = null);

(statearr_29173_29244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (43))){
var state_29135__$1 = state_29135;
var statearr_29174_29245 = state_29135__$1;
(statearr_29174_29245[(2)] = null);

(statearr_29174_29245[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (29))){
var inst_29119 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29175_29246 = state_29135__$1;
(statearr_29175_29246[(2)] = inst_29119);

(statearr_29175_29246[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (44))){
var inst_29128 = (state_29135[(2)]);
var state_29135__$1 = (function (){var statearr_29176 = state_29135;
(statearr_29176[(28)] = inst_29128);

return statearr_29176;
})();
var statearr_29177_29247 = state_29135__$1;
(statearr_29177_29247[(2)] = null);

(statearr_29177_29247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (6))){
var inst_29067 = (state_29135[(29)]);
var inst_29066 = cljs.core.deref.call(null,cs);
var inst_29067__$1 = cljs.core.keys.call(null,inst_29066);
var inst_29068 = cljs.core.count.call(null,inst_29067__$1);
var inst_29069 = cljs.core.reset_BANG_.call(null,dctr,inst_29068);
var inst_29074 = cljs.core.seq.call(null,inst_29067__$1);
var inst_29075 = inst_29074;
var inst_29076 = null;
var inst_29077 = (0);
var inst_29078 = (0);
var state_29135__$1 = (function (){var statearr_29178 = state_29135;
(statearr_29178[(29)] = inst_29067__$1);

(statearr_29178[(10)] = inst_29076);

(statearr_29178[(30)] = inst_29069);

(statearr_29178[(11)] = inst_29078);

(statearr_29178[(20)] = inst_29075);

(statearr_29178[(21)] = inst_29077);

return statearr_29178;
})();
var statearr_29179_29248 = state_29135__$1;
(statearr_29179_29248[(2)] = null);

(statearr_29179_29248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (28))){
var inst_29094 = (state_29135[(25)]);
var inst_29075 = (state_29135[(20)]);
var inst_29094__$1 = cljs.core.seq.call(null,inst_29075);
var state_29135__$1 = (function (){var statearr_29180 = state_29135;
(statearr_29180[(25)] = inst_29094__$1);

return statearr_29180;
})();
if(inst_29094__$1){
var statearr_29181_29249 = state_29135__$1;
(statearr_29181_29249[(1)] = (33));

} else {
var statearr_29182_29250 = state_29135__$1;
(statearr_29182_29250[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (25))){
var inst_29078 = (state_29135[(11)]);
var inst_29077 = (state_29135[(21)]);
var inst_29080 = (inst_29078 < inst_29077);
var inst_29081 = inst_29080;
var state_29135__$1 = state_29135;
if(cljs.core.truth_(inst_29081)){
var statearr_29183_29251 = state_29135__$1;
(statearr_29183_29251[(1)] = (27));

} else {
var statearr_29184_29252 = state_29135__$1;
(statearr_29184_29252[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (34))){
var state_29135__$1 = state_29135;
var statearr_29185_29253 = state_29135__$1;
(statearr_29185_29253[(2)] = null);

(statearr_29185_29253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (17))){
var state_29135__$1 = state_29135;
var statearr_29186_29254 = state_29135__$1;
(statearr_29186_29254[(2)] = null);

(statearr_29186_29254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (3))){
var inst_29133 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29135__$1,inst_29133);
} else {
if((state_val_29136 === (12))){
var inst_29062 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29187_29255 = state_29135__$1;
(statearr_29187_29255[(2)] = inst_29062);

(statearr_29187_29255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (2))){
var state_29135__$1 = state_29135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29135__$1,(4),ch);
} else {
if((state_val_29136 === (23))){
var state_29135__$1 = state_29135;
var statearr_29188_29256 = state_29135__$1;
(statearr_29188_29256[(2)] = null);

(statearr_29188_29256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (35))){
var inst_29117 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29189_29257 = state_29135__$1;
(statearr_29189_29257[(2)] = inst_29117);

(statearr_29189_29257[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (19))){
var inst_29034 = (state_29135[(7)]);
var inst_29038 = cljs.core.chunk_first.call(null,inst_29034);
var inst_29039 = cljs.core.chunk_rest.call(null,inst_29034);
var inst_29040 = cljs.core.count.call(null,inst_29038);
var inst_29012 = inst_29039;
var inst_29013 = inst_29038;
var inst_29014 = inst_29040;
var inst_29015 = (0);
var state_29135__$1 = (function (){var statearr_29190 = state_29135;
(statearr_29190[(13)] = inst_29015);

(statearr_29190[(14)] = inst_29014);

(statearr_29190[(15)] = inst_29013);

(statearr_29190[(16)] = inst_29012);

return statearr_29190;
})();
var statearr_29191_29258 = state_29135__$1;
(statearr_29191_29258[(2)] = null);

(statearr_29191_29258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (11))){
var inst_29034 = (state_29135[(7)]);
var inst_29012 = (state_29135[(16)]);
var inst_29034__$1 = cljs.core.seq.call(null,inst_29012);
var state_29135__$1 = (function (){var statearr_29192 = state_29135;
(statearr_29192[(7)] = inst_29034__$1);

return statearr_29192;
})();
if(inst_29034__$1){
var statearr_29193_29259 = state_29135__$1;
(statearr_29193_29259[(1)] = (16));

} else {
var statearr_29194_29260 = state_29135__$1;
(statearr_29194_29260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (9))){
var inst_29064 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29195_29261 = state_29135__$1;
(statearr_29195_29261[(2)] = inst_29064);

(statearr_29195_29261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (5))){
var inst_29010 = cljs.core.deref.call(null,cs);
var inst_29011 = cljs.core.seq.call(null,inst_29010);
var inst_29012 = inst_29011;
var inst_29013 = null;
var inst_29014 = (0);
var inst_29015 = (0);
var state_29135__$1 = (function (){var statearr_29196 = state_29135;
(statearr_29196[(13)] = inst_29015);

(statearr_29196[(14)] = inst_29014);

(statearr_29196[(15)] = inst_29013);

(statearr_29196[(16)] = inst_29012);

return statearr_29196;
})();
var statearr_29197_29262 = state_29135__$1;
(statearr_29197_29262[(2)] = null);

(statearr_29197_29262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (14))){
var state_29135__$1 = state_29135;
var statearr_29198_29263 = state_29135__$1;
(statearr_29198_29263[(2)] = null);

(statearr_29198_29263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (45))){
var inst_29125 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29199_29264 = state_29135__$1;
(statearr_29199_29264[(2)] = inst_29125);

(statearr_29199_29264[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (26))){
var inst_29067 = (state_29135[(29)]);
var inst_29121 = (state_29135[(2)]);
var inst_29122 = cljs.core.seq.call(null,inst_29067);
var state_29135__$1 = (function (){var statearr_29200 = state_29135;
(statearr_29200[(31)] = inst_29121);

return statearr_29200;
})();
if(inst_29122){
var statearr_29201_29265 = state_29135__$1;
(statearr_29201_29265[(1)] = (42));

} else {
var statearr_29202_29266 = state_29135__$1;
(statearr_29202_29266[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (16))){
var inst_29034 = (state_29135[(7)]);
var inst_29036 = cljs.core.chunked_seq_QMARK_.call(null,inst_29034);
var state_29135__$1 = state_29135;
if(inst_29036){
var statearr_29203_29267 = state_29135__$1;
(statearr_29203_29267[(1)] = (19));

} else {
var statearr_29204_29268 = state_29135__$1;
(statearr_29204_29268[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (38))){
var inst_29114 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29205_29269 = state_29135__$1;
(statearr_29205_29269[(2)] = inst_29114);

(statearr_29205_29269[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (30))){
var state_29135__$1 = state_29135;
var statearr_29206_29270 = state_29135__$1;
(statearr_29206_29270[(2)] = null);

(statearr_29206_29270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (10))){
var inst_29015 = (state_29135[(13)]);
var inst_29013 = (state_29135[(15)]);
var inst_29023 = cljs.core._nth.call(null,inst_29013,inst_29015);
var inst_29024 = cljs.core.nth.call(null,inst_29023,(0),null);
var inst_29025 = cljs.core.nth.call(null,inst_29023,(1),null);
var state_29135__$1 = (function (){var statearr_29207 = state_29135;
(statearr_29207[(26)] = inst_29024);

return statearr_29207;
})();
if(cljs.core.truth_(inst_29025)){
var statearr_29208_29271 = state_29135__$1;
(statearr_29208_29271[(1)] = (13));

} else {
var statearr_29209_29272 = state_29135__$1;
(statearr_29209_29272[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (18))){
var inst_29060 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29210_29273 = state_29135__$1;
(statearr_29210_29273[(2)] = inst_29060);

(statearr_29210_29273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (42))){
var state_29135__$1 = state_29135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29135__$1,(45),dchan);
} else {
if((state_val_29136 === (37))){
var inst_29094 = (state_29135[(25)]);
var inst_29103 = (state_29135[(23)]);
var inst_29003 = (state_29135[(12)]);
var inst_29103__$1 = cljs.core.first.call(null,inst_29094);
var inst_29104 = cljs.core.async.put_BANG_.call(null,inst_29103__$1,inst_29003,done);
var state_29135__$1 = (function (){var statearr_29211 = state_29135;
(statearr_29211[(23)] = inst_29103__$1);

return statearr_29211;
})();
if(cljs.core.truth_(inst_29104)){
var statearr_29212_29274 = state_29135__$1;
(statearr_29212_29274[(1)] = (39));

} else {
var statearr_29213_29275 = state_29135__$1;
(statearr_29213_29275[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (8))){
var inst_29015 = (state_29135[(13)]);
var inst_29014 = (state_29135[(14)]);
var inst_29017 = (inst_29015 < inst_29014);
var inst_29018 = inst_29017;
var state_29135__$1 = state_29135;
if(cljs.core.truth_(inst_29018)){
var statearr_29214_29276 = state_29135__$1;
(statearr_29214_29276[(1)] = (10));

} else {
var statearr_29215_29277 = state_29135__$1;
(statearr_29215_29277[(1)] = (11));

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
});})(c__27900__auto___29223,cs,m,dchan,dctr,done))
;
return ((function (switch__27788__auto__,c__27900__auto___29223,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27789__auto__ = null;
var cljs$core$async$mult_$_state_machine__27789__auto____0 = (function (){
var statearr_29219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29219[(0)] = cljs$core$async$mult_$_state_machine__27789__auto__);

(statearr_29219[(1)] = (1));

return statearr_29219;
});
var cljs$core$async$mult_$_state_machine__27789__auto____1 = (function (state_29135){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_29135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e29220){if((e29220 instanceof Object)){
var ex__27792__auto__ = e29220;
var statearr_29221_29278 = state_29135;
(statearr_29221_29278[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29279 = state_29135;
state_29135 = G__29279;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27789__auto__ = function(state_29135){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27789__auto____1.call(this,state_29135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27789__auto____0;
cljs$core$async$mult_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27789__auto____1;
return cljs$core$async$mult_$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___29223,cs,m,dchan,dctr,done))
})();
var state__27902__auto__ = (function (){var statearr_29222 = f__27901__auto__.call(null);
(statearr_29222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___29223);

return statearr_29222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29223,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29280 = [];
var len__25852__auto___29283 = arguments.length;
var i__25853__auto___29284 = (0);
while(true){
if((i__25853__auto___29284 < len__25852__auto___29283)){
args29280.push((arguments[i__25853__auto___29284]));

var G__29285 = (i__25853__auto___29284 + (1));
i__25853__auto___29284 = G__29285;
continue;
} else {
}
break;
}

var G__29282 = args29280.length;
switch (G__29282) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29280.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m);
} else {
var m__25441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,state_map);
} else {
var m__25441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,mode);
} else {
var m__25441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___29297 = arguments.length;
var i__25853__auto___29298 = (0);
while(true){
if((i__25853__auto___29298 < len__25852__auto___29297)){
args__25859__auto__.push((arguments[i__25853__auto___29298]));

var G__29299 = (i__25853__auto___29298 + (1));
i__25853__auto___29298 = G__29299;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((3) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25860__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29291){
var map__29292 = p__29291;
var map__29292__$1 = ((((!((map__29292 == null)))?((((map__29292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29292):map__29292);
var opts = map__29292__$1;
var statearr_29294_29300 = state;
(statearr_29294_29300[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29292,map__29292__$1,opts){
return (function (val){
var statearr_29295_29301 = state;
(statearr_29295_29301[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29292,map__29292__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29296_29302 = state;
(statearr_29296_29302[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29287){
var G__29288 = cljs.core.first.call(null,seq29287);
var seq29287__$1 = cljs.core.next.call(null,seq29287);
var G__29289 = cljs.core.first.call(null,seq29287__$1);
var seq29287__$2 = cljs.core.next.call(null,seq29287__$1);
var G__29290 = cljs.core.first.call(null,seq29287__$2);
var seq29287__$3 = cljs.core.next.call(null,seq29287__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29288,G__29289,G__29290,seq29287__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29468 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29469){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29469 = meta29469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29470,meta29469__$1){
var self__ = this;
var _29470__$1 = this;
return (new cljs.core.async.t_cljs$core$async29468(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29469__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29470){
var self__ = this;
var _29470__$1 = this;
return self__.meta29469;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29468.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29469","meta29469",768769113,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29468";

cljs.core.async.t_cljs$core$async29468.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async29468");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29468 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29468(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29469){
return (new cljs.core.async.t_cljs$core$async29468(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29469));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29468(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27900__auto___29633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29570){
var state_val_29571 = (state_29570[(1)]);
if((state_val_29571 === (7))){
var inst_29486 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29572_29634 = state_29570__$1;
(statearr_29572_29634[(2)] = inst_29486);

(statearr_29572_29634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (20))){
var inst_29498 = (state_29570[(7)]);
var state_29570__$1 = state_29570;
var statearr_29573_29635 = state_29570__$1;
(statearr_29573_29635[(2)] = inst_29498);

(statearr_29573_29635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (27))){
var state_29570__$1 = state_29570;
var statearr_29574_29636 = state_29570__$1;
(statearr_29574_29636[(2)] = null);

(statearr_29574_29636[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (1))){
var inst_29474 = (state_29570[(8)]);
var inst_29474__$1 = calc_state.call(null);
var inst_29476 = (inst_29474__$1 == null);
var inst_29477 = cljs.core.not.call(null,inst_29476);
var state_29570__$1 = (function (){var statearr_29575 = state_29570;
(statearr_29575[(8)] = inst_29474__$1);

return statearr_29575;
})();
if(inst_29477){
var statearr_29576_29637 = state_29570__$1;
(statearr_29576_29637[(1)] = (2));

} else {
var statearr_29577_29638 = state_29570__$1;
(statearr_29577_29638[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (24))){
var inst_29530 = (state_29570[(9)]);
var inst_29521 = (state_29570[(10)]);
var inst_29544 = (state_29570[(11)]);
var inst_29544__$1 = inst_29521.call(null,inst_29530);
var state_29570__$1 = (function (){var statearr_29578 = state_29570;
(statearr_29578[(11)] = inst_29544__$1);

return statearr_29578;
})();
if(cljs.core.truth_(inst_29544__$1)){
var statearr_29579_29639 = state_29570__$1;
(statearr_29579_29639[(1)] = (29));

} else {
var statearr_29580_29640 = state_29570__$1;
(statearr_29580_29640[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (4))){
var inst_29489 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29489)){
var statearr_29581_29641 = state_29570__$1;
(statearr_29581_29641[(1)] = (8));

} else {
var statearr_29582_29642 = state_29570__$1;
(statearr_29582_29642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (15))){
var inst_29515 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29515)){
var statearr_29583_29643 = state_29570__$1;
(statearr_29583_29643[(1)] = (19));

} else {
var statearr_29584_29644 = state_29570__$1;
(statearr_29584_29644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (21))){
var inst_29520 = (state_29570[(12)]);
var inst_29520__$1 = (state_29570[(2)]);
var inst_29521 = cljs.core.get.call(null,inst_29520__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29522 = cljs.core.get.call(null,inst_29520__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29523 = cljs.core.get.call(null,inst_29520__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29570__$1 = (function (){var statearr_29585 = state_29570;
(statearr_29585[(10)] = inst_29521);

(statearr_29585[(13)] = inst_29522);

(statearr_29585[(12)] = inst_29520__$1);

return statearr_29585;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29570__$1,(22),inst_29523);
} else {
if((state_val_29571 === (31))){
var inst_29552 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29552)){
var statearr_29586_29645 = state_29570__$1;
(statearr_29586_29645[(1)] = (32));

} else {
var statearr_29587_29646 = state_29570__$1;
(statearr_29587_29646[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (32))){
var inst_29529 = (state_29570[(14)]);
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29570__$1,(35),out,inst_29529);
} else {
if((state_val_29571 === (33))){
var inst_29520 = (state_29570[(12)]);
var inst_29498 = inst_29520;
var state_29570__$1 = (function (){var statearr_29588 = state_29570;
(statearr_29588[(7)] = inst_29498);

return statearr_29588;
})();
var statearr_29589_29647 = state_29570__$1;
(statearr_29589_29647[(2)] = null);

(statearr_29589_29647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (13))){
var inst_29498 = (state_29570[(7)]);
var inst_29505 = inst_29498.cljs$lang$protocol_mask$partition0$;
var inst_29506 = (inst_29505 & (64));
var inst_29507 = inst_29498.cljs$core$ISeq$;
var inst_29508 = (inst_29506) || (inst_29507);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29508)){
var statearr_29590_29648 = state_29570__$1;
(statearr_29590_29648[(1)] = (16));

} else {
var statearr_29591_29649 = state_29570__$1;
(statearr_29591_29649[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (22))){
var inst_29530 = (state_29570[(9)]);
var inst_29529 = (state_29570[(14)]);
var inst_29528 = (state_29570[(2)]);
var inst_29529__$1 = cljs.core.nth.call(null,inst_29528,(0),null);
var inst_29530__$1 = cljs.core.nth.call(null,inst_29528,(1),null);
var inst_29531 = (inst_29529__$1 == null);
var inst_29532 = cljs.core._EQ_.call(null,inst_29530__$1,change);
var inst_29533 = (inst_29531) || (inst_29532);
var state_29570__$1 = (function (){var statearr_29592 = state_29570;
(statearr_29592[(9)] = inst_29530__$1);

(statearr_29592[(14)] = inst_29529__$1);

return statearr_29592;
})();
if(cljs.core.truth_(inst_29533)){
var statearr_29593_29650 = state_29570__$1;
(statearr_29593_29650[(1)] = (23));

} else {
var statearr_29594_29651 = state_29570__$1;
(statearr_29594_29651[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (36))){
var inst_29520 = (state_29570[(12)]);
var inst_29498 = inst_29520;
var state_29570__$1 = (function (){var statearr_29595 = state_29570;
(statearr_29595[(7)] = inst_29498);

return statearr_29595;
})();
var statearr_29596_29652 = state_29570__$1;
(statearr_29596_29652[(2)] = null);

(statearr_29596_29652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (29))){
var inst_29544 = (state_29570[(11)]);
var state_29570__$1 = state_29570;
var statearr_29597_29653 = state_29570__$1;
(statearr_29597_29653[(2)] = inst_29544);

(statearr_29597_29653[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (6))){
var state_29570__$1 = state_29570;
var statearr_29598_29654 = state_29570__$1;
(statearr_29598_29654[(2)] = false);

(statearr_29598_29654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (28))){
var inst_29540 = (state_29570[(2)]);
var inst_29541 = calc_state.call(null);
var inst_29498 = inst_29541;
var state_29570__$1 = (function (){var statearr_29599 = state_29570;
(statearr_29599[(7)] = inst_29498);

(statearr_29599[(15)] = inst_29540);

return statearr_29599;
})();
var statearr_29600_29655 = state_29570__$1;
(statearr_29600_29655[(2)] = null);

(statearr_29600_29655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (25))){
var inst_29566 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29601_29656 = state_29570__$1;
(statearr_29601_29656[(2)] = inst_29566);

(statearr_29601_29656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (34))){
var inst_29564 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29602_29657 = state_29570__$1;
(statearr_29602_29657[(2)] = inst_29564);

(statearr_29602_29657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (17))){
var state_29570__$1 = state_29570;
var statearr_29603_29658 = state_29570__$1;
(statearr_29603_29658[(2)] = false);

(statearr_29603_29658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (3))){
var state_29570__$1 = state_29570;
var statearr_29604_29659 = state_29570__$1;
(statearr_29604_29659[(2)] = false);

(statearr_29604_29659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (12))){
var inst_29568 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29570__$1,inst_29568);
} else {
if((state_val_29571 === (2))){
var inst_29474 = (state_29570[(8)]);
var inst_29479 = inst_29474.cljs$lang$protocol_mask$partition0$;
var inst_29480 = (inst_29479 & (64));
var inst_29481 = inst_29474.cljs$core$ISeq$;
var inst_29482 = (inst_29480) || (inst_29481);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29482)){
var statearr_29605_29660 = state_29570__$1;
(statearr_29605_29660[(1)] = (5));

} else {
var statearr_29606_29661 = state_29570__$1;
(statearr_29606_29661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (23))){
var inst_29529 = (state_29570[(14)]);
var inst_29535 = (inst_29529 == null);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29535)){
var statearr_29607_29662 = state_29570__$1;
(statearr_29607_29662[(1)] = (26));

} else {
var statearr_29608_29663 = state_29570__$1;
(statearr_29608_29663[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (35))){
var inst_29555 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29555)){
var statearr_29609_29664 = state_29570__$1;
(statearr_29609_29664[(1)] = (36));

} else {
var statearr_29610_29665 = state_29570__$1;
(statearr_29610_29665[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (19))){
var inst_29498 = (state_29570[(7)]);
var inst_29517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29498);
var state_29570__$1 = state_29570;
var statearr_29611_29666 = state_29570__$1;
(statearr_29611_29666[(2)] = inst_29517);

(statearr_29611_29666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (11))){
var inst_29498 = (state_29570[(7)]);
var inst_29502 = (inst_29498 == null);
var inst_29503 = cljs.core.not.call(null,inst_29502);
var state_29570__$1 = state_29570;
if(inst_29503){
var statearr_29612_29667 = state_29570__$1;
(statearr_29612_29667[(1)] = (13));

} else {
var statearr_29613_29668 = state_29570__$1;
(statearr_29613_29668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (9))){
var inst_29474 = (state_29570[(8)]);
var state_29570__$1 = state_29570;
var statearr_29614_29669 = state_29570__$1;
(statearr_29614_29669[(2)] = inst_29474);

(statearr_29614_29669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (5))){
var state_29570__$1 = state_29570;
var statearr_29615_29670 = state_29570__$1;
(statearr_29615_29670[(2)] = true);

(statearr_29615_29670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (14))){
var state_29570__$1 = state_29570;
var statearr_29616_29671 = state_29570__$1;
(statearr_29616_29671[(2)] = false);

(statearr_29616_29671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (26))){
var inst_29530 = (state_29570[(9)]);
var inst_29537 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29530);
var state_29570__$1 = state_29570;
var statearr_29617_29672 = state_29570__$1;
(statearr_29617_29672[(2)] = inst_29537);

(statearr_29617_29672[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (16))){
var state_29570__$1 = state_29570;
var statearr_29618_29673 = state_29570__$1;
(statearr_29618_29673[(2)] = true);

(statearr_29618_29673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (38))){
var inst_29560 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29619_29674 = state_29570__$1;
(statearr_29619_29674[(2)] = inst_29560);

(statearr_29619_29674[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (30))){
var inst_29530 = (state_29570[(9)]);
var inst_29521 = (state_29570[(10)]);
var inst_29522 = (state_29570[(13)]);
var inst_29547 = cljs.core.empty_QMARK_.call(null,inst_29521);
var inst_29548 = inst_29522.call(null,inst_29530);
var inst_29549 = cljs.core.not.call(null,inst_29548);
var inst_29550 = (inst_29547) && (inst_29549);
var state_29570__$1 = state_29570;
var statearr_29620_29675 = state_29570__$1;
(statearr_29620_29675[(2)] = inst_29550);

(statearr_29620_29675[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (10))){
var inst_29474 = (state_29570[(8)]);
var inst_29494 = (state_29570[(2)]);
var inst_29495 = cljs.core.get.call(null,inst_29494,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29496 = cljs.core.get.call(null,inst_29494,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29497 = cljs.core.get.call(null,inst_29494,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29498 = inst_29474;
var state_29570__$1 = (function (){var statearr_29621 = state_29570;
(statearr_29621[(16)] = inst_29497);

(statearr_29621[(17)] = inst_29495);

(statearr_29621[(7)] = inst_29498);

(statearr_29621[(18)] = inst_29496);

return statearr_29621;
})();
var statearr_29622_29676 = state_29570__$1;
(statearr_29622_29676[(2)] = null);

(statearr_29622_29676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (18))){
var inst_29512 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29623_29677 = state_29570__$1;
(statearr_29623_29677[(2)] = inst_29512);

(statearr_29623_29677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (37))){
var state_29570__$1 = state_29570;
var statearr_29624_29678 = state_29570__$1;
(statearr_29624_29678[(2)] = null);

(statearr_29624_29678[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (8))){
var inst_29474 = (state_29570[(8)]);
var inst_29491 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29474);
var state_29570__$1 = state_29570;
var statearr_29625_29679 = state_29570__$1;
(statearr_29625_29679[(2)] = inst_29491);

(statearr_29625_29679[(1)] = (10));


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
});})(c__27900__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27788__auto__,c__27900__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27789__auto__ = null;
var cljs$core$async$mix_$_state_machine__27789__auto____0 = (function (){
var statearr_29629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29629[(0)] = cljs$core$async$mix_$_state_machine__27789__auto__);

(statearr_29629[(1)] = (1));

return statearr_29629;
});
var cljs$core$async$mix_$_state_machine__27789__auto____1 = (function (state_29570){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_29570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e29630){if((e29630 instanceof Object)){
var ex__27792__auto__ = e29630;
var statearr_29631_29680 = state_29570;
(statearr_29631_29680[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29681 = state_29570;
state_29570 = G__29681;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27789__auto__ = function(state_29570){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27789__auto____1.call(this,state_29570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27789__auto____0;
cljs$core$async$mix_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27789__auto____1;
return cljs$core$async$mix_$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27902__auto__ = (function (){var statearr_29632 = f__27901__auto__.call(null);
(statearr_29632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___29633);

return statearr_29632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p,v,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29682 = [];
var len__25852__auto___29685 = arguments.length;
var i__25853__auto___29686 = (0);
while(true){
if((i__25853__auto___29686 < len__25852__auto___29685)){
args29682.push((arguments[i__25853__auto___29686]));

var G__29687 = (i__25853__auto___29686 + (1));
i__25853__auto___29686 = G__29687;
continue;
} else {
}
break;
}

var G__29684 = args29682.length;
switch (G__29684) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29682.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p);
} else {
var m__25441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p,v);
} else {
var m__25441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29690 = [];
var len__25852__auto___29815 = arguments.length;
var i__25853__auto___29816 = (0);
while(true){
if((i__25853__auto___29816 < len__25852__auto___29815)){
args29690.push((arguments[i__25853__auto___29816]));

var G__29817 = (i__25853__auto___29816 + (1));
i__25853__auto___29816 = G__29817;
continue;
} else {
}
break;
}

var G__29692 = args29690.length;
switch (G__29692) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29690.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24777__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24777__auto__,mults){
return (function (p1__29689_SHARP_){
if(cljs.core.truth_(p1__29689_SHARP_.call(null,topic))){
return p1__29689_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29689_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24777__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29693 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29694){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29694 = meta29694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29695,meta29694__$1){
var self__ = this;
var _29695__$1 = this;
return (new cljs.core.async.t_cljs$core$async29693(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29694__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29695){
var self__ = this;
var _29695__$1 = this;
return self__.meta29694;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29694","meta29694",237010568,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29693";

cljs.core.async.t_cljs$core$async29693.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async29693");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29693 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29693(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29694){
return (new cljs.core.async.t_cljs$core$async29693(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29694));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29693(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27900__auto___29819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29819,mults,ensure_mult,p){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___29819,mults,ensure_mult,p){
return (function (state_29767){
var state_val_29768 = (state_29767[(1)]);
if((state_val_29768 === (7))){
var inst_29763 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29769_29820 = state_29767__$1;
(statearr_29769_29820[(2)] = inst_29763);

(statearr_29769_29820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (20))){
var state_29767__$1 = state_29767;
var statearr_29770_29821 = state_29767__$1;
(statearr_29770_29821[(2)] = null);

(statearr_29770_29821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (1))){
var state_29767__$1 = state_29767;
var statearr_29771_29822 = state_29767__$1;
(statearr_29771_29822[(2)] = null);

(statearr_29771_29822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (24))){
var inst_29746 = (state_29767[(7)]);
var inst_29755 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29746);
var state_29767__$1 = state_29767;
var statearr_29772_29823 = state_29767__$1;
(statearr_29772_29823[(2)] = inst_29755);

(statearr_29772_29823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (4))){
var inst_29698 = (state_29767[(8)]);
var inst_29698__$1 = (state_29767[(2)]);
var inst_29699 = (inst_29698__$1 == null);
var state_29767__$1 = (function (){var statearr_29773 = state_29767;
(statearr_29773[(8)] = inst_29698__$1);

return statearr_29773;
})();
if(cljs.core.truth_(inst_29699)){
var statearr_29774_29824 = state_29767__$1;
(statearr_29774_29824[(1)] = (5));

} else {
var statearr_29775_29825 = state_29767__$1;
(statearr_29775_29825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (15))){
var inst_29740 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29776_29826 = state_29767__$1;
(statearr_29776_29826[(2)] = inst_29740);

(statearr_29776_29826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (21))){
var inst_29760 = (state_29767[(2)]);
var state_29767__$1 = (function (){var statearr_29777 = state_29767;
(statearr_29777[(9)] = inst_29760);

return statearr_29777;
})();
var statearr_29778_29827 = state_29767__$1;
(statearr_29778_29827[(2)] = null);

(statearr_29778_29827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (13))){
var inst_29722 = (state_29767[(10)]);
var inst_29724 = cljs.core.chunked_seq_QMARK_.call(null,inst_29722);
var state_29767__$1 = state_29767;
if(inst_29724){
var statearr_29779_29828 = state_29767__$1;
(statearr_29779_29828[(1)] = (16));

} else {
var statearr_29780_29829 = state_29767__$1;
(statearr_29780_29829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (22))){
var inst_29752 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29752)){
var statearr_29781_29830 = state_29767__$1;
(statearr_29781_29830[(1)] = (23));

} else {
var statearr_29782_29831 = state_29767__$1;
(statearr_29782_29831[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (6))){
var inst_29746 = (state_29767[(7)]);
var inst_29698 = (state_29767[(8)]);
var inst_29748 = (state_29767[(11)]);
var inst_29746__$1 = topic_fn.call(null,inst_29698);
var inst_29747 = cljs.core.deref.call(null,mults);
var inst_29748__$1 = cljs.core.get.call(null,inst_29747,inst_29746__$1);
var state_29767__$1 = (function (){var statearr_29783 = state_29767;
(statearr_29783[(7)] = inst_29746__$1);

(statearr_29783[(11)] = inst_29748__$1);

return statearr_29783;
})();
if(cljs.core.truth_(inst_29748__$1)){
var statearr_29784_29832 = state_29767__$1;
(statearr_29784_29832[(1)] = (19));

} else {
var statearr_29785_29833 = state_29767__$1;
(statearr_29785_29833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (25))){
var inst_29757 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29786_29834 = state_29767__$1;
(statearr_29786_29834[(2)] = inst_29757);

(statearr_29786_29834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (17))){
var inst_29722 = (state_29767[(10)]);
var inst_29731 = cljs.core.first.call(null,inst_29722);
var inst_29732 = cljs.core.async.muxch_STAR_.call(null,inst_29731);
var inst_29733 = cljs.core.async.close_BANG_.call(null,inst_29732);
var inst_29734 = cljs.core.next.call(null,inst_29722);
var inst_29708 = inst_29734;
var inst_29709 = null;
var inst_29710 = (0);
var inst_29711 = (0);
var state_29767__$1 = (function (){var statearr_29787 = state_29767;
(statearr_29787[(12)] = inst_29708);

(statearr_29787[(13)] = inst_29710);

(statearr_29787[(14)] = inst_29709);

(statearr_29787[(15)] = inst_29733);

(statearr_29787[(16)] = inst_29711);

return statearr_29787;
})();
var statearr_29788_29835 = state_29767__$1;
(statearr_29788_29835[(2)] = null);

(statearr_29788_29835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (3))){
var inst_29765 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29767__$1,inst_29765);
} else {
if((state_val_29768 === (12))){
var inst_29742 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29789_29836 = state_29767__$1;
(statearr_29789_29836[(2)] = inst_29742);

(statearr_29789_29836[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (2))){
var state_29767__$1 = state_29767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29767__$1,(4),ch);
} else {
if((state_val_29768 === (23))){
var state_29767__$1 = state_29767;
var statearr_29790_29837 = state_29767__$1;
(statearr_29790_29837[(2)] = null);

(statearr_29790_29837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (19))){
var inst_29698 = (state_29767[(8)]);
var inst_29748 = (state_29767[(11)]);
var inst_29750 = cljs.core.async.muxch_STAR_.call(null,inst_29748);
var state_29767__$1 = state_29767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29767__$1,(22),inst_29750,inst_29698);
} else {
if((state_val_29768 === (11))){
var inst_29722 = (state_29767[(10)]);
var inst_29708 = (state_29767[(12)]);
var inst_29722__$1 = cljs.core.seq.call(null,inst_29708);
var state_29767__$1 = (function (){var statearr_29791 = state_29767;
(statearr_29791[(10)] = inst_29722__$1);

return statearr_29791;
})();
if(inst_29722__$1){
var statearr_29792_29838 = state_29767__$1;
(statearr_29792_29838[(1)] = (13));

} else {
var statearr_29793_29839 = state_29767__$1;
(statearr_29793_29839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (9))){
var inst_29744 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29794_29840 = state_29767__$1;
(statearr_29794_29840[(2)] = inst_29744);

(statearr_29794_29840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (5))){
var inst_29705 = cljs.core.deref.call(null,mults);
var inst_29706 = cljs.core.vals.call(null,inst_29705);
var inst_29707 = cljs.core.seq.call(null,inst_29706);
var inst_29708 = inst_29707;
var inst_29709 = null;
var inst_29710 = (0);
var inst_29711 = (0);
var state_29767__$1 = (function (){var statearr_29795 = state_29767;
(statearr_29795[(12)] = inst_29708);

(statearr_29795[(13)] = inst_29710);

(statearr_29795[(14)] = inst_29709);

(statearr_29795[(16)] = inst_29711);

return statearr_29795;
})();
var statearr_29796_29841 = state_29767__$1;
(statearr_29796_29841[(2)] = null);

(statearr_29796_29841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (14))){
var state_29767__$1 = state_29767;
var statearr_29800_29842 = state_29767__$1;
(statearr_29800_29842[(2)] = null);

(statearr_29800_29842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (16))){
var inst_29722 = (state_29767[(10)]);
var inst_29726 = cljs.core.chunk_first.call(null,inst_29722);
var inst_29727 = cljs.core.chunk_rest.call(null,inst_29722);
var inst_29728 = cljs.core.count.call(null,inst_29726);
var inst_29708 = inst_29727;
var inst_29709 = inst_29726;
var inst_29710 = inst_29728;
var inst_29711 = (0);
var state_29767__$1 = (function (){var statearr_29801 = state_29767;
(statearr_29801[(12)] = inst_29708);

(statearr_29801[(13)] = inst_29710);

(statearr_29801[(14)] = inst_29709);

(statearr_29801[(16)] = inst_29711);

return statearr_29801;
})();
var statearr_29802_29843 = state_29767__$1;
(statearr_29802_29843[(2)] = null);

(statearr_29802_29843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (10))){
var inst_29708 = (state_29767[(12)]);
var inst_29710 = (state_29767[(13)]);
var inst_29709 = (state_29767[(14)]);
var inst_29711 = (state_29767[(16)]);
var inst_29716 = cljs.core._nth.call(null,inst_29709,inst_29711);
var inst_29717 = cljs.core.async.muxch_STAR_.call(null,inst_29716);
var inst_29718 = cljs.core.async.close_BANG_.call(null,inst_29717);
var inst_29719 = (inst_29711 + (1));
var tmp29797 = inst_29708;
var tmp29798 = inst_29710;
var tmp29799 = inst_29709;
var inst_29708__$1 = tmp29797;
var inst_29709__$1 = tmp29799;
var inst_29710__$1 = tmp29798;
var inst_29711__$1 = inst_29719;
var state_29767__$1 = (function (){var statearr_29803 = state_29767;
(statearr_29803[(12)] = inst_29708__$1);

(statearr_29803[(17)] = inst_29718);

(statearr_29803[(13)] = inst_29710__$1);

(statearr_29803[(14)] = inst_29709__$1);

(statearr_29803[(16)] = inst_29711__$1);

return statearr_29803;
})();
var statearr_29804_29844 = state_29767__$1;
(statearr_29804_29844[(2)] = null);

(statearr_29804_29844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (18))){
var inst_29737 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29805_29845 = state_29767__$1;
(statearr_29805_29845[(2)] = inst_29737);

(statearr_29805_29845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (8))){
var inst_29710 = (state_29767[(13)]);
var inst_29711 = (state_29767[(16)]);
var inst_29713 = (inst_29711 < inst_29710);
var inst_29714 = inst_29713;
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29714)){
var statearr_29806_29846 = state_29767__$1;
(statearr_29806_29846[(1)] = (10));

} else {
var statearr_29807_29847 = state_29767__$1;
(statearr_29807_29847[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__27900__auto___29819,mults,ensure_mult,p))
;
return ((function (switch__27788__auto__,c__27900__auto___29819,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_29811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29811[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_29811[(1)] = (1));

return statearr_29811;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_29767){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_29767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e29812){if((e29812 instanceof Object)){
var ex__27792__auto__ = e29812;
var statearr_29813_29848 = state_29767;
(statearr_29813_29848[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29849 = state_29767;
state_29767 = G__29849;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_29767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_29767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___29819,mults,ensure_mult,p))
})();
var state__27902__auto__ = (function (){var statearr_29814 = f__27901__auto__.call(null);
(statearr_29814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___29819);

return statearr_29814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29819,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29850 = [];
var len__25852__auto___29853 = arguments.length;
var i__25853__auto___29854 = (0);
while(true){
if((i__25853__auto___29854 < len__25852__auto___29853)){
args29850.push((arguments[i__25853__auto___29854]));

var G__29855 = (i__25853__auto___29854 + (1));
i__25853__auto___29854 = G__29855;
continue;
} else {
}
break;
}

var G__29852 = args29850.length;
switch (G__29852) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29850.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29857 = [];
var len__25852__auto___29860 = arguments.length;
var i__25853__auto___29861 = (0);
while(true){
if((i__25853__auto___29861 < len__25852__auto___29860)){
args29857.push((arguments[i__25853__auto___29861]));

var G__29862 = (i__25853__auto___29861 + (1));
i__25853__auto___29861 = G__29862;
continue;
} else {
}
break;
}

var G__29859 = args29857.length;
switch (G__29859) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29857.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29864 = [];
var len__25852__auto___29935 = arguments.length;
var i__25853__auto___29936 = (0);
while(true){
if((i__25853__auto___29936 < len__25852__auto___29935)){
args29864.push((arguments[i__25853__auto___29936]));

var G__29937 = (i__25853__auto___29936 + (1));
i__25853__auto___29936 = G__29937;
continue;
} else {
}
break;
}

var G__29866 = args29864.length;
switch (G__29866) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29864.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27900__auto___29939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29905){
var state_val_29906 = (state_29905[(1)]);
if((state_val_29906 === (7))){
var state_29905__$1 = state_29905;
var statearr_29907_29940 = state_29905__$1;
(statearr_29907_29940[(2)] = null);

(statearr_29907_29940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (1))){
var state_29905__$1 = state_29905;
var statearr_29908_29941 = state_29905__$1;
(statearr_29908_29941[(2)] = null);

(statearr_29908_29941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (4))){
var inst_29869 = (state_29905[(7)]);
var inst_29871 = (inst_29869 < cnt);
var state_29905__$1 = state_29905;
if(cljs.core.truth_(inst_29871)){
var statearr_29909_29942 = state_29905__$1;
(statearr_29909_29942[(1)] = (6));

} else {
var statearr_29910_29943 = state_29905__$1;
(statearr_29910_29943[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (15))){
var inst_29901 = (state_29905[(2)]);
var state_29905__$1 = state_29905;
var statearr_29911_29944 = state_29905__$1;
(statearr_29911_29944[(2)] = inst_29901);

(statearr_29911_29944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (13))){
var inst_29894 = cljs.core.async.close_BANG_.call(null,out);
var state_29905__$1 = state_29905;
var statearr_29912_29945 = state_29905__$1;
(statearr_29912_29945[(2)] = inst_29894);

(statearr_29912_29945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (6))){
var state_29905__$1 = state_29905;
var statearr_29913_29946 = state_29905__$1;
(statearr_29913_29946[(2)] = null);

(statearr_29913_29946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (3))){
var inst_29903 = (state_29905[(2)]);
var state_29905__$1 = state_29905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29905__$1,inst_29903);
} else {
if((state_val_29906 === (12))){
var inst_29891 = (state_29905[(8)]);
var inst_29891__$1 = (state_29905[(2)]);
var inst_29892 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29891__$1);
var state_29905__$1 = (function (){var statearr_29914 = state_29905;
(statearr_29914[(8)] = inst_29891__$1);

return statearr_29914;
})();
if(cljs.core.truth_(inst_29892)){
var statearr_29915_29947 = state_29905__$1;
(statearr_29915_29947[(1)] = (13));

} else {
var statearr_29916_29948 = state_29905__$1;
(statearr_29916_29948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (2))){
var inst_29868 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29869 = (0);
var state_29905__$1 = (function (){var statearr_29917 = state_29905;
(statearr_29917[(7)] = inst_29869);

(statearr_29917[(9)] = inst_29868);

return statearr_29917;
})();
var statearr_29918_29949 = state_29905__$1;
(statearr_29918_29949[(2)] = null);

(statearr_29918_29949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (11))){
var inst_29869 = (state_29905[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29905,(10),Object,null,(9));
var inst_29878 = chs__$1.call(null,inst_29869);
var inst_29879 = done.call(null,inst_29869);
var inst_29880 = cljs.core.async.take_BANG_.call(null,inst_29878,inst_29879);
var state_29905__$1 = state_29905;
var statearr_29919_29950 = state_29905__$1;
(statearr_29919_29950[(2)] = inst_29880);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (9))){
var inst_29869 = (state_29905[(7)]);
var inst_29882 = (state_29905[(2)]);
var inst_29883 = (inst_29869 + (1));
var inst_29869__$1 = inst_29883;
var state_29905__$1 = (function (){var statearr_29920 = state_29905;
(statearr_29920[(7)] = inst_29869__$1);

(statearr_29920[(10)] = inst_29882);

return statearr_29920;
})();
var statearr_29921_29951 = state_29905__$1;
(statearr_29921_29951[(2)] = null);

(statearr_29921_29951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (5))){
var inst_29889 = (state_29905[(2)]);
var state_29905__$1 = (function (){var statearr_29922 = state_29905;
(statearr_29922[(11)] = inst_29889);

return statearr_29922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29905__$1,(12),dchan);
} else {
if((state_val_29906 === (14))){
var inst_29891 = (state_29905[(8)]);
var inst_29896 = cljs.core.apply.call(null,f,inst_29891);
var state_29905__$1 = state_29905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29905__$1,(16),out,inst_29896);
} else {
if((state_val_29906 === (16))){
var inst_29898 = (state_29905[(2)]);
var state_29905__$1 = (function (){var statearr_29923 = state_29905;
(statearr_29923[(12)] = inst_29898);

return statearr_29923;
})();
var statearr_29924_29952 = state_29905__$1;
(statearr_29924_29952[(2)] = null);

(statearr_29924_29952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (10))){
var inst_29873 = (state_29905[(2)]);
var inst_29874 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29905__$1 = (function (){var statearr_29925 = state_29905;
(statearr_29925[(13)] = inst_29873);

return statearr_29925;
})();
var statearr_29926_29953 = state_29905__$1;
(statearr_29926_29953[(2)] = inst_29874);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (8))){
var inst_29887 = (state_29905[(2)]);
var state_29905__$1 = state_29905;
var statearr_29927_29954 = state_29905__$1;
(statearr_29927_29954[(2)] = inst_29887);

(statearr_29927_29954[(1)] = (5));


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
});})(c__27900__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27788__auto__,c__27900__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_29931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29931[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_29931[(1)] = (1));

return statearr_29931;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_29905){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_29905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e29932){if((e29932 instanceof Object)){
var ex__27792__auto__ = e29932;
var statearr_29933_29955 = state_29905;
(statearr_29933_29955[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29956 = state_29905;
state_29905 = G__29956;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_29905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_29905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27902__auto__ = (function (){var statearr_29934 = f__27901__auto__.call(null);
(statearr_29934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___29939);

return statearr_29934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29958 = [];
var len__25852__auto___30016 = arguments.length;
var i__25853__auto___30017 = (0);
while(true){
if((i__25853__auto___30017 < len__25852__auto___30016)){
args29958.push((arguments[i__25853__auto___30017]));

var G__30018 = (i__25853__auto___30017 + (1));
i__25853__auto___30017 = G__30018;
continue;
} else {
}
break;
}

var G__29960 = args29958.length;
switch (G__29960) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29958.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27900__auto___30020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___30020,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___30020,out){
return (function (state_29992){
var state_val_29993 = (state_29992[(1)]);
if((state_val_29993 === (7))){
var inst_29971 = (state_29992[(7)]);
var inst_29972 = (state_29992[(8)]);
var inst_29971__$1 = (state_29992[(2)]);
var inst_29972__$1 = cljs.core.nth.call(null,inst_29971__$1,(0),null);
var inst_29973 = cljs.core.nth.call(null,inst_29971__$1,(1),null);
var inst_29974 = (inst_29972__$1 == null);
var state_29992__$1 = (function (){var statearr_29994 = state_29992;
(statearr_29994[(7)] = inst_29971__$1);

(statearr_29994[(8)] = inst_29972__$1);

(statearr_29994[(9)] = inst_29973);

return statearr_29994;
})();
if(cljs.core.truth_(inst_29974)){
var statearr_29995_30021 = state_29992__$1;
(statearr_29995_30021[(1)] = (8));

} else {
var statearr_29996_30022 = state_29992__$1;
(statearr_29996_30022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29993 === (1))){
var inst_29961 = cljs.core.vec.call(null,chs);
var inst_29962 = inst_29961;
var state_29992__$1 = (function (){var statearr_29997 = state_29992;
(statearr_29997[(10)] = inst_29962);

return statearr_29997;
})();
var statearr_29998_30023 = state_29992__$1;
(statearr_29998_30023[(2)] = null);

(statearr_29998_30023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29993 === (4))){
var inst_29962 = (state_29992[(10)]);
var state_29992__$1 = state_29992;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29992__$1,(7),inst_29962);
} else {
if((state_val_29993 === (6))){
var inst_29988 = (state_29992[(2)]);
var state_29992__$1 = state_29992;
var statearr_29999_30024 = state_29992__$1;
(statearr_29999_30024[(2)] = inst_29988);

(statearr_29999_30024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29993 === (3))){
var inst_29990 = (state_29992[(2)]);
var state_29992__$1 = state_29992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29992__$1,inst_29990);
} else {
if((state_val_29993 === (2))){
var inst_29962 = (state_29992[(10)]);
var inst_29964 = cljs.core.count.call(null,inst_29962);
var inst_29965 = (inst_29964 > (0));
var state_29992__$1 = state_29992;
if(cljs.core.truth_(inst_29965)){
var statearr_30001_30025 = state_29992__$1;
(statearr_30001_30025[(1)] = (4));

} else {
var statearr_30002_30026 = state_29992__$1;
(statearr_30002_30026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29993 === (11))){
var inst_29962 = (state_29992[(10)]);
var inst_29981 = (state_29992[(2)]);
var tmp30000 = inst_29962;
var inst_29962__$1 = tmp30000;
var state_29992__$1 = (function (){var statearr_30003 = state_29992;
(statearr_30003[(11)] = inst_29981);

(statearr_30003[(10)] = inst_29962__$1);

return statearr_30003;
})();
var statearr_30004_30027 = state_29992__$1;
(statearr_30004_30027[(2)] = null);

(statearr_30004_30027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29993 === (9))){
var inst_29972 = (state_29992[(8)]);
var state_29992__$1 = state_29992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29992__$1,(11),out,inst_29972);
} else {
if((state_val_29993 === (5))){
var inst_29986 = cljs.core.async.close_BANG_.call(null,out);
var state_29992__$1 = state_29992;
var statearr_30005_30028 = state_29992__$1;
(statearr_30005_30028[(2)] = inst_29986);

(statearr_30005_30028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29993 === (10))){
var inst_29984 = (state_29992[(2)]);
var state_29992__$1 = state_29992;
var statearr_30006_30029 = state_29992__$1;
(statearr_30006_30029[(2)] = inst_29984);

(statearr_30006_30029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29993 === (8))){
var inst_29971 = (state_29992[(7)]);
var inst_29972 = (state_29992[(8)]);
var inst_29962 = (state_29992[(10)]);
var inst_29973 = (state_29992[(9)]);
var inst_29976 = (function (){var cs = inst_29962;
var vec__29967 = inst_29971;
var v = inst_29972;
var c = inst_29973;
return ((function (cs,vec__29967,v,c,inst_29971,inst_29972,inst_29962,inst_29973,state_val_29993,c__27900__auto___30020,out){
return (function (p1__29957_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29957_SHARP_);
});
;})(cs,vec__29967,v,c,inst_29971,inst_29972,inst_29962,inst_29973,state_val_29993,c__27900__auto___30020,out))
})();
var inst_29977 = cljs.core.filterv.call(null,inst_29976,inst_29962);
var inst_29962__$1 = inst_29977;
var state_29992__$1 = (function (){var statearr_30007 = state_29992;
(statearr_30007[(10)] = inst_29962__$1);

return statearr_30007;
})();
var statearr_30008_30030 = state_29992__$1;
(statearr_30008_30030[(2)] = null);

(statearr_30008_30030[(1)] = (2));


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
});})(c__27900__auto___30020,out))
;
return ((function (switch__27788__auto__,c__27900__auto___30020,out){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_30012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30012[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_30012[(1)] = (1));

return statearr_30012;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_29992){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_29992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e30013){if((e30013 instanceof Object)){
var ex__27792__auto__ = e30013;
var statearr_30014_30031 = state_29992;
(statearr_30014_30031[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30032 = state_29992;
state_29992 = G__30032;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_29992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_29992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___30020,out))
})();
var state__27902__auto__ = (function (){var statearr_30015 = f__27901__auto__.call(null);
(statearr_30015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___30020);

return statearr_30015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___30020,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30033 = [];
var len__25852__auto___30082 = arguments.length;
var i__25853__auto___30083 = (0);
while(true){
if((i__25853__auto___30083 < len__25852__auto___30082)){
args30033.push((arguments[i__25853__auto___30083]));

var G__30084 = (i__25853__auto___30083 + (1));
i__25853__auto___30083 = G__30084;
continue;
} else {
}
break;
}

var G__30035 = args30033.length;
switch (G__30035) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30033.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27900__auto___30086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___30086,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___30086,out){
return (function (state_30059){
var state_val_30060 = (state_30059[(1)]);
if((state_val_30060 === (7))){
var inst_30041 = (state_30059[(7)]);
var inst_30041__$1 = (state_30059[(2)]);
var inst_30042 = (inst_30041__$1 == null);
var inst_30043 = cljs.core.not.call(null,inst_30042);
var state_30059__$1 = (function (){var statearr_30061 = state_30059;
(statearr_30061[(7)] = inst_30041__$1);

return statearr_30061;
})();
if(inst_30043){
var statearr_30062_30087 = state_30059__$1;
(statearr_30062_30087[(1)] = (8));

} else {
var statearr_30063_30088 = state_30059__$1;
(statearr_30063_30088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (1))){
var inst_30036 = (0);
var state_30059__$1 = (function (){var statearr_30064 = state_30059;
(statearr_30064[(8)] = inst_30036);

return statearr_30064;
})();
var statearr_30065_30089 = state_30059__$1;
(statearr_30065_30089[(2)] = null);

(statearr_30065_30089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (4))){
var state_30059__$1 = state_30059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30059__$1,(7),ch);
} else {
if((state_val_30060 === (6))){
var inst_30054 = (state_30059[(2)]);
var state_30059__$1 = state_30059;
var statearr_30066_30090 = state_30059__$1;
(statearr_30066_30090[(2)] = inst_30054);

(statearr_30066_30090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (3))){
var inst_30056 = (state_30059[(2)]);
var inst_30057 = cljs.core.async.close_BANG_.call(null,out);
var state_30059__$1 = (function (){var statearr_30067 = state_30059;
(statearr_30067[(9)] = inst_30056);

return statearr_30067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30059__$1,inst_30057);
} else {
if((state_val_30060 === (2))){
var inst_30036 = (state_30059[(8)]);
var inst_30038 = (inst_30036 < n);
var state_30059__$1 = state_30059;
if(cljs.core.truth_(inst_30038)){
var statearr_30068_30091 = state_30059__$1;
(statearr_30068_30091[(1)] = (4));

} else {
var statearr_30069_30092 = state_30059__$1;
(statearr_30069_30092[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (11))){
var inst_30036 = (state_30059[(8)]);
var inst_30046 = (state_30059[(2)]);
var inst_30047 = (inst_30036 + (1));
var inst_30036__$1 = inst_30047;
var state_30059__$1 = (function (){var statearr_30070 = state_30059;
(statearr_30070[(8)] = inst_30036__$1);

(statearr_30070[(10)] = inst_30046);

return statearr_30070;
})();
var statearr_30071_30093 = state_30059__$1;
(statearr_30071_30093[(2)] = null);

(statearr_30071_30093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (9))){
var state_30059__$1 = state_30059;
var statearr_30072_30094 = state_30059__$1;
(statearr_30072_30094[(2)] = null);

(statearr_30072_30094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (5))){
var state_30059__$1 = state_30059;
var statearr_30073_30095 = state_30059__$1;
(statearr_30073_30095[(2)] = null);

(statearr_30073_30095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (10))){
var inst_30051 = (state_30059[(2)]);
var state_30059__$1 = state_30059;
var statearr_30074_30096 = state_30059__$1;
(statearr_30074_30096[(2)] = inst_30051);

(statearr_30074_30096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (8))){
var inst_30041 = (state_30059[(7)]);
var state_30059__$1 = state_30059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30059__$1,(11),out,inst_30041);
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
});})(c__27900__auto___30086,out))
;
return ((function (switch__27788__auto__,c__27900__auto___30086,out){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_30078 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30078[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_30078[(1)] = (1));

return statearr_30078;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_30059){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_30059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e30079){if((e30079 instanceof Object)){
var ex__27792__auto__ = e30079;
var statearr_30080_30097 = state_30059;
(statearr_30080_30097[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30098 = state_30059;
state_30059 = G__30098;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_30059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_30059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___30086,out))
})();
var state__27902__auto__ = (function (){var statearr_30081 = f__27901__auto__.call(null);
(statearr_30081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___30086);

return statearr_30081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___30086,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30106 = (function (map_LT_,f,ch,meta30107){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30107 = meta30107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30108,meta30107__$1){
var self__ = this;
var _30108__$1 = this;
return (new cljs.core.async.t_cljs$core$async30106(self__.map_LT_,self__.f,self__.ch,meta30107__$1));
});

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30108){
var self__ = this;
var _30108__$1 = this;
return self__.meta30107;
});

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30109 = (function (map_LT_,f,ch,meta30107,_,fn1,meta30110){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30107 = meta30107;
this._ = _;
this.fn1 = fn1;
this.meta30110 = meta30110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30111,meta30110__$1){
var self__ = this;
var _30111__$1 = this;
return (new cljs.core.async.t_cljs$core$async30109(self__.map_LT_,self__.f,self__.ch,self__.meta30107,self__._,self__.fn1,meta30110__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30111){
var self__ = this;
var _30111__$1 = this;
return self__.meta30110;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30099_SHARP_){
return f1.call(null,(((p1__30099_SHARP_ == null))?null:self__.f.call(null,p1__30099_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30109.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30107","meta30107",739480091,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30106","cljs.core.async/t_cljs$core$async30106",-1684504038,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30110","meta30110",-1676714824,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30109";

cljs.core.async.t_cljs$core$async30109.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async30109");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30109 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30109(map_LT___$1,f__$1,ch__$1,meta30107__$1,___$2,fn1__$1,meta30110){
return (new cljs.core.async.t_cljs$core$async30109(map_LT___$1,f__$1,ch__$1,meta30107__$1,___$2,fn1__$1,meta30110));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30109(self__.map_LT_,self__.f,self__.ch,self__.meta30107,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24765__auto__ = ret;
if(cljs.core.truth_(and__24765__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24765__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30107","meta30107",739480091,null)], null);
});

cljs.core.async.t_cljs$core$async30106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30106";

cljs.core.async.t_cljs$core$async30106.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async30106");
});

cljs.core.async.__GT_t_cljs$core$async30106 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30106(map_LT___$1,f__$1,ch__$1,meta30107){
return (new cljs.core.async.t_cljs$core$async30106(map_LT___$1,f__$1,ch__$1,meta30107));
});

}

return (new cljs.core.async.t_cljs$core$async30106(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30115 = (function (map_GT_,f,ch,meta30116){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30116 = meta30116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30117,meta30116__$1){
var self__ = this;
var _30117__$1 = this;
return (new cljs.core.async.t_cljs$core$async30115(self__.map_GT_,self__.f,self__.ch,meta30116__$1));
});

cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30117){
var self__ = this;
var _30117__$1 = this;
return self__.meta30116;
});

cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30116","meta30116",-637466473,null)], null);
});

cljs.core.async.t_cljs$core$async30115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30115";

cljs.core.async.t_cljs$core$async30115.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async30115");
});

cljs.core.async.__GT_t_cljs$core$async30115 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30115(map_GT___$1,f__$1,ch__$1,meta30116){
return (new cljs.core.async.t_cljs$core$async30115(map_GT___$1,f__$1,ch__$1,meta30116));
});

}

return (new cljs.core.async.t_cljs$core$async30115(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30121 = (function (filter_GT_,p,ch,meta30122){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30122 = meta30122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30123,meta30122__$1){
var self__ = this;
var _30123__$1 = this;
return (new cljs.core.async.t_cljs$core$async30121(self__.filter_GT_,self__.p,self__.ch,meta30122__$1));
});

cljs.core.async.t_cljs$core$async30121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30123){
var self__ = this;
var _30123__$1 = this;
return self__.meta30122;
});

cljs.core.async.t_cljs$core$async30121.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30121.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30121.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30121.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30122","meta30122",-1317137175,null)], null);
});

cljs.core.async.t_cljs$core$async30121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30121";

cljs.core.async.t_cljs$core$async30121.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async30121");
});

cljs.core.async.__GT_t_cljs$core$async30121 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30121(filter_GT___$1,p__$1,ch__$1,meta30122){
return (new cljs.core.async.t_cljs$core$async30121(filter_GT___$1,p__$1,ch__$1,meta30122));
});

}

return (new cljs.core.async.t_cljs$core$async30121(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30124 = [];
var len__25852__auto___30168 = arguments.length;
var i__25853__auto___30169 = (0);
while(true){
if((i__25853__auto___30169 < len__25852__auto___30168)){
args30124.push((arguments[i__25853__auto___30169]));

var G__30170 = (i__25853__auto___30169 + (1));
i__25853__auto___30169 = G__30170;
continue;
} else {
}
break;
}

var G__30126 = args30124.length;
switch (G__30126) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30124.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27900__auto___30172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___30172,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___30172,out){
return (function (state_30147){
var state_val_30148 = (state_30147[(1)]);
if((state_val_30148 === (7))){
var inst_30143 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
var statearr_30149_30173 = state_30147__$1;
(statearr_30149_30173[(2)] = inst_30143);

(statearr_30149_30173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (1))){
var state_30147__$1 = state_30147;
var statearr_30150_30174 = state_30147__$1;
(statearr_30150_30174[(2)] = null);

(statearr_30150_30174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (4))){
var inst_30129 = (state_30147[(7)]);
var inst_30129__$1 = (state_30147[(2)]);
var inst_30130 = (inst_30129__$1 == null);
var state_30147__$1 = (function (){var statearr_30151 = state_30147;
(statearr_30151[(7)] = inst_30129__$1);

return statearr_30151;
})();
if(cljs.core.truth_(inst_30130)){
var statearr_30152_30175 = state_30147__$1;
(statearr_30152_30175[(1)] = (5));

} else {
var statearr_30153_30176 = state_30147__$1;
(statearr_30153_30176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (6))){
var inst_30129 = (state_30147[(7)]);
var inst_30134 = p.call(null,inst_30129);
var state_30147__$1 = state_30147;
if(cljs.core.truth_(inst_30134)){
var statearr_30154_30177 = state_30147__$1;
(statearr_30154_30177[(1)] = (8));

} else {
var statearr_30155_30178 = state_30147__$1;
(statearr_30155_30178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (3))){
var inst_30145 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30147__$1,inst_30145);
} else {
if((state_val_30148 === (2))){
var state_30147__$1 = state_30147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30147__$1,(4),ch);
} else {
if((state_val_30148 === (11))){
var inst_30137 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
var statearr_30156_30179 = state_30147__$1;
(statearr_30156_30179[(2)] = inst_30137);

(statearr_30156_30179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (9))){
var state_30147__$1 = state_30147;
var statearr_30157_30180 = state_30147__$1;
(statearr_30157_30180[(2)] = null);

(statearr_30157_30180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (5))){
var inst_30132 = cljs.core.async.close_BANG_.call(null,out);
var state_30147__$1 = state_30147;
var statearr_30158_30181 = state_30147__$1;
(statearr_30158_30181[(2)] = inst_30132);

(statearr_30158_30181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (10))){
var inst_30140 = (state_30147[(2)]);
var state_30147__$1 = (function (){var statearr_30159 = state_30147;
(statearr_30159[(8)] = inst_30140);

return statearr_30159;
})();
var statearr_30160_30182 = state_30147__$1;
(statearr_30160_30182[(2)] = null);

(statearr_30160_30182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (8))){
var inst_30129 = (state_30147[(7)]);
var state_30147__$1 = state_30147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30147__$1,(11),out,inst_30129);
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
});})(c__27900__auto___30172,out))
;
return ((function (switch__27788__auto__,c__27900__auto___30172,out){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_30164 = [null,null,null,null,null,null,null,null,null];
(statearr_30164[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_30164[(1)] = (1));

return statearr_30164;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_30147){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_30147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e30165){if((e30165 instanceof Object)){
var ex__27792__auto__ = e30165;
var statearr_30166_30183 = state_30147;
(statearr_30166_30183[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30184 = state_30147;
state_30147 = G__30184;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_30147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_30147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___30172,out))
})();
var state__27902__auto__ = (function (){var statearr_30167 = f__27901__auto__.call(null);
(statearr_30167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___30172);

return statearr_30167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___30172,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30185 = [];
var len__25852__auto___30188 = arguments.length;
var i__25853__auto___30189 = (0);
while(true){
if((i__25853__auto___30189 < len__25852__auto___30188)){
args30185.push((arguments[i__25853__auto___30189]));

var G__30190 = (i__25853__auto___30189 + (1));
i__25853__auto___30189 = G__30190;
continue;
} else {
}
break;
}

var G__30187 = args30185.length;
switch (G__30187) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30185.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto__){
return (function (state_30357){
var state_val_30358 = (state_30357[(1)]);
if((state_val_30358 === (7))){
var inst_30353 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30359_30400 = state_30357__$1;
(statearr_30359_30400[(2)] = inst_30353);

(statearr_30359_30400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (20))){
var inst_30323 = (state_30357[(7)]);
var inst_30334 = (state_30357[(2)]);
var inst_30335 = cljs.core.next.call(null,inst_30323);
var inst_30309 = inst_30335;
var inst_30310 = null;
var inst_30311 = (0);
var inst_30312 = (0);
var state_30357__$1 = (function (){var statearr_30360 = state_30357;
(statearr_30360[(8)] = inst_30309);

(statearr_30360[(9)] = inst_30310);

(statearr_30360[(10)] = inst_30311);

(statearr_30360[(11)] = inst_30334);

(statearr_30360[(12)] = inst_30312);

return statearr_30360;
})();
var statearr_30361_30401 = state_30357__$1;
(statearr_30361_30401[(2)] = null);

(statearr_30361_30401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (1))){
var state_30357__$1 = state_30357;
var statearr_30362_30402 = state_30357__$1;
(statearr_30362_30402[(2)] = null);

(statearr_30362_30402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (4))){
var inst_30298 = (state_30357[(13)]);
var inst_30298__$1 = (state_30357[(2)]);
var inst_30299 = (inst_30298__$1 == null);
var state_30357__$1 = (function (){var statearr_30363 = state_30357;
(statearr_30363[(13)] = inst_30298__$1);

return statearr_30363;
})();
if(cljs.core.truth_(inst_30299)){
var statearr_30364_30403 = state_30357__$1;
(statearr_30364_30403[(1)] = (5));

} else {
var statearr_30365_30404 = state_30357__$1;
(statearr_30365_30404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (15))){
var state_30357__$1 = state_30357;
var statearr_30369_30405 = state_30357__$1;
(statearr_30369_30405[(2)] = null);

(statearr_30369_30405[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (21))){
var state_30357__$1 = state_30357;
var statearr_30370_30406 = state_30357__$1;
(statearr_30370_30406[(2)] = null);

(statearr_30370_30406[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (13))){
var inst_30309 = (state_30357[(8)]);
var inst_30310 = (state_30357[(9)]);
var inst_30311 = (state_30357[(10)]);
var inst_30312 = (state_30357[(12)]);
var inst_30319 = (state_30357[(2)]);
var inst_30320 = (inst_30312 + (1));
var tmp30366 = inst_30309;
var tmp30367 = inst_30310;
var tmp30368 = inst_30311;
var inst_30309__$1 = tmp30366;
var inst_30310__$1 = tmp30367;
var inst_30311__$1 = tmp30368;
var inst_30312__$1 = inst_30320;
var state_30357__$1 = (function (){var statearr_30371 = state_30357;
(statearr_30371[(8)] = inst_30309__$1);

(statearr_30371[(9)] = inst_30310__$1);

(statearr_30371[(10)] = inst_30311__$1);

(statearr_30371[(12)] = inst_30312__$1);

(statearr_30371[(14)] = inst_30319);

return statearr_30371;
})();
var statearr_30372_30407 = state_30357__$1;
(statearr_30372_30407[(2)] = null);

(statearr_30372_30407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (22))){
var state_30357__$1 = state_30357;
var statearr_30373_30408 = state_30357__$1;
(statearr_30373_30408[(2)] = null);

(statearr_30373_30408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (6))){
var inst_30298 = (state_30357[(13)]);
var inst_30307 = f.call(null,inst_30298);
var inst_30308 = cljs.core.seq.call(null,inst_30307);
var inst_30309 = inst_30308;
var inst_30310 = null;
var inst_30311 = (0);
var inst_30312 = (0);
var state_30357__$1 = (function (){var statearr_30374 = state_30357;
(statearr_30374[(8)] = inst_30309);

(statearr_30374[(9)] = inst_30310);

(statearr_30374[(10)] = inst_30311);

(statearr_30374[(12)] = inst_30312);

return statearr_30374;
})();
var statearr_30375_30409 = state_30357__$1;
(statearr_30375_30409[(2)] = null);

(statearr_30375_30409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (17))){
var inst_30323 = (state_30357[(7)]);
var inst_30327 = cljs.core.chunk_first.call(null,inst_30323);
var inst_30328 = cljs.core.chunk_rest.call(null,inst_30323);
var inst_30329 = cljs.core.count.call(null,inst_30327);
var inst_30309 = inst_30328;
var inst_30310 = inst_30327;
var inst_30311 = inst_30329;
var inst_30312 = (0);
var state_30357__$1 = (function (){var statearr_30376 = state_30357;
(statearr_30376[(8)] = inst_30309);

(statearr_30376[(9)] = inst_30310);

(statearr_30376[(10)] = inst_30311);

(statearr_30376[(12)] = inst_30312);

return statearr_30376;
})();
var statearr_30377_30410 = state_30357__$1;
(statearr_30377_30410[(2)] = null);

(statearr_30377_30410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (3))){
var inst_30355 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30357__$1,inst_30355);
} else {
if((state_val_30358 === (12))){
var inst_30343 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30378_30411 = state_30357__$1;
(statearr_30378_30411[(2)] = inst_30343);

(statearr_30378_30411[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (2))){
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30357__$1,(4),in$);
} else {
if((state_val_30358 === (23))){
var inst_30351 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30379_30412 = state_30357__$1;
(statearr_30379_30412[(2)] = inst_30351);

(statearr_30379_30412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (19))){
var inst_30338 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30380_30413 = state_30357__$1;
(statearr_30380_30413[(2)] = inst_30338);

(statearr_30380_30413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (11))){
var inst_30309 = (state_30357[(8)]);
var inst_30323 = (state_30357[(7)]);
var inst_30323__$1 = cljs.core.seq.call(null,inst_30309);
var state_30357__$1 = (function (){var statearr_30381 = state_30357;
(statearr_30381[(7)] = inst_30323__$1);

return statearr_30381;
})();
if(inst_30323__$1){
var statearr_30382_30414 = state_30357__$1;
(statearr_30382_30414[(1)] = (14));

} else {
var statearr_30383_30415 = state_30357__$1;
(statearr_30383_30415[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (9))){
var inst_30345 = (state_30357[(2)]);
var inst_30346 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30357__$1 = (function (){var statearr_30384 = state_30357;
(statearr_30384[(15)] = inst_30345);

return statearr_30384;
})();
if(cljs.core.truth_(inst_30346)){
var statearr_30385_30416 = state_30357__$1;
(statearr_30385_30416[(1)] = (21));

} else {
var statearr_30386_30417 = state_30357__$1;
(statearr_30386_30417[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (5))){
var inst_30301 = cljs.core.async.close_BANG_.call(null,out);
var state_30357__$1 = state_30357;
var statearr_30387_30418 = state_30357__$1;
(statearr_30387_30418[(2)] = inst_30301);

(statearr_30387_30418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (14))){
var inst_30323 = (state_30357[(7)]);
var inst_30325 = cljs.core.chunked_seq_QMARK_.call(null,inst_30323);
var state_30357__$1 = state_30357;
if(inst_30325){
var statearr_30388_30419 = state_30357__$1;
(statearr_30388_30419[(1)] = (17));

} else {
var statearr_30389_30420 = state_30357__$1;
(statearr_30389_30420[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (16))){
var inst_30341 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30390_30421 = state_30357__$1;
(statearr_30390_30421[(2)] = inst_30341);

(statearr_30390_30421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (10))){
var inst_30310 = (state_30357[(9)]);
var inst_30312 = (state_30357[(12)]);
var inst_30317 = cljs.core._nth.call(null,inst_30310,inst_30312);
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30357__$1,(13),out,inst_30317);
} else {
if((state_val_30358 === (18))){
var inst_30323 = (state_30357[(7)]);
var inst_30332 = cljs.core.first.call(null,inst_30323);
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30357__$1,(20),out,inst_30332);
} else {
if((state_val_30358 === (8))){
var inst_30311 = (state_30357[(10)]);
var inst_30312 = (state_30357[(12)]);
var inst_30314 = (inst_30312 < inst_30311);
var inst_30315 = inst_30314;
var state_30357__$1 = state_30357;
if(cljs.core.truth_(inst_30315)){
var statearr_30391_30422 = state_30357__$1;
(statearr_30391_30422[(1)] = (10));

} else {
var statearr_30392_30423 = state_30357__$1;
(statearr_30392_30423[(1)] = (11));

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
}
}
}
}
}
}
});})(c__27900__auto__))
;
return ((function (switch__27788__auto__,c__27900__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27789__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27789__auto____0 = (function (){
var statearr_30396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30396[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27789__auto__);

(statearr_30396[(1)] = (1));

return statearr_30396;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27789__auto____1 = (function (state_30357){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_30357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e30397){if((e30397 instanceof Object)){
var ex__27792__auto__ = e30397;
var statearr_30398_30424 = state_30357;
(statearr_30398_30424[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30425 = state_30357;
state_30357 = G__30425;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27789__auto__ = function(state_30357){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27789__auto____1.call(this,state_30357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27789__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27789__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto__))
})();
var state__27902__auto__ = (function (){var statearr_30399 = f__27901__auto__.call(null);
(statearr_30399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto__);

return statearr_30399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__))
);

return c__27900__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30426 = [];
var len__25852__auto___30429 = arguments.length;
var i__25853__auto___30430 = (0);
while(true){
if((i__25853__auto___30430 < len__25852__auto___30429)){
args30426.push((arguments[i__25853__auto___30430]));

var G__30431 = (i__25853__auto___30430 + (1));
i__25853__auto___30430 = G__30431;
continue;
} else {
}
break;
}

var G__30428 = args30426.length;
switch (G__30428) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30426.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30433 = [];
var len__25852__auto___30436 = arguments.length;
var i__25853__auto___30437 = (0);
while(true){
if((i__25853__auto___30437 < len__25852__auto___30436)){
args30433.push((arguments[i__25853__auto___30437]));

var G__30438 = (i__25853__auto___30437 + (1));
i__25853__auto___30437 = G__30438;
continue;
} else {
}
break;
}

var G__30435 = args30433.length;
switch (G__30435) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30433.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30440 = [];
var len__25852__auto___30491 = arguments.length;
var i__25853__auto___30492 = (0);
while(true){
if((i__25853__auto___30492 < len__25852__auto___30491)){
args30440.push((arguments[i__25853__auto___30492]));

var G__30493 = (i__25853__auto___30492 + (1));
i__25853__auto___30492 = G__30493;
continue;
} else {
}
break;
}

var G__30442 = args30440.length;
switch (G__30442) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30440.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27900__auto___30495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___30495,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___30495,out){
return (function (state_30466){
var state_val_30467 = (state_30466[(1)]);
if((state_val_30467 === (7))){
var inst_30461 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30468_30496 = state_30466__$1;
(statearr_30468_30496[(2)] = inst_30461);

(statearr_30468_30496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (1))){
var inst_30443 = null;
var state_30466__$1 = (function (){var statearr_30469 = state_30466;
(statearr_30469[(7)] = inst_30443);

return statearr_30469;
})();
var statearr_30470_30497 = state_30466__$1;
(statearr_30470_30497[(2)] = null);

(statearr_30470_30497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (4))){
var inst_30446 = (state_30466[(8)]);
var inst_30446__$1 = (state_30466[(2)]);
var inst_30447 = (inst_30446__$1 == null);
var inst_30448 = cljs.core.not.call(null,inst_30447);
var state_30466__$1 = (function (){var statearr_30471 = state_30466;
(statearr_30471[(8)] = inst_30446__$1);

return statearr_30471;
})();
if(inst_30448){
var statearr_30472_30498 = state_30466__$1;
(statearr_30472_30498[(1)] = (5));

} else {
var statearr_30473_30499 = state_30466__$1;
(statearr_30473_30499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (6))){
var state_30466__$1 = state_30466;
var statearr_30474_30500 = state_30466__$1;
(statearr_30474_30500[(2)] = null);

(statearr_30474_30500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (3))){
var inst_30463 = (state_30466[(2)]);
var inst_30464 = cljs.core.async.close_BANG_.call(null,out);
var state_30466__$1 = (function (){var statearr_30475 = state_30466;
(statearr_30475[(9)] = inst_30463);

return statearr_30475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30466__$1,inst_30464);
} else {
if((state_val_30467 === (2))){
var state_30466__$1 = state_30466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30466__$1,(4),ch);
} else {
if((state_val_30467 === (11))){
var inst_30446 = (state_30466[(8)]);
var inst_30455 = (state_30466[(2)]);
var inst_30443 = inst_30446;
var state_30466__$1 = (function (){var statearr_30476 = state_30466;
(statearr_30476[(10)] = inst_30455);

(statearr_30476[(7)] = inst_30443);

return statearr_30476;
})();
var statearr_30477_30501 = state_30466__$1;
(statearr_30477_30501[(2)] = null);

(statearr_30477_30501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (9))){
var inst_30446 = (state_30466[(8)]);
var state_30466__$1 = state_30466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30466__$1,(11),out,inst_30446);
} else {
if((state_val_30467 === (5))){
var inst_30446 = (state_30466[(8)]);
var inst_30443 = (state_30466[(7)]);
var inst_30450 = cljs.core._EQ_.call(null,inst_30446,inst_30443);
var state_30466__$1 = state_30466;
if(inst_30450){
var statearr_30479_30502 = state_30466__$1;
(statearr_30479_30502[(1)] = (8));

} else {
var statearr_30480_30503 = state_30466__$1;
(statearr_30480_30503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (10))){
var inst_30458 = (state_30466[(2)]);
var state_30466__$1 = state_30466;
var statearr_30481_30504 = state_30466__$1;
(statearr_30481_30504[(2)] = inst_30458);

(statearr_30481_30504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30467 === (8))){
var inst_30443 = (state_30466[(7)]);
var tmp30478 = inst_30443;
var inst_30443__$1 = tmp30478;
var state_30466__$1 = (function (){var statearr_30482 = state_30466;
(statearr_30482[(7)] = inst_30443__$1);

return statearr_30482;
})();
var statearr_30483_30505 = state_30466__$1;
(statearr_30483_30505[(2)] = null);

(statearr_30483_30505[(1)] = (2));


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
});})(c__27900__auto___30495,out))
;
return ((function (switch__27788__auto__,c__27900__auto___30495,out){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_30487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30487[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_30487[(1)] = (1));

return statearr_30487;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_30466){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_30466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e30488){if((e30488 instanceof Object)){
var ex__27792__auto__ = e30488;
var statearr_30489_30506 = state_30466;
(statearr_30489_30506[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30507 = state_30466;
state_30466 = G__30507;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_30466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_30466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___30495,out))
})();
var state__27902__auto__ = (function (){var statearr_30490 = f__27901__auto__.call(null);
(statearr_30490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___30495);

return statearr_30490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___30495,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30508 = [];
var len__25852__auto___30578 = arguments.length;
var i__25853__auto___30579 = (0);
while(true){
if((i__25853__auto___30579 < len__25852__auto___30578)){
args30508.push((arguments[i__25853__auto___30579]));

var G__30580 = (i__25853__auto___30579 + (1));
i__25853__auto___30579 = G__30580;
continue;
} else {
}
break;
}

var G__30510 = args30508.length;
switch (G__30510) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30508.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27900__auto___30582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___30582,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___30582,out){
return (function (state_30548){
var state_val_30549 = (state_30548[(1)]);
if((state_val_30549 === (7))){
var inst_30544 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
var statearr_30550_30583 = state_30548__$1;
(statearr_30550_30583[(2)] = inst_30544);

(statearr_30550_30583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (1))){
var inst_30511 = (new Array(n));
var inst_30512 = inst_30511;
var inst_30513 = (0);
var state_30548__$1 = (function (){var statearr_30551 = state_30548;
(statearr_30551[(7)] = inst_30512);

(statearr_30551[(8)] = inst_30513);

return statearr_30551;
})();
var statearr_30552_30584 = state_30548__$1;
(statearr_30552_30584[(2)] = null);

(statearr_30552_30584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (4))){
var inst_30516 = (state_30548[(9)]);
var inst_30516__$1 = (state_30548[(2)]);
var inst_30517 = (inst_30516__$1 == null);
var inst_30518 = cljs.core.not.call(null,inst_30517);
var state_30548__$1 = (function (){var statearr_30553 = state_30548;
(statearr_30553[(9)] = inst_30516__$1);

return statearr_30553;
})();
if(inst_30518){
var statearr_30554_30585 = state_30548__$1;
(statearr_30554_30585[(1)] = (5));

} else {
var statearr_30555_30586 = state_30548__$1;
(statearr_30555_30586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (15))){
var inst_30538 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
var statearr_30556_30587 = state_30548__$1;
(statearr_30556_30587[(2)] = inst_30538);

(statearr_30556_30587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (13))){
var state_30548__$1 = state_30548;
var statearr_30557_30588 = state_30548__$1;
(statearr_30557_30588[(2)] = null);

(statearr_30557_30588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (6))){
var inst_30513 = (state_30548[(8)]);
var inst_30534 = (inst_30513 > (0));
var state_30548__$1 = state_30548;
if(cljs.core.truth_(inst_30534)){
var statearr_30558_30589 = state_30548__$1;
(statearr_30558_30589[(1)] = (12));

} else {
var statearr_30559_30590 = state_30548__$1;
(statearr_30559_30590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (3))){
var inst_30546 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30548__$1,inst_30546);
} else {
if((state_val_30549 === (12))){
var inst_30512 = (state_30548[(7)]);
var inst_30536 = cljs.core.vec.call(null,inst_30512);
var state_30548__$1 = state_30548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30548__$1,(15),out,inst_30536);
} else {
if((state_val_30549 === (2))){
var state_30548__$1 = state_30548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30548__$1,(4),ch);
} else {
if((state_val_30549 === (11))){
var inst_30528 = (state_30548[(2)]);
var inst_30529 = (new Array(n));
var inst_30512 = inst_30529;
var inst_30513 = (0);
var state_30548__$1 = (function (){var statearr_30560 = state_30548;
(statearr_30560[(10)] = inst_30528);

(statearr_30560[(7)] = inst_30512);

(statearr_30560[(8)] = inst_30513);

return statearr_30560;
})();
var statearr_30561_30591 = state_30548__$1;
(statearr_30561_30591[(2)] = null);

(statearr_30561_30591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (9))){
var inst_30512 = (state_30548[(7)]);
var inst_30526 = cljs.core.vec.call(null,inst_30512);
var state_30548__$1 = state_30548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30548__$1,(11),out,inst_30526);
} else {
if((state_val_30549 === (5))){
var inst_30512 = (state_30548[(7)]);
var inst_30516 = (state_30548[(9)]);
var inst_30521 = (state_30548[(11)]);
var inst_30513 = (state_30548[(8)]);
var inst_30520 = (inst_30512[inst_30513] = inst_30516);
var inst_30521__$1 = (inst_30513 + (1));
var inst_30522 = (inst_30521__$1 < n);
var state_30548__$1 = (function (){var statearr_30562 = state_30548;
(statearr_30562[(12)] = inst_30520);

(statearr_30562[(11)] = inst_30521__$1);

return statearr_30562;
})();
if(cljs.core.truth_(inst_30522)){
var statearr_30563_30592 = state_30548__$1;
(statearr_30563_30592[(1)] = (8));

} else {
var statearr_30564_30593 = state_30548__$1;
(statearr_30564_30593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (14))){
var inst_30541 = (state_30548[(2)]);
var inst_30542 = cljs.core.async.close_BANG_.call(null,out);
var state_30548__$1 = (function (){var statearr_30566 = state_30548;
(statearr_30566[(13)] = inst_30541);

return statearr_30566;
})();
var statearr_30567_30594 = state_30548__$1;
(statearr_30567_30594[(2)] = inst_30542);

(statearr_30567_30594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (10))){
var inst_30532 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
var statearr_30568_30595 = state_30548__$1;
(statearr_30568_30595[(2)] = inst_30532);

(statearr_30568_30595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (8))){
var inst_30512 = (state_30548[(7)]);
var inst_30521 = (state_30548[(11)]);
var tmp30565 = inst_30512;
var inst_30512__$1 = tmp30565;
var inst_30513 = inst_30521;
var state_30548__$1 = (function (){var statearr_30569 = state_30548;
(statearr_30569[(7)] = inst_30512__$1);

(statearr_30569[(8)] = inst_30513);

return statearr_30569;
})();
var statearr_30570_30596 = state_30548__$1;
(statearr_30570_30596[(2)] = null);

(statearr_30570_30596[(1)] = (2));


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
});})(c__27900__auto___30582,out))
;
return ((function (switch__27788__auto__,c__27900__auto___30582,out){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_30574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30574[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_30574[(1)] = (1));

return statearr_30574;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_30548){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_30548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e30575){if((e30575 instanceof Object)){
var ex__27792__auto__ = e30575;
var statearr_30576_30597 = state_30548;
(statearr_30576_30597[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30598 = state_30548;
state_30548 = G__30598;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_30548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_30548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___30582,out))
})();
var state__27902__auto__ = (function (){var statearr_30577 = f__27901__auto__.call(null);
(statearr_30577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___30582);

return statearr_30577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___30582,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30599 = [];
var len__25852__auto___30673 = arguments.length;
var i__25853__auto___30674 = (0);
while(true){
if((i__25853__auto___30674 < len__25852__auto___30673)){
args30599.push((arguments[i__25853__auto___30674]));

var G__30675 = (i__25853__auto___30674 + (1));
i__25853__auto___30674 = G__30675;
continue;
} else {
}
break;
}

var G__30601 = args30599.length;
switch (G__30601) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30599.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27900__auto___30677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___30677,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___30677,out){
return (function (state_30643){
var state_val_30644 = (state_30643[(1)]);
if((state_val_30644 === (7))){
var inst_30639 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
var statearr_30645_30678 = state_30643__$1;
(statearr_30645_30678[(2)] = inst_30639);

(statearr_30645_30678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (1))){
var inst_30602 = [];
var inst_30603 = inst_30602;
var inst_30604 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30643__$1 = (function (){var statearr_30646 = state_30643;
(statearr_30646[(7)] = inst_30604);

(statearr_30646[(8)] = inst_30603);

return statearr_30646;
})();
var statearr_30647_30679 = state_30643__$1;
(statearr_30647_30679[(2)] = null);

(statearr_30647_30679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (4))){
var inst_30607 = (state_30643[(9)]);
var inst_30607__$1 = (state_30643[(2)]);
var inst_30608 = (inst_30607__$1 == null);
var inst_30609 = cljs.core.not.call(null,inst_30608);
var state_30643__$1 = (function (){var statearr_30648 = state_30643;
(statearr_30648[(9)] = inst_30607__$1);

return statearr_30648;
})();
if(inst_30609){
var statearr_30649_30680 = state_30643__$1;
(statearr_30649_30680[(1)] = (5));

} else {
var statearr_30650_30681 = state_30643__$1;
(statearr_30650_30681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (15))){
var inst_30633 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
var statearr_30651_30682 = state_30643__$1;
(statearr_30651_30682[(2)] = inst_30633);

(statearr_30651_30682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (13))){
var state_30643__$1 = state_30643;
var statearr_30652_30683 = state_30643__$1;
(statearr_30652_30683[(2)] = null);

(statearr_30652_30683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (6))){
var inst_30603 = (state_30643[(8)]);
var inst_30628 = inst_30603.length;
var inst_30629 = (inst_30628 > (0));
var state_30643__$1 = state_30643;
if(cljs.core.truth_(inst_30629)){
var statearr_30653_30684 = state_30643__$1;
(statearr_30653_30684[(1)] = (12));

} else {
var statearr_30654_30685 = state_30643__$1;
(statearr_30654_30685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (3))){
var inst_30641 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30643__$1,inst_30641);
} else {
if((state_val_30644 === (12))){
var inst_30603 = (state_30643[(8)]);
var inst_30631 = cljs.core.vec.call(null,inst_30603);
var state_30643__$1 = state_30643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30643__$1,(15),out,inst_30631);
} else {
if((state_val_30644 === (2))){
var state_30643__$1 = state_30643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30643__$1,(4),ch);
} else {
if((state_val_30644 === (11))){
var inst_30607 = (state_30643[(9)]);
var inst_30611 = (state_30643[(10)]);
var inst_30621 = (state_30643[(2)]);
var inst_30622 = [];
var inst_30623 = inst_30622.push(inst_30607);
var inst_30603 = inst_30622;
var inst_30604 = inst_30611;
var state_30643__$1 = (function (){var statearr_30655 = state_30643;
(statearr_30655[(11)] = inst_30623);

(statearr_30655[(7)] = inst_30604);

(statearr_30655[(12)] = inst_30621);

(statearr_30655[(8)] = inst_30603);

return statearr_30655;
})();
var statearr_30656_30686 = state_30643__$1;
(statearr_30656_30686[(2)] = null);

(statearr_30656_30686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (9))){
var inst_30603 = (state_30643[(8)]);
var inst_30619 = cljs.core.vec.call(null,inst_30603);
var state_30643__$1 = state_30643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30643__$1,(11),out,inst_30619);
} else {
if((state_val_30644 === (5))){
var inst_30604 = (state_30643[(7)]);
var inst_30607 = (state_30643[(9)]);
var inst_30611 = (state_30643[(10)]);
var inst_30611__$1 = f.call(null,inst_30607);
var inst_30612 = cljs.core._EQ_.call(null,inst_30611__$1,inst_30604);
var inst_30613 = cljs.core.keyword_identical_QMARK_.call(null,inst_30604,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30614 = (inst_30612) || (inst_30613);
var state_30643__$1 = (function (){var statearr_30657 = state_30643;
(statearr_30657[(10)] = inst_30611__$1);

return statearr_30657;
})();
if(cljs.core.truth_(inst_30614)){
var statearr_30658_30687 = state_30643__$1;
(statearr_30658_30687[(1)] = (8));

} else {
var statearr_30659_30688 = state_30643__$1;
(statearr_30659_30688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (14))){
var inst_30636 = (state_30643[(2)]);
var inst_30637 = cljs.core.async.close_BANG_.call(null,out);
var state_30643__$1 = (function (){var statearr_30661 = state_30643;
(statearr_30661[(13)] = inst_30636);

return statearr_30661;
})();
var statearr_30662_30689 = state_30643__$1;
(statearr_30662_30689[(2)] = inst_30637);

(statearr_30662_30689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (10))){
var inst_30626 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
var statearr_30663_30690 = state_30643__$1;
(statearr_30663_30690[(2)] = inst_30626);

(statearr_30663_30690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (8))){
var inst_30607 = (state_30643[(9)]);
var inst_30603 = (state_30643[(8)]);
var inst_30611 = (state_30643[(10)]);
var inst_30616 = inst_30603.push(inst_30607);
var tmp30660 = inst_30603;
var inst_30603__$1 = tmp30660;
var inst_30604 = inst_30611;
var state_30643__$1 = (function (){var statearr_30664 = state_30643;
(statearr_30664[(7)] = inst_30604);

(statearr_30664[(8)] = inst_30603__$1);

(statearr_30664[(14)] = inst_30616);

return statearr_30664;
})();
var statearr_30665_30691 = state_30643__$1;
(statearr_30665_30691[(2)] = null);

(statearr_30665_30691[(1)] = (2));


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
});})(c__27900__auto___30677,out))
;
return ((function (switch__27788__auto__,c__27900__auto___30677,out){
return (function() {
var cljs$core$async$state_machine__27789__auto__ = null;
var cljs$core$async$state_machine__27789__auto____0 = (function (){
var statearr_30669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30669[(0)] = cljs$core$async$state_machine__27789__auto__);

(statearr_30669[(1)] = (1));

return statearr_30669;
});
var cljs$core$async$state_machine__27789__auto____1 = (function (state_30643){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_30643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e30670){if((e30670 instanceof Object)){
var ex__27792__auto__ = e30670;
var statearr_30671_30692 = state_30643;
(statearr_30671_30692[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30693 = state_30643;
state_30643 = G__30693;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
cljs$core$async$state_machine__27789__auto__ = function(state_30643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27789__auto____1.call(this,state_30643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27789__auto____0;
cljs$core$async$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27789__auto____1;
return cljs$core$async$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___30677,out))
})();
var state__27902__auto__ = (function (){var statearr_30672 = f__27901__auto__.call(null);
(statearr_30672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___30677);

return statearr_30672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___30677,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1482247107089