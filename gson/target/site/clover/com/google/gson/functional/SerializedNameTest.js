var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":54,"id":12408,"methods":[{"el":30,"sc":3,"sl":26},{"el":39,"sc":3,"sl":32},{"el":44,"sc":3,"sl":41}],"name":"SerializedNameTest","sl":23},{"el":53,"id":12418,"methods":[{"el":52,"sc":5,"sl":49}],"name":"SerializedNameTest.MyClass","sl":46}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1009":{"methods":[{"sl":26},{"sl":49}],"name":"testFirstNameIsChosenForSerialization","pass":true,"statements":[{"sl":27},{"sl":29},{"sl":50},{"sl":51}]},"test_135":{"methods":[{"sl":32}],"name":"testMultipleNamesDeserializedCorrectly","pass":true,"statements":[{"sl":33},{"sl":36},{"sl":37},{"sl":38}]},"test_92":{"methods":[{"sl":41}],"name":"testMultipleNamesInTheSameString","pass":true,"statements":[{"sl":43}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1009], [1009], [], [1009], [], [], [135], [135], [], [], [135], [135], [135], [], [], [92], [], [92], [], [], [], [], [], [1009], [1009], [1009], [], [], []]
