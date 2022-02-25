var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":72,"id":9620,"methods":[{"el":40,"sc":3,"sl":35},{"el":44,"sc":3,"sl":42},{"el":49,"sc":3,"sl":46}],"name":"InterfaceTest","sl":29},{"el":53,"id":9629,"methods":[],"name":"InterfaceTest.TestObjectInterface","sl":51},{"el":62,"id":9629,"methods":[{"el":61,"sc":5,"sl":59}],"name":"InterfaceTest.TestObject","sl":55},{"el":71,"id":9631,"methods":[{"el":70,"sc":5,"sl":68}],"name":"InterfaceTest.TestObjectWrapper","sl":64}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1079":{"methods":[{"sl":42}],"name":"testSerializingObjectImplementingInterface","pass":true,"statements":[{"sl":43}]},"test_856":{"methods":[{"sl":46},{"sl":68}],"name":"testSerializingInterfaceObjectField","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":69}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1079], [1079], [], [], [856], [856], [856], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [856], [856], [], [], []]
