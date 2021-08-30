//Compress String from:'aaaabcacccdddd' TO=> 4abca3c4d
const compressStr = (str) => {
  const comStr = [];
  const Str = [...str];
  let count = 1;

  Str.forEach((letter, index) => {
    if (letter === Str[index + 1]) {
      count += 1;
    } else {
      comStr.push(`${count > 1 ? count : ""}${letter}`);
      count = 1;
    }
  });
  console.log(comStr.join(""));
};

compressStr("aaaabcacccddd");
