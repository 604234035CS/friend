import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { FrienddetailPage } from '../frienddetail/frienddetail';
import { Friend } from '../../models/friendmodel';



@Component({
  selector: 'page-friendlist',
  templateUrl: 'friendlist.html',
})
export class FriendlistPage {

  friends:Friend;
  category:String;

  constructor(public friendRest : FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category");
    this.friendRest.getfriendlist().subscribe(data=>{
      this.friends=data.filter (friend => friend.category === this.category);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendlistPage');
  }
  goBack(){
    this.navCtrl.pop();
  }
  showDetail(studentid:number){
    this.navCtrl.push(FrienddetailPage,
      {studentid:studentid}
      );
  }

}
