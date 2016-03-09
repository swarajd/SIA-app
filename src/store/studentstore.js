const LOCALSTORAGE_KEY = 'sia-students-info'

class StudentStore {
  constructor() {
    riot.observable(this)

    const json = window.localStorage.getItem(LOCALSTORAGE_KEY)
    if (!json) {
      this._students = []
    } else {
      this._students = (json && JSON.parse(json)) || []
    }
  }

  getStudentByName(name) {
    return this._students[name]
  }

  saveToStorage() {
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this._students))
  }
}

const instance = new StudentStore()

instance.on(riot.VE.LOAD_STUDENTS, () => {
  instance.trigger(riot.SE.STUDENTS_CHANGED, instance._students)
})

instance.on(riot.VE.ADD_STUDENT, data => {

  //filter old instances
  instance._students = instance._students.filter(student => {
    return student.name != data.name
  })

  //add the new one
  instance._students = instance._students.concat({
    name: data.name,
    email: data.email,
    year: data.year,
    paid: data.paid
  })

  instance.saveToStorage()
  instance.trigger(riot.SE.STUDENTS_CHANGED, instance._students)
})

instance.on(riot.VE.REMOVE_STUDENT, name => {
  instance._students = instance._students.filter(student => {
    return student.name !== name
  })
  instance.saveToStorage()
  instance.trigger(riot.SE.STUDENTS_CHANGED, instance._students)
})

riot.control.addStore(instance)
export default instance;
