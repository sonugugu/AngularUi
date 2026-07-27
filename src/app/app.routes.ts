import { Routes } from '@angular/router';

import { Login } from './features/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { Products } from './features/products/products';
import { AddProduct } from './features/add-product/add-product';



import { MainLayout } from './layout/main-layout/main-layout';
import { authGuard } from './auth/auth-guard';
import { AddCategory } from './features/category/add-category/add-category';
import { UpdateCategory } from './features/category/update-category/update-category';
import { DeleteCategory } from './features/category/delete-category/delete-category';
import { Categories } from './features/category/categories/categories';
import { About } from './features/about/about';
import { ContactUs } from './features/contact-us/contact-us';

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

      // Dashboard
      {
        path: 'dashboard',
        component: Dashboard
      },

      // Product List
      {
        path: 'products',
        component: Products
      },

      // Add Product
      {
        path: 'add-product',
        component: AddProduct
      },
      // Categories
      {
        path: 'categories',
        component: Categories
      },

      // Add Category
      {
        path: 'add-category',
        component: AddCategory
      },

      // Update Category
      {
        path: 'update-category',
        component: UpdateCategory
      },

      // Delete Category
      {
        path: 'delete-category',
        component: DeleteCategory
      },
      // About
  {
    path: 'about',
    component: About
  },

  // Contact Us
  {
    path: 'contact-us',
    component: ContactUs
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