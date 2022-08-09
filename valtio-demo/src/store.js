import { proxy, ref } from 'valtio'

const state = proxy({ 
    firstName: "",
    lastName: "",
    users: [{firstName: 'chen', lastName: 'yu'}],
    dom: ref(document.body),
    // post: fetch(url).then((res) => res.json())
})

export default state