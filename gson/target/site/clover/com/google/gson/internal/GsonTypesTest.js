var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":74,"id":13062,"methods":[{"el":47,"sc":3,"sl":27},{"el":54,"sc":3,"sl":49},{"el":73,"sc":3,"sl":67}],"name":"GsonTypesTest","sl":25},{"el":37,"id":13067,"methods":[],"name":"GsonTypesTest.D","sl":36},{"el":57,"id":13076,"methods":[],"name":"GsonTypesTest.A","sl":56},{"el":59,"id":13076,"methods":[],"name":"GsonTypesTest.B","sl":58},{"el":61,"id":13076,"methods":[],"name":"GsonTypesTest.C","sl":60}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_123":{"methods":[{"sl":49},{"sl":67}],"name":"testGetFirstTypeArgument","pass":true,"statements":[{"sl":50},{"sl":52},{"sl":53},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72}]},"test_66":{"methods":[{"sl":27},{"sl":67}],"name":"testNewParameterizedTypeWithoutOwner","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":33},{"sl":34},{"sl":38},{"sl":40},{"sl":45},{"sl":46},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [66], [], [66], [66], [], [], [66], [66], [], [], [], [66], [], [66], [], [], [], [], [66], [66], [], [], [123], [123], [], [123], [123], [], [], [], [], [], [], [], [], [], [], [], [], [], [123, 66], [123, 66], [123, 66], [123, 66], [123, 66], [123, 66], [], []]
