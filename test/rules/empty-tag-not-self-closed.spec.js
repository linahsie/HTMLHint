const expect = require('expect.js');

const HTMLHint = require('../../dist/htmlhint.js').default;

const ruldId = 'empty-tag-not-self-closed';
const ruleOptions = {};

ruleOptions[ruldId] = true;

describe(`Rules: ${ruldId}`, function() {
  it('The empty tag closed should result in an error', function() {
    const code = '<br /><img src="test.jpg"/>';
    const messages = HTMLHint.verify(code, ruleOptions);
    expect(messages.length).to.be(2);
    expect(messages[0].rule.id).to.be(ruldId);
    expect(messages[0].line).to.be(1);
    expect(messages[0].col).to.be(1);
    expect(messages[0].type).to.be('warning');
    expect(messages[1].rule.id).to.be(ruldId);
    expect(messages[1].line).to.be(1);
    expect(messages[1].col).to.be(7);
    expect(messages[1].type).to.be('warning');
  });

  it('Not closed empty tag should not result in an error', function() {
    const code = '<br><img src="a.jpg">';
    const messages = HTMLHint.verify(code, ruleOptions);
    expect(messages.length).to.be(0);
  });
});
