var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":39,"id":6320,"methods":[{"el":30,"sc":3,"sl":28},{"el":34,"sc":3,"sl":32},{"el":38,"sc":3,"sl":36}],"name":"MalformedJsonException","sl":25}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1035":{"methods":[{"sl":28}],"name":"testStrictSemicolonDelimitedNameValuePairWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_1050":{"methods":[{"sl":28}],"name":"testStrictNameValueSeparator","pass":true,"statements":[{"sl":29}]},"test_1051":{"methods":[{"sl":28}],"name":"testStrictExtraCommasInMaps","pass":true,"statements":[{"sl":29}]},"test_1055":{"methods":[{"sl":28}],"name":"testParseUnquotedMultiWordStringFails","pass":true,"statements":[{"sl":29}]},"test_107":{"methods":[{"sl":28}],"name":"testMalformedDocuments","pass":true,"statements":[{"sl":29}]},"test_1075":{"methods":[{"sl":28}],"name":"testStrictUnquotedNamesWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_122":{"methods":[{"sl":28}],"name":"testStrictSemicolonDelimitedArray","pass":true,"statements":[{"sl":29}]},"test_124":{"methods":[{"sl":28}],"name":"testStrictSingleQuotedStrings","pass":true,"statements":[{"sl":29}]},"test_173":{"methods":[{"sl":28}],"name":"testStrictNameValueSeparatorWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_183":{"methods":[{"sl":28}],"name":"testFailWithPosition","pass":true,"statements":[{"sl":29}]},"test_191":{"methods":[{"sl":28}],"name":"testFailWithPositionIsOffsetByBom","pass":true,"statements":[{"sl":29}]},"test_20":{"methods":[{"sl":28}],"name":"testInvalidJsonInput","pass":true,"statements":[{"sl":29}]},"test_211":{"methods":[{"sl":28}],"name":"testDocumentWithCommentEndingInSlash","pass":true,"statements":[{"sl":29}]},"test_224":{"methods":[{"sl":28}],"name":"testStrictUnquotedNames","pass":true,"statements":[{"sl":29}]},"test_23":{"methods":[{"sl":28}],"name":"testFailWithPositionOverSlashSlashEndOfLineComment","pass":true,"statements":[{"sl":29}]},"test_234":{"methods":[{"sl":28}],"name":"testFailWithEscapedNewlineCharacter","pass":true,"statements":[{"sl":29}]},"test_235":{"methods":[{"sl":28}],"name":"testUnterminatedStringFailure","pass":true,"statements":[{"sl":29}]},"test_243":{"methods":[{"sl":28}],"name":"testStrictSingleQuotedStringsWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_266":{"methods":[{"sl":28}],"name":"testMalformedNumbers","pass":true,"statements":[{"sl":29}]},"test_293":{"methods":[{"sl":28}],"name":"testFailWithPositionOverHashEndOfLineComment","pass":true,"statements":[{"sl":29}]},"test_30":{"methods":[{"sl":28}],"name":"testNewJsonReader_Default","pass":true,"statements":[{"sl":29}]},"test_307":{"methods":[{"sl":28}],"name":"testLenientPartialNonExecutePrefix","pass":true,"statements":[{"sl":29}]},"test_309":{"methods":[{"sl":28}],"name":"testStrictComments","pass":true,"statements":[{"sl":29}]},"test_371":{"methods":[{"sl":28}],"name":"testFailWithPositionGreaterThanBufferSize","pass":true,"statements":[{"sl":29}]},"test_441":{"methods":[{"sl":28}],"name":"testStrictSemicolonDelimitedArrayWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_469":{"methods":[{"sl":28}],"name":"testStrictQuotedNonFiniteDoubles","pass":true,"statements":[{"sl":29}]},"test_47":{"methods":[{"sl":28}],"name":"testStrictSemicolonDelimitedNameValuePair","pass":true,"statements":[{"sl":29}]},"test_484":{"methods":[{"sl":28}],"name":"testStrictCommentsWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_492":{"methods":[{"sl":28}],"name":"testStrictMultipleTopLevelValues","pass":true,"statements":[{"sl":29}]},"test_494":{"methods":[{"sl":28}],"name":"testUnescapingTruncatedSequence","pass":true,"statements":[{"sl":29}]},"test_499":{"methods":[{"sl":28}],"name":"testExtraCommasInMaps","pass":true,"statements":[{"sl":29}]},"test_505":{"methods":[{"sl":28}],"name":"testFailWithPositionOverUnquotedString","pass":true,"statements":[{"sl":29}]},"test_507":{"methods":[{"sl":28}],"name":"testDouble","pass":true,"statements":[{"sl":29}]},"test_531":{"methods":[{"sl":28}],"name":"testFailWithPositionOverQuotedString","pass":true,"statements":[{"sl":29}]},"test_537":{"methods":[{"sl":28}],"name":"testStrictNonExecutePrefix","pass":true,"statements":[{"sl":29}]},"test_556":{"methods":[{"sl":28}],"name":"testLenientExtraCommasInMaps","pass":true,"statements":[{"sl":29}]},"test_575":{"methods":[{"sl":28}],"name":"testStrictUnquotedStrings","pass":true,"statements":[{"sl":29}]},"test_580":{"methods":[{"sl":28}],"name":"testStrictUnnecessaryArraySeparators","pass":true,"statements":[{"sl":29}]},"test_591":{"methods":[{"sl":28}],"name":"testStrictNonFiniteDoublesWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_602":{"methods":[{"sl":28}],"name":"testLongOrDouble","pass":true,"statements":[{"sl":29}]},"test_612":{"methods":[{"sl":28}],"name":"testStringEndingInSlash","pass":true,"statements":[{"sl":29}]},"test_64":{"methods":[{"sl":28}],"name":"testBomForbiddenAsOtherCharacterInDocument","pass":true,"statements":[{"sl":29}]},"test_656":{"methods":[{"sl":28}],"name":"testUnterminatedObject","pass":true,"statements":[{"sl":29}]},"test_670":{"methods":[{"sl":28}],"name":"testFailWithPositionOverCStyleComment","pass":true,"statements":[{"sl":29}]},"test_693":{"methods":[{"sl":28}],"name":"testStrictUnquotedStringsWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_708":{"methods":[{"sl":28}],"name":"testStrictMultipleTopLevelValuesWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_726":{"methods":[{"sl":28}],"name":"testInvalidArrayDeserialization","pass":true,"statements":[{"sl":29}]},"test_793":{"methods":[{"sl":28}],"name":"testStrictNonExecutePrefixWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_8":{"methods":[{"sl":28}],"name":"testStrictUnnecessaryArraySeparatorsWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_824":{"methods":[{"sl":28}],"name":"testStrictNonFiniteDoubles","pass":true,"statements":[{"sl":29}]},"test_871":{"methods":[{"sl":28}],"name":"testStringWithLeadingSlash","pass":true,"statements":[{"sl":29}]},"test_896":{"methods":[{"sl":28}],"name":"testFailWithPositionDeepPath","pass":true,"statements":[{"sl":29}]},"test_910":{"methods":[{"sl":28}],"name":"testStrictVeryLongNumber","pass":true,"statements":[{"sl":29}]},"test_914":{"methods":[{"sl":28}],"name":"testUnquotedStringDeserializationFails","pass":true,"statements":[{"sl":29}]},"test_96":{"methods":[{"sl":28}],"name":"testMissingValue","pass":true,"statements":[{"sl":29}]},"test_970":{"methods":[{"sl":28}],"name":"testStrictSingleQuotedNamesWithSkipValue","pass":true,"statements":[{"sl":29}]},"test_984":{"methods":[{"sl":28}],"name":"testStrictSingleQuotedNames","pass":true,"statements":[{"sl":29}]},"test_988":{"methods":[{"sl":28}],"name":"testInvalidJsonDeserializationFails","pass":true,"statements":[{"sl":29}]},"test_99":{"methods":[{"sl":28}],"name":"testUnescapingTruncatedCharacters","pass":true,"statements":[{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1055, 307, 871, 914, 191, 793, 266, 173, 910, 708, 183, 556, 243, 602, 309, 591, 693, 224, 580, 47, 441, 507, 211, 371, 726, 896, 484, 96, 505, 494, 531, 656, 234, 469, 499, 293, 670, 537, 235, 1075, 492, 575, 23, 1051, 1035, 988, 64, 984, 99, 30, 612, 8, 824, 107, 970, 1050, 124, 20, 122], [1055, 307, 871, 914, 191, 793, 266, 173, 910, 708, 183, 556, 243, 602, 309, 591, 693, 224, 580, 47, 441, 507, 211, 371, 726, 896, 484, 96, 505, 494, 531, 656, 234, 469, 499, 293, 670, 537, 235, 1075, 492, 575, 23, 1051, 1035, 988, 64, 984, 99, 30, 612, 8, 824, 107, 970, 1050, 124, 20, 122], [], [], [], [], [], [], [], [], [], []]
