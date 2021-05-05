#!/bin/sh 

babel src --out-dir lib --root-mode upward --ignore '**/*.test.js','**/__tests__' --watch --verbose 