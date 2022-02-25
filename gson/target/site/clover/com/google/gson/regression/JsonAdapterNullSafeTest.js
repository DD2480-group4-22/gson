var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":61,"id":14145,"methods":[{"el":32,"sc":3,"sl":29},{"el":37,"sc":3,"sl":34}],"name":"JsonAdapterNullSafeTest","sl":26},{"el":60,"id":14151,"methods":[{"el":44,"sc":5,"sl":42}],"name":"JsonAdapterNullSafeTest.Device","sl":40},{"el":59,"id":14153,"methods":[{"el":58,"sc":7,"sl":51}],"name":"JsonAdapterNullSafeTest.Device.JsonAdapterFactory","sl":46}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_298":{"methods":[{"sl":34},{"sl":51}],"name":"testNullSafeBugDeserialize","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":52},{"sl":56},{"sl":57}]},"test_598":{"methods":[{"sl":29},{"sl":42},{"sl":51}],"name":"testNullSafeBugSerialize","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":43},{"sl":52},{"sl":53},{"sl":54}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [598], [598], [598], [], [], [298], [298], [298], [], [], [], [], [], [598], [598], [], [], [], [], [], [], [], [298, 598], [298, 598], [598], [598], [], [298], [298], [], [], [], []]
