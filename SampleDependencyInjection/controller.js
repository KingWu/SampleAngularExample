/**
 * Created by dev-kingwu on 16/9/15.
 */

function Page1Controller($scope, PageTexts)
{
    $scope.someText = PageTexts.texts[0];
}

function Page2Controller($scope, PageTexts)
{
    $scope.someText = PageTexts.texts[1];
}

function Page3Controller($scope, PageTexts)
{
    $scope.someText = PageTexts.texts[2];
}