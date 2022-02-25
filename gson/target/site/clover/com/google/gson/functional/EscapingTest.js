var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":92,"id":9146,"methods":[{"el":39,"sc":3,"sl":35},{"el":47,"sc":3,"sl":41},{"el":59,"sc":3,"sl":49},{"el":70,"sc":3,"sl":61},{"el":83,"sc":3,"sl":72},{"el":91,"sc":3,"sl":85}],"name":"EscapingTest","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_430":{"methods":[{"sl":72}],"name":"testGsonAcceptsEscapedAndNonEscapedJsonDeserialization","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":81},{"sl":82}]},"test_600":{"methods":[{"sl":85}],"name":"testGsonDoubleDeserialization","pass":true,"statements":[{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90}]},"test_644":{"methods":[{"sl":61}],"name":"testEscapingObjectFields","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":68},{"sl":69}]},"test_668":{"methods":[{"sl":41}],"name":"testEscapingQuotesInStringArray","pass":true,"statements":[{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46}]},"test_886":{"methods":[{"sl":49}],"name":"testEscapeAllHtmlCharacters","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":57}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [668], [668], [668], [668], [668], [668], [], [], [886], [886], [886], [886], [886], [886], [886], [886], [886], [], [], [], [644], [644], [644], [644], [644], [644], [], [644], [644], [], [], [430], [430], [430], [], [430], [430], [430], [430], [], [430], [430], [], [], [600], [600], [600], [600], [600], [600], [], []]
