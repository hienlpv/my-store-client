import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = 'http://localhost:4200/';
    }

    get<T>(url: string) {
        return this.http.get<T>(`${this.baseUrl}${url}`);
    }
}
