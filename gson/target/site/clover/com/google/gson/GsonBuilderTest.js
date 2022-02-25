var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":110,"id":6457,"methods":[{"el":36,"sc":5,"sl":34},{"el":39,"sc":5,"sl":37},{"el":46,"sc":3,"sl":42},{"el":53,"sc":3,"sl":48},{"el":67,"sc":3,"sl":55},{"el":82,"sc":3,"sl":77},{"el":103,"sc":3,"sl":88}],"name":"GsonBuilderTest","sl":32},{"el":75,"id":6472,"methods":[],"name":"GsonBuilderTest.HasModifiers","sl":70},{"el":86,"id":6475,"methods":[],"name":"GsonBuilderTest.HasTransients","sl":84},{"el":109,"id":6481,"methods":[{"el":108,"sc":5,"sl":106}],"name":"GsonBuilderTest.ClassWithoutNoArgsConstructor","sl":105}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":88}],"name":"testDisableJdkUnsafe","pass":true,"statements":[{"sl":89},{"sl":92},{"sl":93},{"sl":96}]},"test_242":{"methods":[{"sl":55}],"name":"testRegisterTypeAdapterForCoreType","pass":true,"statements":[{"sl":56},{"sl":64},{"sl":65}]},"test_508":{"methods":[{"sl":77}],"name":"testTransientFieldExclusion","pass":true,"statements":[{"sl":78},{"sl":81}]},"test_688":{"methods":[{"sl":42}],"name":"testCreatingMoreThanOnce","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45}]},"test_985":{"methods":[{"sl":48}],"name":"testExcludeFieldsWithModifiers","pass":true,"statements":[{"sl":49},{"sl":52}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [688], [688], [688], [688], [], [], [985], [985], [], [], [985], [], [], [242], [242], [], [], [], [], [], [], [], [242], [242], [], [], [], [], [], [], [], [], [], [], [], [508], [508], [], [], [508], [], [], [], [], [], [], [10], [10], [], [], [10], [10], [], [], [10], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
