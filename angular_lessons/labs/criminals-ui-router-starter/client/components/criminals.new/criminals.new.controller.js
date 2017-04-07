CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

	vm.newCriminal = {};
	vm.createCriminal = createCriminal;



	activate();

	function activate() {}

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