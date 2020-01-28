import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute, Params, NavigationEnd, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as global from '../services/global';
import { CommonUrlsService } from '../../shared/services/common-urls.service';
@Injectable()
export class DataService {
    token = new BehaviorSubject<any>(null);
    user_name = new BehaviorSubject<any>(null);
    public headers: any;
    private serverUrl = global.serverUrl;
    // private serverUrl = "http://54.153.150.154:3000/";
    // private serverUrl = "http://globalpharmahub.com:3000/";
    headerInterval = null;

    constructor(public http: Http, private router: Router, public CUS: CommonUrlsService) {
        // this.headerInterval = setInterval(() => {
        //     if (localStorage.getItem("x-access-token")) {
        //         clearInterval(this.headerInterval);
        //     }
        //     this.setHeaders();
        // }, 1000);
        this.setHeaders();
        // this.updateDataFromLocalStorage();
    }

    logOutUser() {
        localStorage.clear();
        this.token.next(null);
        this.user_name.next(null);
        this.headers = new Headers({
            'content-type': 'application/json',
            'accesstoken': null,
        });
        this.router.navigate([this.CUS._URL.LOGIN]);
    }

    setHeaders() {
        // if (localStorage.getItem("x-access-token") && localStorage.getItem("email")) {
        //     this.headers = new Headers({
        //         'content-type': 'application/json',
        //         'accesstoken': localStorage.getItem("x-access-token"),
        //     });
        // } else {
            this.headers = new Headers({
                'content-type': 'application/json',
                // 'accesstoken': localStorage.getItem("x-access-token"),
            });
        // }
    }

    saveUserInfo(info: any) {
        if (info) {
            localStorage.setItem('user_token', info);
        } else {
            this.logOutUser();
        }
    }

    getOtherData(url, data) {
        return this.http.post(this.serverUrl + url, data, { headers: this.headers }).pipe()
            .map((res) => {
                return res.json();
            });
    }

    getSetting(page) {
        return this.http.post(this.serverUrl + 'getSetting', JSON.stringify(page), { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    getListTotal(url) {
        return this.http.get(this.serverUrl + url, { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    getListSort(url, page) {
        return this.http.post(this.serverUrl + url, JSON.stringify(page), { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    getListData(url) {
        return this.http.get(this.serverUrl + url, { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    storeData(url, data) {
        return this.http.post(this.serverUrl + url, JSON.stringify(data), { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    getDataById(url) {
        return this.http.get(this.serverUrl + url, { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    updateData(url, data) {
        return this.http.put(this.serverUrl + url, JSON.stringify(data), { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    deleteData(url, data) {
        return this.http.post(this.serverUrl + url, JSON.stringify(data), { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    changeAction(url, data) {
        return this.http.post(this.serverUrl + url, JSON.stringify(data), { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    login(url, data) {
        return this.http.post(this.serverUrl + url, JSON.stringify(data), { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    forgotpassword(url, data) {
        return this.http.post(this.serverUrl + url, JSON.stringify(data))
            .map((res) => {
                return res.json();
            });
    }

    logout(url, data) {
        return this.http.post(this.serverUrl + url, JSON.stringify(data), { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    searchData(url, data) {
        return this.http.post(this.serverUrl + url, JSON.stringify(data), { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

    uploadFile(url, files) {
        return this.http.post(this.serverUrl + url, files, { headers: this.headers })
            .map((res) => {
                return res.json();
            });
    }

}
