import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Feature } from "../model/feature.model";

@Injectable({
    providedIn: "root"
})
export class FeatureService {
    readonly url: string = "http://localhost:8080/api/featuretoggle";

    constructor(
        private http: HttpClient
    ) {
    }

    findById(id: string): Observable<Feature> {
        let endpoint = this.url + "/" + id;
        return this.http.get<Feature>(endpoint);
    }

    findAll(): Observable<Feature[]> {
        let endpoint = this.url;
        return this.http.get<Feature[]>(endpoint);
    }

    create(
        feature: Feature
    ): Observable<Feature> {
        let endpoint = this.url;
        return this.http.post<Feature>(endpoint, feature);
    }

    update(
        feature: Feature
    ): Observable<Feature> {
        let endpoint = this.url + "/" + feature.id;
        return this.http.put<Feature>(endpoint, feature);
    }

    archive(
        id: number
    ): Observable<Feature> {
        let endpoint = this.url + "/archive/" + id;
        return this.http.put<Feature>(endpoint, null);
    }

    invert(
        id: number, inverted: boolean
    ): Observable<Feature> {
        let endpoint = this.url + "/" + id + "/" + inverted;
        return this.http.put<Feature>(endpoint, null);
    }

    save(
        feature: Feature
    ): Observable<Feature> {
        if (feature.id) {
            return this.update(feature);
        } else {
            return this.create(feature);
        }
    }
}