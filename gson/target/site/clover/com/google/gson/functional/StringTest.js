var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":140,"id":12542,"methods":[{"el":20,"sc":3,"sl":16},{"el":25,"sc":3,"sl":22},{"el":31,"sc":3,"sl":27},{"el":37,"sc":3,"sl":33},{"el":43,"sc":3,"sl":39},{"el":49,"sc":3,"sl":45},{"el":55,"sc":3,"sl":51},{"el":61,"sc":3,"sl":57},{"el":67,"sc":3,"sl":63},{"el":72,"sc":3,"sl":69},{"el":78,"sc":3,"sl":74},{"el":85,"sc":3,"sl":80},{"el":92,"sc":3,"sl":87},{"el":98,"sc":3,"sl":94},{"el":105,"sc":3,"sl":100},{"el":114,"sc":3,"sl":110},{"el":127,"sc":3,"sl":119},{"el":133,"sc":3,"sl":129},{"el":139,"sc":3,"sl":135}],"name":"StringTest","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1024":{"methods":[{"sl":57}],"name":"testEscapedCtrlRInStringDeserialization","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_137":{"methods":[{"sl":94}],"name":"testStringValueAsSingleElementArraySerialization","pass":true,"statements":[{"sl":95},{"sl":96},{"sl":97}]},"test_179":{"methods":[{"sl":119}],"name":"testAssignmentCharDeserialization","pass":true,"statements":[{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125},{"sl":126}]},"test_288":{"methods":[{"sl":39}],"name":"testEscapedCtrlNInStringSerialization","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42}]},"test_300":{"methods":[{"sl":69}],"name":"testEscapedBackslashInStringDeserialization","pass":true,"statements":[{"sl":70},{"sl":71}]},"test_357":{"methods":[{"sl":110}],"name":"testAssignmentCharSerialization","pass":true,"statements":[{"sl":111},{"sl":112},{"sl":113}]},"test_422":{"methods":[{"sl":129}],"name":"testJavascriptKeywordsInStringSerialization","pass":true,"statements":[{"sl":130},{"sl":131},{"sl":132}]},"test_480":{"methods":[{"sl":100}],"name":"testStringWithEscapedSlashDeserialization","pass":true,"statements":[{"sl":101},{"sl":102},{"sl":103},{"sl":104}]},"test_576":{"methods":[{"sl":63}],"name":"testEscapedBackslashInStringSerialization","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":66}]},"test_769":{"methods":[{"sl":33}],"name":"testSingleQuoteInStringSerialization","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36}]},"test_783":{"methods":[{"sl":80}],"name":"testEscapingQuotesInStringSerialization","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":83},{"sl":84}]},"test_808":{"methods":[{"sl":22}],"name":"testStringValueSerialization","pass":true,"statements":[{"sl":23},{"sl":24}]},"test_82":{"methods":[{"sl":45}],"name":"testEscapedCtrlNInStringDeserialization","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48}]},"test_845":{"methods":[{"sl":74}],"name":"testSingleQuoteInStringDeserialization","pass":true,"statements":[{"sl":75},{"sl":76},{"sl":77}]},"test_900":{"methods":[{"sl":87}],"name":"testEscapingQuotesInStringDeserialization","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_905":{"methods":[{"sl":135}],"name":"testJavascriptKeywordsInStringDeserialization","pass":true,"statements":[{"sl":136},{"sl":137},{"sl":138}]},"test_954":{"methods":[{"sl":51}],"name":"testEscapedCtrlRInStringSerialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_976":{"methods":[{"sl":27}],"name":"testStringValueDeserialization","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":30}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [808], [808], [808], [], [], [976], [976], [976], [976], [], [], [769], [769], [769], [769], [], [], [288], [288], [288], [288], [], [], [82], [82], [82], [82], [], [], [954], [954], [954], [954], [], [], [1024], [1024], [1024], [1024], [], [], [576], [576], [576], [576], [], [], [300], [300], [300], [], [], [845], [845], [845], [845], [], [], [783], [783], [783], [783], [783], [], [], [900], [900], [900], [900], [900], [], [], [137], [137], [137], [137], [], [], [480], [480], [480], [480], [480], [], [], [], [], [], [357], [357], [357], [357], [], [], [], [], [], [179], [179], [179], [179], [], [179], [179], [179], [], [], [422], [422], [422], [422], [], [], [905], [905], [905], [905], [], []]
