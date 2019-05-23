import { Injectable, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({providedIn: 'root'})



export class LocalStorageService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    clear() {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.clear();
        }
    }

    setItem(key: string, value: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(key, value);
        }
    }

    getItem(key: string) {
        if (isPlatformBrowser(this.platformId)) {
           return localStorage.getItem(key);
        }
    }

    removeItem(key: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem(key);
        }
    }

    key(index: number) {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.key(index);
        }
    }

    length() {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.length;
        }
    }


}

export class WindowService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    scrollTo(x: number , y: number) {
        if (isPlatformBrowser(this.platformId)) {
         window.scrollTo(x, y);
        }
    }    

    open(url?: string, target?: string, feature?: string, replace?: boolean) {
        if (isPlatformBrowser(this.platformId)) {
        window.open(url, target, feature, replace);
        }
    }

}