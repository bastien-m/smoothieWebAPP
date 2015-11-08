angular.module('smoothieApp')
.controller('SignupCtrl', ['$scope', function($scope) {

  $scope.imageUpload = function() {
    var avatarField = document.getElementById('avatarField');
    console.log('imageUpload');
    console.log(self);
    if (avatarField.files && avatarField.files[0]) {
      console.log('into if');
      var reader = new FileReader();
      reader.onload = function(e) {
        console.log('onload');
        document.getElementById('avatar-container').src = e.target.result;
      };

      reader.readAsDataURL(this.file[0]);
    }
  };

}]);
