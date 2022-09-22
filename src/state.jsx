const user = {
	name: "Иван",
	surname: "Иванов",
	email: "ivan@ya.ru",
	id: "1",
	about: "Тут я рассказываю историю о своей жизни и увлечениях ...",
	avatar:
		"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=4000&q=80",
};

const users = {
	0: { name: "Нина", surname: "Яблочкова" },
	1: { name: "Ипатий", surname: "Вольпов" },
	2: { name: "Федор", surname: "Тютчев" },
	3: { name: "Владислав", surname: "Тетерин" },
	4: { name: "Константин", surname: "Петров" },
	5: { name: "Евлампий", surname: "Северский" },
};


export function getUser() {
  return user;
}
export function getUsers() {
  return users;
}
