var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":102,"id":8343,"methods":[{"el":54,"sc":4,"sl":45},{"el":65,"sc":4,"sl":56},{"el":79,"sc":4,"sl":67},{"el":89,"sc":4,"sl":81},{"el":96,"sc":10,"sl":94},{"el":101,"sc":4,"sl":91}],"name":"CustomSerializerTest","sl":43}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_161":{"methods":[{"sl":45}],"name":"testBaseClassSerializerInvokedForBaseClassFields","pass":true,"statements":[{"sl":46},{"sl":50},{"sl":51},{"sl":52},{"sl":53}]},"test_25":{"methods":[{"sl":81}],"name":"testBaseClassSerializerInvokedForBaseClassFieldsHoldingSubClassInstances","pass":true,"statements":[{"sl":82},{"sl":85},{"sl":86},{"sl":87},{"sl":88}]},"test_395":{"methods":[{"sl":67}],"name":"testSubClassSerializerInvokedForBaseClassFieldsHoldingArrayOfSubClassInstances","pass":true,"statements":[{"sl":68},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77}]},"test_44":{"methods":[{"sl":56}],"name":"testSubClassSerializerInvokedForBaseClassFieldsHoldingSubClassInstances","pass":true,"statements":[{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":64}]},"test_903":{"methods":[{"sl":91},{"sl":94}],"name":"testSerializerReturnsNull","pass":true,"statements":[{"sl":92},{"sl":95},{"sl":99},{"sl":100}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [161], [161], [], [], [], [161], [161], [161], [161], [], [], [44], [44], [], [], [], [44], [44], [44], [44], [], [], [395], [395], [], [], [], [395], [395], [395], [395], [395], [395], [], [], [], [25], [25], [], [], [25], [25], [25], [25], [], [], [903], [903], [], [903], [903], [], [], [], [903], [903], [], []]
