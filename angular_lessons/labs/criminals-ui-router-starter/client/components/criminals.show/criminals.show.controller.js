CriminalsShowController.$inject = ['$stateParams', 'CriminalsService', '$state'];

function CriminalsShowController($stateParams, CriminalsService, $state) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);

		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				console.log(response.data.criminal);
				vm.current = response.data.criminal;
				$state.go('criminal', {
					criminalId: vm.current._id
				})
			});

	}
}


module.exports = CriminalsShowController;
