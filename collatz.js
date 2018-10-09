/*! collatz v0.0.0 - MIT license */
// fix-issue

'use strict';

var collatz = function (x) {
  // your code goes here
  if(x%2!=0)
  {
    return ((3*x)+1);
  }
  else{
   return x/2;
  }
}

if ( typeof module !== "undefined" ) {
  module.exports = collatz;
}
