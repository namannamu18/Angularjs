var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
 // Default student details
 $scope.students = [
 { name: 'Athri', cgpa: 9.8 },
 { name: 'Nachiketh', cgpa: 9.2 },
 { name: 'Mary Disoza', cgpa: 9.5 },
 { name: 'Md. Bilal', cgpa: 9.4 }
 // Add more students if needed
 ];
 });