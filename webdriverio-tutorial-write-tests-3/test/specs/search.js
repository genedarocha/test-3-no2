describe('Volvo Cars Test Suite', () => {


  it('Test 1 - IT should open the url and check that the title is correct', () => {
    browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    expect(browser).toHaveTitle(
      'A million more | Volvo Cars - International'
    );
  });

  it('Test 2 - IT should find cookie screen and click the accept buttopn', () => {
    const searchBtn = $('.optanon-alert-box-button-middle > .optanon-allow-all');
    searchBtn.click();

  });

  
  }) 





describe('Volvo Test Suite using WDIO - Image Comparison ', () => {
  it('Test 3 - IT should save some screenshots', () => {
      browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
      // Save a screen
        browser.saveScreen('examplePaged', { /* some options */ });
      // Save an element
      browser.saveElement($('#TextStatement-1 > .bp'), 'firstButtonElement', { /* some options */ });
      // Save a full page screenshot
        browser.saveFullPageScreen('fullPage', { /* some options */ });
      //   // Save a full page screenshot with all tab executions
        browser.saveTabbablePage('save-tabbable', { /* some options, use the same options as for saveFullPageScreen */ });
  });
  it('Test 4 - IT should compare successful with a baseline', () => {
      browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
      // Check a screen
        expect(browser.checkScreen('examplePaged', { /* some options */ })).toEqual(0);
      // Check an element
      expect(browser.checkElement($('#TextStatement-1 > .bp'), 'firstButtonElement', { /* some options */ })).toEqual(0);
      // Check a full page screenshot
        expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).toEqual(0);
      //   // Check a full page screenshot with all tab executions
        expect(browser.checkTabbablePage('check-tabbable', { /* some options, use the same options as for checkFullPageScreen */ })).toEqual(0);
  });

  it('Test 5 - IT should check to see if it has Our Cars on the top right', () => {
    const searchBtn = $('#nav\\:topNavCarMenu > em');
 //   expect(searchBtn).toHaveValueContaining('Our Cars', { ignoreCase: true }); // assertion the value of searchInput to be 'Our Cars'
    searchBtn.click(); // to display a list of Volvo Cars 

  });

    // IT should check to see if it has the Volvo logo on the left hand side 
    it('Test 6 - IT should check to see if it has Volvo logo on the top left', () => {
      const searchInput = $('  ._SiteNav-ah > ._SiteNav-ag > ._SiteNav-a');
      console.log(searchInput); // write out to console the value of searchInput
   //   expect(searchInput).toHaveValueContaining('volvo-wordmark-black.svg', { ignoreCase: true }); // assertion the value of searchInput to be 'Our Cars'
      searchInput.click(); // to display a list of Volvo Cars 
  });

});



// ._SiteNav-ah > ._SiteNav-ag > ._SiteNav-a

// const searchBtn = $('.optanon-alert-box-button-middle > .optanon-allow-all')
// https://www.volvocars.com/intl/v/car-safety/a-million-more
//  #sitenav-v2-sidenav-toggle > div > span > svg