export const Storage = {
    prefix: 'laravel_vue',

    set (key, data) {
        localStorage.setItem(this.getKey(key), data)
    },

    get (key) {
        return localStorage.getItem(this.getKey(key))
    },

    setJSON (key, data) {
        let json = JSON.stringify(data)
        this.set(key, json)
    },

    getJSON (key) {
        let data = this.get(this.getKey(key))
        return JSON.parse(data)
    },

    getKey (key) {
        return `${this.prefix}_${key}`
    }
}
