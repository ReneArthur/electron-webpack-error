import { api } from '../../preload'

declare global {
    interface Window {
        API: typeof api
    }
    const API: typeof api
}