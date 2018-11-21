import { observable, action } from "mobx";

class IceCreamStore {
	@observable iceCreams = [];
 
    @action addIceCream(flavor ,color) {
	this.iceCreams.push({ flavor, color });
    }
}

const store = new IceCreamStore();
export default store;