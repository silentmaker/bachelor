// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24777__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24777__auto__){
return or__24777__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24777__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30756_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30756_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30761 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30762 = null;
var count__30763 = (0);
var i__30764 = (0);
while(true){
if((i__30764 < count__30763)){
var n = cljs.core._nth.call(null,chunk__30762,i__30764);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30765 = seq__30761;
var G__30766 = chunk__30762;
var G__30767 = count__30763;
var G__30768 = (i__30764 + (1));
seq__30761 = G__30765;
chunk__30762 = G__30766;
count__30763 = G__30767;
i__30764 = G__30768;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30761);
if(temp__4657__auto__){
var seq__30761__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30761__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__30761__$1);
var G__30769 = cljs.core.chunk_rest.call(null,seq__30761__$1);
var G__30770 = c__25588__auto__;
var G__30771 = cljs.core.count.call(null,c__25588__auto__);
var G__30772 = (0);
seq__30761 = G__30769;
chunk__30762 = G__30770;
count__30763 = G__30771;
i__30764 = G__30772;
continue;
} else {
var n = cljs.core.first.call(null,seq__30761__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30773 = cljs.core.next.call(null,seq__30761__$1);
var G__30774 = null;
var G__30775 = (0);
var G__30776 = (0);
seq__30761 = G__30773;
chunk__30762 = G__30774;
count__30763 = G__30775;
i__30764 = G__30776;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30827_30838 = cljs.core.seq.call(null,deps);
var chunk__30828_30839 = null;
var count__30829_30840 = (0);
var i__30830_30841 = (0);
while(true){
if((i__30830_30841 < count__30829_30840)){
var dep_30842 = cljs.core._nth.call(null,chunk__30828_30839,i__30830_30841);
topo_sort_helper_STAR_.call(null,dep_30842,(depth + (1)),state);

var G__30843 = seq__30827_30838;
var G__30844 = chunk__30828_30839;
var G__30845 = count__30829_30840;
var G__30846 = (i__30830_30841 + (1));
seq__30827_30838 = G__30843;
chunk__30828_30839 = G__30844;
count__30829_30840 = G__30845;
i__30830_30841 = G__30846;
continue;
} else {
var temp__4657__auto___30847 = cljs.core.seq.call(null,seq__30827_30838);
if(temp__4657__auto___30847){
var seq__30827_30848__$1 = temp__4657__auto___30847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30827_30848__$1)){
var c__25588__auto___30849 = cljs.core.chunk_first.call(null,seq__30827_30848__$1);
var G__30850 = cljs.core.chunk_rest.call(null,seq__30827_30848__$1);
var G__30851 = c__25588__auto___30849;
var G__30852 = cljs.core.count.call(null,c__25588__auto___30849);
var G__30853 = (0);
seq__30827_30838 = G__30850;
chunk__30828_30839 = G__30851;
count__30829_30840 = G__30852;
i__30830_30841 = G__30853;
continue;
} else {
var dep_30854 = cljs.core.first.call(null,seq__30827_30848__$1);
topo_sort_helper_STAR_.call(null,dep_30854,(depth + (1)),state);

var G__30855 = cljs.core.next.call(null,seq__30827_30848__$1);
var G__30856 = null;
var G__30857 = (0);
var G__30858 = (0);
seq__30827_30838 = G__30855;
chunk__30828_30839 = G__30856;
count__30829_30840 = G__30857;
i__30830_30841 = G__30858;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30831){
var vec__30835 = p__30831;
var seq__30836 = cljs.core.seq.call(null,vec__30835);
var first__30837 = cljs.core.first.call(null,seq__30836);
var seq__30836__$1 = cljs.core.next.call(null,seq__30836);
var x = first__30837;
var xs = seq__30836__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30835,seq__30836,first__30837,seq__30836__$1,x,xs,get_deps__$1){
return (function (p1__30777_SHARP_){
return clojure.set.difference.call(null,p1__30777_SHARP_,x);
});})(vec__30835,seq__30836,first__30837,seq__30836__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30871 = cljs.core.seq.call(null,provides);
var chunk__30872 = null;
var count__30873 = (0);
var i__30874 = (0);
while(true){
if((i__30874 < count__30873)){
var prov = cljs.core._nth.call(null,chunk__30872,i__30874);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30875_30883 = cljs.core.seq.call(null,requires);
var chunk__30876_30884 = null;
var count__30877_30885 = (0);
var i__30878_30886 = (0);
while(true){
if((i__30878_30886 < count__30877_30885)){
var req_30887 = cljs.core._nth.call(null,chunk__30876_30884,i__30878_30886);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30887,prov);

var G__30888 = seq__30875_30883;
var G__30889 = chunk__30876_30884;
var G__30890 = count__30877_30885;
var G__30891 = (i__30878_30886 + (1));
seq__30875_30883 = G__30888;
chunk__30876_30884 = G__30889;
count__30877_30885 = G__30890;
i__30878_30886 = G__30891;
continue;
} else {
var temp__4657__auto___30892 = cljs.core.seq.call(null,seq__30875_30883);
if(temp__4657__auto___30892){
var seq__30875_30893__$1 = temp__4657__auto___30892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30875_30893__$1)){
var c__25588__auto___30894 = cljs.core.chunk_first.call(null,seq__30875_30893__$1);
var G__30895 = cljs.core.chunk_rest.call(null,seq__30875_30893__$1);
var G__30896 = c__25588__auto___30894;
var G__30897 = cljs.core.count.call(null,c__25588__auto___30894);
var G__30898 = (0);
seq__30875_30883 = G__30895;
chunk__30876_30884 = G__30896;
count__30877_30885 = G__30897;
i__30878_30886 = G__30898;
continue;
} else {
var req_30899 = cljs.core.first.call(null,seq__30875_30893__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30899,prov);

var G__30900 = cljs.core.next.call(null,seq__30875_30893__$1);
var G__30901 = null;
var G__30902 = (0);
var G__30903 = (0);
seq__30875_30883 = G__30900;
chunk__30876_30884 = G__30901;
count__30877_30885 = G__30902;
i__30878_30886 = G__30903;
continue;
}
} else {
}
}
break;
}

var G__30904 = seq__30871;
var G__30905 = chunk__30872;
var G__30906 = count__30873;
var G__30907 = (i__30874 + (1));
seq__30871 = G__30904;
chunk__30872 = G__30905;
count__30873 = G__30906;
i__30874 = G__30907;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30871);
if(temp__4657__auto__){
var seq__30871__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30871__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__30871__$1);
var G__30908 = cljs.core.chunk_rest.call(null,seq__30871__$1);
var G__30909 = c__25588__auto__;
var G__30910 = cljs.core.count.call(null,c__25588__auto__);
var G__30911 = (0);
seq__30871 = G__30908;
chunk__30872 = G__30909;
count__30873 = G__30910;
i__30874 = G__30911;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30871__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30879_30912 = cljs.core.seq.call(null,requires);
var chunk__30880_30913 = null;
var count__30881_30914 = (0);
var i__30882_30915 = (0);
while(true){
if((i__30882_30915 < count__30881_30914)){
var req_30916 = cljs.core._nth.call(null,chunk__30880_30913,i__30882_30915);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30916,prov);

var G__30917 = seq__30879_30912;
var G__30918 = chunk__30880_30913;
var G__30919 = count__30881_30914;
var G__30920 = (i__30882_30915 + (1));
seq__30879_30912 = G__30917;
chunk__30880_30913 = G__30918;
count__30881_30914 = G__30919;
i__30882_30915 = G__30920;
continue;
} else {
var temp__4657__auto___30921__$1 = cljs.core.seq.call(null,seq__30879_30912);
if(temp__4657__auto___30921__$1){
var seq__30879_30922__$1 = temp__4657__auto___30921__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30879_30922__$1)){
var c__25588__auto___30923 = cljs.core.chunk_first.call(null,seq__30879_30922__$1);
var G__30924 = cljs.core.chunk_rest.call(null,seq__30879_30922__$1);
var G__30925 = c__25588__auto___30923;
var G__30926 = cljs.core.count.call(null,c__25588__auto___30923);
var G__30927 = (0);
seq__30879_30912 = G__30924;
chunk__30880_30913 = G__30925;
count__30881_30914 = G__30926;
i__30882_30915 = G__30927;
continue;
} else {
var req_30928 = cljs.core.first.call(null,seq__30879_30922__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30928,prov);

var G__30929 = cljs.core.next.call(null,seq__30879_30922__$1);
var G__30930 = null;
var G__30931 = (0);
var G__30932 = (0);
seq__30879_30912 = G__30929;
chunk__30880_30913 = G__30930;
count__30881_30914 = G__30931;
i__30882_30915 = G__30932;
continue;
}
} else {
}
}
break;
}

var G__30933 = cljs.core.next.call(null,seq__30871__$1);
var G__30934 = null;
var G__30935 = (0);
var G__30936 = (0);
seq__30871 = G__30933;
chunk__30872 = G__30934;
count__30873 = G__30935;
i__30874 = G__30936;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30941_30945 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30942_30946 = null;
var count__30943_30947 = (0);
var i__30944_30948 = (0);
while(true){
if((i__30944_30948 < count__30943_30947)){
var ns_30949 = cljs.core._nth.call(null,chunk__30942_30946,i__30944_30948);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30949);

var G__30950 = seq__30941_30945;
var G__30951 = chunk__30942_30946;
var G__30952 = count__30943_30947;
var G__30953 = (i__30944_30948 + (1));
seq__30941_30945 = G__30950;
chunk__30942_30946 = G__30951;
count__30943_30947 = G__30952;
i__30944_30948 = G__30953;
continue;
} else {
var temp__4657__auto___30954 = cljs.core.seq.call(null,seq__30941_30945);
if(temp__4657__auto___30954){
var seq__30941_30955__$1 = temp__4657__auto___30954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30941_30955__$1)){
var c__25588__auto___30956 = cljs.core.chunk_first.call(null,seq__30941_30955__$1);
var G__30957 = cljs.core.chunk_rest.call(null,seq__30941_30955__$1);
var G__30958 = c__25588__auto___30956;
var G__30959 = cljs.core.count.call(null,c__25588__auto___30956);
var G__30960 = (0);
seq__30941_30945 = G__30957;
chunk__30942_30946 = G__30958;
count__30943_30947 = G__30959;
i__30944_30948 = G__30960;
continue;
} else {
var ns_30961 = cljs.core.first.call(null,seq__30941_30955__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30961);

var G__30962 = cljs.core.next.call(null,seq__30941_30955__$1);
var G__30963 = null;
var G__30964 = (0);
var G__30965 = (0);
seq__30941_30945 = G__30962;
chunk__30942_30946 = G__30963;
count__30943_30947 = G__30964;
i__30944_30948 = G__30965;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24777__auto__ = goog.require__;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30966__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30967__i = 0, G__30967__a = new Array(arguments.length -  0);
while (G__30967__i < G__30967__a.length) {G__30967__a[G__30967__i] = arguments[G__30967__i + 0]; ++G__30967__i;}
  args = new cljs.core.IndexedSeq(G__30967__a,0);
} 
return G__30966__delegate.call(this,args);};
G__30966.cljs$lang$maxFixedArity = 0;
G__30966.cljs$lang$applyTo = (function (arglist__30968){
var args = cljs.core.seq(arglist__30968);
return G__30966__delegate(args);
});
G__30966.cljs$core$IFn$_invoke$arity$variadic = G__30966__delegate;
return G__30966;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30970 = cljs.core._EQ_;
var expr__30971 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30970.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30971))){
var path_parts = ((function (pred__30970,expr__30971){
return (function (p1__30969_SHARP_){
return clojure.string.split.call(null,p1__30969_SHARP_,/[\/\\]/);
});})(pred__30970,expr__30971))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30970,expr__30971){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30973){if((e30973 instanceof Error)){
var e = e30973;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30973;

}
}})());
});
;})(path_parts,sep,root,pred__30970,expr__30971))
} else {
if(cljs.core.truth_(pred__30970.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30971))){
return ((function (pred__30970,expr__30971){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30970,expr__30971){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30970,expr__30971))
);

return deferred.addErrback(((function (deferred,pred__30970,expr__30971){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30970,expr__30971))
);
});
;})(pred__30970,expr__30971))
} else {
return ((function (pred__30970,expr__30971){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30970,expr__30971))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30974,callback){
var map__30977 = p__30974;
var map__30977__$1 = ((((!((map__30977 == null)))?((((map__30977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30977):map__30977);
var file_msg = map__30977__$1;
var request_url = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30977,map__30977__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30977,map__30977__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto__){
return (function (state_31001){
var state_val_31002 = (state_31001[(1)]);
if((state_val_31002 === (7))){
var inst_30997 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31003_31023 = state_31001__$1;
(statearr_31003_31023[(2)] = inst_30997);

(statearr_31003_31023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (1))){
var state_31001__$1 = state_31001;
var statearr_31004_31024 = state_31001__$1;
(statearr_31004_31024[(2)] = null);

(statearr_31004_31024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (4))){
var inst_30981 = (state_31001[(7)]);
var inst_30981__$1 = (state_31001[(2)]);
var state_31001__$1 = (function (){var statearr_31005 = state_31001;
(statearr_31005[(7)] = inst_30981__$1);

return statearr_31005;
})();
if(cljs.core.truth_(inst_30981__$1)){
var statearr_31006_31025 = state_31001__$1;
(statearr_31006_31025[(1)] = (5));

} else {
var statearr_31007_31026 = state_31001__$1;
(statearr_31007_31026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (6))){
var state_31001__$1 = state_31001;
var statearr_31008_31027 = state_31001__$1;
(statearr_31008_31027[(2)] = null);

(statearr_31008_31027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (3))){
var inst_30999 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31001__$1,inst_30999);
} else {
if((state_val_31002 === (2))){
var state_31001__$1 = state_31001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31001__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31002 === (11))){
var inst_30993 = (state_31001[(2)]);
var state_31001__$1 = (function (){var statearr_31009 = state_31001;
(statearr_31009[(8)] = inst_30993);

return statearr_31009;
})();
var statearr_31010_31028 = state_31001__$1;
(statearr_31010_31028[(2)] = null);

(statearr_31010_31028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (9))){
var inst_30985 = (state_31001[(9)]);
var inst_30987 = (state_31001[(10)]);
var inst_30989 = inst_30987.call(null,inst_30985);
var state_31001__$1 = state_31001;
var statearr_31011_31029 = state_31001__$1;
(statearr_31011_31029[(2)] = inst_30989);

(statearr_31011_31029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (5))){
var inst_30981 = (state_31001[(7)]);
var inst_30983 = figwheel.client.file_reloading.blocking_load.call(null,inst_30981);
var state_31001__$1 = state_31001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31001__$1,(8),inst_30983);
} else {
if((state_val_31002 === (10))){
var inst_30985 = (state_31001[(9)]);
var inst_30991 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30985);
var state_31001__$1 = state_31001;
var statearr_31012_31030 = state_31001__$1;
(statearr_31012_31030[(2)] = inst_30991);

(statearr_31012_31030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (8))){
var inst_30981 = (state_31001[(7)]);
var inst_30987 = (state_31001[(10)]);
var inst_30985 = (state_31001[(2)]);
var inst_30986 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30987__$1 = cljs.core.get.call(null,inst_30986,inst_30981);
var state_31001__$1 = (function (){var statearr_31013 = state_31001;
(statearr_31013[(9)] = inst_30985);

(statearr_31013[(10)] = inst_30987__$1);

return statearr_31013;
})();
if(cljs.core.truth_(inst_30987__$1)){
var statearr_31014_31031 = state_31001__$1;
(statearr_31014_31031[(1)] = (9));

} else {
var statearr_31015_31032 = state_31001__$1;
(statearr_31015_31032[(1)] = (10));

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
});})(c__27900__auto__))
;
return ((function (switch__27788__auto__,c__27900__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27789__auto__ = null;
var figwheel$client$file_reloading$state_machine__27789__auto____0 = (function (){
var statearr_31019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31019[(0)] = figwheel$client$file_reloading$state_machine__27789__auto__);

(statearr_31019[(1)] = (1));

return statearr_31019;
});
var figwheel$client$file_reloading$state_machine__27789__auto____1 = (function (state_31001){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_31001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e31020){if((e31020 instanceof Object)){
var ex__27792__auto__ = e31020;
var statearr_31021_31033 = state_31001;
(statearr_31021_31033[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31034 = state_31001;
state_31001 = G__31034;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27789__auto__ = function(state_31001){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27789__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27789__auto____1.call(this,state_31001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27789__auto____0;
figwheel$client$file_reloading$state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27789__auto____1;
return figwheel$client$file_reloading$state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto__))
})();
var state__27902__auto__ = (function (){var statearr_31022 = f__27901__auto__.call(null);
(statearr_31022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto__);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__))
);

return c__27900__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31035,callback){
var map__31038 = p__31035;
var map__31038__$1 = ((((!((map__31038 == null)))?((((map__31038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31038):map__31038);
var file_msg = map__31038__$1;
var namespace = cljs.core.get.call(null,map__31038__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31038,map__31038__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31038,map__31038__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31040){
var map__31043 = p__31040;
var map__31043__$1 = ((((!((map__31043 == null)))?((((map__31043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31043):map__31043);
var file_msg = map__31043__$1;
var namespace = cljs.core.get.call(null,map__31043__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24765__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24765__auto__){
var or__24777__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
var or__24777__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24777__auto____$1)){
return or__24777__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24765__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31045,callback){
var map__31048 = p__31045;
var map__31048__$1 = ((((!((map__31048 == null)))?((((map__31048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31048):map__31048);
var file_msg = map__31048__$1;
var request_url = cljs.core.get.call(null,map__31048__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31048__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27900__auto___31152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___31152,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto___31152,out){
return (function (state_31134){
var state_val_31135 = (state_31134[(1)]);
if((state_val_31135 === (1))){
var inst_31108 = cljs.core.seq.call(null,files);
var inst_31109 = cljs.core.first.call(null,inst_31108);
var inst_31110 = cljs.core.next.call(null,inst_31108);
var inst_31111 = files;
var state_31134__$1 = (function (){var statearr_31136 = state_31134;
(statearr_31136[(7)] = inst_31111);

(statearr_31136[(8)] = inst_31109);

(statearr_31136[(9)] = inst_31110);

return statearr_31136;
})();
var statearr_31137_31153 = state_31134__$1;
(statearr_31137_31153[(2)] = null);

(statearr_31137_31153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (2))){
var inst_31111 = (state_31134[(7)]);
var inst_31117 = (state_31134[(10)]);
var inst_31116 = cljs.core.seq.call(null,inst_31111);
var inst_31117__$1 = cljs.core.first.call(null,inst_31116);
var inst_31118 = cljs.core.next.call(null,inst_31116);
var inst_31119 = (inst_31117__$1 == null);
var inst_31120 = cljs.core.not.call(null,inst_31119);
var state_31134__$1 = (function (){var statearr_31138 = state_31134;
(statearr_31138[(11)] = inst_31118);

(statearr_31138[(10)] = inst_31117__$1);

return statearr_31138;
})();
if(inst_31120){
var statearr_31139_31154 = state_31134__$1;
(statearr_31139_31154[(1)] = (4));

} else {
var statearr_31140_31155 = state_31134__$1;
(statearr_31140_31155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (3))){
var inst_31132 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31134__$1,inst_31132);
} else {
if((state_val_31135 === (4))){
var inst_31117 = (state_31134[(10)]);
var inst_31122 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31117);
var state_31134__$1 = state_31134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31134__$1,(7),inst_31122);
} else {
if((state_val_31135 === (5))){
var inst_31128 = cljs.core.async.close_BANG_.call(null,out);
var state_31134__$1 = state_31134;
var statearr_31141_31156 = state_31134__$1;
(statearr_31141_31156[(2)] = inst_31128);

(statearr_31141_31156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (6))){
var inst_31130 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
var statearr_31142_31157 = state_31134__$1;
(statearr_31142_31157[(2)] = inst_31130);

(statearr_31142_31157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (7))){
var inst_31118 = (state_31134[(11)]);
var inst_31124 = (state_31134[(2)]);
var inst_31125 = cljs.core.async.put_BANG_.call(null,out,inst_31124);
var inst_31111 = inst_31118;
var state_31134__$1 = (function (){var statearr_31143 = state_31134;
(statearr_31143[(7)] = inst_31111);

(statearr_31143[(12)] = inst_31125);

return statearr_31143;
})();
var statearr_31144_31158 = state_31134__$1;
(statearr_31144_31158[(2)] = null);

(statearr_31144_31158[(1)] = (2));


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
});})(c__27900__auto___31152,out))
;
return ((function (switch__27788__auto__,c__27900__auto___31152,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto____0 = (function (){
var statearr_31148 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31148[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto__);

(statearr_31148[(1)] = (1));

return statearr_31148;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto____1 = (function (state_31134){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_31134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e31149){if((e31149 instanceof Object)){
var ex__27792__auto__ = e31149;
var statearr_31150_31159 = state_31134;
(statearr_31150_31159[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31160 = state_31134;
state_31134 = G__31160;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto__ = function(state_31134){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto____1.call(this,state_31134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto___31152,out))
})();
var state__27902__auto__ = (function (){var statearr_31151 = f__27901__auto__.call(null);
(statearr_31151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto___31152);

return statearr_31151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___31152,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31161,opts){
var map__31165 = p__31161;
var map__31165__$1 = ((((!((map__31165 == null)))?((((map__31165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31165):map__31165);
var eval_body__$1 = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24765__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24765__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24765__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31167){var e = e31167;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31168_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31168_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31177){
var vec__31178 = p__31177;
var k = cljs.core.nth.call(null,vec__31178,(0),null);
var v = cljs.core.nth.call(null,vec__31178,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31181){
var vec__31182 = p__31181;
var k = cljs.core.nth.call(null,vec__31182,(0),null);
var v = cljs.core.nth.call(null,vec__31182,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31188,p__31189){
var map__31436 = p__31188;
var map__31436__$1 = ((((!((map__31436 == null)))?((((map__31436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31436):map__31436);
var opts = map__31436__$1;
var before_jsload = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31437 = p__31189;
var map__31437__$1 = ((((!((map__31437 == null)))?((((map__31437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31437):map__31437);
var msg = map__31437__$1;
var files = cljs.core.get.call(null,map__31437__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31437__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31437__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27901__auto__ = (function (){var switch__27788__auto__ = ((function (c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31590){
var state_val_31591 = (state_31590[(1)]);
if((state_val_31591 === (7))){
var inst_31453 = (state_31590[(7)]);
var inst_31454 = (state_31590[(8)]);
var inst_31451 = (state_31590[(9)]);
var inst_31452 = (state_31590[(10)]);
var inst_31459 = cljs.core._nth.call(null,inst_31452,inst_31454);
var inst_31460 = figwheel.client.file_reloading.eval_body.call(null,inst_31459,opts);
var inst_31461 = (inst_31454 + (1));
var tmp31592 = inst_31453;
var tmp31593 = inst_31451;
var tmp31594 = inst_31452;
var inst_31451__$1 = tmp31593;
var inst_31452__$1 = tmp31594;
var inst_31453__$1 = tmp31592;
var inst_31454__$1 = inst_31461;
var state_31590__$1 = (function (){var statearr_31595 = state_31590;
(statearr_31595[(7)] = inst_31453__$1);

(statearr_31595[(8)] = inst_31454__$1);

(statearr_31595[(11)] = inst_31460);

(statearr_31595[(9)] = inst_31451__$1);

(statearr_31595[(10)] = inst_31452__$1);

return statearr_31595;
})();
var statearr_31596_31682 = state_31590__$1;
(statearr_31596_31682[(2)] = null);

(statearr_31596_31682[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (20))){
var inst_31494 = (state_31590[(12)]);
var inst_31502 = figwheel.client.file_reloading.sort_files.call(null,inst_31494);
var state_31590__$1 = state_31590;
var statearr_31597_31683 = state_31590__$1;
(statearr_31597_31683[(2)] = inst_31502);

(statearr_31597_31683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (27))){
var state_31590__$1 = state_31590;
var statearr_31598_31684 = state_31590__$1;
(statearr_31598_31684[(2)] = null);

(statearr_31598_31684[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (1))){
var inst_31443 = (state_31590[(13)]);
var inst_31440 = before_jsload.call(null,files);
var inst_31441 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31442 = (function (){return ((function (inst_31443,inst_31440,inst_31441,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31185_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31185_SHARP_);
});
;})(inst_31443,inst_31440,inst_31441,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31443__$1 = cljs.core.filter.call(null,inst_31442,files);
var inst_31444 = cljs.core.not_empty.call(null,inst_31443__$1);
var state_31590__$1 = (function (){var statearr_31599 = state_31590;
(statearr_31599[(14)] = inst_31440);

(statearr_31599[(15)] = inst_31441);

(statearr_31599[(13)] = inst_31443__$1);

return statearr_31599;
})();
if(cljs.core.truth_(inst_31444)){
var statearr_31600_31685 = state_31590__$1;
(statearr_31600_31685[(1)] = (2));

} else {
var statearr_31601_31686 = state_31590__$1;
(statearr_31601_31686[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (24))){
var state_31590__$1 = state_31590;
var statearr_31602_31687 = state_31590__$1;
(statearr_31602_31687[(2)] = null);

(statearr_31602_31687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (39))){
var inst_31544 = (state_31590[(16)]);
var state_31590__$1 = state_31590;
var statearr_31603_31688 = state_31590__$1;
(statearr_31603_31688[(2)] = inst_31544);

(statearr_31603_31688[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (46))){
var inst_31585 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31604_31689 = state_31590__$1;
(statearr_31604_31689[(2)] = inst_31585);

(statearr_31604_31689[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (4))){
var inst_31488 = (state_31590[(2)]);
var inst_31489 = cljs.core.List.EMPTY;
var inst_31490 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31489);
var inst_31491 = (function (){return ((function (inst_31488,inst_31489,inst_31490,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31186_SHARP_){
var and__24765__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31186_SHARP_);
if(cljs.core.truth_(and__24765__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31186_SHARP_));
} else {
return and__24765__auto__;
}
});
;})(inst_31488,inst_31489,inst_31490,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31492 = cljs.core.filter.call(null,inst_31491,files);
var inst_31493 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31494 = cljs.core.concat.call(null,inst_31492,inst_31493);
var state_31590__$1 = (function (){var statearr_31605 = state_31590;
(statearr_31605[(12)] = inst_31494);

(statearr_31605[(17)] = inst_31490);

(statearr_31605[(18)] = inst_31488);

return statearr_31605;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31606_31690 = state_31590__$1;
(statearr_31606_31690[(1)] = (16));

} else {
var statearr_31607_31691 = state_31590__$1;
(statearr_31607_31691[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (15))){
var inst_31478 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31608_31692 = state_31590__$1;
(statearr_31608_31692[(2)] = inst_31478);

(statearr_31608_31692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (21))){
var inst_31504 = (state_31590[(19)]);
var inst_31504__$1 = (state_31590[(2)]);
var inst_31505 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31504__$1);
var state_31590__$1 = (function (){var statearr_31609 = state_31590;
(statearr_31609[(19)] = inst_31504__$1);

return statearr_31609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31590__$1,(22),inst_31505);
} else {
if((state_val_31591 === (31))){
var inst_31588 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31590__$1,inst_31588);
} else {
if((state_val_31591 === (32))){
var inst_31544 = (state_31590[(16)]);
var inst_31549 = inst_31544.cljs$lang$protocol_mask$partition0$;
var inst_31550 = (inst_31549 & (64));
var inst_31551 = inst_31544.cljs$core$ISeq$;
var inst_31552 = (inst_31550) || (inst_31551);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31552)){
var statearr_31610_31693 = state_31590__$1;
(statearr_31610_31693[(1)] = (35));

} else {
var statearr_31611_31694 = state_31590__$1;
(statearr_31611_31694[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (40))){
var inst_31565 = (state_31590[(20)]);
var inst_31564 = (state_31590[(2)]);
var inst_31565__$1 = cljs.core.get.call(null,inst_31564,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31566 = cljs.core.get.call(null,inst_31564,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31567 = cljs.core.not_empty.call(null,inst_31565__$1);
var state_31590__$1 = (function (){var statearr_31612 = state_31590;
(statearr_31612[(20)] = inst_31565__$1);

(statearr_31612[(21)] = inst_31566);

return statearr_31612;
})();
if(cljs.core.truth_(inst_31567)){
var statearr_31613_31695 = state_31590__$1;
(statearr_31613_31695[(1)] = (41));

} else {
var statearr_31614_31696 = state_31590__$1;
(statearr_31614_31696[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (33))){
var state_31590__$1 = state_31590;
var statearr_31615_31697 = state_31590__$1;
(statearr_31615_31697[(2)] = false);

(statearr_31615_31697[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (13))){
var inst_31464 = (state_31590[(22)]);
var inst_31468 = cljs.core.chunk_first.call(null,inst_31464);
var inst_31469 = cljs.core.chunk_rest.call(null,inst_31464);
var inst_31470 = cljs.core.count.call(null,inst_31468);
var inst_31451 = inst_31469;
var inst_31452 = inst_31468;
var inst_31453 = inst_31470;
var inst_31454 = (0);
var state_31590__$1 = (function (){var statearr_31616 = state_31590;
(statearr_31616[(7)] = inst_31453);

(statearr_31616[(8)] = inst_31454);

(statearr_31616[(9)] = inst_31451);

(statearr_31616[(10)] = inst_31452);

return statearr_31616;
})();
var statearr_31617_31698 = state_31590__$1;
(statearr_31617_31698[(2)] = null);

(statearr_31617_31698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (22))){
var inst_31508 = (state_31590[(23)]);
var inst_31512 = (state_31590[(24)]);
var inst_31507 = (state_31590[(25)]);
var inst_31504 = (state_31590[(19)]);
var inst_31507__$1 = (state_31590[(2)]);
var inst_31508__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31507__$1);
var inst_31509 = (function (){var all_files = inst_31504;
var res_SINGLEQUOTE_ = inst_31507__$1;
var res = inst_31508__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31508,inst_31512,inst_31507,inst_31504,inst_31507__$1,inst_31508__$1,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31187_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31187_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31508,inst_31512,inst_31507,inst_31504,inst_31507__$1,inst_31508__$1,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31510 = cljs.core.filter.call(null,inst_31509,inst_31507__$1);
var inst_31511 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31512__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31511);
var inst_31513 = cljs.core.not_empty.call(null,inst_31512__$1);
var state_31590__$1 = (function (){var statearr_31618 = state_31590;
(statearr_31618[(23)] = inst_31508__$1);

(statearr_31618[(24)] = inst_31512__$1);

(statearr_31618[(25)] = inst_31507__$1);

(statearr_31618[(26)] = inst_31510);

return statearr_31618;
})();
if(cljs.core.truth_(inst_31513)){
var statearr_31619_31699 = state_31590__$1;
(statearr_31619_31699[(1)] = (23));

} else {
var statearr_31620_31700 = state_31590__$1;
(statearr_31620_31700[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (36))){
var state_31590__$1 = state_31590;
var statearr_31621_31701 = state_31590__$1;
(statearr_31621_31701[(2)] = false);

(statearr_31621_31701[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (41))){
var inst_31565 = (state_31590[(20)]);
var inst_31569 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31570 = cljs.core.map.call(null,inst_31569,inst_31565);
var inst_31571 = cljs.core.pr_str.call(null,inst_31570);
var inst_31572 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31571)].join('');
var inst_31573 = figwheel.client.utils.log.call(null,inst_31572);
var state_31590__$1 = state_31590;
var statearr_31622_31702 = state_31590__$1;
(statearr_31622_31702[(2)] = inst_31573);

(statearr_31622_31702[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (43))){
var inst_31566 = (state_31590[(21)]);
var inst_31576 = (state_31590[(2)]);
var inst_31577 = cljs.core.not_empty.call(null,inst_31566);
var state_31590__$1 = (function (){var statearr_31623 = state_31590;
(statearr_31623[(27)] = inst_31576);

return statearr_31623;
})();
if(cljs.core.truth_(inst_31577)){
var statearr_31624_31703 = state_31590__$1;
(statearr_31624_31703[(1)] = (44));

} else {
var statearr_31625_31704 = state_31590__$1;
(statearr_31625_31704[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (29))){
var inst_31508 = (state_31590[(23)]);
var inst_31512 = (state_31590[(24)]);
var inst_31507 = (state_31590[(25)]);
var inst_31510 = (state_31590[(26)]);
var inst_31504 = (state_31590[(19)]);
var inst_31544 = (state_31590[(16)]);
var inst_31540 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31543 = (function (){var all_files = inst_31504;
var res_SINGLEQUOTE_ = inst_31507;
var res = inst_31508;
var files_not_loaded = inst_31510;
var dependencies_that_loaded = inst_31512;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31508,inst_31512,inst_31507,inst_31510,inst_31504,inst_31544,inst_31540,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31542){
var map__31626 = p__31542;
var map__31626__$1 = ((((!((map__31626 == null)))?((((map__31626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31626):map__31626);
var namespace = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31508,inst_31512,inst_31507,inst_31510,inst_31504,inst_31544,inst_31540,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31544__$1 = cljs.core.group_by.call(null,inst_31543,inst_31510);
var inst_31546 = (inst_31544__$1 == null);
var inst_31547 = cljs.core.not.call(null,inst_31546);
var state_31590__$1 = (function (){var statearr_31628 = state_31590;
(statearr_31628[(28)] = inst_31540);

(statearr_31628[(16)] = inst_31544__$1);

return statearr_31628;
})();
if(inst_31547){
var statearr_31629_31705 = state_31590__$1;
(statearr_31629_31705[(1)] = (32));

} else {
var statearr_31630_31706 = state_31590__$1;
(statearr_31630_31706[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (44))){
var inst_31566 = (state_31590[(21)]);
var inst_31579 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31566);
var inst_31580 = cljs.core.pr_str.call(null,inst_31579);
var inst_31581 = [cljs.core.str("not required: "),cljs.core.str(inst_31580)].join('');
var inst_31582 = figwheel.client.utils.log.call(null,inst_31581);
var state_31590__$1 = state_31590;
var statearr_31631_31707 = state_31590__$1;
(statearr_31631_31707[(2)] = inst_31582);

(statearr_31631_31707[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (6))){
var inst_31485 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31632_31708 = state_31590__$1;
(statearr_31632_31708[(2)] = inst_31485);

(statearr_31632_31708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (28))){
var inst_31510 = (state_31590[(26)]);
var inst_31537 = (state_31590[(2)]);
var inst_31538 = cljs.core.not_empty.call(null,inst_31510);
var state_31590__$1 = (function (){var statearr_31633 = state_31590;
(statearr_31633[(29)] = inst_31537);

return statearr_31633;
})();
if(cljs.core.truth_(inst_31538)){
var statearr_31634_31709 = state_31590__$1;
(statearr_31634_31709[(1)] = (29));

} else {
var statearr_31635_31710 = state_31590__$1;
(statearr_31635_31710[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (25))){
var inst_31508 = (state_31590[(23)]);
var inst_31524 = (state_31590[(2)]);
var inst_31525 = cljs.core.not_empty.call(null,inst_31508);
var state_31590__$1 = (function (){var statearr_31636 = state_31590;
(statearr_31636[(30)] = inst_31524);

return statearr_31636;
})();
if(cljs.core.truth_(inst_31525)){
var statearr_31637_31711 = state_31590__$1;
(statearr_31637_31711[(1)] = (26));

} else {
var statearr_31638_31712 = state_31590__$1;
(statearr_31638_31712[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (34))){
var inst_31559 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31559)){
var statearr_31639_31713 = state_31590__$1;
(statearr_31639_31713[(1)] = (38));

} else {
var statearr_31640_31714 = state_31590__$1;
(statearr_31640_31714[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (17))){
var state_31590__$1 = state_31590;
var statearr_31641_31715 = state_31590__$1;
(statearr_31641_31715[(2)] = recompile_dependents);

(statearr_31641_31715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (3))){
var state_31590__$1 = state_31590;
var statearr_31642_31716 = state_31590__$1;
(statearr_31642_31716[(2)] = null);

(statearr_31642_31716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (12))){
var inst_31481 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31643_31717 = state_31590__$1;
(statearr_31643_31717[(2)] = inst_31481);

(statearr_31643_31717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (2))){
var inst_31443 = (state_31590[(13)]);
var inst_31450 = cljs.core.seq.call(null,inst_31443);
var inst_31451 = inst_31450;
var inst_31452 = null;
var inst_31453 = (0);
var inst_31454 = (0);
var state_31590__$1 = (function (){var statearr_31644 = state_31590;
(statearr_31644[(7)] = inst_31453);

(statearr_31644[(8)] = inst_31454);

(statearr_31644[(9)] = inst_31451);

(statearr_31644[(10)] = inst_31452);

return statearr_31644;
})();
var statearr_31645_31718 = state_31590__$1;
(statearr_31645_31718[(2)] = null);

(statearr_31645_31718[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (23))){
var inst_31508 = (state_31590[(23)]);
var inst_31512 = (state_31590[(24)]);
var inst_31507 = (state_31590[(25)]);
var inst_31510 = (state_31590[(26)]);
var inst_31504 = (state_31590[(19)]);
var inst_31515 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31517 = (function (){var all_files = inst_31504;
var res_SINGLEQUOTE_ = inst_31507;
var res = inst_31508;
var files_not_loaded = inst_31510;
var dependencies_that_loaded = inst_31512;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31508,inst_31512,inst_31507,inst_31510,inst_31504,inst_31515,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31516){
var map__31646 = p__31516;
var map__31646__$1 = ((((!((map__31646 == null)))?((((map__31646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31646):map__31646);
var request_url = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31508,inst_31512,inst_31507,inst_31510,inst_31504,inst_31515,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31518 = cljs.core.reverse.call(null,inst_31512);
var inst_31519 = cljs.core.map.call(null,inst_31517,inst_31518);
var inst_31520 = cljs.core.pr_str.call(null,inst_31519);
var inst_31521 = figwheel.client.utils.log.call(null,inst_31520);
var state_31590__$1 = (function (){var statearr_31648 = state_31590;
(statearr_31648[(31)] = inst_31515);

return statearr_31648;
})();
var statearr_31649_31719 = state_31590__$1;
(statearr_31649_31719[(2)] = inst_31521);

(statearr_31649_31719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (35))){
var state_31590__$1 = state_31590;
var statearr_31650_31720 = state_31590__$1;
(statearr_31650_31720[(2)] = true);

(statearr_31650_31720[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (19))){
var inst_31494 = (state_31590[(12)]);
var inst_31500 = figwheel.client.file_reloading.expand_files.call(null,inst_31494);
var state_31590__$1 = state_31590;
var statearr_31651_31721 = state_31590__$1;
(statearr_31651_31721[(2)] = inst_31500);

(statearr_31651_31721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (11))){
var state_31590__$1 = state_31590;
var statearr_31652_31722 = state_31590__$1;
(statearr_31652_31722[(2)] = null);

(statearr_31652_31722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (9))){
var inst_31483 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31653_31723 = state_31590__$1;
(statearr_31653_31723[(2)] = inst_31483);

(statearr_31653_31723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (5))){
var inst_31453 = (state_31590[(7)]);
var inst_31454 = (state_31590[(8)]);
var inst_31456 = (inst_31454 < inst_31453);
var inst_31457 = inst_31456;
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31457)){
var statearr_31654_31724 = state_31590__$1;
(statearr_31654_31724[(1)] = (7));

} else {
var statearr_31655_31725 = state_31590__$1;
(statearr_31655_31725[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (14))){
var inst_31464 = (state_31590[(22)]);
var inst_31473 = cljs.core.first.call(null,inst_31464);
var inst_31474 = figwheel.client.file_reloading.eval_body.call(null,inst_31473,opts);
var inst_31475 = cljs.core.next.call(null,inst_31464);
var inst_31451 = inst_31475;
var inst_31452 = null;
var inst_31453 = (0);
var inst_31454 = (0);
var state_31590__$1 = (function (){var statearr_31656 = state_31590;
(statearr_31656[(7)] = inst_31453);

(statearr_31656[(32)] = inst_31474);

(statearr_31656[(8)] = inst_31454);

(statearr_31656[(9)] = inst_31451);

(statearr_31656[(10)] = inst_31452);

return statearr_31656;
})();
var statearr_31657_31726 = state_31590__$1;
(statearr_31657_31726[(2)] = null);

(statearr_31657_31726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (45))){
var state_31590__$1 = state_31590;
var statearr_31658_31727 = state_31590__$1;
(statearr_31658_31727[(2)] = null);

(statearr_31658_31727[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (26))){
var inst_31508 = (state_31590[(23)]);
var inst_31512 = (state_31590[(24)]);
var inst_31507 = (state_31590[(25)]);
var inst_31510 = (state_31590[(26)]);
var inst_31504 = (state_31590[(19)]);
var inst_31527 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31529 = (function (){var all_files = inst_31504;
var res_SINGLEQUOTE_ = inst_31507;
var res = inst_31508;
var files_not_loaded = inst_31510;
var dependencies_that_loaded = inst_31512;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31508,inst_31512,inst_31507,inst_31510,inst_31504,inst_31527,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31528){
var map__31659 = p__31528;
var map__31659__$1 = ((((!((map__31659 == null)))?((((map__31659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31659):map__31659);
var namespace = cljs.core.get.call(null,map__31659__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31659__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31508,inst_31512,inst_31507,inst_31510,inst_31504,inst_31527,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31530 = cljs.core.map.call(null,inst_31529,inst_31508);
var inst_31531 = cljs.core.pr_str.call(null,inst_31530);
var inst_31532 = figwheel.client.utils.log.call(null,inst_31531);
var inst_31533 = (function (){var all_files = inst_31504;
var res_SINGLEQUOTE_ = inst_31507;
var res = inst_31508;
var files_not_loaded = inst_31510;
var dependencies_that_loaded = inst_31512;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31508,inst_31512,inst_31507,inst_31510,inst_31504,inst_31527,inst_31529,inst_31530,inst_31531,inst_31532,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31508,inst_31512,inst_31507,inst_31510,inst_31504,inst_31527,inst_31529,inst_31530,inst_31531,inst_31532,state_val_31591,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31534 = setTimeout(inst_31533,(10));
var state_31590__$1 = (function (){var statearr_31661 = state_31590;
(statearr_31661[(33)] = inst_31532);

(statearr_31661[(34)] = inst_31527);

return statearr_31661;
})();
var statearr_31662_31728 = state_31590__$1;
(statearr_31662_31728[(2)] = inst_31534);

(statearr_31662_31728[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (16))){
var state_31590__$1 = state_31590;
var statearr_31663_31729 = state_31590__$1;
(statearr_31663_31729[(2)] = reload_dependents);

(statearr_31663_31729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (38))){
var inst_31544 = (state_31590[(16)]);
var inst_31561 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31544);
var state_31590__$1 = state_31590;
var statearr_31664_31730 = state_31590__$1;
(statearr_31664_31730[(2)] = inst_31561);

(statearr_31664_31730[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (30))){
var state_31590__$1 = state_31590;
var statearr_31665_31731 = state_31590__$1;
(statearr_31665_31731[(2)] = null);

(statearr_31665_31731[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (10))){
var inst_31464 = (state_31590[(22)]);
var inst_31466 = cljs.core.chunked_seq_QMARK_.call(null,inst_31464);
var state_31590__$1 = state_31590;
if(inst_31466){
var statearr_31666_31732 = state_31590__$1;
(statearr_31666_31732[(1)] = (13));

} else {
var statearr_31667_31733 = state_31590__$1;
(statearr_31667_31733[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (18))){
var inst_31498 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31498)){
var statearr_31668_31734 = state_31590__$1;
(statearr_31668_31734[(1)] = (19));

} else {
var statearr_31669_31735 = state_31590__$1;
(statearr_31669_31735[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (42))){
var state_31590__$1 = state_31590;
var statearr_31670_31736 = state_31590__$1;
(statearr_31670_31736[(2)] = null);

(statearr_31670_31736[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (37))){
var inst_31556 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31671_31737 = state_31590__$1;
(statearr_31671_31737[(2)] = inst_31556);

(statearr_31671_31737[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (8))){
var inst_31464 = (state_31590[(22)]);
var inst_31451 = (state_31590[(9)]);
var inst_31464__$1 = cljs.core.seq.call(null,inst_31451);
var state_31590__$1 = (function (){var statearr_31672 = state_31590;
(statearr_31672[(22)] = inst_31464__$1);

return statearr_31672;
})();
if(inst_31464__$1){
var statearr_31673_31738 = state_31590__$1;
(statearr_31673_31738[(1)] = (10));

} else {
var statearr_31674_31739 = state_31590__$1;
(statearr_31674_31739[(1)] = (11));

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
}
});})(c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27788__auto__,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto____0 = (function (){
var statearr_31678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31678[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto__);

(statearr_31678[(1)] = (1));

return statearr_31678;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto____1 = (function (state_31590){
while(true){
var ret_value__27790__auto__ = (function (){try{while(true){
var result__27791__auto__ = switch__27788__auto__.call(null,state_31590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27791__auto__;
}
break;
}
}catch (e31679){if((e31679 instanceof Object)){
var ex__27792__auto__ = e31679;
var statearr_31680_31740 = state_31590;
(statearr_31680_31740[(5)] = ex__27792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31741 = state_31590;
state_31590 = G__31741;
continue;
} else {
return ret_value__27790__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto__ = function(state_31590){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto____1.call(this,state_31590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27789__auto__;
})()
;})(switch__27788__auto__,c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27902__auto__ = (function (){var statearr_31681 = f__27901__auto__.call(null);
(statearr_31681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27900__auto__);

return statearr_31681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__,map__31436,map__31436__$1,opts,before_jsload,on_jsload,reload_dependents,map__31437,map__31437__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27900__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31744,link){
var map__31747 = p__31744;
var map__31747__$1 = ((((!((map__31747 == null)))?((((map__31747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31747):map__31747);
var file = cljs.core.get.call(null,map__31747__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31747,map__31747__$1,file){
return (function (p1__31742_SHARP_,p2__31743_SHARP_){
if(cljs.core._EQ_.call(null,p1__31742_SHARP_,p2__31743_SHARP_)){
return p1__31742_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31747,map__31747__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31753){
var map__31754 = p__31753;
var map__31754__$1 = ((((!((map__31754 == null)))?((((map__31754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31754):map__31754);
var match_length = cljs.core.get.call(null,map__31754__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31754__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31749_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31749_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31756 = [];
var len__25852__auto___31759 = arguments.length;
var i__25853__auto___31760 = (0);
while(true){
if((i__25853__auto___31760 < len__25852__auto___31759)){
args31756.push((arguments[i__25853__auto___31760]));

var G__31761 = (i__25853__auto___31760 + (1));
i__25853__auto___31760 = G__31761;
continue;
} else {
}
break;
}

var G__31758 = args31756.length;
switch (G__31758) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31756.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31763_SHARP_,p2__31764_SHARP_){
return cljs.core.assoc.call(null,p1__31763_SHARP_,cljs.core.get.call(null,p2__31764_SHARP_,key),p2__31764_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31765){
var map__31768 = p__31765;
var map__31768__$1 = ((((!((map__31768 == null)))?((((map__31768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31768):map__31768);
var f_data = map__31768__$1;
var file = cljs.core.get.call(null,map__31768__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31770,p__31771){
var map__31780 = p__31770;
var map__31780__$1 = ((((!((map__31780 == null)))?((((map__31780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31780):map__31780);
var opts = map__31780__$1;
var on_cssload = cljs.core.get.call(null,map__31780__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31781 = p__31771;
var map__31781__$1 = ((((!((map__31781 == null)))?((((map__31781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31781):map__31781);
var files_msg = map__31781__$1;
var files = cljs.core.get.call(null,map__31781__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31784_31788 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31785_31789 = null;
var count__31786_31790 = (0);
var i__31787_31791 = (0);
while(true){
if((i__31787_31791 < count__31786_31790)){
var f_31792 = cljs.core._nth.call(null,chunk__31785_31789,i__31787_31791);
figwheel.client.file_reloading.reload_css_file.call(null,f_31792);

var G__31793 = seq__31784_31788;
var G__31794 = chunk__31785_31789;
var G__31795 = count__31786_31790;
var G__31796 = (i__31787_31791 + (1));
seq__31784_31788 = G__31793;
chunk__31785_31789 = G__31794;
count__31786_31790 = G__31795;
i__31787_31791 = G__31796;
continue;
} else {
var temp__4657__auto___31797 = cljs.core.seq.call(null,seq__31784_31788);
if(temp__4657__auto___31797){
var seq__31784_31798__$1 = temp__4657__auto___31797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31784_31798__$1)){
var c__25588__auto___31799 = cljs.core.chunk_first.call(null,seq__31784_31798__$1);
var G__31800 = cljs.core.chunk_rest.call(null,seq__31784_31798__$1);
var G__31801 = c__25588__auto___31799;
var G__31802 = cljs.core.count.call(null,c__25588__auto___31799);
var G__31803 = (0);
seq__31784_31788 = G__31800;
chunk__31785_31789 = G__31801;
count__31786_31790 = G__31802;
i__31787_31791 = G__31803;
continue;
} else {
var f_31804 = cljs.core.first.call(null,seq__31784_31798__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31804);

var G__31805 = cljs.core.next.call(null,seq__31784_31798__$1);
var G__31806 = null;
var G__31807 = (0);
var G__31808 = (0);
seq__31784_31788 = G__31805;
chunk__31785_31789 = G__31806;
count__31786_31790 = G__31807;
i__31787_31791 = G__31808;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31780,map__31780__$1,opts,on_cssload,map__31781,map__31781__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31780,map__31780__$1,opts,on_cssload,map__31781,map__31781__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1482247107789