//*Archivo creado para simular data con la que se trabajara en la home

const allPets = [
  {
    nombre: "Rocky",
    raza: "Bulldog",
    tamano: "Mediano",
    edad: 13,
    sexo: "Hembra",
    foto: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    peso: 8.8,
    descripcion:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    nombre: "Cooper",
    raza: "Maine Coon",
    tamano: "Pequeño",
    edad: 14,
    sexo: "Macho",
    foto: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    peso: 10.6,
    descripcion:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    nombre: "Jack",
    raza: "Persian",
    tamano: "Mediano",
    edad: 8,
    sexo: "Macho",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 6.0,
    descripcion:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    nombre: "Daisy",
    raza: "Persian",
    tamano: "Pequeño",
    edad: 5,
    sexo: "Hembra",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 4.5,
    descripcion:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    nombre: "Jack",
    raza: "Labrador Retriever",
    tamano: "Mediano",
    edad: 6,
    sexo: "Macho",
    foto: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    peso: 24.9,
    descripcion:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    nombre: "Bella",
    raza: "Ragdoll",
    tamano: "Grande",
    edad: 12,
    sexo: "Macho",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 14.5,
    descripcion:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    nombre: "Max",
    raza: "Poodle",
    tamano: "Pequeño",
    edad: 8,
    sexo: "Hembra",
    foto: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    peso: 12.2,
    descripcion:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    nombre: "Daisy",
    raza: "Siamese",
    tamano: "Grande",
    edad: 12,
    sexo: "Hembra",
    foto: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    peso: 15.1,
    descripcion:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    nombre: "Max",
    raza: "Bengal",
    tamano: "Grande",
    edad: 11,
    sexo: "Hembra",
    foto: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    peso: 9.6,
    descripcion:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    nombre: "Jack",
    raza: "Golden Retriever",
    tamano: "Grande",
    edad: 6,
    sexo: "Macho",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 20.7,
    descripcion:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    nombre: "Lucy",
    raza: "Siamese",
    tamano: "Pequeño",
    edad: 13,
    sexo: "Hembra",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 10.8,
    descripcion:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    nombre: "Rocky",
    raza: "Labrador Retriever",
    tamano: "Mediano",
    edad: 6,
    sexo: "Hembra",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 10.8,
    descripcion:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    nombre: "Sadie",
    raza: "Persian",
    tamano: "Pequeño",
    edad: 14,
    sexo: "Hembra",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 17.7,
    descripcion:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    nombre: "Max",
    raza: "Poodle",
    tamano: "Grande",
    edad: 9,
    sexo: "Macho",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 20.3,
    descripcion:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    nombre: "Cooper",
    raza: "Persian",
    tamano: "Mediano",
    edad: 15,
    sexo: "Hembra",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 19.9,
    descripcion:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    nombre: "Jack",
    raza: "Bulldog",
    tamano: "Grande",
    edad: 3,
    sexo: "Macho",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 6.8,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  },
  {
    nombre: "Charlie",
    raza: "Ragdoll",
    tamano: "Pequeño",
    edad: 7,
    sexo: "Macho",
    foto: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
    peso: 10.1,
    descripcion:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    nombre: "Daisy",
    raza: "Labrador Retriever",
    tamano: "Mediano",
    edad: 2,
    sexo: "Hembra",
    foto: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    peso: 16.6,
    descripcion:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    nombre: "Bella",
    raza: "Ragdoll",
    tamano: "Grande",
    edad: 9,
    sexo: "Macho",
    foto: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    peso: 12.9,
    descripcion:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    nombre: "Jack",
    raza: "Bulldog",
    tamano: "Pequeño",
    edad: 13,
    sexo: "Macho",
    foto: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    peso: 24.5,
    descripcion:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
];

module.exports = allPets;