var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":169,"id":9275,"methods":[{"el":44,"sc":3,"sl":37},{"el":51,"sc":3,"sl":46},{"el":67,"sc":3,"sl":53},{"el":72,"sc":3,"sl":69},{"el":81,"sc":3,"sl":74},{"el":88,"sc":3,"sl":83},{"el":96,"sc":3,"sl":90},{"el":104,"sc":3,"sl":98},{"el":111,"sc":3,"sl":106}],"name":"ExposeFieldsTest","sl":33},{"el":140,"id":9317,"methods":[{"el":122,"sc":5,"sl":120},{"el":129,"sc":5,"sl":123},{"el":139,"sc":5,"sl":131}],"name":"ExposeFieldsTest.ClassWithExposedFields","sl":113},{"el":145,"id":9334,"methods":[],"name":"ExposeFieldsTest.ClassWithNoExposedFields","sl":142},{"el":149,"id":9334,"methods":[],"name":"ExposeFieldsTest.SomeInterface","sl":147},{"el":153,"id":9334,"methods":[],"name":"ExposeFieldsTest.SomeObject","sl":151},{"el":159,"id":9334,"methods":[{"el":158,"sc":5,"sl":156}],"name":"ExposeFieldsTest.SomeInterfaceInstanceCreator","sl":155},{"el":168,"id":9336,"methods":[{"el":167,"sc":5,"sl":165}],"name":"ExposeFieldsTest.ClassWithInterfaceField","sl":161}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":53},{"sl":120},{"sl":123},{"sl":131}],"name":"testArrayWithOneNullExposeFieldObjectSerialization","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":66},{"sl":121},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":132},{"sl":133},{"sl":134},{"sl":136},{"sl":137},{"sl":138}]},"test_1053":{"methods":[{"sl":74}],"name":"testExposeAnnotationDeserialization","pass":true,"statements":[{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80}]},"test_193":{"methods":[{"sl":46},{"sl":120},{"sl":123},{"sl":131}],"name":"testNullExposeFieldSerialization","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":50},{"sl":121},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":132},{"sl":133},{"sl":136},{"sl":137},{"sl":138}]},"test_400":{"methods":[{"sl":69},{"sl":120},{"sl":123},{"sl":131}],"name":"testExposeAnnotationSerialization","pass":true,"statements":[{"sl":70},{"sl":71},{"sl":121},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":132},{"sl":133},{"sl":134},{"sl":136},{"sl":137},{"sl":138}]},"test_518":{"methods":[{"sl":83}],"name":"testNoExposedFieldSerialization","pass":true,"statements":[{"sl":84},{"sl":85},{"sl":87}]},"test_660":{"methods":[{"sl":90}],"name":"testNoExposedFieldDeserialization","pass":true,"statements":[{"sl":91},{"sl":92},{"sl":94},{"sl":95}]},"test_754":{"methods":[{"sl":106},{"sl":156}],"name":"testExposedInterfaceFieldDeserialization","pass":true,"statements":[{"sl":107},{"sl":108},{"sl":110},{"sl":157}]},"test_894":{"methods":[{"sl":98},{"sl":165}],"name":"testExposedInterfaceFieldSerialization","pass":true,"statements":[{"sl":99},{"sl":100},{"sl":101},{"sl":103},{"sl":166}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [193], [193], [193], [], [193], [], [], [1], [1], [1], [1], [1], [], [1], [1], [], [], [], [], [], [1], [], [], [400], [400], [400], [], [], [1053], [1053], [1053], [], [1053], [1053], [1053], [], [], [518], [518], [518], [], [518], [], [], [660], [660], [660], [], [660], [660], [], [], [894], [894], [894], [894], [], [894], [], [], [754], [754], [754], [], [754], [], [], [], [], [], [], [], [], [], [400, 193, 1], [400, 193, 1], [], [400, 193, 1], [400, 193, 1], [400, 193, 1], [400, 193, 1], [400, 193, 1], [400, 193, 1], [], [], [400, 193, 1], [400, 193, 1], [400, 193, 1], [400, 1], [], [400, 193, 1], [400, 193, 1], [400, 193, 1], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [754], [754], [], [], [], [], [], [], [], [894], [894], [], [], []]
