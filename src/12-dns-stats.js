/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const names = [];
  domains.forEach((domain) => {
    const splitted = domain.split('.').reverse();
    for (let i = 0; i < splitted.length; i++) {
      if (i === 0) {
        names.push(`.${splitted[i]}`);
      } else {
        names.push(`${names[i - 1]}.${splitted[i]}`);
      }
    }
  });
  names.forEach((name) => {
    if (name in result) {
      result[name] += 1;
    } else {
      result[name] = 1;
    }
  });

  return result;
}

module.exports = getDNSStats;
