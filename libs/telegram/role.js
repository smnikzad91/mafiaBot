const roles = {
    ranger10: ['شهروند', 'شهروند', 'دکتر', 'کارآگاه', 'نگهبان', 'تکاور', 'تفنگ دار', 'گادفادر', 'ناتو', 'گروگانگیر'],
    ranger13: ['شهروند', 'شهروند', 'دکتر', 'کارآگاه', 'نگهبان', 'تکاور', 'تفنگ دار', 'گادفادر', 'ناتو', 'گروگانگیر', 'شهروند', 'شهروند', 'مافیا'],
    mozakere: ['شهروند', 'شهروند', 'دکتر', 'کارآگاه', 'زره پوش', 'اسنایپر', 'خبرنگار', 'گادفادر', 'مذاکره کننده', 'مافیا'],
}

exports.ranger10Roles = async () => {
    let arr = await this.shuffle(roles.ranger10)
    // console.log(arr)
    return arr
}

exports.ranger13Roles = async () => {
    let arr = await this.shuffle(roles.ranger13)
    return arr
}

exports.mozakereRoles = async () => {
    let arr = await this.shuffle(roles.mozakere)
    return arr
}

exports.shuffle = async (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array; 
}