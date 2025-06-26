// export const classNameChanger = (index, offset) => {
//   if (offset[0] === 'incremented') {
//     if (index + (offset[1] % 5) <= 5) {
//       return `calendarIndex${index + (offset[1] % 5)}`;
//     }
//     return `calendarIndex${(index + (offset[1] % 5)) % 5}`;
//   } else if (offset[0] === 'decremented') {
//     // console.log('index from function', index);
//     // console.log('Modulo checking', offset[1] % 5);
//     if ((index - (offset[1] % 5)) >= 1) {
//       console.log((index - (offset[1] % 5)) % 5);
//       return `calendarIndex${index - (offset[1] % 5)}`;
//     }
//     return `calendarIndex${5 - Math.abs((index - (offset[1] % 5)))}`;
//   }
//   return `calendarIndex${index}`;
// };

export const classNameChanger = (index, offset) => {
  if (offset[0] === 'incremented') {
    if (index + (offset[1] % 5) <= 5) {
      return `calendarIndex${index + (offset[1] % 5)}`;
    }
    return `calendarIndex${(index + (offset[1] % 5))%5}`;
  } else if (offset[0] === 'decremented') {
    // console.log('index from function', index);
    // console.log('Modulo checking', offset[1] % 5);
    if (index - ((Math.abs(offset[1])) % 5) >= 1) {
      console.log((index - (offset[1] % 5)) % 5);
      return `calendarIndex${(index - ((Math.abs(offset[1])) % 5))}`;
    }
    return `calendarIndex${5 - Math.abs(index - (offset[1] % 5))}`;
  }
  return `calendarIndex${index}`;
};
