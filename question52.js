function match(s, pattern) {
  if(s == null || pattern == null) {
    return false;
  }

  const charMatch = (s, pattern, i, j) => {
    if(i == s.length && j == pattern.length) {
      return true;
    }
    if(i != s.length && j == pattern.length) {
      return false;
    }

    if(j < pattern.length - 1 && pattern[j + 1] == '*') {
      if(s[i] == pattern[j] || (pattern[j] == '.' && i < s.length)) {
        return charMatch(s, pattern, i + 1 , j) || charMatch(s, pattern, i, j + 2) || charMatch(s, pattern, i + 1, j + 2);
      } else {
        return charMatch(s, pattern, i, j + 2);
      }
    } else {
      if(s[i] == pattern[j] || (pattern[j] == '.' && i < s.length)) {
        return charMatch(s, pattern, i + 1, j + 1);
      } else {
        return false;
      }
    }
  }

  return charMatch(s, pattern, 0, 0);
}

console.log(match('', '.*'));