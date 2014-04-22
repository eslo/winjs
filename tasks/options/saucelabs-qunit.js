// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
(function() {
    "use strict";

    var browsers = [{
        browserName: "internet explorer",
        platform: "WIN8.1",
        version: "11"
    }, {
        browserName: "safari",
        platform: "OS X 10.9",
        version: "7"
    }, {
        browserName: "firefox",
        platform: "Win8.1",
        version: "28"
    }, {
        browserName: "googlechrome",
        platform: "Win8.1",
        version: "34"
    }];

    module.exports = {
        all: {
            options: {
                urls: [
                    "http://127.0.0.1:9999/bin/tests/Base/test.html?autostart",
                    "http://127.0.0.1:9999/bin/tests/Binding/test.html?autostart",
                    "http://127.0.0.1:9999/bin/tests/BindingList/test.html?autostart",
                    "http://127.0.0.1:9999/bin/tests/BindingTemplate/test.html?autostart",
                    "http://127.0.0.1:9999/bin/tests/ItemContainer/test.html?autostart",
                    "http://127.0.0.1:9999/bin/tests/Navigation/test.html?autostart",
                    "http://127.0.0.1:9999/bin/tests/PageControl/test.html?autostart",
                    "http://127.0.0.1:9999/bin/tests/Promise/test.html?autostart",
                    "http://127.0.0.1:9999/bin/tests/Repeater/test.html?autostart",
                    "http://127.0.0.1:9999/bin/tests/TimePicker/test.html?autostart",
                    "http://127.0.0.1:9999/bin/tests/WWA-Application/test.html?autostart",
                ],
                build: process.env.TRAVIS_JOB_ID,
                testInterval: 1000,
                browsers: browsers,
                testname: "winjs qunit tests",
                tags: ["winjs"]
            }
        }
    };
})();
