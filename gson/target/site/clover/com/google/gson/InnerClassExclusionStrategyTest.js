var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":58,"id":6599,"methods":[{"el":36,"sc":3,"sl":33},{"el":41,"sc":3,"sl":38},{"el":46,"sc":3,"sl":43},{"el":51,"sc":3,"sl":48}],"name":"InnerClassExclusionStrategyTest","sl":28},{"el":54,"id":6611,"methods":[],"name":"InnerClassExclusionStrategyTest.InnerClass","sl":53},{"el":57,"id":6611,"methods":[],"name":"InnerClassExclusionStrategyTest.StaticNestedClass","sl":56}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_493":{"methods":[{"sl":48}],"name":"testIncludeStaticNestedClassField","pass":true,"statements":[{"sl":49},{"sl":50}]},"test_607":{"methods":[{"sl":38}],"name":"testExcludeInnerClassField","pass":true,"statements":[{"sl":39},{"sl":40}]},"test_774":{"methods":[{"sl":33}],"name":"testExcludeInnerClassObject","pass":true,"statements":[{"sl":34},{"sl":35}]},"test_973":{"methods":[{"sl":43}],"name":"testIncludeStaticNestedClassObject","pass":true,"statements":[{"sl":44},{"sl":45}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [774], [774], [774], [], [], [607], [607], [607], [], [], [973], [973], [973], [], [], [493], [493], [493], [], [], [], [], [], [], [], []]
