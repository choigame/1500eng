
// https://codepen.io/lonekorean/pen/PozMjgO
var app = angular.module("configUIApp", 
[
]);
app.controller("configUICtrl", function($scope) {

$scope.audioPitch = 1
$scope.audioRate = 0.8
$scope.adjAudioTime = 8
$scope.selectedVoiceIdx = -1
$scope.VOICES = Helper_Voices


$scope.setAudioPitch = function () {
	Helper_saveDB(Helper_AudioPitchKey, $scope.audioPitch);
}

$scope.setAudioRate = function () {
	Helper_saveDB(Helper_AudioRateKey, $scope.audioRate);
}

$scope.setAdjAudioTime = function () {
	Helper_saveDB(Helper_AdjAudioTimeKey, $scope.adjAudioTime);
}

$scope.saveSelectedVoiceIdx = function () {
	Helper_saveDB(Helper_SelectedVoiceIdx, $scope.selectedVoiceIdx);
}

$scope.loadDB = function () {
	$scope.VOICES = Helper_Voices
	$scope.audioPitch = Helper_loadFloat(Helper_AudioPitchKey, 1)
	$scope.audioRate = Helper_loadFloat(Helper_AudioRateKey, 0.8)
	$scope.adjAudioTime = Helper_loadInt(Helper_AdjAudioTimeKey, 8)
	$scope.selectedVoiceIdx  = Helper_loadInt(Helper_SelectedVoiceIdx, -1)
};

$scope.speechTest = function () {
	const paras = [
	"The person I'm closest to in my family is definitely my mum.",
	"We've always got on and we hardly ever fall out.",
	"I'm fine, thanks. And you?",
	"I'm а nеw student too!",
	"Thank you for coming today.",
	]
	var rd = Math.floor(Math.random() * (paras.length-1));
	Text2Speech(paras[rd])
}


$scope.$on('$viewContentLoaded', function(){
	$scope.loadDB();
});


});
