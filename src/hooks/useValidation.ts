/* eslint-disable no-control-regex */
/**
 *
 * @param text
 * @returns Check if email matches RFC 5322 validation rules
 */
function isEmail(text: string) {
  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  return emailRegex.test(text);
}

export {isEmail};
