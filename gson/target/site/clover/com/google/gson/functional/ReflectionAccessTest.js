var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":123,"id":12230,"methods":[{"el":36,"sc":3,"sl":32},{"el":55,"sc":7,"sl":47},{"el":75,"sc":11,"sl":72},{"el":82,"sc":11,"sl":77},{"el":92,"sc":3,"sl":38},{"el":122,"sc":3,"sl":105}],"name":"ReflectionAccessTest","sl":23},{"el":30,"id":12230,"methods":[{"el":29,"sc":5,"sl":28}],"name":"ReflectionAccessTest.ClassWithPrivateMembers","sl":25}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_196":{"methods":[{"sl":105}],"name":"testSerializeInternalImplementationObject","pass":true,"statements":[{"sl":107},{"sl":108},{"sl":109},{"sl":112},{"sl":113},{"sl":114},{"sl":117}]},"test_497":{"methods":[{"sl":32},{"sl":38},{"sl":47},{"sl":72},{"sl":77}],"name":"testRestrictiveSecurityManager","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":49},{"sl":50},{"sl":52},{"sl":57},{"sl":59},{"sl":60},{"sl":61},{"sl":63},{"sl":66},{"sl":69},{"sl":70},{"sl":74},{"sl":79},{"sl":80},{"sl":81},{"sl":86},{"sl":87},{"sl":88},{"sl":90}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [497], [497], [497], [497], [], [], [497], [], [], [497], [], [497], [497], [497], [497], [497], [], [497], [497], [], [497], [], [], [], [], [497], [], [497], [497], [497], [], [497], [], [], [497], [], [], [497], [497], [], [497], [], [497], [], [], [497], [], [497], [497], [497], [], [], [], [], [497], [497], [497], [], [497], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [196], [], [196], [196], [196], [], [], [196], [196], [196], [], [], [196], [], [], [], [], [], []]
