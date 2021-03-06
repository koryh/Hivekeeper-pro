import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import * as firebase from 'firebase';// import the firebase plugin

export interface MenuItem {
	title: string;
	component: any;
	icon: string;
}
const config = {
	apiKey: "AIzaSyCHdEEibwMTAeE7iPxWUieLFzzrHeKdflM",
	authDomain: "hivekeeper-9bcd7.firebaseapp.com",
	databaseURL: "https://hivekeeper-9bcd7.firebaseio.com",
	projectId: "hivekeeper-9bcd7",
	storageBucket: "hivekeeper-9bcd7.appspot.com",
	messagingSenderId: "604265744884"
}; //  access this information from the firebase console

@Component({
	templateUrl: 'app.html'
})
export class ionPropertyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = 'page-initial';
	showMenu: boolean = true;

	tabItem:any;

	homeItem: any;

	initialItem: any;

	messagesItem: any;

	invoicesItem: any;

	timelineItem: any;

	appMenuItems: Array<MenuItem>;

	yourPropertyMenuItems: Array<MenuItem>;

	accountMenuItems: Array<MenuItem>;

	helpMenuItems: Array<MenuItem>;

	fullname:string;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();
		this.tabItem = {component:'page-tabs'};
		this.homeItem = {component: 'page-home' };
		this.initialItem = {component: 'page-initial'};
		this.messagesItem = {component: 'page-message-list'};
		this.invoicesItem = {component: 'page-invoices'};
		this.timelineItem = {component: 'page-timeline'};
		this.fullname=localStorage.getItem('name');
		console.log(this.fullname);
		this.appMenuItems = [
			{title: 'Properties', component: 'page-property-list', icon: 'home'},
			{title: 'Brokers', component: 'page-broker-list', icon: 'people'},
			{title: 'Favorites', component: 'page-favorite-list', icon: 'heart'},
			{title: 'Get Pre-Approved', component: 'page-pre-approved', icon: 'checkmark-circle'},
		];

		this.yourPropertyMenuItems = [
			{title: 'Rent Out', component: 'page-your-property', icon: 'clipboard'},
			{title: 'Sell', component: 'page-your-property', icon: 'cash'},
			{title: 'Lease', component: 'page-your-property', icon: 'grid'}
		];


		this.accountMenuItems = [
			{title: 'Authentication', component: 'page-auth', icon: 'log-in'},
			{title: 'My Account', component: 'page-my-account', icon: 'contact'},
			{title: 'Logout', component: 'page-initial', icon: 'log-out'},
		];

		this.helpMenuItems = [
			{title: 'About', component: 'page-about', icon: 'information-circle'},
			{title: 'Support', component: 'page-support', icon: 'information-circle'}
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleLightContent();
			this.splashScreen.hide();
		});
		firebase.initializeApp(config);
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
	ionViewWillEnter(){
		console.log(this.fullname);
	}
}
