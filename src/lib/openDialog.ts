import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'
export const openDialog = (options) => {
    const { header, content, ok, cancel, closeOnClickOverlay } = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp({
        render () {
            return h(Dialog, {
                visible: true,
                'onUpdate:visible': value => {
                    if (value === false) {
                        close()
                    }
                },
                ok,cancel,closeOnClickOverlay
            }, {
                header, content
            })
        }
    })
    app.mount(div)
    const close = () => {
        //@ts-ignore
        app.unmount(div)
        div.remove()
    }
}