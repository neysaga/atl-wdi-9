<<<<<<< HEAD
CriminalsShowController.$inject = ['$stateParams', 'CriminalsService', '$state'];

function CriminalsShowController($stateParams, CriminalsService, $state) {
=======
CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
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
<<<<<<< HEAD
				console.log(response.data.criminal);
				vm.current = response.data.criminal;
				$state.go('criminal', {
					criminalId: vm.current._id
				})
			});

	}
}


=======
				vm.current = response.data.criminal;
			});
	}
}

>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
module.exports = CriminalsShowController;
