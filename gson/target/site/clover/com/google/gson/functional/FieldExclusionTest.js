var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":92,"id":9338,"methods":[{"el":40,"sc":3,"sl":36},{"el":52,"sc":3,"sl":42},{"el":59,"sc":3,"sl":54},{"el":71,"sc":3,"sl":61}],"name":"FieldExclusionTest","sl":31},{"el":80,"id":9364,"methods":[],"name":"FieldExclusionTest.Outer","sl":73},{"el":78,"id":9364,"methods":[{"el":77,"sc":7,"sl":75}],"name":"FieldExclusionTest.Outer.Inner","sl":74},{"el":91,"id":9366,"methods":[{"el":86,"sc":5,"sl":84},{"el":90,"sc":5,"sl":88}],"name":"FieldExclusionTest.NestedClass","sl":82}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_212":{"methods":[{"sl":42},{"sl":75},{"sl":84},{"sl":88}],"name":"testDefaultInnerClassExclusion","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":76},{"sl":85},{"sl":89}]},"test_255":{"methods":[{"sl":61},{"sl":75},{"sl":84},{"sl":88}],"name":"testDefaultNestedStaticClassIncluded","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":76},{"sl":85},{"sl":89}]},"test_772":{"methods":[{"sl":54},{"sl":75},{"sl":84}],"name":"testInnerClassExclusion","pass":true,"statements":[{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":76},{"sl":85}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [212], [212], [212], [212], [212], [], [212], [212], [212], [212], [], [], [772], [772], [772], [772], [772], [], [], [255], [255], [255], [255], [255], [], [255], [255], [255], [255], [], [], [], [], [255, 212, 772], [255, 212, 772], [], [], [], [], [], [], [], [255, 212, 772], [255, 212, 772], [], [], [255, 212], [255, 212], [], [], []]
