var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":68,"id":1086,"methods":[{"el":42,"sc":5,"sl":37},{"el":58,"sc":5,"sl":53}],"name":"LongSerializationPolicy","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1061":{"methods":[{"sl":53}],"name":"testStringLongSerializationNull","pass":true,"statements":[{"sl":54},{"sl":55}]},"test_31":{"methods":[{"sl":53}],"name":"testStringLongSerialization","pass":true,"statements":[{"sl":54},{"sl":57}]},"test_347":{"methods":[{"sl":37}],"name":"testDefaultLongSerialization","pass":true,"statements":[{"sl":38},{"sl":41}]},"test_40":{"methods":[{"sl":37}],"name":"testDefaultLongSerializationNull","pass":true,"statements":[{"sl":38},{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [40, 347], [40, 347], [40], [], [347], [], [], [], [], [], [], [], [], [], [], [], [31, 1061], [31, 1061], [1061], [], [31], [], [], [], [], [], [], [], [], [], [], []]
