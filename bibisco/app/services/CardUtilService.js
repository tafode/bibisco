/*
 * Copyright (C) 2014-2018 Andrea Feccomandi
 *
 * Licensed under the terms of GNU GPL License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 * See the GNU General Public License for more details.
 *
 */

angular.module('bibiscoApp').service('CardUtilService', function ($timeout) {
  'use strict';

  return {
    focus: function (focuselement) {
      $timeout(function () {
        document.getElementById(focuselement).focus();
      }, 0);
    },

    focusElementInPath: function (path) {

      let pathparams = path.split('?')[1];
      if (pathparams) {
        let params = pathparams.split('&');
        for (let index = 0; index < params.length; index++) {
          let param = params[index];
          if (param.split('=')[0] === 'focus') {
            let focuselement = param.split('=')[1];
            this.focus(focuselement);
          }
          continue;
        }
      }
    },
  };
});
