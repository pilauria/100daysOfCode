const loginBox = message => {
  let horizontalRule = `+${'-'.repeat(message.length + 2)}+`;
  let emptyLine = `|${' '.repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
};

console.log(loginBox('To boldly go where no one has gone before.'));

// console.log(logInBox('To boldly go where no one has gone before.'));
