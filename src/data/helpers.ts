
export function goToExternal(url: string): void {
    window.open(url, '_blank')!.focus();
}

export function goToHash(hash: string): void {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }) 
}