module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // Force all images to be decoded
  await page.evaluate(async () => {
    var images = document.getElementsByTagName('img');

    for(var i = 0; i < images.length ; i++) {
      await images[i].decode();
    }
  })

  // Reject analytics cookies
  await page.click('#ccc-reject-settings');

  // Wait for 200ms to allow any async code to finish
  await new Promise(resolve => setTimeout(resolve, 200));

  // add more ready handlers here...
};
