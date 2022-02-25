var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":50,"id":13113,"methods":[{"el":32,"sc":3,"sl":28},{"el":38,"sc":3,"sl":34},{"el":49,"sc":3,"sl":40}],"name":"LazilyParsedNumberTest","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_170":{"methods":[{"sl":28}],"name":"testHashCode","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":31}]},"test_326":{"methods":[{"sl":34}],"name":"testEquals","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37}]},"test_925":{"methods":[{"sl":40}],"name":"testJavaSerialization","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":46},{"sl":47},{"sl":48}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [170], [170], [170], [170], [], [], [326], [326], [326], [326], [], [], [925], [925], [925], [925], [925], [], [925], [925], [925], [], []]
