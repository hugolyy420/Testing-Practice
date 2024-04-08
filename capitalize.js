export default function capitalize(str) {
  if (str === undefined) return '';
  let regex = /^[a-zA-Z]+$/;
  if (!regex.test(str.charAt(0))) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
