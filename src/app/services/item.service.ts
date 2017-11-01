import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { Item } from '../models/item';

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();
  }

  getItems() {
    return this.items;
  }
}