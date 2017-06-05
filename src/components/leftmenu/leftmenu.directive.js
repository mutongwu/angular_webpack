'use strict';

import tpl from './leftmenu.html';

function leftmenuComponent() {
	

  var directive = {
    restrict: 'E',
    templateUrl: tpl,
    controller: LeftmenuComponent,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function LeftmenuComponent ($scope) {
      'ngInject';
      var user = {
          role: 'ADMIN'
      }
      var menuData = [{
            'displayName': '控制台',
            'parentId': 0,'children':[],
            'id': 9,
            'url': 'dashboard',
            'icon': 'home',
            'roles': ['ADMIN','OPERATOR']
        },{
            'displayName': '订单销售管理',
            'icon': 'list-alt',
            'parentId': 0,
            'id': 1,
            'children':[
                {
                    'displayName': '订单管理',
                    'icon': '',
                    'parentId': 1,'children':[],
                    'id': 10,
                    'url': 'order'
                },{
                    'displayName': '发货单管理',
                    'icon': '',
                    'parentId': 1,'children':[],
                    'id': 11,
                    'url': 'shippingOrder'
                }
            ],
            'roles': ['ADMIN','OPERATOR']
        },{
            'displayName': '机构客户管理',
            'parentId': 0,
            'children':[{
                'parentId': 7,
                'displayName': '机构管理',
                'id':71,
                'url': 'organization','children':[]
            },{
                'parentId': 7,
                'displayName': '客户管理',
                'id':72,
                'url': 'customer','children':[]
            },{
                'parentId': 7,
                'displayName': '渠道管理',
                'id':73,
                'url': 'channel','children':[]
            },{
                'displayName': '发票管理',
                'icon': '',
                'parentId': 7,'children':[],
                'id': 74,
                'url': 'invoice'
            },{
                'displayName': '收货地址管理',
                'icon': '',
                'parentId': 7,'children':[],
                'id': 75,
                'url': 'address'
                }
            ],
            'id': 7,
            'icon': 'user',
            'roles': ['ADMIN']
        },{
            'displayName': '产品类别管理',
            'parentId': 0,
            'id': 3,
            'icon': 'tags',
            'children':[{
                'displayName': '类别管理',
                'icon': '',
                'parentId': 3,'children':[],
                'id': 30,
                'url': 'category'
            },{
                'displayName': '产品管理',
                'icon': '',
                'parentId': 3,'children':[],
                'id': 31,
                'url': 'product'
            }],
            'roles': ['ADMIN','OPERATOR']
        },{
            'displayName': '系统设置',
            'parentId': 0,
            'id': 8,
            'url': '',
            'icon': 'cog',
            'children':[{
                'displayName': '系统变量',
                'icon': '',
                'parentId': 8,'children':[],
                'id': 81,
                'url': 'systemproperty'
            },{
                'displayName': '系统版本',
                'icon': '',
                'parentId': 8,'children':[],
                'id': 80,
                'url': 'version'
            }],
            'roles': ['ADMIN','OPERATOR']
        }];


    function getMenuDataFilterdByRole(data, role){
        var filteredMenuData = [];
        data.forEach(function(item){
            if(item.roles.indexOf(role) >= 0){
                filteredMenuData.push(item);
            }
        });
        return filteredMenuData;
    }

    $scope.menuData = getMenuDataFilterdByRole(menuData, user.role);
    $scope.activeItem = null;
    $scope.openSubmenu = false;
    $scope.isMenuCollapse = false;

    $scope.toggleMenu = function(menu,$event){
        if(!menu.children.length){
            $scope.activeItem = menu;  
        }else{
            menu._openSubmenu = !menu._openSubmenu;
        }
    	
        if($event){
            $event.stopPropagation();
        }
    };
    $scope.changePage = function(menu){
        // var name = 'ykzd.' + menu.url;
        // if(menu.url){
        //     QueryParamsService.clear(name);
        //     $state.go(name);
        // }
    };
   	$scope.collapseMenu = function(){
    	$scope.isMenuCollapse = !$scope.isMenuCollapse;	
    };
  }

}

export default leftmenuComponent;