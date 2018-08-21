app.translator.plural = function(count) {
  return count == 1 ? 'one' : 'other';
};

function processRelativeTime(number, withoutSuffix, key, isFuture) {
  var format = {
    'm': ['წუთი', 'ერთი წუთი'],
    'h': ['საათი', 'ერთი საათი'],
    'd': ['დღე', 'ერთი დღე'],
    'dd': [number + ' დღის', number + ' დღის'],
    'M': ['თვე', 'ერთი თვის'],
    'MM': [number + ' თვე', number + ' თვოს'],
    'y': ['a წელი', 'ერთი წლის'],
    'yy': [number + ' წლის', number + ' წლის']
  };
  return withoutSuffix ? format[key][0] : format[key][1];
};

moment.locale('ge', {
  months : 'იანვარი_თებერვაი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
  monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
  weekdays : 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
  weekdaysShort : 'კვი_ორშ_სამშ_ოთხშ_ხუთშ_პარ_შაბ'.split('_'),
  weekdaysMin : 'კვ_ორ_სამ_ოთ_ხუ_პა_შა'.split('_'),
  longDateFormat : {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D. MMMM YYYY HH:mm',
    LLLL : 'dddd, D. MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
    },
  relativeTime : {
    future : ' %s ში',
    past : '%s წინ',
    s : 'რამოდენიმე წამის',
    m : 'წუთი',
    mm : '%d წამის',
    h : 'საათი',
    hh : '%d საათის',
    d : 'a დღე',
    dd : '%d დღის',
    M : 'a თვე',
    MM : '%d თვის',
    y : 'წელი',
    yy : '%d წლის'
  },
  ordinalParse: /\d{1,2}\./,
  ordinal : '%d.',
  week : {
    dow : 1, // Monday is the first day of the week.
    doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
});