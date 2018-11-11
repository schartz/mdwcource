import moment from 'moment';


function sayHello() {

	var day = moment().format('dddd');

	console.log("Hello fellow Human! Have a great " + day);
}

export default sayHello;