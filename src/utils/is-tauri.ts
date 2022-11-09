const isTauri = Boolean(typeof window !== 'undefined' && window != undefined && (window as any).__TAURI__ !== undefined)
export default isTauri
