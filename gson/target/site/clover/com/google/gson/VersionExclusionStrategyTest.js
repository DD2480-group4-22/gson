var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":55,"id":7522,"methods":[{"el":35,"sc":3,"sl":31},{"el":41,"sc":3,"sl":37},{"el":47,"sc":3,"sl":43}],"name":"VersionExclusionStrategyTest","sl":28},{"el":54,"id":7534,"methods":[],"name":"VersionExclusionStrategyTest.MockObject","sl":50}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":37}],"name":"testClassAndFieldAreBehindInVersion","pass":true,"statements":[{"sl":38},{"sl":39},{"sl":40}]},"test_188":{"methods":[{"sl":31}],"name":"testClassAndFieldAreAtSameVersion","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34}]},"test_384":{"methods":[{"sl":43}],"name":"testClassAndFieldAreAheadInVersion","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":46}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [188], [188], [188], [188], [], [], [102], [102], [102], [102], [], [], [384], [384], [384], [384], [], [], [], [], [], [], [], [], []]
