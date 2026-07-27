import { Routes } from '@angular/router';

import { Login } from './features/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { Products } from './features/products/products';
import { AddProduct } from './features/add-product/add-product';

import { MainLayout } from './layout/main-layout/main-layout';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [

  // Login page - no Header
  {
    path: 'login',
    component: Login
  },

  // All protected pages
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [

      {
        path: 'dashboard',
        component: Dashboard
      },

      {
        path: 'products',
        component: Products
      },

      {
        path: 'add-product',
        component: AddProduct
      }

    ]
  },

  // Default route
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];