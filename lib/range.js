"use strict";

var c = require("rho-contracts");

// Returns an array of integers starting at a, incrementing by step, ending before b.
//
// Example:
//
// > var range = require("range").range;
// > range(0, 10);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var range = c.fun({ a: c.number }, { b: c.optional(c.number) }, { step: c.optional(c.number) })
      .returns(c.array(c.number))
      .wrap(
        function(a, b, step) {
          if (b === undefined && step === undefined) {
            b = a;
            a = 0;
          }

          step = step || 1;

          var x, r = [];

          for (x = a; (b - x) * step > 0; x += step) {
            r.push(x);
          }

          return r;
        }
      );

exports.range = range;
