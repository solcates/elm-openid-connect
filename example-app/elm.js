(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}


var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $author$project$Main$Authorize = function (a) {
	return {$: 'Authorize', a: a};
};
var $author$project$Main$Google = {$: 'Google'};
var $author$project$Main$SignOutRequested = {$: 'SignOutRequested'};
var $author$project$Main$UrlChanged = function (a) {
	return {$: 'UrlChanged', a: a};
};
var $author$project$Main$UrlRequested = function (a) {
	return {$: 'UrlRequested', a: a};
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$application = _Browser_application;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$App$Page$None = {$: 'None'};
var $author$project$App$Url$StartPage = {$: 'StartPage'};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $author$project$Material$defaultModel = {button: $elm$core$Dict$empty, checkbox: $elm$core$Dict$empty, chip: $elm$core$Dict$empty, dialog: $elm$core$Dict$empty, drawer: $elm$core$Dict$empty, fab: $elm$core$Dict$empty, iconButton: $elm$core$Dict$empty, list: $elm$core$Dict$empty, menu: $elm$core$Dict$empty, radio: $elm$core$Dict$empty, ripple: $elm$core$Dict$empty, select: $elm$core$Dict$empty, slider: $elm$core$Dict$empty, snackbar: $elm$core$Dict$empty, _switch: $elm$core$Dict$empty, tabbar: $elm$core$Dict$empty, textfield: $elm$core$Dict$empty, topAppBar: $elm$core$Dict$empty};
var $author$project$App$Startpage$defaultModel = {mdc: $author$project$Material$defaultModel};
var $author$project$Main$defaultModel = F3(
	function (state, origin, key) {
		return {
			access_token: $elm$core$Maybe$Nothing,
			error: $elm$core$Maybe$Nothing,
			headers: _List_Nil,
			id_token: $elm$core$Maybe$Nothing,
			is_drawer_open: true,
			key: key,
			mdc: $author$project$Material$defaultModel,
			navigateToUrl: $elm$core$Maybe$Nothing,
			profile: $elm$core$Maybe$Nothing,
			redirectUri: _Utils_update(
				origin,
				{fragment: $elm$core$Maybe$Nothing, query: $elm$core$Maybe$Nothing}),
			startpage: $author$project$App$Startpage$defaultModel,
			state: state,
			transition: $author$project$App$Page$None,
			url: $author$project$App$Url$StartPage,
			useDismissibleDrawer: true
		};
	});
var $elm$core$Debug$log = _Debug_log;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$OpenIDConnect$Error = function (a) {
	return {$: 'Error', a: a};
};
var $author$project$OpenIDConnect$NoToken = {$: 'NoToken'};
var $author$project$OpenIDConnect$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $author$project$OpenIDConnect$mapToken = F2(
	function (f, t) {
		var token = t.a;
		var data = t.b;
		return A2(
			$author$project$OpenIDConnect$Token,
			token,
			f(data));
	});
var $elm$url$Url$Parser$State = F5(
	function (visited, unvisited, params, frag, value) {
		return {frag: frag, params: params, unvisited: unvisited, value: value, visited: visited};
	});
var $elm$url$Url$Parser$getFirstMatch = function (states) {
	getFirstMatch:
	while (true) {
		if (!states.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var state = states.a;
			var rest = states.b;
			var _v1 = state.unvisited;
			if (!_v1.b) {
				return $elm$core$Maybe$Just(state.value);
			} else {
				if ((_v1.a === '') && (!_v1.b.b)) {
					return $elm$core$Maybe$Just(state.value);
				} else {
					var $temp$states = rest;
					states = $temp$states;
					continue getFirstMatch;
				}
			}
		}
	}
};
var $elm$url$Url$Parser$removeFinalEmpty = function (segments) {
	if (!segments.b) {
		return _List_Nil;
	} else {
		if ((segments.a === '') && (!segments.b.b)) {
			return _List_Nil;
		} else {
			var segment = segments.a;
			var rest = segments.b;
			return A2(
				$elm$core$List$cons,
				segment,
				$elm$url$Url$Parser$removeFinalEmpty(rest));
		}
	}
};
var $elm$url$Url$Parser$preparePath = function (path) {
	var _v0 = A2($elm$core$String$split, '/', path);
	if (_v0.b && (_v0.a === '')) {
		var segments = _v0.b;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	} else {
		var segments = _v0;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	}
};
var $elm$url$Url$Parser$addToParametersHelp = F2(
	function (value, maybeList) {
		if (maybeList.$ === 'Nothing') {
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[value]));
		} else {
			var list = maybeList.a;
			return $elm$core$Maybe$Just(
				A2($elm$core$List$cons, value, list));
		}
	});
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$url$Url$Parser$addParam = F2(
	function (segment, dict) {
		var _v0 = A2($elm$core$String$split, '=', segment);
		if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
			var rawKey = _v0.a;
			var _v1 = _v0.b;
			var rawValue = _v1.a;
			var _v2 = $elm$url$Url$percentDecode(rawKey);
			if (_v2.$ === 'Nothing') {
				return dict;
			} else {
				var key = _v2.a;
				var _v3 = $elm$url$Url$percentDecode(rawValue);
				if (_v3.$ === 'Nothing') {
					return dict;
				} else {
					var value = _v3.a;
					return A3(
						$elm$core$Dict$update,
						key,
						$elm$url$Url$Parser$addToParametersHelp(value),
						dict);
				}
			}
		} else {
			return dict;
		}
	});
var $elm$url$Url$Parser$prepareQuery = function (maybeQuery) {
	if (maybeQuery.$ === 'Nothing') {
		return $elm$core$Dict$empty;
	} else {
		var qry = maybeQuery.a;
		return A3(
			$elm$core$List$foldr,
			$elm$url$Url$Parser$addParam,
			$elm$core$Dict$empty,
			A2($elm$core$String$split, '&', qry));
	}
};
var $elm$url$Url$Parser$parse = F2(
	function (_v0, url) {
		var parser = _v0.a;
		return $elm$url$Url$Parser$getFirstMatch(
			parser(
				A5(
					$elm$url$Url$Parser$State,
					_List_Nil,
					$elm$url$Url$Parser$preparePath(url.path),
					$elm$url$Url$Parser$prepareQuery(url.query),
					url.fragment,
					$elm$core$Basics$identity)));
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $truqu$elm_base64$Base64$Decode$pad = function (input) {
	var _v0 = $elm$core$String$length(input) % 4;
	switch (_v0) {
		case 3:
			return input + '=';
		case 2:
			return input + '==';
		default:
			return input;
	}
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $truqu$elm_base64$Base64$Decode$charToInt = function (_char) {
	switch (_char.valueOf()) {
		case 'A':
			return 0;
		case 'B':
			return 1;
		case 'C':
			return 2;
		case 'D':
			return 3;
		case 'E':
			return 4;
		case 'F':
			return 5;
		case 'G':
			return 6;
		case 'H':
			return 7;
		case 'I':
			return 8;
		case 'J':
			return 9;
		case 'K':
			return 10;
		case 'L':
			return 11;
		case 'M':
			return 12;
		case 'N':
			return 13;
		case 'O':
			return 14;
		case 'P':
			return 15;
		case 'Q':
			return 16;
		case 'R':
			return 17;
		case 'S':
			return 18;
		case 'T':
			return 19;
		case 'U':
			return 20;
		case 'V':
			return 21;
		case 'W':
			return 22;
		case 'X':
			return 23;
		case 'Y':
			return 24;
		case 'Z':
			return 25;
		case 'a':
			return 26;
		case 'b':
			return 27;
		case 'c':
			return 28;
		case 'd':
			return 29;
		case 'e':
			return 30;
		case 'f':
			return 31;
		case 'g':
			return 32;
		case 'h':
			return 33;
		case 'i':
			return 34;
		case 'j':
			return 35;
		case 'k':
			return 36;
		case 'l':
			return 37;
		case 'm':
			return 38;
		case 'n':
			return 39;
		case 'o':
			return 40;
		case 'p':
			return 41;
		case 'q':
			return 42;
		case 'r':
			return 43;
		case 's':
			return 44;
		case 't':
			return 45;
		case 'u':
			return 46;
		case 'v':
			return 47;
		case 'w':
			return 48;
		case 'x':
			return 49;
		case 'y':
			return 50;
		case 'z':
			return 51;
		case '0':
			return 52;
		case '1':
			return 53;
		case '2':
			return 54;
		case '3':
			return 55;
		case '4':
			return 56;
		case '5':
			return 57;
		case '6':
			return 58;
		case '7':
			return 59;
		case '8':
			return 60;
		case '9':
			return 61;
		case '+':
			return 62;
		case '/':
			return 63;
		default:
			return 0;
	}
};
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $truqu$elm_base64$Base64$Decode$intToString = A2($elm$core$Basics$composeR, $elm$core$Char$fromCode, $elm$core$String$fromChar);
var $truqu$elm_base64$Base64$Decode$add = F2(
	function (_char, _v0) {
		var curr = _v0.a;
		var need = _v0.b;
		var res = _v0.c;
		var shiftAndAdd = function (_int) {
			return (63 & _int) | (curr << 6);
		};
		return (!need) ? ((!(128 & _char)) ? _Utils_Tuple3(
			0,
			0,
			_Utils_ap(
				res,
				$truqu$elm_base64$Base64$Decode$intToString(_char))) : (((224 & _char) === 192) ? _Utils_Tuple3(31 & _char, 1, res) : (((240 & _char) === 224) ? _Utils_Tuple3(15 & _char, 2, res) : _Utils_Tuple3(7 & _char, 3, res)))) : ((need === 1) ? _Utils_Tuple3(
			0,
			0,
			_Utils_ap(
				res,
				$truqu$elm_base64$Base64$Decode$intToString(
					shiftAndAdd(_char)))) : _Utils_Tuple3(
			shiftAndAdd(_char),
			need - 1,
			res));
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $truqu$elm_base64$Base64$Decode$toUTF16 = F2(
	function (_char, acc) {
		return _Utils_Tuple3(
			0,
			0,
			A2(
				$truqu$elm_base64$Base64$Decode$add,
				255 & (_char >>> 0),
				A2(
					$truqu$elm_base64$Base64$Decode$add,
					255 & (_char >>> 8),
					A2($truqu$elm_base64$Base64$Decode$add, 255 & (_char >>> 16), acc))));
	});
var $truqu$elm_base64$Base64$Decode$chomp = F2(
	function (char_, _v0) {
		var curr = _v0.a;
		var cnt = _v0.b;
		var utf8ToUtf16 = _v0.c;
		var _char = $truqu$elm_base64$Base64$Decode$charToInt(char_);
		if (cnt === 3) {
			return A2($truqu$elm_base64$Base64$Decode$toUTF16, curr | _char, utf8ToUtf16);
		} else {
			return _Utils_Tuple3((_char << ((3 - cnt) * 6)) | curr, cnt + 1, utf8ToUtf16);
		}
	});
var $elm$core$String$foldl = _String_foldl;
var $truqu$elm_base64$Base64$Decode$initial = _Utils_Tuple3(
	0,
	0,
	_Utils_Tuple3(0, 0, ''));
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $truqu$elm_base64$Base64$Decode$stripNulls = F2(
	function (input, output) {
		return A2($elm$core$String$endsWith, '==', input) ? A2($elm$core$String$dropRight, 2, output) : (A2($elm$core$String$endsWith, '=', input) ? A2($elm$core$String$dropRight, 1, output) : output);
	});
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $truqu$elm_base64$Base64$Decode$validBase64Regex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^([A-Za-z0-9\\/+]{4})*([A-Za-z0-9\\/+]{2}[A-Za-z0-9\\/+=]{2})?$'));
var $truqu$elm_base64$Base64$Decode$validate = function (input) {
	return A2($elm$regex$Regex$contains, $truqu$elm_base64$Base64$Decode$validBase64Regex, input) ? $elm$core$Result$Ok(input) : $elm$core$Result$Err('Invalid base64');
};
var $truqu$elm_base64$Base64$Decode$wrapUp = function (_v0) {
	var _v1 = _v0.c;
	var need = _v1.b;
	var res = _v1.c;
	return (need > 0) ? $elm$core$Result$Err('Invalid UTF-16') : $elm$core$Result$Ok(res);
};
var $truqu$elm_base64$Base64$Decode$validateAndDecode = function (input) {
	return A2(
		$elm$core$Result$map,
		$truqu$elm_base64$Base64$Decode$stripNulls(input),
		A2(
			$elm$core$Result$andThen,
			A2(
				$elm$core$Basics$composeR,
				A2($elm$core$String$foldl, $truqu$elm_base64$Base64$Decode$chomp, $truqu$elm_base64$Base64$Decode$initial),
				$truqu$elm_base64$Base64$Decode$wrapUp),
			$truqu$elm_base64$Base64$Decode$validate(input)));
};
var $truqu$elm_base64$Base64$Decode$decode = A2($elm$core$Basics$composeR, $truqu$elm_base64$Base64$Decode$pad, $truqu$elm_base64$Base64$Decode$validateAndDecode);
var $truqu$elm_base64$Base64$decode = $truqu$elm_base64$Base64$Decode$decode;
var $author$project$OpenIDConnect$base64Decode = function (data) {
	var _v0 = $truqu$elm_base64$Base64$decode(data);
	if (_v0.$ === 'Ok') {
		var result = _v0.a;
		return A2($elm$core$String$endsWith, '\u0000', result) ? $elm$core$Result$Ok(
			A2($elm$core$String$dropRight, 1, result)) : $elm$core$Result$Ok(result);
	} else {
		var err = _v0.a;
		return $elm$core$Result$Err(err);
	}
};
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $author$project$OpenIDConnect$parseToken = F2(
	function (decode, token) {
		var _v0 = A2($elm$core$String$split, '.', token);
		if (((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.b.b)) {
			var part0 = _v0.a;
			var _v1 = _v0.b;
			var part1 = _v1.a;
			var _v2 = _v1.b;
			var sign = _v2.a;
			var _v3 = $author$project$OpenIDConnect$base64Decode(part1);
			if (_v3.$ === 'Ok') {
				var payload = _v3.a;
				var _v4 = A2($elm$json$Json$Decode$decodeString, decode, payload);
				if (_v4.$ === 'Ok') {
					var result = _v4.a;
					return $elm$core$Result$Ok(
						A2($author$project$OpenIDConnect$Token, token, result));
				} else {
					var err = _v4.a;
					return $elm$core$Result$Err(
						$author$project$OpenIDConnect$Error('decode payload error'));
				}
			} else {
				var err = _v3.a;
				return $elm$core$Result$Err(
					$author$project$OpenIDConnect$Error('decode part1 error'));
			}
		} else {
			return $elm$core$Result$Err(
				$author$project$OpenIDConnect$Error('Invalid id_token'));
		}
	});
var $elm$url$Url$Parser$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$url$Url$Parser$query = function (_v0) {
	var queryParser = _v0.a;
	return $elm$url$Url$Parser$Parser(
		function (_v1) {
			var visited = _v1.visited;
			var unvisited = _v1.unvisited;
			var params = _v1.params;
			var frag = _v1.frag;
			var value = _v1.value;
			return _List_fromArray(
				[
					A5(
					$elm$url$Url$Parser$State,
					visited,
					unvisited,
					params,
					frag,
					value(
						queryParser(params)))
				]);
		});
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$url$Url$Parser$Internal$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$url$Url$Parser$Query$custom = F2(
	function (key, func) {
		return $elm$url$Url$Parser$Internal$Parser(
			function (dict) {
				return func(
					A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						A2($elm$core$Dict$get, key, dict)));
			});
	});
var $elm$url$Url$Parser$Query$string = function (key) {
	return A2(
		$elm$url$Url$Parser$Query$custom,
		key,
		function (stringList) {
			if (stringList.b && (!stringList.b.b)) {
				var str = stringList.a;
				return $elm$core$Maybe$Just(str);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		});
};
var $author$project$OpenIDConnect$tokenData = function (t) {
	var token = t.a;
	var data = t.b;
	return data;
};
var $author$project$OpenIDConnect$parseWithMaybeNonce = F3(
	function (n, decode, url) {
		var murl = A2($elm$core$Debug$log, 'URL', url);
		var id_token_parser = $elm$url$Url$Parser$Query$string('id_token');
		var id_token = A2(
			$elm$url$Url$Parser$parse,
			$elm$url$Url$Parser$query(id_token_parser),
			murl);
		var error_parser = $elm$url$Url$Parser$Query$string('error');
		var error = A2(
			$elm$url$Url$Parser$parse,
			$elm$url$Url$Parser$query(error_parser),
			murl);
		var _v0 = _Utils_Tuple3(id_token, error, n);
		if (_v0.a.$ === 'Just') {
			if (_v0.c.$ === 'Just') {
				var id = _v0.a.a;
				var nonce = _v0.c.a;
				var validateNonce = function (tokenWithNonce) {
					return _Utils_eq(
						$author$project$OpenIDConnect$tokenData(tokenWithNonce).a,
						nonce) ? $elm$core$Result$Ok(
						A2($author$project$OpenIDConnect$mapToken, $elm$core$Tuple$second, tokenWithNonce)) : $elm$core$Result$Err(
						$author$project$OpenIDConnect$Error('Invalid nonce'));
				};
				var parseResult = function () {
					if (id.$ === 'Nothing') {
						return $elm$core$Result$Err(
							$author$project$OpenIDConnect$Error('Error Parsing Token'));
					} else {
						var a = id.a;
						return A2($author$project$OpenIDConnect$parseToken, decode, a);
					}
				}();
				if (parseResult.$ === 'Ok') {
					var value = parseResult.a;
					return $elm$core$Result$Ok(
						A2($elm$core$Debug$log, 'value', value));
				} else {
					var e = parseResult.a;
					return $elm$core$Result$Err(
						$author$project$OpenIDConnect$Error('Error Parsing Results'));
				}
			} else {
				var id = _v0.a.a;
				var _v3 = _v0.c;
				if (id.$ === 'Nothing') {
					return $elm$core$Result$Err(
						$author$project$OpenIDConnect$Error('Error Parsing Token'));
				} else {
					var a = id.a;
					return A2($author$project$OpenIDConnect$parseToken, decode, a);
				}
			}
		} else {
			if (_v0.b.$ === 'Just') {
				var e = _v0.b.a;
				if (e.$ === 'Nothing') {
					return $elm$core$Result$Err(
						$author$project$OpenIDConnect$Error('Unknown Error'));
				} else {
					var a = e.a;
					return $elm$core$Result$Err(
						$author$project$OpenIDConnect$Error(a));
				}
			} else {
				return $elm$core$Result$Err($author$project$OpenIDConnect$NoToken);
			}
		}
	});
var $author$project$OpenIDConnect$parse = F2(
	function (d, u) {
		return A3($author$project$OpenIDConnect$parseWithMaybeNonce, $elm$core$Maybe$Nothing, d, u);
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$OpenIDConnect$Decode$subDecoder = A2($elm$json$Json$Decode$field, 'sub', $elm$json$Json$Decode$string);
var $author$project$Main$init = F3(
	function (_v0, origin, key) {
		var randomBytes = _v0.randomBytes;
		var model = A3($author$project$Main$defaultModel, randomBytes, origin, key);
		var fixed = A2($elm$core$Debug$log, 'origin', origin);
		var _v1 = A2($author$project$OpenIDConnect$parse, $author$project$OpenIDConnect$Decode$subDecoder, fixed);
		if (_v1.$ === 'Ok') {
			var token = _v1.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						id_token: $elm$core$Maybe$Just(
							A2($elm$core$Debug$log, 'token', token))
					}),
				$elm$core$Platform$Cmd$none);
		} else {
			if (_v1.a.$ === 'NoToken') {
				var _v2 = _v1.a;
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			} else {
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			}
		}
	});
var $elm$html$Html$br = _VirtualDom_node('br');
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $author$project$Main$sideNote = _List_fromArray(
	[
		A2(
		$elm$html$Html$h1,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text('Thales EKMS')
			])),
		A2(
		$elm$html$Html$p,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text('\n\n  ')
			])),
		A2(
		$elm$html$Html$p,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text('This is a Beta program... '),
				A2($elm$html$Html$br, _List_Nil, _List_Nil),
				A2($elm$html$Html$ul, _List_Nil, _List_Nil)
			]))
	]);
var $author$project$Main$AnimationTick = function (a) {
	return {$: 'AnimationTick', a: a};
};
var $author$project$Main$Mdc = function (a) {
	return {$: 'Mdc', a: a};
};
var $author$project$Main$WindowResized = F2(
	function (a, b) {
		return {$: 'WindowResized', a: a, b: b};
	});
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 'Delta', a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {oldTime: oldTime, request: request, subs: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$browser$Browser$AnimationManager$now = _Browser_now(_Utils_Tuple0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(_Utils_Tuple0);
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.request;
		var oldTime = _v0.oldTime;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 'Nothing') {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.subs;
		var oldTime = _v0.oldTime;
		var send = function (sub) {
			if (sub.$ === 'Time') {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 'Time', a: a};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (sub.$ === 'Time') {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrameDelta = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Delta(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrameDelta = $elm$browser$Browser$AnimationManager$onAnimationFrameDelta;
var $elm$browser$Browser$Events$Window = {$: 'Window'};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		$elm$browser$Browser$Events$Window,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $author$project$Internal$Msg$MenuMsg = F2(
	function (a, b) {
		return {$: 'MenuMsg', a: a, b: b};
	});
var $elm$core$Platform$Sub$map = _Platform_map;
var $author$project$Internal$Component$subs = F5(
	function (ctor, get, subscriptions, lift, model) {
		return $elm$core$Platform$Sub$batch(
			A3(
				$elm$core$Dict$foldl,
				F3(
					function (idx, state, ss) {
						return A2(
							$elm$core$List$cons,
							A2(
								$elm$core$Platform$Sub$map,
								A2(
									$elm$core$Basics$composeL,
									lift,
									ctor(idx)),
								subscriptions(state)),
							ss);
					}),
				_List_Nil,
				get(model)));
	});
var $author$project$Internal$Menu$Model$DocumentClick = {$: 'DocumentClick'};
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$onClick = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'click');
var $author$project$Internal$Menu$Implementation$subscriptions = function (model) {
	return $elm$browser$Browser$Events$onClick(
		$elm$json$Json$Decode$succeed($author$project$Internal$Menu$Model$DocumentClick));
};
var $author$project$Internal$Menu$Implementation$subs = A3(
	$author$project$Internal$Component$subs,
	$author$project$Internal$Msg$MenuMsg,
	function ($) {
		return $.menu;
	},
	$author$project$Internal$Menu$Implementation$subscriptions);
var $author$project$Material$subscriptions = F2(
	function (lift, model) {
		return A2($author$project$Internal$Menu$Implementation$subs, lift, model.mdc);
	});
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2($author$project$Material$subscriptions, $author$project$Main$Mdc, model),
				$elm$browser$Browser$Events$onResize($author$project$Main$WindowResized),
				_Utils_eq(model.navigateToUrl, $elm$core$Maybe$Nothing) ? $elm$core$Platform$Sub$none : $elm$browser$Browser$Events$onAnimationFrameDelta($author$project$Main$AnimationTick)
			]));
};
var $author$project$App$Page$Active = {$: 'Active'};
var $author$project$App$Page$Enter = {$: 'Enter'};
var $author$project$Main$Navigate = function (a) {
	return {$: 'Navigate', a: a};
};
var $author$project$Main$StartPageMsg = function (a) {
	return {$: 'StartPageMsg', a: a};
};
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$url$Url$Builder$QueryParameter = F2(
	function (a, b) {
		return {$: 'QueryParameter', a: a, b: b};
	});
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $elm$url$Url$Builder$string = F2(
	function (key, value) {
		return A2(
			$elm$url$Url$Builder$QueryParameter,
			$elm$url$Url$percentEncode(key),
			$elm$url$Url$percentEncode(value));
	});
var $author$project$OpenIDConnect$qsAddList = F3(
	function (name, xs, qs) {
		var list = A2(
			$elm$url$Url$Builder$string,
			name,
			A2($elm$core$String$join, ',', xs));
		return A2(
			$elm$core$List$append,
			qs,
			_List_fromArray(
				[list]));
	});
var $author$project$OpenIDConnect$qsAddMaybe = F3(
	function (param, ms, qs) {
		if (ms.$ === 'Nothing') {
			return qs;
		} else {
			var s = ms.a;
			return A2(
				$elm$core$List$append,
				qs,
				_List_fromArray(
					[
						A2($elm$url$Url$Builder$string, param, s)
					]));
		}
	});
var $elm$url$Url$Builder$toQueryPair = function (_v0) {
	var key = _v0.a;
	var value = _v0.b;
	return key + ('=' + value);
};
var $elm$url$Url$Builder$toQuery = function (parameters) {
	if (!parameters.b) {
		return '';
	} else {
		return '?' + A2(
			$elm$core$String$join,
			'&',
			A2($elm$core$List$map, $elm$url$Url$Builder$toQueryPair, parameters));
	}
};
var $author$project$OpenIDConnect$authorize = function (_v0) {
	var url = _v0.url;
	var redirectUri = _v0.redirectUri;
	var clientID = _v0.clientID;
	var scope = _v0.scope;
	var state = _v0.state;
	var nonce = _v0.nonce;
	var params = _v0.params;
	var qs = _List_fromArray(
		[
			clientID,
			redirectUri,
			A2($elm$url$Url$Builder$string, 'response_type', 'id_token')
		]);
	var t = $elm$url$Url$Builder$toQuery(
		A3(
			$author$project$OpenIDConnect$qsAddMaybe,
			'nonce',
			nonce,
			A3(
				$author$project$OpenIDConnect$qsAddMaybe,
				'state',
				state,
				A3($author$project$OpenIDConnect$qsAddList, 'scope', scope, qs))));
	var fUrl = A2(
		$elm$core$Debug$log,
		'fUrl',
		_Utils_ap(url, t));
	return $elm$browser$Browser$Navigation$load(fUrl);
};
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $author$project$App$Page$drawerItems = $elm$core$Array$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('Home', $author$project$App$Url$StartPage)
		]));
var $author$project$App$Url$Error404 = function (a) {
	return {$: 'Error404', a: a};
};
var $author$project$App$Url$SecretPage = {$: 'SecretPage'};
var $author$project$App$Url$fromString = function (url) {
	switch (url) {
		case '':
			return $author$project$App$Url$StartPage;
		case 'secret':
			return $author$project$App$Url$SecretPage;
		default:
			return $author$project$App$Url$Error404(url);
	}
};
var $author$project$App$Url$fromUrl = function (url) {
	return $author$project$App$Url$fromString(
		A2($elm$core$Maybe$withDefault, '', url.fragment));
};
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$OpenIDConnect$Authorization = F7(
	function (url, redirectUri, clientID, scope, state, nonce, params) {
		return {clientID: clientID, nonce: nonce, params: params, redirectUri: redirectUri, scope: scope, state: state, url: url};
	});
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 'Nothing') {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 'Nothing') {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.protocol;
		if (_v0.$ === 'Http') {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.fragment,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.query,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.port_,
					_Utils_ap(http, url.host)),
				url.path)));
};
var $author$project$OpenIDConnect$newAuth = F4(
	function (url, redirectUri, clientId, scope) {
		return A7(
			$author$project$OpenIDConnect$Authorization,
			$elm$url$Url$toString(url),
			A2(
				$elm$url$Url$Builder$string,
				'redirect_uri',
				$elm$url$Url$toString(redirectUri)),
			A2($elm$url$Url$Builder$string, 'client_id', clientId),
			scope,
			$elm$core$Maybe$Nothing,
			$elm$core$Maybe$Nothing,
			_List_Nil);
	});
var $elm$core$Basics$not = _Basics_not;
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $author$project$App$Url$toString = function (url) {
	switch (url.$) {
		case 'StartPage':
			return '#';
		case 'SecretPage':
			return '#secret';
		default:
			var requestedHash = url.a;
			return requestedHash;
	}
};
var $author$project$App$Startpage$update = F3(
	function (lift, msg, model) {
		var msg_ = msg.a;
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $author$project$Internal$Dispatch$forward = function (msgs) {
	return $elm$core$Platform$Cmd$batch(
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeL,
				$elm$core$Task$perform($elm$core$Basics$identity),
				$elm$core$Task$succeed),
			msgs));
};
var $author$project$Internal$Msg$ButtonMsg = F2(
	function (a, b) {
		return {$: 'ButtonMsg', a: a, b: b};
	});
var $author$project$Internal$Ripple$Model$Idle = {$: 'Idle'};
var $author$project$Internal$Ripple$Model$defaultModel = {animationCounter: 0, animationState: $author$project$Internal$Ripple$Model$Idle, clientRect: $elm$core$Maybe$Nothing, focused: false};
var $author$project$Internal$Button$Model$defaultModel = {ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$Component$indexed = F3(
	function (get_model, set_model, model0) {
		var set_ = F3(
			function (idx, store, model) {
				return A2(
					set_model,
					A3(
						$elm$core$Dict$insert,
						idx,
						model,
						get_model(store)),
					store);
			});
		var get_ = F2(
			function (idx, store) {
				return A2(
					$elm$core$Maybe$withDefault,
					model0,
					A2(
						$elm$core$Dict$get,
						idx,
						get_model(store)));
			});
		return {get: get_, set: set_};
	});
var $author$project$Internal$Button$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.button;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{button: x});
		}),
	$author$project$Internal$Button$Model$defaultModel);
var $author$project$Internal$Component$react = F8(
	function (get, set, ctor, update, lift, msg, idx, store) {
		return A2(
			$elm$core$Tuple$mapFirst,
			$elm$core$Maybe$map(
				A2(set, idx, store)),
			A3(
				update,
				A2(
					$elm$core$Basics$composeL,
					lift,
					ctor(idx)),
				msg,
				A2(get, idx, store)));
	});
var $author$project$Internal$Button$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Process$sleep = _Process_sleep;
var $author$project$Internal$Helpers$delayedCmd = F2(
	function (time, msg) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$always(msg),
			$elm$core$Process$sleep(time));
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $author$project$Internal$Ripple$Model$Activate = F2(
	function (a, b) {
		return {$: 'Activate', a: a, b: b};
	});
var $author$project$Internal$Ripple$Model$Activated = function (a) {
	return {$: 'Activated', a: a};
};
var $author$project$Internal$Ripple$Model$ActivationEnded = function (a) {
	return {$: 'ActivationEnded', a: a};
};
var $author$project$Internal$Ripple$Model$Deactivated = function (a) {
	return {$: 'Deactivated', a: a};
};
var $author$project$Internal$Ripple$Model$DeactivationEnded = function (a) {
	return {$: 'DeactivationEnded', a: a};
};
var $author$project$Internal$Ripple$Model$Reactivate = F2(
	function (a, b) {
		return {$: 'Reactivate', a: a, b: b};
	});
var $author$project$Internal$Ripple$Implementation$normalizedEventCoords = F3(
	function (event, pageOffset, clientRect) {
		var _v0 = pageOffset;
		var x = _v0.x;
		var y = _v0.y;
		var documentX = x + clientRect.x;
		var documentY = x + clientRect.y;
		var _v1 = event.pagePoint;
		var pageX = _v1.pageX;
		var pageY = _v1.pageY;
		return {x: pageX - documentX, y: pageY - documentY};
	});
var $author$project$Internal$Ripple$Implementation$fgTranslationCoords = F2(
	function (isUnbounded, _v0) {
		var frame = _v0.frame;
		var activationEvent = _v0.activationEvent;
		var windowPageOffset = _v0.windowPageOffset;
		var wasActivatedByPointer = _v0.wasActivatedByPointer;
		var maxDimension = A2($elm$core$Basics$max, frame.width, frame.height);
		var initialSize = maxDimension * 0.6;
		var startPoint = function () {
			var _v1 = A3($author$project$Internal$Ripple$Implementation$normalizedEventCoords, activationEvent, windowPageOffset, frame);
			var x = _v1.x;
			var y = _v1.y;
			return {x: x - (initialSize / 2), y: y - (initialSize / 2)};
		}();
		var endPoint = {x: (frame.width - initialSize) / 2, y: (frame.height - initialSize) / 2};
		return {endPoint: endPoint, startPoint: startPoint};
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $author$project$Internal$Ripple$Implementation$animateActivation = F4(
	function (isUnbounded, frame, windowPageOffset, activationEvent) {
		var wasActivatedByPointer = true;
		var _v0 = A2(
			$author$project$Internal$Ripple$Implementation$fgTranslationCoords,
			isUnbounded,
			{activationEvent: activationEvent, frame: frame, wasActivatedByPointer: wasActivatedByPointer, windowPageOffset: windowPageOffset});
		var startPoint = _v0.startPoint;
		var endPoint = _v0.endPoint;
		var translateEnd = isUnbounded ? '' : ($elm$core$String$fromFloat(endPoint.x) + ('px, ' + ($elm$core$String$fromFloat(endPoint.y) + 'px')));
		var translateStart = isUnbounded ? '' : ($elm$core$String$fromFloat(startPoint.x) + ('px, ' + ($elm$core$String$fromFloat(startPoint.y) + 'px')));
		return {translateEnd: translateEnd, translateStart: translateStart};
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$browser$Browser$Dom$getElement = _Browser_getElement;
var $author$project$Internal$Ripple$Model$numbers = {deactivationTimeoutMs: 225, fgDeactivationMs: 150, initialOriginScale: 0.6, padding: 10, tapDelayMs: 300};
var $elm$core$Basics$pow = _Basics_pow;
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$Internal$Ripple$Implementation$layoutInternal = F2(
	function (isUnbounded, frame) {
		var maxDim = A2($elm$core$Basics$max, frame.width, frame.height);
		var initialSize = $elm$core$Basics$floor(maxDim * $author$project$Internal$Ripple$Model$numbers.initialOriginScale);
		var hypotenuse = $elm$core$Basics$sqrt(
			A2($elm$core$Basics$pow, frame.width, 2) + A2($elm$core$Basics$pow, frame.height, 2));
		var boundedRadius = hypotenuse + $author$project$Internal$Ripple$Model$numbers.padding;
		var maxRadius = isUnbounded ? maxDim : boundedRadius;
		var fgScale = maxRadius / initialSize;
		return {fgScale: fgScale, initialSize: initialSize};
	});
var $author$project$Internal$Ripple$Implementation$update = F2(
	function (msg, model) {
		var _v0 = _Utils_Tuple2(msg, model.animationState);
		_v0$13:
		while (true) {
			switch (_v0.a.$) {
				case 'Focus':
					var _v1 = _v0.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{focused: true}),
						$elm$core$Platform$Cmd$none);
				case 'Blur':
					var _v2 = _v0.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{focused: false}),
						$elm$core$Platform$Cmd$none);
				case 'SetCssVariables':
					var _v3 = _v0.a;
					var isUnbounded = _v3.a;
					var clientRect = _v3.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								clientRect: $elm$core$Maybe$Just(clientRect)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Activate0':
					if (_v0.b.$ === 'Idle') {
						var _v4 = _v0.a;
						var domId = _v4.a;
						var activateData = _v4.b;
						var _v5 = _v0.b;
						return _Utils_Tuple2(
							model,
							A2(
								$elm$core$Task$attempt,
								$author$project$Internal$Ripple$Model$Activate(activateData),
								$elm$browser$Browser$Dom$getElement(domId)));
					} else {
						var _v6 = _v0.a;
						var domId = _v6.a;
						var activateData = _v6.b;
						return _Utils_Tuple2(
							model,
							A2(
								$elm$core$Task$attempt,
								$author$project$Internal$Ripple$Model$Reactivate(activateData),
								$elm$browser$Browser$Dom$getElement(domId)));
					}
				case 'Reactivate':
					switch (_v0.b.$) {
						case 'Activated':
							var _v7 = _v0.a;
							var activateData = _v7.a;
							var element = _v7.b;
							var activationEvent = _v0.b.a.activationEvent;
							return _Utils_eq(activateData.event.eventType, activationEvent.eventType) ? _Utils_Tuple2(
								_Utils_update(
									model,
									{animationState: $author$project$Internal$Ripple$Model$Idle}),
								A2(
									$elm$core$Task$perform,
									function (_v8) {
										return A2($author$project$Internal$Ripple$Model$Activate, activateData, element);
									},
									$elm$core$Task$succeed(_Utils_Tuple0))) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						case 'Deactivated':
							var _v9 = _v0.a;
							var activateData = _v9.a;
							var element = _v9.b;
							var activationEvent = _v0.b.a.activationEvent;
							return _Utils_eq(activateData.event.eventType, activationEvent.eventType) ? _Utils_Tuple2(
								_Utils_update(
									model,
									{animationState: $author$project$Internal$Ripple$Model$Idle}),
								A2(
									$elm$core$Task$perform,
									function (_v10) {
										return A2($author$project$Internal$Ripple$Model$Activate, activateData, element);
									},
									$elm$core$Task$succeed(_Utils_Tuple0))) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						default:
							var _v11 = _v0.a;
							var activateData = _v11.a;
							var element = _v11.b;
							var _v12 = _v0.b;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{animationState: $author$project$Internal$Ripple$Model$Idle}),
								A2(
									$elm$core$Task$perform,
									function (_v13) {
										return A2($author$project$Internal$Ripple$Model$Activate, activateData, element);
									},
									$elm$core$Task$succeed(_Utils_Tuple0)));
					}
				case 'Activate':
					if (_v0.a.b.$ === 'Err') {
						var _v14 = _v0.a;
						var activateData = _v14.a;
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var _v15 = _v0.a;
						var activateData = _v15.a;
						var element = _v15.b.a.element;
						var viewport = _v15.b.a.viewport;
						var newAnimationCounter = model.animationCounter + 1;
						var _v16 = A4($author$project$Internal$Ripple$Implementation$animateActivation, activateData.isUnbounded, element, viewport, activateData.event);
						var translateStart = _v16.translateStart;
						var translateEnd = _v16.translateEnd;
						var _v17 = A2($author$project$Internal$Ripple$Implementation$layoutInternal, activateData.isUnbounded, element);
						var fgScale = _v17.fgScale;
						var initialSize = _v17.initialSize;
						var activatedData = {
							activationEvent: activateData.event,
							activationHasEnded: false,
							deactivated: false,
							fgScale: fgScale,
							frame: {height: element.height, left: element.x, top: element.y, width: element.width},
							initialSize: initialSize,
							translateEnd: translateEnd,
							translateStart: translateStart,
							wasElementMadeActive: activateData.wasElementMadeActive
						};
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									animationCounter: newAnimationCounter,
									animationState: $author$project$Internal$Ripple$Model$Activated(activatedData)
								}),
							A2(
								$elm$core$Task$perform,
								function (_v18) {
									return $author$project$Internal$Ripple$Model$ActivationEnded(newAnimationCounter);
								},
								$elm$core$Process$sleep($author$project$Internal$Ripple$Model$numbers.deactivationTimeoutMs)));
					}
				case 'ActivationEnded':
					if (_v0.b.$ === 'Activated') {
						var animationCount = _v0.a.a;
						var activatedData = _v0.b.a;
						if (_Utils_eq(animationCount, model.animationCounter)) {
							if (activatedData.deactivated) {
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											animationState: $author$project$Internal$Ripple$Model$Deactivated(activatedData)
										}),
									A2(
										$elm$core$Task$perform,
										function (_v19) {
											return $author$project$Internal$Ripple$Model$DeactivationEnded(model.animationCounter);
										},
										$elm$core$Process$sleep($author$project$Internal$Ripple$Model$numbers.tapDelayMs)));
							} else {
								var newActivatedData = _Utils_update(
									activatedData,
									{activationHasEnded: true});
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											animationState: $author$project$Internal$Ripple$Model$Activated(newActivatedData)
										}),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					} else {
						break _v0$13;
					}
				case 'Deactivate':
					if (_v0.b.$ === 'Activated') {
						var _v20 = _v0.a;
						var activatedData = _v0.b.a;
						if (activatedData.activationHasEnded) {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										animationState: $author$project$Internal$Ripple$Model$Deactivated(activatedData)
									}),
								A2(
									$elm$core$Task$perform,
									function (_v21) {
										return $author$project$Internal$Ripple$Model$DeactivationEnded(model.animationCounter);
									},
									$elm$core$Process$sleep($author$project$Internal$Ripple$Model$numbers.tapDelayMs)));
						} else {
							var newActivatedData = _Utils_update(
								activatedData,
								{deactivated: true});
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										animationState: $author$project$Internal$Ripple$Model$Activated(newActivatedData)
									}),
								$elm$core$Platform$Cmd$none);
						}
					} else {
						break _v0$13;
					}
				default:
					if (_v0.b.$ === 'Deactivated') {
						var animationCount = _v0.a.a;
						return _Utils_eq(animationCount, model.animationCounter) ? _Utils_Tuple2(
							_Utils_update(
								model,
								{animationState: $author$project$Internal$Ripple$Model$Idle}),
							$elm$core$Platform$Cmd$none) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						break _v0$13;
					}
			}
		}
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $author$project$Internal$Button$Implementation$update = F3(
	function (lift, msg, model) {
		if (msg.$ === 'RippleMsg') {
			var msg_ = msg.a;
			var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
			var rippleState = _v1.a;
			var rippleCmd = _v1.b;
			return _Utils_Tuple2(
				$elm$core$Maybe$Just(
					_Utils_update(
						model,
						{ripple: rippleState})),
				A2(
					$elm$core$Platform$Cmd$map,
					A2($elm$core$Basics$composeL, lift, $author$project$Internal$Button$Model$RippleMsg),
					rippleCmd));
		} else {
			var doRipple = msg.a;
			var msg_ = msg.b;
			return _Utils_Tuple2(
				$elm$core$Maybe$Nothing,
				A2(
					$author$project$Internal$Helpers$delayedCmd,
					doRipple ? 150 : 0,
					msg_));
		}
	});
var $author$project$Internal$Button$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Button$Implementation$getSet.get, $author$project$Internal$Button$Implementation$getSet.set, $author$project$Internal$Msg$ButtonMsg, $author$project$Internal$Button$Implementation$update);
var $author$project$Internal$Msg$CheckboxMsg = F2(
	function (a, b) {
		return {$: 'CheckboxMsg', a: a, b: b};
	});
var $author$project$Internal$Checkbox$Model$defaultModel = {animation: $elm$core$Maybe$Nothing, isFocused: false, lastKnownState: $elm$core$Maybe$Nothing};
var $author$project$Internal$Checkbox$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.checkbox;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{checkbox: x});
		}),
	$author$project$Internal$Checkbox$Model$defaultModel);
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Internal$Checkbox$Model$CheckedIndeterminate = {$: 'CheckedIndeterminate'};
var $author$project$Internal$Checkbox$Model$CheckedUnchecked = {$: 'CheckedUnchecked'};
var $author$project$Internal$Checkbox$Model$IndeterminateChecked = {$: 'IndeterminateChecked'};
var $author$project$Internal$Checkbox$Model$IndeterminateUnchecked = {$: 'IndeterminateUnchecked'};
var $author$project$Internal$Checkbox$Model$UncheckedChecked = {$: 'UncheckedChecked'};
var $author$project$Internal$Checkbox$Model$UncheckedIndeterminate = {$: 'UncheckedIndeterminate'};
var $author$project$Internal$Checkbox$Implementation$animationState = F2(
	function (oldState, state) {
		var _v0 = _Utils_Tuple2(oldState, state);
		_v0$6:
		while (true) {
			if (_v0.a.$ === 'Nothing') {
				if (_v0.b.$ === 'Just') {
					if (_v0.b.a.$ === 'Checked') {
						var _v5 = _v0.a;
						var _v6 = _v0.b.a;
						return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$IndeterminateChecked);
					} else {
						var _v7 = _v0.a;
						var _v8 = _v0.b.a;
						return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$IndeterminateUnchecked);
					}
				} else {
					break _v0$6;
				}
			} else {
				if (_v0.a.a.$ === 'Unchecked') {
					if (_v0.b.$ === 'Nothing') {
						var _v1 = _v0.a.a;
						var _v2 = _v0.b;
						return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$UncheckedIndeterminate);
					} else {
						if (_v0.b.a.$ === 'Checked') {
							var _v9 = _v0.a.a;
							var _v10 = _v0.b.a;
							return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$UncheckedChecked);
						} else {
							break _v0$6;
						}
					}
				} else {
					if (_v0.b.$ === 'Nothing') {
						var _v3 = _v0.a.a;
						var _v4 = _v0.b;
						return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$CheckedIndeterminate);
					} else {
						if (_v0.b.a.$ === 'Unchecked') {
							var _v11 = _v0.a.a;
							var _v12 = _v0.b.a;
							return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$CheckedUnchecked);
						} else {
							break _v0$6;
						}
					}
				}
			}
		}
		return $elm$core$Maybe$Nothing;
	});
var $author$project$Internal$Checkbox$Implementation$update = F3(
	function (_v0, msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			case 'SetFocus':
				var focus = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{isFocused: focus})),
					$elm$core$Platform$Cmd$none);
			case 'Init':
				var lastKnownState = msg.a;
				var state = msg.b;
				var animation = A2(
					$elm$core$Maybe$andThen,
					function (lastKnownState_) {
						return A2($author$project$Internal$Checkbox$Implementation$animationState, lastKnownState_, state);
					},
					lastKnownState);
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								animation: animation,
								lastKnownState: $elm$core$Maybe$Just(state)
							})),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{animation: $elm$core$Maybe$Nothing})),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Checkbox$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Checkbox$Implementation$getSet.get, $author$project$Internal$Checkbox$Implementation$getSet.set, $author$project$Internal$Msg$CheckboxMsg, $author$project$Internal$Checkbox$Implementation$update);
var $author$project$Internal$Msg$ChipMsg = F2(
	function (a, b) {
		return {$: 'ChipMsg', a: a, b: b};
	});
var $author$project$Internal$Chip$Model$defaultModel = {ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$Chip$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.chip;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{chip: x});
		}),
	$author$project$Internal$Chip$Model$defaultModel);
var $author$project$Internal$Chip$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$Chip$Implementation$update = F3(
	function (lift, msg, model) {
		if (msg.$ === 'RippleMsg') {
			var msg_ = msg.a;
			var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
			var ripple = _v1.a;
			var cmd = _v1.b;
			return _Utils_Tuple2(
				$elm$core$Maybe$Just(
					_Utils_update(
						model,
						{ripple: ripple})),
				A2(
					$elm$core$Platform$Cmd$map,
					A2($elm$core$Basics$composeL, lift, $author$project$Internal$Chip$Model$RippleMsg),
					cmd));
		} else {
			var msg_ = msg.a;
			return _Utils_Tuple2(
				$elm$core$Maybe$Nothing,
				A2($author$project$Internal$Helpers$delayedCmd, 150, msg_));
		}
	});
var $author$project$Internal$Chip$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Chip$Implementation$getSet.get, $author$project$Internal$Chip$Implementation$getSet.set, $author$project$Internal$Msg$ChipMsg, $author$project$Internal$Chip$Implementation$update);
var $author$project$Internal$Msg$DialogMsg = F2(
	function (a, b) {
		return {$: 'DialogMsg', a: a, b: b};
	});
var $author$project$Internal$Dialog$Model$defaultModel = {animating: false, open: false};
var $author$project$Internal$Dialog$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.dialog;
	},
	F2(
		function (x, c) {
			return _Utils_update(
				c,
				{dialog: x});
		}),
	$author$project$Internal$Dialog$Model$defaultModel);
var $author$project$Internal$Dialog$Implementation$update = F3(
	function (_v0, msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			case 'StartAnimation':
				var isOpen = msg.a;
				return (!_Utils_eq(isOpen, model.open)) ? _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{animating: true, open: isOpen})),
					$elm$core$Platform$Cmd$none) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{animating: false})),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Dialog$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Dialog$Implementation$getSet.get, $author$project$Internal$Dialog$Implementation$getSet.set, $author$project$Internal$Msg$DialogMsg, $author$project$Internal$Dialog$Implementation$update);
var $author$project$Internal$Msg$DrawerMsg = F2(
	function (a, b) {
		return {$: 'DrawerMsg', a: a, b: b};
	});
var $author$project$Internal$Drawer$Model$defaultModel = {animating: false, closeOnAnimationEnd: false, open: false};
var $author$project$Internal$Drawer$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.drawer;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{drawer: x});
		}),
	$author$project$Internal$Drawer$Model$defaultModel);
var $author$project$Internal$Drawer$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			case 'StartAnimation':
				var isOpen = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{animating: true, closeOnAnimationEnd: !isOpen, open: true})),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								animating: false,
								closeOnAnimationEnd: false,
								open: model.closeOnAnimationEnd ? false : model.open
							})),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Drawer$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Drawer$Implementation$getSet.get, $author$project$Internal$Drawer$Implementation$getSet.set, $author$project$Internal$Msg$DrawerMsg, $author$project$Internal$Drawer$Implementation$update);
var $author$project$Internal$Msg$FabMsg = F2(
	function (a, b) {
		return {$: 'FabMsg', a: a, b: b};
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $author$project$Internal$Component$generalise = F4(
	function (update, lift, msg, model) {
		return A2(
			$elm$core$Tuple$mapSecond,
			$elm$core$Platform$Cmd$map(lift),
			A2(
				$elm$core$Tuple$mapFirst,
				$elm$core$Maybe$Just,
				A2(update, msg, model)));
	});
var $author$project$Internal$Fab$Model$defaultModel = {ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$Fab$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.fab;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{fab: x});
		}),
	$author$project$Internal$Fab$Model$defaultModel);
var $author$project$Internal$Fab$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$Fab$Implementation$update = F2(
	function (msg, model) {
		if (msg.$ === 'RippleMsg') {
			var msg_ = msg.a;
			var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
			var rippleState = _v1.a;
			var rippleCmd = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{ripple: rippleState}),
				A2($elm$core$Platform$Cmd$map, $author$project$Internal$Fab$Model$RippleMsg, rippleCmd));
		} else {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Fab$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$Fab$Implementation$getSet.get,
	$author$project$Internal$Fab$Implementation$getSet.set,
	$author$project$Internal$Msg$FabMsg,
	$author$project$Internal$Component$generalise($author$project$Internal$Fab$Implementation$update));
var $author$project$Internal$Msg$IconButtonMsg = F2(
	function (a, b) {
		return {$: 'IconButtonMsg', a: a, b: b};
	});
var $author$project$Internal$IconButton$Model$defaultModel = {on: false, ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$IconButton$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.iconButton;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{iconButton: x});
		}),
	$author$project$Internal$IconButton$Model$defaultModel);
var $author$project$Internal$IconButton$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$IconButton$Implementation$update = F2(
	function (msg, model) {
		var msg_ = msg.a;
		var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
		var ripple = _v1.a;
		var effects = _v1.b;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{ripple: ripple}),
			A2($elm$core$Platform$Cmd$map, $author$project$Internal$IconButton$Model$RippleMsg, effects));
	});
var $author$project$Internal$IconButton$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$IconButton$Implementation$getSet.get,
	$author$project$Internal$IconButton$Implementation$getSet.set,
	$author$project$Internal$Msg$IconButtonMsg,
	$author$project$Internal$Component$generalise($author$project$Internal$IconButton$Implementation$update));
var $author$project$Internal$Msg$ListMsg = F2(
	function (a, b) {
		return {$: 'ListMsg', a: a, b: b};
	});
var $author$project$Internal$List$Model$defaultModel = {focused: $elm$core$Maybe$Nothing, ripples: $elm$core$Dict$empty};
var $author$project$Internal$List$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.list;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{list: x});
		}),
	$author$project$Internal$List$Model$defaultModel);
var $author$project$Internal$List$Model$NoOp = {$: 'NoOp'};
var $author$project$Internal$List$Model$RippleMsg = F2(
	function (a, b) {
		return {$: 'RippleMsg', a: a, b: b};
	});
var $elm$browser$Browser$Dom$focus = _Browser_call('focus');
var $author$project$Internal$List$Implementation$send = function (msg) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		$elm$core$Task$succeed(msg));
};
var $author$project$Internal$List$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'RippleMsg':
				var index = msg.a;
				var msg_ = msg.b;
				var _v1 = A2(
					$author$project$Internal$Ripple$Implementation$update,
					msg_,
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$Internal$Ripple$Model$defaultModel,
						A2($elm$core$Dict$get, index, model.ripples)));
				var ripple = _v1.a;
				var effects = _v1.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								ripples: A3($elm$core$Dict$insert, index, ripple, model.ripples)
							})),
					A2(
						$elm$core$Platform$Cmd$map,
						A2(
							$elm$core$Basics$composeL,
							lift,
							$author$project$Internal$List$Model$RippleMsg(index)),
						effects));
			case 'ResetFocusedItem':
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{focused: $elm$core$Maybe$Nothing})),
					$elm$core$Platform$Cmd$none);
			case 'FocusItem':
				var id = msg.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{focused: $elm$core$Maybe$Nothing})),
					A2(
						$elm$core$Task$attempt,
						function (_v2) {
							return lift($author$project$Internal$List$Model$NoOp);
						},
						$elm$browser$Browser$Dom$focus(id)));
			case 'SelectItem':
				var index = msg.a;
				var m = msg.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{focused: $elm$core$Maybe$Nothing})),
					$author$project$Internal$List$Implementation$send(
						m(index)));
			default:
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$List$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$List$Implementation$getSet.get, $author$project$Internal$List$Implementation$getSet.set, $author$project$Internal$Msg$ListMsg, $author$project$Internal$List$Implementation$update);
var $author$project$Internal$Menu$Model$defaultModel = {animating: false, geometry: $elm$core$Maybe$Nothing, index: $elm$core$Maybe$Nothing, keyDownWithinMenu: false, list: $author$project$Internal$List$Model$defaultModel, open: false, quickOpen: $elm$core$Maybe$Nothing};
var $author$project$Internal$Menu$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.menu;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{menu: x});
		}),
	$author$project$Internal$Menu$Model$defaultModel);
var $author$project$Internal$Menu$Model$AnimationEnd = {$: 'AnimationEnd'};
var $author$project$Internal$Menu$Model$Close = {$: 'Close'};
var $author$project$Internal$Menu$Model$ListMsg = function (a) {
	return {$: 'ListMsg', a: a};
};
var $author$project$Internal$Menu$Model$NoOp = {$: 'NoOp'};
var $author$project$Internal$Menu$Model$Open = {$: 'Open'};
var $author$project$Internal$Menu$Implementation$update = F3(
	function (lift, msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'Toggle':
					var $temp$lift = lift,
						$temp$msg = model.open ? $author$project$Internal$Menu$Model$Close : $author$project$Internal$Menu$Model$Open,
						$temp$model = model;
					lift = $temp$lift;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'Open':
					return (!model.open) ? _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{animating: true, geometry: $elm$core$Maybe$Nothing, open: true})),
						$elm$core$Platform$Cmd$none) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'Close':
					return model.open ? _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{animating: true, open: false})),
						A2($elm$core$Maybe$withDefault, false, model.quickOpen) ? A2(
							$author$project$Internal$Helpers$delayedCmd,
							70,
							lift($author$project$Internal$Menu$Model$AnimationEnd)) : A2(
							$author$project$Internal$Helpers$delayedCmd,
							0,
							lift($author$project$Internal$Menu$Model$AnimationEnd))) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'CloseDelayed':
					return _Utils_Tuple2(
						$elm$core$Maybe$Nothing,
						A2(
							$author$project$Internal$Helpers$delayedCmd,
							50,
							lift($author$project$Internal$Menu$Model$Close)));
				case 'Init':
					var config = msg.a;
					var geometry = msg.b;
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{
									geometry: $elm$core$Maybe$Just(geometry),
									quickOpen: $elm$core$Maybe$Just(config.quickOpen)
								})),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2(
									$elm$core$Task$attempt,
									function (_v1) {
										return lift($author$project$Internal$Menu$Model$NoOp);
									},
									$elm$browser$Browser$Dom$focus(config.focusedItemId)),
									config.quickOpen ? A2(
									$author$project$Internal$Helpers$delayedCmd,
									120,
									lift($author$project$Internal$Menu$Model$AnimationEnd)) : A2(
									$author$project$Internal$Helpers$delayedCmd,
									0,
									lift($author$project$Internal$Menu$Model$AnimationEnd))
								])));
				case 'AnimationEnd':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{animating: false})),
						$elm$core$Platform$Cmd$none);
				case 'DocumentClick':
					if (model.open && (!_Utils_eq(model.geometry, $elm$core$Maybe$Nothing))) {
						var $temp$lift = lift,
							$temp$msg = $author$project$Internal$Menu$Model$Close,
							$temp$model = model;
						lift = $temp$lift;
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
					}
				case 'KeyDown':
					var shiftKey = msg.a.shiftKey;
					var altKey = msg.a.altKey;
					var ctrlKey = msg.a.ctrlKey;
					var metaKey = msg.a.metaKey;
					var key = msg.b;
					var keyCode = msg.c;
					var isSpace = (key === 'Space') || (keyCode === 32);
					var isEscape = (key === 'Escape') || (keyCode === 27);
					var isEnter = (key === 'Enter') || (keyCode === 13);
					return (isEscape || (isSpace || isEnter)) ? _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{keyDownWithinMenu: true})),
						$elm$core$Platform$Cmd$none) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'KeyUp':
					var shiftKey = msg.a.shiftKey;
					var altKey = msg.a.altKey;
					var ctrlKey = msg.a.ctrlKey;
					var metaKey = msg.a.metaKey;
					var key = msg.b;
					var keyCode = msg.c;
					var isSpace = (key === 'Space') || (keyCode === 32);
					var isEscape = (key === 'Escape') || (keyCode === 27);
					var isEnter = (key === 'Enter') || (keyCode === 13);
					return A2(
						$elm$core$Tuple$mapFirst,
						$elm$core$Maybe$map(
							function (newModel) {
								return _Utils_update(
									newModel,
									{keyDownWithinMenu: false});
							}),
						((isEscape || (isSpace || isEnter)) && ((!(altKey || (ctrlKey || metaKey))) && model.keyDownWithinMenu)) ? A3($author$project$Internal$Menu$Implementation$update, lift, $author$project$Internal$Menu$Model$Close, model) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none));
				default:
					var msg_ = msg.a;
					return A2(
						$elm$core$Tuple$mapFirst,
						function (maybeNewList) {
							if (maybeNewList.$ === 'Just') {
								var newList = maybeNewList.a;
								return $elm$core$Maybe$Just(
									_Utils_update(
										model,
										{list: newList}));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						},
						A3(
							$author$project$Internal$List$Implementation$update,
							A2($elm$core$Basics$composeL, lift, $author$project$Internal$Menu$Model$ListMsg),
							msg_,
							model.list));
			}
		}
	});
var $author$project$Internal$Menu$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Menu$Implementation$getSet.get, $author$project$Internal$Menu$Implementation$getSet.set, $author$project$Internal$Msg$MenuMsg, $author$project$Internal$Menu$Implementation$update);
var $author$project$Internal$Msg$RadioButtonMsg = F2(
	function (a, b) {
		return {$: 'RadioButtonMsg', a: a, b: b};
	});
var $author$project$Internal$RadioButton$Model$defaultModel = {isFocused: false, ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$RadioButton$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.radio;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{radio: x});
		}),
	$author$project$Internal$RadioButton$Model$defaultModel);
var $author$project$Internal$RadioButton$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$RadioButton$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'RippleMsg':
				var msg_ = msg.a;
				var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
				var ripple = _v1.a;
				var effects = _v1.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{ripple: ripple})),
					A2(
						$elm$core$Platform$Cmd$map,
						A2($elm$core$Basics$composeL, lift, $author$project$Internal$RadioButton$Model$RippleMsg),
						effects));
			case 'NoOp':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			default:
				var focus = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{isFocused: focus})),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$RadioButton$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$RadioButton$Implementation$getSet.get, $author$project$Internal$RadioButton$Implementation$getSet.set, $author$project$Internal$Msg$RadioButtonMsg, $author$project$Internal$RadioButton$Implementation$update);
var $author$project$Internal$Msg$RippleMsg = F2(
	function (a, b) {
		return {$: 'RippleMsg', a: a, b: b};
	});
var $author$project$Internal$Ripple$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.ripple;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{ripple: x});
		}),
	$author$project$Internal$Ripple$Model$defaultModel);
var $author$project$Internal$Ripple$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$Ripple$Implementation$getSet.get,
	$author$project$Internal$Ripple$Implementation$getSet.set,
	$author$project$Internal$Msg$RippleMsg,
	$author$project$Internal$Component$generalise($author$project$Internal$Ripple$Implementation$update));
var $author$project$Internal$Msg$SelectMsg = F2(
	function (a, b) {
		return {$: 'SelectMsg', a: a, b: b};
	});
var $author$project$Internal$Select$Model$defaultModel = {focused: false, isDirty: false, ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$Select$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.select;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{select: x});
		}),
	$author$project$Internal$Select$Model$defaultModel);
var $author$project$Internal$Select$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$Select$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'Change':
				var changedValue = msg.a;
				var dirty = changedValue !== '';
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{isDirty: dirty})),
					$elm$core$Platform$Cmd$none);
			case 'Blur':
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{focused: false})),
					$elm$core$Platform$Cmd$none);
			case 'Focus':
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{focused: true})),
					$elm$core$Platform$Cmd$none);
			default:
				var msg_ = msg.a;
				var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
				var ripple = _v1.a;
				var effects = _v1.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{ripple: ripple})),
					A2(
						$elm$core$Platform$Cmd$map,
						A2($elm$core$Basics$composeL, lift, $author$project$Internal$Select$Model$RippleMsg),
						effects));
		}
	});
var $author$project$Internal$Select$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Select$Implementation$getSet.get, $author$project$Internal$Select$Implementation$getSet.set, $author$project$Internal$Msg$SelectMsg, $author$project$Internal$Select$Implementation$update);
var $author$project$Internal$Msg$SliderMsg = F2(
	function (a, b) {
		return {$: 'SliderMsg', a: a, b: b};
	});
var $author$project$Internal$Slider$Model$defaultModel = {active: false, activeValue: $elm$core$Maybe$Nothing, focus: false, geometry: $elm$core$Maybe$Nothing, inTransit: false, preventFocus: false};
var $author$project$Internal$Slider$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.slider;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{slider: x});
		}),
	$author$project$Internal$Slider$Model$defaultModel);
var $author$project$Internal$Slider$Model$ActualUp = {$: 'ActualUp'};
var $author$project$Internal$Slider$Model$Init = function (a) {
	return {$: 'Init', a: a};
};
var $author$project$Internal$Slider$Model$defaultGeometry = {
	discrete: false,
	max: 100,
	min: 0,
	rect: {left: 0, width: 0},
	step: $elm$core$Maybe$Nothing
};
var $author$project$Internal$Slider$Implementation$valueFromPageX = F2(
	function (geometry, pageX) {
		var xPos = pageX - geometry.rect.left;
		var isRtl = false;
		var pctComplete = isRtl ? (1 - (xPos / geometry.rect.width)) : (xPos / geometry.rect.width);
		return geometry.min + (pctComplete * (geometry.max - geometry.min));
	});
var $author$project$Internal$Slider$Implementation$update = F3(
	function (lift, msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'Focus':
					return (!model.preventFocus) ? _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{focus: true})),
						$elm$core$Platform$Cmd$none) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'Blur':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{focus: false, preventFocus: false})),
						$elm$core$Platform$Cmd$none);
				case 'TransitionEnd':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{inTransit: false})),
						$elm$core$Platform$Cmd$none);
				case 'InteractionStart':
					var pageX = msg.b.pageX;
					var geometry = A2($elm$core$Maybe$withDefault, $author$project$Internal$Slider$Model$defaultGeometry, model.geometry);
					var activeValue = A2($author$project$Internal$Slider$Implementation$valueFromPageX, geometry, pageX);
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{
									active: true,
									activeValue: $elm$core$Maybe$Just(activeValue),
									inTransit: true,
									preventFocus: true
								})),
						$elm$core$Platform$Cmd$none);
				case 'ThumbContainerPointer':
					var pageX = msg.b.pageX;
					var geometry = A2($elm$core$Maybe$withDefault, $author$project$Internal$Slider$Model$defaultGeometry, model.geometry);
					var activeValue = A2($author$project$Internal$Slider$Implementation$valueFromPageX, geometry, pageX);
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{
									active: true,
									activeValue: $elm$core$Maybe$Just(activeValue),
									inTransit: false,
									preventFocus: true
								})),
						$elm$core$Platform$Cmd$none);
				case 'Drag':
					var pageX = msg.a.pageX;
					if (model.active) {
						var geometry = A2($elm$core$Maybe$withDefault, $author$project$Internal$Slider$Model$defaultGeometry, model.geometry);
						var activeValue = A2($author$project$Internal$Slider$Implementation$valueFromPageX, geometry, pageX);
						return _Utils_Tuple2(
							$elm$core$Maybe$Just(
								_Utils_update(
									model,
									{
										activeValue: $elm$core$Maybe$Just(activeValue),
										inTransit: false
									})),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
					}
				case 'Init':
					var geometry = msg.a;
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{
									geometry: $elm$core$Maybe$Just(geometry)
								})),
						$elm$core$Platform$Cmd$none);
				case 'Resize':
					var geometry = msg.a;
					var $temp$lift = lift,
						$temp$msg = $author$project$Internal$Slider$Model$Init(geometry),
						$temp$model = model;
					lift = $temp$lift;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'KeyDown':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{focus: true})),
						$elm$core$Platform$Cmd$none);
				case 'Up':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(model),
						A2(
							$elm$core$Task$perform,
							lift,
							$elm$core$Task$succeed($author$project$Internal$Slider$Model$ActualUp)));
				default:
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{active: false, activeValue: $elm$core$Maybe$Nothing})),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $author$project$Internal$Slider$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Slider$Implementation$getSet.get, $author$project$Internal$Slider$Implementation$getSet.set, $author$project$Internal$Msg$SliderMsg, $author$project$Internal$Slider$Implementation$update);
var $author$project$Internal$Msg$SnackbarMsg = F2(
	function (a, b) {
		return {$: 'SnackbarMsg', a: a, b: b};
	});
var $author$project$Internal$Snackbar$Model$Inert = {$: 'Inert'};
var $author$project$Internal$Snackbar$Model$defaultModel = {open: false, queue: _List_Nil, seq: -1, state: $author$project$Internal$Snackbar$Model$Inert};
var $author$project$Internal$Snackbar$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.snackbar;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{snackbar: x});
		}),
	$author$project$Internal$Snackbar$Model$defaultModel);
var $author$project$Internal$Snackbar$Model$Clicked = {$: 'Clicked'};
var $author$project$Internal$Snackbar$Model$Move = F2(
	function (a, b) {
		return {$: 'Move', a: a, b: b};
	});
var $author$project$Internal$Helpers$cmd = function (msg) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		$elm$core$Task$succeed(msg));
};
var $author$project$Internal$Snackbar$Model$Fading = function (a) {
	return {$: 'Fading', a: a};
};
var $author$project$Internal$Snackbar$Model$Timeout = {$: 'Timeout'};
var $author$project$Internal$Snackbar$Implementation$next = function (model) {
	return $elm$core$Platform$Cmd$map(
		$author$project$Internal$Snackbar$Model$Move(model.seq));
};
var $author$project$Internal$Snackbar$Model$Active = function (a) {
	return {$: 'Active', a: a};
};
var $author$project$Internal$Snackbar$Implementation$tryDequeue = function (model) {
	var _v0 = _Utils_Tuple2(model.state, model.queue);
	if ((_v0.a.$ === 'Inert') && _v0.b.b) {
		var _v1 = _v0.a;
		var _v2 = _v0.b;
		var c = _v2.a;
		var cs = _v2.b;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					open: false,
					queue: cs,
					seq: model.seq + 1,
					state: $author$project$Internal$Snackbar$Model$Active(c)
				}),
			A2(
				$elm$core$Platform$Cmd$map,
				$author$project$Internal$Snackbar$Model$Move(model.seq + 1),
				A2($author$project$Internal$Helpers$delayedCmd, c.timeout, $author$project$Internal$Snackbar$Model$Timeout)));
	} else {
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	}
};
var $author$project$Internal$Snackbar$Implementation$move = F2(
	function (transition, model) {
		var _v0 = _Utils_Tuple2(model.state, transition);
		if (_v0.b.$ === 'Clicked') {
			if (_v0.a.$ === 'Active') {
				var contents = _v0.a.a;
				var _v3 = _v0.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							state: $author$project$Internal$Snackbar$Model$Fading(contents)
						}),
					A2(
						$author$project$Internal$Snackbar$Implementation$next,
						model,
						A2($author$project$Internal$Helpers$delayedCmd, contents.fade, $author$project$Internal$Snackbar$Model$Timeout)));
			} else {
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			}
		} else {
			switch (_v0.a.$) {
				case 'Inert':
					var _v1 = _v0.a;
					var _v2 = _v0.b;
					return $author$project$Internal$Snackbar$Implementation$tryDequeue(model);
				case 'Active':
					var contents = _v0.a.a;
					var _v4 = _v0.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								state: $author$project$Internal$Snackbar$Model$Fading(contents)
							}),
						A2(
							$author$project$Internal$Snackbar$Implementation$next,
							model,
							A2($author$project$Internal$Helpers$delayedCmd, contents.fade, $author$project$Internal$Snackbar$Model$Timeout)));
				default:
					var contents = _v0.a.a;
					var _v5 = _v0.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{state: $author$project$Internal$Snackbar$Model$Inert}),
						A2(
							$author$project$Internal$Snackbar$Implementation$next,
							model,
							$author$project$Internal$Helpers$cmd($author$project$Internal$Snackbar$Model$Timeout)));
			}
		}
	});
var $author$project$Internal$Snackbar$Implementation$update = F3(
	function (fwd, msg, model) {
		switch (msg.$) {
			case 'Move':
				var seq = msg.a;
				var transition = msg.b;
				return _Utils_eq(seq, model.seq) ? A2(
					$elm$core$Tuple$mapSecond,
					$elm$core$Platform$Cmd$map(fwd),
					A2($author$project$Internal$Snackbar$Implementation$move, transition, model)) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'Dismiss':
				var dismissOnAction = msg.a;
				var actionOnDismiss = msg.b;
				var fwdEffect = function () {
					if (actionOnDismiss.$ === 'Just') {
						var msg_ = actionOnDismiss.a;
						return $author$project$Internal$Helpers$cmd(msg_);
					} else {
						return $elm$core$Platform$Cmd$none;
					}
				}();
				return A2(
					$elm$core$Tuple$mapSecond,
					function (cmd) {
						return $elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[cmd, fwdEffect]));
					},
					dismissOnAction ? A3(
						$author$project$Internal$Snackbar$Implementation$update,
						fwd,
						A2($author$project$Internal$Snackbar$Model$Move, model.seq, $author$project$Internal$Snackbar$Model$Clicked),
						model) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none));
			default:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{open: true}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Snackbar$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$Snackbar$Implementation$getSet.get,
	$author$project$Internal$Snackbar$Implementation$getSet.set,
	$author$project$Internal$Msg$SnackbarMsg,
	F3(
		function (fwd, msg, model) {
			return A2(
				$elm$core$Tuple$mapFirst,
				$elm$core$Maybe$Just,
				A3($author$project$Internal$Snackbar$Implementation$update, fwd, msg, model));
		}));
var $author$project$Internal$Msg$SwitchMsg = F2(
	function (a, b) {
		return {$: 'SwitchMsg', a: a, b: b};
	});
var $author$project$Internal$Switch$Model$defaultModel = {isFocused: false, ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$Switch$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $._switch;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{_switch: x});
		}),
	$author$project$Internal$Switch$Model$defaultModel);
var $author$project$Internal$Switch$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$Switch$Implementation$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'RippleMsg':
				var msg_ = msg.a;
				var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
				var rippleState = _v1.a;
				var rippleCmd = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ripple: rippleState}),
					A2($elm$core$Platform$Cmd$map, $author$project$Internal$Switch$Model$RippleMsg, rippleCmd));
			case 'SetFocus':
				var focus = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{isFocused: focus}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Switch$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$Switch$Implementation$getSet.get,
	$author$project$Internal$Switch$Implementation$getSet.set,
	$author$project$Internal$Msg$SwitchMsg,
	$author$project$Internal$Component$generalise($author$project$Internal$Switch$Implementation$update));
var $author$project$Internal$Msg$TabBarMsg = F2(
	function (a, b) {
		return {$: 'TabBarMsg', a: a, b: b};
	});
var $author$project$Internal$TabBar$Model$defaultModel = {activeTab: 0, geometry: $elm$core$Maybe$Nothing, ripples: $elm$core$Dict$empty, translateOffset: 0};
var $author$project$Internal$TabBar$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.tabbar;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{tabbar: x});
		}),
	$author$project$Internal$TabBar$Model$defaultModel);
var $author$project$Internal$TabBar$Model$NoOp = {$: 'NoOp'};
var $author$project$Internal$TabBar$Model$RippleMsg = F2(
	function (a, b) {
		return {$: 'RippleMsg', a: a, b: b};
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $author$project$Internal$TabBar$Implementation$calculateScrollIncrement = F5(
	function (geometry, index, nextIndex, scrollPosition, barWidth) {
		var maybe_next_tab = $elm$core$List$head(
			A2($elm$core$List$drop, nextIndex, geometry.tabs));
		var extraScrollAmount = 20;
		if (maybe_next_tab.$ === 'Just') {
			var next_tab = maybe_next_tab.a;
			var relativeContentRight = next_tab.contentRight - scrollPosition;
			var relativeContentLeft = (next_tab.contentLeft - scrollPosition) - barWidth;
			var rightIncrement = relativeContentLeft + extraScrollAmount;
			var leftIncrement = relativeContentRight - extraScrollAmount;
			return (_Utils_cmp(nextIndex, index) < 0) ? A2($elm$core$Basics$min, leftIncrement, 0) : A2($elm$core$Basics$max, rightIncrement, 0);
		} else {
			return 0;
		}
	});
var $author$project$Internal$TabBar$Model$defaultGeometry = {
	scrollArea: {offsetWidth: 0},
	tabBar: {offsetWidth: 0},
	tabs: _List_Nil
};
var $author$project$Internal$TabBar$Implementation$findAdjacentTabIndexClosestToEdge = F4(
	function (index, tab_, scrollPosition, barWidth) {
		var rootRight = tab_.offsetLeft + tab_.offsetWidth;
		var rootLeft = tab_.offsetLeft;
		var relativeRootRight = (rootRight - scrollPosition) - barWidth;
		var relativeRootLeft = rootLeft - scrollPosition;
		var relativeRootDelta = relativeRootLeft + relativeRootRight;
		var rightEdgeIsCloser = (relativeRootRight > 0) || (relativeRootDelta > 0);
		var leftEdgeIsCloser = (relativeRootLeft < 0) || (relativeRootDelta < 0);
		return leftEdgeIsCloser ? (index - 1) : (rightEdgeIsCloser ? (index + 1) : (-1));
	});
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $author$project$Internal$TabBar$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'RippleMsg':
				var index = msg.a;
				var msg_ = msg.b;
				var _v1 = A2(
					$author$project$Internal$Ripple$Implementation$update,
					msg_,
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$Internal$Ripple$Model$defaultModel,
						A2($elm$core$Dict$get, index, model.ripples)));
				var ripple = _v1.a;
				var effects = _v1.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								ripples: A3($elm$core$Dict$insert, index, ripple, model.ripples)
							})),
					A2(
						$elm$core$Platform$Cmd$map,
						A2(
							$elm$core$Basics$composeL,
							lift,
							$author$project$Internal$TabBar$Model$RippleMsg(index)),
						effects));
			case 'Dispatch':
				var msgs = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					$author$project$Internal$Dispatch$forward(msgs));
			case 'NoOp':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			case 'Init':
				var geometry = msg.a;
				return _Utils_Tuple2(
					function () {
						var tabBarWidth = geometry.tabBar.offsetWidth;
						var scrollAreaWidth = geometry.scrollArea.offsetWidth;
						var isOverflowing = _Utils_cmp(tabBarWidth, scrollAreaWidth) > 0;
						var translateOffset = (!isOverflowing) ? 0 : model.translateOffset;
						return $elm$core$Maybe$Just(
							_Utils_update(
								model,
								{
									geometry: $elm$core$Maybe$Just(geometry),
									translateOffset: translateOffset
								}));
					}(),
					$elm$core$Platform$Cmd$none);
			default:
				var domId = msg.a;
				var tab_index = msg.b;
				var scrollPosition = msg.c;
				var geometry = A2($elm$core$Maybe$withDefault, $author$project$Internal$TabBar$Model$defaultGeometry, model.geometry);
				var tabAtIndex = function (i) {
					return A2(
						$elm$core$Maybe$withDefault,
						{contentLeft: 0, contentRight: 0, offsetLeft: 0, offsetWidth: 0},
						$elm$core$List$head(
							A2($elm$core$List$drop, i, geometry.tabs)));
				};
				var tab_ = tabAtIndex(tab_index);
				var barWidth = geometry.tabBar.offsetWidth;
				var next_tab_index = A4($author$project$Internal$TabBar$Implementation$findAdjacentTabIndexClosestToEdge, tab_index, tab_, scrollPosition, barWidth);
				var scrollIncrement = A5($author$project$Internal$TabBar$Implementation$calculateScrollIncrement, geometry, tab_index, next_tab_index, scrollPosition, barWidth);
				var newScrollPosition = (!tab_index) ? 0 : (_Utils_eq(
					tab_index,
					$elm$core$List$length(geometry.tabs) - 1) ? geometry.scrollArea.offsetWidth : (scrollPosition + scrollIncrement));
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{activeTab: tab_index})),
					A2(
						$elm$core$Task$perform,
						lift,
						A2(
							$elm$core$Task$onError,
							function (_v3) {
								return $elm$core$Task$succeed($author$project$Internal$TabBar$Model$NoOp);
							},
							A2(
								$elm$core$Task$map,
								function (_v2) {
									return $author$project$Internal$TabBar$Model$NoOp;
								},
								A3($elm$browser$Browser$Dom$setViewportOf, domId + '__scroll-area', newScrollPosition, 0)))));
		}
	});
var $author$project$Internal$TabBar$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$TabBar$Implementation$getSet.get, $author$project$Internal$TabBar$Implementation$getSet.set, $author$project$Internal$Msg$TabBarMsg, $author$project$Internal$TabBar$Implementation$update);
var $author$project$Internal$Msg$TextFieldMsg = F2(
	function (a, b) {
		return {$: 'TextFieldMsg', a: a, b: b};
	});
var $author$project$Internal$TextField$Model$defaultModel = {focused: false, geometry: $elm$core$Maybe$Nothing, isDirty: false, value: $elm$core$Maybe$Nothing};
var $author$project$Internal$TextField$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.textfield;
	},
	F2(
		function (x, c) {
			return _Utils_update(
				c,
				{textfield: x});
		}),
	$author$project$Internal$TextField$Model$defaultModel);
var $author$project$Internal$TextField$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'Input':
				var str = msg.a;
				var dirty = str !== '';
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								isDirty: dirty,
								value: $elm$core$Maybe$Just(str)
							})),
					$elm$core$Platform$Cmd$none);
			case 'Blur':
				var geometry = function () {
					var _v1 = model.value;
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						return model.geometry;
					}
				}();
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{focused: false, geometry: geometry})),
					$elm$core$Platform$Cmd$none);
			case 'Focus':
				var geometry = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								focused: true,
								geometry: $elm$core$Maybe$Just(geometry)
							})),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(model),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$TextField$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$TextField$Implementation$getSet.get, $author$project$Internal$TextField$Implementation$getSet.set, $author$project$Internal$Msg$TextFieldMsg, $author$project$Internal$TextField$Implementation$update);
var $author$project$Internal$Msg$TopAppBarMsg = F2(
	function (a, b) {
		return {$: 'TopAppBarMsg', a: a, b: b};
	});
var $author$project$Internal$TopAppBar$Model$defaultModel = {currentAppBarOffsetTop: 0, isDockedShowing: true, lastScrollPosition: $elm$core$Maybe$Nothing, ripples: $elm$core$Dict$empty, styleTop: $elm$core$Maybe$Nothing, topAppBarHeight: $elm$core$Maybe$Nothing, wasDocked: true};
var $author$project$Internal$TopAppBar$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.topAppBar;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{topAppBar: x});
		}),
	$author$project$Internal$TopAppBar$Model$defaultModel);
var $author$project$Internal$TopAppBar$Model$RippleMsg = F2(
	function (a, b) {
		return {$: 'RippleMsg', a: a, b: b};
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $author$project$Internal$TopAppBar$Implementation$checkForUpdate = function (model) {
	return A2(
		$elm$core$Maybe$map,
		function (topAppBarHeight) {
			var offscreenBoundaryTop = -topAppBarHeight;
			var hasAnyPixelsOnscreen = _Utils_cmp(model.currentAppBarOffsetTop, offscreenBoundaryTop) > 0;
			var hasAnyPixelsOffscreen = model.currentAppBarOffsetTop < 0;
			var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
			return partiallyShowing ? _Utils_Tuple2(
				_Utils_update(
					model,
					{wasDocked: false}),
				true) : ((!model.wasDocked) ? _Utils_Tuple2(
				_Utils_update(
					model,
					{wasDocked: true}),
				true) : ((!_Utils_eq(model.isDockedShowing, hasAnyPixelsOnscreen)) ? _Utils_Tuple2(
				_Utils_update(
					model,
					{isDockedShowing: hasAnyPixelsOnscreen}),
				true) : _Utils_Tuple2(model, false)));
		},
		model.topAppBarHeight);
};
var $author$project$Internal$TopAppBar$Implementation$moveTopAppBar = function (model) {
	return A2(
		$elm$core$Maybe$andThen,
		function (_v0) {
			var updatedModel = _v0.a;
			var partiallyShowing = _v0.b;
			return partiallyShowing ? A2(
				$elm$core$Maybe$map,
				function (topAppBarHeight) {
					var styleTop = function () {
						var maxTopAppBarHeight = 128;
						return (_Utils_cmp(
							$elm$core$Basics$abs(updatedModel.currentAppBarOffsetTop),
							topAppBarHeight) > 0) ? (-maxTopAppBarHeight) : updatedModel.currentAppBarOffsetTop;
					}();
					return _Utils_update(
						updatedModel,
						{
							styleTop: $elm$core$Maybe$Just(styleTop)
						});
				},
				updatedModel.topAppBarHeight) : $elm$core$Maybe$Just(updatedModel);
		},
		$author$project$Internal$TopAppBar$Implementation$checkForUpdate(model));
};
var $author$project$Internal$TopAppBar$Implementation$topAppBarScrollHandler = F2(
	function (scrollPosition, model) {
		return A2(
			$elm$core$Maybe$withDefault,
			model,
			A2(
				$elm$core$Maybe$andThen,
				$author$project$Internal$TopAppBar$Implementation$moveTopAppBar,
				A2(
					$elm$core$Maybe$map,
					function (_v0) {
						var topAppBarHeight = _v0.a;
						var lastScrollPosition = _v0.b;
						var isCurrentlyBeingResized = false;
						var currentScrollPosition = A2($elm$core$Basics$max, scrollPosition, 0);
						var diff = currentScrollPosition - lastScrollPosition;
						var currentAppBarOffsetTop = model.currentAppBarOffsetTop - diff;
						var updatedAppBarOffsetTop = (!isCurrentlyBeingResized) ? ((currentAppBarOffsetTop > 0) ? 0 : ((_Utils_cmp(
							$elm$core$Basics$abs(currentAppBarOffsetTop),
							topAppBarHeight) > 0) ? (-topAppBarHeight) : currentAppBarOffsetTop)) : model.currentAppBarOffsetTop;
						var updatedModel = _Utils_update(
							model,
							{
								currentAppBarOffsetTop: updatedAppBarOffsetTop,
								lastScrollPosition: $elm$core$Maybe$Just(currentScrollPosition)
							});
						return A2(
							$elm$core$Maybe$withDefault,
							updatedModel,
							$author$project$Internal$TopAppBar$Implementation$moveTopAppBar(updatedModel));
					},
					A3(
						$elm$core$Maybe$map2,
						F2(
							function (topAppBarHeight, lastScrollPosition) {
								return _Utils_Tuple2(topAppBarHeight, lastScrollPosition);
							}),
						model.topAppBarHeight,
						model.lastScrollPosition))));
	});
var $author$project$Internal$TopAppBar$Implementation$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'RippleMsg':
				var index = msg.a;
				var msg_ = msg.b;
				var _v1 = A2(
					$author$project$Internal$Ripple$Implementation$update,
					msg_,
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$Internal$Ripple$Model$defaultModel,
						A2($elm$core$Dict$get, index, model.ripples)));
				var ripple = _v1.a;
				var effects = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ripples: A3($elm$core$Dict$insert, index, ripple, model.ripples)
						}),
					A2(
						$elm$core$Platform$Cmd$map,
						$author$project$Internal$TopAppBar$Model$RippleMsg(index),
						effects));
			case 'Init':
				var scrollPosition = msg.a.scrollPosition;
				var topAppBarHeight = msg.a.topAppBarHeight;
				return _Utils_Tuple2(
					A2(
						$author$project$Internal$TopAppBar$Implementation$topAppBarScrollHandler,
						scrollPosition,
						_Utils_update(
							model,
							{
								lastScrollPosition: $elm$core$Maybe$Just(scrollPosition),
								topAppBarHeight: $elm$core$Maybe$Just(topAppBarHeight)
							})),
					$elm$core$Platform$Cmd$none);
			case 'Scroll':
				var scrollPosition = msg.a.scrollPosition;
				return _Utils_Tuple2(
					A2($author$project$Internal$TopAppBar$Implementation$topAppBarScrollHandler, scrollPosition, model),
					$elm$core$Platform$Cmd$none);
			default:
				var scrollPosition = msg.a.scrollPosition;
				var topAppBarHeight = msg.a.topAppBarHeight;
				var currentHeight = topAppBarHeight;
				var currentAppBarOffsetTop = model.currentAppBarOffsetTop - (topAppBarHeight - currentHeight);
				var updatedModel = (!_Utils_eq(
					$elm$core$Maybe$Just(topAppBarHeight),
					model.topAppBarHeight)) ? _Utils_update(
					model,
					{
						currentAppBarOffsetTop: currentAppBarOffsetTop,
						topAppBarHeight: $elm$core$Maybe$Just(currentHeight),
						wasDocked: false
					}) : model;
				return _Utils_Tuple2(
					A2($author$project$Internal$TopAppBar$Implementation$topAppBarScrollHandler, scrollPosition, updatedModel),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$TopAppBar$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$TopAppBar$Implementation$getSet.get,
	$author$project$Internal$TopAppBar$Implementation$getSet.set,
	$author$project$Internal$Msg$TopAppBarMsg,
	$author$project$Internal$Component$generalise($author$project$Internal$TopAppBar$Implementation$update));
var $author$project$Material$update_ = F3(
	function (lift, msg, store) {
		switch (msg.$) {
			case 'Dispatch':
				var msgs = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					$author$project$Internal$Dispatch$forward(msgs));
			case 'ButtonMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Button$Implementation$react, lift, msg_, idx, store);
			case 'CheckboxMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Checkbox$Implementation$react, lift, msg_, idx, store);
			case 'ChipMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Chip$Implementation$react, lift, msg_, idx, store);
			case 'DialogMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Dialog$Implementation$react, lift, msg_, idx, store);
			case 'DrawerMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Drawer$Implementation$react, lift, msg_, idx, store);
			case 'FabMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Fab$Implementation$react, lift, msg_, idx, store);
			case 'IconButtonMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$IconButton$Implementation$react, lift, msg_, idx, store);
			case 'ListMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$List$Implementation$react, lift, msg_, idx, store);
			case 'MenuMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Menu$Implementation$react, lift, msg_, idx, store);
			case 'RadioButtonMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$RadioButton$Implementation$react, lift, msg_, idx, store);
			case 'RippleMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Ripple$Implementation$react, lift, msg_, idx, store);
			case 'SelectMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Select$Implementation$react, lift, msg_, idx, store);
			case 'SliderMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Slider$Implementation$react, lift, msg_, idx, store);
			case 'SnackbarMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Snackbar$Implementation$react, lift, msg_, idx, store);
			case 'SwitchMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Switch$Implementation$react, lift, msg_, idx, store);
			case 'TabBarMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$TabBar$Implementation$react, lift, msg_, idx, store);
			case 'TextFieldMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$TextField$Implementation$react, lift, msg_, idx, store);
			default:
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$TopAppBar$Implementation$react, lift, msg_, idx, store);
		}
	});
var $author$project$Material$update = F3(
	function (lift, msg, container) {
		return A2(
			$elm$core$Tuple$mapFirst,
			$elm$core$Maybe$withDefault(container),
			A2(
				$elm$core$Tuple$mapFirst,
				$elm$core$Maybe$map(
					function (mdc) {
						return _Utils_update(
							container,
							{mdc: mdc});
					}),
				A3(
					$author$project$Material$update_,
					lift,
					msg,
					function ($) {
						return $.mdc;
					}(container))));
	});
var $author$project$OpenIDConnect$withNonce = F2(
	function (nonce, auth) {
		return _Utils_update(
			auth,
			{
				nonce: $elm$core$Maybe$Just(nonce)
			});
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		update:
		while (true) {
			var enableDismissibleDrawer = function (x) {
				return x > 1490;
			};
			switch (msg.$) {
				case 'Mdc':
					var msg_ = msg.a;
					return A3($author$project$Material$update, $author$project$Main$Mdc, msg_, model);
				case 'UrlRequested':
					if (msg.a.$ === 'Internal') {
						var url = msg.a.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									is_drawer_open: false,
									url: $author$project$App$Url$fromUrl(url)
								}),
							$elm$browser$Browser$Navigation$load(
								$author$project$App$Url$toString(
									$author$project$App$Url$fromUrl(url))));
					} else {
						var string = msg.a.a;
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				case 'UrlChanged':
					var url = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								url: $author$project$App$Url$fromUrl(url)
							}),
						$elm$core$Platform$Cmd$none);
				case 'NoOp':
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				case 'OpenDrawer':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{is_drawer_open: true}),
						$elm$core$Platform$Cmd$none);
				case 'CloseDrawer':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{is_drawer_open: false}),
						$elm$core$Platform$Cmd$none);
				case 'ToggleDrawer':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{is_drawer_open: !model.is_drawer_open}),
						$elm$core$Platform$Cmd$none);
				case 'SelectDrawerItem':
					var index = msg.a;
					var item = A2($elm$core$Array$get, index, $author$project$App$Page$drawerItems);
					if (item.$ === 'Just') {
						var _v2 = item.a;
						var title = _v2.a;
						var url = _v2.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									navigateToUrl: $elm$core$Maybe$Just(url),
									transition: $author$project$App$Page$Enter
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				case 'Authorize':
					var config = msg.a;
					var auth = $author$project$OpenIDConnect$authorize(
						A2(
							$author$project$OpenIDConnect$withNonce,
							model.state,
							A4($author$project$OpenIDConnect$newAuth, config.authorizationEndpoint, model.redirectUri, config.clientId, config.scope)));
					return _Utils_Tuple2(model, auth);
				case 'Navigate':
					var url = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								is_drawer_open: (!model.useDismissibleDrawer) ? false : model.is_drawer_open,
								navigateToUrl: $elm$core$Maybe$Nothing,
								transition: (!_Utils_eq(model.navigateToUrl, $elm$core$Maybe$Nothing)) ? $author$project$App$Page$Active : $author$project$App$Page$None,
								url: url
							}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2(
									$elm$browser$Browser$Navigation$pushUrl,
									model.key,
									$author$project$App$Url$toString(url))
								])));
				case 'WindowResized':
					var x = msg.a;
					var y = msg.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								useDismissibleDrawer: enableDismissibleDrawer(x)
							}),
						$elm$core$Platform$Cmd$none);
				case 'AnimationTick':
					var _v3 = model.navigateToUrl;
					if (_v3.$ === 'Just') {
						var url = _v3.a;
						var $temp$msg = $author$project$Main$Navigate(url),
							$temp$model = model;
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				case 'SignOutRequested':
					return _Utils_Tuple2(
						model,
						$elm$browser$Browser$Navigation$load(
							$elm$url$Url$toString(model.redirectUri)));
				default:
					var msg_ = msg.a;
					var _v4 = A3($author$project$App$Startpage$update, $author$project$Main$StartPageMsg, msg_, model.startpage);
					var startpage = _v4.a;
					var effects = _v4.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{startpage: startpage}),
						effects);
			}
		}
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Main$viewError = function (error) {
	if (error.$ === 'Nothing') {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'none')
				]),
			_List_Nil);
	} else {
		var msg = error.a;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'padding', '1em'),
					A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
					A2($elm$html$Html$Attributes$style, 'background', '#e74c3c'),
					A2($elm$html$Html$Attributes$style, 'color', '#ffffff'),
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2($elm$html$Html$Attributes$style, 'display', 'block'),
					A2($elm$html$Html$Attributes$style, 'box-sizing', 'border-box')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(msg)
				]));
	}
};
var $author$project$Main$viewBody = F2(
	function (model, content) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '98vh'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'Roboto, Arial, sans-serif')
				]),
			A2(
				$elm$core$List$cons,
				$author$project$Main$viewError(model.error),
				content));
	});
var $author$project$Main$viewLogin = function (_v0) {
	var buttons = _v0.buttons;
	var sn = _v0.sn;
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'flex-end'),
					A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'column')
				]),
			buttons),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'background', '#bdc3c7'),
					A2($elm$html$Html$Attributes$style, 'height', '10em'),
					A2($elm$html$Html$Attributes$style, 'width', '0.1em'),
					A2($elm$html$Html$Attributes$style, 'margin', '0 1em')
				]),
			_List_Nil),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', '25em'),
					A2($elm$html$Html$Attributes$style, 'padding', '1em 1em')
				]),
			$author$project$Main$sideNote)
		]);
};
var $author$project$Main$CloseDrawer = {$: 'CloseDrawer'};
var $author$project$Main$SelectDrawerItem = function (a) {
	return {$: 'SelectDrawerItem', a: a};
};
var $author$project$Main$ToggleDrawer = {$: 'ToggleDrawer'};
var $author$project$Internal$Options$Class = function (a) {
	return {$: 'Class', a: a};
};
var $author$project$Internal$Options$cs = function (c) {
	return $author$project$Internal$Options$Class(c);
};
var $author$project$Internal$Drawer$Dismissible$Implementation$appContent = $author$project$Internal$Options$cs('mdc-drawer-app-content');
var $author$project$Material$Drawer$Dismissible$appContent = $author$project$Internal$Drawer$Dismissible$Implementation$appContent;
var $author$project$Material$Options$cs = $author$project$Internal$Options$cs;
var $author$project$Internal$Options$CSS = function (a) {
	return {$: 'CSS', a: a};
};
var $author$project$Internal$Options$css = F2(
	function (key, value) {
		return $author$project$Internal$Options$CSS(
			_Utils_Tuple2(key, value));
	});
var $author$project$Material$Options$css = $author$project$Internal$Options$css;
var $elm$html$Html$section = _VirtualDom_node('section');
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Internal$Dispatch$flatten = function (decoders) {
	var tryMergeStep = F3(
		function (value, decoder, result) {
			return A2(
				$elm$core$Maybe$withDefault,
				result,
				A2(
					$elm$core$Maybe$map,
					function (_v0) {
						var message = _v0.message;
						var stopPropagation = _v0.stopPropagation;
						var preventDefault = _v0.preventDefault;
						return {
							message: A2($elm$core$List$cons, message, result.message),
							preventDefault: preventDefault || result.preventDefault,
							stopPropagation: stopPropagation || result.stopPropagation
						};
					},
					$elm$core$Result$toMaybe(
						A2($elm$json$Json$Decode$decodeValue, decoder, value))));
		});
	var tryMerge = function (value) {
		return A3(
			$elm$core$List$foldl,
			tryMergeStep(value),
			{message: _List_Nil, preventDefault: false, stopPropagation: false},
			decoders);
	};
	return A2($elm$json$Json$Decode$map, tryMerge, $elm$json$Json$Decode$value);
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $author$project$Internal$Dispatch$toAttributes = function (_v0) {
	var config = _v0.a;
	var _v1 = config.lift;
	if (_v1.$ === 'Just') {
		var lift = _v1.a;
		return A2(
			$elm$core$List$map,
			function (_v3) {
				var event = _v3.a;
				var flatDecoder = _v3.b;
				return A2(
					$elm$html$Html$Events$custom,
					event,
					lift(flatDecoder));
			},
			$elm$core$Dict$toList(
				A2(
					$elm$core$Dict$map,
					function (_v2) {
						return $author$project$Internal$Dispatch$flatten;
					},
					config.decoders)));
	} else {
		return A2(
			$elm$core$List$concatMap,
			function (_v4) {
				var event = _v4.a;
				var decoders = _v4.b;
				return A2(
					$elm$core$List$map,
					$elm$html$Html$Events$custom(event),
					decoders);
			},
			$elm$core$Dict$toList(config.decoders));
	}
};
var $author$project$Internal$Options$addAttributes = F2(
	function (summary, attrs) {
		var styleText = A2(
			$elm$core$String$join,
			'; ',
			A2(
				$elm$core$List$map,
				function (_v0) {
					var key = _v0.a;
					var value = _v0.b;
					return A2(
						$elm$core$String$join,
						': ',
						_List_fromArray(
							[key, value]));
				},
				summary.css));
		var style = (styleText !== '') ? _List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'style', styleText)
			]) : _List_Nil;
		var all = _Utils_ap(
			summary.attrs,
			_Utils_ap(
				style,
				_Utils_ap(
					A2(
						$elm$core$List$map,
						$elm$html$Html$Attributes$class,
						$elm$core$List$reverse(summary.classes)),
					_Utils_ap(
						attrs,
						_Utils_ap(
							summary.internal,
							$author$project$Internal$Dispatch$toAttributes(summary.dispatch))))));
		return all;
	});
var $author$project$Internal$Options$Summary = F6(
	function (classes, css, attrs, internal, dispatch, config) {
		return {attrs: attrs, classes: classes, config: config, css: css, dispatch: dispatch, internal: internal};
	});
var $author$project$Internal$Dispatch$Config = function (a) {
	return {$: 'Config', a: a};
};
var $author$project$Internal$Dispatch$add = F3(
	function (event, decoder, _v0) {
		var config = _v0.a;
		return $author$project$Internal$Dispatch$Config(
			_Utils_update(
				config,
				{
					decoders: A3(
						$elm$core$Dict$update,
						event,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Maybe$map(
								$elm$core$List$cons(decoder)),
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Maybe$withDefault(
									_List_fromArray(
										[decoder])),
								$elm$core$Maybe$Just)),
						config.decoders)
				}));
	});
var $author$project$Internal$Dispatch$setLift = F2(
	function (lift, _v0) {
		var decoders = _v0.a.decoders;
		return $author$project$Internal$Dispatch$Config(
			{
				decoders: decoders,
				lift: $elm$core$Maybe$Just(lift)
			});
	});
var $author$project$Internal$Options$collect1_ = F2(
	function (options, acc) {
		switch (options.$) {
			case 'Class':
				var x = options.a;
				return _Utils_update(
					acc,
					{
						classes: A2($elm$core$List$cons, x, acc.classes)
					});
			case 'CSS':
				var x = options.a;
				return _Utils_update(
					acc,
					{
						css: A2($elm$core$List$cons, x, acc.css)
					});
			case 'Attribute':
				var x = options.a;
				return _Utils_update(
					acc,
					{
						attrs: A2($elm$core$List$cons, x, acc.attrs)
					});
			case 'Internal':
				var x = options.a;
				return _Utils_update(
					acc,
					{
						internal: A2($elm$core$List$cons, x, acc.internal)
					});
			case 'Listener':
				var event = options.a;
				var decoder = options.b;
				return _Utils_update(
					acc,
					{
						dispatch: A3($author$project$Internal$Dispatch$add, event, decoder, acc.dispatch)
					});
			case 'Many':
				var opts = options.a;
				return A3($elm$core$List$foldl, $author$project$Internal$Options$collect1_, acc, opts);
			case 'Lift':
				var lift = options.a;
				return _Utils_update(
					acc,
					{
						dispatch: A2($author$project$Internal$Dispatch$setLift, lift, acc.dispatch)
					});
			case 'Set':
				return acc;
			default:
				return acc;
		}
	});
var $author$project$Internal$Dispatch$defaultConfig = $author$project$Internal$Dispatch$Config(
	{decoders: $elm$core$Dict$empty, lift: $elm$core$Maybe$Nothing});
var $author$project$Internal$Options$collect_ = A2(
	$elm$core$List$foldl,
	$author$project$Internal$Options$collect1_,
	A6($author$project$Internal$Options$Summary, _List_Nil, _List_Nil, _List_Nil, _List_Nil, $author$project$Internal$Dispatch$defaultConfig, _Utils_Tuple0));
var $author$project$Internal$Options$styled = F2(
	function (ctor, props) {
		return ctor(
			A2(
				$author$project$Internal$Options$addAttributes,
				$author$project$Internal$Options$collect_(props),
				_List_Nil));
	});
var $author$project$Material$Options$styled = $author$project$Internal$Options$styled;
var $author$project$Internal$Options$None = {$: 'None'};
var $author$project$Internal$Options$nop = $author$project$Internal$Options$None;
var $author$project$Internal$Options$when = F2(
	function (guard, prop) {
		return guard ? prop : $author$project$Internal$Options$nop;
	});
var $author$project$Material$Options$when = $author$project$Internal$Options$when;
var $author$project$App$Page$componentCatalogPanel = F2(
	function (transition, nodes) {
		return A3(
			$author$project$Material$Options$styled,
			$elm$html$Html$section,
			_List_fromArray(
				[
					$author$project$Material$Options$cs('component-catalog-panel'),
					A2(
					$author$project$Material$Options$when,
					_Utils_eq(transition, $author$project$App$Page$Enter) || _Utils_eq(transition, $author$project$App$Page$Active),
					$author$project$Material$Options$cs('loadComponent-enter')),
					A2(
					$author$project$Material$Options$when,
					_Utils_eq(transition, $author$project$App$Page$Active),
					$author$project$Material$Options$cs('loadComponent-enter-active')),
					A2($author$project$Material$Options$css, 'margin-top', '24px'),
					A2($author$project$Material$Options$css, 'padding-bottom', '24px')
				]),
			nodes);
	});
var $author$project$Internal$Typography$Implementation$headline4 = $author$project$Internal$Options$cs('mdc-typography--headline4');
var $author$project$Material$Typography$headline4 = $author$project$Internal$Typography$Implementation$headline4;
var $author$project$Material$Typography$display4 = $author$project$Material$Typography$headline4;
var $author$project$Internal$Options$Attribute = function (a) {
	return {$: 'Attribute', a: a};
};
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $elm$html$Html$Attributes$map = $elm$virtual_dom$VirtualDom$mapAttribute;
var $author$project$Internal$Options$attribute = A2(
	$elm$core$Basics$composeL,
	$author$project$Internal$Options$Attribute,
	$elm$html$Html$Attributes$map($elm$core$Basics$never));
var $author$project$Material$Options$attribute = $author$project$Internal$Options$attribute;
var $author$project$Internal$Drawer$Implementation$content = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-drawer__content'),
			options));
};
var $author$project$Internal$Drawer$Modal$Implementation$content = $author$project$Internal$Drawer$Implementation$content;
var $author$project$Material$Drawer$Modal$content = $author$project$Internal$Drawer$Modal$Implementation$content;
var $author$project$Internal$TopAppBar$Implementation$fixedAdjust = $author$project$Internal$Options$cs('mdc-top-app-bar--fixed-adjust');
var $author$project$Material$TopAppBar$fixedAdjust = $author$project$Internal$TopAppBar$Implementation$fixedAdjust;
var $elm$html$Html$header = _VirtualDom_node('header');
var $author$project$Internal$Drawer$Implementation$header = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$header,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-drawer__header'),
			options));
};
var $author$project$Internal$Drawer$Modal$Implementation$header = $author$project$Internal$Drawer$Implementation$header;
var $author$project$Material$Drawer$Modal$header = $author$project$Internal$Drawer$Modal$Implementation$header;
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$a = _VirtualDom_node('a');
var $author$project$Internal$List$Implementation$HtmlList = function (a) {
	return {$: 'HtmlList', a: a};
};
var $author$project$Internal$List$Model$FocusItem = F2(
	function (a, b) {
		return {$: 'FocusItem', a: a, b: b};
	});
var $author$project$Internal$List$Model$SelectItem = F2(
	function (a, b) {
		return {$: 'SelectItem', a: a, b: b};
	});
var $author$project$Internal$Options$collect1 = F2(
	function (opt, acc) {
		switch (opt.$) {
			case 'Class':
				var x = opt.a;
				return _Utils_update(
					acc,
					{
						classes: A2($elm$core$List$cons, x, acc.classes)
					});
			case 'CSS':
				var x = opt.a;
				return _Utils_update(
					acc,
					{
						css: A2($elm$core$List$cons, x, acc.css)
					});
			case 'Attribute':
				var x = opt.a;
				return _Utils_update(
					acc,
					{
						attrs: A2($elm$core$List$cons, x, acc.attrs)
					});
			case 'Internal':
				var x = opt.a;
				return _Utils_update(
					acc,
					{
						internal: A2($elm$core$List$cons, x, acc.internal)
					});
			case 'Many':
				var opts = opt.a;
				return A3($elm$core$List$foldl, $author$project$Internal$Options$collect1, acc, opts);
			case 'Set':
				var g = opt.a;
				return _Utils_update(
					acc,
					{
						config: g(acc.config)
					});
			case 'Listener':
				var event = opt.a;
				var decoder = opt.b;
				return _Utils_update(
					acc,
					{
						dispatch: A3($author$project$Internal$Dispatch$add, event, decoder, acc.dispatch)
					});
			case 'Lift':
				var lift = opt.a;
				return _Utils_update(
					acc,
					{
						dispatch: A2($author$project$Internal$Dispatch$setLift, lift, acc.dispatch)
					});
			default:
				return acc;
		}
	});
var $author$project$Internal$Options$recollect = $elm$core$List$foldl($author$project$Internal$Options$collect1);
var $author$project$Internal$Options$apply = F4(
	function (summary, ctor, options, attrs) {
		return ctor(
			A2(
				$author$project$Internal$Options$addAttributes,
				A2($author$project$Internal$Options$recollect, summary, options),
				attrs));
	});
var $author$project$Internal$Options$aria = F2(
	function (key, val) {
		return $author$project$Internal$Options$Attribute(
			A2($elm$html$Html$Attributes$attribute, 'aria-' + key, val));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $author$project$Internal$Options$collect = A2(
	$elm$core$Basics$composeR,
	A5($author$project$Internal$Options$Summary, _List_Nil, _List_Nil, _List_Nil, _List_Nil, $author$project$Internal$Dispatch$defaultConfig),
	$author$project$Internal$Options$recollect);
var $author$project$Internal$List$Implementation$defaultConfig = {activated: false, disabled: false, isRadioGroup: false, isSingleSelectionList: false, node: $elm$core$Maybe$Nothing, onSelectListItem: $elm$core$Maybe$Nothing, selected: false, selectedIndex: $elm$core$Maybe$Nothing, useActivated: false};
var $author$project$Internal$List$Implementation$disabledClass = $author$project$Internal$Options$cs('mdc-list-item--disabled');
var $author$project$Internal$List$Implementation$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $elm$core$Array$toIndexedList = function (array) {
	var len = array.a;
	var helper = F2(
		function (entry, _v0) {
			var index = _v0.a;
			var list = _v0.b;
			return _Utils_Tuple2(
				index - 1,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(index, entry),
					list));
		});
	return A3(
		$elm$core$Array$foldr,
		helper,
		_Utils_Tuple2(len - 1, _List_Nil),
		array).b;
};
var $author$project$Internal$List$Implementation$slicedIndexedList = F3(
	function (from, to, array) {
		return $elm$core$Array$toIndexedList(
			A3($elm$core$Array$slice, from, to, array));
	});
var $author$project$Internal$List$Implementation$firstNonEmptyId = F2(
	function (from, array) {
		var list = A3(
			$author$project$Internal$List$Implementation$slicedIndexedList,
			from,
			$elm$core$Array$length(array),
			array);
		var non_empty_id = A2(
			$author$project$Internal$List$Implementation$find,
			function (_v0) {
				var id = _v0.b;
				return id !== '';
			},
			list);
		return non_empty_id;
	});
var $author$project$Internal$List$Implementation$lastNonEmptyId = F2(
	function (to, array) {
		var list = A3($author$project$Internal$List$Implementation$slicedIndexedList, 0, to, array);
		var non_empty_id = A2(
			$author$project$Internal$List$Implementation$find,
			function (_v0) {
				var i = _v0.a;
				var id = _v0.b;
				return id !== '';
			},
			$elm$core$List$reverse(list));
		return non_empty_id;
	});
var $elm$html$Html$li = _VirtualDom_node('li');
var $author$project$Internal$List$Implementation$listItemClass = $author$project$Internal$Options$cs('mdc-list-item');
var $author$project$Internal$List$Implementation$listItemDomId = F2(
	function (domId, index) {
		return domId + ('--' + $elm$core$String$fromInt(index));
	});
var $author$project$Internal$Options$Listener = F2(
	function (a, b) {
		return {$: 'Listener', a: a, b: b};
	});
var $author$project$Internal$Options$on = F2(
	function (event, decodeMessage) {
		return A2(
			$author$project$Internal$Options$Listener,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (message) {
					return {message: message, preventDefault: false, stopPropagation: false};
				},
				decodeMessage));
	});
var $author$project$Internal$Options$onClick = function (msg) {
	return A2(
		$author$project$Internal$Options$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Internal$Options$onWithOptions = function (evt) {
	return $author$project$Internal$Options$Listener(evt);
};
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $author$project$Internal$Options$role = function (value) {
	return $author$project$Internal$Options$Attribute(
		A2($elm$html$Html$Attributes$attribute, 'role', value));
};
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $author$project$Internal$Options$tabindex = function (value) {
	return $author$project$Internal$Options$Attribute(
		$elm$html$Html$Attributes$tabindex(value));
};
var $author$project$Internal$Ripple$Model$Blur = {$: 'Blur'};
var $author$project$Internal$Ripple$Model$Deactivate = {$: 'Deactivate'};
var $author$project$Internal$Ripple$Model$Focus = {$: 'Focus'};
var $author$project$Internal$Ripple$Model$SetCssVariables = F2(
	function (a, b) {
		return {$: 'SetCssVariables', a: a, b: b};
	});
var $author$project$Internal$Ripple$Model$activationEventTypes = _List_fromArray(
	['touchstart', 'pointerdown', 'mousedown']);
var $author$project$Internal$Ripple$Model$cssClasses = {bgFocused: 'mdc-ripple-upgraded--background-focused', fgActivation: 'mdc-ripple-upgraded--foreground-activation', fgDeactivation: 'mdc-ripple-upgraded--foreground-deactivation', root: 'mdc-ripple-upgraded', unbounded: 'mdc-ripple-upgraded--unbounded'};
var $elm$core$Basics$round = _Basics_round;
var $author$project$Internal$Ripple$Model$strings = {varFgScale: '--mdc-ripple-fg-scale', varFgSize: '--mdc-ripple-fg-size', varFgTranslateEnd: '--mdc-ripple-fg-translate-end', varFgTranslateStart: '--mdc-ripple-fg-translate-start', varLeft: '--mdc-ripple-left', varTop: '--mdc-ripple-top'};
var $author$project$Internal$Ripple$Implementation$cssVariables = F2(
	function (isUnbounded, _v0) {
		var fgScale = _v0.fgScale;
		var translateStart = _v0.translateStart;
		var translateEnd = _v0.translateEnd;
		var initialSize = _v0.initialSize;
		var frame = _v0.frame;
		var unboundedCoords = isUnbounded ? {
			left: $elm$core$Basics$round((frame.width - initialSize) / 2),
			top: $elm$core$Basics$round((frame.height - initialSize) / 2)
		} : {left: 0, top: 0};
		var fgSize = $elm$core$String$fromInt(initialSize) + 'px';
		var variables = $elm$core$List$concat(
			_List_fromArray(
				[
					_List_fromArray(
					[
						A2($author$project$Internal$Options$css, $author$project$Internal$Ripple$Model$strings.varFgSize, fgSize),
						A2(
						$author$project$Internal$Options$css,
						$author$project$Internal$Ripple$Model$strings.varFgScale,
						$elm$core$String$fromFloat(fgScale))
					]),
					isUnbounded ? _List_fromArray(
					[
						A2(
						$author$project$Internal$Options$css,
						$author$project$Internal$Ripple$Model$strings.varTop,
						$elm$core$String$fromFloat(unboundedCoords.top) + 'px'),
						A2(
						$author$project$Internal$Options$css,
						$author$project$Internal$Ripple$Model$strings.varLeft,
						$elm$core$String$fromFloat(unboundedCoords.left) + 'px')
					]) : _List_fromArray(
					[
						A2($author$project$Internal$Options$css, $author$project$Internal$Ripple$Model$strings.varFgTranslateStart, translateStart),
						A2($author$project$Internal$Options$css, $author$project$Internal$Ripple$Model$strings.varFgTranslateEnd, translateEnd)
					])
				]));
		return variables;
	});
var $author$project$Internal$Options$data = F2(
	function (key, val) {
		return $author$project$Internal$Options$Attribute(
			A2($elm$html$Html$Attributes$attribute, 'data-' + key, val));
	});
var $author$project$Internal$Ripple$Model$Activate0 = F2(
	function (a, b) {
		return {$: 'Activate0', a: a, b: b};
	});
var $author$project$Internal$Ripple$Model$Event = F2(
	function (eventType, pagePoint) {
		return {eventType: eventType, pagePoint: pagePoint};
	});
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $author$project$Internal$Ripple$Implementation$decodeActivate = function (_v0) {
	var domId = _v0.domId;
	var isUnbounded = _v0.isUnbounded;
	var isActivated = _v0.isActivated;
	var previousActivationEvent = _v0.previousActivationEvent;
	var decodePagePoint = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (pageX, pageY) {
				return {pageX: pageX, pageY: pageY};
			}),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['pageX']),
			$elm$json$Json$Decode$float),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['pageY']),
			$elm$json$Json$Decode$float));
	var firstChangedTouch = A2(
		$elm$json$Json$Decode$andThen,
		function (changedTouches) {
			var _v3 = $elm$core$List$head(changedTouches);
			if (_v3.$ === 'Just') {
				var pagePoint = _v3.a;
				return $elm$json$Json$Decode$succeed(pagePoint);
			} else {
				return $elm$json$Json$Decode$fail('');
			}
		},
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['changedTouches']),
			$elm$json$Json$Decode$list(decodePagePoint)));
	var decodeIsSurfaceDisabled = $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$map,
				$elm$core$Basics$always(true),
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['disabled']),
					$elm$json$Json$Decode$string)),
				$elm$json$Json$Decode$succeed(false)
			]));
	var decodeEventType = A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['type']),
		$elm$json$Json$Decode$string);
	var decodeIsSameInteraction = function () {
		if (previousActivationEvent.$ === 'Nothing') {
			return $elm$json$Json$Decode$succeed(false);
		} else {
			var event = previousActivationEvent.a;
			return A2(
				$elm$json$Json$Decode$map,
				$elm$core$Basics$eq(event.eventType),
				decodeEventType);
		}
	}();
	var decodeEvent = A2(
		$elm$json$Json$Decode$andThen,
		function (eventType) {
			if (eventType === 'touchstart') {
				return A2(
					$elm$json$Json$Decode$map,
					$author$project$Internal$Ripple$Model$Event(eventType),
					firstChangedTouch);
			} else {
				return A2(
					$elm$json$Json$Decode$map,
					$author$project$Internal$Ripple$Model$Event(eventType),
					decodePagePoint);
			}
		},
		decodeEventType);
	return A2(
		$elm$json$Json$Decode$andThen,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map($elm$json$Json$Decode$succeed),
			$elm$core$Maybe$withDefault(
				$elm$json$Json$Decode$fail(''))),
		A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (isSurfaceDisabled, isSameInteraction, event) {
					return (isActivated || (isSurfaceDisabled || isSameInteraction)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
						A2(
							$author$project$Internal$Ripple$Model$Activate0,
							domId,
							{event: event, isSurfaceDisabled: false, isUnbounded: isUnbounded, wasElementMadeActive: false}));
				}),
			decodeIsSurfaceDisabled,
			decodeIsSameInteraction,
			decodeEvent));
};
var $author$project$Internal$Ripple$Model$ClientRect = F4(
	function (top, left, width, height) {
		return {height: height, left: left, top: top, width: width};
	});
var $elm$json$Json$Decode$map4 = _Json_map4;
var $debois$elm_dom$DOM$offsetHeight = A2($elm$json$Json$Decode$field, 'offsetHeight', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetLeft = A2($elm$json$Json$Decode$field, 'offsetLeft', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetTop = A2($elm$json$Json$Decode$field, 'offsetTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetWidth = A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$target = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'target', decoder);
};
var $author$project$Internal$Ripple$Implementation$decodeClientRect = $debois$elm_dom$DOM$target(
	A5($elm$json$Json$Decode$map4, $author$project$Internal$Ripple$Model$ClientRect, $debois$elm_dom$DOM$offsetTop, $debois$elm_dom$DOM$offsetLeft, $debois$elm_dom$DOM$offsetWidth, $debois$elm_dom$DOM$offsetHeight));
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $author$project$Internal$Options$id = A2($elm$core$Basics$composeL, $author$project$Internal$Options$Attribute, $elm$html$Html$Attributes$id);
var $author$project$Internal$Options$Many = function (a) {
	return {$: 'Many', a: a};
};
var $author$project$Internal$Options$many = $author$project$Internal$Options$Many;
var $author$project$Material$Options$data = $author$project$Internal$Options$data;
var $author$project$Material$Options$many = $author$project$Internal$Options$many;
var $author$project$Material$Options$on = $author$project$Internal$Options$on;
var $author$project$Internal$GlobalEvents$listener = F2(
	function (name, decoder) {
		return $author$project$Material$Options$many(
			_List_fromArray(
				[
					A2($author$project$Material$Options$on, name, decoder),
					A2($author$project$Material$Options$data, name, '{}')
				]));
	});
var $author$project$Internal$GlobalEvents$onMouseUp = $author$project$Internal$GlobalEvents$listener('globalmouseup');
var $author$project$Internal$GlobalEvents$onPointerUp = $author$project$Internal$GlobalEvents$listener('globalpointerup');
var $author$project$Internal$GlobalEvents$onTick = $author$project$Internal$GlobalEvents$listener('globaltick');
var $author$project$Internal$GlobalEvents$onTouchEnd = $author$project$Internal$GlobalEvents$listener('globaltouchend');
var $author$project$Internal$Ripple$Implementation$view = F5(
	function (isUnbounded, domId, lift, model, options) {
		var noStyle = $elm$html$Html$text('');
		var focusHandler = A2(
			$author$project$Internal$Options$on,
			'focus',
			$elm$json$Json$Decode$succeed(
				lift($author$project$Internal$Ripple$Model$Focus)));
		var deactivateHandler = function (event) {
			var deactivate = $elm$json$Json$Decode$succeed(
				lift($author$project$Internal$Ripple$Model$Deactivate));
			return $author$project$Internal$Options$many(
				_List_fromArray(
					[
						$author$project$Internal$GlobalEvents$onTouchEnd(deactivate),
						$author$project$Internal$GlobalEvents$onMouseUp(deactivate),
						$author$project$Internal$GlobalEvents$onPointerUp(deactivate)
					]));
		};
		var blurHandler = A2(
			$author$project$Internal$Options$on,
			'blur',
			$elm$json$Json$Decode$succeed(
				lift($author$project$Internal$Ripple$Model$Blur)));
		var baseProperties = $author$project$Internal$Options$many(
			_List_fromArray(
				[
					$author$project$Internal$Options$id(domId),
					$author$project$Internal$Options$cs($author$project$Internal$Ripple$Model$cssClasses.root),
					A2(
					$author$project$Internal$Options$when,
					isUnbounded,
					$author$project$Internal$Options$cs($author$project$Internal$Ripple$Model$cssClasses.unbounded)),
					model.focused ? $author$project$Internal$Options$cs($author$project$Internal$Ripple$Model$cssClasses.bgFocused) : $author$project$Internal$Options$nop
				]));
		var baseInteractionHandler = $author$project$Internal$Options$many(
			_List_fromArray(
				[focusHandler, blurHandler]));
		var activateHandler = $author$project$Internal$Options$many(
			A2(
				$elm$core$List$map,
				function (tipe) {
					return A2(
						$author$project$Internal$Options$on,
						tipe,
						A2(
							$elm$json$Json$Decode$map,
							lift,
							$author$project$Internal$Ripple$Implementation$decodeActivate(
								{
									domId: domId,
									isActivated: function () {
										var _v3 = model.animationState;
										if (_v3.$ === 'Activated') {
											var activationState = _v3.a;
											return !activationState.deactivated;
										} else {
											return false;
										}
									}(),
									isUnbounded: isUnbounded,
									previousActivationEvent: function () {
										var _v4 = model.animationState;
										if (_v4.$ === 'Activated') {
											var activationEvent = _v4.a.activationEvent;
											return $elm$core$Maybe$Just(activationEvent);
										} else {
											return $elm$core$Maybe$Nothing;
										}
									}()
								})));
				},
				$author$project$Internal$Ripple$Model$activationEventTypes));
		var _v0 = model.animationState;
		switch (_v0.$) {
			case 'Idle':
				var interactionHandler = $author$project$Internal$Options$many(
					_List_fromArray(
						[baseInteractionHandler, activateHandler]));
				var cssVars = function () {
					var _v1 = model.clientRect;
					if (_v1.$ === 'Just') {
						var clientRect = _v1.a;
						var _v2 = A2($author$project$Internal$Ripple$Implementation$layoutInternal, isUnbounded, clientRect);
						var fgScale = _v2.fgScale;
						var initialSize = _v2.initialSize;
						return A2(
							$author$project$Internal$Ripple$Implementation$cssVariables,
							isUnbounded,
							{fgScale: fgScale, frame: clientRect, initialSize: initialSize, translateEnd: '0px', translateStart: '0px'});
					} else {
						return _List_Nil;
					}
				}();
				var properties = $author$project$Internal$Options$many(
					_List_fromArray(
						[
							baseProperties,
							$author$project$Internal$Options$many(cssVars),
							A2(
							$author$project$Internal$Options$when,
							_Utils_eq(model.clientRect, $elm$core$Maybe$Nothing),
							$author$project$Internal$GlobalEvents$onTick(
								A2(
									$elm$json$Json$Decode$map,
									A2(
										$elm$core$Basics$composeL,
										lift,
										$author$project$Internal$Ripple$Model$SetCssVariables(isUnbounded)),
									$author$project$Internal$Ripple$Implementation$decodeClientRect)))
						]));
				return {interactionHandler: interactionHandler, properties: properties, style: noStyle};
			case 'Activated':
				var activatedData = _v0.a;
				var interactionHandler = $author$project$Internal$Options$many(
					_List_fromArray(
						[
							baseInteractionHandler,
							activateHandler,
							deactivateHandler(activatedData.activationEvent)
						]));
				var cssVars = A2(
					$author$project$Internal$Ripple$Implementation$cssVariables,
					isUnbounded,
					{fgScale: activatedData.fgScale, frame: activatedData.frame, initialSize: activatedData.initialSize, translateEnd: activatedData.translateEnd, translateStart: activatedData.translateStart});
				var properties = $author$project$Internal$Options$many(
					_List_fromArray(
						[
							baseProperties,
							$author$project$Internal$Options$many(cssVars),
							$author$project$Internal$Options$cs($author$project$Internal$Ripple$Model$cssClasses.fgActivation),
							A2(
							$author$project$Internal$Options$when,
							isUnbounded,
							A2($author$project$Internal$Options$data, 'mdc-ripple-is-unbounded', '1'))
						]));
				return {interactionHandler: interactionHandler, properties: properties, style: noStyle};
			default:
				var activatedData = _v0.a;
				var interactionHandler = $author$project$Internal$Options$many(
					_List_fromArray(
						[baseInteractionHandler, activateHandler]));
				var cssVars = A2(
					$author$project$Internal$Ripple$Implementation$cssVariables,
					isUnbounded,
					{fgScale: activatedData.fgScale, frame: activatedData.frame, initialSize: activatedData.initialSize, translateEnd: activatedData.translateEnd, translateStart: activatedData.translateStart});
				var properties = $author$project$Internal$Options$many(
					_List_fromArray(
						[
							baseProperties,
							$author$project$Internal$Options$many(cssVars),
							$author$project$Internal$Options$cs($author$project$Internal$Ripple$Model$cssClasses.fgDeactivation)
						]));
				return {interactionHandler: interactionHandler, properties: properties, style: noStyle};
		}
	});
var $author$project$Internal$List$Implementation$liView = F9(
	function (domId, lift, model, config, listItemIds, focusedIndex, index, options, children) {
		var tab_index = _Utils_eq(focusedIndex, index) ? 0 : (-1);
		var list_item_dom_id = A2($author$project$Internal$List$Implementation$listItemDomId, domId, index);
		var ripple = A5(
			$author$project$Internal$Ripple$Implementation$view,
			false,
			list_item_dom_id,
			A2(
				$elm$core$Basics$composeL,
				lift,
				$author$project$Internal$List$Model$RippleMsg(list_item_dom_id)),
			A2(
				$elm$core$Maybe$withDefault,
				$author$project$Internal$Ripple$Model$defaultModel,
				A2($elm$core$Dict$get, list_item_dom_id, model.ripples)),
			_List_Nil);
		var li_summary = A2($author$project$Internal$Options$collect, $author$project$Internal$List$Implementation$defaultConfig, options);
		var li_config = li_summary.config;
		var is_selected = function () {
			var _v8 = config.selectedIndex;
			if (_v8.$ === 'Just') {
				var i = _v8.a;
				return _Utils_eq(i, index);
			} else {
				return li_config.selected || li_config.activated;
			}
		}();
		return A5(
			$author$project$Internal$Options$apply,
			li_summary,
			A2($elm$core$Maybe$withDefault, $elm$html$Html$li, li_config.node),
			_List_fromArray(
				[
					$author$project$Internal$List$Implementation$listItemClass,
					$author$project$Internal$Options$tabindex(tab_index),
					A2(
					$author$project$Internal$Options$when,
					config.isSingleSelectionList && (is_selected && (!config.useActivated)),
					$author$project$Internal$Options$cs('mdc-list-item--selected')),
					A2(
					$author$project$Internal$Options$when,
					config.isSingleSelectionList && (is_selected && config.useActivated),
					$author$project$Internal$Options$cs('mdc-list-item--activated')),
					A2(
					$author$project$Internal$Options$when,
					config.isRadioGroup,
					A2(
						$author$project$Internal$Options$aria,
						'checked',
						is_selected ? 'True' : 'False')),
					A2(
					$author$project$Internal$Options$when,
					config.isSingleSelectionList,
					$author$project$Internal$Options$role('option')),
					A2(
					$author$project$Internal$Options$when,
					config.isRadioGroup,
					$author$project$Internal$Options$role('radio')),
					A2($author$project$Internal$Options$when, li_config.disabled, $author$project$Internal$List$Implementation$disabledClass),
					A2($author$project$Internal$Options$when, !li_config.disabled, ripple.interactionHandler),
					A2($author$project$Internal$Options$when, !li_config.disabled, ripple.properties),
					function () {
					var _v0 = config.onSelectListItem;
					if (_v0.$ === 'Just') {
						var onSelect = _v0.a;
						return (!li_config.disabled) ? $author$project$Internal$Options$onClick(
							onSelect(index)) : $author$project$Internal$Options$nop;
					} else {
						return $author$project$Internal$Options$nop;
					}
				}(),
					A2(
					$author$project$Internal$Options$onWithOptions,
					'keydown',
					A3(
						$elm$json$Json$Decode$map2,
						F2(
							function (key, keyCode) {
								var selectItem = _Utils_eq(
									key,
									$elm$core$Maybe$Just('Enter')) || ((keyCode === 13) || (_Utils_eq(
									key,
									$elm$core$Maybe$Just('Space')) || (keyCode === 32)));
								var _v1 = function () {
									if (_Utils_eq(
										key,
										$elm$core$Maybe$Just('ArrowDown')) || (keyCode === 40)) {
										var focusable_element = A2($author$project$Internal$List$Implementation$firstNonEmptyId, index + 1, listItemIds);
										if (focusable_element.$ === 'Just') {
											var _v3 = focusable_element.a;
											var next_index = _v3.a;
											var next_item = _v3.b;
											return _Utils_Tuple2(
												$elm$core$Maybe$Just(next_index),
												$elm$core$Maybe$Just(next_item));
										} else {
											return _Utils_Tuple2(
												$elm$core$Maybe$Just(index + 1),
												$elm$core$Maybe$Nothing);
										}
									} else {
										if (_Utils_eq(
											key,
											$elm$core$Maybe$Just('ArrowUp')) || (keyCode === 38)) {
											var focusable_element = A2($author$project$Internal$List$Implementation$lastNonEmptyId, index, listItemIds);
											if (focusable_element.$ === 'Just') {
												var _v5 = focusable_element.a;
												var previous_index = _v5.a;
												var previous_item = _v5.b;
												return _Utils_Tuple2(
													$elm$core$Maybe$Just(previous_index),
													$elm$core$Maybe$Just(previous_item));
											} else {
												return _Utils_Tuple2(
													$elm$core$Maybe$Just(index - 1),
													$elm$core$Maybe$Nothing);
											}
										} else {
											if (_Utils_eq(
												key,
												$elm$core$Maybe$Just('Home')) || (keyCode === 36)) {
												return _Utils_Tuple2(
													$elm$core$Maybe$Just(0),
													A2($elm$core$Array$get, 0, listItemIds));
											} else {
												if (_Utils_eq(
													key,
													$elm$core$Maybe$Just('End')) || (keyCode === 35)) {
													var last_index = $elm$core$Array$length(listItemIds) - 1;
													return _Utils_Tuple2(
														$elm$core$Maybe$Just(last_index),
														A2($elm$core$Array$get, last_index, listItemIds));
												} else {
													return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
												}
											}
										}
									}
								}();
								var index_to_focus = _v1.a;
								var id_to_focus = _v1.b;
								var msg = function () {
									if (selectItem) {
										var _v6 = config.onSelectListItem;
										if (_v6.$ === 'Just') {
											var onSelect = _v6.a;
											return A2($author$project$Internal$List$Model$SelectItem, index, onSelect);
										} else {
											return $author$project$Internal$List$Model$NoOp;
										}
									} else {
										var _v7 = _Utils_Tuple2(index_to_focus, id_to_focus);
										if ((_v7.a.$ === 'Just') && (_v7.b.$ === 'Just')) {
											var idx = _v7.a.a;
											var id = _v7.b.a;
											return A2($author$project$Internal$List$Model$FocusItem, idx, id);
										} else {
											return $author$project$Internal$List$Model$NoOp;
										}
									}
								}();
								return {
									message: lift(msg),
									preventDefault: (!_Utils_eq(index_to_focus, $elm$core$Maybe$Nothing)) || selectItem,
									stopPropagation: false
								};
							}),
						$elm$json$Json$Decode$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$json$Json$Decode$map,
									$elm$core$Maybe$Just,
									A2(
										$elm$json$Json$Decode$at,
										_List_fromArray(
											['key']),
										$elm$json$Json$Decode$string)),
									$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
								])),
						A2(
							$elm$json$Json$Decode$at,
							_List_fromArray(
								['keyCode']),
							$elm$json$Json$Decode$int)))
				]),
			_List_Nil,
			children);
	});
var $author$project$Internal$List$Implementation$li = F2(
	function (options, children) {
		return {
			children: $author$project$Internal$List$Implementation$HtmlList(children),
			focusable: true,
			options: options,
			view: $author$project$Internal$List$Implementation$liView
		};
	});
var $author$project$Internal$Options$Set = function (a) {
	return {$: 'Set', a: a};
};
var $author$project$Internal$Options$option = $author$project$Internal$Options$Set;
var $author$project$Internal$List$Implementation$node = function (nodeFunc) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					node: $elm$core$Maybe$Just(nodeFunc)
				});
		});
};
var $author$project$Material$List$a = F2(
	function (options, items) {
		return A2(
			$author$project$Internal$List$Implementation$li,
			A2(
				$elm$core$List$cons,
				$author$project$Internal$List$Implementation$node($elm$html$Html$a),
				options),
			items);
	});
var $author$project$Internal$List$Implementation$activated = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{activated: true});
	});
var $author$project$Material$List$activated = $author$project$Internal$List$Implementation$activated;
var $author$project$App$Page$listItem = F3(
	function (title, url, current_url) {
		return A2(
			$author$project$Material$List$a,
			_List_fromArray(
				[
					A2(
					$author$project$Material$Options$when,
					_Utils_eq(current_url, url),
					$author$project$Material$List$activated)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(title)
				]));
	});
var $elm$html$Html$nav = _VirtualDom_node('nav');
var $author$project$Internal$Msg$Dispatch = function (a) {
	return {$: 'Dispatch', a: a};
};
var $author$project$Internal$Options$Lift = function (a) {
	return {$: 'Lift', a: a};
};
var $author$project$Internal$Options$dispatch = function (lift) {
	return $author$project$Internal$Options$Lift(
		$elm$json$Json$Decode$map(
			function (_v0) {
				var message = _v0.message;
				var stopPropagation = _v0.stopPropagation;
				var preventDefault = _v0.preventDefault;
				return {
					message: lift(
						$author$project$Internal$Msg$Dispatch(message)),
					preventDefault: preventDefault,
					stopPropagation: stopPropagation
				};
			}));
};
var $author$project$Internal$Component$render = F3(
	function (get_model, view, ctor) {
		return F4(
			function (lift, idx, store, options) {
				return A3(
					view,
					A2(
						$elm$core$Basics$composeL,
						lift,
						ctor(idx)),
					A2(get_model, idx, store),
					A2(
						$elm$core$List$cons,
						$author$project$Internal$Options$dispatch(lift),
						options));
			});
	});
var $author$project$Internal$List$Model$ResetFocusedItem = {$: 'ResetFocusedItem'};
var $author$project$Internal$List$Implementation$doListItemDomId = F3(
	function (domId, index, listItem) {
		return listItem.focusable ? A2($author$project$Internal$List$Implementation$listItemDomId, domId, index) : '';
	});
var $author$project$Internal$List$Implementation$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = rest;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $author$project$Internal$List$Implementation$findIndex = $author$project$Internal$List$Implementation$findIndexHelp(0);
var $author$project$Internal$List$Implementation$liIsSelectedOrActivated = function (li_) {
	var li_summary = A2($author$project$Internal$Options$collect, $author$project$Internal$List$Implementation$defaultConfig, li_.options);
	var li_config = li_summary.config;
	return li_config.selected || li_config.activated;
};
var $author$project$Internal$List$Implementation$listItemView = F8(
	function (domId, lift, model, config, listItemsIds, focusedIndex, index, li_) {
		var _v0 = li_.children;
		if (_v0.$ === 'HtmlList') {
			var children = _v0.a;
			return A9(li_.view, domId, lift, model, config, listItemsIds, focusedIndex, index, li_.options, children);
		} else {
			var items = _v0.a;
			var groupDomId = domId + ('-' + $elm$core$String$fromInt(index));
			return A9(
				li_.view,
				domId,
				lift,
				model,
				config,
				listItemsIds,
				focusedIndex,
				index,
				li_.options,
				A2(
					$elm$core$List$indexedMap,
					A6($author$project$Internal$List$Implementation$listItemView, groupDomId, lift, model, config, listItemsIds, focusedIndex),
					items));
		}
	});
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $author$project$Internal$List$Implementation$invertDecoder = function (decoder) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (maybe) {
			return _Utils_eq(maybe, $elm$core$Maybe$Nothing) ? $elm$json$Json$Decode$succeed(_Utils_Tuple0) : $elm$json$Json$Decode$fail('');
		},
		$elm$json$Json$Decode$maybe(decoder));
};
var $author$project$Internal$List$Implementation$succeedIfContainerOrChildOfContainer = function (targetId) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (id) {
			return _Utils_eq(id, targetId) ? $elm$json$Json$Decode$succeed(_Utils_Tuple0) : A2(
				$elm$json$Json$Decode$field,
				'parentNode',
				$author$project$Internal$List$Implementation$succeedIfContainerOrChildOfContainer(targetId));
		},
		A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string));
};
var $author$project$Internal$List$Implementation$succeedIfLeavingList = function (targetId) {
	return $author$project$Internal$List$Implementation$invertDecoder(
		A2(
			$elm$json$Json$Decode$field,
			'relatedTarget',
			$author$project$Internal$List$Implementation$succeedIfContainerOrChildOfContainer(targetId)));
};
var $author$project$Internal$List$Implementation$ul = F5(
	function (domId, lift, model, options, items) {
		var listItemIds = $elm$core$Array$fromList(
			A2(
				$elm$core$List$indexedMap,
				$author$project$Internal$List$Implementation$doListItemDomId(domId),
				items));
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$List$Implementation$defaultConfig, options);
		var config = summary.config;
		var focusedIndex = function () {
			var _v0 = model.focused;
			if (_v0.$ === 'Just') {
				var focused = _v0.a;
				return focused;
			} else {
				var _v1 = config.selectedIndex;
				if (_v1.$ === 'Just') {
					var index = _v1.a;
					return index;
				} else {
					var _v2 = A2($author$project$Internal$List$Implementation$findIndex, $author$project$Internal$List$Implementation$liIsSelectedOrActivated, items);
					if (_v2.$ === 'Just') {
						var i = _v2.a;
						return i;
					} else {
						return 0;
					}
				}
			}
		}();
		var list_nodes = A2(
			$elm$core$List$indexedMap,
			A6($author$project$Internal$List$Implementation$listItemView, domId, lift, model, config, listItemIds, focusedIndex),
			items);
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			A2($elm$core$Maybe$withDefault, $elm$html$Html$ul, config.node),
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('mdc-list'),
					A2(
					$author$project$Internal$Options$when,
					config.isSingleSelectionList,
					$author$project$Internal$Options$role('listbox')),
					A2(
					$author$project$Internal$Options$when,
					config.isRadioGroup,
					$author$project$Internal$Options$role('radiogroup')),
					$author$project$Internal$Options$id(domId),
					A2(
					$author$project$Internal$Options$on,
					'focusout',
					A2(
						$elm$json$Json$Decode$map,
						$elm$core$Basics$always(
							lift($author$project$Internal$List$Model$ResetFocusedItem)),
						$author$project$Internal$List$Implementation$succeedIfLeavingList(domId)))
				]),
			_List_Nil,
			list_nodes);
	});
var $author$project$Internal$List$Implementation$view = F2(
	function (lift, domId) {
		return A5(
			$author$project$Internal$Component$render,
			$author$project$Internal$List$Implementation$getSet.get,
			$author$project$Internal$List$Implementation$ul(domId),
			$author$project$Internal$Msg$ListMsg,
			lift,
			domId);
	});
var $author$project$Material$List$nav = F5(
	function (lift, domId, model, options, items) {
		return A5(
			$author$project$Internal$List$Implementation$view,
			lift,
			domId,
			model,
			A2(
				$elm$core$List$cons,
				$author$project$Internal$List$Implementation$node($elm$html$Html$nav),
				options),
			items);
	});
var $author$project$Internal$Drawer$Implementation$onClose = function (handler) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					onClose: $elm$core$Maybe$Just(handler)
				});
		});
};
var $author$project$Internal$Drawer$Modal$Implementation$onClose = $author$project$Internal$Drawer$Implementation$onClose;
var $author$project$Material$Drawer$Modal$onClose = $author$project$Internal$Drawer$Modal$Implementation$onClose;
var $author$project$Internal$List$Implementation$onSelectListItem = function (handler) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					onSelectListItem: $elm$core$Maybe$Just(handler)
				});
		});
};
var $author$project$Material$List$onSelectListItem = $author$project$Internal$List$Implementation$onSelectListItem;
var $author$project$Internal$Drawer$Implementation$open = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{open: true});
	});
var $author$project$Internal$Drawer$Modal$Implementation$open = $author$project$Internal$Drawer$Implementation$open;
var $author$project$Material$Drawer$Modal$open = $author$project$Internal$Drawer$Modal$Implementation$open;
var $author$project$Internal$List$Implementation$singleSelection = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{isRadioGroup: false, isSingleSelectionList: true});
	});
var $author$project$Material$List$singleSelection = $author$project$Internal$List$Implementation$singleSelection;
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $author$project$Internal$List$Implementation$useActivated = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{useActivated: true});
	});
var $author$project$Material$List$useActivated = $author$project$Internal$List$Implementation$useActivated;
var $author$project$Internal$Drawer$Dismissible$Implementation$className = 'mdc-drawer--dismissible';
var $author$project$Internal$Drawer$Model$EndAnimation = {$: 'EndAnimation'};
var $author$project$Internal$Drawer$Model$NoOp = {$: 'NoOp'};
var $author$project$Internal$Drawer$Model$StartAnimation = function (a) {
	return {$: 'StartAnimation', a: a};
};
var $elm$html$Html$aside = _VirtualDom_node('aside');
var $author$project$Internal$Drawer$Implementation$defaultConfig = {onClose: $elm$core$Maybe$Nothing, open: false};
var $author$project$Internal$Drawer$Implementation$view = F5(
	function (className, lift, model, options, nodes) {
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$Drawer$Implementation$defaultConfig, options);
		var config = summary.config;
		var stateChanged = (!model.closeOnAnimationEnd) && (!_Utils_eq(config.open, model.open));
		return A3(
			$author$project$Internal$Options$styled,
			$elm$html$Html$aside,
			_Utils_ap(
				_List_fromArray(
					[
						$author$project$Internal$Options$cs('mdc-drawer'),
						$author$project$Internal$Options$cs(className),
						A2(
						$author$project$Internal$Options$when,
						stateChanged,
						$author$project$Internal$GlobalEvents$onTick(
							$elm$json$Json$Decode$succeed(
								lift(
									$author$project$Internal$Drawer$Model$StartAnimation(config.open))))),
						A2(
						$author$project$Internal$Options$when,
						config.open || model.open,
						$author$project$Internal$Options$cs('mdc-drawer--open')),
						A2(
						$author$project$Internal$Options$when,
						config.open && (stateChanged || model.animating),
						$author$project$Internal$Options$cs('mdc-drawer--animate')),
						A2(
						$author$project$Internal$Options$when,
						config.open && model.animating,
						$author$project$Internal$Options$cs('mdc-drawer--opening')),
						A2(
						$author$project$Internal$Options$when,
						(!config.open) && model.animating,
						$author$project$Internal$Options$cs('mdc-drawer--closing')),
						A2(
						$author$project$Internal$Options$when,
						model.animating,
						A2(
							$author$project$Internal$Options$on,
							'transitionend',
							$elm$json$Json$Decode$succeed(
								lift($author$project$Internal$Drawer$Model$EndAnimation)))),
						A2(
						$author$project$Internal$Options$when,
						(!$elm$core$String$isEmpty(className)) && (config.open || model.open),
						A2($author$project$Internal$Options$data, 'focustrap', '{}')),
						A2(
						$author$project$Internal$Options$on,
						'keydown',
						A3(
							$elm$json$Json$Decode$map2,
							F2(
								function (key, keyCode) {
									return (_Utils_eq(
										key,
										$elm$core$Maybe$Just('Escape')) || (keyCode === 27)) ? A2(
										$elm$core$Maybe$withDefault,
										lift($author$project$Internal$Drawer$Model$NoOp),
										config.onClose) : lift($author$project$Internal$Drawer$Model$NoOp);
								}),
							$elm$json$Json$Decode$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$json$Json$Decode$map,
										$elm$core$Maybe$Just,
										A2(
											$elm$json$Json$Decode$at,
											_List_fromArray(
												['key']),
											$elm$json$Json$Decode$string)),
										$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
									])),
							A2(
								$elm$json$Json$Decode$at,
								_List_fromArray(
									['keyCode']),
								$elm$json$Json$Decode$int)))
					]),
				options),
			nodes);
	});
var $author$project$Internal$Drawer$Implementation$render = function (className) {
	return A3(
		$author$project$Internal$Component$render,
		$author$project$Internal$Drawer$Implementation$getSet.get,
		$author$project$Internal$Drawer$Implementation$view(className),
		$author$project$Internal$Msg$DrawerMsg);
};
var $author$project$Internal$Drawer$Dismissible$Implementation$view = $author$project$Internal$Drawer$Implementation$render($author$project$Internal$Drawer$Dismissible$Implementation$className);
var $author$project$Material$Drawer$Dismissible$view = $author$project$Internal$Drawer$Dismissible$Implementation$view;
var $author$project$Internal$Drawer$Modal$Implementation$className = 'mdc-drawer--modal';
var $author$project$Internal$Drawer$Modal$Implementation$view = $author$project$Internal$Drawer$Implementation$render($author$project$Internal$Drawer$Modal$Implementation$className);
var $author$project$Material$Drawer$Modal$view = $author$project$Internal$Drawer$Modal$Implementation$view;
var $author$project$App$Page$drawer = F8(
	function (lift, idx, mdc, close, select, current_url, dismissible_drawer, open) {
		var a = function (_v0) {
			var title = _v0.a;
			var url = _v0.b;
			return A3($author$project$App$Page$listItem, title, url, current_url);
		};
		return A5(
			dismissible_drawer ? $author$project$Material$Drawer$Dismissible$view : $author$project$Material$Drawer$Modal$view,
			lift,
			idx,
			mdc,
			_List_fromArray(
				[
					A2($author$project$Material$Options$when, open, $author$project$Material$Drawer$Modal$open),
					$author$project$Material$Drawer$Modal$onClose(close),
					$author$project$Material$TopAppBar$fixedAdjust,
					A2(
					$author$project$Material$Options$when,
					dismissible_drawer,
					A2($author$project$Material$Options$css, 'z-index', '1'))
				]),
			_List_fromArray(
				[
					A2(
					$author$project$Material$Drawer$Modal$header,
					_List_fromArray(
						[
							A2($author$project$Material$Options$css, 'position', 'absolute'),
							A2($author$project$Material$Options$css, 'top', '18px'),
							A2($author$project$Material$Options$css, 'opacity', '.74'),
							A2($author$project$Material$Options$css, 'padding', '0 16px 4px 16px')
						]),
					_List_fromArray(
						[
							A3(
							$author$project$Material$Options$styled,
							$elm$html$Html$img,
							_List_fromArray(
								[
									$author$project$Material$Options$attribute(
									$elm$html$Html$Attributes$src('https://material-components.github.io/material-components-web-catalog/static/media/ic_material_design_24px.svg'))
								]),
							_List_Nil)
						])),
					A2(
					$author$project$Material$Drawer$Modal$content,
					_List_Nil,
					_List_fromArray(
						[
							A5(
							$author$project$Material$List$nav,
							lift,
							'drawer-list',
							mdc,
							_List_fromArray(
								[
									$author$project$Material$List$singleSelection,
									$author$project$Material$List$useActivated,
									$author$project$Material$List$onSelectListItem(select)
								]),
							A2(
								$elm$core$List$map,
								a,
								$elm$core$Array$toList($author$project$App$Page$drawerItems)))
						]))
				]));
	});
var $author$project$Material$Options$onClick = $author$project$Internal$Options$onClick;
var $author$project$Internal$TopAppBar$Model$Scroll = function (a) {
	return {$: 'Scroll', a: a};
};
var $author$project$Internal$TopAppBar$Implementation$targetScrollTop = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'scrollTop']),
	$elm$json$Json$Decode$float);
var $author$project$Internal$TopAppBar$Implementation$onScroll = F2(
	function (lift, index) {
		return A2(
			$author$project$Internal$Options$on,
			'scroll',
			A2(
				$elm$json$Json$Decode$map,
				function (scrollPosition) {
					return lift(
						A2(
							$author$project$Internal$Msg$TopAppBarMsg,
							index,
							$author$project$Internal$TopAppBar$Model$Scroll(
								{scrollPosition: scrollPosition})));
				},
				$author$project$Internal$TopAppBar$Implementation$targetScrollTop));
	});
var $author$project$Material$TopAppBar$onScroll = $author$project$Internal$TopAppBar$Implementation$onScroll;
var $author$project$Internal$Drawer$Modal$Implementation$scrim = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-drawer-scrim'),
			options));
};
var $author$project$Material$Drawer$Modal$scrim = $author$project$Internal$Drawer$Modal$Implementation$scrim;
var $author$project$Internal$TopAppBar$Implementation$alignStart = $author$project$Internal$Options$cs('mdc-top-app-bar__section--align-start');
var $author$project$Material$TopAppBar$alignStart = $author$project$Internal$TopAppBar$Implementation$alignStart;
var $author$project$Internal$Icon$Implementation$node = function (ctor) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{node: ctor});
		});
};
var $author$project$Internal$Icon$Implementation$button = $author$project$Internal$Icon$Implementation$node('button');
var $author$project$Internal$Icon$Implementation$defaultConfig = {node: 'i'};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $author$project$Internal$Icon$Implementation$view = F2(
	function (options, name) {
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$Icon$Implementation$defaultConfig, options);
		var config = summary.config;
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			$elm$html$Html$node(config.node),
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('material-icons'),
					A2($author$project$Internal$Options$aria, 'hidden', 'true')
				]),
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(name)
				]));
	});
var $author$project$Internal$TopAppBar$Implementation$actionItemView = F5(
	function (domId, lift, model, options, name) {
		var ripple = A5(
			$author$project$Internal$Ripple$Implementation$view,
			true,
			domId,
			A2(
				$elm$core$Basics$composeL,
				lift,
				$author$project$Internal$TopAppBar$Model$RippleMsg(domId)),
			A2(
				$elm$core$Maybe$withDefault,
				$author$project$Internal$Ripple$Model$defaultModel,
				A2($elm$core$Dict$get, domId, model.ripples)),
			_List_Nil);
		return A2(
			$author$project$Internal$Icon$Implementation$view,
			A2(
				$elm$core$List$cons,
				$author$project$Internal$Icon$Implementation$button,
				A2(
					$elm$core$List$cons,
					$author$project$Internal$Options$cs('mdc-icon-button'),
					A2(
						$elm$core$List$cons,
						ripple.interactionHandler,
						A2($elm$core$List$cons, ripple.properties, options)))),
			name);
	});
var $author$project$Internal$TopAppBar$Implementation$actionItem = F2(
	function (lift, index) {
		return A5(
			$author$project$Internal$Component$render,
			$author$project$Internal$TopAppBar$Implementation$getSet.get,
			$author$project$Internal$TopAppBar$Implementation$actionItemView(index),
			$author$project$Internal$Msg$TopAppBarMsg,
			lift,
			index);
	});
var $author$project$Material$TopAppBar$navigationIcon = F5(
	function (lift, index, model, options, name) {
		return A5(
			$author$project$Internal$TopAppBar$Implementation$actionItem,
			lift,
			index,
			model,
			A2(
				$elm$core$List$cons,
				$author$project$Material$Options$cs('mdc-top-app-bar__navigation-icon'),
				options),
			name);
	});
var $author$project$Internal$TopAppBar$Implementation$section = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$section,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-top-app-bar__section'),
			options));
};
var $author$project$Material$TopAppBar$section = $author$project$Internal$TopAppBar$Implementation$section;
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$Internal$TopAppBar$Implementation$title = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$span,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-top-app-bar__title'),
			options));
};
var $author$project$Material$TopAppBar$title = $author$project$Internal$TopAppBar$Implementation$title;
var $author$project$Internal$TopAppBar$Model$Init = function (a) {
	return {$: 'Init', a: a};
};
var $author$project$Internal$TopAppBar$Model$Resize = function (a) {
	return {$: 'Resize', a: a};
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $author$project$Internal$TopAppBar$Implementation$cssClasses = {collapsed: 'mdc-top-app-bar--short-collapsed', dense: 'mdc-top-app-bar--dense', fixed: 'mdc-top-app-bar--fixed', prominent: 'mdc-top-app-bar--prominent', scrolled: 'mdc-top-app-bar--fixed-scrolled', _short: 'mdc-top-app-bar--short'};
var $author$project$Internal$TopAppBar$Model$defaultConfig = {collapsed: false, dense: false, fixed: false, prominent: false, _short: false};
var $author$project$Internal$TopAppBar$Implementation$getAppBarHeight = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'clientHeight']),
	$elm$json$Json$Decode$float);
var $author$project$Internal$TopAppBar$Implementation$getViewportScrollY = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'ownerDocument', 'defaultView', 'scrollY']),
	$elm$json$Json$Decode$float);
var $author$project$Internal$GlobalEvents$onResize = $author$project$Internal$GlobalEvents$listener('globalresize');
var $author$project$Internal$GlobalEvents$onScroll = $author$project$Internal$GlobalEvents$listener('globalscroll');
var $author$project$Internal$TopAppBar$Implementation$row = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-top-app-bar__row'),
			options));
};
var $author$project$Internal$TopAppBar$Implementation$topAppBar = F4(
	function (lift, model, options, sections) {
		var top = A2($elm$core$Maybe$withDefault, 0, model.styleTop);
		var lastScrollPosition = A2($elm$core$Maybe$withDefault, 0, model.lastScrollPosition);
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$TopAppBar$Model$defaultConfig, options);
		var config = summary.config;
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			$elm$html$Html$header,
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('mdc-top-app-bar'),
					A2(
					$author$project$Internal$Options$when,
					config.dense,
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses.dense)),
					A2(
					$author$project$Internal$Options$when,
					config.fixed,
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses.fixed)),
					A2(
					$author$project$Internal$Options$when,
					config.fixed && (lastScrollPosition > 0),
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses.scrolled)),
					A2(
					$author$project$Internal$Options$when,
					config.prominent,
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses.prominent)),
					A2(
					$author$project$Internal$Options$when,
					config._short,
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses._short)),
					A2(
					$author$project$Internal$Options$when,
					config.collapsed || (config._short && (lastScrollPosition > 0)),
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses.collapsed)),
					A2(
					$author$project$Internal$Options$when,
					(!config.fixed) && (!config._short),
					A2(
						$author$project$Internal$Options$css,
						'top',
						$elm$core$String$fromFloat(top) + 'px')),
					$author$project$Internal$GlobalEvents$onScroll(
					A2(
						$elm$json$Json$Decode$map,
						lift,
						A2(
							$elm$json$Json$Decode$map,
							function (scrollPosition) {
								return $author$project$Internal$TopAppBar$Model$Scroll(
									{scrollPosition: scrollPosition});
							},
							$author$project$Internal$TopAppBar$Implementation$getViewportScrollY))),
					$author$project$Internal$GlobalEvents$onResize(
					A2(
						$elm$json$Json$Decode$map,
						lift,
						A3(
							$elm$json$Json$Decode$map2,
							F2(
								function (scrollPosition, topAppBarHeight) {
									return $author$project$Internal$TopAppBar$Model$Resize(
										{scrollPosition: scrollPosition, topAppBarHeight: topAppBarHeight});
								}),
							$author$project$Internal$TopAppBar$Implementation$getViewportScrollY,
							$author$project$Internal$TopAppBar$Implementation$getAppBarHeight))),
					A2(
					$author$project$Internal$Options$when,
					A2(
						$elm$core$List$any,
						$elm$core$Basics$identity,
						_List_fromArray(
							[
								_Utils_eq(model.lastScrollPosition, $elm$core$Maybe$Nothing),
								_Utils_eq(model.topAppBarHeight, $elm$core$Maybe$Nothing)
							])),
					$author$project$Internal$GlobalEvents$onTick(
						A2(
							$elm$json$Json$Decode$map,
							lift,
							A3(
								$elm$json$Json$Decode$map2,
								F2(
									function (scrollPosition, topAppBarHeight) {
										return $author$project$Internal$TopAppBar$Model$Init(
											{scrollPosition: scrollPosition, topAppBarHeight: topAppBarHeight});
									}),
								$author$project$Internal$TopAppBar$Implementation$getViewportScrollY,
								$author$project$Internal$TopAppBar$Implementation$getAppBarHeight))))
				]),
			_List_Nil,
			_List_fromArray(
				[
					A2($author$project$Internal$TopAppBar$Implementation$row, _List_Nil, sections)
				]));
	});
var $author$project$Internal$TopAppBar$Implementation$view = A3($author$project$Internal$Component$render, $author$project$Internal$TopAppBar$Implementation$getSet.get, $author$project$Internal$TopAppBar$Implementation$topAppBar, $author$project$Internal$Msg$TopAppBarMsg);
var $author$project$Material$TopAppBar$view = $author$project$Internal$TopAppBar$Implementation$view;
var $author$project$App$Page$topappbar = F6(
	function (lift, idx, mdc, cmd, url, title) {
		return A5(
			$author$project$Material$TopAppBar$view,
			lift,
			idx,
			mdc,
			_List_fromArray(
				[
					$author$project$Material$Options$cs('catalog-top-app-bar')
				]),
			_List_fromArray(
				[
					A2(
					$author$project$Material$TopAppBar$section,
					_List_fromArray(
						[$author$project$Material$TopAppBar$alignStart]),
					_List_fromArray(
						[
							function () {
							if (url.$ === 'StartPage') {
								return A3(
									$author$project$Material$Options$styled,
									$elm$html$Html$img,
									_List_fromArray(
										[
											$author$project$Material$Options$cs('mdc-toolbar__menu-icon'),
											$author$project$Material$Options$attribute(
											$elm$html$Html$Attributes$src('images/logo_48.jpeg'))
										]),
									_List_Nil);
							} else {
								return A5(
									$author$project$Material$TopAppBar$navigationIcon,
									lift,
									'my-menu',
									mdc,
									_List_fromArray(
										[
											$author$project$Material$Options$onClick(cmd)
										]),
									'menu');
							}
						}(),
							A2(
							$author$project$Material$TopAppBar$title,
							_List_fromArray(
								[
									$author$project$Material$Options$cs('catalog-top-app-bar__title')
								]),
							_List_fromArray(
								[
									A3(
									$author$project$Material$Options$styled,
									$elm$html$Html$span,
									_List_fromArray(
										[
											$author$project$Material$Options$cs('catalog-top-app-bar__title--small-screen')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(title)
										])),
									A3(
									$author$project$Material$Options$styled,
									$elm$html$Html$span,
									_List_fromArray(
										[
											$author$project$Material$Options$cs('catalog-top-app-bar__title--large-screen')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(title)
										]))
								]))
						]))
				]));
	});
var $author$project$Internal$Typography$Implementation$typography = $author$project$Internal$Options$cs('mdc-typography');
var $author$project$Material$Typography$typography = $author$project$Internal$Typography$Implementation$typography;
var $author$project$Internal$ImageList$Model$defaultConfig = {masonry: false, tag: $elm$core$Maybe$Nothing, withTextProtection: false};
var $author$project$Internal$ImageList$Implementation$image = function (options) {
	var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$ImageList$Model$defaultConfig, options);
	var config = summary.config;
	var tag = A2($elm$core$Maybe$withDefault, 'img', config.tag);
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$node(tag),
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-image-list__image'),
			options));
};
var $author$project$Material$ImageList$image = $author$project$Internal$ImageList$Implementation$image;
var $author$project$Internal$ImageList$Implementation$node = function (tag) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					tag: $elm$core$Maybe$Just(tag)
				});
		});
};
var $author$project$Material$ImageList$node = $author$project$Internal$ImageList$Implementation$node;
var $author$project$Material$ImageList$divImage = F2(
	function (options, nodes) {
		return A2(
			$author$project$Material$ImageList$image,
			A2(
				$elm$core$List$cons,
				$author$project$Material$ImageList$node('div'),
				options),
			nodes);
	});
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $author$project$Material$Options$id = $author$project$Internal$Options$id;
var $author$project$Internal$ImageList$Implementation$imageAspectContainer = function (options) {
	var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$ImageList$Model$defaultConfig, options);
	var config = summary.config;
	var tag = A2($elm$core$Maybe$withDefault, 'div', config.tag);
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$node(tag),
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-image-list__image-aspect-container'),
			options));
};
var $author$project$Material$ImageList$imageAspectContainer = $author$project$Internal$ImageList$Implementation$imageAspectContainer;
var $author$project$Internal$ImageList$Implementation$item = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$li,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-image-list__item'),
			options));
};
var $author$project$Material$ImageList$item = $author$project$Internal$ImageList$Implementation$item;
var $author$project$Internal$ImageList$Implementation$label = function (options) {
	var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$ImageList$Model$defaultConfig, options);
	var config = summary.config;
	var tag = A2($elm$core$Maybe$withDefault, 'span', config.tag);
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$node(tag),
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-image-list__label'),
			options));
};
var $author$project$Material$ImageList$label = $author$project$Internal$ImageList$Implementation$label;
var $author$project$Internal$ImageList$Implementation$supporting = function (options) {
	var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$ImageList$Model$defaultConfig, options);
	var config = summary.config;
	var tag = A2($elm$core$Maybe$withDefault, 'div', config.tag);
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$node(tag),
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-image-list__supporting'),
			options));
};
var $author$project$Material$ImageList$supporting = $author$project$Internal$ImageList$Implementation$supporting;
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$defs = $elm$svg$Svg$trustedNode('defs');
var $elm$svg$Svg$desc = $elm$svg$Svg$trustedNode('desc');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var $elm$svg$Svg$Attributes$fillRule = _VirtualDom_attribute('fill-rule');
var $elm$svg$Svg$Attributes$fontFamily = _VirtualDom_attribute('font-family');
var $elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var $elm$svg$Svg$Attributes$fontWeight = _VirtualDom_attribute('font-weight');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var $elm$svg$Svg$image = $elm$svg$Svg$trustedNode('image');
var $elm$svg$Svg$Attributes$letterSpacing = _VirtualDom_attribute('letter-spacing');
var $elm$svg$Svg$mask = $elm$svg$Svg$trustedNode('mask');
var $elm$svg$Svg$Attributes$mask = _VirtualDom_attribute('mask');
var $elm$svg$Svg$Attributes$opacity = _VirtualDom_attribute('opacity');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $elm$svg$Svg$pattern = $elm$svg$Svg$trustedNode('pattern');
var $elm$svg$Svg$Attributes$patternUnits = _VirtualDom_attribute('patternUnits');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $elm$svg$Svg$Attributes$rx = _VirtualDom_attribute('rx');
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $elm$svg$Svg$title = $elm$svg$Svg$trustedNode('title');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $elm$svg$Svg$tspan = $elm$svg$Svg$trustedNode('tspan');
var $elm$svg$Svg$use = $elm$svg$Svg$trustedNode('use');
var $elm$svg$Svg$Attributes$version = _VirtualDom_attribute('version');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$xlinkHref = function (value) {
	return A3(
		_VirtualDom_attributeNS,
		'http://www.w3.org/1999/xlink',
		'xlink:href',
		_VirtualDom_noJavaScriptUri(value));
};
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $author$project$App$List$view = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 180 180'),
			$elm$svg$Svg$Attributes$version('1.1')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$title,
			_List_Nil,
			_List_fromArray(
				[
					$elm$svg$Svg$text('list_180px')
				])),
			A2(
			$elm$svg$Svg$desc,
			_List_Nil,
			_List_fromArray(
				[
					$elm$svg$Svg$text('Created with Sketch.')
				])),
			A2(
			$elm$svg$Svg$defs,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-1'),
							$elm$svg$Svg$Attributes$x('0'),
							$elm$svg$Svg$Attributes$y('0'),
							$elm$svg$Svg$Attributes$width('180'),
							$elm$svg$Svg$Attributes$height('180')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-3'),
							$elm$svg$Svg$Attributes$x('0'),
							$elm$svg$Svg$Attributes$y('0'),
							$elm$svg$Svg$Attributes$width('288'),
							$elm$svg$Svg$Attributes$height('1')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$d('M12,21.35 L10.55,20.03 C5.4,15.36 2,12.28 2,8.5 C2,5.42 4.42,3 7.5,3 C9.24,3 10.91,3.81 12,5.09 C13.09,3.81 14.76,3 16.5,3 C19.58,3 22,5.42 22,8.5 C22,12.28 18.6,15.36 13.45,20.04 L12,21.35 Z'),
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-5')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$circle,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-7'),
							$elm$svg$Svg$Attributes$cx('20'),
							$elm$svg$Svg$Attributes$cy('20'),
							$elm$svg$Svg$Attributes$r('20')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$pattern,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__pattern-8'),
							$elm$svg$Svg$Attributes$patternUnits('objectBoundingBox'),
							$elm$svg$Svg$Attributes$x('-16.6666667%'),
							$elm$svg$Svg$Attributes$width('116.666667%'),
							$elm$svg$Svg$Attributes$height('100%')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$use,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__image-9'),
									$elm$svg$Svg$Attributes$transform('scale(0.0476190476,0.0476190476)')
								]),
							_List_Nil)
						])),
					A2(
					$elm$svg$Svg$image,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__image-9'),
							$elm$svg$Svg$Attributes$width('1120'),
							$elm$svg$Svg$Attributes$height('840'),
							$elm$svg$Svg$Attributes$xlinkHref('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGAAAANICAMAAAC/iGlOAAAAjVBMVEXm5ua4uLjBwcHc3Nzk5OS5ubnj4+PKysrT09O6urri4uLf39+8vLze3t7CwsLh4eHMzMzQ0NDW1tbFxcXg4OC9vb3Ozs7S0tLHx8fJycnd3d27u7vY2NjGxsbDw8PR0dHb29vIyMjPz8/V1dXU1NTLy8vZ2dnExMS/v7/Nzc3l5eXa2tq+vr7AwMDX19eLdvLAAAAnI0lEQVR4Ae3d52LTPBsGYNJFB3tvyuZNgfM/vA8+aGKlGY7tRI+siz+1sypdjyRSx7dz65Z/BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC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')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-11'),
							$elm$svg$Svg$Attributes$x('0'),
							$elm$svg$Svg$Attributes$y('0'),
							$elm$svg$Svg$Attributes$width('40'),
							$elm$svg$Svg$Attributes$height('40')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-13'),
							$elm$svg$Svg$Attributes$x('0'),
							$elm$svg$Svg$Attributes$y('0'),
							$elm$svg$Svg$Attributes$width('360'),
							$elm$svg$Svg$Attributes$height('72'),
							$elm$svg$Svg$Attributes$rx('1')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-15'),
							$elm$svg$Svg$Attributes$x('0'),
							$elm$svg$Svg$Attributes$y('0'),
							$elm$svg$Svg$Attributes$width('288'),
							$elm$svg$Svg$Attributes$height('1')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$d('M12,21.35 L10.55,20.03 C5.4,15.36 2,12.28 2,8.5 C2,5.42 4.42,3 7.5,3 C9.24,3 10.91,3.81 12,5.09 C13.09,3.81 14.76,3 16.5,3 C19.58,3 22,5.42 22,8.5 C22,12.28 18.6,15.36 13.45,20.04 L12,21.35 Z'),
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-17')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$circle,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-19'),
							$elm$svg$Svg$Attributes$cx('20'),
							$elm$svg$Svg$Attributes$cy('20'),
							$elm$svg$Svg$Attributes$r('20')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$pattern,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__pattern-20'),
							$elm$svg$Svg$Attributes$patternUnits('objectBoundingBox'),
							$elm$svg$Svg$Attributes$x('-16.6666667%'),
							$elm$svg$Svg$Attributes$width('116.666667%'),
							$elm$svg$Svg$Attributes$height('100%')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$use,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__image-21'),
									$elm$svg$Svg$Attributes$transform('scale(0.0476190476,0.0476190476)')
								]),
							_List_Nil)
						])),
					A2(
					$elm$svg$Svg$image,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__image-21'),
							$elm$svg$Svg$Attributes$width('1120'),
							$elm$svg$Svg$Attributes$height('840'),
							$elm$svg$Svg$Attributes$xlinkHref('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGAAAANICAMAAAC/iGlOAAAAjVBMVEXm5ua4uLjBwcHc3Nzk5OS5ubnj4+PKysrT09O6urri4uLf39+8vLze3t7CwsLh4eHMzMzQ0NDW1tbFxcXg4OC9vb3Ozs7S0tLHx8fJycnd3d27u7vY2NjGxsbDw8PR0dHb29vIyMjPz8/V1dXU1NTLy8vZ2dnExMS/v7/Nzc3l5eXa2tq+vr7AwMDX19eLdvLAAAAnI0lEQVR4Ae3d52LTPBsGYNJFB3tvyuZNgfM/vA8+aGKlGY7tRI+siz+1sypdjyRSx7dz65Z/BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC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')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-23'),
							$elm$svg$Svg$Attributes$x('0'),
							$elm$svg$Svg$Attributes$y('0'),
							$elm$svg$Svg$Attributes$width('40'),
							$elm$svg$Svg$Attributes$height('40')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-25'),
							$elm$svg$Svg$Attributes$x('0'),
							$elm$svg$Svg$Attributes$y('0'),
							$elm$svg$Svg$Attributes$width('360'),
							$elm$svg$Svg$Attributes$height('72'),
							$elm$svg$Svg$Attributes$rx('1')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-27'),
							$elm$svg$Svg$Attributes$x('0'),
							$elm$svg$Svg$Attributes$y('0'),
							$elm$svg$Svg$Attributes$width('288'),
							$elm$svg$Svg$Attributes$height('1')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$d('M12,21.35 L10.55,20.03 C5.4,15.36 2,12.28 2,8.5 C2,5.42 4.42,3 7.5,3 C9.24,3 10.91,3.81 12,5.09 C13.09,3.81 14.76,3 16.5,3 C19.58,3 22,5.42 22,8.5 C22,12.28 18.6,15.36 13.45,20.04 L12,21.35 Z'),
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-29')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$circle,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-31'),
							$elm$svg$Svg$Attributes$cx('20'),
							$elm$svg$Svg$Attributes$cy('20'),
							$elm$svg$Svg$Attributes$r('20')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$pattern,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__pattern-32'),
							$elm$svg$Svg$Attributes$patternUnits('objectBoundingBox'),
							$elm$svg$Svg$Attributes$x('-16.6666667%'),
							$elm$svg$Svg$Attributes$width('116.666667%'),
							$elm$svg$Svg$Attributes$height('100%')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$use,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__image-33'),
									$elm$svg$Svg$Attributes$transform('scale(0.0476190476,0.0476190476)')
								]),
							_List_Nil)
						])),
					A2(
					$elm$svg$Svg$image,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__image-33'),
							$elm$svg$Svg$Attributes$width('1120'),
							$elm$svg$Svg$Attributes$height('840'),
							$elm$svg$Svg$Attributes$xlinkHref('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGAAAANICAMAAAC/iGlOAAAAjVBMVEXm5ua4uLjBwcHc3Nzk5OS5ubnj4+PKysrT09O6urri4uLf39+8vLze3t7CwsLh4eHMzMzQ0NDW1tbFxcXg4OC9vb3Ozs7S0tLHx8fJycnd3d27u7vY2NjGxsbDw8PR0dHb29vIyMjPz8/V1dXU1NTLy8vZ2dnExMS/v7/Nzc3l5eXa2tq+vr7AwMDX19eLdvLAAAAnI0lEQVR4Ae3d52LTPBsGYNJFB3tvyuZNgfM/vA8+aGKlGY7tRI+siz+1sypdjyRSx7dz65Z/BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC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')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-35'),
							$elm$svg$Svg$Attributes$x('0'),
							$elm$svg$Svg$Attributes$y('0'),
							$elm$svg$Svg$Attributes$width('40'),
							$elm$svg$Svg$Attributes$height('40')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__path-37'),
							$elm$svg$Svg$Attributes$x('0'),
							$elm$svg$Svg$Attributes$y('0'),
							$elm$svg$Svg$Attributes$width('360'),
							$elm$svg$Svg$Attributes$height('72'),
							$elm$svg$Svg$Attributes$rx('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('__XIrMGSk__list_180px'),
					$elm$svg$Svg$Attributes$stroke('none'),
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$fillRule('evenodd')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$mask,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-2'),
							$elm$svg$Svg$Attributes$fill('white')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$use,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-1')
								]),
							_List_Nil)
						])),
					A2(
					$elm$svg$Svg$use,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__Mask'),
							$elm$svg$Svg$Attributes$fill('#FAFAFA'),
							$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-1')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__List-/-Two-Line-/-Avatar'),
							$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-2)')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$g,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$transform('translate(0.000000, -18.000000)')
								]),
							_List_fromArray(
								[
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__Divider-/-Dark'),
											$elm$svg$Svg$Attributes$transform('translate(72.000000, 71.000000)')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-4'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-3')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Surface')
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Color-/-Icons-/-Black-/-Active'),
													$elm$svg$Svg$Attributes$opacity('0.12'),
													$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-4)'),
													$elm$svg$Svg$Attributes$fill('#000000'),
													$elm$svg$Svg$Attributes$fillRule('evenodd')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$rect,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__Rectangle-13'),
															$elm$svg$Svg$Attributes$opacity('0.87'),
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('0'),
															$elm$svg$Svg$Attributes$width('288'),
															$elm$svg$Svg$Attributes$height('1')
														]),
													_List_Nil)
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__Icon-/-Favorite-/-Fill'),
											$elm$svg$Svg$Attributes$transform('translate(320.000000, 24.000000)')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-6'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-5')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Mask'),
													$elm$svg$Svg$Attributes$fillRule('nonzero')
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Color-/-Icons-/-Black-/-Inactive'),
													$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-6)'),
													$elm$svg$Svg$Attributes$fill('#000000'),
													$elm$svg$Svg$Attributes$fillRule('evenodd'),
													$elm$svg$Svg$Attributes$opacity('0.54')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$rect,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__Rectangle'),
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('0'),
															$elm$svg$Svg$Attributes$width('24'),
															$elm$svg$Svg$Attributes$height('24')
														]),
													_List_Nil)
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Text-/-Body-2-/-Selected-/-On-Surface-/-Medium-Emphasis-/-Left-'),
											$elm$svg$Svg$Attributes$transform('translate(72.000000, 38.000000)'),
											$elm$svg$Svg$Attributes$fillOpacity('0.6'),
											$elm$svg$Svg$Attributes$fontFamily('Roboto-Regular, Roboto'),
											$elm$svg$Svg$Attributes$fontSize('14'),
											$elm$svg$Svg$Attributes$fontWeight('normal'),
											$elm$svg$Svg$Attributes$letterSpacing('0.25')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$text_,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Body-2'),
													$elm$svg$Svg$Attributes$fill('#000000')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$tspan,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('13')
														]),
													_List_fromArray(
														[
															$elm$svg$Svg$text('Body 2')
														]))
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Text-/-Subtitle-1-/-Selected-/-On-Surface-/-High-Emphasis-/-Left'),
											$elm$svg$Svg$Attributes$transform('translate(72.000000, 14.000000)'),
											$elm$svg$Svg$Attributes$fillOpacity('0.87'),
											$elm$svg$Svg$Attributes$fontFamily('Roboto-Regular, Roboto'),
											$elm$svg$Svg$Attributes$fontSize('16'),
											$elm$svg$Svg$Attributes$fontWeight('normal'),
											$elm$svg$Svg$Attributes$letterSpacing('0.150000006')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$text_,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Subtitle-1'),
													$elm$svg$Svg$Attributes$fill('#000000')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$tspan,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('15')
														]),
													_List_fromArray(
														[
															$elm$svg$Svg$text('Subtitle 1')
														]))
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__Images-/-Avatar-/-Circular'),
											$elm$svg$Svg$Attributes$transform('translate(16.000000, 16.000000)')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-10'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-7')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$use,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Mask'),
													$elm$svg$Svg$Attributes$fill('url(#__XIrMGSk__pattern-8)'),
													$elm$svg$Svg$Attributes$fillRule('evenodd'),
													$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-7')
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Image-Treatments-/-Tonal-/-Primary'),
													$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-10)')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$mask,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-12'),
															$elm$svg$Svg$Attributes$fill('white')
														]),
													_List_fromArray(
														[
															A2(
															$elm$svg$Svg$use,
															_List_fromArray(
																[
																	$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-11')
																]),
															_List_Nil)
														])),
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__Surface'),
															$elm$svg$Svg$Attributes$fillOpacity('0'),
															$elm$svg$Svg$Attributes$fill('#6202EE'),
															$elm$svg$Svg$Attributes$fillRule('evenodd'),
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-11')
														]),
													_List_Nil)
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__List-/-State-/-Resting')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-14'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-13')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Surface')
												]),
											_List_Nil)
										]))
								]))
						])),
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__List-/-Two-Line-/-Avatar'),
							$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-2)')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$g,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$transform('translate(0.000000, 54.000000)')
								]),
							_List_fromArray(
								[
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__Divider-/-Dark'),
											$elm$svg$Svg$Attributes$transform('translate(72.000000, 71.000000)')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-16'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-15')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Surface')
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Color-/-Icons-/-Black-/-Active'),
													$elm$svg$Svg$Attributes$opacity('0.12'),
													$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-16)'),
													$elm$svg$Svg$Attributes$fill('#000000'),
													$elm$svg$Svg$Attributes$fillRule('evenodd')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$rect,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__Rectangle-13'),
															$elm$svg$Svg$Attributes$opacity('0.87'),
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('0'),
															$elm$svg$Svg$Attributes$width('288'),
															$elm$svg$Svg$Attributes$height('1')
														]),
													_List_Nil)
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__Icon-/-Favorite-/-Fill'),
											$elm$svg$Svg$Attributes$transform('translate(320.000000, 24.000000)')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-18'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-17')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Mask'),
													$elm$svg$Svg$Attributes$fillRule('nonzero')
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Color-/-Icons-/-Black-/-Inactive'),
													$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-18)'),
													$elm$svg$Svg$Attributes$fill('#000000'),
													$elm$svg$Svg$Attributes$fillRule('evenodd'),
													$elm$svg$Svg$Attributes$opacity('0.54')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$rect,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__Rectangle'),
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('0'),
															$elm$svg$Svg$Attributes$width('24'),
															$elm$svg$Svg$Attributes$height('24')
														]),
													_List_Nil)
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Text-/-Body-2-/-Selected-/-On-Surface-/-Medium-Emphasis-/-Left-'),
											$elm$svg$Svg$Attributes$transform('translate(72.000000, 38.000000)'),
											$elm$svg$Svg$Attributes$fillOpacity('0.6'),
											$elm$svg$Svg$Attributes$fontFamily('Roboto-Regular, Roboto'),
											$elm$svg$Svg$Attributes$fontSize('14'),
											$elm$svg$Svg$Attributes$fontWeight('normal'),
											$elm$svg$Svg$Attributes$letterSpacing('0.25')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$text_,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Body-2'),
													$elm$svg$Svg$Attributes$fill('#000000')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$tspan,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('13')
														]),
													_List_fromArray(
														[
															$elm$svg$Svg$text('Body 2')
														]))
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Text-/-Subtitle-1-/-Selected-/-On-Surface-/-High-Emphasis-/-Left'),
											$elm$svg$Svg$Attributes$transform('translate(72.000000, 14.000000)'),
											$elm$svg$Svg$Attributes$fillOpacity('0.87'),
											$elm$svg$Svg$Attributes$fontFamily('Roboto-Regular, Roboto'),
											$elm$svg$Svg$Attributes$fontSize('16'),
											$elm$svg$Svg$Attributes$fontWeight('normal'),
											$elm$svg$Svg$Attributes$letterSpacing('0.150000006')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$text_,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Subtitle-1'),
													$elm$svg$Svg$Attributes$fill('#000000')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$tspan,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('15')
														]),
													_List_fromArray(
														[
															$elm$svg$Svg$text('Subtitle 1')
														]))
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__Images-/-Avatar-/-Circular'),
											$elm$svg$Svg$Attributes$transform('translate(16.000000, 16.000000)')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-22'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-19')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$use,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Mask'),
													$elm$svg$Svg$Attributes$fill('url(#__XIrMGSk__pattern-20)'),
													$elm$svg$Svg$Attributes$fillRule('evenodd'),
													$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-19')
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Image-Treatments-/-Tonal-/-Primary'),
													$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-22)')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$mask,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-24'),
															$elm$svg$Svg$Attributes$fill('white')
														]),
													_List_fromArray(
														[
															A2(
															$elm$svg$Svg$use,
															_List_fromArray(
																[
																	$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-23')
																]),
															_List_Nil)
														])),
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__Surface'),
															$elm$svg$Svg$Attributes$fillOpacity('0'),
															$elm$svg$Svg$Attributes$fill('#6202EE'),
															$elm$svg$Svg$Attributes$fillRule('evenodd'),
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-23')
														]),
													_List_Nil)
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__List-/-State-/-Resting')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-26'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-25')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Surface')
												]),
											_List_Nil)
										]))
								]))
						])),
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('__XIrMGSk__List-/-Two-Line-/-Avatar'),
							$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-2)')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$g,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$transform('translate(0.000000, 126.000000)')
								]),
							_List_fromArray(
								[
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__Divider-/-Dark'),
											$elm$svg$Svg$Attributes$transform('translate(72.000000, 71.000000)')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-28'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-27')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Surface')
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Color-/-Icons-/-Black-/-Active'),
													$elm$svg$Svg$Attributes$opacity('0.12'),
													$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-28)'),
													$elm$svg$Svg$Attributes$fill('#000000'),
													$elm$svg$Svg$Attributes$fillRule('evenodd')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$rect,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__Rectangle-13'),
															$elm$svg$Svg$Attributes$opacity('0.87'),
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('0'),
															$elm$svg$Svg$Attributes$width('288'),
															$elm$svg$Svg$Attributes$height('1')
														]),
													_List_Nil)
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__Icon-/-Favorite-/-Fill'),
											$elm$svg$Svg$Attributes$transform('translate(320.000000, 24.000000)')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-30'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-29')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Mask'),
													$elm$svg$Svg$Attributes$fillRule('nonzero')
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Color-/-Icons-/-Black-/-Inactive'),
													$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-30)'),
													$elm$svg$Svg$Attributes$fill('#000000'),
													$elm$svg$Svg$Attributes$fillRule('evenodd'),
													$elm$svg$Svg$Attributes$opacity('0.54')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$rect,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__Rectangle'),
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('0'),
															$elm$svg$Svg$Attributes$width('24'),
															$elm$svg$Svg$Attributes$height('24')
														]),
													_List_Nil)
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Text-/-Body-2-/-Selected-/-On-Surface-/-Medium-Emphasis-/-Left-'),
											$elm$svg$Svg$Attributes$transform('translate(72.000000, 38.000000)'),
											$elm$svg$Svg$Attributes$fillOpacity('0.6'),
											$elm$svg$Svg$Attributes$fontFamily('Roboto-Regular, Roboto'),
											$elm$svg$Svg$Attributes$fontSize('14'),
											$elm$svg$Svg$Attributes$fontWeight('normal'),
											$elm$svg$Svg$Attributes$letterSpacing('0.25')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$text_,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Body-2'),
													$elm$svg$Svg$Attributes$fill('#000000')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$tspan,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('13')
														]),
													_List_fromArray(
														[
															$elm$svg$Svg$text('Body 2')
														]))
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__?-/-Text-/-Subtitle-1-/-Selected-/-On-Surface-/-High-Emphasis-/-Left'),
											$elm$svg$Svg$Attributes$transform('translate(72.000000, 14.000000)'),
											$elm$svg$Svg$Attributes$fillOpacity('0.87'),
											$elm$svg$Svg$Attributes$fontFamily('Roboto-Regular, Roboto'),
											$elm$svg$Svg$Attributes$fontSize('16'),
											$elm$svg$Svg$Attributes$fontWeight('normal'),
											$elm$svg$Svg$Attributes$letterSpacing('0.150000006')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$text_,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Subtitle-1'),
													$elm$svg$Svg$Attributes$fill('#000000')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$tspan,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$x('0'),
															$elm$svg$Svg$Attributes$y('15')
														]),
													_List_fromArray(
														[
															$elm$svg$Svg$text('Subtitle 1')
														]))
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__Images-/-Avatar-/-Circular'),
											$elm$svg$Svg$Attributes$transform('translate(16.000000, 16.000000)')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-34'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-31')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$use,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Mask'),
													$elm$svg$Svg$Attributes$fill('url(#__XIrMGSk__pattern-32)'),
													$elm$svg$Svg$Attributes$fillRule('evenodd'),
													$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-31')
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Image-Treatments-/-Tonal-/-Primary'),
													$elm$svg$Svg$Attributes$mask('url(#__XIrMGSk__mask-34)')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$mask,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-36'),
															$elm$svg$Svg$Attributes$fill('white')
														]),
													_List_fromArray(
														[
															A2(
															$elm$svg$Svg$use,
															_List_fromArray(
																[
																	$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-35')
																]),
															_List_Nil)
														])),
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$id('__XIrMGSk__Surface'),
															$elm$svg$Svg$Attributes$fillOpacity('0'),
															$elm$svg$Svg$Attributes$fill('#6202EE'),
															$elm$svg$Svg$Attributes$fillRule('evenodd'),
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-35')
														]),
													_List_Nil)
												]))
										])),
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('__XIrMGSk__List-/-State-/-Resting')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$mask,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__mask-38'),
													$elm$svg$Svg$Attributes$fill('white')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$use,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$xlinkHref('#__XIrMGSk__path-37')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('__XIrMGSk__Surface')
												]),
											_List_Nil)
										]))
								]))
						]))
				]))
		]));
var $author$project$Internal$ImageList$Implementation$cssClasses = {masonry: 'mdc-image-list--masonry', withTextProtection: 'mdc-image-list--with-text-protection'};
var $author$project$Internal$ImageList$Implementation$imageList = function (options) {
	var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$ImageList$Model$defaultConfig, options);
	var config = summary.config;
	return A4(
		$author$project$Internal$Options$apply,
		summary,
		$elm$html$Html$ul,
		_List_fromArray(
			[
				$author$project$Internal$Options$cs('mdc-image-list'),
				A2(
				$author$project$Internal$Options$when,
				config.masonry,
				$author$project$Internal$Options$cs($author$project$Internal$ImageList$Implementation$cssClasses.masonry)),
				A2(
				$author$project$Internal$Options$when,
				config.withTextProtection,
				$author$project$Internal$Options$cs($author$project$Internal$ImageList$Implementation$cssClasses.withTextProtection))
			]),
		_List_Nil);
};
var $author$project$Internal$ImageList$Implementation$view = $author$project$Internal$ImageList$Implementation$imageList;
var $author$project$Material$ImageList$view = $author$project$Internal$ImageList$Implementation$view;
var $author$project$App$Startpage$view = F3(
	function (lift, page, model) {
		return A3(
			$author$project$Material$Options$styled,
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					page.topappbar('Example'),
					A3(
					$author$project$Material$Options$styled,
					$elm$html$Html$nav,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$author$project$Material$ImageList$view,
							_List_fromArray(
								[
									$author$project$Material$Options$id('catalog-image-list')
								]),
							A2(
								$elm$core$List$map,
								function (_v0) {
									var url = _v0.url;
									var title = _v0.title;
									var subtitle = _v0.subtitle;
									var icon = _v0.icon;
									return A2(
										$author$project$Material$ImageList$item,
										_List_Nil,
										_List_fromArray(
											[
												A3(
												$author$project$Material$Options$styled,
												$elm$html$Html$a,
												_List_fromArray(
													[
														$author$project$Material$Options$attribute(
														$elm$html$Html$Attributes$href(
															$author$project$App$Url$toString(url))),
														A2($author$project$Material$Options$css, 'text-decoration', 'none')
													]),
												_List_fromArray(
													[
														A2(
														$author$project$Material$ImageList$imageAspectContainer,
														_List_fromArray(
															[
																A2($author$project$Material$Options$css, 'padding-bottom', '100%'),
																A2($author$project$Material$Options$css, 'background-color', '#f5f5f5')
															]),
														_List_fromArray(
															[
																A2(
																$author$project$Material$ImageList$divImage,
																_List_Nil,
																_List_fromArray(
																	[icon]))
															])),
														A2(
														$author$project$Material$ImageList$supporting,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$author$project$Material$ImageList$label,
																_List_fromArray(
																	[
																		$author$project$Material$Options$cs('catalog-image-list-label')
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text(title)
																	]))
															]))
													]))
											]));
								},
								_List_fromArray(
									[
										{icon: $author$project$App$List$view, subtitle: 'Keystores Subtitle', title: 'Keystores', url: $author$project$App$Url$SecretPage}
									])))
						]))
				]));
	});
var $author$project$Main$view_ = function (model) {
	var bar = A5($author$project$App$Page$topappbar, $author$project$Main$Mdc, 'page-topappbar', model.mdc, $author$project$Main$ToggleDrawer, model.url);
	var page = {
		body: function (nodes) {
			return A3(
				$author$project$Material$Options$styled,
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($author$project$Material$Options$css, 'display', 'flex'),
						A2($author$project$Material$Options$css, 'flex-flow', 'column'),
						A2($author$project$Material$Options$css, 'height', '100%'),
						$author$project$Material$Typography$typography
					]),
				_List_fromArray(
					[
						bar('EKMS'),
						A3(
						$author$project$Material$Options$styled,
						$elm$html$Html$div,
						_List_fromArray(
							[
								$author$project$Material$Options$cs('demo-panel'),
								A2($author$project$Material$Options$css, 'display', 'flex'),
								A2($author$project$Material$Options$css, 'position', 'relative'),
								A2(
								$author$project$Material$Options$when,
								model.useDismissibleDrawer,
								A2($author$project$Material$Options$css, 'height', '100vh')),
								A2(
								$author$project$Material$Options$when,
								model.useDismissibleDrawer,
								A2($author$project$Material$Options$css, 'overflow', 'hidden'))
							]),
						_List_fromArray(
							[
								model.useDismissibleDrawer ? A8($author$project$App$Page$drawer, $author$project$Main$Mdc, 'page-drawer', model.mdc, $author$project$Main$CloseDrawer, $author$project$Main$SelectDrawerItem, model.url, model.useDismissibleDrawer, model.is_drawer_open) : A2(
								$elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										A8($author$project$App$Page$drawer, $author$project$Main$Mdc, 'page-drawer', model.mdc, $author$project$Main$CloseDrawer, $author$project$Main$SelectDrawerItem, model.url, model.useDismissibleDrawer, model.is_drawer_open),
										A2(
										$author$project$Material$Drawer$Modal$scrim,
										_List_fromArray(
											[
												$author$project$Material$Options$onClick($author$project$Main$CloseDrawer)
											]),
										_List_Nil)
									])),
								A3(
								$author$project$Material$Options$styled,
								$elm$html$Html$div,
								_List_fromArray(
									[
										$author$project$Material$Options$cs('demo-content'),
										$author$project$Material$Drawer$Dismissible$appContent,
										A2($author$project$Material$TopAppBar$onScroll, $author$project$Main$Mdc, 'page-topappbar'),
										$author$project$Material$TopAppBar$fixedAdjust,
										A2($author$project$Material$Options$css, 'width', '100%'),
										A2($author$project$Material$Options$css, 'display', 'flex'),
										A2($author$project$Material$Options$css, 'justify-content', 'flex-start'),
										A2($author$project$Material$Options$css, 'flex-direction', 'column'),
										A2($author$project$Material$Options$css, 'align-items', 'center'),
										A2($author$project$Material$Options$css, 'overflow', 'auto')
									]),
								_List_fromArray(
									[
										A3(
										$author$project$Material$Options$styled,
										$elm$html$Html$div,
										_List_fromArray(
											[
												$author$project$Material$Options$cs('demo-content-transition'),
												A2($author$project$Material$Options$css, 'width', '100%'),
												A2($author$project$Material$Options$css, 'max-width', '1200px')
											]),
										_List_fromArray(
											[
												A2($author$project$App$Page$componentCatalogPanel, model.transition, nodes)
											]))
									]))
							]))
					]));
		},
		navigate: $author$project$Main$Navigate,
		topappbar: bar
	};
	var _v0 = model.url;
	switch (_v0.$) {
		case 'StartPage':
			return A3($author$project$App$Startpage$view, $author$project$Main$StartPageMsg, page, model.startpage);
		case 'Error404':
			var requestedHash = _v0.a;
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$author$project$Material$Options$styled,
						$elm$html$Html$h1,
						_List_fromArray(
							[$author$project$Material$Typography$display4]),
						_List_fromArray(
							[
								$elm$html$Html$text('404')
							])),
						$elm$html$Html$text(requestedHash)
					]));
		default:
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Hello World')
					]));
	}
};
var $author$project$Main$view = F3(
	function (title, _v0, model) {
		var onSignOut = _v0.onSignOut;
		var buttons = _v0.buttons;
		var sn = _v0.sn;
		var body = function () {
			var _v1 = _Utils_Tuple2(model.id_token, model.profile);
			if (_v1.b.$ === 'Nothing') {
				if (_v1.a.$ === 'Nothing') {
					var _v2 = _v1.a;
					var _v3 = _v1.b;
					return _List_fromArray(
						[
							A2(
							$author$project$Main$viewBody,
							model,
							$author$project$Main$viewLogin(
								{buttons: buttons, sn: sn}))
						]);
				} else {
					var token = _v1.a.a;
					var _v4 = _v1.b;
					return _List_fromArray(
						[
							A2(
							$author$project$Main$viewBody,
							model,
							$author$project$Main$viewLogin(
								{buttons: buttons, sn: sn}))
						]);
				}
			} else {
				var profile = _v1.b.a;
				return _List_fromArray(
					[
						$author$project$Main$view_(model)
					]);
			}
		}();
		return {body: body, title: title};
	});
var $author$project$Main$attrLogo = function (provider) {
	var data = 'data:image/png;base64,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';
	return A2($elm$html$Html$Attributes$style, 'background', '0 center no-repeat url(\'' + (data + '\')'));
};
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$Main$Profile = F2(
	function (name, picture) {
		return {name: name, picture: picture};
	});
var $author$project$Main$configurationFor = function (provider) {
	var defaultHttpsUrl = {fragment: $elm$core$Maybe$Nothing, host: '', path: '', port_: $elm$core$Maybe$Nothing, protocol: $elm$url$Url$Https, query: $elm$core$Maybe$Nothing};
	return {
		authorizationEndpoint: _Utils_update(
			defaultHttpsUrl,
			{host: 'accounts.google.com', path: '/o/oauth2/v2/auth'}),
		clientId: '55433631652-u1q925imhoo270ub357t599su0qkjh37.apps.googleusercontent.com',
		profileDecoder: A3(
			$elm$json$Json$Decode$map2,
			$author$project$Main$Profile,
			A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
			A2($elm$json$Json$Decode$field, 'picture', $elm$json$Json$Decode$string)),
		profileEndpoint: _Utils_update(
			defaultHttpsUrl,
			{host: 'openidconnect.googleapis.com', path: '/v1/userinfo'}),
		provider: $author$project$Main$Google,
		scope: _List_fromArray(
			['openid']),
		secret: 'cYZ6apiCwRYg3EOSjZVUXwzA',
		tokenEndpoint: _Utils_update(
			defaultHttpsUrl,
			{host: 'oauth2.googleapis.com', path: '/token'})
	};
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Main$viewSignInButton = F2(
	function (provider, onSignIn) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$author$project$Main$attrLogo(provider),
					A2($elm$html$Html$Attributes$style, 'background-size', '3em'),
					A2($elm$html$Html$Attributes$style, 'border', 'none'),
					A2($elm$html$Html$Attributes$style, 'box-shadow', 'rgba(0,0,0,0.25) 0px 2px 4px 0px'),
					A2($elm$html$Html$Attributes$style, 'color', '#757575'),
					A2($elm$html$Html$Attributes$style, 'font-size', '24px'),
					A2($elm$html$Html$Attributes$style, 'outline', 'none'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					A2($elm$html$Html$Attributes$style, 'height', '3em'),
					A2($elm$html$Html$Attributes$style, 'width', '10em'),
					A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
					A2($elm$html$Html$Attributes$style, 'padding', '0 1em 0 4em'),
					A2($elm$html$Html$Attributes$style, 'margin', '0.5em 0'),
					$elm$html$Html$Events$onClick(
					onSignIn(
						$author$project$Main$configurationFor(provider)))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('Sign in')
				]));
	});
var $author$project$Main$main = $elm$browser$Browser$application(
	{
		init: $author$project$Main$init,
		onUrlChange: $author$project$Main$UrlChanged,
		onUrlRequest: $author$project$Main$UrlRequested,
		subscriptions: $author$project$Main$subscriptions,
		update: $author$project$Main$update,
		view: A2(
			$author$project$Main$view,
			'Example App',
			{
				buttons: _List_fromArray(
					[
						A2($author$project$Main$viewSignInButton, $author$project$Main$Google, $author$project$Main$Authorize)
					]),
				onSignOut: $author$project$Main$SignOutRequested,
				sn: $author$project$Main$sideNote
			})
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (randomBytes) {
			return $elm$json$Json$Decode$succeed(
				{randomBytes: randomBytes});
		},
		A2($elm$json$Json$Decode$field, 'randomBytes', $elm$json$Json$Decode$string)))(0)}});}(this));