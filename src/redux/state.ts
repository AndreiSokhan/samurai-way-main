type PostPropsType = {
   id: number
   message: string
   likesCount: number
}
type DialogPropsType = {
   id: number
   name: string
}
type MessagePropsType = {
   id: number
   message: string
}

type ProfilePagePropsType = {
   posts: Array<PostPropsType>
}
type DialogsPagePropsType = {
   dialogs: Array<DialogPropsType>
   messages: Array<MessagePropsType>
}
type NavbarPropsType = {}

type RootStatePropsType = {
   profilePage: ProfilePagePropsType
   dialogsPage: DialogsPagePropsType
   navbar: NavbarPropsType
}

let state: RootStatePropsType = {
   profilePage: {
      posts: [
         {id: 1, message: 'Hi, how are you', likesCount: 12},
         {id: 2, message: "it's my first post in my social network", likesCount: 2},
         {id: 2, message: "it's amazing", likesCount: 1},
         {id: 2, message: "i'm a future it specialist", likesCount: 43}
      ]
   },
   dialogsPage: {
      dialogs: [
         {id: 1, name: 'Dima'},
         {id: 2, name: 'Max'},
         {id: 3, name: 'Lera'},
         {id: 4, name: 'Dasha'},
         {id: 5, name: 'Igor'}
      ],
      messages: [
         {id: 1, message: 'Hi'},
         {id: 2, message: 'How are you?'},
         {id: 3, message: 'What are you doing'},
         {id: 4, message: 'What you thin about IT-KAMASUTRA?'}
      ]
   },
   navbar: {}
}
export default state