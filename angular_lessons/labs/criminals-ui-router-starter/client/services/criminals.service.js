angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.create = create;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
<<<<<<< HEAD
	self.addCriminal = addCriminal;
=======
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a


	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {
<<<<<<< HEAD
		
 		return $http.get('/api/criminals/' + id);
 	}

 	function addCriminal(criminal) {
 		return $http.post('/api/criminals', criminal);
 	}

=======
		return $http.get('/api/criminals/' + id);
	}
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
}
 
