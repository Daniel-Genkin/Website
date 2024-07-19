import type { Router } from "vue-router";

export function goToExternal(url: string): void {
    window.open(url, '_blank')!.focus();
}

export function goToInternal(router: Router, pageName: string): void {
    router.push(pageName);
}