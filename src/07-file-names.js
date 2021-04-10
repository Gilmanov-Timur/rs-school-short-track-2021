/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const files = [];
  names.forEach((name) => {
    const count = files.filter((file) => file.name === name).length;
    if (count) {
      files.push({
        name,
        newName: `${name}(${count})`,
      });
    } else if (files.filter((file) => file.newName === name).length) {
      files.push({
        name,
        newName: `${name}(1)`,
      });
    } else {
      files.push({
        name,
        newName: name,
      });
    }
  });
  return files.map((file) => file.newName);
}

module.exports = renameFiles;
