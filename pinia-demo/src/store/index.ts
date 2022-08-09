import { defineStore } from 'pinia'
import {allanStore} from './allan'

export const mainStore = defineStore('main', {
    state: () => {
        return {
            msg: 'Hello, world!',
            count: 0
        }
    },
    getters: {
        getCountBuff(state): string {
            console.log('getters被调用')
            return `${state.msg}***${state.msg}`
        },
        getMsgWithThis(): string {
            console.log('getters被调用')
            return `${this.msg}***${this.msg}`
        },
        getAllanStoreList(): string[] {
            return allanStore().moveList
        }
    },
    actions: {
        changeState() {
            this.count++
            this.msg = this.msg === 'Hello, world!' ? '疫情快过去吧' : 'Hello, world!';
        }
    }
})