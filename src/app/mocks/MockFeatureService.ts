import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Feature } from "../feature-toggle/model/feature.model";

@Injectable({
    providedIn: "root"
})
export class MockFeatureService {
    findById(): Observable<Feature> {
        const feature = new Feature();
        const subject: Subject<Feature> = new Subject<Feature>();
        subject.next(feature);
        return subject.asObservable();
    }

    findAll() {
        const subject: Subject<Feature[]> = new Subject<Feature[]>();
        subject.next([new Feature()]);
        return subject.asObservable();
    }

    create(): Observable<Feature> {
        const subject: Subject<Feature> = new Subject<Feature>();
        subject.next(new Feature());
        return subject.asObservable();
    }

    update(): Observable<Feature> {
        return this.create();
    }

    save(): Observable<Feature> {
        return this.create();
    }

    archive(): Observable<Feature> {
        return this.create();
    }
}