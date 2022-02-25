var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":119,"id":6846,"methods":[{"el":41,"sc":3,"sl":36},{"el":49,"sc":3,"sl":43},{"el":57,"sc":3,"sl":51},{"el":63,"sc":3,"sl":59},{"el":68,"sc":3,"sl":65},{"el":72,"sc":3,"sl":70},{"el":80,"sc":3,"sl":74},{"el":91,"sc":3,"sl":82},{"el":99,"sc":3,"sl":93},{"el":118,"sc":3,"sl":101}],"name":"JsonParserTest","sl":34}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1019":{"methods":[{"sl":70}],"name":"testParseUnquotedSingleWordStringFails","pass":true,"statements":[{"sl":71}]},"test_1047":{"methods":[{"sl":43}],"name":"testParseUnquotedStringArrayFails","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48}]},"test_1055":{"methods":[{"sl":74}],"name":"testParseUnquotedMultiWordStringFails","pass":true,"statements":[{"sl":75},{"sl":76},{"sl":77}]},"test_152":{"methods":[{"sl":101}],"name":"testReadWriteTwoObjects","pass":true,"statements":[{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117}]},"test_277":{"methods":[{"sl":93}],"name":"testParseReader","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98}]},"test_466":{"methods":[{"sl":36}],"name":"testParseInvalidJson","pass":true,"statements":[{"sl":37},{"sl":38}]},"test_548":{"methods":[{"sl":59}],"name":"testParseEmptyString","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":62}]},"test_595":{"methods":[{"sl":65}],"name":"testParseEmptyWhitespaceInput","pass":true,"statements":[{"sl":66},{"sl":67}]},"test_685":{"methods":[{"sl":51}],"name":"testParseString","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_836":{"methods":[{"sl":82}],"name":"testParseMixedArray","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85},{"sl":87},{"sl":88},{"sl":89},{"sl":90}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [466], [466], [466], [], [], [], [], [1047], [1047], [1047], [1047], [1047], [1047], [], [], [685], [685], [685], [685], [685], [685], [], [], [548], [548], [548], [548], [], [], [595], [595], [595], [], [], [1019], [1019], [], [], [1055], [1055], [1055], [1055], [], [], [], [], [836], [836], [836], [836], [], [836], [836], [836], [836], [], [], [277], [277], [277], [277], [277], [277], [], [], [152], [152], [152], [152], [152], [152], [152], [152], [], [152], [152], [152], [152], [152], [152], [152], [152], [], []]
