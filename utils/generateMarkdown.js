
//create markdown text bulk
function generateMarkdown(data) {

  //switch case to get license badge/img
  let img;
  switch(data.license) {
    case 'MIT':
      img = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case 'Apache license 2.0':
      img = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'Mozilla Public License 2.0':
      img = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
      break;
    case 'Creative Commons Attribution 4.0':
      img = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)]"
      break;
  }

  //text that will go in readme
  const mdText =  `
  ##${data.title.toUpperCase()}

  ## TABLE OF CONTENTS
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [Contact](#contact)

  ## LICENSE
  ${data.license}${img}

  ## DESCRIPTION
  ${data.description}

  ## INSTALLATION
  ${data.installation}

  ## USAGE
  ${data.usage}

  ## CONTRIBUTORS
  ${data.contributors}

  ## TESTS
  ${data.test}

  ## CONTACT
  ${data.questions}
  https://github.com/${data.github}
  `;
  return mdText;
}

export default generateMarkdown

