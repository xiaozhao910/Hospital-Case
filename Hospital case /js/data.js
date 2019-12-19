
var storage = {};

storage.hospital = [

	['area','level','type','name','address','phone','imgUrl','time'],

	['ChaoYang','Tertiary hospital','hospital-1','1AAAAAAAAAAA','1BBBBBBBBBBBBB','010-85695756','img/hospital-1.jpg','14:30'],

	['ChaoYang','Tertiary hospital','hospital-1','2ABBBBBBBBB','2BBBBBBBBBBBBB','84205288','img/hospital-2.jpg','8:30'],
	['XiCheng','Tertiary hospital','hospital-1','3AAABBBBCCC','3BBBBBBBBBBBBB','63016616','img/hospital-3.jpg','9:30'],
	['ChaoYang','Tertiary hospital','hospital-1','4AAABBBCCCDD','4BBBBBBBBBBBBB','84205288','img/hospital-4.jpg','8:30'],
	['ChaoYang','Secondary hospital','hospital-2','5AAABBBCCCDE','5BBBBBBBBBBBBB','84205288','img/hospital-5.jpg','8:30'],
	['HaiDian','Secondary hospital','hospital-2','6AAABBBCCCDF','6BBBBBBBBBBBBB','59971160','img/hospital-6.jpg','8:30'],
	['FengTai','Tertiary hospital','hospital-2','7AAABBBCCCDG','7BBBBBBBBBBBBB','67689655','img/hospital-1.jpg','8:30'],

	['FengTai','Secondary hospital','hospital-2','8AAABBBCCCDH','8BBBBBBBBBBBBB','84205288','img/hospital-2.jpg','8:30'],
	['ShunYi','Tertiary hospital','hospital-2','9AAABBBCCCDI','9BBBBBBBBBBBBB','84205288','img/hospital-3.jpg','8:30'],
	['TongZhou','Tertiary hospital','Other','0AAABBBCCCDJ','0BBBBBBBBBBBBB','69543901','img/hospital-4.jpg','8:30'],
	
];

storage.department = [
	['hospitalName', ['departmentName'] ],

	['1AAAAAAAAAAA',['a','b','d'] ],
	['2ABBBBBBBBB',['a','b','c','d'] ],

	['3AAABBBBCCC', ['departmentName-1'] ],
	['4AAABBBCCCDD', ['departmentName-2'] ],
	['5AAABBBCCCDE',['departmentName-3'] ],
	['6AAABBBCCCDF', ['departmentName-4'] ],
	['7AAABBBCCCDG', ['departmentName-5'] ],
	['8AAABBBCCCDH', ['departmentName-6'] ],
	['9AAABBBCCCDI', ['departmentName-7'] ] ,
	['0AAABBBCCCDJ', ['departmentName-8'] ] 

]

var AjaxRemoteGetData = {};

AjaxRemoteGetData.getDistinctArea = function() {
	
	console.log('Remote data acquisition','getDistinctArea');

	var map = {};
	var arr = ['Hospital Area'];
	for(i=1,j=storage.hospital.length; i<j ; i++){
		var _d = storage.hospital[i][0];
		map[_d] =1;
	}
	for( k in map){
		arr.push(k);

	}
	console.log('Result',arr);
	return arr;
}
AjaxRemoteGetData.getLeveByArea  = function( area ){
	console.log('Remote data acquisition','getLeveByArea','arguments:',arguments);
	
	var map = {};
	var arr = ['Hospital Level'];
	for(i=1,j=storage.hospital.length; i<j ; i++){

		var _area = storage.hospital[i][0];
		var _d = storage.hospital[i][1];
		if(area == _area){
			map[_d] = 1;
		}
	}
	for( k in map){
		arr.push(k);

	}
	console.log('Result',arr);
	return arr;
}
AjaxRemoteGetData.getNameByAreaAndLevel = function( area , level ){
	console.log('Remote data acquisition','getNameByAreaAndLevel','arguments:',arguments);
	var map = {};
	var arr = ['Hospital Name'];
	for(i=1,j=storage.hospital.length; i<j ; i++){

		var _area = storage.hospital[i][0];
		var _level= storage.hospital[i][1];
		var _d = storage.hospital[i][3];
		if(level == _level && area == _area ){
			map[_d] = 1;
		}
	}
	for( k in map){
		arr.push(k);

	}
	console.log('Result',arr);
	return arr;
}
AjaxRemoteGetData.getDepartmentArrByHospitalName = function( area,level,hospitalName ){
	console.log('Remote data acquisition','getDepartmentArrByHospitalName','arguments:',arguments);
	var map = {};
	var arr = ['Depart. Name'];
	for(i=1,j=storage.department.length; i<j ; i++){

		var _hospitalName = storage.department[i][0];
		var _d = storage.department[i][1];
		if(hospitalName == _hospitalName ){
			map[_d] = 1;
		}
	}
	for( k in map){
		arr.push(k);

	}
	console.log('Result',arr);
	return arr;
}

AjaxRemoteGetData.getDistinctType=function(){
	console.log('Remote data acquisition','getDistinctType');

	var map = {};
	var arr = ['Hospital Type'];
	for(i=1,j=storage.hospital.length; i<j ; i++){
		var _d = storage.hospital[i][2];
		map[_d] =1;
	}
	for( k in map){
		arr.push(k);

	}
	console.log('Result',arr);
	return arr;
}
AjaxRemoteGetData.getDistinctLevel=function(){
	console.log('Remote data acquisition','getDistinctLevel');

	var map = {};
	var arr = ['Hospital Level'];
	for(i=1,j=storage.hospital.length; i<j ; i++){
		var _d = storage.hospital[i][1];
		map[_d] =1;
	}
	for( k in map){
		arr.push(k);

	}
	console.log('Result',arr);
	return arr;
}
AjaxRemoteGetData.getHospitalArrByFilter=function(type,level,area){
	console.log('Remote data acquisition','getHospitalArrByFilter','arguments:',arguments);
	var map = {};
	var arr = ['Hospital list'];
	for(i=1,j=storage.hospital.length; i<j ; i++){

		var _type= storage.hospital[i][2];
		var _area = storage.hospital[i][0];
		var _level= storage.hospital[i][1];

		var _d = storage.hospital[i][3];
		if( 
				(level == _level || level =='all') && 
				(area == _area || area == 'all' ) && 
				(type == _type || type == 'all')
			){
			arr.push(storage.hospital[i]);
		}
	}
	console.log('Result',arr);
	return arr;
}

