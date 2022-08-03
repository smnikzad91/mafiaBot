exports.main = async () => {
    return { mainKeyboard:
        await JSON.stringify({
            keyboard: [
              ['دریافت نقش'],
              ['معرفی ربات', 'تماس با ما', 'درباره ما']
            ],
            resize_keyboard: true
          })
    }
}

exports.role = async () => {
    return { mainKeyboard:
        await JSON.stringify({
            keyboard: [
              ['مذاکره 10', 'تکاور 13', 'تکاور 10'],
              ['صفحه اصلی']
            ],
            resize_keyboard: true
          })
    }
}

exports.ranger10 = async () => {
    return { mainKeyboard:
        await JSON.stringify({
            keyboard: [
              ['رندومایز مجدد تکاور ده نفره'],
              ['انتخاب سناریو']
            ],
            resize_keyboard: true
          })
    }
}

exports.ranger13 = async () => {
  return { mainKeyboard:
      await JSON.stringify({
          keyboard: [
            ['رندومایز مجدد تکاور سیزده نفره'],
            ['انتخاب سناریو']
          ],
          resize_keyboard: true
        })
  }
}

exports.mozakere = async () => {
  return { mainKeyboard:
      await JSON.stringify({
          keyboard: [
            ['رندومایز مجدد مذاکره ده نفره'],
            ['انتخاب سناریو']
          ],
          resize_keyboard: true
        })
  }
}