/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    angular
        .module("contactManagerApp", ["ngMaterial", "ngMdIcons", "ngMessages"])
        .service("userService", ContactManagerApp.UserService)
        .controller("mainController", ContactManagerApp.MainController)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet("/app/assets/svg/avatars.svg", 128)
            .icon("google_plus", "/app/assets/svg/google_plus.svg", 24)
            .icon("hangouts", "/app/assets/svg/hangouts.svg", 24)
            .icon("twitter", "/app/assets/svg/twitter.svg", 24)
            .icon("phone", "/app/assets/svg/phone.svg", 24)
            .icon("menu", "/app/assets/svg/menu.svg", 24);
        $mdThemingProvider.theme("default")
            .primaryPalette("blue")
            .accentPalette("red");
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map