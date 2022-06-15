export const configureHelpFile = () => {

  const user = JSON.parse(localStorage.getItem("user") || '').user

  return (
    `Тут должна быть какая-то полезная информация и помощь для пользователя\n` +
    `Тут мы запишем время скачивания файла ${new Date().toDateString()}\n` +
    `Тут мы запишем информацию о пользователе\n` +
    JSON.stringify(user, null, 2)
  )
}