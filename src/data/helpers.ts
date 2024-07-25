
export function goToHash(hash: string): void {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }) 
}