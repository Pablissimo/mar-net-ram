define({
    environments: [
       { browserName: 'phantom' }
    ],

    useSauceConnect: false,

    suites: ['tests/test_phanton.js'],

    excludeInstrumentation: /./
});