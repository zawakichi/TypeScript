//// [readonlyArraysAndTuples.ts]
type T10 = string[];
type T11 = Array<string>;
type T12 = readonly string[];
type T13 = ReadonlyArray<string>;

type T20 = [number, number];
type T21 = readonly [number, number];

type T30 = readonly string;  // Error
type T31<T> = readonly T;  // Error
type T32 = readonly readonly string[];  // Error

function f1(ma: string[], ra: readonly string[], mt: [string, string], rt: readonly [string, string]) {
    ma = ra;  // Error
    ma = mt;
    ma = rt;  // Error
    ra = ma;
    ra = mt;
    ra = rt;
    mt = ma;  // Error
    mt = ra;  // Error
    mt = rt;  // Error
    rt = ma;  // Error
    rt = ra;  // Error
    rt = mt;
}


//// [readonlyArraysAndTuples.js]
"use strict";
function f1(ma, ra, mt, rt) {
    ma = ra; // Error
    ma = mt;
    ma = rt; // Error
    ra = ma;
    ra = mt;
    ra = rt;
    mt = ma; // Error
    mt = ra; // Error
    mt = rt; // Error
    rt = ma; // Error
    rt = ra; // Error
    rt = mt;
}


//// [readonlyArraysAndTuples.d.ts]
declare type T10 = string[];
declare type T11 = Array<string>;
declare type T12 = readonly string[];
declare type T13 = ReadonlyArray<string>;
declare type T20 = [number, number];
declare type T21 = readonly [number, number];
declare type T30 = readonly string;
declare type T31<T> = readonly T;
declare type T32 = readonly readonly string[];
declare function f1(ma: string[], ra: readonly string[], mt: [string, string], rt: readonly [string, string]): void;
