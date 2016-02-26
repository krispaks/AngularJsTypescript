exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./wwwroot/e2e/specs/herodetail/herodetail.ui.spec.js',
            './wwwroot/e2e/specs/herolist/herolist.ui.spec.js']
}