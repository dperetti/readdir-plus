#!/bin/sh

SCRIPT_PATH=`dirname $0`
nodeunit `find ${SCRIPT_PATH}/tests/ -name "*.test.js"`