define(["can/util/library","can/construct"],function(t){var e=(t.isFunction,t.isArray),n=t.makeArray,r=function(t){var r,i=n(arguments);return t=i.shift(),e(t)||(t=[t]),r=this,function(){for(var o,s,a=i.concat(n(arguments)),u=t.length,l=0;u>l;l++)s=t[l],s&&(o="string"==typeof s,a=(o?r[s]:s).apply(r,a||[]),u-1>l&&(a=!e(a)||a._use_call?[a]:a));return a}};t.Construct.proxy=t.Construct.prototype.proxy=r;for(var i=[t.Observe,t.Control,t.Model],o=0;o<i.length;o++)i[o]&&(i[o].proxy=r);return t});