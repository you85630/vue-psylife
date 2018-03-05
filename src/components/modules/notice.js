var notice = {
  primary (e) {
    let parent = document.createElement('div')
    parent.setAttribute('class', 'alert-notice')
    parent.setAttribute('id', 'alert-notice')
    document.body.appendChild(parent)
    parent.innerHTML =
      '<div class="primary"><i class="alert-remove" id="remove">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i><span>' +
      e.title +
      '</span></p><p class="notice-desc">' +
      e.desc +
      '</p></div>'
    document.getElementById('remove').onclick = function () {
      document.getElementById('alert-notice').remove()
    }
  },
  success (e) {
    let parent = document.createElement('div')
    parent.setAttribute('class', 'alert-notice')
    parent.setAttribute('id', 'alert-notice')
    document.body.appendChild(parent)

    parent.innerHTML =
      '<div class="success"><i class="alert-remove" id="remove">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i><span>' +
      e.title +
      '</span></p><p class="notice-desc">' +
      e.desc +
      '</p></div>'
    document.getElementById('remove').onclick = function () {
      document.getElementById('alert-notice').remove()
    }
  },
  warning (e) {
    let parent = document.createElement('div')
    parent.setAttribute('class', 'alert-notice')
    parent.setAttribute('id', 'alert-notice')
    document.body.appendChild(parent)

    parent.innerHTML =
      '<div class="warning"><i class="alert-remove" id="remove">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i><span>' +
      e.title +
      '</span></p><p class="notice-desc">' +
      e.desc +
      '</p></div>'
    document.getElementById('remove').onclick = function () {
      document.getElementById('alert-notice').remove()
    }
  },
  error (e) {
    let parent = document.createElement('div')
    parent.setAttribute('class', 'alert-notice')
    parent.setAttribute('id', 'alert-notice')
    document.body.appendChild(parent)

    parent.innerHTML =
      '<div class="error"><i class="alert-remove" id="remove">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i><span>' +
      e.title +
      '</span></p><p class="notice-desc">' +
      e.desc +
      '</p></div>'
    document.getElementById('remove').onclick = function () {
      document.getElementById('alert-notice').remove()
    }
  }
}
export default notice
