
//create markdown text bulk
function generateMarkdown(data) {
  const mdText =  `
  ##${data.title.toUpperCase()}

  ## TABLE OF CONTENTS
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Contact](#contact)

  ## DESCRIPTION
  ${data.description}

  ## INSTALLATION
  ${data.installation}

  ## USAGE
  ${data.usage}

  ## LICENSE
  ${data.license}

  ## CONTRIBUTORS
  ${data.contributors}

  ## TESTS
  ${data.test}

  ## CONTACT
  ${data.questions}
  `;
  return mdText;
}

export default generateMarkdown

