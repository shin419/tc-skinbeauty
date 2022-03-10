import { date, Notify, Screen } from 'quasar'
import isEqual from 'lodash/isEqual'
import omitBy from 'lodash/omitBy'
import { getAuth } from "firebase/auth";
const auth = getAuth();
export default {
  ShowNotify (message, isError) {
    if (typeof message === 'object') {
      message = JSON.stringify(message)
    }
    Notify.create({ message: message, html: true, icon: isError ? 'error' : 'done', color: isError ? 'red' : 'green', timeout: 1000 })
  },
  formatNumber (value) {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',
    });
    return formatter.format(value)
    // let val = (value / 1).toFixed(0).replace(',', ',')
    // return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  },
  cloneVal (val) {
    return JSON.parse(JSON.stringify(val))
  },
  formatDay (day) {
    return date.formatDate(day || new Date(), 'DD/MM/YYYY')
  },
  dayOfHours (day) {
    return date.formatDate(day || new Date(), 'DD/MM/YYYY HH:mm')
  },
  dataNew (objCu, objMoi) {
    return omitBy(objMoi, (field, key) => {
      return isEqual(field, objCu[key])
    })
  },
  getWidthWindow () {
    return Screen.width
  },
  getHeightWindow () {
    return Screen.height
  },
  resToolbar (q) {
    return [[
      {
        label: q.lang.editor.align,
        icon: q.iconSet.editor.align,
        fixedLabel: true,
        list: 'only-icons',
        options: ['left', 'center', 'right', 'justify']
      },
      {
        label: q.lang.editor.align,
        icon: q.iconSet.editor.align,
        fixedLabel: true,
        options: ['left', 'center', 'right', 'justify']
      }
    ],
      ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
      ['token', 'hr', 'link', 'custom_btn'],
      ['print', 'fullscreen'],
      [
        {
          label: q.lang.editor.formatting,
          icon: q.iconSet.editor.formatting,
          list: 'no-icons',
          options: [ 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code' ]
        },
        {
          label: q.lang.editor.fontSize,
          icon: q.iconSet.editor.fontSize,
          fixedLabel: true,
          fixedIcon: true,
          list: 'no-icons',
          options: [ 'size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7' ]
        },
        {
          label: q.lang.editor.defaultFont,
          icon: q.iconSet.editor.font,
          fixedIcon: true,
          list: 'no-icons',
          options: [ 'default_font', 'arial', 'arial_black', 'comic_sans', 'courier_new', 'impact', 'lucida_grande', 'times_new_roman', 'verdana' ]
        },
        'removeFormat'
      ],
      ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
      ['undo', 'redo'],
      ['viewsource']
    ]
  },
  sortNhomSp (nhom, sp) {
    let isCheck = true
    if (nhom) {
      isCheck = nhom.id + '' === sp.category + ''
    }
    return isCheck
  },
  sortPriceSp (price, sp) {
    let isCheck = true
    if (price) {
      isCheck = (parseInt(sp.price) >= price.min) && (parseInt(sp.price) <= price.max)
    }
    return isCheck
  },
  getUser () {
    return auth && auth.currentUser
  }
}
