var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":99,"id":9370,"methods":[{"el":39,"sc":3,"sl":33},{"el":47,"sc":3,"sl":41},{"el":55,"sc":3,"sl":49},{"el":63,"sc":3,"sl":57},{"el":71,"sc":3,"sl":65},{"el":79,"sc":3,"sl":73},{"el":85,"sc":3,"sl":81}],"name":"FieldNamingTest","sl":32},{"el":98,"id":9390,"methods":[],"name":"FieldNamingTest.TestNames","sl":88}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_421":{"methods":[{"sl":57},{"sl":81}],"name":"testUpperCaseWithUnderscores","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":82}]},"test_611":{"methods":[{"sl":73},{"sl":81}],"name":"testLowerCaseWithDashes","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":82}]},"test_709":{"methods":[{"sl":49},{"sl":81}],"name":"testUpperCamelCaseWithSpaces","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":82}]},"test_770":{"methods":[{"sl":33},{"sl":81}],"name":"testIdentity","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":82}]},"test_917":{"methods":[{"sl":65},{"sl":81}],"name":"testLowerCaseWithUnderscores","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":82}]},"test_952":{"methods":[{"sl":41},{"sl":81}],"name":"testUpperCamelCase","pass":true,"statements":[{"sl":42},{"sl":43},{"sl":82}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [770], [770], [770], [], [], [], [], [], [952], [952], [952], [], [], [], [], [], [709], [709], [709], [], [], [], [], [], [421], [421], [421], [], [], [], [], [], [917], [917], [917], [], [], [], [], [], [611], [611], [611], [], [], [], [], [], [770, 952, 917, 611, 421, 709], [770, 952, 917, 611, 421, 709], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
