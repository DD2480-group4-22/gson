var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":212,"id":8272,"methods":[{"el":49,"sc":3,"sl":45},{"el":57,"sc":3,"sl":51},{"el":65,"sc":3,"sl":59},{"el":120,"sc":7,"sl":116},{"el":124,"sc":3,"sl":113},{"el":158,"sc":9,"sl":154},{"el":163,"sc":3,"sl":151},{"el":172,"sc":9,"sl":168},{"el":177,"sc":3,"sl":165},{"el":186,"sc":9,"sl":182},{"el":192,"sc":3,"sl":179},{"el":201,"sc":9,"sl":197},{"el":207,"sc":3,"sl":194}],"name":"CustomDeserializerTest","sl":39},{"el":83,"id":8285,"methods":[{"el":74,"sc":5,"sl":71},{"el":78,"sc":5,"sl":76},{"el":82,"sc":5,"sl":80}],"name":"CustomDeserializerTest.DataHolder","sl":67},{"el":101,"id":8291,"methods":[{"el":92,"sc":5,"sl":89},{"el":96,"sc":5,"sl":94},{"el":100,"sc":5,"sl":98}],"name":"CustomDeserializerTest.DataHolderWrapper","sl":85},{"el":111,"id":8297,"methods":[{"el":110,"sc":5,"sl":104}],"name":"CustomDeserializerTest.DataHolderDeserializer","sl":103},{"el":128,"id":8309,"methods":[],"name":"CustomDeserializerTest.MyBase","sl":126},{"el":140,"id":8309,"methods":[{"el":136,"sc":5,"sl":134},{"el":139,"sc":5,"sl":137}],"name":"CustomDeserializerTest.SubTypes","sl":130},{"el":144,"id":8313,"methods":[],"name":"CustomDeserializerTest.SubType1","sl":142},{"el":149,"id":8313,"methods":[],"name":"CustomDeserializerTest.SubType2","sl":146},{"el":211,"id":8343,"methods":[],"name":"CustomDeserializerTest.ClassWithBaseArray","sl":209}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1006":{"methods":[{"sl":165},{"sl":168}],"name":"testCustomDeserializerReturnsNull","pass":true,"statements":[{"sl":166},{"sl":171},{"sl":174},{"sl":175},{"sl":176}]},"test_1068":{"methods":[{"sl":51},{"sl":76},{"sl":80},{"sl":104}],"name":"testDefaultConstructorNotCalledOnObject","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":55},{"sl":56},{"sl":77},{"sl":81},{"sl":107},{"sl":108},{"sl":109}]},"test_117":{"methods":[{"sl":59},{"sl":76},{"sl":80},{"sl":89},{"sl":94},{"sl":98},{"sl":104}],"name":"testDefaultConstructorNotCalledOnField","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":63},{"sl":64},{"sl":77},{"sl":81},{"sl":91},{"sl":95},{"sl":99},{"sl":107},{"sl":108},{"sl":109}]},"test_146":{"methods":[{"sl":151},{"sl":154}],"name":"testCustomDeserializerReturnsNullForTopLevelObject","pass":true,"statements":[{"sl":152},{"sl":157},{"sl":160},{"sl":161},{"sl":162}]},"test_34":{"methods":[{"sl":194},{"sl":197}],"name":"testCustomDeserializerReturnsNullForArrayElementsForArrayField","pass":true,"statements":[{"sl":195},{"sl":200},{"sl":203},{"sl":204},{"sl":205},{"sl":206}]},"test_721":{"methods":[{"sl":113},{"sl":116},{"sl":134},{"sl":137}],"name":"testJsonTypeFieldBasedDeserialization","pass":true,"statements":[{"sl":114},{"sl":115},{"sl":118},{"sl":119},{"sl":122},{"sl":123},{"sl":135},{"sl":138}]},"test_929":{"methods":[{"sl":179},{"sl":182}],"name":"testCustomDeserializerReturnsNullForArrayElements","pass":true,"statements":[{"sl":180},{"sl":185},{"sl":188},{"sl":189},{"sl":190},{"sl":191}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1068], [1068], [1068], [], [1068], [1068], [], [], [117], [117], [117], [], [117], [117], [], [], [], [], [], [], [], [], [], [], [], [117, 1068], [117, 1068], [], [], [117, 1068], [117, 1068], [], [], [], [], [], [], [], [117], [], [117], [], [], [117], [117], [], [], [117], [117], [], [], [], [], [117, 1068], [], [], [117, 1068], [117, 1068], [117, 1068], [], [], [], [721], [721], [721], [721], [], [721], [721], [], [], [721], [721], [], [], [], [], [], [], [], [], [], [], [721], [721], [], [721], [721], [], [], [], [], [], [], [], [], [], [], [], [], [146], [146], [], [146], [], [], [146], [], [], [146], [146], [146], [], [], [1006], [1006], [], [1006], [], [], [1006], [], [], [1006], [1006], [1006], [], [], [929], [929], [], [929], [], [], [929], [], [], [929], [929], [929], [929], [], [], [34], [34], [], [34], [], [], [34], [], [], [34], [34], [34], [34], [], [], [], [], [], []]
