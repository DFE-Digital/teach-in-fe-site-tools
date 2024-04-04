# Teach in FE Site Tools

## Visual regression testing
We run a daily check of some key pages within the site. These are rendered and visually checked against the reference renderings on a daily basis.

### Current testing status:
![Daily Visual Testing](https://github.com/DFE-Digital/teach-in-fe-site-tools/actions/workflows/visual-test.yaml/badge.svg)

### Running the tests locally
Because there are small differences with the way pages are rendered (particularly around anti-aliasing) between platforms, you can run the testing against a dockerised linux instance which will match the OS used on GitHub Actions.

#### Install dependencies:
```
npm i
```

#### Run the test suite:
```
npm run test-docker
```

### Updating the reference images

If the site has been updated then you will need to update the references images appropriately.

Before doing this you should run the tests and check that the 'diff' images are as you would expect.

#### Update the reference images:
```
npm run reference-docker
```

## License
Distributed under the MIT License. See `LICENSE.txt` for more information.