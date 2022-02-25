var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":325,"id":14196,"methods":[{"el":42,"sc":3,"sl":36},{"el":102,"sc":3,"sl":47},{"el":157,"sc":3,"sl":104},{"el":198,"sc":3,"sl":159},{"el":213,"sc":3,"sl":200},{"el":222,"sc":3,"sl":215},{"el":230,"sc":3,"sl":224},{"el":244,"sc":3,"sl":232},{"el":252,"sc":3,"sl":246},{"el":280,"sc":3,"sl":254},{"el":308,"sc":3,"sl":282}],"name":"JsonReaderPathTest","sl":35},{"el":324,"id":14428,"methods":[{"el":314,"sc":7,"sl":312},{"el":320,"sc":7,"sl":317}],"name":"JsonReaderPathTest.Factory","sl":310}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":282},{"sl":317}],"name":"arrayOfArrays","pass":true,"statements":[{"sl":283},{"sl":284},{"sl":285},{"sl":286},{"sl":287},{"sl":288},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":293},{"sl":294},{"sl":295},{"sl":296},{"sl":297},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303},{"sl":304},{"sl":305},{"sl":306},{"sl":307},{"sl":318},{"sl":319}]},"test_100":{"methods":[{"sl":224},{"sl":312}],"name":"skipObjectNames","pass":true,"statements":[{"sl":225},{"sl":226},{"sl":227},{"sl":228},{"sl":229},{"sl":313}]},"test_1031":{"methods":[{"sl":232},{"sl":317}],"name":"skipObjectValues","pass":true,"statements":[{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":240},{"sl":241},{"sl":242},{"sl":243},{"sl":318},{"sl":319}]},"test_1070":{"methods":[{"sl":159},{"sl":312}],"name":"arrayPath","pass":true,"statements":[{"sl":160},{"sl":161},{"sl":162},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":197},{"sl":313}]},"test_120":{"methods":[{"sl":246},{"sl":317}],"name":"skipNestedStructures","pass":true,"statements":[{"sl":247},{"sl":248},{"sl":249},{"sl":250},{"sl":251},{"sl":318},{"sl":319}]},"test_168":{"methods":[{"sl":47},{"sl":317}],"name":"path","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":318},{"sl":319}]},"test_248":{"methods":[{"sl":282},{"sl":312}],"name":"arrayOfArrays","pass":true,"statements":[{"sl":283},{"sl":284},{"sl":285},{"sl":286},{"sl":287},{"sl":288},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":293},{"sl":294},{"sl":295},{"sl":296},{"sl":297},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303},{"sl":304},{"sl":305},{"sl":306},{"sl":307},{"sl":313}]},"test_289":{"methods":[{"sl":224},{"sl":317}],"name":"skipObjectNames","pass":true,"statements":[{"sl":225},{"sl":226},{"sl":227},{"sl":228},{"sl":229},{"sl":318},{"sl":319}]},"test_335":{"methods":[{"sl":254},{"sl":312}],"name":"arrayOfObjects","pass":true,"statements":[{"sl":255},{"sl":256},{"sl":257},{"sl":258},{"sl":259},{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":267},{"sl":268},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":279},{"sl":313}]},"test_379":{"methods":[{"sl":104},{"sl":312}],"name":"objectPath","pass":true,"statements":[{"sl":105},{"sl":106},{"sl":107},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":135},{"sl":137},{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":149},{"sl":151},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":313}]},"test_461":{"methods":[{"sl":200}],"name":"multipleTopLevelValuesInOneDocument","pass":false,"statements":[{"sl":201}]},"test_473":{"methods":[{"sl":159},{"sl":317}],"name":"arrayPath","pass":true,"statements":[{"sl":160},{"sl":161},{"sl":162},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":197},{"sl":318},{"sl":319}]},"test_504":{"methods":[{"sl":47},{"sl":312}],"name":"path","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":313}]},"test_511":{"methods":[{"sl":215},{"sl":312}],"name":"skipArrayElements","pass":true,"statements":[{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":313}]},"test_615":{"methods":[{"sl":246},{"sl":312}],"name":"skipNestedStructures","pass":true,"statements":[{"sl":247},{"sl":248},{"sl":249},{"sl":250},{"sl":251},{"sl":313}]},"test_694":{"methods":[{"sl":215},{"sl":317}],"name":"skipArrayElements","pass":true,"statements":[{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":318},{"sl":319}]},"test_729":{"methods":[{"sl":232},{"sl":312}],"name":"skipObjectValues","pass":true,"statements":[{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":240},{"sl":241},{"sl":242},{"sl":243},{"sl":313}]},"test_854":{"methods":[{"sl":254},{"sl":317}],"name":"arrayOfObjects","pass":true,"statements":[{"sl":255},{"sl":256},{"sl":257},{"sl":258},{"sl":259},{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":267},{"sl":268},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":279},{"sl":318},{"sl":319}]},"test_870":{"methods":[{"sl":104},{"sl":317}],"name":"objectPath","pass":true,"statements":[{"sl":105},{"sl":106},{"sl":107},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":135},{"sl":137},{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":149},{"sl":151},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":318},{"sl":319}]},"test_992":{"methods":[{"sl":200},{"sl":312}],"name":"multipleTopLevelValuesInOneDocument","pass":true,"statements":[{"sl":201},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":212},{"sl":313}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [504, 168], [], [], [870, 379], [870, 379], [870, 379], [870, 379], [], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [870, 379], [], [], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [473, 1070], [], [], [992, 461], [992, 461], [], [992], [992], [992], [992], [992], [992], [992], [992], [992], [992], [], [], [694, 511], [694, 511], [694, 511], [694, 511], [694, 511], [694, 511], [694, 511], [], [], [289, 100], [289, 100], [289, 100], [289, 100], [289, 100], [289, 100], [], [], [1031, 729], [1031, 729], [1031, 729], [1031, 729], [1031, 729], [1031, 729], [1031, 729], [1031, 729], [1031, 729], [1031, 729], [1031, 729], [1031, 729], [], [], [615, 120], [615, 120], [615, 120], [615, 120], [615, 120], [615, 120], [], [], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [335, 854], [], [], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [0, 248], [], [], [], [], [335, 504, 992, 615, 379, 729, 100, 511, 1070, 248], [335, 504, 992, 615, 379, 729, 100, 511, 1070, 248], [], [], [], [870, 1031, 289, 694, 0, 473, 168, 120, 854], [870, 1031, 289, 694, 0, 473, 168, 120, 854], [870, 1031, 289, 694, 0, 473, 168, 120, 854], [], [], [], [], [], []]
