CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

<<<<<<< HEAD
	vm.newCriminal = {};
	vm.createCriminal = createCriminal;


=======
	vm.createCriminal = createCriminal;
	vm.newCriminal = {};
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a

	activate();

	function activate() {}

<<<<<<< HEAD
  	function loadAllCriminals(){
  		CriminalsService.loadAll();
  	}



	function createCriminal() {
		CriminalsService.addCriminal(vm.newCriminal).then(function(response){
			vm.newCriminal = {};
			loadAllCriminals();
			$state.go('criminals');
		});
		
	}
}

module.exports = CriminalsNewController;
=======
	function createCriminal() {
		CriminalsService
			.create(vm.newCriminal)
			.then(function resolve(response) {
				const id = response.data.criminal._id;
				$state.go('criminalsShow', { criminalId: id });
			});
	}
}

module.exports = CriminalsNewController;
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
