const session = document.querySelectorAll('.session');

session.onclick = (this) => {
    session.classList.remove('active');
    this.classList.add('active')
}